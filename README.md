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
- Knex-Cleaner - Helper library to clean a PostgreSQL, MySQL or SQLite3 database tables using Knex. Great for integration tests.
- Knex - A multi-dialect query builder for Node.js.
- Nodemon - A tool that helps develop node.js based applications by automatically restarting the node application when a file changes 
- Sqlite3 - Relational database management system (RDBMS).
- Cross-env - Runs scripts that set and use environment variables across platforms.
- Jest - A JavaScript Testing Framework with a focus on simplicity.


Auth Endpoints
--------------------------------------------

| Table    |  Method   |  Endpoint | Required Fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| users    |  Get     | api/operators |token labeled as authorization in headers |Returns ALL the users in operator database |
| users    |  Get     | api/diners |token labeled as authorization in headers |Returns ALL the users in diner database|
| operator or diner    |  Post     | api/register | username, password, type | Creates a new user profile, returns the username , id, type and a jsonwebtoken in the body of the response|
| operator or diner    |  Post     | api/login | username, password, typee |Uses the username and passowrd sent up to verify the user, if they match, returns the username , id, type and a jsonwebtoken in the body of the response|

Status Codes

- 200 - If you successfully register or log in a user the endpoint will return a response with a status code 200.
- 201 - If you have successfully created a content in a 
- 422 - If you are missing a required field the endpoint will return a response with a status code 422.
- 401 - If you attempt to login with a username or password that does not match what the system has the endpoint will return a response with a status code 401.
- 500 - If there is a server error, the endpoint will return a response with a status code 500.



Trucks Endpoints
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| trucks | get | /trucks/ | none | Lists first 100 trucks in the database |
| trucks | get | /trucks/owned/ | token with operator_id| Lists the trucks owned by the operator that is logged in|
| trucks | post | /trucks/ | name, operator_id, cuisineType | Adds truck to the database |
| trucks | delete | /trucks/ | none | deletes a truck if and only if the operator_id and name of the truck matches with one in the database |
| trucks | put | /trucks/ | name, operator_id, cuisineType | Modifies a truck if and only if a user has a matching operator_id and truck name |
| trucks | post | /trucks/search/ | name or cuisineType or customerRatingAvg | searches the truck data base depending on which key a user has searched for |

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 404 - If the truck with the specified id or name does not exist, the endpoint will return a response with a status code 404
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 403 - If the user account doesn't have the correct type, the endpoint will return a response with a status code 403
- 500 - If there is a server error, the endpoint will return a response with a status code 500.

Menu Endpoints
----------------------------------------------

| Table    |  Method   |  Endpoint | required fields       | Description  |
|----------|:---------|:----------|:----------------------|:-------------|
| menuItems | post | /trucks/menu/ | name(name of the truck) | list the items in the menu for the given truck |
| menuItems | post | /trucks/menu/additem/ | truck_id, itemName(must be unique), itemDescription, customerRatingAvg | Adds an item in the truck's menu array |

Status Codes
- 200 - If the get request successfully goes through the endpoint will return a response with a status code 200
- 404 - If the menu with the specified name does not exist, the endpoint will return a response with a status code 404
- 401 - If there is no token on the headers of the request, the endpoint will return a response with a status code 401
- 403 - If the user account doesn't have the correct type, the endpoint will return a response with a status code 403
- 500 - If there is a server error, the endpoint will return a response with a status code 500.