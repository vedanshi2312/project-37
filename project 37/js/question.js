class question{

    constructor(){
     
    }

    hide(){
        this.question.hide();
        this.option.hide();
        this.input.hide();
      }

display(){
  var title=createElement('h2');
   title.html("MyQuiz Game")
   title.position(350,0)
   var input=createInput("name")
   input.position(150,230)

question.html("Question:- What stats and ends with the letter 'E', but has only one letter ");
 question.position(150,80)
 option1.html("1: Everyone");
 option1.position(150,100)
 option2.html("2: Envelope")
 option2.position(150,120)
 option3.html("3: Estimate")
 option3.position(150,130)
 option4.html("4: Example")
option4.position(150,1400)


}
}