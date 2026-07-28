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
  let webhook = "https://discord.com/api/webhooks/1531283800066228315/PL7PfF3UgCCxD87ksn-E_lTH9Q8K4VkAHy-2FnFKWnbNH_iR3XLnBnQ1DCqfX0RnnR4Q";

  const content = `# ${heading} \n ### ${subheading} \n ${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}