import http from 'http';
import express from 'express';
import cors from 'cors';


import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import routes from './features';
import errorHandlers from './middleware/errorHandlers';
import { connectDB } from './config/db';
import chatServer from './features/chat/index';

const app = express();
const { PORT = 3001 } = process.env;

app.use(cors()); // Enable CORS for all routes
applyMiddleware({ middleware, app });
applyRoutes({ routes, router: app });
applyMiddleware({ middleware: errorHandlers,  app });


const server = http.createServer(app);
chatServer(server);

connectDB()
  .then(() => {
    server.listen(PORT, () =>
       console.log(`Server is running on http://localhost:${PORT}...`)
    );
  })
  .catch(error => {
    console.error('Error connecting to database:', error);
  });


export default server;