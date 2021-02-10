const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const AuthRoutes = require('./routes/routes');

app.use(BodyParser.json);

app.use('/api/auth', AuthRoutes);

app.set("port", process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log(`Auth service is running on port: ${app.get('port')}`);
});
