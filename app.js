import express from 'express';

import registerMiddlewares from './middlewares';
import handleErrors from './errors/handler';

import users from './routes/users';

const app = express();

// Register middleware
registerMiddlewares(app);

// Register routes
app.use('/users', users);

// Handle error
handleErrors(app);

export default app;
