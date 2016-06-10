var User = require('mongoose').model('User');
var http = require('http');

exports.bookCalendarId = function (req, res) {
  var calendarId = req.body.calendarID;
  var StartDate = req.body.dateOfMeeting;
  var StartTime = req.body.timeOfMeeting;
  var Duration = req.body.durationOfMeeting;
  var subject = req.body.subjectOfMeeting;
  console.log(calendarId);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Upload');
  res.end();
};
