import { sql } from "../../src/database";

export const categoryPost = async (request, response) => {
  const { categoryName, categoryDescription, category_image } = request.body;

  try {
    await sql`INSERT INTO category ( categoryName, categoryDescription, category_image)
                VALUES ( ${categoryName}, ${categoryDescription}, ${category_image})`;

    response.status(200).json({ user: request.body });
  } catch (error) {
    response.status(400).json({ message: "error" });
  }
};
