import sequelize from "../../db/db";
import Sequelize from "sequelize";
import Transaction from "./Transaction";
import Customer from "./Customer";
import Admin from "./Admin";
import Item from "./Item";
import ItemProvinsi from "./ItemProvinsi";
import TransactionItem from "./TransactionItem";

const SequelizeModel = {
  Transaction: Transaction(sequelize, Sequelize),
  TransactionItem: TransactionItem(sequelize, Sequelize),
  Customer: Customer(sequelize, Sequelize),
  Admin: Admin(sequelize, Sequelize),
  Item: Item(sequelize, Sequelize),
  ItemProvinsi: ItemProvinsi(sequelize, Sequelize),
};

export { SequelizeModel };
