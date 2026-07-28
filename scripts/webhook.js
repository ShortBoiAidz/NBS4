function message() {
  let message = document.getElementById("message").value;
  let webhook = document.getElementById("webhookLink").value;

  const content = `${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}