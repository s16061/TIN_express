exports.showCartList = (req, res, next) => {
    res.render('pages/cart', { navLocation: 'cart' });
}