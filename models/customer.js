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


module.exports = Customer;