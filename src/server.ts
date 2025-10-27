import express, { NextFunction, Request, Response } from 'express';
import { User } from './models';
import { appRouter } from './routers/app.routes';
import { useOpenApiValidator } from './middlewares/openApi.middleware';
import { openApiResponseErrorHandler } from './middlewares/openApiResponseErrorHandler';
import { openApiRequestErrorHandler } from './middlewares/openApiRequestErrorHandler.middleware';
import { errorHandler } from './middlewares/ErrorHandler.middleware';

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
useOpenApiValidator(app);
app.use(appRouter);

app.use(openApiRequestErrorHandler);
app.use(openApiResponseErrorHandler);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
