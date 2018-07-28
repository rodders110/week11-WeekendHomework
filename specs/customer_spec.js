const assert = require("assert");
const Record = require("../models/record");
const Record_Store = require("../models/record_store");
const Customer = require("../models/customer");

describe("customer", function(){
  let record1;
  let record2;
  let record3;
  let record_store;
  let customer;
  
  
  beforeEach(function(){
      record1 = new Record('Alice Cooper', 'Welcome to my Nightmare', 'rock', 12.00);
      record2 = new Record('George Ezra', 'Staying at Tamaras', 'pop', 12.99);
      record3 = new Record('James Arthur', 'back from the edge', 'pop',13.99);
      record_store = new Record_Store("Steve's Rad Records", "Glasgow");
      customer = new Customer('Colin', 20.00);
  });

  it('Should have name', function(){
      assert.strictEqual(customer.name, 'Colin');
  });

  it('Should start with an empty collection', function(){
      assert.deepStrictEqual(customer.collection, []);
  });

  it('Should be able to buy a new record', function(){
    customer.buy(record1);
    assert.strictEqual(customer.cash, 8);
    assert.deepStrictEqual(customer.collection.length, 1);
  });
});