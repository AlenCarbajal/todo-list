import User from './user';
import Todo from './todo';

User.hasMany(Todo, {
    foreignKey: 'userEmail',
    as: 'todos',
    onDelete: 'CASCADE'
});

Todo.belongsTo(User, {
    foreignKey: 'userEmail',
    as: 'user'
});

async function syncDatabase() {
    await User.sync( { alter: true } );
    await Todo.sync( { alter: true } );
}

export { syncDatabase };
