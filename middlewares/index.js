import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import morgan from 'morgan';

// Function for register middleware and configure options
const registerMiddlewares = (app) => {
  // Compression
  app.use(compression());

  // Helmet
  app.use(helmet());

  // Logger
  app.use(morgan('dev'));

  // Body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Cookie parser
  app.use(cookieParser());

  // Setting strong ETags
  app.set('etag', 'strong');
};

export default registerMiddlewares;
