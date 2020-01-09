
exports.seed = function(knex) {
  return knex('diner').insert([
    {id: 1, type: 'diner', username: 'Zorro', email:'Zorro@email.com',password: '$2a$06$AHiH8/1KVnuST8PIweVMxOkDtMdnxf6.X6vUynFCvqGh8z0hkqZ7.', currentLocation: '813 Street ln Austin, TX'},
    {id: 2, type: 'diner', username: 'Spot', email:'Spot@email.com',password: 'password', currentLocation: '318 Street ln Austin, TX'},
    {id: 3, type: 'diner', username: 'Milo', email:'Milo@email.com',password: 'password', currentLocation: '813 Lane st Austin, TX'},
    {id: 4, type: 'diner', username: 'Mimi', email:'Mimi@email.com',password: 'password', currentLocation: '318 Lane st Austin, TX'},
    {id: 5, type: 'diner', username: 'Angel', email:'Angel@email.com',password: 'password', currentLocation: '221 Street ln Austin, TX'}
  ]);
};
