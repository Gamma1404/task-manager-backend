const dbCon = require('./src/config/dbCon');
const app = require('./src/server');

require('dotenv').config();

dbCon().then((res) => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
