// User Model
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config";
import { Gender } from "@AUTH/utils/const";

export class User extends Model {
  static associate(models: any): void {
    User.hasMany(models.Session, {
      foreignKey: "userId",
      as: "sessions",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });

    User.hasMany(models.UserRole, {
      foreignKey: "userId",
      as: "userRoles",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "First name is required",
        },
        len: {
          args: [3, 50],
          msg: "First name must be between 3 and 50 characters",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last name is required",
        },
        len: {
          args: [3, 50],
          msg: "Last name must be between 3 and 50 characters",
        },
      },
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email must be a valid email address",
        },
        notEmpty: {
          msg: "Email is required",
        },
      },
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required",
        },
      },
    },
    gender: {
      type: DataTypes.ENUM,
      values: Object.values(Gender),
      defaultValue: Gender.unknown,
      allowNull: false,
      validate: {
        isIn: {
          args: [Object.values(Gender)],
          msg: "Gender must be a valid enum value",
        },
      },
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
      validate: {
        isBoolean: {
          msg: "isDeleted must be a boolean value",
        },
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
    timestamps: true,
  }
);

export default User;

