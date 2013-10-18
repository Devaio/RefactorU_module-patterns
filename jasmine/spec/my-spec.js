describe('repeatString', function() {
 it('should return a string repeated n times', function() {
  expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
 });
});

describe('repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  expect(str).toEqual('ohhihihi');
 });
});

describe('repeatMore', function() {
	it('should repeat a string based on the number of times called', function(){
		expect(Repeater.repeatMore('cat')).toEqual('cat');
		expect(Repeater.repeatMore('dog')).toEqual('dogdog');
	})
	it('should have a count variable privately defined', function(){
		expect(typeof count).toBe('undefined');
	})
})

describe('repeatTwice', function() {
 it('should call a function twice', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatTwice(write);
  expect(str).toEqual('ohhihi');
 });
});