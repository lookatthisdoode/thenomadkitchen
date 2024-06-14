const { db } = require("@vercel/postgres");
const {
  users,
  mains,
  sides,
  cocktails,
  hotdrinks,
  feedbackMessages,
} = require("../app/lib/placeholder-data.js");
const bcrypt = require("bcrypt");

const foodImages = [
  "/assets/food/1.jpg",
  "/assets/food/2.jpg",
  "/assets/food/3.jpg",
  "/assets/food/4.jpg",
  "/assets/food/5.jpg",
  "/assets/food/6.jpg",
  "/assets/food/7.jpg",
  "/assets/interior/image1-7-1024x683.webp",
  "/assets/interior/image2-6-1024x683.webp",
  "/assets/interior/image5-2-2.webp",
  "/assets/interior/image6-5-1024x683.webp",
  "/assets/interior/image8-5-1024x683.webp",
];

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedMains(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "mains" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS mains (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price INT NOT NULL,
        image_url VARCHAR(255)
      );
    `;

    console.log(`Created "mains" table`);

    // Insert data into the "mains" table
    const insertedMains = await Promise.all(
      mains.map(
        (main) =>
          client.sql`
          INSERT INTO mains (name, description, price, image_url)
          VALUES (${main.name}, ${main.description}, ${main.price}, ${main.url})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedMains.length} mains`);

    return {
      createTable,
      mains: insertedMains,
    };
  } catch (error) {
    console.error("Error seeding mains:", error);
    throw error;
  }
}

async function seedSides(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "mains" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sides (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
      );
    `;

    console.log(`Created "sides" table`);

    // Insert data into the "mains" table
    const insertedSides = await Promise.all(
      sides.map(
        (main) =>
          client.sql`
          INSERT INTO sides (name, price)
          VALUES (${main.name}, ${main.price})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedSides.length} sides`);

    return {
      createTable,
      mains: insertedSides,
    };
  } catch (error) {
    console.error("Error seeding sides:", error);
    throw error;
  }
}

async function seedCocktails(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "mains" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cocktails (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price INT NOT NULL
      );
    `;

    console.log(`Created "cocktails" table`);

    // Insert data into the "mains" table
    const insertedCocktails = await Promise.all(
      cocktails.map(
        (main) =>
          client.sql`
          INSERT INTO cocktails (name, price, description)
          VALUES (${main.name}, ${main.price}, ${main.description})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedCocktails.length} cocktails`);

    return {
      createTable,
      mains: insertedCocktails,
    };
  } catch (error) {
    console.error("Error seeding cocktails:", error);
    throw error;
  }
}

async function seedHotDrinks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "mains" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS hotdrinks (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price INT NOT NULL
      );
    `;

    console.log(`Created "hotdrinks" table`);

    // Insert data into the "mains" table
    const insertedSides = await Promise.all(
      hotdrinks.map(
        (main) =>
          client.sql`
          INSERT INTO hotdrinks (name, price)
          VALUES (${main.name}, ${main.price})
          ON CONFLICT (id) DO NOTHING;
        `
      )
    );

    console.log(`Seeded ${insertedSides.length} hotdrinks`);

    return {
      createTable,
      mains: insertedSides,
    };
  } catch (error) {
    console.error("Error seeding hotdrinks:", error);
    throw error;
  }
}

async function seedMessages(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "mains" table if it doesn't exist
    // const createTable = await client.sql`
    //   CREATE TABLE IF NOT EXISTS sides (
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     price INT NOT NULL
    //   );
    // `;

    // console.log(`Created "messag" table`);

    // Insert data into the "mains" table
    const insertedMessages = await Promise.all(
      feedbackMessages.map((main) => {
        const date = new Date().toISOString().split("T")[0];

        return client.sql`
          INSERT INTO feedback (name, contact, customermessage, date)
          VALUES (${main.name}, ${main.contact}, ${main.customerMessage}, ${date})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedMessages.length} messages`);

    return {
      // createTable,
      messages: insertedMessages,
    };
  } catch (error) {
    console.error("Error seeding messages:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  // await seedCocktails(client);
  await seedMessages(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
