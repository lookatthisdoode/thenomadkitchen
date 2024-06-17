import { unstable_noStore } from "next/cache";
import { MenuItemImage, MenuItemNoImage, FeedBackMessage } from "./definitions";

import { sql } from "@vercel/postgres";

export async function fetchFood() {
  try {
    const data = await sql<MenuItemImage>`
      SELECT *
      FROM items
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch mains.");
  }
}

export async function fetchFeedbackMessages() {
  try {
    const data = await sql<FeedBackMessage>`
    SELECT *
    FROM feedback`;

    return data.rows;
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to fetch messages`);
  }
}

export async function fetchFilteredItemsByType(type: string) {
  // Fuckin crutch but for now will do
  unstable_noStore();
  try {
    const data = await sql<MenuItemImage>`
      SELECT *
      FROM items 
      WHERE type = ${type}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to fetch ${type}s`);
  }
}

export async function fetchItemById(id: string) {
  try {
    const data = await sql<MenuItemImage>`
      SELECT *
      FROM items
      WHERE id = ${id}
    `;
    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch item with id:");
  }
}
