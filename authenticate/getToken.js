const jwt = require("jsonwebtoken");

function getToken(user) {
  console.log(user)
  const { type, username, id } = user
  const secret = process.env.JWT_SECRET || "secretsecretsecret";
  const payload = { type, username, id, role:[type.toString()] };
  const options = { expiresIn: "1h" };
  return jwt.sign(payload, secret, options);
}

module.exports = getToken;