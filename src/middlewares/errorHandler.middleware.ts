import { Request, Response, NextFunction } from 'express';
import { SendError } from '../models';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response<SendError>,
  next: NextFunction
) => {
  console.log('ssssssssssss', err);
  const statusCode = err.status || 500;
  console.log(err);
  const error: SendError = {
    code: err.code,
    status: 'fail',
    data: {},
    message: 'error',
  };

  res.status(error.code).json(error);
};
