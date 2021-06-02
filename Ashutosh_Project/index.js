//const form = document.forms[0];
/*
var button=document.getElementById("submit");
button.addEventListener("click", function(event) {
  const { fnumbers,lnumbers} = this.elements;
  // or
  // const { name, description, task } = event.target.elements;
  console.log(fnumbers.value, lnumbers.value);
  var sum=parseInt(fnumbers.value)+parseInt(lnumbers.value);
   console.log(sum);
   $("#result").text(sum);
   document.getElementById("result").style.visibility = "visible";
  // $("#result").style.visibility="visible";
});
*/
var button=document.getElementById("submit");
button.addEventListener("click", function(event) {
  var myData = getFormData("#myform");
  //console.log(myData["fnumbers"]);
  var sum=parseInt(myData['fnumbers'])+parseInt(myData['lnumbers']);
  console.log(sum);
  let result = $('#result')
  result.style.display = "block";
  result.value = sum

  // $("#result").text(sum);
  // $("#result").classList.remove("text-visibility");
//  $(".result").classList.add("text-visibility2");
});

function getFormData(dom_query){
    var out = {};
    var s_data = $(dom_query).serializeArray();
    //transform into simple data/value object
    for(var i = 0; i<s_data.length; i++){
        var record = s_data[i];
        out[record.name] = record.value;
    }
    return out;
}
