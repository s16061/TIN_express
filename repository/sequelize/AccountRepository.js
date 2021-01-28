const User = require("../../model/sequelize/User");


exports.getAccountById = (accountID) => {
    return User.findByPk(accountID);
};

exports.updateAccount = (accountID, accountData) => {
    const name = accountData.name;
    const surname = accountData.surname;
    const phone = accountData.phone;
    const email = accountData.email;
    return User.update(accountData, {where: {id: accountID }});
};

exports.findByEmail = (email) => {
    return User.findOne({
        where: {email: email}
    });
}