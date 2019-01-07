import * as r from 'request';

export interface TransactionOptions {
  readOnly?: boolean;
  timeout?: number;
  exactStaleness?: number;
  readTimestamp?: Date;
  returnTimestamp?: boolean;
  strong?: boolean;
}

export interface CreateSessionOptions {
  name: string;
  labels: {[key: string]: string;};
  createTime: GetTimestamp;
  approximateLastUseTime: GetTimestamp;
}
export type GetTimestamp = {
  nanos: number; seconds: number;
};

export interface UserSuppliedOptions {
  [index: string]: Any;
  partitioned?: boolean;
  readOnly?: boolean;
  minReadTimestamp?: GetTimestamp|Date;
  readTimestamp?: GetTimestamp|Date;
  maxStaleness?: GetTimestamp|number;
  exactStaleness?: GetTimestamp|number;
}

export interface BasicCallback {
  (err: Error|null, resp?: r.Response): void;
}

export type BasicResponse = Promise<r.Response>;

export interface GetQuery {
  sql: string;
  params?: GetMap<string>;
  types?: GetMap<string>;
  json?: boolean;
  jsonOptions?: GetMap<string>;
  gaxOptions?: GetMap<string>;
}

export interface GetMap<T> {
  [index: string]: T;
  [index: number]: T;
}

export interface Mutation {
  insert?: Write;
  update?: Write;
  insert_or_update?: Write;
  replace?: Write;
  delete?: Delete;
}

export interface Write {
  table: string;
  columns: string[];
  values: Any[];
}

export type Delete = {
  table: string; keySet: KeySet;
};

export interface KeySet {
  keys?: Array<{values: Any[]}>;
  ranges?: KeyRange[];
  all?: boolean;
}

export interface KeyRange {
  endOpen: Any[];
  endClosed: Any[];
  startClosed: Any[];
  startOpen: Any[];
}

// tslint:disable-next-line no-any
export type Any = any;

export type TransactionRequestReadResponse =
    Array<{}>;  // Array<Array<{name:string,value:Any}>>;

export interface TransactionRequestReadCallback {
  (err?: Error|null, rows?: TransactionRequestReadResponse): void;
}

export interface ReadRequestOptions {
  columns: string[];
  keys: Array<string|string[]|number|number[]>;
  index?: string;
  json?: boolean;
  jsonOptions?: {wrapNumbers?: boolean};
  gaxOptions?: {};
}

export type KeyValMap = {
  [key: string]: number|string|null;
};
