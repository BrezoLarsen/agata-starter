export interface IEvent {
  id: number;
  tenantId: string;
  title: string;
  description?: string;
  address?: string;
  city?: string;
  startDate: Date;
  endDate?: Date;
  startHour: string;
  endHour?: string;
  hasImage: boolean;
}
