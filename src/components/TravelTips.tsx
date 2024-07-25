import { Card, List } from 'antd';

interface Props {
  data: string[];
}
export function TravelTips({ data }: Props) {
  return (
    <Card title="Dicas de viagem 💡">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className=" hover:bg-slate-200 transition-all duration-75 cursor-pointer rounded-lg ">
            <List.Item.Meta
              className="px-3 "
              title={
                <div className="text-neutral-700 ">
                  • {'  '} {item}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
