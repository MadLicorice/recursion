// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];

  let search = function(element) {
  	//let list = element.classList;

  	if(element.classList && element.classList.contains(className)) {
  		result.push(element);
  	}

  	for (let i = 0; i < element.childNodes.length; i+=1) {
  		search(element.childNodes[i]);
  	}

  }

  search(document.body);
  return result;

};
