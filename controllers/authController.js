const AccountRepository = require('../repository/sequelize/AccountRepository');

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    AccountRepository.findByEmail(email)
        .then(acc => {
            if(!acc) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            } else if(acc.password === password) {
                req.session.loggedUser = acc;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy adres email lub hasło"
                })
            }
            req.session.loggedUser = acc;
        })
        .catch(err => {
            console.log(err);
        });

}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}

exports.showLoginForm = (req, res, next) => {

            res.render('pages/account/login', {
                navLocation: ''
            });
}
