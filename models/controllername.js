import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});

export const controllername = sequelize.define("controllername", {
  // fields here
});