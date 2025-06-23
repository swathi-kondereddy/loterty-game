const button = document.getElementById("button");
const result = document.getElementById("result");
const container = document.getElementById("container")
let tick = new Audio("tap.wav");
let complete = new Audio("complete.wav")
const gifts = ["apple", "banana", "chair", "table", "laptop", "bottle", "pencil", "notebook", "phone", "keyboard",
    "mouse", "mirror", "window", "door", "clock", "fan", "lamp", "sofa", "bed", "pillow",
    "television", "remote", "cup", "plate", "spoon", "fork", "bag", "wallet", "shoe", "sock",
    "pen", "eraser", "glasses", "brush", "towel", "bucket", "mug", "scissors", "glue", "box",
    "camera", "radio", "helmet", "broom", "comb", "ring", "shirt", "pants", "key", "umbrella"];

button.addEventListener("click", function () {
    for (let i = 1; i < 50; i++) {
      document.getElementById(i).classList.remove("winningbox")
    }



    result.textContent = `please wait.....`
    // setTimeout(() => {
    //     const randomnumber = Math.random() * 50
    //     const drawNumber = Math.floor(Math.random() * 50);
    //     const gift = gifts[drawNumber - 1];
    //     console.log(randomnumber)
    //     console.log(drawNumber);
    //     result.textContent = `you got the gift num ${drawNumber} is thing is:  ${gift}`.toLocaleUpperCase();
    //     document.getElementById(drawNumber).classList.add("winningbox");

    // }, 5000);
    let secoundcount = 0;
    const intervalid = setInterval(function(){
        tick.play();
        secoundcount = secoundcount + 1;
       const randombu =  Math.floor(Math.random() * 50) + 1
       console.log(randombu)
       for(let i = 1; i < 50; i++){
        if(i === randombu){
            document.getElementById(i).classList.add("highlight")
        }
        else{
              document.getElementById(i).classList.remove("highlight")

        }
        
       }
    
       if(secoundcount === 5){
         const randomnumber = Math.random() * 50
        const drawNumber = Math.floor(Math.random() * 50);
        const gift = gifts[drawNumber - 1];
        console.log(randomnumber)
        console.log(drawNumber);
        result.textContent = `you got the gift num ${drawNumber} is thing is:  ${gift}`.toLocaleUpperCase();
        document.getElementById(randombu).classList.remove("highlight")

        document.getElementById(drawNumber).classList.add("winningbox");
        clearInterval(intervalid);
        complete.pause();
        complete.currentTime = 0;
        complete.play();
        
       }
    },1000);

});
gifts.forEach(function (value, i, arr) {
    const boxelement = `<div class ="box" id = ${i + 1}>${i + 1}.${value}</div>`
    console.log(boxelement)
    container2.insertAdjacentHTML("beforeend", boxelement);
});


