
function main() {
	$('.Table2__table__wrapper').find('tr[data-idx]').each(function () {
		console.log($(this).text());
		// $(this).find('td').eq(n).after('<td>new cell added</td>');
	});
}

window.onload = function () {
	main();
};
