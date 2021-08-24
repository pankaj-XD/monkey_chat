<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="{{ asset('chat.js') }}" defer></script>
    <link rel="stylesheet" href="{{ asset("main.css") }}">
</head>

<body>

    <main>



        <!-- left -->
        <section class="left">


            <h4 class="left-title"># Channels</h4>
            <div class="channel__list">

                {{-- <button class="channel__item">
                    <img src="http://0.0.0.0:3000/avatar/room/GENERAL" class="channel__icon">
                    <strong class="channel__name">abc</strong>
                </button> --}}


              


            </div>



            <h4 class="left-title"># Users</h4>
            <div class="user__list">

                <button class="user__single">
                    <img src="http://0.0.0.0:3000/avatar/room/GENERAL" class="user__icon">
                    <div class="user__info">
                        <strong class="user__name">abc</strong>
                        <p class="user__status">offline</p>
                    </div>
                </button>

                <button class="user__single">
                    <img src="http://0.0.0.0:3000/avatar/room/GENERAL" class="user__icon">
                    <div class="user__info">
                        <strong class="user__name">dog</strong>
                        <p class="user__status">online</p>
                    </div>
                </button>

                <button class="user__single">
                    <img src="http://0.0.0.0:3000/avatar/room/GENERAL" class="user__icon">
                    <div class="user__info">
                        <strong class="user__name">cat</strong>
                        <p class="user__status">offline</p>
                    </div>
                </button>


                {{-- teams --}}

                <div class="team__list">
                
                    <button>
                        <span>A team</span>
                    </button>

                    
                </div>


            </div>

        </section>

        <!-- right -->
        <section class="right">


        <section class="chat__box">

            <div class="welcome__box">
                <h1>Hello...</h1>
                <img src="https://thumbs.dreamstime.com/b/welcome-vector-illustration-opening-web-page-banner-presentation-social-media-documents-posters-greeting-cards-217942472.jpg" alt="" srcset="">
                <h2 class="welcome__box-name">NO Name</h2>
            </div>

            <div class="chat__box-msg">
              
                {{-- <div class="msg">
                    <p class="msg__text">Ajasd</p>
                    <span>fajsdajsdkj</span>
                </div>
                <div class="msg">
                    <p class="msg__text">Ajasd</p>
                    <span>fajsdaj asdasdjads dasdu sdy sdkj</span>
                </div>
                <div class="msg">
                    <p class="msg__text">Ajasd</p>
                    <span>fajsd djshaduhasu ajsdkj</span>
                </div>
                <div class="msg">
                    <p class="msg__text">Ajasd</p>
                    <span>fajsdajsjdsa ds dus dsasdkj</span>
                </div>

                <div class="msg me">
                    <p class="msg__text">Ajasd</p>
                    <span>fajsdajsjdsa ds dus dsasdkj</span>
                </div> --}}
        
            </div>
    
            <form id="send-msg" >
                <input type="text" name="msg" placeholder="enter your msg">
                <button type="submit"> Send</button>
            </form>

        </section>

    </section>


    </main>




</body>

</html>

{{-- 
    {
    "team": {
        "_id": "6124dbdb4fa436000962f787",
        "name": "a_team",
        "type": 0,
        "createdAt": "2021-08-24T11:45:31.004Z",
        "createdBy": {
            "_id": "HhwBEuSAriRv5Gtzu",
            "username": "monkey"
        },
        "_updatedAt": "2021-08-24T11:45:31.004Z",
        "roomId": "Cj9NfEo5cj9GttYwq"
    },
    "success": true
}
 --}}