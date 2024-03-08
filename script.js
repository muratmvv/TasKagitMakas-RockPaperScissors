const container = document.querySelector(".container");
const userResult = document.querySelector(".user-images img");
const cpuResult = document.querySelector(".cpu-images img");
const optionImages = document.querySelectorAll(".option-image");


optionImages.forEach((image,index)=>{
    image.addEventListener( "click", (e)=>{
        image.classList.add("active");
        // console.log(e.target);

        optionImages.forEach((img2,index2)=>{
            console.log(index,index2);
            if(index !== index2){
                img2.classList.remove("active");
            }
        })


        container.classList.add("start");
        let time = setTimeout(()=>{
            container.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
    
            let randomNumber = Math.floor(Math.random()*3); 
    
            let cpuImages = ["img/tas.jpg","img/kagit.jpg","img/makas.jpg"];
    
            cpuResult.src = cpuImages[randomNumber];
    
            let cpuValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];
    
            // console.log(userValue,cpuValue)
    
            let outcomes = {
                RR:"Berabere",
                RP:"Bilgisayar",
                RS:"Kullanıcı",
                PP:"Berabere",
                PR:"Kullanıcı",
                PS:"Bilgisayar",
                SS:"Berabere",
                SR:"Bilgisayar",
                SP:"Kullanıcı"
            };
            let outComeValue = outcomes[userValue + cpuValue];
            // console.log(outComeValue);
    
            cpuResult.textContent = userValue === cpuValue ? "Berabere" : `${outComeValue} Kazandı`
        },700);
      
         
    });
});