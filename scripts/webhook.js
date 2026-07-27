function message() {
  let message = document.getElementById("message").value;

  const webhook = "https://discord.com/api/webhooks/1531250659134013582/UwdAddAf2j4zDecpGjyCsmK3oJkit-WB4_W3qYUaq8IbM27Qoa6n_pLdYVaB1ZHnZ9hU";
  const content = `${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}