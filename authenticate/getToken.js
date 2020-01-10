const jwt = require("jsonwebtoken");

function getToken(user) {
  const { type, username, id } = user
  const secret = process.env.JWT_SECRET || "secretsecretsecret";
  const payload = { type:[type], username, id };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;