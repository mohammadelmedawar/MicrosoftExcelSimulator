function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6jzSvGe0GJg":
        Script1();
        break;
      case "5XUIiYAS1Px":
        Script2();
        break;
      case "6Ol8Vfn4TON":
        Script3();
        break;
      case "5mTkjLbd6YL":
        Script4();
        break;
  }
}

function Script1()
{
   var elem = document.documentElement;
 
 if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

}

function Script2()
{
    var elem = document.documentElement;

  if (
  document.fullscreenElement || /* Standard syntax */
  document.webkitFullscreenElement || /* Safari and Opera syntax */
  document.msFullscreenElement /* IE11 syntax */
) {
if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
else{
if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

}

function Script3()
{
    var elem = document.documentElement;

  if (
  document.fullscreenElement || /* Standard syntax */
  document.webkitFullscreenElement || /* Safari and Opera syntax */
  document.msFullscreenElement /* IE11 syntax */
) {
if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
else{
if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

}

function Script4()
{
    var elem = document.documentElement;

  if (
  document.fullscreenElement || /* Standard syntax */
  document.webkitFullscreenElement || /* Safari and Opera syntax */
  document.msFullscreenElement /* IE11 syntax */
) {
if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


}

