exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Develop network of sycophants ',
      notes:
        'Blind loyalty is the only requisite',
    },
    {
      project_id: 1,
      description: 'Take over the internet',
      notes: 'Will help convice the people to install our own autocratic sycophants',
    },
    {
      project_id: 1,
      description: 'Become Supreme Emperor',
      notes: 'Margarita Time!',
    },
  ]);
};
