<h1 align="center">📰 ss-scrape</h1>
<p align="center">SS.LV RSS Scraper</p>

## 📝 Description
ss-scrape - Returns latest ad from ss.lv\
Result is returned as JSON object.


## 🔧 Setup
ss-scrape is easy to setup, just do:
```sh
npm i ss-scrape
```

## 📕 Usage
To require ss-scrape in your program do:
```js
const ssScrape = require("ss-scrape");
```
Ways to call ss-scrape from your program:

```js
//Call function and await result.
var link = "https://www.ss.lv/lv/transport/cars/today/rss/";
var result = ssScrape(link).then(result => {
	console.log(result);
});
```

## 👨‍⚖️ License
[ss-scrape](https://github.com/EEHoveckis/ss-scrape) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under the [Unlicense](https://unlicense.org).
