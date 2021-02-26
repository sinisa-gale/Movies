var addObject = function (parentNode, imageSrc, movTitle) {
	var divElem = document.createElement('div');
	var image = document.createElement('img');
	image.setAttribute('src', './img/' + imageSrc);
	image.setAttribute('class', 'movie');
	var closeImg = document.createElement('img');
	closeImg.setAttribute('src', './img/close.png');
	closeImg.setAttribute('class', 'close');
	var title = document.createElement('p');
	title.innerHTML = movTitle;
	divElem.appendChild(image);
	divElem.appendChild(closeImg);
	divElem.appendChild(title);
	parentNode.appendChild(divElem);
}

var firstLoad = function(parentNode, arr) {
	arr.forEach(function(item) {
		addObject(parentNode, item.picture, item.title);
	})
}

var filtering = function(e) {
	var childNodes = document.querySelectorAll('div');
	for (var i = 0; i < childNodes.length; i++) {
		document.querySelector('.container').removeChild(childNodes[i]);
	}
	var filterValue = e.target.value;
	var tempArr = movieList.filter(function(item) {
		var found = item.title.toUpperCase().search(filterValue.toUpperCase());
		if (found > -1) {return item};
	});
	firstLoad(document.querySelector('.container'), tempArr);
}

firstLoad(document.querySelector('.container'), movieList);
document.querySelector('input').addEventListener('keyup', filtering);