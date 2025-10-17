interface FetchAllOperations<T>{
    getall():T[];
    getDetails(id:number):T;
}
class GenricFetch<T> implements FetchAllOperations<T>{
    getall(): T[] {
        throw new Error("Method not implemented.");
    }
    getDetails(id: number): T {
        throw new Error("Method not implemented.");
    }

}