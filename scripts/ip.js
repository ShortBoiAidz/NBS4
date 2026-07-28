fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();

    // Listed IP variables
    const joel = "180.181.159.101";

    const params = {
      content: `Website accessed: [${ipAddress}]`
    }
    const paramsJoel = {
      content: `Website accessed: [Joel]`
    }

    let ipAddress = data.ip
    let allowedIPs = ["103.232.162.32", "202.128.117.13"]; // IN ORDER: Aiden, Liam

    request.open("POST", ipLogger)
    request.setRequestHeader('Content-type', 'application/json');

    if (allowedIPs.includes(ip => ip !== ipAddress)) {
      request.send(JSON.stringify(params));
    }
    else if (ipAddress == joel) {
      request.send(JSON.stringify(paramsJoel));
    }

  })
  .catch(error => {
    console.error("Error fetching IP address:", error);
  });