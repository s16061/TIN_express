const Order = require("../../model/sequelize/Order");
const User = require("../../model/sequelize/User");


exports.getOrderList = () => {
    return Order.findAll({include: [
        {
            model: User,
            as: 'user',
        },
        
    ]
        
    });
};