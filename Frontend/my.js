const SERVER = "http://127.0.0.1:8000"
var apiPath = "/test/product/insert"

function insertProd() {
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            "product": {
              "name": "alo",
              "price": 12
            }
          })
    };

    fetch(SERVER + "/test/product/insert", options).then((res) => res.text()).then(data => 
        document.getElementById('insprod').innerHTML=data);
}

function getProd() {
    fetch(SERVER + '/test/product/get').then(res => res.text()).then(data => 
        document.getElementById('getprod').innerHTML=data);
}