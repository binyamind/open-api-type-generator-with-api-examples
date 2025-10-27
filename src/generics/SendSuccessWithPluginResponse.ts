import { SendError } from '../models';
import { PluginResponse } from './GenericPluginReponses';
import { SendSuccess } from './GenericSendSuccess';

export type SendSuccessWithPluginResponse<T> = SendSuccess<PluginResponse<T>>;

export type ResponseType<T> = SendSuccessWithPluginResponse<T> | SendError;
