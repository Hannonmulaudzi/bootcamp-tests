//console.log(greet("Hannon"));
describe('Test my greet function' , function(){
    it("It should return 'Hello, Bob' when called with 'Bob' ", function(){
        assert.equal(greet('Bob'),'Hello, Bob');

       //assert.deepEqual([2,2],[2,2]);
    });
    it("It should return 'Hello, Vusani' when called with 'Vusani' ", function(){
        assert.equal(greet('Vusani'),'Hello, Vusani');

       //assert.deepEqual([2,2],[2,2]);
    });

});
