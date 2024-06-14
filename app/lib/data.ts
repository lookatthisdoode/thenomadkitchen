//fetchMessages
//fetchFood
//fetchDrinkns
import { FoodItem } from "./definitions";

import { sql } from "@vercel/postgres";

export async function fetchFood() {
  try {
    const data = await sql<FoodItem>`
      SELECT *
      FROM mains
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch mains.");
  }
}

export async function fetchSides() {
  try {
    const data = await sql<FoodItem>`
      SELECT *
      FROM sides
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sides.");
  }
}

export async function fetchItemById(id: string) {
  try {
    const data = await sql<FoodItem>`
      SELECT *
      FROM mains
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch item with id:");
  }
}
