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
 
   
<h1>Register</h1>

<form  id="register-form">
    <div class="form-group">
        <label >Username</label>
        <input type="text" name="username" class="form-control">
      </div>
    
    <div class="form-group">
      <label >Email address</label>
      <input type="email" name="email" class="form-control">
    </div>
   
    <div class="form-group">
        <label >Password</label>
        <input type="password" name="pass" class="form-control">
    </div>

    <div class="form-group">
        <label >Name</label>
        <input type="text" name="name" class="form-control">
      </div>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

    
</body>
</html>
