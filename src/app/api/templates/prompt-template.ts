export const promptTemplate = `
Você será um especialista em viagens, seu papel é criar roteiros de viagens a partir de algumas informações que serão informadas abaixo
Escolha as atividades mais requisitadas e famosas daquela localidade
Por favor, crie um roteiro de viagem detalhado com as seguintes informações:

- Destino de Interesse: {destination}
- Datas de viagem: {travel_period}
- Preferências de Atividades: {preferred_travel_styles}
- Orçamento Disponível: {budget}

- Certifique-se que as atividades sempre sejam no destino de interesse
- Certifique-se que as atividades em horários próximos sejam relativamente próximas
- Certifique-se que haja mais de uma atividade em cada período do dia e organize de forma que todos os horários do dia estejam ocupados,
as atividades devem começar às 9 horas e terminarem às 22 horas
- Sugira restaurantes perto das localidades das atividades para o almoço e jantar
- Sugira 3 recomendações de hospedagem
- Sugira 3 restaurantes de hospedagem
- dia_n é o dia 1 ... até n, onde n é o dia final
- Não retorne \`\`\`json\`\`\`
- Caso a atividade seja gratuita, utilize simbolo_moeda_local 0

O JSON deve seguir a estrutura abaixo:
{
  "intinerario": [
        {
          "dia_n": {
            "data": "Data do dia n",
            "manha": [
                {
                  "atividade": "Nome da atividade",
                  "local": "Localização da atividade",
                  "horario": "Horário da atividade",
                  "custo_aproximado": "simbolo_moeda_local valor_em_número"
                }
                ...
              ],
            "tarde": [
                {
                  "atividade": "Nome da atividade",
                  "local": "Localização da atividade",
                  "horario": "Horário da atividade",
                  "custo_aproximado": "simbolo_moeda_local valor_em_número"
                }
                ...
              ],
            "noite": [
                {
                  "atividade": "Nome da atividade",
                  "local": "Localização da atividade",
                  "horario": "Horário da atividade",
                  "custo_aproximado": "simbolo_moeda_local valor_em_número"
                }
                ...
              ]
          }
        }
        ...
    ],
    "recomendacoes_hospedagem": [
      {
        "nome": "Nome da Hospedagem",
        "localizacao": "Localização da hospedagem",
        "preco_medio": "simbolo_moeda_local valor_em_número",
        "comodidades": ["Comodidade 1", ..., "Comodidade n"]
      }
    ],
    "orcamento": {
        "hospedagem": "simbolo_moeda_local valor_em_número",
        "alimentacao": "simbolo_moeda_local valor_em_número",
        "atividades": "simbolo_moeda_local valor_em_número",
        "transporte": "simbolo_moeda_local valor_em_número",
        "total": "simbolo_moeda_local valor_em_número"
    },
    "restaurantes": [
      {
        "name": "Nome do restaurante",
        "description" :"Descrição do restaurante"
        "address": "Endreço do restaurante",
        "latitude": "Latitude do restaurante",
        "longitude": "Longitude do restaurante",
        "average_cost": "Preço médio do restaurante",
        "type": "Tipo do restaurante"
      }
    ],
    "dicas_observacoes": [
        "Dica ou observação 1",
        "Dica ou observação 2",
        "Dica ou observação 3",
        "Dica ou observação 4",
        "Dica ou observação 5"
    ],
    "ISO_3166_A3_COUNTRY_CODE": "Location currency",
    "local_currency_symbol": "Location currency symbol",
    "local_currency": "Three-letter country code based on ISO 3166-1 alpha-3 standard, representing the location's country",
}
`;

export const toolsRoadMap = {
  "type": "function",
  "function": {
      "name": "generate_detailed_itinerary",
      "description": "Generates a detailed travel itinerary including activities, lodging recommendations, and budgeting based on user inputs.",
      "parameters": {
          "type": "object",
          "properties": {
              "days": {  
                  "type": "array", 
                  "description": "Array of day objects for each day of travel",
                  "items": {
                      "type": "object",
                      "properties": {
                          "data": {
                              "type": "string",
                              "description": "The specific day the itinerary is being described"
                          },
                          "manha": {
                              "type": "array",
                              "description": "List of morning activities",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "atividade": {
                                          "type": "string",
                                          "description": "Name of the place to be visited"
                                      },
                                      "local": {
                                          "type": "string",
                                          "description": "Activity address"
                                      },
                                      "latitude": {
                                          "type": "number",
                                          "description": "Activity latitude"
                                      },
                                      "longitude": {
                                          "type": "number",
                                          "description": "Activity longitude"
                                      },
                                      "horario": {
                                          "type": "string",
                                          "description": "Time at which the activity will take place"
                                      },
                                      "custo_aproximado": {
                                          "type": "string",
                                          "description": "Approximate cost of the activity"
                                      }
                                  },
                                  "required": ["atividade", "local", "latitude", "longitude", "horario"]
                              }
                          },
                          "tarde": {
                              "type": "array",
                              "description": "List of afternoon activities",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "atividade": {
                                          "type": "string",
                                          "description": "Name of the place to be visited"
                                      },
                                      "local": {
                                          "type": "string",
                                          "description": "Activity address"
                                      },
                                      "latitude": {
                                          "type": "number",
                                          "description": "Activity latitude"
                                      },
                                      "longitude": {
                                          "type": "number",
                                          "description": "Activity longitude"
                                      },
                                      "horario": {
                                          "type": "string",
                                          "description": "Time at which the activity will take place"
                                      },
                                      "custo_aproximado": {
                                          "type": "string",
                                          "description": "Approximate cost of the activity"
                                      }
                                  },
                                  "required": ["atividade", "local", "latitude", "longitude", "horario"]
                              }
                          },
                          "noite": {
                              "type": "array",
                              "description": "List of evening activities",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "atividade": {
                                          "type": "string",
                                          "description": "Name of the place to be visited"
                                      },
                                      "local": {
                                          "type": "string",
                                          "description": "Activity address"
                                      },
                                      "latitude": {
                                          "type": "number",
                                          "description": "Activity latitude"
                                      },
                                      "longitude": {
                                          "type": "number",
                                          "description": "Activity longitude"
                                      },
                                      "horario": {
                                          "type": "string",
                                          "description": "Time at which the activity will take place"
                                      },
                                      "custo_aproximado": {
                                          "type": "string",
                                          "description": "Approximate cost of the activity"
                                      }
                                  },
                                  "required": ["atividade", "local", "latitude", "longitude", "horario"]
                              }
                          }
                      },
                      "required": ["data", "manha", "tarde", "noite"]
                  }
              }
          },
          "required": ["days"]
      }
  }
};

