export type LoginUserDataType={
  username: string, password: string
}

export type UserType={
  id: string,
  username: string,
  firstName: string,
  password: null,
  lastName:string,
  token: string,
}

export type RegisterUdarDataType={
  firstName:string,lastName:string,username:string,password:string
}

export type CarDataType= {
  id: string,
  make: string,
  model: string,
  year: number,
  engineType:string,
  gearBox: string,
  condition: string,
  horsePower: number,
  color: string,
  price: number,
  city: string,
  mileage: number,
  user: {
      id: string,
      username: string,
      password: null,
      firstName: string,
      lastName: string
  },
  extras: string
}