
function make_body_cell(conf) {
	return `
		<td class="tight-cell Table2__td">${conf}</td>
	`;
}

function add_body() {
	$('.Table2__table__wrapper').find('tr[data-idx]').each(function () {
		const name = $(this).find('td a[data-clubhouse-uid] img').attr('alt');
		const team = _.find(TEAMS, { 'name': name });
		let conf = '';
		if (!!team) {
			conf = team.conference_abbr
		}
		$(this).append(make_body_cell(conf));
	});
}

function make_header_cell() {
	return `
		<th title class="Table2__th">
			CONF
		</th>
	`;
}

function add_header() {
	$('thead.Table2__thead tr').append(make_header_cell());
}

window.onload = function () {
	add_header();
	add_body();
};
