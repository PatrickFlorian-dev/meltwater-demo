import React from 'react';
 
const AppDescription = () =>
{
  return(
    <div>
        <h3>The application will remove given keywords and phrases from document text and insert XXXX at the
locations where the text was removed.</h3>
<p>1. String of keywords and phrases: a string of censored keywords and phrases separated by spaces or
commas. Phrases will be enclosed in single or double-quotes. Some examples:</p>
<p>- Hello world “Boston Red Sox”</p>
<p>- ‘Pepperoni Pizza’, ‘Cheese Pizza’, beer</p>
<p>2. Document text – the original document text that needs the provided keywords and phrases removed
(masked out).</p>
<p>Returns:
Document text with indicated keywords and phrases removed and replaced with XXXX.</p>
    </div>
  );
}
 
export default AppDescription;