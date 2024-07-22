import { v4 } from "uuid";
import { UserModel } from "../models/dto/UserModel";
import { DBClient } from "../utility/databaseClient";
import AWS from "aws-sdk";
export class UserRepository {
  constructor() {}

  async createAccount({ email, password, salt, phone, userType }: UserModel) {
    const client = await DBClient();
    await client.connect();
    console.log(client);
    const queryString =
      "INSERT INTO users(phone,email,password,salt,user_type) VALUES ($1,$2,$3,$4,$5) RETURNING *";
    const values = [phone, email, password, salt, userType];
    const result = await client.query(queryString, values);
    console.log("Indie user repositiry", result);
    await client.end();
    if (result.rowCount > 0) {
      return result.rows[0] as UserModel;
    }
  }
}
