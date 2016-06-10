var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var meetingSchema = new Schema({
  calendarId: String,
  StartDate: Date,
  StartTime: String,
  Duration: Number,
  subject: String,
});
mongoose.model('User', meetingSchema);
