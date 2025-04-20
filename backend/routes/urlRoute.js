const express = require("express");
const nanoid = require("nanoid");
const { Url } = require("../models/urlModels");
const { UrlController } = require("../controllers/urlController");
const app = express.Router();



app.post('/', UrlController.addUrl);
app.get('/:shortCode', UrlController.getUrls);
app.put('/:shortCode',UrlController.updateUrls );
app.delete('/:shortCode',UrlController.deleteUrls);
app.get('/:shortCode/stats', UrlController.getStates);


module.exports = app;