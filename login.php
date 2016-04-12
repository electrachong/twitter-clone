<!DOCTYPE html>
<html lang="en">
    <head>
        <title>nomz. Login</title>
        <link rel="stylesheet" type="text/css" href="twitter-clone.css">
        <link rel="stylesheet" type="text/css" href="login.css">
    </head>

    <body>
        <div id="container">
        
            <header>
                
                <!-- logo -->
                <div id="logoContainer">
                    <img id="logo" src="http://twinsfunnfood.com/assets/twins/images/food.png" alt="logo of fork with knife" width="100" height="100" />
                    <p id="tagline">Share your nomz</p>
                </div>
                
                <!-- Show website name -->
                <h1>nomz.</h1>
                
                
                    <!-- settings links -->
                    <ul id="settings">
                        <li id="editProfile"><a href="#">Edit my profile </a></li>
                        <li><a href="#"> Logout</a></li>
                    </ul>
                    
                    <!-- navigation bar -->
                    <ul id="navigation">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">My statuses</a></li>
                        <li><a href="#">All users</a></li>
                        <li><a href="http://impossible-octopus-fitness.netne.net/">About</a></li>
                     </ul>     
                
            </header>
            
            <main>
            <h2>Login!</h2>
            <p>Please enter your username and password below.</p>
            
            <form id="login_form" action="/index.php" method="POST">
                <input name="login" type="text">
                <input name="password" type="password">
                <input type="submit">
            </form>
            </main>
            
        </div>
    </body>
</html>