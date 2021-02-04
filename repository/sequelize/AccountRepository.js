const User = require("../../model/sequelize/User");


exports.getAccountById = (accountID) => {
    return User.findByPk(accountID);
};

exports.getAccounts = () => {
    return User.findAll();
};

exports.updateAccount = (accountID, accountData) => {
    const name = accountData.Name;
    const surname = accountData.Surname;
    const email = accountData.email;
    return User.update(accountData, {where: {id: accountID }});
};

exports.findByEmail = (email) => {
    return User.findOne({
        where: {email: email}
    });
}