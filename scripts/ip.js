fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();

    // Variables
    let ipAddress = data.ip
    const joel = ["180.181.159.101"];
    const liam = ["202.128.117.13"];
    const aiden = ["103.232.162.32", "103.232.162.33", "167.172.80.110"];
    const sam = ["101.190.15.247"];
    const corey = ["110.148.148.24"];
    const kade = ["104.28.28.0", "139.168.200.229"];
    const benji = ["112.141.43.71"];
    const superSchool = ["70.64.237.34"];
    let bannedIPs = [kade, liam];

    const params = {
      content: "Website accessed: "
    }

    // Requests
    request.open("POST", ipLogger)
    request.setRequestHeader('Content-Type', 'application/json');

    // Switch

    switch (true) {
      case bannedIPs.includes(ipAddress):
        params.content += `[${ipAddress}]`
        window.location.href="banned.html"
      case aiden.includes(ipAddress):
        params.content += "[Aiden]";
        break;
      case joel.includes(ipAddress):
        params.content += "[Joel]";
        break;
      case liam.includes(ipAddress):
        params.content += "[Liam]";
        break;
      case corey.includes(ipAddress):
        params.content += "[Corey]";
        break;
      case sam.includes(ipAddress):
        params.content += "[Sam]";
        break;
      case kade.includes(ipAddress):
        params.content += "[Kade]";
        break;
      case benji.includes(ipAddress):
        params.content += "[Benji]";
        break;
      case superSchool.includes(ipAddress):
        params.content += "[Super School]";
        break;
      default:
        params.content += `${ipAddress}`;
        window.location.href="banned.html"
    };

    request.send(JSON.stringify(params));

  })

  .catch(error => {
    console.error("Error fetching IP address:", error);
  });