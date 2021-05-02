export interface List {
  count: number;
  entries: cardInterface[];
}



export interface cardInterface {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}
