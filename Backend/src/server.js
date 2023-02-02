require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3000;
const Console = console.log(`Online na porta, ${port}`);

app.listen(port, () => Console);
