import { sql } from "../../src/database";

export const recordGet = async (request, response) => {
  const record = await sql`SELECT * FROM record`;

  response.status(200).json({
    data: record,
  });
};
