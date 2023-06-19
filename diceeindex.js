function refresh(){
    let p1 = Math.ceil(Math.random() * 5);
    let p2 = Math.ceil(Math.random() * 5);
    let s1 = "dice"+p1+".png";
    let s2 = "dice"+p2+".png";
    document.querySelector(".img1").classList.add("rotate");
    document.querySelector(".img2").classList.add("rotate");

    console.log( document.querySelector(".img1").setAttribute("src",s1));
   console.log( document.querySelector(".img2").setAttribute("src",s2));


   if(p1 > p2){
    document.querySelector("h2").innerHTML = "🚩 Winner !! Player 1";
   }
   else if(p1 == p2){
    document.querySelector("h2").innerHTML = "🚩 Draw !! 🚩";
   }
   else{
    document.querySelector("h2").innerHTML = "Winner !! Player 2 🚩";
   }
   const header = document.querySelector("h1");
		setTimeout(() => {header.textContent = "Refresh Me"
        document.querySelector(".img1").classList.remove("rotate"),
        document.querySelector(".img2").classList.remove("rotate") }, 500);

  
}

