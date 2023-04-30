export type ApiPaginatedResponse<T> = {
  data: T[]
  meta: {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
    params: any
  }
}
