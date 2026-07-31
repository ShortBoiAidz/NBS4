toggleIPLog = true;

if (toggleIPLog) {
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
      const request = new XMLHttpRequest();

      // IP variables
      let ipAddress = data.ip
      const liam = "202.128.117.13";
      const aiden = "103.232.162.32";

      // Params variables
      let params = {"content": "Attempted admin login: "}

      // Requests
      request.open("POST", ipLogger)
      request.setRequestHeader('Content-type', 'application/json');

      // IF statements
      if (ipAddress == aiden) {
        params.content += "[Aiden]";
        request.send(JSON.stringify(params));
        document.title = "ShortBoiAidz | Admin Panel";
      }
      else if (ipAddress == liam) {
        params.content += "[Liam]";
        request.send(JSON.stringify(params));
        document.title = "NemoMan_Dude72 | Admin Panel"
      }
      else {
        request.send(JSON.stringify(params));
        document.title = "Who the fuck are you !?!"
      }
    })

    .catch(error => {
      console.error("Error fetching IP address:", error);
    });
}


function message() {
  const dropdown = document.getElementById("webhooks");
  let message = document.getElementById("message").value;
  let testServer = document.getElementById("webhookTest");
  let generalChat = document.getElementById("generalChat");
  let webhook = dropdown.value;
  const content = `${message}`;
  const request = new XMLHttpRequest();

  generalChat.value = "https://discord.com/api/webhooks/1531582486050508952/y_igwEGAWS2fbgsBiVId3dq1WOuMdxFWrlpO1jFs0E1LzyWxpj6pYAoVzDAHDqNoM3uZ";
  testServer.value = "https://discord.com/api/webhooks/1531283800066228315/PL7PfF3UgCCxD87ksn-E_lTH9Q8K4VkAHy-2FnFKWnbNH_iR3XLnBnQ1DCqfX0RnnR4Q";

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {content: content}

  request.send(JSON.stringify(params));
}

function websiteUpdate() {
  let message = document.getElementById("messageContent").value;
  let heading = document.getElementById("heading").value;
  let subheading = document.getElementById("subheading").value;
  let webhook = "https://discord.com/api/webhooks/1531547235710664766/bfrwBglqLK5uRW84nTGUMP1SLVD3nVzqXUyi8Ty_55KvbmTR4EKnDFAqTs2uy8E6lg8p";

  const content = `# ${heading} \n ### ${subheading} \n ${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}