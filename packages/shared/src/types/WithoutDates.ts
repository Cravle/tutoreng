export type WithoutDates<T> = Omit<T, 'createdAt' | 'updatedAt' | 'id'>
