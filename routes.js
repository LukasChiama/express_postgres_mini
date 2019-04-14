const db = require('./queries');

module.exports = router => {
  router.route('/users')
    .post(db.addUser)
    .get(db.getUsers);
  
  router.route('/users/:user_id')
    .get(db.getUser)
    .put(db.updateUser)
    .delete(db.deleteUser)
}