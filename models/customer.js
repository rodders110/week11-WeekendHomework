const _ = require('lodash');

const Customer = function(name, cash){
    this.name = name;
    this.cash = cash;
    this.collection = [];
}

Customer.prototype.buy = function(record){
    if(record.price <= this.cash){
        this.cash -= record.price;
        this.collection.push(record);
    }
}

Customer.prototype.sell = function(record){
    this.cash += record.price;
    _.remove(this.collection, function(item){return item.record_title === record.record_title});
}

Customer.prototype.collectionValue = function(genre){
    if(genre === 'all'){
        return Math.round((_.sumBy(this.collection, 'price'))*100)/100;
    }else{
        let sortedCollection = this.collection.filter(function(item){return item.genre === genre});
        return Math.round((_.sumBy(sortedCollection, 'price'))*100)/100;
    }
    
}


module.exports = Customer;