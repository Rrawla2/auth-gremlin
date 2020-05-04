
exports.up = function(knex) {
  return knex.schema.createTable('wordlists', wordlist => {
    wordlist.increments();
    
    wordlist.string('wordlist', 2048)
      .notNullable()
    wordlist.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    wordlist.string("title", 256).notNullable();
    })
   
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('wordlists')
};
