const assert = require("assert");
const Record = require("../models/record");

describe("record", function(){
  let record;

  beforeEach(function(){
    record = new Record('Alice Cooper', 'Welcome to my Nightmare', 'rock', 12.00);

  });

  it('should have an artist', function(){
    assert.strictEqual(record.artist, 'Alice Cooper');
  });

  it('should have a title', function(){
    assert.strictEqual(record.record_title, 'Welcome to my Nightmare');
  });

  it('should have a genre', function(){
    assert.strictEqual(record.genre, 'rock');
  });

  it('should have a price', function(){
    assert.strictEqual(record.price, 12.00);
  });

  it('should be able to print out record properies as a string', function(){
    assert.strictEqual(record.details(), 'Alice Cooper, Welcome to my Nightmare, rock, £ 12.00')
  });
});
