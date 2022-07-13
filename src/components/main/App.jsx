import React from 'react';
import MockPdfForm from '../forms/Mock-Pdf';
import Keywords from '../forms/Keywords';
import PdfFileResults from '../general/Pdf-File-Results';
import AppDescription from '../general/App-Description';

class App extends React.Component {

    state = { pdfText: 'Pretend PDF text goes here', keywords: 'beer pizza joy', extractedResults: '' }
    
    updatePdfTextState = text => {
        this.setState({ pdfText: text }, () => {
            const keywordsArray = typeof this.state.keywords === 'string' ? this.state.keywords.trim().split(/\s+/) : this.state.keywords;
            this.replaceMockPdfKeywords( this.state.pdfText , keywordsArray )
        }); 
    };

    updateKeywordsState = _keywords => {
        this.setState({ keywords: _keywords }, () => {
            const keywordsArray = this.state.keywords.trim().split(/\s+/)
            this.replaceMockPdfKeywords( this.state.pdfText , keywordsArray )
        }); 
    };

    replaceMockPdfKeywords = ( pdfText, keywords ) => {
         console.log( pdfText, keywords )

         let extractedResults = pdfText.toLowerCase();

         keywords.map( keyword => {
            const numberOfXToGenerate = 'X'.repeat(keyword.length);
            extractedResults = extractedResults.replace(new RegExp("\\b"+keyword+"\\b", 'g'), numberOfXToGenerate);
         } )

         this.setState({ extractedResults: extractedResults })

    };

    render() {
        return ( 
            <div>
                <AppDescription></AppDescription>
                <MockPdfForm updatePdfTextState={this.updatePdfTextState} pdfText={this.state.pdfText}></MockPdfForm>
                <Keywords updateKeywordsState={this.updateKeywordsState} keywords={this.state.keywords}></Keywords>
                <PdfFileResults extractedResults={this.state.extractedResults}></PdfFileResults>
            </div>
        )
    }

}

export default App;