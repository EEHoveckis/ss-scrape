const { parse } = require("rss-to-json");

module.exports = async function(link) {
	let rss = await parse(link); // Read ss.lv and return XML turned into JSON
	let response = JSON.parse(JSON.stringify(rss, null, 3)); // Parse JSON and ready it for using.

	let firstAd = response.items[0]; // Latest ad from result. Ads in response are sorted with latest being first.
	return firstAd; // Return latest ad and end.
}
