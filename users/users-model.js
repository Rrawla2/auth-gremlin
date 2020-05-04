const db = require("../data/db-config.js");


module.exports = {
    add,
    getAll,
    findBy,
    findById,
    remove,
    updateUser
}

function add(user) {
    return db("users")
        .insert(user)
}

function findBy(username) {
    return db("users")
        .where(username)
}

function getAll() {
    return db('users')
}

function findById(id) {
    return db('users')
        .where({id})
        .first()
}

function remove(id) {
    return db('users')
    .where({ id })
    .first()
    .del();
  }


  function updateUser(id, changes) {
    return db('users')
      .where({id})
      .update(changes, '*').returning("*");
  }