const jwt = require("jsonwebtoken");

function getToken(user) {
  const { type, username } = user
  const secret = process.env.JWT_SECRET || "secretsecretsecret";
  const payload = { type, username };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;