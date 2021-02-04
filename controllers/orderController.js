const AccountRepository = require('../repository/sequelize/AccountRepository');
const OrderRepository = require('../repository/sequelize/OrderRepository');




exports.getOrderList = (req, res, next) => {
  //  const accountID = req.params.accountID;
    //AccountRepository.getAccountById(accountID)
    OrderRepository.getOrderList()
    .then(orders => {
            res.render('pages/order-list', {
                orders: orders,
                navLocation: 'order'
            });
        });
}