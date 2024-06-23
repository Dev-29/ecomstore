const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).
        catch(error => handleError(error));
};

module.exports = connectDatabase;