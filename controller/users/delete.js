import { sql } from "../../src/database";

export const usersDelete = async (request, response) => {
  const { userid } = request.body;
  try {
    await sql`DELETE FROM users where userid=${userid}`;
    response.status(200).json({ message: "successfully deleted user" });
  } catch (error) {
    response.status(400).json({ message: "bad request!" });
  }
};
