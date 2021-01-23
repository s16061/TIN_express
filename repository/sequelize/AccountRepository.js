
const Account = require("../../model/sequelize/User");


exports.getAccountById = (accountID) => {
    return Account.findByPk(accountID);
};

exports.updateAccount = (accountID, accountData) => {
    const name = accountData.name;
    const surname = accountData.surname;
    const phone = accountData.phone;
    const email = accountData.email;
    return ProductList.update(accountData, {where: {id: accountID }});
};