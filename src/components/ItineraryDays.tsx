import { ItineraryDay } from '@/types';
import { Card, Tabs, TabsProps } from 'antd';
import { parseISO, format } from 'date-fns';

import DayItineraryCards from './DayItineraryCards';

interface Props {
  data: ItineraryDay[];
  map: L.Map | null;
  onChange: (key: string) => void;
}
export function ItineraryDays({ data, onChange, map }: Props) {
  const items: TabsProps['items'] = data.map((day, index) => ({
    key: day.date_day,
    label: ` ${format(parseISO(day.date_day), 'dd/MM')}`,
    children: <DayItineraryCards {...day} map={map} />,
  }));

  return (
    <Card>
      <Tabs
        type="line"
        defaultActiveKey="0"
        items={items}
        onChange={(key) => {
          onChange(key);
        }}
      />
    </Card>
  );
}
