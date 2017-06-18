'use strict';
module.exports = function() {

  let vault = {};

  module.setValue = function( key, value ){
    vault[key]  = value;
  }

  module.getValue = function ( key ){
    if (vault.hasOwnProperty(key)){
      return vault[key];
    } else { return null; }
  }

  return module;

};

