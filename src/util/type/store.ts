
export type ActionType<T>={
    data: T,
    onSuccess?:(payload?: any)=>void,
    onError?:(payload?: any)=>void
}