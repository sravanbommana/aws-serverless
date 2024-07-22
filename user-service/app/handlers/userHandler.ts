import { APIGatewayProxyEventV2 } from "aws-lambda";

import { UserService } from "../services/userService";
import { ErrorResponse } from "../utility/response";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import { container } from "tsyringe";

const userService = container.resolve(UserService);

export const SignUp = middy((event: APIGatewayProxyEventV2) => {
  return userService.CreateUser(event);
}).use(jsonBodyParser());

export const Login = async (event: APIGatewayProxyEventV2) => {
  return userService.UserLogin(event);
};

export const Verify = async (event: APIGatewayProxyEventV2) => {
  return userService.VerifyUser(event);
};

export const Profile = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return userService.CreateProfile(event);
  } else if (httpMethod === "put") {
    return userService.EditProfile(event);
  } else if (httpMethod === "get") {
    return userService.GetProfile(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};

export const Cart = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return userService.CreateCart(event);
  } else if (httpMethod === "put") {
    return userService.UpdateCart(event);
  } else if (httpMethod === "get") {
    return userService.GetCart(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};

export const Payment = async (event: APIGatewayProxyEventV2) => {
  const httpMethod = event.requestContext.http.method.toLowerCase();
  if (httpMethod === "post") {
    return userService.CreatePaymentMethod(event);
  } else if (httpMethod === "put") {
    return userService.UpdatePaymentMethod(event);
  } else if (httpMethod === "get") {
    return userService.GetPaymentMethod(event);
  } else {
    return ErrorResponse(404, "requested method is not supported");
  }
};
