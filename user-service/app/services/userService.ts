import { plainToClass } from "class-transformer";
import { UserRepository } from "../repository/userRepository";
import { ErrorResponse, SuccessResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { autoInjectable } from "tsyringe";
import { SignUpModel } from "../models/dto/SignUpModel";
import { AppValidationError } from "../utility/errors";
import {
  GetSalt,
  GetHashedPassword,
  validatePassword,
} from "../utility/password";

@autoInjectable()
export class UserService {
  userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  //User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    try {
      const input = plainToClass(SignUpModel, event.body);
      const error = await AppValidationError(input);
      if (error) {
        return ErrorResponse(404, error);
      }
      const salt = await GetSalt();
      const hashedPassword = await GetHashedPassword(input.password, salt);
      console.log("calling repo");
      const data = await this.userRepository.createAccount({
        email: input.email,
        password: hashedPassword,
        phone: input.phone,
        userType: "BUYER",
        salt,
      });
      return SuccessResponse(data);
    } catch (error) {
      console.log(error);
      return ErrorResponse(500, error);
    }
  }

  async UserLogin(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From User Login" });
  }

  async VerifyUser(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Verify User" });
  }

  //User Profile

  async CreateProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Create Profile" });
  }

  async GetProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Get Profile" });
  }

  async EditProfile(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Edit Profile" });
  }

  //Cart Section

  async CreateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Create Cart" });
  }

  async GetCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Get Cart" });
  }

  async UpdateCart(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Update Cart" });
  }

  //Payment Section

  async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Create Payment Method" });
  }

  async GetPaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Get Payment Method" });
  }

  async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
    return SuccessResponse({ message: "Response From Update Payment Method" });
  }
}
