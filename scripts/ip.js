toggleIPLog = true;

if (toggleIPLog) {
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

      const params = {
        content: "Website accessed: "
      }

      // Requests
      request.open("POST", ipLogger)
      request.setRequestHeader('Content-type', 'application/json');

      // IF statements
      if (ipAddress == joel) {
        request.send(JSON.stringify(params + "[Joel]"));
      }
      else if (ipAddress == aiden) {
        request.send(JSON.stringify(params + "[Aiden]"));
      }
      else if (ipAddress == liam) {
        request.send(JSON.stringify(params + "[Liam]"));
      }
      else if (ipAddress == sam) {
        request.send(JSON.stringify(params + "[Sam]"));
      }
      else if (ipAddress == corey) {
        request.send(JSON.stringify(params + "[Corey]"));
      }
      else {
        request.send(JSON.stringify(params + `[${ipAddress}]`));
      }
    })

    .catch(error => {
      console.error("Error fetching IP address:", error);
    });
}