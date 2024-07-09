import { SuccessResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";

export class UserService {
  constructor() {}

  //User Creation, Validation & Login
  async CreateUser(event: APIGatewayProxyEventV2) {
    const body = event.body;
    console.log(body);
    // return {
    //   statusCode: 200,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     message: "Response From Create User",
    //     data: "",
    //   }),
    // };
    return SuccessResponse({ message: "Response From Create User" });
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
