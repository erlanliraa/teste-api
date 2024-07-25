import { BudgetForAllDays } from '@/types';
import { Card, Descriptions, DescriptionsProps } from 'antd';

interface Props {
  data: BudgetForAllDays;
  budget?: string;
}
export function Budget({ data, budget }: Props) {
  const budgetItems: DescriptionsProps['items'] = [
    {
      key: 'Atividades',
      label: 'Atividades',
      children: data.activities_average_cost,
    },
    {
      key: 'Alimentação',
      label: 'Alimentação',
      children: data.food_average_cost,
    },

    {
      key: 'Transporte',
      label: 'Transporte',
      children: data.transportation_average_cost,
    },
    {
      key: 'Hospedagem',
      label: 'Hospedagem',
      children: data.hosting_average_cost,
    },
    {
      key: '5',
      label: 'Total',
      span: 4,
      children: data.total_average_cost,
    },
  ];

  return (
    <Card className="w-full">
      <Descriptions
        layout="vertical"
        bordered
        title={`Orçamento de ${budget} para toda a viagem`}
        size="small"
        items={budgetItems}
      />
    </Card>
  );
}
