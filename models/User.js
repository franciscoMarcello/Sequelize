const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const User = db.define("User", {
  // id e criado automatico
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    require: true,
  },
  newsletter: {
    type: DataTypes.BOOLEAN,
  },
});
module.exports = User;
