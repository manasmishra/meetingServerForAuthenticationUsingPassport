var users = require('../../app/controllers/users.server.controller');
var passport = require('passport');
module.exports = function (app) {
  console.log('Inside routes');
  app.post('/calendarId', users.bookCalendarId);
};
