async function register(){
    let signupData={
             name:document.getElementById("name").value,
             email:document.getElementById("email").value, 
             password:document.getElementById("password").value,
             username:document.getElementById("username").value,
             mobile:document.getElementById("mobile").value,
             description:document.getElementById("description").value,
    };
    signupData=JSON.stringify(signupData)// re-assignment
    console.log("signupData:", signupData)
    //masai api mocker
    let register_api=`https://masai-api-mocker.herokuapp.com/auth/register`;
    //POST
   let response= await fetch(register_api, {
        method: "POST",
        body: signupData,
        headers: {
             "Content-Type": "application/json",
        },
    });
    let data=await response.json();
    console.log("data:",data);
    if(data.error===false){
        alert("Sign-Up successfully");
        window.location.href="signin.html";
    }
    else{
        alert("Please enter correct data.")
    }
}
