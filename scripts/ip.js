fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ipLogger = "https://discord.com/api/webhooks/1531634930948247713/H0W_yonQXNyc1JLYHZx_FOxteN36mqO1s61btCPEoohG6ZtyCCxHH3GlspeR5pp-xlWI";
    const request = new XMLHttpRequest();
    let ipAddress = data.ip

    request.open("POST", ipLogger)
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
      content: `Website accessed: [${ipAddress}]`
    }
    request.send(JSON.stringify(params));
  })
  .catch(error => {
    console.error("Error fetching IP address:", error);
  });