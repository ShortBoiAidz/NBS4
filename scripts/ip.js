fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();

    // Variables
    let ipAddress = data.ip
    const joel = ["180.181.159.101"];
    const liam = ["202.128.117.13"];
    const aiden = ["103.232.162.32", "103.232.162.33"];
    const sam = ["101.190.15.247"];
    const corey = ["110.148.148.24"];
    const lewis = ["172.225.230.50", "104.28.35.4", "172.225.60.24", "146.75.190.34", "146.75.190.35"];
    const kade = ["104.28.28.0", "139.168.200.229"];
    const benji = ["112.141.43.71"];

    const params = {
      content: "Website accessed: "
    }

    // Requests
    request.open("POST", ipLogger)
    request.setRequestHeader('Content-Type', 'application/json');

    // IF statements
    if (joel.includes(ipAddress)) {
      params.content += "[Joel]";
      request.send(JSON.stringify(params));
    }
    else if (aiden.includes(ipAddress)) {
      params.content += "[Aiden]";
      request.send(JSON.stringify(params));
    }
    else if (liam.includes(ipAddress)) {
      params.content += "[Liam]";
      request.send(JSON.stringify(params));
    }
    else if (sam.includes(ipAddress)) {
      params.content += "[Sam]";
      request.send(JSON.stringify(params));
    }
    else if (corey.includes(ipAddress)) {
      params.content += "[Corey]";
      request.send(JSON.stringify(params));
    }
    else if (lewis.includes(ipAddress)) {
      params.content += "[Lewis]";
      request.send(JSON.stringify(params));
    }
    else if (kade.includes(ipAddress)) {
      params.content += "[Kade]";
      request.send(JSON.stringify(params));
    }
    else if (benji.includes(ipAddress)) {
      params.content += "[Benji]";
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