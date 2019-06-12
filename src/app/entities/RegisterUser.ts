export class RegisterUser {
  public username: string;
  public password: string;

  public firstName: string;
  public lastName: string;


  public email: string;
  public phone: string;
  public carNumber: string;


  constructor(username: string, password: string, firstName: string, lastName: string, email: string, phone: string, carNumber: string) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.carNumber = carNumber;
  }
}
