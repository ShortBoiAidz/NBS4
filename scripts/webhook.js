function message() {
  let message = document.getElementById("message").value;

  const webhook = "https://discord.com/api/webhooks/1531283800066228315/PL7PfF3UgCCxD87ksn-E_lTH9Q8K4VkAHy-2FnFKWnbNH_iR3XLnBnQ1DCqfX0RnnR4Q";
  const content = `${message}`;
  const request = new XMLHttpRequest();

  request.open("POST", webhook)
  request.setRequestHeader('Content-type', 'application/json');
  const params = {
    content: content
  }
  request.send(JSON.stringify(params));
}

// Test webhook: https://discord.com/api/webhooks/1531283800066228315/PL7PfF3UgCCxD87ksn-E_lTH9Q8K4VkAHy-2FnFKWnbNH_iR3XLnBnQ1DCqfX0RnnR4Q

// Noodlebox webhook: https://discord.com/api/webhooks/1531250659134013582/UwdAddAf2j4zDecpGjyCsmK3oJkit-WB4_W3qYUaq8IbM27Qoa6n_pLdYVaB1ZHnZ9hU