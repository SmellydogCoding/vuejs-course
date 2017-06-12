export const textMixin = {
  data() {
    return {
      text3: 'Some different text to reverse',
      text4: 'ImAMixin'
    }
  },
  computed: {
    reversedText() {
      return this.text3.split('').reverse().join('');
    },
    countedLetters() {
      let letters = this.text2.length
      return this.text4 + ' (' + letters + ')';
    }
  }
}