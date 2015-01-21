exports.index = function(req, res) {
	res.render('programs', { title: 'Programs' });
};

exports.stringmatch = function(req, res) {
	res.render('stringmatch', { title: 'String match' });
};