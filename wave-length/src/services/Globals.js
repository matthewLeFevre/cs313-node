//================================
// Globals Class
//================================

class Globals {

  headers= {
    "Content-Type": "application/json",
    "Accept": "application/json",
  };

  static createRandomKey(length = 7) {
    let id = "";
    let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
      id += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    return id;
  }

  static htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  static htmlEncode(input) {
    let elt = document.createElement('span'); 
    elt.textContent = input; 
    return elt.innerHTML;
  }

  static createRequest(data) {

    let req = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data),
    }

    return req;
  }

  static createBody(controller, action, payload) {
    let body = {
      controller: controller,
      action: action,
      payload: payload,
    }

    return body;
  }

  static createRequestBody(body) {
    let req = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body),
    }

    return req;
  }

  concatArray(arr1, arr2) {
    return arr1.concat(arr2);
  }

  static getRequest(query, success) {
    fetch(`${this.url}${query}`)
    .then(res => res.json)
    .then(res => {
      console.log(res.status);
      if(res.status === 'success') {
        success(res.data);
      } else {
        // failure(res.message);
      }
    })
  }
}

//Export Statement
export default Globals;