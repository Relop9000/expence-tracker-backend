import { sql } from "../../src/database";

export const categoryDelete = async (request, response) => {
  const { categoryid } = request.body;
  try {
    await sql`DELETE FROM category WHERE categoryid=${categoryid}`;
    response.status(200).json({ message: "successfully deleted category" });
  } catch (error) {
    response.status(400).json({ error });
  }
};
