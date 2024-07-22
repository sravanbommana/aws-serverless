import { IsEmail, Length } from "class-validator";

export class LoginModel {
  @IsEmail()
  email: string;
  @Length(6, 32)
  password: string;
}
