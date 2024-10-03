import { sql } from "../../src/database";

export const usersUpdate = async (request, response) => {
  const { id } = request.params;
  const { userEmail, userName, avatar_img } = request.body;
  try {
    await sql`UPDATE user SET userEmail=${userEmail}, userName=${userName}, avatar_img=${avatar_img} WHERE id=${id}`;
    response.status(200).json({ message: "Request success" });
  } catch (error) {
    response.status(400).json({ message: "Bad request" });
  }
};
