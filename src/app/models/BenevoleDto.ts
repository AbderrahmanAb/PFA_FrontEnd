export interface BenevoleDto {
  id?: any;
  name?: string;
  tel?: string;
  active?: boolean;
}
export interface Root {
  isSucess: boolean
  result: Result[]
  displayMessage: string
  errorMessages: any
}
export interface Root1 {
  isSucess: boolean
  result: Result
  displayMessage: string
  errorMessages: any
}

export interface Result {
  id: number
  name: string
  tel: string
  active: boolean
}

