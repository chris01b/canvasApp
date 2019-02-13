//return a set of quizlet set ids that contains a match for the query

const axios = require("axios");
const querystring = require("querystring");

class cse {

  constructor(apiKey, cx) {
    this.baseURL = 'https://www.googleapis.com/customsearch/v1/siterestrict?'
      + querystring.stringify({cx: cx, key: apiKey});
  }

  parseResults(results) {
    const myRegexp = /^(?:[^/]*\/){3}([^/]*)/;
    let sets = [];
    results.forEach(result => {
      let match = myRegexp.exec(result.link);
      sets.push(match[1]);
    });
    return sets;
  }

  async makeQuery(q) {
    const url = this.baseURL + '&' +
      querystring.stringify({q: q, exactTerms: q});
    const response = await axios.get(url);

    return this.parseResults(response.data.items);
  }

}

module.exports = cse;
