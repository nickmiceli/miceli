function redirectLink () {
  var link = document.getElementById('floatingPassword').value;

  switch(link) {
    case "hej":
      location='https://youtu.be/erpaKGDPxTY';
      break;

    case "stinky":
      location='https://youtu.be/erpaKGDPxTY';
      break;

    case "nectarine":
      location='https://youtu.be/erpaKGDPxTY';
      break;

    case "tempempone":
      location='https://youtu.be/rYlHCMoeIow';
      break;

    case "taylorswift":
      location='https://youtu.be/TYhYeNh9mCw';
      break;

    case "oy":
      location='text.html';
      break;

    case "blog":
      location='text2.html';
      break;

    default:
      var text = document.getElementById("wrongText");
      text.innerHTML = "Incorrect password. Maybe try it again or double check (Make sure it's all lower case)";
  }

  return false;
}