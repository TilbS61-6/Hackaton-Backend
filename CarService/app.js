const express = require('express');
const app = express();
const CarRoutes = require('./routes/routes');
const sequelize = require('./util/database')

app.use(express.json());

app.use('/api/car', CarRoutes);

app.set("port", process.env.PORT || 8080);

sequelize.sync().then(res => {
    console.log(res);
    app.listen(app.get('port'))
}).catch(error => {
    console.log(error);
});

