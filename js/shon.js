
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("story");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("border-bttm", "");
  }
  document.getElementById(cityName).style.display = "block";
  if(cityName == "Part1"){
      document.getElementById("part1Tease").className += " border-bttm";
  }
  if(cityName == "Part2"){
      document.getElementById("part2Tease").className += " border-bttm";
  }
  if(cityName == "Part3"){
      document.getElementById("part3Tease").className += " border-bttm";
  }
  if(cityName == "Part4"){
      document.getElementById("part4Tease").className += " border-bttm";
  }
  if(cityName == "Part5"){
      document.getElementById("part5Tease").className += " border-bttm";
  }
  if(cityName == "Part6"){
      document.getElementById("part6Tease").className += " border-bttm";
  }
  // evt.currentTarget.firstElementChild.className += " border-bttm";
}

x = document.getElementsByClassName("tablink");
if ($(window).width() < 800) {
    // for (i = 0; i < x.length; i++) {
    //   x[i].innerHTML = i + 1;
    // }
    for (i = 0; i < x.length; i++) {
      x[i].style.width = "33.33333%"
    }
    document.getElementById("masterhead").style.height = "100vh";
    document.getElementById("sitehead").style.paddingTop = "180px";
    document.getElementById("video1").height = "225";
    document.getElementById("video2").height = "225";
    document.getElementById("video3").height = "225";
    document.getElementById("video4").height = "225";
    thehead = document.getElementById("thehead");
    thehead.style.fontSize = "60px"
}

if(1000 > $(window).width() > 800) {
    thehead = document.getElementById("thehead");
    thehead.style.fontSize = "90px"
}
