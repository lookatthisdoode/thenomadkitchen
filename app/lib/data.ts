import { unstable_noStore } from "next/cache";
import {
  MenuItemImage,
  // MenuItemNoImage,
  FeedBackMessage,
  StoreInfo,
} from "./definitions";

import { sql } from "@vercel/postgres";

export async function fetchStoreInfo() {
  try {
    const data = await sql<StoreInfo>`
      SELECT *
      FROM storeinfo
    `;

    return data.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch items.");
  }
}

export async function fetchFood() {
  unstable_noStore();
  try {
    const data = await sql<MenuItemImage>`
      SELECT *
      FROM items
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch items.");
  }
}

export async function fetchFeedbackMessages() {
  unstable_noStore();
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

export async function fetchFilteredItemsByQuery(query: string) {
  unstable_noStore();

  // artificial waiting time
  // console.log("Fetching revenue data...");
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    const data = await sql<MenuItemImage>`
      SELECT * 
      FROM items 
      WHERE 
        type ILIKE ${`%${query}%`} OR 
        name ILIKE ${`%${query}%`} OR 
        description ILIKE ${`%${query}%`} OR 
        price::TEXT ILIKE ${`%${query}%`}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Failed to search`);
  }
}

export async function fetchItemById(id: string) {
  unstable_noStore();
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
