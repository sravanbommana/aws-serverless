import { APIGatewayProxyEventV2 } from "aws-lambda";
import { SuccessResponse } from "../utility/response";
import { UserRepository } from "../repository/user-repository";

export class UserService {
  _repository: UserRepository;
  constructor(repository: UserRepository) {
    this._repository = repository;
  }

  async CreateUser() {
    return SuccessResponse({ message: "User Account Created" });
  }

  async UserLogin() {
    return SuccessResponse({ message: "User Logged In Successfully" });
  }

  async VerifyUser() {
    return SuccessResponse({ message: "User Account Verified Succesfully" });
  }

  async CreateProfile() {
    return SuccessResponse({ message: "Response From Create Profile" });
  }

  async GetProfile() {
    return SuccessResponse({ message: "Response From Get Profile" });
  }

  async EditProfile() {
    return SuccessResponse({ message: "Response From Edit Profile" });
  }
}
