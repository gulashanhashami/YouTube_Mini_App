async function login(){
    let loginData={
             password:document.getElementById("password").value,
             username:document.getElementById("username").value,
    };
       loginData=JSON.stringify(loginData);
       let login_api= `https://masai-api-mocker.herokuapp.com/auth/login`;
       
       //now fetchn request
       let response= await fetch(login_api, {
           method: "POST",
           body: loginData,
           headers: {
               "Content-Type": "application/json",
           },
       });
       let data=await response.json();
       console.log("data", data);
       let username= document.getElementById("username").value;
       getProfile(username,data.token);
       if(data.error===false){
        alert("Sign-In successfully");
        window.location.href="youtube.html";
    }
    else{
        alert("Please enter same username and password.")
    }
}

// now get the profile
async function getProfile(username, token){
      let api= `https://masai-api-mocker.herokuapp.com/user/${username}`;
      let response= await fetch(api, {
          headers: {
              "content-Type": "application/json",
              Authorization: `Bearer ${token}`,
          },
      });
      let data=await response.json();
      console.log("data:", data);
      
}