//return a set of quizlet set ids that contains a match for the query

const {google} = require('googleapis');
const customsearch = google.customsearch('v1');

class cse {

  constructor(apiKey, cx) {
    this.apiKey = apiKey;
    this.cx = cx
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
    const res = await customsearch.cse.list({
      cx: this.cx,
      q: "\"" + q + "\"",
      auth: this.apiKey,
    });

    return this.parseResults(res.data.items);
  }

}

module.exports = cse
