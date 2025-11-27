export interface QueryInterface {
  filter?: string;
  genre?: string;
  c?: string;
  [key: string]: string | number | boolean | null | undefined;
}
