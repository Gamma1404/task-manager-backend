const mongoose = require('mongoose');
require('dotenv').config();

const dbCon = async () => {
    await mongoose.connect(process.env.MONGO_URL)
}

module.exports = dbCon