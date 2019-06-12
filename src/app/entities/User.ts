export class User {
  public id: number;
  public username: string;
  public password: string;


  constructor(id: number, name: string, password: string) {
    this.id = id;
    this.username = name;
    this.password = password;
  }
}
