function wordsToMarks(str) {

    return str.split('').reduce((sum, item) => {
      return  sum + item.charCodeAt() - 96
    }, 0)

}


