export class User {
  constructor(
    public first_name: string,
    public middle_name: string,
    public last_name: string,
    public email: string,
    public gender: string,
    public home_address: string,
    public city: string,
    public postal_code: string,
    public date_of_birth: string,
    public phone_number: string,
    public password: string,
    public fingerprint_id: string = "F123",
  ) {
    this.first_name = first_name;
  }
}

export class getActiveUser {
  constructor(
    public is_active: boolean,
    public status: boolean
  ) {
  }
}

export class userLogin {
  constructor(
    public email: string,
    public password: string,
  ) {
  }
}

export class fingerPrintId {
  constructor(
    public fingerid: string,
  ) {
  }
}
