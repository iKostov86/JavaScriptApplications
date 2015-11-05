import 'bower_components/jquery/dist/jquery.js';
import Handlebars from 'bower_components/handlebars/handlebars.js';

console.log('App loaded!');

var templateStr = '<li><strong>Item #{{this}}</strong></li>';
var template = Handlebars.compile(templateStr);

function render(items) {
	var $ul = $('<ul />');
	
	items.map(template).forEach(function (listItem) {
		$ul.append(listItem);
	});
	
	// items.forEach(function (item) {
	// 	$('<li />')
	// 		.html(item)
	// 		.appendTo($ul);
	// });
	
	return $ul;
}

var $list = render([1, 2, 3, 4, 5]);
$list.appendTo(document.body);