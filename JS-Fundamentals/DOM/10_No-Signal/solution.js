function solve() {
	let parentDiv = document.getElementById('exercise');
	let divElement = parentDiv.children[0];
	
	let horizontalPos;
	let verticalPos;

	window.setInterval(function()
	{
	 horizontalPos = Math.round(Math.random() * 81) + 1;
	 verticalPos = Math.round(Math.random() * 45) + 1;
	
	divElement.setAttribute("style", `margin-left: ${horizontalPos}%;
	margin-top: ${verticalPos}vh`);
	}, 2000);  
}