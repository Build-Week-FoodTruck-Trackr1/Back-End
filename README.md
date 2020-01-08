foodtruck-trackr1 BackEnd API
--------------------------------------------

API Deployed at
---------------------------------------------
https://build-foodtruck-trackr1.herokuapp.com/

Librarys Used 
---------------------------------------------
- Express - Fast, unopinionated, minimalist web framework for Node.js.
- BcyrptJs - Hashes passwords to store safely in your database. 
- JsonWebToken - Allows you to generate, verify and decode tokens for authorization. 
- CORS - Middleware that configures the Access-Control-Allow-Origin. 
- Helmet - Secures your Express.js apps by setting various HTTP headers.
- Dotenv - Loads environment variables from a .env file into process.env. 
- atob - decodes information from the token
- Knex-Cleaner - deletes files
- Knex - A multi-dialect query builder for Node.js.
- Nodemon - A tool that helps develop node.js based applications by automatically restarting the node application when a file changes 
- Sqlite3 - Relational database management system (RDBMS).
- Cross-env - Runs scripts that set and use environment variables across platforms.
- Jest - A JavaScript Testing Framework with a focus on simplicity.


Auth Endpoints
--------------------------------------------

| Table    |  Method   |  Endpoint | Required Fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| operator or diner    |  Post     | api/register | username, password, type | Creates a new user profile, returns the username , id, type and a jsonwebtoken in the body of the response|
| operator or diner    |  Post     | api/login | username, password, typee |Uses the username and passowrd sent up to verify the user, if they match, returns the username , id, type and a jsonwebtoken in the body of the response|

Status Codes

- 200 - If you successfully register or log in a user the endpoint will return a response with a status code 200.
- 201 - If you have successfully created a content in a 
- 422 - If you are missing a required field the endpoint will return a response with a status code 422.
- 401 - If you attempt to login with a username or password that does not match what the system has the endpoint will return a response with a status code 401.
- 500 - If there is a server error, the endpoint will return a response with a status code 500.



Api Endpoint
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|----------------------|:-------------|
| users    |  Get     | /users |token labeled as authorization in headers |Returns ALL the users in operator and diner table|
| 

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 500 - If there is a server error, the endpoint will return a response with a status code 500.


Trucks Endpoints
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| trucks | get | / | none | Lists first 100 trucks in the database |

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 404 - If the guide with the specified Id does not exist, the endpoint will return a response with a status code 404
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 403 - If the users account doesn't have the correct type, the endpoint will return a response with a status code 403
- 500 - If there is a server error, the endpoint will return a response with a status code 500.