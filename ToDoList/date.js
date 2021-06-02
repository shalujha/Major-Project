
exports.getDay=function(){
  let date=new Date();
  let currentDay=date.getDay();
  let options={weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  let today=date.toLocaleDateString("en-US", options);
  return today;
}
