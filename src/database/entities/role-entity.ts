import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config";

export class Role extends Model {
  static associate(models: any): void {
    Role.hasMany(models.UserRole, {
      foreignKey: "roleId",
      as: "userRoles",
      onDelete: "CASCADE",
    });
  }
}

Role.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, // Primary key should not be nullable
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM("admin", "user", "superAdmin"),
      allowNull: false,
      defaultValue: "user",
    },
    description: { type: DataTypes.STRING, allowNull: true },
  },
  { sequelize, modelName: "Role", tableName: "Role", timestamps: false }
);

export default Role;