
// UserRole Model
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../sequelize.config";
import User from "./user-entity";
import Role from "./role-entity";

export class UserRole extends Model {
  static associate(models: any): void {
    UserRole.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
      onDelete: "CASCADE",
    });

    UserRole.belongsTo(models.Role, {
      foreignKey: "roleId",
      as: "role",
      onDelete: "CASCADE",
    });
  }
}

UserRole.init(
  {
    userId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    roleId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "UserRole",
    tableName: "UserRoles",
    timestamps: true,
  }
);

export default UserRole;