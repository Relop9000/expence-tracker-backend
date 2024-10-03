import { sql } from "../../src/database";

export const categoryGet = async (request, response) => {
  const category = await sql`SELECT * FROM category`;

  response.status(200).json({
    data: category,
  });
};
