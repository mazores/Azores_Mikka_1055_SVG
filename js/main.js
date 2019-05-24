(() => {
	// this is a self-invoking function
	
	console.log('my JS is workin!');

	let	
		showText = document.querySelectorAll(".iconDesc p"),
		allBackgrounds = document.querySelectorAll(".icon"),
		allImages = document.querySelectorAll(".icon img");



	function mouseoverColor() {
		this.classList.toggle("svg-icon-hover");
		this.classList.toggle("icon-hover");
	}

	function mouseoutColor() {
		this.classList.toggle("svg-icon-hover", false);
		this.classList.toggle("icon-hover", false);
	}

	function clickColor() {
		this.classList.toggle("svg-icon-click");
		this.classList.toggle("icon-click");
	}

	function logTheSVG() {
		console.log(this.id);
	}



//When hovered, icon becomes colored
allImages.forEach(item=> {
	item.addEventListener("mouseover", mouseoverColor);
})

//When hovered, background disappears and red border appears
allBackgrounds.forEach(item=> {
	item.addEventListener("mouseover", mouseoverColor);
})

//For going back to original state when mouse stops hovering
allImages.forEach(item=> {
	item.addEventListener("mouseleave", mouseoutColor);
})

allBackgrounds.forEach(item=> {
	item.addEventListener("mouseleave", mouseoutColor);
})


//When clicked, icon stays colored and border turns yellow
allImages.forEach(item=> {
	item.addEventListener("click", clickColor);
})

allBackgrounds.forEach(item=> {
	item.addEventListener("click", clickColor);
})

allImages.forEach(item=> {
	item.addEventListener("click", showDesc);
})

//Logs
allImages.forEach(item=> {
	item.addEventListener("click", logTheSVG);
})

})();