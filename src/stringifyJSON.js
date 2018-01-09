// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  let result = '';

  if (obj === null) {
    result += 'null'; 
  } else if (!Array.isArray(obj) && typeof obj !== 'object') {
    if (typeof obj === 'string') {
      result += '"'+obj+'"';
    } else if (typeof obj !== 'function' && typeof obj !== 'undefined') {
      result += obj.toString();
    }
  }

  if (Array.isArray(obj)) {
    result += '[';
  } else if (typeof obj === 'object' && obj !== null) {
    result += '{';
  }

  if (typeof obj === 'object' && obj !== null) {

    _.each(obj, function(item, indexOrKey) {
      if (typeof item !== 'function' && typeof item !== 'undefined') {
        if (typeof indexOrKey === 'string') {
          result += '"'+indexOrKey+'":';
        }
        
        if (item === null) {
          result += 'null';
        } else if (typeof item === 'object') {
          result += stringifyJSON(item);
        } else if (typeof item === 'string') {
          result += '"'+item+'"';
        } else if (typeof item !== 'function' && typeof item !== 'undefined') {
          result += item.toString();
        } 

        if (Array.isArray(obj)) {
          if (indexOrKey < obj.length - 1) {
            result += ',';
          }
        } else if (typeof obj === 'object' && obj !== null) {
          let keys = Object.keys(obj);
          if (indexOrKey !== keys[keys.length - 1]) {
            result += ',';
          }
        }
      }
    });

  } 

  if (Array.isArray(obj)) {
    result += ']';
  } else if (typeof obj === 'object' && obj !== null) {
    result += '}';
  }

  return result;

};