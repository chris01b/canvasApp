// return quizlet answer from url

const axios = require("axios");

class Quizlet {

  constructor(access_token) {
    this.baseURL = "https://api.quizlet.com/2.0/sets?client_id="
      + access_token + "&set_ids=";
    this.term;
  }

  parseSets(sets) {
    let answerTerms = [];
    let answers = [];
    sets.forEach(set => {
      answerTerms.push(set.terms.find(obj => obj.term == this.term));
    }); 
    answerTerms.forEach(term => {
      if (term != undefined) {
        answers.push(term.definition);
      }
    });
    return answers;
  }

  async search(setIDs, term) {
    this.term = term;
    const response = await axios.get(this.baseURL + setIDs.toString());
    return this.parseSets(response.data);
  }

}

module.exports = Quizlet;
