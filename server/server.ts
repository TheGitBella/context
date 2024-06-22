import express, { Request, Response } from 'express';
import cors from 'cors';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: 'sk-proj-AvLzEr6xmPVT9Gyvn9rqT3BlbkFJipvrjYHuj1mKnmHkPh4f',
});

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('API do OpenAI está funcionando!');
});

app.post('/chat', async (req: Request, res: Response) => {
  const { message } = req.body;

  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
      n: 1,
      stop: null,
      temperature: 0.7,
    });
    res.json({ response: response.choices[0].text.trim() });
  } catch (error) {
    console.error('Erro ao obter resposta da API do OpenAI:', error);
    res.status(500).json({ error: 'Erro ao obter resposta da API do OpenAI' });
  }
});

const PORT = process.env['PORT'] || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
