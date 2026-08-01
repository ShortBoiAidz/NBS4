fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();

    // Variables
    let ipAddress = data.ip
    const joel = "180.181.159.101";
    const liam = "202.128.117.13";
    const aiden = "103.232.162.32";
    const sam = "101.190.15.247";
    const corey = "110.148.148.24";
    const lewis1 = "172.225.230.50";
    const lewis2 = "104.28.35.4";

    const params = {
      content: "Website accessed: "
    }

    // Requests
    request.open("POST", ipLogger)
    request.setRequestHeader('Content-Type', 'application/json');

    // IF statements
    if (ipAddress == joel) {
      params.content += "[Joel]";
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == aiden) {
      params.content += "[Aiden]";
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == liam) {
      params.content += "[Liam]";
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == sam) {
      params.content += "[Sam]";
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == corey) {
      params.content += "[Corey]";
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == lewis1 || ipAddress == lewis2) {
      params.content += "[Lewis]";
      request.send(JSON.stringify(params));
    }
    else {
      params.content += `${ipAddress}`;
      request.send(JSON.stringify(params));
    }
  })

  .catch(error => {
    console.error("Error fetching IP address:", error);
  });