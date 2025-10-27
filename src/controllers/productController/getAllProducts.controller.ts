import { Request, Response, NextFunction } from 'express';
import {
  ResponseType,
  SendSuccessWithPluginResponse,
} from '../../generics/SendSuccessWithPluginResponse';
import { Items, Product, ProductsSuccess, SendError } from '../../models';
import { toPluginResponse } from '../../generics/toPluginResponse';
import { getAllProductsMapper } from '../../mappers/getAllProducsMapper';
import { PluginResponse } from '../../generics/GenericPluginReponses';
import { InternalServerError } from 'express-openapi-validator/dist/openapi.validator';
import { ApiResponseFactory } from '../../generics/ApiResponseFactory';

export const getAllProducts = async (
  req: Request,
  res: Response<SendSuccessWithPluginResponse<Items>>,
  next: NextFunction
) => {
  const rand = Math.floor(Math.random() * 2);

  if (rand === 0) {
    const error: SendError = {
      status: 'error',
      code: 500,
      message: 'Product not found',
      data: {},
    };
    return next(error);
  }

  res.json(
    toPluginResponse<Items>(
      { products: getAllProductsMapper([]) },
      'get all products'
    )
  );
};
