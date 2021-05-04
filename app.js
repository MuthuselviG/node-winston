const express = require("express");
const app = express();
const logger = require("./config/logger");
const router = express.Router();


app.listen(8000);
logger.info("Server started on : " + 8000);

logger.info("Info log");
logger.error("Error log");
logger.debug("Debug log");
