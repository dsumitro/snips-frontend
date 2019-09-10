import SNIPS from './snippet-data.js';
import { renderSnips, fetchSnippets } from './lib/snippets.js';
import { search } from './lib/search.js';
// map over the SNIPS
fetchSnippets().then(snips => {
  renderSnips(snips);
});

document.getElementById('search-bar').addEventListener('submit', search);

// const searchForm = document.getElementById('search-bar');

// searchForm.addEventListener('submit', event => {
//   const searchText = event.target['search-text'].value;
//   event.preventDefault();
//   search(searchText.value);
// });

// hljs.initHighlightingOnLoad();
// highlightSnips();

//  transform that snip into html
//  put HTML right into #snippets

// const snippets = document.getElementById('snippets');

// console.log(snippets);

// setTimeout(() => {
//   snippets.style.backgroundColor = 'red';

//   const h2 = snippets.querySelector('h2');
//   h2.style.fontSize = '100px';
// });

// setTimeout(() => {
//   snippets.innerHTML = '<p> Welcome to the snippets page</p>';
// }, 2000);

// setInterval(() => {
//   // create new element
//   const button = document.createElement('button');
//   button.innerText = 'Answer Survey';

//   // add event listeners
//   button.addEventListener('click', survey);
//   // add it to the body
//   document.body.append(button);
// }, 2000);

// function survey() {
//   prompt('How are you enjoying your time?');
// }
// function aggressiveButton(button) {
//   console.log(button);
//   button.innerHTML = `${button.innerHTML.toUpperCase()} pleeeeease`;
// }
