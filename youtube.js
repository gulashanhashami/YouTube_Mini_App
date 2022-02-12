 //code for button
 document.getElementById("btn").innerHTML=`<img width="30px";
 height="10px" 
 src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png"/>`;
 let searchdiv=document.getElementById("searchRe");
 //you tube api key
 //'https://youtube.googleapis.com/youtube/v3/search?key=[YOUR_API_KEY]' 
 let key=`AIzaSyALkkijVJt_RtJ83l1aUGPIQgWxfIxfgSs`;
 //url for most popular you tube videos in India
 let url1=`https://youtube.googleapis.com/youtube/v3/videos?&part=snippet&chart=mostPopular&regionCode=IN&key=${key}&maxResults=30`;
 //now fetch url for most popular you tube videos in India
 fetch(url1)
       .then(function(res){
            return res.json();
       })
       .then(function(res){
           console.log(res.items)
           displaymovies1(res.items)
       })
       .catch(function(err){
         console.log("err",err);
       });
  //async function for fetching api data
 async function getvideos(){
     try {
         let name=document.getElementById("name").value;
         let url=`https://youtube.googleapis.com/youtube/v3/search?q=${name}&key=${key}&type=video&maxResults=20&part=snippet`;
         let res=await fetch(url);
         let data=await res.json();
         console.log(data);
         displaymovies(data.items)
     }
     catch(err){
         console.log("error",err);
     }
     finally{
         console.log("Worked finally");
     }
 } 
 //display function to display most
 // popular youtube video in India on web page
 function displaymovies1(data){
     searchdiv.innerHTML="";
     data.forEach(({snippet,id})=>{
         //console.log("videoId:",snippet)
         let url=snippet.thumbnails.medium.url;
         console.log(url)
         let div=document.createElement("div");
         let img=document.createElement("img");
         img.setAttribute("id","imgv");
         //or you can use
         img.src=url;
         let h4=document.createElement("h4");
         let title=snippet.title;
         h4.textContent=title;
         div.append(img,h4);
         searchdiv.append(div);
         let videoData={
             snippet,
             id,
         }
         //****function for click and watch video on another page****//
         div.addEventListener("click",function(){
             showvideo1(videoData);
         })
         //or you can use
        // div.onclick=()=>{
             //showvideo(videoData);
        // };
     });
 }
 const showvideo1=(videoData)=>{
     console.log(videoData);
     localStorage.setItem("vidData", JSON.stringify(videoData));
     window.open("popularv.html");
 }
 //function to display api data on web page
 function displaymovies(data){
     searchdiv.innerHTML="";
     data.forEach(({snippet,id:{ videoId }})=>{
         //console.log("videoId:",snippet)
         let url=snippet.thumbnails.medium.url;
         console.log(url)
         let div=document.createElement("div");
         let img=document.createElement("img");
         img.setAttribute("id","imgv");
         //or you can use
         img.src=url;
         let h4=document.createElement("h4");
         let title=snippet.title;
         h4.textContent=title;
         div.append(img,h4);
         searchdiv.append(div);
         let videoData={
             snippet,
             videoId,
         }
         //****function for click and watch video on another page****/
         /*div.addEventListener("click",function(){
             showvideo(videoData);
         })*/
         //or you can use
         div.onclick=()=>{
             showvideo(videoData);
         };
     });
 }
/* function showvideo(videoData){
         console.log(videoData);
 }*/
 //or by arraow function
 const showvideo=(videoData)=>{
     console.log(videoData);
     localStorage.setItem("vidData", JSON.stringify(videoData));
      window.open("video.html");
 }