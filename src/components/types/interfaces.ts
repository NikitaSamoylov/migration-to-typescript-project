export interface IDataContent {
  author: string;
  content: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
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
