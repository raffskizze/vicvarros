import express from 'express';

import registerMiddlewares from './middlewares';
import handleErrors from './errors';

import index from './routes/index';
import users from './routes/users';

const app = express();

/**
 * Register middleware
 */
registerMiddlewares(app);

/**
 * Register routes
 */
app.use('/', index);
app.use('/users', users);

/**
 * Handle errors
 */
handleErrors(app);

export default app;
