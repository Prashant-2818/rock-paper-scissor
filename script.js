// get DOM elements
const gameContainer=document.querySelector(".container"),
userResult=document.querySelector(".user_result img"),
cpuResult=document.querySelector(".cpu_result img"),
result=document.querySelector(".result"),
optionImages=document.querySelectorAll(".option_image");

//Loop through each option image element
optionImages.forEach((image, index) => {
    image.addEventListener("click" , (e) => {
        image.classList.add("active");

        //Loop through each option image again
        optionImages.forEach((image2, index2) => {
            //if the current index does not match the clicked match
            //remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");

        });
            //get the source of the clicked option image
            let imageSrc=e.target.querySelector("img").src;
            //set the user image to the clicked image
            userResult.src = imageSrc
            // console.log(imageSrc)

            // Generate a random number between 0 and 
            let randomNumber=Math.floor(Math.random() * 3);
            // console.log(randomNumber);


            // create an array of CPU images
            let cpuImages=["images/rock.png","images/paper.png","images/scissors.png"];

            // set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];


            //Assign a letter value to the CPU option (R for rock,P for paper,S for scissors)
            let cpuValue=["R","P","S"][randomNumber]

            //Assign a letter value to the clicked option
            let userValue=["R","P","S"][index];

            // create an object with all possible outcomes
            let outcomes = {
                RR: "DRAW",
                RP: "CPU",
                RS: "USER",
                PP: "DRAW",
                PR: "USER",
                PS: "CPU",
                SS: "DRAW",
                SR: "CPU",
                SP: "USER",

              };
        

            // look up the outcome value based on user and CPU options
            let outComeValue=outcomes[userValue + cpuValue];
            //Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
 
            console.log(outComeValue);

        
    });
});