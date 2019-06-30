import {DateTimeModel} from '../date-time-picker/date-time.model';

export class ParkingString {
  public id: string;
  public username: string;
  public address: string;
  public comment: string;
  public startDate: string;
  public endDate: string;

  constructor(address: string, startDate: string, endDate: string) {
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public isFree: boolean;

}
