<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   <script src="{{ asset('main.js') }}" defer></script>
    <link rel="stylesheet" href="{{ asset('main.css') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
 
    <a href="/" class="btn btn-primary">home</a>
    <a href="/register" class="btn btn-primary">Register</a>


    <form action="" id="login-form">
        <input type="text" name="user" placeholder="enter username or email">
        <input type="password" name="password" placeholder="password">
        <button type="submit">Login</button>
    </form>




    
</body>
</html>