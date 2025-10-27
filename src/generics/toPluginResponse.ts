import { PluginResponse } from './GenericPluginReponses';
import { SendSuccess } from './GenericSendSuccess';
import { SendSuccessWithPluginResponse } from './SendSuccessWithPluginResponse';

type PossiblyWrapped<T> = T extends any[] ? { result: T } : T;

export const toPluginResponse = <T>(
  result: T,
  source = 'Example Plugin'
): SendSuccessWithPluginResponse<T> => {
  return {
    status: 'success',
    data: {
      source,
      result: wrapResult(result) as T,
    },
  };
};

const wrapResult = <T>(result: T): PossiblyWrapped<T> => {
  return (Array.isArray(result) ? { result } : result) as PossiblyWrapped<T>;
};
