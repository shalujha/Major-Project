// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
alert("hello");
/*
document.getElementsByClassName("card-image")[0].addEventListener("click",function(){
  alert("clicked!!!");
})

*/
var card=document.getElementsByID("addFunction");
card.addEventListener("click",function(){
  alert("clicked");
});
// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}
