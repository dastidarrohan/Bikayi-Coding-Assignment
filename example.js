import fetch from 'node-fetch';
function getData() {
    fetch("http://api.nobelprize.org/v1/prize.json")
    .then(response => {
      console.log(response);
      if(!response.ok){
        throw Error("Error");
      }
      return response.json();
    })
    .then(data => {
      console.log(data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
  getData();


