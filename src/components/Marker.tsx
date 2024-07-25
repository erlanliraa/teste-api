import { Description } from '@/utils/description';
import { DivIcon, Icon, IconOptions, LatLngExpression } from 'leaflet';
import { Fragment } from 'react';
import { Popup, Marker as LMarker } from 'react-leaflet';

interface Props {
  address: string;
  latLong: LatLngExpression;
  icon: Icon<IconOptions> | DivIcon | undefined;
  activity: string;
  averageCost: string;
}
export default function Marker({
  address,
  latLong,
  icon,
  activity,
  averageCost,
}: Props) {
  return (
    <LMarker icon={icon} position={latLong}>
      <Popup>
        <Description label={'Nome'} value={activity} />
        <Description label={'Custo médio'} value={averageCost} />
        <Description label={'Endereço'} value={address} />
      </Popup>
    </LMarker>
  );
}
