{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="{{ asset('chat.js') }}" defer></script>
    <link rel="stylesheet" href="{{ asset("main.css") }}">
</head>
<body> --}}
{{-- 

    <section class="channel__list">
        <span>
            General
        </span>
        <span>
            abc
        </span>
        <span>
            xyz
        </span>
    </section>


    <section class="chat__box"> 
     
        <div class="chat__box-msg">
            <p>h1</p>
            <p>h1</p>
            <p>h1</p>
            <p>h1</p>
    
            <p>h1</p>
            <p>h1</p>
            <p>h1</p>
    
        </div>

        <form  id="send-msg" >
            <input type="text" name="msg" placeholder="enter your msg">
            <button type="submit"> Send</button>
        </form>

    </section> --}}
    



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



            </div>

        </section>

        <!-- right -->
        <section class="right">


        <section class="chat__box">

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