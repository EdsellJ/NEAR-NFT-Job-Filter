const express = require('express');
const cors = require('cors');
const mongoose = require('./database/mongoose');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.init();

app.use('/api', routes);

const PORT = 8080;

app.listen(PORT, () => {
	console.log(`Server is running in port ${PORT}`);
});
