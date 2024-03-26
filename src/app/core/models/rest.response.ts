export interface RestResponse<T> {
    results: T,
    statut: number,
    last?: boolean,
    totalPages?: number,
    currentPage?: number,
    first?: boolean,
    totalElements?: number
}
