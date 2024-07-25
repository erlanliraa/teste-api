import axios from 'axios';

interface Props {
  address: string;
  ISO3166_COUNTRY_CODE: string;
}

export const getSearchBox = async ({
  address,
  ISO3166_COUNTRY_CODE,
}: Props) => {
  const apiKey = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
  const response = await axios.get(
    `https://api.mapbox.com/search/searchbox/v1/forward?q=${address}&language=pt&country=${ISO3166_COUNTRY_CODE}&access_token=${apiKey}`
  );
  return response.data;
};
