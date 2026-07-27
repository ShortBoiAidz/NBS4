function message() {
  let message = document.getElementById("message").value;

  const webhook = "https://discord.com/api/webhooks/1531247446422847508/z0WvZzBpemKPdE-GjVlkmu9qapGRXY7jkOWlHNWIfCr7m7jcq-1EUKeuJ30nZGJdAwoV";
  const content = `${message}`;
  const request = new XMLHttpRequest();
  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}