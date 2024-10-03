import { sql } from "../../src/database";

export const recordDelete = async (request, response) => {
  const { recordid } = request.body;
  try {
    await sql`DELETE FROM record where recordid=${recordid}`;
    response.status(200).json({ message: "successfully deleted record" });
  } catch (error) {
    response.status(400).json({ message: "bad request!" });
  }
};
