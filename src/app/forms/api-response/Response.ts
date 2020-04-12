export interface Response<T> {
    head: Head;
    results: Results<T>
}

export interface Head {
    vars: string[];
}

export interface Results<T> {
    bindings: T[];
}

export interface BindingObject {
    type: string;
    datatype?: string;  // optional param
    value: string;
}