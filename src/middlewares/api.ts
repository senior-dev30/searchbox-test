import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { BASE_URL } from '../utils/constants';

type CallApiProps = {
  data: any;
  method: Method;
  endpoint: string;
  autheticated?: boolean;
};

type MiddlewareAsyncAction = {
  types: string[];
  payload?: any;
} & CallApiProps;

type SynchronousAction = {
  type: string;
  payload?: any;
};

const callApi = ({ data, method, endpoint, autheticated }: CallApiProps): Promise<any> => {
  const url = BASE_URL + endpoint;
  /**
   * Todo get from cookie
   */
  const token = localStorage.getItem('token');
  const config: AxiosRequestConfig = { method, url };

  if (autheticated) {
    if (!token) {
      return Promise.resolve('USER_LOGOUT');
    }
    config.headers = { Authorization: `Bearer ${token}` };
  }

  if (data) {
    config.data = data;
  }

  return axios(config)
    .then((response: AxiosResponse) => {
      /**
       * Todo
       * Store bearer token in cookie if its returned as a payload
       */
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export default () => (next: Dispatch<AnyAction>) => (
  action: MiddlewareAsyncAction | SynchronousAction,
) => {
  if ((<SynchronousAction>action)?.type) {
    return next(<SynchronousAction>action);
  }

  const { data, method, endpoint, autheticated, types } = <MiddlewareAsyncAction>action;

  const [requestType, successType, errorType] = types;
  const requestAction = { data, type: requestType };
  next(requestAction);

  return callApi({ data, method, endpoint, autheticated })
    .then(
      (response) => {
        if (response?.status === 200) {
          const { data } = response;
          next({
            data,
            type: successType,
          });
        } else {
          next({ error: data, type: errorType });
        }
      },
      (error) => {
        next({ error, type: errorType });
      },
    )
    .catch((error) => console.log(error));
};
