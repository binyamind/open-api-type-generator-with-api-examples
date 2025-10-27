import { ErrorRequestHandler, Response } from 'express';

export const openApiRequestErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res: Response,
  next
) => {
  if (err.status && err.errors) {
    res.status(err.status).json({
      status: 'fail',
      message: err.message,
      errors: err.errors,
    });
  } else {
    next(err);
  }
};
