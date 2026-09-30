let captchachecked = false;
function beforeSubmit(e){
 if(captchachecked){
    let inputdate = document.querySelector(".inputdate").value;
    let outputdate = document.querySelector(".outputdate");
    outputdate.value=inputdate;
    } else{
        alert("Please check the Recaptcha");
        e.preventDefault();
    }
}

 function timestamp() { 
 var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
  var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
  elems["ts"] = JSON.stringify(new Date().getTime());
  document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
  } 
  } 
  setInterval(timestamp, 500); 

  function recaptchaCheck(){
    captchachecked=true;
  }