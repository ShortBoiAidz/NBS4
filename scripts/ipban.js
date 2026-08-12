fetch('http://ip-api.com/json/24.48.0.1')
  .then(response => response.json())
  .then(data => {
    let ipAddress = data.query
    const joel = ["180.181.159.101"];
    const liam = ["202.128.117.13"];
    const aiden = ["103.232.162.32", "103.232.162.33", "167.172.80.110"];
    const sam = ["101.190.15.247"];
    const corey = ["110.148.148.24"];
    const kade = ["104.28.28.0", "139.168.200.229"];
    const benji = ["112.141.43.71"];
    const superSchool = ["70.64.237.34"];
    let bannedIPs = [kade, liam];

    if (bannedIPs.includes(ipAddress)) {
      window.location.href="banned.html";
    }
  });