//require the jsonwebtoken module
const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
	// Get the token from the header or as a query param
	let token = req.get("Authorization") || req.query.token;
	if (token) {
		// Remove 'Bearer '
		token = token.replace("Bearer ", "");
		// check if the token is valid and not expired
		jwt.verify(token, process.env.SECRET, (err, decoded) => {
			// if token is valid and not expired, decoded will be the user object
			// If token is invalid or expired, err will be set
			if (err) {
				req.user = null;
			} else {
				req.user = decoded.user;
				req.exp = new Date(decoded.exp * 1000);
			}
		});
	} else {
		req.user = null;
	}
	next();
}

module.exports = checkToken;