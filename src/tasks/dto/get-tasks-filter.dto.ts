import { TaskStatus } from '../tasks.model';

export class GetTaksFilterDto {
  status?: TaskStatus;
  search?: string;
}
