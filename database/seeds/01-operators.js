
exports.seed = function(knex) {
  return knex('operator').insert([
    {id: 1, type: 'operator', username: 'Jack', email:'jack@email.com',password: '$2a$06$AHiH8/1KVnuST8PIweVMxOkDtMdnxf6.X6vUynFCvqGh8z0hkqZ7.', currentLocation: '123 Street ave, Seattle, WA'},
    {id: 2, type: 'operator', username: 'Daniel', email:'Daniel@email.com',password: 'password', currentLocation: '321 Street ave, Seattle, WA'},
    {id: 3, type: 'operator', username: 'Brock', email:'Brock@email.com',password: 'password', currentLocation: '123 w Avenue st, Seattle, WA'},
    {id: 4, type: 'operator', username: 'Aaron', email:'Aaron@email.com',password: 'password', currentLocation: '321 Avenue st, Seattle, WA'},
    {id: 5, type: 'operator', username: 'Yousef', email:'Yousef@email.com',password: 'password', currentLocation: '111 street ave, Seattle, WA'},
  ]);
};
