console.log("connect.js")


const socket = new WebSocket('ws://localhost:3000/websocket');

socket.addEventListener('open', e => {

    socket.send(JSON.stringify({
        "msg": "connect",
        "version": "1",
        "support": ["1"]
    }))

    // socket.send(JSON.stringify({
    //     "msg": "method",
    //     "method": "registerUser",
    //     "id":"42",
    //     "params": [{
    //         "email": "abc@gmail.com",
    //         "pass": "12345",
    //         "name": "noname",
    //     }],
    // }))
    
    socket.send(JSON.stringify({
        "msg": "method",
        "method": "rooms/get",
        "id": "42",
        "params": [ { "$date": new Date() } ]
    }))
  
    
    socket.onmessage = function (event) {
        console.log(JSON.parse(event.data));
        // console.log("R  E  _   R   E  N  D  E  R")
    }
      

})