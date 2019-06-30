export class Address {
  public country: string;
  public county: string;
  public city: string;
  public street: string;
  public postalCode: string;


  constructor(country: string, county: string, city: string, street: string, postalCode: string) {
    this.country = country;
    this.county = county;
    this.city = city;
    this.street = street;
    this.postalCode = postalCode;
  }

}
