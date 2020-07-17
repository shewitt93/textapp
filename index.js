const host = "http://localhost:8000"
const nameList = document.querySelector('span');
// btn.addEventListener('click', getMessage);

function changeName(data){
  data.name.forEach(changeName);
};

function changeName(nameData){
  const newp = document.createElement('p');
  newp.textContent = `Name: ${nameData}`
  nameList.append(newp);
};
  
function reverseString() {
  const inputel = document.getElementById('name')
  
  const options = {
    method: "POST",
    body: inputel.value
  };

  fetch(`${host}/reverseString`, options)
    .then((r) => r.json())
    .then((data) => console.log(data))

    .catch(console.warn); 

  
}
// function getMessage(){
//   fetch('http://localhost:8000')
//       .then(r => r.text())
//       .then(renderMessage)
//       .catch(console.warn)
// };

// function renderMessage(msgText){
//   const msg = document.createElement('p');
//   msg.textContent = msgText;
//   msg.style.color = 'red';
//   document.body.append(msg);
// };