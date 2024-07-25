import { Recommendations as IRecommendations } from '@/types';
import { Description } from '@/utils/description';
import { Card, List, Tag } from 'antd';
import { LatLngExpression } from 'leaflet';

interface Props {
  data: IRecommendations[];
  title: string;
  map: L.Map | null;
}

export function Recommendations({ data, title, map }: Props) {
  const handleOnClick = (latLong: LatLngExpression) => {
    map?.flyTo(latLong, 18);
  };

  return (
    <Card className="w-1/2 " title={title}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            className=" hover:bg-slate-200 transition-all duration-75 cursor-pointer rounded-lg "
            onClick={() =>
              handleOnClick({
                lat: Number(item.latitude),
                lng: Number(item.longitude),
              })
            }
          >
            <List.Item.Meta
              className="px-3 "
              title={
                <div className="text-neutral-700 font-bold">{item.name}</div>
              }
              description={
                <div>
                  <p className="my-2">{item.description}</p>

                  <Description label="Tipo" value={<Tag> {item.type}</Tag>} />
                  <div className="my-2">
                    <Description
                      label="Custo médio"
                      value={
                        <Tag color="blue" bordered>
                          {item.average_cost}
                        </Tag>
                      }
                    />
                  </div>

                  <Description
                    textAlign="right"
                    label="Endereço"
                    value={item.address}
                  />
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
