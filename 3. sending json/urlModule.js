
import url from 'url';

let urlPath = 'http://www.google.com/search?q=hello+world';
const urlObj =  new URL(urlPath);
console.log(urlObj);