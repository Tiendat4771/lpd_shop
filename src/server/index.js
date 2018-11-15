import express from 'express';
import setupMiddware from './middleware';
import connect from './db';
import restRouter from './api/restRouter';


const app = express();
setupMiddware(app);

// connect DB
connect();

// set up basic routing for route
app.use('/api', restRouter);

app.use(express.static('dist'));
app.listen(8080, () => console.log('Listening on port 8080!'));
