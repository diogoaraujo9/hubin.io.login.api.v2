const noteRoutes = require('./login_routes');

module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};