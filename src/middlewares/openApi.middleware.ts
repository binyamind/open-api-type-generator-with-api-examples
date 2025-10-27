import path from 'path';
import * as OpenApiValidator from 'express-openapi-validator';
import { Express } from 'express';

export const useOpenApiValidator = async (app: Express) => {
  app.use(
    OpenApiValidator.middleware({
      apiSpec: path.join(__dirname, '../contracts/contract.swagger.yaml'),
      validateRequests: {
        removeAdditional: 'failing',
      },
      validateResponses: {
        removeAdditional: 'failing',
      },
      // validateApiSpec: true,
    })
  );
};
