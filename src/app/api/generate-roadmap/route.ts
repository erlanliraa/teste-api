// @ts-nocheck
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { ApiRequestBody } from '../templates/types';
import {
  toolsRoadMap,
  toolsHost,
  toolsBudget,
  toolsTips,
  promptTemplate,
  toolsRestaurants,
  toolsSymbol,
} from '../templates/prompt-template';
import { expectedJsonSchema } from '../templates/expected_json_schema';

function formatTravelPlan(toolCalls: any[]): any {
  const itinerary = {
    ISO_3166_A3_COUNTRY_CODE: '',
    local_currency_symbol: '',
    local_currency: '',
    itinerary: [],
    tips_and_observations: [],
    recommended_accommodations: [],
    recommended_restaurants: [],
    budget_for_all_days: {},
  };

  for (const toolCall of toolCalls || []) {
    const { name, arguments: args } = toolCall.function;
    const parsedArgs = JSON.parse(args);

    if (name === 'generate_detailed_itinerary') {
      for (const day of parsedArgs.days) {
        const formattedDay = {
          date_day: day.date_day,
          morning: day.morning.map((activity) => ({
            activity: activity.activity,
            description: activity.description,
            address: activity.address,
            time: activity.time,
            longitude: activity.longitude,
            latitude: activity.latitude,
            average_cost: activity.average_cost,
          })),
          afternoon: day.afternoon.map((activity) => ({
            activity: activity.activity,
            description: activity.description,
            address: activity.address,
            time: activity.time,
            longitude: activity.longitude,
            latitude: activity.latitude,
            average_cost: activity.average_cost,
          })),
          night: day.night.map((activity) => ({
            activity: activity.activity,
            description: activity.description,
            address: activity.address,
            time: activity.time,
            longitude: activity.longitude,
            latitude: activity.latitude,
            average_cost: activity.average_cost,
          })),
        };
        itinerary.itinerary.push(formattedDay);
      }
    } else if (name === 'generate_hosting_recommendations') {
      for (const recommendation of parsedArgs.recommendations) {
        itinerary.recommended_accommodations.push({
          name: recommendation.name,
          description: recommendation.description,
          address: recommendation.address,
          latitude: recommendation.latitude,
          longitude: recommendation.longitude,
          average_cost: recommendation.average_cost,
          type: recommendation.type,
        });
      }
    } else if (name === 'calculate_budget') {
      itinerary.budget_for_all_days = {
        hosting_average_cost: parsedArgs.hosting_average_cost,
        food_average_cost: parsedArgs.food_average_cost,
        activities_average_cost: parsedArgs.activities_average_cost,
        transportation_average_cost: parsedArgs.transportation_average_cost,
        total_average_cost: parsedArgs.total_average_cost,
      };
    } else if (name === 'provide_travel_tips') {
      itinerary.tips_and_observations = parsedArgs.tips;
    } else if (name === 'provide_list_restaurants') {
      for (const recommendation of parsedArgs.recommendations) {
        itinerary.recommended_restaurants.push({
          name: recommendation.name,
          description: recommendation.description,
          address: recommendation.address,
          latitude: recommendation.latitude,
          longitude: recommendation.longitude,
          average_cost: recommendation.average_cost,
          type: recommendation.type,
        });
      }
    } else if (name === 'get_coin') {
      itinerary.local_currency = parsedArgs.local_currency;
      itinerary.local_currency_symbol = parsedArgs.local_currency_symbol;
      itinerary.ISO_3166_A3_COUNTRY_CODE = parsedArgs.ISO_3166_A3_COUNTRY_CODE;
    }
  }

  return itinerary;
}

// Funcao para gerar o roteiro, fazendo a requisiao para a openAI
async function generateRoteiro(
  prompt: string,
  apiKey: string
): Promise<string> {
  const openai = new OpenAI({ apiKey });

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      // tools: [
      //   toolsRoadMap,
      //   toolsHost,
      //   toolsBudget,
      //   toolsTips,
      //   toolsRestaurants,
      //   toolsSymbol,
      // ],
      // tool_choice: 'required',
    });
    console.log('response:', response);

    const parsedJson = (response.choices[0].message.content)
    console.log('parsedJson:', parsedJson)
    console.log('parsedJson:', parsedJson)
    const json_output = response.choices[0]?.message.tool_calls || [];
    return JSON.parse(parsedJson);
  } catch (error) {
    console.error('Erro ao gerar o roteiro:', error);
    throw error;
  }
}

export const maxDuration = 60;
export const dynamic = 'force-dynamic';
export async function POST(request: Request): Promise<NextResponse> {
  const {
    travel_period,
    budget,
    destination,
    preferred_travel_styles,
    api_openai,
  }: ApiRequestBody = await request.json();

  console.log(
    'TROUXE: ',
    travel_period,
    budget,
    destination,
    preferred_travel_styles
  );

  // Verifica se as chaves das APIs foram fornecidas
  if (!api_openai) {
    return NextResponse.json(
      { error: 'API keys are required' },
      { status: 400 }
    );
  }

  let prompt = promptTemplate
    .replace('{travel_period}', travel_period)
    .replace('{budget}', budget)
    .replace('{destination}', destination)
    .replace('{preferred_travel_styles}', preferred_travel_styles)
    .replace('{expected_json_schema}', JSON.stringify(expectedJsonSchema));
  console.log('prompt:', prompt);
  try {
    const response_json = await generateRoteiro(prompt, api_openai);
    console.log(response_json);
    return NextResponse.json(response_json);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erro ao gerar o roteiro' },
      { status: 500 }
    );
  }
}
