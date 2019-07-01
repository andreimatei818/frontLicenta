import {DateTimeModel} from '../date-time-picker/date-time.model';
import {ParkingString} from './ParkingString';

export class Parking2Date {
  public parking: ParkingString;
  public initialStartDate: string;
  public initialEndDate: string;

  constructor(parking: ParkingString, intialStartDate: string, initialEndDatee: string) {
    this.parking = parking;
    this.initialStartDate = intialStartDate;
    this.initialEndDate = initialEndDatee;
  }


}
