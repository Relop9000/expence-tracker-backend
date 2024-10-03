import { sql } from "../../src/database";

export const usersGet = async (request, response) => {
  const users = await sql`SELECT * FROM users`;

  response.status(200).json({
    data: users,
  });
};
