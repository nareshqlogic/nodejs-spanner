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

