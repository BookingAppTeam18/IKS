export interface Reservation{
  id?: number;
  startDate: Date;
  endDate: Date;
  numberOfGuests?: number;
  price: number;
  accommodationId: number;
  accountId: number;
}