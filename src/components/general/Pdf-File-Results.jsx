import React from 'react';
 
const PdfFileResults = ( props ) =>
{
  return(
    <div>
        <p>The results of your conversion will appear below: </p>
        <p className="extract-results">{ props.extractedResults }</p>
    </div>
  );
}
 
export default PdfFileResults;