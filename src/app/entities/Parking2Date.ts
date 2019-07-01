import {DateTimeModel} from '../date-time-picker/date-time.model';
import {ParkingString} from './ParkingString';

export class Parking2Date {
  public parking: ParkingString;
  public intialStartDate: string;
  public initialEndDatee: string;


  constructor(parking: ParkingString, intialStartDate: string, initialEndDatee: string, isFree: boolean) {
    this.parking = parking;
    this.intialStartDate = intialStartDate;
    this.initialEndDatee = initialEndDatee;
    this.isFree = isFree;
  }

  public isFree: boolean;
}
