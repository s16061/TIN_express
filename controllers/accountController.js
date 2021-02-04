const AccountRepository = require('../repository/sequelize/AccountRepository');


exports.showAccount = (req, res, next) => {
    AccountRepository.getAccounts()
    .then(users => {
    res.render('pages/myaccount', { 
        users: users,
        navLocation: 'user'
    });
    console.log(data.get({ plain: true }));
})
};

exports.updateAccount = (req, res, next) => {
    const accountID = req.body.id;
    const accountData = { ...req.body };
    AccountRepository.updateAccount(accountID, accountData)
    .then( result => {
        res.redirect('/account');
    });
};

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
                navLocation: 'user'
            });
        });
};