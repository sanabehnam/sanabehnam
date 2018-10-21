function hide()
{
//  document.getElementById("B1").value = "HIDE";
  document.getElementById("myButton2").childNodes[0].nodeValue="HIDE";
  document.getElementById("myButton1").childNodes[0].nodeValue = "show";
  document.getElementById("MYIMG").style.display = "none";
}

function show()
{
  document.getElementById("myButton1").childNodes[0].nodeValue = "SHOW";
  document.getElementById("myButton2").childNodes[0].nodeValue="hide";
  document.getElementById("MYIMG").style.display = "block";
}
