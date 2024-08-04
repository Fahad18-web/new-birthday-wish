const btn = document.getElementById("btn")
const display = document.getElementById("display")
const input = document.querySelector("input")

const arWish = "Happy Birthday, Areeba! 🎉,Wishing you the happiest of birthdays filled with joy, laughter, and all the things you love.You are very passionate about for your career and I know you'll continue to achieve amazing things in the coming year.You are the one who gave me the confidence too and I'm blessed to have a friend and classmate like you,May your day be as fantastic.Here's to another year of success, creativity, and unforgettable moments.Cheers to you, Areeba! 🥳"

btn.addEventListener("click", ()=>{
    if(input.value === "Areeba"){
      display.innerHTML = arWish
    }
    else if(input.value !== "Areeba"){
      alert("invalid username")
      
    }
})
