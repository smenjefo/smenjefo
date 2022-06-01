import express from 'express';

const app = express();
const PORT = Number(process.env['MFE_FIGHT_REGISTRATION_PORT']);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});