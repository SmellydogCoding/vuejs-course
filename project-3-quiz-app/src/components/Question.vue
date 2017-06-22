<template lang="pug">
  div.panel.panel-default
    div.panel-heading
      h3.panel-title.text-center {{question}}
      div.panel-body
        div.col-xs-12.col-sm-6.text-center
          button.btn.btn-primary.btn-lg(style="margin: 10px" @click="onAnswer(btnData[0].correct)") {{btnData[0].answer}}
        div.col-xs-12.col-sm-6.text-center
          button.btn.btn-primary.btn-lg(style="margin: 10px" @click="onAnswer(btnData[1].correct)") {{btnData[1].answer}}
        div.col-xs-12.col-sm-6.text-center
          button.btn.btn-primary.btn-lg(style="margin: 10px" @click="onAnswer(btnData[2].correct)") {{btnData[2].answer}}
        div.col-xs-12.col-sm-6.text-center
          button.btn.btn-primary.btn-lg(style="margin: 10px" @click="onAnswer(btnData[3].correct)") {{btnData[3].answer}}
</template>

<script>
  const MODE_ADDITION = 1;
  const MODE_SUBTRACTION = 2;
  export default {
    data() {
      return {
        question: 'Oops, and error occurred :/',
        btnData: [
          {correct: true, answer: 0},
          {correct: false, answer: 0},
          {correct: false, answer: 0},
          {correct: false, answer: 0}
        ]
      }
    },
    methods: {
      generateQuestion() {
        // choose 2 numbers at random for the question and then choose the mode
        const firstNumber = this.generateRandomNumber(1,100);
        const secondNumber = this.generateRandomNumber(1,100);
        const modeNumber = this.generateRandomNumber(1,2);

        let correctAnswer = 0;
        // set correct answer based on the mode
        switch (modeNumber) {
          case MODE_ADDITION:
            correctAnswer = firstNumber + secondNumber;
            this.question = `What's ${firstNumber} + ${secondNumber}?`;
            break;
          case MODE_SUBTRACTION:
            correctAnswer = firstNumber - secondNumber;
            this.question = `What's ${firstNumber} - ${secondNumber}?`;
            break;
          default:
            correctAnswer = 0;
            this.question = 'oops, an Error occurred :/'
        }
        // initally give all 4 buttons an incorrect answer
        this.btnData[0].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[0].correct = false;
        this.btnData[1].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[1].correct = false;
        this.btnData[2].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[2].correct = false;
        this.btnData[3].answer = this.generateRandomNumber(correctAnswer - 10, correctAnswer + 10, correctAnswer);
        this.btnData[3].correct = false;
        // then choose a button at random and assign the correct answer to it
        const correctButton = this.generateRandomNumber(0, 3);
        this.btnData[correctButton].correct = true;
        this.btnData[correctButton].answer = correctAnswer;
      },
      // generate random numbers - runs again if one of the numbers generated matches the correct answer
      generateRandomNumber(min, max, except) {
          const rndNumber = Math.round(Math.random() * (max - min)) + min;
          console.log(min, max, rndNumber);
          if (rndNumber == except) {
              return this.generateRandomNumber(min, max, except);
          }
          return rndNumber;
      },
      // emit event named answered that holds whether the correct answer is clicked
      onAnswer(isCorrect) {
          this.$emit('answered', isCorrect);
      }
    },
    // run gererateQuestion function on page load
    created() {
      this.generateQuestion();
    }
  }
</script>