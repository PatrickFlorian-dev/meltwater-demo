import React from 'react';  

class MockPdfForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.pdfText};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    
        this.setState({ value: event.target.value }, () => {
            this.props.updatePdfTextState( this.state.value.toLowerCase() );
        }); 
    }
    
    handleSubmit(event) {
        // this.props.updatePdfTextState( this.state.value.toLowerCase() );
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Mock PDF: <br/>
                <textarea value={this.state.value} onChange={this.handleChange} rows="10" cols="40" />
            </label>
            <br/>
            {/* <input type="submit" value="Run PDF Text Replacement" /> */}
        </form>
        );
    }
}

export default MockPdfForm;