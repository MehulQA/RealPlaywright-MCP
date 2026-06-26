import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.responses.create({
    model: 'gpt-5-mini',
    input: 'Say Hello from OpenAI',
  });

  console.log(response.output_text);
}

main();