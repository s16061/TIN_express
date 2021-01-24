const AccountRepository = require('../repository/sequelize/AccountRepository');


exports.showAccount = (req, res, next) => {
    res.render('pages/myaccount', { navLocation: 'account' });
}

exports.showEditAccount = (req, res, next) => {
    const accountID = req.params.accountID;
    AccountRepository.getAccountById(accountID)
        .then(user => {
            res.render('pages/account/account-form', {
                user: user,
                formMode: 'edit',
                pageTitle: 'Edycja konta',
                btnLabel: 'Edytuj konto',
                formAction: '/account/edit',
                navLocation: 'account'
            });
        });
};