// import { sequelize } from "../sequelize.config";
// import app from "./app";

import app from "./app";
import { sequelize } from "./database/sequelize.config";

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection to SQL Server has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

// async function checkTableExists(tableName: string): Promise<boolean> {
//   try {
//     const queryInterface = sequelize.getQueryInterface();
//     const tables = await queryInterface.showAllTables();
//     return tables.includes(tableName);
//   } catch (error) {
//     console.error("Error while checking table existence:", error);
//     return false;
//   }
// }

// checkTableExists("Users")
//   .then((exists) => {
//     if (exists) {
//       console.log('Table "Users" exists.');
//     } else {
//       console.log('Table "Users" does not exist.');
//     }
//   })
//   .catch((error) => {
//     console.error("Error checking table existence:", error);
//   });

// sequelize
//   .sync({ alter: true })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });

//   async function listAllTables() {
//     try {
//       const queryInterface = sequelize.getQueryInterface();
//       const tables = await queryInterface.showAllTables();
//       console.log('Tables in the database:', tables);
//     } catch (error) {
//       console.error('Error listing tables:', error);
//     }
//   }

//   listAllTables();

// Initialize Sequelize with SQL Server

sequelize
  .sync()
  .then(() => console.log("User table has been created."))
  .catch((err) => console.error("Error creating table:", err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
