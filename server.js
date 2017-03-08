import express from 'express';
import consign from 'consign';

const app = express();

const PORT = 3000;

app.set('json spaces', 4);

consign()
  .include('models')
  .then('routes')
  .into(app);

app.listen(PORT, () => console.log(`Confusedcius API - Port ${PORT}`));
