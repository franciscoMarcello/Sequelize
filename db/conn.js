const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodesequelize", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

// try {
//   sequelize.authenticate();
//   console.log("Conectamos com sucesso com sequelize");
// } catch (err) {
//   console.log("Não foi possivel conectar:", erro);
// }

module.exports = sequelize;
