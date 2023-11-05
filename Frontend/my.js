const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        "product": {
          "name": "siuuu",
          "price": 0
        }
      })
};

const SERVER = "http://127.0.0.1:8000"
var apiPath = "/test/product/insert"

function insertProd() {
    fetch(SERVER + apiPath, options).then((res) => res.text()).then(data => 
        document.getElementById('insprod').innerHTML=data);
}

function getProd() {
    fetch(SERVER + '/test/product/get').then(res => res.text()).then(data => 
        document.getElementById('getprod').innerHTML=data);
}