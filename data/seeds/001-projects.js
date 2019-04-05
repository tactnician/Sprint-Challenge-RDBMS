
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Project X',
      description:
        'Take over the world',
    },
  ])
};
