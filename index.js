import SNIPS from './snippet-data.js';

// map over the SNIPS
const renderSnips = snippets => {
  const snippetHTML = snippets
    .map(
      snippet => /* html */ ` 
      <div class="snip">
      <div class="text">
        <h2>${snippet.title}</h2>
        <p>${snippet.description}</p>
      </div>
      <pre>
        <code class="${snippet.language}">${he.encode(snippet.code)}</code>
      </pre>
    </div>`
    )
    .join('');
  const snippetsElem = document.getElementById('snippets');
  snippetsElem.innerHTML = snippetHTML;
};
renderSnips(SNIPS);

hljs.initHighlightingOnLoad();
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
