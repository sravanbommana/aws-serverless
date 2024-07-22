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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const uuid_1 = require("uuid");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class UserRepository {
    constructor() { }
    createUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password, salt, phone, userType }) {
            const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
            yield docClient
                .put({
                TableName: "UserTable",
                Item: {
                    userId: (0, uuid_1.v4)(),
                    email,
                    password,
                    salt,
                    phone,
                    userType,
                },
            })
                .promise();
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map