import { Length } from "class-validator";
import { LoginInput } from "./login-input";

export class SignUpInput extends LoginInput {
  @Length(10, 13)
  phone: string;
  salt?: string;
  user_id?: string;
}
