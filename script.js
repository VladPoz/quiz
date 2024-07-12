function rang_generator(){
    let rangs = trues*100 - falses * 50
    let rang = "F-"
    if(rangs<250){
        rang = "F"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gray"
        document.querySelector(".rang_1").style.color  = "gray"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gray"
        document.querySelector(".rang_2").style.color  = "gray"
    }
    else if(rangs == 250){
        rang = "F+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gray"
        document.querySelector(".rang_1").style.color  = "gray"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gray"
        document.querySelector(".rang_2").style.color  = "gray"
    }
    else if(rangs>250 && rangs<500){
        rang = "D"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px lightslategray"
        document.querySelector(".rang_1").style.color  = "lightslategray"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px lightslategray"
        document.querySelector(".rang_2").style.color  = "lightslategray"
    }
    else if(rangs == 500){
        rang = "D+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px lightslategray"
        document.querySelector(".rang_1").style.color  = "lightslategray"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px lightslategray"
        document.querySelector(".rang_2").style.color  = "lightslategray"
    }
    else if(rangs>500 && rangs<750){
        rang = "C"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px white"
        document.querySelector(".rang_1").style.color  = "white"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px white"
        document.querySelector(".rang_2").style.color  = "white"
    }
    else if(rangs == 750){
        rang = "C+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px white"
        document.querySelector(".rang_1").style.color  = "white"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px white"
        document.querySelector(".rang_2").style.color  = "white"
    }
    else if(rangs>750 && rangs<1000){
        rang = "B"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px lightblue"
        document.querySelector(".rang_1").style.color  = "lightblue"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px lightblue"
        document.querySelector(".rang_2").style.color  = "lightblue"
    }
    else if(rangs == 1000){
        rang = "B+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px lightblue"
        document.querySelector(".rang_1").style.color  = "lightblue"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px lightblue"
        document.querySelector(".rang_2").style.color  = "lightblue"
    }
    else if(rangs>1000 && rangs<1250){
        rang = "A"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px orangered"
        document.querySelector(".rang_1").style.color  = "orangered"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px orangered"
        document.querySelector(".rang_2").style.color  = "orangered"
    }
    else if(rangs == 1250){
        rang = "A+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px orangered"
        document.querySelector(".rang_1").style.color  = "orangered"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px orangered"
        document.querySelector(".rang_2").style.color  = "orangered"
    }
    else if(rangs>1250 && rangs<1500){
        rang = "S"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs == 1500){
        rang = "S+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs>1500 && rangs<1750){
        rang = "SS"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs == 1750){
        rang = "SS+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs>1750 && rangs<2000){
        rang = "SSS"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs == 2000){
        rang = "SSS+"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_1").style.color  = "gold"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px gold"
        document.querySelector(".rang_2").style.color  = "gold"
    }
    else if(rangs > 2000){
        rang = "P"
        document.querySelector(".rang_1").style.textShadow  = "0 0 5px orchid"
        document.querySelector(".rang_1").style.color  = "orchid"
        document.querySelector(".rang_2").style.textShadow  = "0 0 5px orchid"
        document.querySelector(".rang_2").style.color  = "orchid"
    }
    let n = $('#test').text();

    $({numberValue: n}).animate({numberValue: rangs}, {
        duration: 1000,
        easing: "linear",
        step: function(val) {
           $('#test').text(Math.round(val)+" Points");
        }
     });
    setTimeout(()=>{document.querySelector(".rang_2").innerHTML = rang+" Rang";},1500)
}
function Timeout(max_time){
    setInterval(()=>{max_time -= 1;
        document.querySelector(".time").innerHTML = max_time;
    }, 1000)
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) { // Цикл повторяется до тех пор, пока остаются элементы для перемешивания
    randomIndex = Math.floor(Math.random() * currentIndex); // Выбираем оставшийся элемент.
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [    // Меняем местами с текущим элементом.
      array[randomIndex], array[currentIndex]];
  }
  return array; // Возвращаем перемешанный массив
}

class Question{
    constructor(){
        this.a = randomInteger(0, 10)
        this.b = randomInteger(1, 10)
        this.hzs = ["+", "-", "*"]
        this.hz = this.hzs[randomInteger(0, 2)]
        this.answersss()
        this.variant = [this.answer-randomInteger(1, 10), this.answer-randomInteger(1, 10),this.answer,this.answer+randomInteger(1, 10),this.answer+randomInteger(1, 10)]
        this.variant = shuffle(this.variant)
    }
    answersss(){
        switch (this.hz) {
            case '+':
                this.answer = this.a + this.b
                break;
            case '-':
                this.answer = this.a - this.b
                break;
            case '*':
                this.answer = this.a * this.b
                break;
            default:
                break;
        }
    }
    display(){
        let answers = document.querySelectorAll("li")
        let question = document.querySelector(".text")
        question.innerHTML = `${this.a} ${this.hz} ${this.b}`
        for(let i=0; i < answers.length; i++){
            answers[i].innerHTML = this.variant[i]
        }
    }
}
let trues = 0
let falses = 0
let yes = document.querySelector(".yes")
let no = document.querySelector(".no")
let answers = document.querySelectorAll("li")
let asdf = new Question()
asdf.display()
for(let answerss of answers){
    answerss.addEventListener('click', ()=>{
        if(answerss.innerHTML == asdf.answer){
            trues += 1
            console.log("yes: "+trues)
            answerss.style.boxShadow  = "0 0 5px lawngreen"
            answerss.style.boxShadow  = "0 0 25px lawngreen"
            answerss.style.boxShadow  = "0 0 50px lawngreen"
            answerss.style.boxShadow  = "0 0 100px lawngreen"
            answerss.style.textShadow  = "0 0 5px lawngreen"
            answerss.style.color  = "lawngreen"
            setTimeout(()=>[
                answerss.style.boxShadow  = "0 0 5px aqua",
                answerss.style.boxShadow  = "0 0 25px aqua",
                answerss.style.boxShadow  = "0 0 50px aqua",
                answerss.style.boxShadow  = "0 0 100px aqua",
                answerss.style.textShadow  = "0 0 5px aqua",
                answerss.style.color  = "aqua"], 250)
            asdf = new Question()
            asdf.display()
        }
        else{
            falses += 1
            console.log("no: "+falses)
            answerss.style.boxShadow  = "0 0 5px red"
            answerss.style.boxShadow  = "0 0 25px red"
            answerss.style.boxShadow  = "0 0 50px red"
            answerss.style.boxShadow  = "0 0 100px red"
            answerss.style.textShadow  = "0 0 5px red"
            answerss.style.color  = "red"
            setTimeout(()=>[
                answerss.style.boxShadow  = "0 0 5px aqua",
                answerss.style.boxShadow  = "0 0 25px aqua",
                answerss.style.boxShadow  = "0 0 50px aqua",
                answerss.style.boxShadow  = "0 0 100px aqua",
                answerss.style.textShadow  = "0 0 5px aqua",
                answerss.style.color  = "aqua"], 250)
            asdf = new Question()
            asdf.display()
        }
    })
}
let btn = document.querySelector('.btn')
btn.addEventListener("click", ()=>{
    Timeout(30)
    let start = document.querySelector('.start')
    let main = document.querySelector('.main')
    start.style.display = 'none'
    main.style.display = 'block'
    setTimeout(()=>{
        rang_generator()
        let end = document.querySelector('.end')
        main.style.display = 'none'
        end.style.display = 'block'
        const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['True', 'False'],
            datasets: [{
              data: [trues, falses],
              borderWidth: 1
            }]
          },
        });
    }, 1000)
})  