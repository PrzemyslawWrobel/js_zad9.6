window.onload = function() {
  console.log('The page is fully loaded.');
  // the rest of the script


	var list = document.getElementById('list'); //przypisanie do zmiennej list elementu po id = list
	var add = document.getElementById('addElement'); // jw przypisanie do zmiennej add id buttona


	add.addEventListener('click', function(){ //button otrzymał słuchacza zdarzeń
	 


		var element = document.createElement('li'); // zmienna tworząc elementy listy
		var number = document.getElementsByTagName('li').length; // zmienna przechowująca ilość elementów listy
		element.innerHTML = 'item' + number;
		list.appendChild(element);
	});
}


