exports.index = function(req, res) {
	res.render('pages/programs', { title: 'Programs' });
};

exports.stringmatch = function(req, res) {
	res.render('pages/stringmatch', { title: 'String match' });
};
