<body id="background-change">
    <h1 class="welcome-text">Welcome!</h1>
    <div class="enter">
        <form action="welcome.html" target="_blank">
        <button type="submit" >Enter</button>
        </form>
    </div>
</body>
<style>
    body{
        background-image:
    url("https://i.pinimg.com/originals/bc/3d/b4/bc3db4f51517257764fb80ef2f15b724.jpg");
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-name: changeBackground ;
        text-align:center;
    }
    .form{
        text-align: center;
        margin-top: 40px;
        margin-bottom: 50px;
        margin-right: 5px;
    }
    
    p{
        font-size: xx-large;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
    }
    
    input{
        border-radius: 50px;
        width: 200px;
        height: 20px;
        background-color: inherit;
        text-align: center;
        color: black;
        
        
        
    }
    .repository-link{
    display:none;
    }
    button{
        border-radius: 20px;
        background-color: inherit;
        color: black;
        width: 200px;
        margin-top:50%;
        height: 80px;
        
    }
    button:hover{
        cursor:pointer;
    }
    hr{
        margin-top: 70%;
        text-align: center;
        
        
    }
    .bottom{
        text-align: center;
        margin-top: 100px;
        
        
    }
    .enter{
        text-align: center;
        margin-top: 20px;
        margin-right: 5px;
        margin-top: 20%;
    }
    .welcome-text {
    font-size: 4em;
    color: blue;
    animation: animateText 3s ease-in-out infinite;
  }

  @keyframes animateText {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
</style>
