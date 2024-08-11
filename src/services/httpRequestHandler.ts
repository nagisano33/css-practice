import axios from "axios";

interface HttpRequestHandler<Response = object> {
  get: (uri: string) => Promise<Response>;
  post: (uri: string, body: unknown) => Promise<Response>;
  put: (uri: string, body: unknown) => Promise<Response>;
  delete: (uri: string) => Promise<Response>;
}

const instance = axios.create({
  timeout: 1000,
});

const httpRequestHandler = <R>(): HttpRequestHandler<R> => ({
  get: (uri: string) => instance.get(uri),
  post: (uri: string, body: unknown) => instance.post(uri, body),
  put: (uri: string, body: unknown) => instance.put(uri, body),
  delete: (uri: string) => instance.delete(uri),
});

export default httpRequestHandler;
