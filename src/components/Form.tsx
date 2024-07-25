'use client';

import React, { useState } from 'react';
import {
  DatePicker,
  FormProps,
  InputNumberProps,
  Select,
  Slider,
  Space,
  Tooltip,
} from 'antd';
import { Button, Form, Input } from 'antd';
import { Dayjs } from 'dayjs';
import { Autocomplete } from '@react-google-maps/api';
import '../app/css/form.css';

export type FieldType = {
  travel_period: string;
  budget: string;
  destination: string;
  preferred_travel_styles: { [key: string]: string };
  api_openai: string;
};

const travelStyleOptions = {
  'Aventura/Ao ar livre':
    'Para aqueles interessados em caminhadas, acampamentos, esportes aquáticos e outras atividades aventureiras.',
  'Cultural/Histórico':
    'Foco em museus, sítios históricos e experiências culturais.',
  Luxo: 'Hotéis de alto padrão, gastronomia refinada e experiências exclusivas.',
  Econômico:
    'Acomodações acessíveis, atividades econômicas e opções de refeições econômicas.',
  Familiar:
    'Atividades adequadas para todas as idades, acomodações adequadas para crianças e atrações.',
  Romântico:
    'Escapadas românticas, atividades para casais, experiências especiais para dois.',
  'Bem-estar/Relaxamento':
    'Retiro de spa, atividades de bem-estar, sessões de ioga e locais serenos.',
  'Comida e Bebida':
    'Tours culinários, degustações de vinhos, experiências de culinária local.',
  Compras: 'Foco em distritos de compras, mercados e lojas locais únicas.',
  'Vida Noturna': 'Clubes, bares, música ao vivo e outras atividades noturnas.',
  'Natureza e Vida Selvagem':
    'Parques nacionais, safáris de vida selvagem, jardins botânicos.',
  'Festival/Eventos':
    'Participação em festivais locais, concertos, eventos esportivos ou outros grandes eventos.',
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

interface Props {
  setItineraryInfo: (itineraryInfo: any) => void;
}
const ItineraryForm: React.FC<Props> = ({ setItineraryInfo }) => {
  const [form] = Form.useForm();
  const [sliderInputValue, setSliderInputValue] = useState(1);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [address, setAddress] = useState('');

  const onChangeSlider: InputNumberProps['onChange'] = (newValue) => {
    setSliderInputValue(newValue as number);
  };

  const { RangePicker } = DatePicker;

  const onLoad = (autoC: google.maps.places.Autocomplete) => {
    setAutocomplete(autoC);
  };

  const onFinish: FormProps<any>['onFinish'] = async (values) => {
    const preferredTravelStyles = Object.fromEntries(
      Object.entries(travelStyleOptions).filter(([value]) =>
        values.preferred_travel_styles.includes(value)
      )
    );

    const data = {
      ...values,
      travel_period: (values.travel_period as any).map((date: Dayjs) =>
        date.format('YYYY-MM-DD')
      ),
      preferred_travel_styles: preferredTravelStyles,
    };
    setItineraryInfo(data);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const addressName = place.name ?? '';
      setAddress(addressName);
      form.setFieldsValue({ destination: addressName });
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <div className="form-container">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item<FieldType>
          label="Destino"
          name="destination"
          rules={[{ required: true, message: 'Por favor digite uma cidade!' }]}
          className="form-item"
        >
          <Autocomplete
            fields={['formatted_address', 'geometry', 'name', 'state']}
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <Input
              value={address}
              onChange={(e) => {
                const newValue = e.target.value;
                setAddress(newValue);
                form.setFieldsValue({ destination: newValue });
              }}
              placeholder="Rio de Janeiro, RJ..."
              className="custom-input"
              variant="borderless"
            />
          </Autocomplete>
        </Form.Item>

        <Form.Item<FieldType>
          label="Período da viagem"
          name="travel_period"
          rules={[{ required: true, message: 'Por favor selecione uma data!' }]}
          className="form-item"
        >
          <RangePicker
            variant="borderless"
            placeholder={['Data Início', 'Data Final']}
            format="DD/MM/YYYY"
            className="custom-input"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Estilos de viagem preferidos"
          name="preferred_travel_styles"
          rules={[
            {
              required: true,
              message: 'Por favor selecione no mínimo um estilo!',
            },
          ]}
          className="form-item"
        >
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            maxCount={3}
            placeholder="Escolha seu tipo de viagem..."
            dropdownStyle={{
              zIndex: 100000,
            }}
            options={Object.entries(travelStyleOptions).map(
              ([value, label]) => ({
                value,
                key: value,
                title: label,
              })
            )}
            optionRender={(option) => (
              <Tooltip
                autoAdjustOverflow
                overlayStyle={{
                  zIndex: 100000,
                }}
                overlayInnerStyle={{
                  transform: 'translate(100px, 300px)',
                }}
                style={{}}
                className="w-full"
                placement="left"
                arrow={false}
                title={option.data.title}
              >
                <Space style={{}}> {option.value}</Space>
              </Tooltip>
            )}
            className="custom-input-dropdown"
          />
        </Form.Item>
        <Form.Item<FieldType>
          className="form-item"
          label="Api Key"
          name="api_openai"
          rules={[
            { required: true, message: 'Por favor selecione a api key!' },
          ]}
        >
          <Input className="custom-input" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Orçamento"
          name="budget"
          className="form-item"
        >
          <Slider
            min={500}
            max={20000}
            onChange={onChangeSlider}
            value={typeof sliderInputValue === 'number' ? sliderInputValue : 0}
            tooltip={{
              open: true,
              style: {
                zIndex: 1,
              },
              formatter: (value) => `R$${value},00`,
            }}
            className="custom-slider"
          />
        </Form.Item>

        <Form.Item
          className="form-item centered-button"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit">
            Descubra o seu plano
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ItineraryForm;
