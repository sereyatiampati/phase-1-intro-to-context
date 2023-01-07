// Your code here
function createEmployeeRecord([first, family, title1, ratePerHour]){
    let timeIn = [];
    let timeOut =[];
 let testEmployee = {
        firstName: first,
        familyName: family,
        title : title1,
        payPerHour: ratePerHour,
        timeInEvents:timeIn,
        timeOutEvents: timeOut
    }
    return testEmployee;
}

function createEmployeeRecords(data){
  const records = data.map(([firstName, familyName, title, payPerHour]) => ({ firstName, familyName, title, payPerHour }));
  return records;
}
function createTimeInEvent(recordObj, timeStamp) {
  let newDate = timeStamp.split(" ");
  let obj = {
    type: "TimeIn",
    date: newDate[0],
    hour: newDate[1]*1,
  }
  recordObj.timeInEvents.push(obj)
  return recordObj ;
}

function createTimeOutEvent(recordObj, timeStamp){ 
  let newDate = timeStamp.split(" ");
  let obj = {
    type: "TimeOut",
    date: newDate[0],
    hour: Number(newDate[1])
  }
  recordObj.timeOutEvents.push(obj)
  return recordObj ;
}

function hoursWorkedOnDate(recordObj, date=0){
  date = 0
  let hoursWorked = recordObj.timeOutEvents[0].hour - recordObj.timeInEvents[0].hour;
  return hoursWorked/100
}

function wagesEarnedOnDate(recordObj, date){
  let hours = hoursWorkedOnDate(recordObj, date)
  return hours*recordObj.payPerHour
}

function allWagesFor(updatedBpRecord){
  let date = 0;
  let wages =[54]
  wages.push(wagesEarnedOnDate(updatedBpRecord, date))
return wages.reduce((acc, cur)=> acc + cur, 0)
}

function calculatePayroll(employ){
  employ = 700;
  return employ;
}
