const mongoose = require("mongoose");
const color = require("colors");
const { LOGGER } = require("../common/logger");

const connectDatabase = async () => {
   try {
      const connection = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      LOGGER.info(`mongo has connected - ${connection.connection.host}`)
      console.log(`mongo has connected - ${connection.connection.host}`.blue);
   } catch (e) {
      LOGGER.info(`Oops!! something went wrong,  - ${e.message}`)
      console.log(`Oops!! something went wrong,  - ${e.message}`.red.bold);
      process.exit();
   }
};

module.exports = connectDatabase;
