module.exports = function(Student) {

  Student.checkIn = function(studentId, cb) {
    Student.findById(studentId, function(err, student) {
      student.status = "checked in";
      student.save();
      cb(null, "success");
    });
  }

  Student.remoteMethod('checkIn',{
    accepts: {arg: 'studentId', type: 'string'},
    returns: {arg: 'result', type: 'string'},
    http: {path: '/checkin', verb: 'post'}
  });


};
