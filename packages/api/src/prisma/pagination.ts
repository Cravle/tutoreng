export class PaginationData {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  params: any

  constructor(
    total: number,
    perPage: number,
    currentPage: number,
    lastPage: number,
    params: any,
  ) {
    this.total = total
    this.perPage = perPage
    this.currentPage = currentPage
    this.lastPage = lastPage
    this.params = params
  }
}

export class PaginationMeta {
  pagination: PaginationData

  constructor(pagination: PaginationData) {
    this.pagination = pagination
  }
}

export class PaginationResult<T> {
  data: T[]

  meta: PaginationMeta

  constructor(data: T[], meta: PaginationMeta) {
    this.data = data
    this.meta = meta
  }
}
