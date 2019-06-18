import {DateTimeModel} from '../date-time-picker/date-time.model';

export class Parking {
  public id: string;
  public  username: string;
  public address: string;
  public comment: string;
  public startDate: DateTimeModel;
  public endDate: DateTimeModel;

  constructor(address: string, startDate: DateTimeModel, endDate: DateTimeModel) {
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  public isFree:boolean;

}
