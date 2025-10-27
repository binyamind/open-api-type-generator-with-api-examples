import { SendError } from '../models';
import { PluginResponse } from './GenericPluginReponses';
import { SendSuccessWithPluginResponse } from './SendSuccessWithPluginResponse';

export const ApiResponseFactory = {
  success<T extends PluginResponse<T>>(
    data: T
  ): SendSuccessWithPluginResponse<T> {
    return {
      status: 'success',
      data,
    };
  },

  error(code: number, message: string, data: object = {}): SendError {
    return {
      status: 'error',
      code,
      message,
      data,
    };
  },
};
