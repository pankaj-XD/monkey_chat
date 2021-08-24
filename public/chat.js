//check auth
const user = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null;

var speed = 5000;


const listChannel = () => {
    if (user) {

        //set name on welcome
        document.querySelector('.welcome__box-name').innerHTML = user.username;


        fetch("http://localhost:3000/api/v1/channels.list", {
            method: 'get',
            headers: {
                "Access-Control-Allow-Headers": '*',
                'Content-Type': 'application/json',
                'X-Auth-Token': user.authToken,
                "X-User-Id": user.userId
            }
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                //render channel list
                let str = ``;
                data.channels.forEach(channel => {

                    str += `<button class="channel__item channel" data-channel="${channel._id}">
                    <img src="http://0.0.0.0:3000/avatar/room/GENERAL" class="channel__icon">
                    <strong class="channel__name" data-channel="${channel._id}">${channel.name}</strong>
                </button>
`
                    // str += `<button class="channel" data-channel="${channel._id}" > ${channel.name} </button>`
                });

                document.querySelector('.channel__list').innerHTML = str;

                // add get channel msg event
                document.querySelectorAll('.channel').forEach(channel => channel.addEventListener('click', getChannelMsg));



            })
            .catch(err => console.warn(err))
    } else {
        console.log("you have to login first")
    }

}

//get list of channels
listChannel();


const renderMessages = (roomId) => {

    fetch(`http://localhost:3000/api/v1/channels.messages?roomId=${roomId}`, {
        headers: {
            "Access-Control-Allow-Headers": '*',
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            "X-User-Id": user.userId
        }
    })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let str = '';
            data.messages.forEach(msg => {

                if (msg.u.username === user.username) {
                    str += `<div class="msg me"><p class="msg__text">${msg.u.username}</p><span>${msg.msg}</span></div>`;
                } else {
                    str += `<div class="msg"><p class="msg__text">${msg.u.username}</p><span>${msg.msg}</span></div>`;
                }

            })

            document.querySelector('.chat__box-msg').innerHTML = str;
        })
        .catch(err => console.warn(err))
}



// get channel msgs's
const getChannelMsg = (e) => {

    if (e.target.dataset.channel) {

        // hide welcome
        document.querySelector('.welcome__box').style.display = "none";

        //set channelId in  send form
        document.getElementById('send-msg').dataset.sendTo = e.target.dataset.channel;

        renderMessages(e.target.dataset.channel);

        let channelId = e.target.dataset.channel;

        setInterval(() => {
            renderMessages(channelId);
        }, 5000);
      
       
    }

}



//send msg to channel
const sendChannelMsgForm = document.getElementById('send-msg');
if (sendChannelMsgForm) {


    sendChannelMsgForm.addEventListener('submit', e => {
        e.preventDefault();
        const sendTo = sendChannelMsgForm.dataset.sendTo;
        const user = JSON.parse(localStorage.getItem('auth'));


        if (user) {
            const msg = sendChannelMsgForm.querySelector('[name="msg"]').value;
            const attachments = { author_name: user.name };

            if (msg) {
                const payload = { roomId: sendTo, text: msg, attachments };

                console.log(payload)
                fetch(`http://localhost:3000/api/v1/chat.postMessage`, {
                    method: "post",
                    headers: {
                        "Access-Control-Allow-Headers": '*',
                        'Content-Type': 'application/json',
                        'X-Auth-Token': user.authToken,
                        "X-User-Id": user.userId
                    },
                    body: JSON.stringify(payload)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.success) {
                            sendChannelMsgForm.querySelector('[name="msg"]').value = '';
                        }

                    })
                    .catch(err => console.warn(err))

            }
        }
    })
}



//=================== get users list

const getUsersList = () => {
    if (!user) return;

    fetch("http://localhost:3000/api/v1/users.list", {
        headers: {
            "Access-Control-Allow-Headers": '*',
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            "X-User-Id": user.userId
        }
    }).then(res => res.json()).then(data => {
        console.log(data)

        // list user
        if (data.success) {

            let str = "";

            data.users.forEach(u => {
                if (u._id === user._id) return;
                str += `
                <button class="user__single" data-userId="${u._id}">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-CujXEB_pHNjg6VnEKrUJW-sgY-6glbQhw&usqp=CAU" class="user__icon">
                    <div class="user__info">
                        <strong class="user__name" data-userId="${u._id}">${u.name}</strong>
                        <p class="user__status">${u.status}</p>
                    </div>
                </button>`;
            });

            document.querySelector('.user__list').innerHTML = str;
            const users = document.querySelectorAll('.user__single');

            //creat direct msg sesion event

            users.forEach(u => u.addEventListener('click', createDirectMessage))


        }


    }).catch(err => console.warn(err));


}
getUsersList()


//=================== direct chat



// Create a direct message session with another user.
function createDirectMessage(e) {

    if (!e.target.dataset.userid) return;

    // get user
    fetch(`http://localhost:3000/api/v1/users.info?userId=${e.target.dataset.userid}`, {
        headers: {
            "Access-Control-Allow-Headers": '*',
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            "X-User-Id": user.userId
        }
    }).then(res => res.json()).then(data => {
        // console.log(data)
        if (data.success) {

            //create direct msg session
            fetch('http://0.0.0.0:3000/api/v1/im.create', {
                method: 'post',
                headers: {
                    "Access-Control-Allow-Headers": '*',
                    'Content-Type': 'application/json',
                    'X-Auth-Token': user.authToken,
                    "X-User-Id": user.userId
                },
                body: JSON.stringify({ "username": user.username })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                    if (data.success) {
                        //show chat
                        showDirectChat(data);
                    }

                }).catch(err => console.warn(err))


        }

    }).catch(err => console.warn(err));
}


function showDirectChat(data) {
    console.log(data)


    // hide welcome
    document.querySelector('.welcome__box').style.display = "none";

    //render room/direct messages
  
    setInterval(() => {
        renderDirectMessages(data.room.rid) 
    }, 5000);
  


    //set roomId in  send form
    document.getElementById('send-msg').dataset.sendTo = data.room.rid;
}


//render room/direct message
function renderDirectMessages(roomId){

    fetch(` http://localhost:3000/api/v1/im.history?roomId=${roomId}`, {
        headers: {
            "Access-Control-Allow-Headers": '*',
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            "X-User-Id": user.userId
        }
    }).then(res => res.json()).then(data => {
        
        console.log(data)
        //append msg
        if(data.success){

            let str = '';

            data.messages.forEach(msg => {
                if (msg.u.username === user.username) {
                    str += `<div class="msg me"><p class="msg__text">${msg.u.username}</p><span>${msg.msg}</span></div>`;
                } else {
                    str += `<div class="msg"><p class="msg__text">${msg.u.username}</p><span>${msg.msg}</span></div>`;
                }

            })
                  
            document.querySelector('.chat__box-msg').innerHTML = str;


        }
        


    }).catch(err => console.warn(err));

}


//send direct msg
function sendDirectMessage(sendTo) {

    let msg = {
        rid: sendTo,
        msg: "boombam"
    };


    fetch('http://0.0.0.0:3000/api/v1/chat.sendMessage', {
        method: 'post',
        headers: {
            "Access-Control-Allow-Headers": '*',
            'Content-Type': 'application/json',
            'X-Auth-Token': user.authToken,
            "X-User-Id": user.userId
        },
        body: JSON.stringify({ message: msg }),
    }).then(res => res.json()).then(data => {
        console.log(data)
    })

}



