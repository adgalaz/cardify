var cardify = require ('../src/index.js');
var expect = require('chai').expect
var assert = require('chai').assert


  
  
describe('cardify', function(){
    
    
it ('alt debería ser un string', function(){
  expect('alt').to.be.a('string');
})
it ('figcaption debería ser un string', function(){
  expect('figcaption').to.be.a('string');
})
it ('alt no está vacío', function(){
  assert.exists('alt', 'alt no está vacio');
})
});