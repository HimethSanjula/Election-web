export class Admin {
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
  ) {
  }
}

export class getActiveAdmin {
  constructor(
    // public is_active: boolean,
    public status:boolean
  ) {
  }
}

export class adminLogin {
  constructor(
    public email: string,
    public password: string,
  ) {
  }
}

export class adminId {
  constructor(
    public id: string,
  ) {
  }
}

