export interface IEvent {
  id: number;
  tenantId: string;
  title: string;
  description?: string;
  address?: string;
  city?: string;
  dateStart: Date;
  dateEnd?: Date;
  hourStart: string;
  hourEnd?: string;
  hasImage: boolean;
}
