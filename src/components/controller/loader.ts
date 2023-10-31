import { ISourcesContent } from '../types/interfaces';

enum FetchMethod {
  GET = 'get',
  POST = 'post',
}

interface IOptions {
  [key: string]: string;
}

interface IUrlOptions extends IOptions {
  apiKey: string;
}

class Loader {
  private baseLink: string;
  private options: { apiKey: string };

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: { endpoint: string; options?: IOptions },
    callback = (): void => {
      console.error('No callback for GET response');
    },
  ) {
    this.load(FetchMethod.GET, endpoint, callback, options);
  }

  makeUrl(options: IOptions, endpoint: string) {
    const urlOptions: IUrlOptions = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(
    method: FetchMethod,
    endpoint: string,
    callback: (data: ISourcesContent[]) => void,
    options: IOptions = {},
  ) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
