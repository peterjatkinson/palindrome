// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines)
String.prototype.blank = function () {
  return !!(this.match(/^\s*$/g));
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}



// // Defines a TranslatedPhrase object.
// function TranslatedPhrase(content, translation) {
//   this.content = content;
//   this.translation = translation;

//   // Returns translation processed for palindrome testing.
//   this.processedContent = function processedContent() {
//     return this.processor(this.translation);
//   }
// }

// TranslatedPhrase.prototype = new Phrase();



// Returing last element of an array exercise. Either of these two.
// Array.prototype.last = function() {
// 	return this[this.length-1];
// }

// Array.prototype.lastUsingSlicing = function() {
//   return this.slice(-1)[0];
// }