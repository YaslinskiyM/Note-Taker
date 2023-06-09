const express = require('express');
const routes = require('./routes');
const app = express();
const sequelize = require('./config/connection');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use(express.static('public'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
});
