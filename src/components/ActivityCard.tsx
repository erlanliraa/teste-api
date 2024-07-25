import { ItineraryActivity, ItineraryDay } from '@/types';
import { Description } from '@/utils/description';
import { Avatar, Card, Tag } from 'antd';
import { LatLngExpression } from 'leaflet';

type ActivityCardProps = {
  data: ItineraryActivity;
  type: 'morning' | 'afternoon' | 'night';
  onClick: (latLong: LatLngExpression) => void;
};

export const ActivityCard = ({ data, type, onClick }: ActivityCardProps) => {
  return (
    <Card
      loading={false}
      onClick={() =>
        onClick({
          lat: Number(data.latitude),
          lng: Number(data.longitude),
        })
      }
      className="w-full hover:bg-slate-200 transition-all duration-75 cursor-pointer mb-3"
    >
      <Card.Meta
        avatar={<Avatar src={`${type}.svg`} />}
        title={data.activity}
        description={
          <>
            <p className="my-2">{data.description}</p>
            <Description
              label="Horário"
              value={<Tag bordered>{data.time}</Tag>}
            />
            <div className="my-2">
              <Description
                label="Custo médio"
                value={
                  <Tag color="blue" bordered>
                    {data.average_cost}
                  </Tag>
                }
              />
            </div>
            <Description label="Endereço" value={data.address} />
          </>
        }
      />
    </Card>
  );
};
