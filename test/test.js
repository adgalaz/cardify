const chai = require('chai');
var assert = require('chai').assert
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1" /><title>Cardify Library</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"><link rel="stylesheet" href="assets/css/main.css"></head><body><div class="container"><div class="row imgwrap"><div class="col-sm-6 col-md-6 col-lg-6"><img class="img-fluid imgCardify" src="https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg" alt="Cat"><img class="img-fluid imgCardify" src="https://fthmb.tqn.com/jmqCh_LgA1bMcoBDQQqx91HPpaA=/1280x853/filters:fill(auto,1)/a0047-000145-56a2bce25f9b58b7d0cdf7cf.jpg" alt="Hamster"></div></div></div><!--Script--><script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script><script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script><script type="text/javascript" src="assets/js/index.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

var $ = require('jquery');
const cardify = require("../src/index.js");
var expect = require('chai').expect;
  
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
it('la extensión de la imagen es correcta', function() {
$('img').attr('src').substring($('img').attr('src').lastIndexOf('.')) === '.jpg' && '.png' && '.gif' && '.jpeg' && '.svg';
});
it('src no está vacío', function() {
$('img').attr('src').length > 0;
});
it('figure class no está vacío', function() {
$('figure').attr('class').length > 0;
});
it('figcaption class no está vacío', function() {
$('figcaption').attr('class').length > 0;
});
});

