const guud=document.createElement("div");
const guud1=document.querySelector("body");
guud1.appendChild(guud);
const newBoxStyle=`
background-color:rgb(252,248,250);
box-shadow: -0px -0px 1px 1px  grey;
width:800px;
height:300px;
margin-top:130px;
margin-left:130px;
`
guud.style.cssText=newBoxStyle

const sawirMagac=document.createElement("div");
guud.appendChild(sawirMagac);
const sawirMagacStyle=`
background-color:rgb(252,248,250);
width:500px;
height:110px;
margin-top:130px;
display:flex;

`
sawirMagac.style.cssText=sawirMagacStyle

const sawir=document.createElement("img")
sawirMagac.appendChild(sawir)
sawir.src='./sawir1.jpg'
const sawirStyle=`
width:70px;
height:70px;
margin-top:25px;
margin-left:10px;
border-radius:100px;
`
sawir.style.cssText=sawirStyle;

const magacTaariikh=document.createElement("div")
sawirMagac.appendChild(magacTaariikh)

const magacTaariikhStyle=`
background-color: rgb(252,248,250);
width:200px;
height:100px;
margin-top:42px;
margin-left:20px;
`

magacTaariikh.style.cssText=magacTaariikhStyle



const magac=document.createElement("div");
magacTaariikh.appendChild(magac);
magac.innerHTML="wonder woman"

const magacStyle=`
font-weight:bolder;
font-family:verdana


`
magac.style.cssText=magacStyle

const taariikh=document.createElement("span");
magacTaariikh.appendChild(taariikh);
taariikh.innerHTML="public-09 jun,2021"

const taariikhStyle=`
font-weight:bolder;
color:grey;

`
taariikh.style.cssText=taariikhStyle
const lorem=document.createElement("div")
guud.appendChild(lorem)
lorem.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur ."

const loremStyle=`
font-size:20px;
font-family:bodoni mt;
margin:15px ;
font-weight:400;
`
lorem.style.cssText=loremStyle

const feedBack=document.createElement("div")
guud.appendChild(feedBack)

const feedBackStyle=`
display:flex;
gap:25px;
margin: 20px 15px;
font-size:15px;
feedBack:hover {color:cyan;}
`

feedBack.style.cssText=feedBackStyle

const like=document.createElement("div")
feedBack.appendChild(like)

const likeStyle=`
display:flex;
`
like.style.cssText=likeStyle
const likeImage=document.createElement("img")
like.appendChild(likeImage)
likeImage.src="./like.jpg"

const likeImageStyle=`
width:20px;
height:20px;
margin-top:10px
`
likeImage.style.cssText=likeImageStyle

const likeText=document.createElement("div")
like.appendChild(likeText)
likeText.innerHTML="like"

const likeTextStyle=`
margin:13px 2px;
font-weight:bold;
`
likeText.style.cssText=likeTextStyle


const coment=document.createElement("div")
feedBack.appendChild(coment)

const comentStyle=`
display:flex;
`
coment.style.cssText=comentStyle

const comentImage=document.createElement("img")
coment.appendChild(comentImage)
comentImage.src="./coment.png"

const comentImageStyle=`
width:15px;
height:15px;
margin-top:15px;
`
comentImage.style.cssText=comentImageStyle

const comentText=document.createElement("div")
coment.appendChild(comentText)
comentText.innerHTML="reply"

const comentTextStyle=`
margin:13px 2px;
font-weight:bold;
`
comentText.style.cssText=comentTextStyle


const share=document.createElement("div")
feedBack.appendChild(share)

const shareStyle=`
display:flex;
`
share.style.cssText=likeStyle
const shareImage=document.createElement("img")
share.appendChild(shareImage)
shareImage.src="./share.png"

const shareImageStyle=`
width:20px;
height:20px;
margin-top:11px
`
shareImage.style.cssText=shareImageStyle

const shareText=document.createElement("div")
share.appendChild(shareText)
shareText.innerHTML="share"

const shareTextStyle=`
margin:13px 2px;
font-weight:900;
`
shareText.style.cssText=shareTextStyle
