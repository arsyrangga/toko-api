const { DataTypes } = require("sequelize");
const sequelize = require("./connection");

const Login = sequelize.define("login", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [4, 20],
        msg: "masukkan username dengan benar",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 20],
        msg: "masukkan password yang benar",
      },
    },
  },
});

const LoginAdmin = sequelize.define("login-admin", {
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      len: {
        args: [4, 20],
        msg: "masukkan username dengan benar",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 20],
        msg: "masukkan password yang benar",
      },
    },
  },
});

module.exports = { Login, LoginAdmin };
