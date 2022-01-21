/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import univ from "./univ.js";

const infoUnv = new univ(
  "United States",
  "Texas",
  "San Antonio",
  "Univiersity of The Incarnate Word",
  1881,
  "uiw.edu",
);

const content = `<main>
<article>
  <h1>${infoUnv.univName}</h1>
  <ul>
    <li>Country: ${infoUnv.country}</li>
    <li>State: ${infoUnv.state}</li>
    <li>City: ${infoUnv.city}</li>
    <li>Established: ${infoUnv.years}</li>
    <li>Website: ${infoUnv.link}</li>
  </ul>
</article>
</main>
`;

document.body.innerHTML = content;