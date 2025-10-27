import { Request, Response, NextFunction } from 'express';
import { CreateOrPutSuccessResponse, Product } from '../../models';
import { SendSuccessWithPluginResponse } from '../../generics/SendSuccessWithPluginResponse';
import { toPluginResponse } from '../../generics/toPluginResponse';
import { createProductMapper } from '../../mappers/createProduct.mapper';

export const createProduct = async (
  req: Request<null, {}, Product>,
  res: Response<SendSuccessWithPluginResponse<CreateOrPutSuccessResponse>>,
  next: NextFunction
) => {
  // db operations
  res
    .status(201)
    .json(
      toPluginResponse<CreateOrPutSuccessResponse>(
        { id: createProductMapper(req.body) },
        'create product'
      )
    );
};
