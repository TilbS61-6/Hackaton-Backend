const express = require('express');
const app = express();

const AuthRoutes = require('./routes/routes');

const sequelize = require('./util/database');

app.use(express.json());

app.use('/api/auth', AuthRoutes);

app.set("port", process.env.PORT || 8080);
sequelize.sync().then(res => {
    console.log(res);
    app.listen(app.get('port'))
}).catch(error => {
    console.log(error);
});

