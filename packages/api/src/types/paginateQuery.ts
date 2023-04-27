import { Type } from 'class-transformer'
import { IsInt } from 'class-validator'

export class PaginateQuery {
  @Type(() => Number)
  @IsInt()
  page?: number = 1
  @Type(() => Number)
  limit?: number = 10
  search?: string
}
