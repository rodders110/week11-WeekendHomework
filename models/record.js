const _ = require("lodash");
const Record = function(artist, record_title, genre, price){
  this.artist = artist;
  this.record_title = record_title;
  this.genre = genre;
  this.price = price;
}

Record.prototype.details = function(){
  let result = "";
  for (let key in this){
    if(this.hasOwnProperty(key)){
      if(typeof(this[key]) === 'number'){
        result = result + ', ' + `£ ${this[key].toFixed(3)}`;
      }else{
        result = result + ', ' + this[key];
      }
    };
  };
  // result = _.chain(this).values().join(', ').value();
  return result.substring(2, result.length -1);
}

module.exports = Record;
