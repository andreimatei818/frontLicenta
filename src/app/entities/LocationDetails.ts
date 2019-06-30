import {Address} from './Address';


export class LocationDetails {
  public label: string;
  public language: string;
  public countryCode: string;
  public  locationId: string;
  public address: Address;
  public matchLevel: string;

  constructor(label: string, language: string, countryCode: string, locationId: string, address: Address, matchLevel: string) {
    this.label = label;
    this.language = language;
    this.countryCode = countryCode;
    this.locationId = locationId;
    this.address = address;
    this.matchLevel = matchLevel;
  }
}
