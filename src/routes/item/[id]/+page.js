/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, url }) {
	const res = await fetch(`https://api.hnpwa.com/v0/item/${params.id}.json`);
	return {
		...(await res.json()),
		rootId: url.searchParams.get('rootId'),
	};
}