export const toolsHost = {
  "type": "function",
  "function": {
      "name": "generate_hosting_recommendations",
      "description": "Provides hosting recommendations based on user preferences.",
      "parameters": {
          "type": "object",
          "properties": {
              "recommendations": {
                  "type": "array",
                  "description": "List containing 3 objects with hosting recommendations",
                  "items": {
                      "type": "object",
                      "properties": {
                          "nome": {
                              "type": "string",
                              "description": "Accommodation name"
                          },
                          "descricao": {
                              "type": "string",
                              "description": "Description of accommodation"
                          },
                          "localizacao": {
                              "type": "string",
                              "description": "Accommodation address"
                          },
                          "latitude": {
                              "type": "number",
                              "description": "Accommodation latitude"
                          },
                          "longitude": {
                              "type": "number",
                              "description": "Accommodation longitude"
                          },
                          "precoMedio": {
                              "type": "string",
                              "description": "Average price per night"
                          },
                          "comodidades": {
                              "type": "array",
                              "description": "List of all the amenities the accommodation offers",
                              "items": {
                                  "type": "string"
                              }
                          },
                          "tipo": {
                            "type": "string",
                              "description": "Type of accommodation"
                          }
                      },
                      "required": ["nome", "localizacao", "descricao", "tipo", "latitude", "longitude", "precoMedio", "comodidades"]
                  }
              }
          },
          "required": ["recommendations"]
      }
  }
};

export const toolsBudget = {
  "type": "function",
  "function": {
      "name": "calculate_budget",
      "description": "Calculates the total budget for the trip based on input costs.",
      "parameters": {
          "type": "object",
          "properties": {
            "hospedagem": {
                  "type": "string",
                  "description": "Average expenditure with hosting"
              },
              "alimentacao": {
                  "type": "string",
                  "description": "Average expenditure on food"
              },
              "atividades": {
                  "type": "string",
                  "description": "Average expenditure with activities"
              },
              "transporte": {
                  "type": "string",
                  "description": "Average expenditure with transports"
              },
              "total": {
                  "type": "string",
                  "description": "Average total expenditure"
              }
          },
          "required": ["alimentacao", "ingressos", "transporte", "extrasCompras", "total"]
      }
  }
};

export const toolsTips = {
  "type": "function",
  "function": {
    "name": "provide_travel_tips",
    "description": "Offers various tips to enhance the travel experience.",
    "parameters": {
      "type": "object",
      "properties": {
        "tips": {
          "type": "array",
          "description": "List of travel tips",
          "items": {
            "type": "string",
            "description": "A single travel tip"
          }
        }
      },
      "required": ["tips"]
    }
  }
};

export const toolsRestaurants = {
  "type": "function",
  "function": {
      "name": "provide_list_restaurants",
      "description": "Provides restaurant recommendations based on user preferences.",
      "parameters": {
          "type": "object",
          "properties": {
              "recommendations": {
                  "type": "array",
                  "description": "List containing 3 objects with restaurants recommendations",
                  "items": {
                      "type": "object",
                      "properties": {
                          "nome": {
                              "type": "string",
                              "description": "Restaurant name"
                          },
                          "descricao": {
                              "type": "string",
                              "description": "Description of Restaurant"
                          },
                          "localizacao": {
                              "type": "string",
                              "description": "Restaurant address"
                          },
                          "latitude": {
                              "type": "number",
                              "description": "Restaurant latitude"
                          },
                          "longitude": {
                              "type": "number",
                              "description": "Restaurant longitude"
                          },
                          "precoMedio": {
                              "type": "string",
                              "description": "Average cost per meal at the restaurant"
                          },
                          "tipo": {
                            "type": "string",
                              "description": "Type of restaurant"
                          }
                      },
                      "required": ["nome", "localizacao", "descricao", "tipo", "latitude", "longitude", "precoMedio"]
                  }
              }
          },
          "required": ["recommendations"]
      }
  }
};

export const toolsSymbol = {
  "type": "function",
  "function": {
      "name": "get_coin",
      "description": "Get the currency name, the coin symbol and country code",
      "parameters": {
          "type": "object",
          "properties": {
              "local_currency": {
                  "type": "string",
                  "description": "Location currency"
              },
              "local_currency_symbol": {
                  "type": "string",
                  "description": "Location currency symbol"
              },
              "ISO_3166_A3_COUNTRY_CODE": {
                "type": "string",
                "description": "Three-letter country code based on ISO 3166-1 alpha-3 standard, representing the location's country."
              }
          },
          "required": ["local_currency", "local_currency_symbol", "ISO_3166_A3_COUNTRY_CODE"]
      }
  }
};