toggleIPLog = true;

if (toggleIPLog) {
  fetch("http://ip-api.com/json/24.48.0.1")
    .then((response) => response.json())
    .then((data) => {
      const ipLogger =
        "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
      const request = new XMLHttpRequest();

      // IP variables
      let ipAddress = data.query;
      let country = data.country;
      let city = data.city;
      const liam = ["202.128.117.13"];
      const aiden = ["103.232.162.32", "103.232.162.33", "167.172.80.110"];
      const kade = ["104.28.28.0", "139.168.200.229"];
      let randomIP = [];

      // Params variables
      let params = { content: "**Attempted admin login:** " };

      // Requests
      request.open("POST", ipLogger);
      request.setRequestHeader("Content-type", "application/json");

      // Switch / IF
      switch (true) {
        case aiden.includes(ipAddress):
          params.content += "[Aiden]";
          document.title = "ShortBoiAidz | Admin Panel";
          break;
        case liam.includes(ipAddress):
          params.content += "[Liam]";
          document.title = "NemoMan_Dude72 | Admin Panel";
          break;
        case kade.includes(ipAddress):
          params.content += "[Kade]";
          document.title = "SimplyVintage | Admin Panel";
          break;
        default:
          params.content += `${ipAddress} \n**Area:** ${city}, ${country}`;
          randomIP.push(ipAddress);
      }

      request.send(JSON.stringify(params));
    });
};

function message() {
  const dropdown = document.getElementById("webhooks");
  let message = document.getElementById("message").value;
  let testServer = document.getElementById("webhookTest");
  let generalChat = document.getElementById("generalChat");
  let webhook = dropdown.value;
  const content = `${message}`;
  const request = new XMLHttpRequest();

  generalChat.value =
    "https://discord.com/api/webhooks/1531582486050508952/y_igwEGAWS2fbgsBiVId3dq1WOuMdxFWrlpO1jFs0E1LzyWxpj6pYAoVzDAHDqNoM3uZ";
  testServer.value =
    "https://discord.com/api/webhooks/1531283800066228315/PL7PfF3UgCCxD87ksn-E_lTH9Q8K4VkAHy-2FnFKWnbNH_iR3XLnBnQ1DCqfX0RnnR4Q";

  request.open("POST", webhook);
  request.setRequestHeader("Content-type", "application/json");
  const params = { content: content };

  request.send(JSON.stringify(params));
}

function websiteUpdate() {
  let message = document.getElementById("messageContent").value;
  let heading = document.getElementById("heading").value;
  let subheading = document.getElementById("subheading").value;
  let webhook =
    "https://discord.com/api/webhooks/1531547235710664766/bfrwBglqLK5uRW84nTGUMP1SLVD3nVzqXUyi8Ty_55KvbmTR4EKnDFAqTs2uy8E6lg8p";

  const content = `<@&1533659485329952868> \n# ${heading} \n### ${subheading} \n ${message} \n-# Release notes: https://github.com/ShortBoiAidz/NBS4/releases`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook);
  request.setRequestHeader("Content-type", "application/json");
  const params = {
    content: content,
  };
  request.send(JSON.stringify(params));
}