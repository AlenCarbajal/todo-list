import { DataTypes } from sequelize;
import sequelize from '../db.js';

const MIN_TITLE_LENGTH = 2;
const MAX_NAME_LENGTH = 255;

const MIN_DESCRIPTION_LENGTH = 2;
const MAX_DESCRIPTION_LENGTH = 2048;
const Todo = sequelize.define(
    'Todo',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[A-Za-zÀ-ÿ\s'.-]+$/i,
                len: [MIN_NAME_LENGTH, MAX_NAME_LENGTH]
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[A-Za-zÀ-ÿ\s'.-]+$/i,
                len: [MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH]
            }
        }
    }
);

export default Todo;