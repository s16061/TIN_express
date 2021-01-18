exports.showAccount = (req, res, next) => {
    res.render('pages/myaccount', { navLocation: 'account' });
}