module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
        'User',
        {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                name: 'createdAt',
                field: 'created_at'
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                name: 'updatedAt',
                field: 'updated_at'
            }
        }
    )

    return User
}