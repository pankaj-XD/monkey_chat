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
        
        <form id="team-create">
            <input type="text" name="name">
            <button type="submit">create Team</button>
        </form>
    </main>

</body>

</html>

<script>

    const createTeamForm = document.getElementById('team-create');
    createTeamForm.addEventListener('submit', e => {
        e.preventDefault();

            const user = JSON.parse(localStorage.getItem('auth'));

        const teamName = createTeamForm.querySelector('[name="name"]').value;

        if(teamName && user){

            fetch(' http://localhost:3000/api/v1/teams.create',{
                method: "post",
                headers: {
                    "Access-Control-Allow-Headers": '*',
                    'Content-Type': 'application/json',
                    'X-Auth-Token': user.authToken,
                    "X-User-Id": user.userId
                },
                body: JSON.stringify({name : teamName, type: 0}),
            }).then(res => res.json()).then(data => {
                console.log(data);
            }).catch(err => console.log(err));


        }
    })

</script>