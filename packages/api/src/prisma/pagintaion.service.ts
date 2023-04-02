import { Injectable } from '@nestjs/common'

import { PaginationData, PaginationMeta, PaginationResult } from './pagination'

@Injectable()
export class PaginationService {
  async paginate<T>(
    data: T[],
    count: number,
    page = 1,
    perPage: number,
    query: any = {},
  ) {
    const result = new PaginationResult(
      data,
      new PaginationMeta(
        new PaginationData(
          count,
          perPage,
          page,
          Math.ceil(count / perPage),
          query,
        ),
      ),
    )
    return result
  }

  getParams(page: number, limit = 10) {
    return {
      skip: (page - 1) * limit,
      take: limit,
    }
  }
}
