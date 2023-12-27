const mongoose = require("mongoose");
const color = require("colors");
const { LOGGER } = require("../common/logger");

const connectDatabase = async () => {
   try {
      const connection = await mongoose.connect(process.env.MONGO_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log(`mongo has connected - ${connection.connection.host}`.blue);
      LOGGER.info(`mongo has connected - ${connection.connection.host}`)
   } catch (e) {
      console.log(`Oops!! something went wrong,  - ${e.message}`.red.bold);
      LOGGER.error(`Oops!! something went wrong,  - ${e.message}`)
      process.exit();
   }
};

module.exports = connectDatabase;
