// 1. need to request data from server
// 2. hold that data in state so that it will be passed down to our Snips
// 3. render Snips

import React from "react";
import Snip from "./Snip";

//destructures the props into what we need aka snippets beacause props is an obj
export default function SnipList({ snippets }) {
  return (
    <section id="snippets">
      {snippets.map(snippet => (
        <Snip key={snippet.id} snippet={snippet} />
      ))}
    </section>
  );
}
