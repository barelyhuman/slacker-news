/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const list =
		params.list === 'top'
			? 'news'
			: params.list === 'new'
			? 'newest'
			: params.list;

	return {
		list: params.list,
		page: Number(params.page),
		items: await fetch(
			`https://api.hnpwa.com/v0/${list}/${params.page}.json`
		).then((res) => res.json()),
	};
}