const _ = require("lodash");
const Record_Store = function(storeName, city){
  this.storeName = storeName;
  this.city = city;
  this.balance = 200;
  this.inventory = [];
}

Record_Store.prototype.add = function (record) {
  this.inventory.push(record);
};

Record_Store.prototype.catalogue = function(){
  let result = [];
  _.forEach(this.inventory, function(record){
    result.push(record.details());
  })

  return result;

}

Record_Store.prototype.sale = function (record) {
this.balance += record.price;
_.remove(this.inventory, function(item){return item === record});

};

Record_Store.prototype.books = function () {
  let stock = _.sumBy(this.inventory,'price');
  result = `Cash: £${this.balance}, Stock: £${stock.toFixed(2)}`
  return result;
};

module.exports = Record_Store
