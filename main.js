var addObject = function (parentNode, imageSrc, movTitle) {
	var divElem = document.createElement('div');
	divElem.innerHTML = '<img src="./img/' + imageSrc + 
	'" class="movie"><img src="./img/close.png" class="close"><p>' + movTitle + '</p>';
	parentNode.appendChild(divElem);
}

var deleteFunc = function(e) {
	e.target.removeEventListener('click', deleteFunc);
	var selectedNode = e.target.parentNode;
	var searchTitle = selectedNode.querySelector('p').innerHTML;
	movieList.forEach(function(item, index) { searchTitle === item.title ? movieList.splice(index, 1) : {}; });
	selectedNode.parentNode.removeChild(selectedNode);
}

var elementLoad = function(parentNode, arr) {
	arr.forEach(function(item) { addObject(parentNode, item.picture, item.title); })
	var closeList = document.querySelectorAll('.close');
	closeList.forEach(function(item) {item.addEventListener('click', deleteFunc);})
}

var filtering = function(e) {
	var oldChild = document.getElementsByClassName('container');
	var sec = document.createElement('section');
	sec.setAttribute('class','container');
	document.querySelector('main').replaceChild(sec, oldChild[0]);
	var filterValue = e.target.value;
	var tempArr = movieList.filter(function(item) {
		var found = item.title.toUpperCase().search(filterValue.toUpperCase());
		if (found > -1) {return item};
	});
	elementLoad(document.querySelector('.container'), tempArr);
}

elementLoad(document.querySelector('.container'), movieList);
document.querySelector('input').addEventListener('keyup', filtering);