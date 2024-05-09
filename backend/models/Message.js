const User = require('./User')


module.exports = (sequelize, Sequelize) => {
    const Message = sequelize.define(
        'Message',
        {
            sender_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "User",
                    key: 'id'
                }
            },
            recipient_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "User",
                    key: "id"
                }
            },
            messages: {
                type: Sequelize.TEXT,
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
    
    // Message.belongsTo(User)

    return Message
}