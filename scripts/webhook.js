function message() {
  let message = document.getElementById("message").value;
  let webhook = document.getElementById("webhookLink").value;

  const content = `${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}

function websiteUpdate() {
  let message = document.getElementById("messageContent").value;
  let heading = document.getElementById("heading").value;
  let subheading = document.getElementById("subheading").value;
  let webhook = "https://discord.com/api/webhooks/1531479914442915932/jsRjOAQCr_JXwri0nCeWZx4Fy3uyXDcK4w_AHMax9XJ68ysbxH7jIQEWuxaPRIRnNDmq";

  const content = `# ${heading} \n ### ${subheading} \n ${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}