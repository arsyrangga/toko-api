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
  merk: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 100],
        msg: "Masukkan merk dengan benar",
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
});

const DataReturn = sequelize.define("datareturn", {
  tanggal: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const DataMasuk = sequelize.define("datamasuk", {
  tanggal: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const DataKeluar = sequelize.define("datakeluar", {
  tanggal: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  merk: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

DataBarang.hasMany(DataMasuk, {
  foreignKey: "barang_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

DataMasuk.belongsTo(DataBarang, {
  foreignKey: "barang_id",
});

DataBarang.hasMany(DataKeluar, {
  foreignKey: "barang_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

DataKeluar.belongsTo(DataBarang, {
  foreignKey: "barang_id",
});

DataBarang.hasMany(DataReturn, {
  foreignKey: "barang_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

DataReturn.belongsTo(DataBarang, {
  foreignKey: "barang_id",
});

module.exports = {
  Login,
  LoginAdmin,
  DataBarang,
  DataReturn,
  DataMasuk,
  DataKeluar,
};
