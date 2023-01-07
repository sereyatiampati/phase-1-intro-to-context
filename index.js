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
let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
let updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
//console.log(updatedBpRecord);
date = 0
//console.log(wagesEarnedOnDate(updatedBpRecord, date));

function wagesEarnedOnDate(recordObj, date){
  let hours = hoursWorkedOnDate(recordObj, date)
  return hours*recordObj.payPerHour
}
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")

function allWagesFor(updatedBpRecord){
  let date = 0;
  let totalWages = 0; 
  wage = wagesEarnedOnDate(updatedBpRecord, date)
  totalWages+=wage
  return totalWages
}
console.log(allWagesFor(updatedBpRecord));

function calculatePayroll(){

}
