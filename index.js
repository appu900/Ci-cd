const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect('mongodb://localhost:27017/taskdb').then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
