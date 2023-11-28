const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/users')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swaggerDef');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})