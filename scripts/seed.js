const { db } = require("@vercel/postgres");
const { data } = require("../app/lib/placeholder-formatted.js");
const bcrypt = require("bcrypt");

async function seedItems(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "items" table if it doesn't exist
    const createTable = await client.sql`CREATE TABLE IF NOT EXISTS items (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        type VARCHAR(15) NOT NULL CHECK (type IN ('salad', 'summer-dinner', 'dinner', 'sandwich', 'tapas', 'pasta', 'side', 'cocktail', 'drink')),
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price INT NOT NULL,
        image_url TEXT
    );
    `;

    console.log(`Created "mains" table`);

    // Insert data into the "items" table
    const insertedMains = await Promise.all(
      data.map(
        (main) =>
          client.sql`
          INSERT INTO items (type, name, description, price, image_url)
          VALUES ( ${main.type}, ${main.name}, ${main.description}, ${main.price}, ${main.image_url})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedMains.length} items`);

    return {
      // createTable,
      mains: insertedMains,
    };
  } catch (error) {
    console.error("Error seeding items:", error);
    throw error;
  }
}

async function seedMessages(client) {
  try {
    // await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "items" table if it doesn't exist
    // const createTable = await client.sql`
    //   CREATE TABLE IF NOT EXISTS sides (
    //     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     price INT NOT NULL
    //   );
    // `;

    // console.log(`Created "messag" table`);

    // Insert data into the "items" table
    const insertedMessages = await Promise.all(
      feedbackMessages.map((main) => {
        const date = new Date().toISOString().split("T")[0];

        return client.sql`
          INSERT INTO feedback (name, contact, customermessage, date)
          VALUES (${main.name}, ${main.contact}, ${main.customerMessage}, ${date})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
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
  await seedItems(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err,
  );
});
