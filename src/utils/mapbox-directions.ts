import axios from 'axios';

interface Props {
  latLongs: string
}
export const getDirections = async ({ latLongs }: Props) => {
  // 'mapbox/driving', 'mapbox/walking', 'mapbox/cycling', 'mapbox/driving-traffic'
  const profile = 'mapbox/driving';
  const token = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;

  const url2 = `https://api.mapbox.com/directions/v5/${profile}/${latLongs}?geometries=geojson&access_token=${token}`;
  const response = await axios.get(url2);

  return response.data;
};
