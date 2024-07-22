import { Length } from "class-validator";
import { LoginModel } from "./LoginModel";

export class SignUpModel extends LoginModel {
  @Length(10, 13)
  phone: string;
}
