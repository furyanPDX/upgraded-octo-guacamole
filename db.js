const mongoose = require('mongoose');
const settings = require('./config/settings');

mongoose.connect(settings.mongodbUri)