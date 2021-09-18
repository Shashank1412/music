var music = document.getElementById('music');
var duration;
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var playhead = document.getElementById('playhead');
var timeline = document.getElementById('timeline');
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

music.addEventListener("timeupdate", timeUpdate, false);
music1.addEventListener("timeupdate", timeUpdate, false);

timeline.addEventListener("click", function(event) {
  moveplayhead(event);
  music.currentTime = duration * clickPercent(event);
}, false);

timeline.addEventListener("click", function (event) {
  moveplayhead(event);
  music1.currentTime = duration * clickPercent(event);
}, false);

function clickPercent(e) {
  console.log(e);
  return (e.pageX - timeline.offsetLeft) / timelineWidth;
}

playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

var onplayhead = false;

function mouseDown() {
  onplayhead = true;
  window.addEventListener('mousemove', moveplayhead, true);
  music.removeEventListener('timeupdate', timeUpdate, false);
}

function mouseDown() {
  onplayhead = true;
  window.addEventListener('mousemove', moveplayhead, true);
  music1.removeEventListener('timeupdate', timeUpdate, false);
}

function mouseUp(e) {
  if (onplayhead == true) {
    moveplayhead(e);
    window.removeEventListener('mousemove', moveplayhead, true);
    music.currentTime = duration * clickPercent(e);
    music.addEventListener('timeupdate', timeUpdate, false);
  }
  onplayhead = false;
}
function mouseUp(e) {
  if (onplayhead == true) {
    moveplayhead(e);
    window.removeEventListener('mousemove', moveplayhead, true);
    music.currentTime = duration * clickPercent(e);
    music.addEventListener('timeupdate', timeUpdate, false);
  }
  onplayhead = false;
}

function moveplayhead(e) {
  var newMargLeft = e.pageX - timeline.offsetLeft;
  if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
    playhead.style.marginLeft = newMargLeft + "px";
  }
  if (newMargLeft < 0) {
    playhead.style.marginLeft = "0px";
  }
  if (newMargLeft > timelineWidth) {
    playhead.style.marginLeft = timelineWidth + "px";
  }
}

function timeUpdate() {
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.marginLeft = playPercent + "px";
}

function play() {
  if (music.paused) {
    music.play();
  }
}
function nxt(){
  window.location.assign('steoreo.html')
}

function nxt1() {
  window.location.assign('index.html')
}


function pause() {
  if (music.play) {
    music.pause();
  }
}

music.addEventListener("canplaythrough", function() {
  duration = music.duration;
}, false);

$("#draggable").draggable({
  handle: "#handle"
});

$("#draggable1").draggable({
  handle: "#handle"
});

$(function() {
  $("#draggable").draggable();
});

$("#handle").mousedown(function() {
  $("#musicCont").removeClass("settle");
  $("#musicCont").addClass("lift");
});

$("#handle").mouseup(function() {
  $("#musicCont").removeClass("lift");
  $("#musicCont").addClass("settle");
});
