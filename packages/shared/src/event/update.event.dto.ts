import type { EventCreateDto } from './create.event.dto'

export interface UpdateEventDto extends Partial<EventCreateDto> {}
