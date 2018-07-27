const assert = require("assert");
const Record = require("../models/record");
const Record_Store = require("../models/record_store");

describe("record_store",function(){
  let record1;
  let record_store;

  beforeEach(function(){
    record1 = new Record ('Alice Cooper', 'Welcome to my Nightmare', 'rock', 12.00);
    record2 = new Record('George Ezra', 'Staying at Tamaras', 'pop', 12.99);
    record3 = new Record('James Arthur', 'back from the egde', 'pop', 13.99);
    record_store = new Record_Store("Steve's Rad Records", "Glasgow");
  });

  it('Should have a store name', function(){
    assert.strictEqual(record_store.storeName, "Steve's Rad Records");
  });

  it('Should have a city', function(){
    assert.strictEqual(record_store.city, "Glasgow");
  });

  it('Should start with a balance of £200', function(){
    assert.strictEqual(record_store.balance, 200);
  });

  it('Should start with nothing in the inventory', function(){
    assert.deepStrictEqual(record_store.inventory, []);
  });

  it('Should be able to add Record to inventory', function(){
    record_store.add(record1);
    assert.deepStrictEqual(record_store.inventory, [record1]);
  });

  it('Should be able to display all current albums in stock', function(){
    record_store.add(record1);
    record_store.add(record2);
    assert.deepStrictEqual(record_store.catalogue(), ['Alice Cooper, Welcome to my Nightmare, rock, £ 12.00', 'George Ezra, Staying at Tamaras, pop, £ 12.99']);
  })

  it('Should be able to sell a record', function(){
    record_store.add(record1);
    record_store.add(record2);
    record_store.sale(record1);
    assert.strictEqual(record_store.balance, 212.00);
    assert.deepStrictEqual(record_store.inventory, [record2]);
  })

  it('Should be able to show balance and stock value', function(){
    record_store.add(record1);
    record_store.add(record2);
    assert.strictEqual(record_store.books(), "Cash: £200, Stock: £24.99");
  })

  it('Should be able to filter records by genre', function(){
    record_store.add(record1);
    record_store.add(record2);
    record_store.add(record3);
    assert.deepStrictEqual(record_store.find("pop"), [record2, record3]);

  });
});
