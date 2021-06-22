import { Pool } from "pg";

export const pool = new Pool({
  host: "",
  user: "postgres",
  password: "",
  database: "",
  port: 5432,
});
