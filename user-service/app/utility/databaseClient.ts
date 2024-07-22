import { Client } from "pg";

export const DBClient = () => {
  return new Client({
    host: "172.19.0.3",
    user: "root",
    database: "user_service",
    password: "root",
    port: 5432,
  });
};
