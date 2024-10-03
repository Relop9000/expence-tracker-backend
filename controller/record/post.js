import { sql } from "../../src/database";

export const recordPost = async (request, response) => {
  const { recordName, recordDescription } = request.body;

  try {
    await sql`INSERT INTO record ( recordName, recordDescription)
                    VALUES ( ${recordName}, ${recordDescription})`;

    response.status(200).json({ user: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
