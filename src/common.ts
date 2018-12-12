import * as r from 'request';

export interface TransactionOptions {
    readOnly?: boolean;
    timeout?: number;
    exactStaleness?: number;
    readTimestamp?: Date;
    returnTimestamp?: boolean;
    strong?: boolean;
}

export interface GetSession {
    name: string;
    labels: { [key:string]:string; };
    create_time: GetTimestamp;
    approximate_last_use_time:  GetTimestamp;
}

export type GetTimestamp = {
    nanos: number; seconds: number;
};

export interface GetCallback {
    (err: Error|null, resp?: r.Response): void;
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
    values: any[];
}

export type Delete = {
    table: string;
    keySet: KeySet;
};

export interface KeySet {
    keys? : any[];
    ranges?: KeyRange[];
    all?: boolean;
}

export interface KeyRange {
    endOpen: any[];
    endClosed: any[];
    startClosed: any[];
    startOpen: any[];
}
