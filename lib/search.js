import SNIPS from '../snippet-data.js';
import { renderSnips, fetchSnippets } from './snippets.js';

export const search = async event => {
  // TODO: EXPAND SEARCH
  const matchStr = (str, toMatch) =>
    str.toLowerCase().includes(toMatch.toLowerCase());

  event.preventDefault();
  const searchText = event.target['search-text'].value;

  const snips = await fetchSnippets();
  // look through snips by
  // Title
  // Description
  // Language
  // Code
  // filter out the snips by said properties
  // load the snippets after filtering

  const filteredSnips = snips.filter(
    snippet =>
      matchStr(snippet.title, searchText) ||
      matchStr(snippet.description, searchText) ||
      matchStr(snippet.code, searchText) ||
      matchStr(snippet.language, searchText)
  );
  renderSnips(filteredSnips);
};
