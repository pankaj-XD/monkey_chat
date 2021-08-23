

//check auth
const user = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : null;


const listChannel = () => {
    if (user) {

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
       
                if(msg.u.username  === user.name){
                    str += `<div class="msg me"><p class="msg__text">${msg.u.username}</p><span>${msg.msg}</span></div>`;
                }else{
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

        //set channelId in  send form
        document.getElementById('send-msg').dataset.sendTo = e.target.dataset.channel;

        renderMessages(e.target.dataset.channel);

        let channelId = e.target.dataset.channel;

        setInterval(()=> {
            renderMessages(channelId);
        },1000);
        


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
                        if(data.success){
                            sendChannelMsgForm.querySelector('[name="msg"]').value = '';
                        }

                    })
                    .catch(err => console.warn(err))

            }
        }
    })
}






