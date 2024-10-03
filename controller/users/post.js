import { sql } from "../../src/database";

export const usersPost = async (request, response) => {
  const { userEmail, userName, userPassword, avatar_img } = request.body;

  try {
    await sql`INSERT INTO users ( userEmail, userName, userPassword, avatar_img)
                VALUES ( ${userEmail}, ${userName}, ${userPassword}, ${avatar_img})`;

    response.status(200).json({ user: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
