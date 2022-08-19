import { DataTypes, Model, Optional } from 'sequelize'
import { sequelizeConnection } from '../config'

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  role:number;
  status:number;
  updatedAt?: Date;
  deletedAt?: Date;
}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number
  public name!: string
  public email!: string
  public password!: string
  public role!: number
  public status!: number

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default User

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOuput extends Required<UserAttributes> {}