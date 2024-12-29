const dbCon = require('./src/config/dbCon');
const { swaggerUi, swaggerDoc } = require('./src/config/swagger');
const app = require('./src/server');

require('dotenv').config();

dbCon().then((res) => {
    app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
