import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';

export const openApiResponseErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status && Array.isArray(err.errors)) {
    res.status(err.status).json({
      message: err.message,
      errors: err.errors,
    });
    return;
  }
  next(err);
};
