export interface ISource {
  id: string;
  name: string;
}

export interface IDataContent {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IDataGlobal {
  status: string;
  totalResults: number;
  articles: IDataContent[];
}

export type TResponse = IDataContent & IDataGlobal;

export interface ISourcesContent {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface ISourcesCommon {
  status: string;
  sources: ISourcesContent[];
}

export type TSources = ISourcesContent & ISourcesCommon;
