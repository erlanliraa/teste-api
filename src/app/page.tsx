'use client';
import ItineraryForm, { FieldType } from '@/components/Form';
import { Card, Spin } from 'antd';
import { useEffect, useState } from 'react';
import '../app/css/form.css';
import './css/home.css';
import Itinerary from './itinerary/page';
import { Provider } from '@/components/Provider';
import { LoadScript } from '@react-google-maps/api';

import { Plus_Jakarta_Sans } from 'next/font/google';

const fontStyle = Plus_Jakarta_Sans({
  weight: '300',
  subsets: ['latin'],
});
export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);
  const [itineraryInfo, setItineraryInfo] = useState<FieldType | null>(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded)
    return (
      <div className="flex h-full w-full items-center justify-center min-h-screen">
        <Spin />
      </div>
    );
  return (
    <Provider>
      <main className={fontStyle.className}>
        <div className="flex min-h-screen flex-col bg-gradient-to-r from-slate-900 to-slate-700">
          <LoadScript
            googleMapsApiKey={'AIzaSyBtVM3Hv__-aJLFy76gC7A2AaQpYKG-1_U'}
            libraries={['places']}
          >
            {!itineraryInfo ? (
              <div className="Body">
                <div className="Box-Foto">
                  <div className="logo">
                    <img src="/img/logo.png" alt="Travel with AI Logo" />
                  </div>

                  <div className="form">
                    <ItineraryForm setItineraryInfo={setItineraryInfo} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex  justify-center items-center w-full">
                <Card className="w-full m-12">
                  {
                    <Itinerary
                      itineraryInfo={itineraryInfo}
                      setItineraryInfo={setItineraryInfo}
                    />
                  }
                </Card>
              </div>
            )}
          </LoadScript>
        </div>
      </main>
    </Provider>
  );
}
