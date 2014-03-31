import {
  test,
  moduleFor
} from 'ember-qunit';

moduleFor('route:index', "Unit - IndexRoute");

test("it exists", function(){
  ok(this.subject());
});

test("#model", function(){
  deepEqual(this.subject().model(), [
    'red',
    'yellow',
    'blue'
  ]);
});
