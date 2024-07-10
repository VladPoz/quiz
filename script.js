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
            answerss.style.backgroundColor = "red"
            setTimeout(()=>[answerss.style.backgroundColor = "white"], 250)
            asdf = new Question()
            asdf.display()
        }
        else{
            falses += 1
            console.log("no: "+falses)
            answerss.style.backgroundColor = "chartreuse"
            setTimeout(()=>[answerss.style.backgroundColor = "white"], 250)
            asdf = new Question()
            asdf.display()
        }
    })
}
let btn = document.querySelector('.btn')
btn.addEventListener("click", ()=>{
    let start = document.querySelector('.start')
    let main = document.querySelector('.main')
    start.style.display = 'none'
    main.style.display = 'block'
    setTimeout(()=>{
        let end = document.querySelector('.end')
        main.style.display = 'none'
        end.style.display = 'block'
        yes.innerHTML = trues
        no.innerHTML = falses}, 30000)
})