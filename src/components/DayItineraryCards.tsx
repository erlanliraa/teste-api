'use client';

import { ItineraryDay } from '@/types';
import { Card, Flex, Timeline } from 'antd';
import { ActivityCard } from './ActivityCard';
import { LatLngExpression } from 'leaflet';
import { Fragment } from 'react';

type Props = {
  map: L.Map | null;
} & ItineraryDay;

export default function DayItineraryCards({
  afternoon,
  date_day,
  morning,
  night,
  map,
}: Props) {
  const handleOnClick = (latLong: LatLngExpression) => {
    map?.flyTo(latLong, 18);
  };
  return (
    <Flex
      gap="middle"
      align="start"
      vertical
      style={{
        overflow: 'auto',
        maxHeight: '40rem',
        width: '100%',
      }}
    >
      <Card className="w-full " title={'Manhã'}>
        {morning.map((activities, index) => (
          <Fragment key={`${activities.address}-${index}`}>
            <ActivityCard
              onClick={handleOnClick}
              data={activities}
              type="morning"
            />
          </Fragment>
        ))}
      </Card>
      <Card className="w-full" title={'Tarde'}>
        {afternoon.map((activities, index) => (
          <Fragment key={`${activities.address}-${index}`}>
            <ActivityCard
              onClick={handleOnClick}
              data={activities}
              type="afternoon"
            />
          </Fragment>
        ))}
      </Card>
      <Card className="w-full" title={'Noite'}>
        {night.map((activities, index) => (
          <Fragment key={`${activities.address}-${index}`}>
            <ActivityCard
              onClick={handleOnClick}
              data={activities}
              type="night"
            />
          </Fragment>
        ))}
      </Card>
    </Flex>
  );
}
