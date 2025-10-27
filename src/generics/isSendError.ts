import { SendError } from '../models';
import { ResponseType } from './SendSuccessWithPluginResponse';

export const isSendError = (
  response: ResponseType<any>
): response is SendError => {
  return response.status === 'error';
};
