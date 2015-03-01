module.exports = function(Student) {

  Student.checkInPre = function(studentId, cb) {
    Student.findById(studentId, function(err, student) {
      student.status = "checked in pre";
      student.save();
      cb(null, "success");
    });
  }

  Student.remoteMethod('checkInPre',{
    accepts: {arg: 'studentId', type: 'string'},
    returns: {arg: 'result', type: 'string'},
    http: {path: '/checkinpre', verb: 'post'}
  });

  Student.checkInAfter = function(studentId, cb) {
    Student.findById(studentId, function(err, student) {
      student.status = "checked in after";
      student.save();
      cb(null, "success");
    });
  }

  Student.remoteMethod('checkInAfter',{
    accepts: {arg: 'studentId', type: 'string'},
    returns: {arg: 'result', type: 'string'},
    http: {path: '/checkinafter', verb: 'post'}
  });

  Student.checkOut = function(studentId, cb) {
    Student.findById(studentId, function(err, student) {
      student.status = "checked out";
      student.save();
      cb(null, "success");
    });
  }

  Student.remoteMethod('checkOut',{
    accepts: {arg: 'studentId', type: 'string'},
    returns: {arg: 'result', type: 'string'},
    http: {path: '/checkout', verb: 'post'}
  });


};
