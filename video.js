//getb the data
let vData=JSON.parse(localStorage.getItem("vidData")) || [];
//iframe to display the video data
 var iframe=document.createElement("iframe");
 let h4=document.createElement("h4");
 let title=vData.snippet.title;
 h4.textContent=title;
 iframe.src=`https://www.youtube.com/embed/${vData.videoId}`;
 iframe.width="100%";
 iframe.height="80%";
 iframe.setAttribute("allowfullscreen", true);
 let videobox=document.getElementById("videobox");
 videobox.append(iframe,h4);