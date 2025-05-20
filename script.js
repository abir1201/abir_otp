let activationId = null;

document.getElementById('getNumberBtn').addEventListener('click', () => {
  fetch('http://localhost:3000/api/get-number')
    .then(res => res.json())
    .then(data => {
      if(data.error) {
        alert('Error: ' + data.error);
        return;
      }
      activationId = data.id;
      document.getElementById('number').innerHTML = Number: ${data.number};
      document.getElementById('checkSMSBtn').disabled = false;
      document.getElementById('sms').innerHTML = '';
    })
    .catch(err => alert('Error: ' + err));
});

document.getElementById('checkSMSBtn').addEventListener('click', () => {
  if(!activationId) return alert('No activation ID found');
  fetch(http://localhost:3000/api/get-sms/${activationId})
    .then(res => res.json())
    .then(data => {
      if(data.sms && data.sms.length > 0) {
        document.getElementById('sms').innerHTML = SMS: ${data.sms[0].text};
      } else {
        document.getElementById('sms').innerHTML = 'No SMS received yet';
      }
    })
    .catch(err => alert('Error: ' + err));
});