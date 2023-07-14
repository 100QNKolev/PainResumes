exports.getHomePage = async (req, res) => {
    res.render('home');
};

exports.get404Page = async (req,res) => {
    res.render('404');
};