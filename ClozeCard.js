
// ClozeCard constructor function

var ClozeCard = function(text, cloze) {

  this.fulltext = text;
  this.cloze = cloze;

  this.partial = function() {

    var partial = [];
    var word = text.split(" ");

    for (var i=2; i < word.length; i++) {
      partial.push(word[i]);
      var partialText = "... " + partial.join(" ");
      var partialCloze = word[0] + " " + word[1];
    }

    if (this.cloze !== partialCloze) {
      console.log("Error - Incorrect Cloze Format");
    }
    else {
      console.log(partialText);
    }

  };

};

module.exports = ClozeCard;
