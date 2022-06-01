
const express = require('express')

module.exports = async function customServer(app, settings) {
  const handle = app.getRequestHandler();
  await app.prepare();
  const server = express();

  settings.port = process.env.APP_SHELL_PORT;

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(Number(settings.port), settings.hostname);
}