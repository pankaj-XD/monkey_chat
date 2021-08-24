const base = 'http://localhost:3000/api/vi';

// {"authToken":"uShhtGtS1YyLDQq2MTev2Dp74odedBg4aZsIeoGyYnS",
//"_id":"uShhtGtS1YyLDQq2MTev2Dp74odedBg4aZsIeoGyYnS"
//,"avatar":"http://0.0.0.0:3000/avatar/admin69",
//"name":"admin","email":[{"address":"iampankaj0409@gmail.com",
//"verified":false}],"userId":"SweNQYnQtB2YJPPJs"}


// register
const registerForm = document.getElementById('register-form');
if (registerForm) {

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = registerForm.querySelector('[name="username"]').value;
        const email = registerForm.querySelector('[name="email"]').value;
        const pass = registerForm.querySelector('[name="pass"]').value;
        const name = registerForm.querySelector('[name="name"]').value;

        if (email && username && pass && name) {

            const payload = {
                username,
                email,
                pass,
                name,
            };

// mode: "no-cors",
            fetch(`http://0.0.0.0:3000/api/v1/users.register`, {
                method: 'POST',
                headers: {
                    "Access-Control-Allow-Headers" : '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(res => res.json()).then(data => {
                 console.log(data);
                 console.log("req end, registe completed ") 
            }).catch(err => console.error(err));

        } else {
            console.warn("plese enter password and email");
        }

    });




}

// login

const loginForm = document.getElementById('login-form');

if(loginForm){

   loginForm.addEventListener('submit',(e) => {

    e.preventDefault();


    const user = loginForm.querySelector('[name="user"]').value;
    const password = loginForm.querySelector('[name="password"]').value;

    const payload = {user, password};

    if(user && password){

        fetch(`http://0.0.0.0:3000/api/v1/login`,{
            method: 'post',
            headers: {
                "Access-Control-Allow-Headers" : '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()).then(data => {
            console.log(data)
            console.log('req end , login completed')

            if(data.status === 'success'){

                const auth = {
                    authToken : data.data.authToken,
                    _id : data.data.authToken,
                    avatar : data.data.me.avatarUrl,
                    name : data.data.me.name,
                    username : data.data.me.username,
                    email : data.data.me.emails,
                    authToken : data.data.authToken,
                    userId :data.data.userId,
                 };

                localStorage.setItem("auth", JSON.stringify(auth) ); 

            }

        }).catch(err => console.warn(err));

    }


   });



}

//handleLogout

const handleLogout = () => {

    const user = JSON.parse(localStorage.getItem('auth'));

    fetch('http://localhost:3000/api/v1/logout',{
        method: 'post',
        headers: {
            "Access-Control-Allow-Headers" : '*',
            'Content-Type': 'application/json',
            "X-Auth-Token": user.authToken,
            "X-User-Id" : user.userId,
        }
    }).then(res => res.json()).then(data => {
        console.log(data)
        
        if(data.status === "success"){


            console.log('req end , logout complete')
            localStorage.removeItem('auth');

        }

    }).catch(err => console.warn(err));
}


//check login
const checkLogin = () => {

    const auth = localStorage.getItem("auth");

    if(auth){
        console.log("Already logged in");

        // show logout btn

        const actionBox =  document.querySelector('.action__box');

        if(actionBox){
        
            const logoutBtn = document.createElement('button');
            logoutBtn.classList.add('btn','btn-primary','logout-btn');
            logoutBtn.innerHTML = 'logout';
            console.log(logoutBtn)
            actionBox.appendChild(logoutBtn);

            logoutBtn.addEventListener('click',handleLogout);
        } 

    }

}
checkLogin()





