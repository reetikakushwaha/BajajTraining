interface FetchOperations<T>{
    getAll():T[];
    getDetails(id: number):T;

}

class GenericFetch<T> implements FetchOperations<T>{
    getAll(): T[] {
        throw new Error("Method not implemented.");
    }
    getDetails(id: number): T {
        throw new Error("Method not implemented.");
    }
    
}