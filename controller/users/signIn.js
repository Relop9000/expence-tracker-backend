import { sql } from "../../src/database";

export const signIn = async (request, response) => {
  const { userEmail, userPassword } = request.body;
  try {
    const user =
      await sql`SELECT * FROM users where userEmail=${userEmail} AND userPassword=${userPassword}`;
    response.status(200).json({ user: user });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
