'use client';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });
import { Recommendations } from '@/components/Recommendations';
import { TravelTips } from '@/components/TravelTips';
import { Budget } from '@/components/Budget';
import { Header } from '@/components/Header';
import { ItineraryDays } from '@/components/ItineraryDays';
import { ItineraryResponse } from '@/types';
import axios from 'axios';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Alert, Skeleton } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { FieldType } from '@/components/Form';
import { mocked_response } from '@/mock_response';
import { format } from 'date-fns';
// import { mocked_response as itinerary } from '@/mock_response';

interface Props {
  itineraryInfo: FieldType | null;
  setItineraryInfo: (itineraryInfo: FieldType | null) => void;
}

export default function Itinerary({ itineraryInfo, setItineraryInfo }: Props) {
  const [map, setMap] = useState<L.Map | null>(null);
  console.log('itineraryInfo:', itineraryInfo)
  const getItinerary = async () => {
    try {
      try {
        const result = await axios.post('/api/generate-roadmap', {
          ...itineraryInfo,
          preferred_travel_styles: Object.values(
            itineraryInfo?.preferred_travel_styles ?? []
          ),
        });

        const response = result.data as ItineraryResponse;

        setCurrentDayOfWeek(response.itinerary[0].date_day);

        return response;
      } catch (error) {
        alert('Erro ao buscar itinerário');
        setItineraryInfo(null);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { data: itinerary, isFetching: loading } = useQuery({
    queryKey: [`get-itinerary`],
    queryFn: async () => await getItinerary(),
    refetchOnWindowFocus: false,
  });

  // const loading = false;
  // const itinerary = mocked_response;
  const [currentDayOfWeek, setCurrentDayOfWeek] = React.useState('');
  
  const onChangeItineraryDaysTab = (currrentDayOfWeek: string) => {
    setCurrentDayOfWeek(currrentDayOfWeek);
  };

  const filteredItinerary = itinerary?.itinerary?.find(
    (day) => day.date_day === currentDayOfWeek
  );
  if (!loading && !itinerary) {
    return (
      <div className="m-12 flex items-center justify-center">
        <Alert
          message="Error"
          description="Erro ao buscar itinerário"
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-3 min-h-screen justify-center w-full ">
      {loading || !itinerary ? (
        <Skeleton.Input
          style={{
            height: '10rem',
            width: '100%',
          }}
          active
        />
      ) : (
        <Header
          setItineraryInfo={setItineraryInfo}
          travelStyles={itineraryInfo?.preferred_travel_styles}
          destination={itineraryInfo?.destination}
          localCurrency={itinerary.local_currency}
          localCurrencySymbol={itinerary.local_currency_symbol}
          travelPeriod={itineraryInfo?.travel_period}
        />
      )}

      <div className="flex w-full gap-5 h-full">
        <div className="w-[65%] flex flex-col gap-3">
          {loading || !itinerary ? (
            <Skeleton.Input
              style={{
                height: '12rem',
                width: '100%',
              }}
              active
            />
          ) : (
            <Budget
              data={itinerary.budget_for_all_days}
              budget={itineraryInfo?.budget}
              symbol={itinerary.local_currency_symbol}
            />
          )}

          {loading || !itinerary ? (
            <Skeleton.Input
              style={{
                height: '30rem',
                width: '100%',
              }}
              active
            />
          ) : (
            <ItineraryDays
              data={itinerary.itinerary}
              onChange={onChangeItineraryDaysTab}
              map={map}
            />
          )}
          {loading || !itinerary ? (
            <Skeleton.Input
              style={{
                height: '18rem',
                width: '100%',
              }}
              active
            />
          ) : (
            <TravelTips data={itinerary.tips_and_observations} />
          )}
        </div>
        <div className="w-full flex flex-col gap-5 ">
          {loading || !itinerary ? (
            <Skeleton.Input
              style={{
                height: '30rem',
                width: '100%',
              }}
              active
            />
          ) : (
            <div className="h-[30rem]">
              <Map
                map={map}
                setMap={setMap}
                currentDayOfWeek={currentDayOfWeek}
                itinerary={filteredItinerary}
                accomodations={itinerary.recommended_accommodations}
                restaurants={itinerary.recommended_restaurants}
              />
            </div>
          )}
          {loading || !itinerary ? (
            <Skeleton.Input
              style={{
                height: '30.3rem',
                width: '100%',
              }}
              active
            />
          ) : (
            <div className="flex flex-row gap-5 ">
              <Recommendations
                map={map}
                title="Acomodações 🏨"
                data={itinerary.recommended_accommodations}
              />

              <Recommendations
                map={map}
                title="Restaurantes 🍝"
                data={itinerary.recommended_restaurants}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
