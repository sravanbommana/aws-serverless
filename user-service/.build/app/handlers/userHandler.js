"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.Login = exports.SignUp = void 0;
const userService_1 = require("../services/userService");
const response_1 = require("../utility/response");
const userService = new userService_1.UserService();
const SignUp = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return userService.CreateUser(event);
});
exports.SignUp = SignUp;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return userService.UserLogin(event);
});
exports.Login = Login;
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return userService.VerifyUser(event);
});
exports.Verify = Verify;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return userService.CreateProfile(event);
    }
    else if (httpMethod === "put") {
        return userService.EditProfile(event);
    }
    else if (httpMethod === "get") {
        return userService.GetProfile(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return userService.CreateCart(event);
    }
    else if (httpMethod === "put") {
        return userService.UpdateCart(event);
    }
    else if (httpMethod === "get") {
        return userService.GetCart(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Cart = Cart;
const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method.toLowerCase();
    if (httpMethod === "post") {
        return userService.CreatePaymentMethod(event);
    }
    else if (httpMethod === "put") {
        return userService.UpdatePaymentMethod(event);
    }
    else if (httpMethod === "get") {
        return userService.GetPaymentMethod(event);
    }
    else {
        return (0, response_1.ErrorResponse)(404, "requested method is not supported");
    }
});
exports.Payment = Payment;
//# sourceMappingURL=userHandler.js.map