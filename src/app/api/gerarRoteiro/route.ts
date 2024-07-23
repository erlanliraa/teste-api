// app/api/gerarRoteiro/route.ts
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// Template de prompt
const promptTemplate = `
Você será um especialista em viagens, seu papel é criar roteiros de viagens a partir de algumas informações que serão informadas abaixo
Escolha as atividades mais requisitadas e famosas daquela localidade
Por favor, crie um roteiro de viagem detalhado com as seguintes informações:

- Destinos de Interesse: , principais pontos turísticos, {destinos_interesse}
- Recomendação de Hospedagem: {recomendacao_hospedagem}
- Datas de viagem: {data_inicio}
- Preferências de Atividades: {preferencias_atividades}
- Orçamento Disponível: {orcamento_disponivel}
- Necessidades Especiais: {necessidades_especiais}

- Certifique-se que as atividades em horários próximos sejam relativamente próximas
- Certifique-se que haja mais de uma atividade em cada período do dia e organize de forma que todos os horários do dia estejam ocupados,
as atividades devem começar as 9 horas e terminarem as 22 horas
- Sugira restaurantes perto das localidades das atividades para o almoço e jantar
- Sugira ao menos 3 recomendações de hospedagem
- dia_n é o dia 1 ... até n, onde n é o dia final
- Não retorne \`\`\`json\`\`\`
- Caso a atividade seja gratuita, utilize simbolo_moeda_local 0

O JSON deve seguir a estrutura abaixo:
{{
  "roteiro": {{
    "dias": [
        "dia_n" {{
          "data": "Data do dia n",
          "manha": [
              {{
                "atividade": "Nome da atividade",
                "local": "Local da atividade",
                "latitude": "Latitude do local",
                "longitude": "Longitude do local",
                "horario": "Horário da atividade",
                "custo_aproximado": "simbolo_moeda_local valor_em_número"
              }},
              ...
            ]
          "tarde": [
              {{
                "atividade": "Nome da atividade",
                "local": "Local da atividade",
                "latitude": "Latitude do local",
                "longitude": "Longitude do local",
                "horario": "Horário da atividade",
                "custo_aproximado": "simbolo_moeda_local valor_em_número"
              }},
              ...
            ]
            "noite": [
              {{
                "atividade": "Nome da atividade",
                "local": "Local da atividade",
                "latitude": "Latitude do local",
                "longitude": "Longitude do local",
                "horario": "Horário da atividade",
                "custo_aproximado": "simbolo_moeda_local valor_em_número"
              }},
              ...
            ]
        }},
        ...
    ],
    "recomendacoes_hospedagem": [
      {{
        "nome": "Nome da Hospedagem",
        "localizacao": "Localização da hospedagem",
        "latitude": "Latitude da hospedagem",
        "longitude": "Longitude da hospedagem",
        "preco_medio": "simbolo_moeda_local valor_em_número",
        "comodidades": ["Comodidade 1", ..., "Comodidade n"]
      }},
    ],
    "orcamento": {{
        "media_das_hospedagens": "simbolo_moeda_local valor_em_número",
        "alimentacao": "simbolo_moeda_local valor_em_número",
        "ingressos": "simbolo_moeda_local valor_em_número",
        "transporte": "simbolo_moeda_local valor_em_número",
        "extras_compras": "simbolo_moeda_local valor_em_número",
        "total": "simbolo_moeda_local valor_em_número"
    }},
    "dicas_observacoes": {{
        "1": "Dica ou observação 1",
        "2": "Dica ou observação 2",
        "3": "Dica ou observação 3",
        "4": "Dica ou observação 4",
        "5": "Dica ou observação 5"
    }}
 }}
}}
`;

export async function POST(request: Request) {
  const { 
    destinos_interesse, 
    recomendacao_hospedagem, 
    data_inicio, 
    preferencias_atividades, 
    orcamento_disponivel, 
    necessidades_especiais,
    apiKey 
  } = await request.json();

  // Verifica se a chave da API foi fornecida
  if (!apiKey) {
    return NextResponse.json({ error: 'API key is required' }, { status: 400 });
  }

  const prompt = promptTemplate
    .replace('{destinos_interesse}', destinos_interesse)
    .replace('{recomendacao_hospedagem}', recomendacao_hospedagem)
    .replace('{data_inicio}', data_inicio)
    .replace('{preferencias_atividades}', preferencias_atividades)
    .replace('{orcamento_disponivel}', orcamento_disponivel)
    .replace('{necessidades_especiais}', necessidades_especiais);

  try {
    const openai = new OpenAI({ apiKey });

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }]
    });

    const respostaTexto = response.choices[0].message.content;
    return NextResponse.json({ roteiro: respostaTexto });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao gerar o roteiro' }, { status: 500 });
  }
}
