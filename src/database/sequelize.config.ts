
// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('master', 'sa', 'YourPassword123', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433, // Default SQL Server port
  dialectOptions: {
    options: {
      encrypt: true, // Use encryption
      trustServerCertificate: true // Trust the server certificate
    }
  }
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));
