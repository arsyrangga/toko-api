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
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "masukkan nama yang benar",
      },
    },
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 25],
        msg: "masukkan status yang benar",
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

const DataBarang = sequelize.define("data-barang", {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 100],
        msg: "masukkan data yang benar",
      },
    },
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "Masukkan nama data barang yang benar",
      },
    },
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "Masukkan kategori dengan benar",
      },
    },
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "masukkan harga dengan benar",
      },
    },
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: {
        args: [1, 100],
        msg: "masukkan Stock dengan benar",
      },
    },
  },
});

module.exports = { Login, LoginAdmin, DataBarang };
