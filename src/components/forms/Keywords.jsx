import React from 'react';

class Keywords extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: props.keywords};
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {    
        this.setState({ value: event.target.value }, () => {
          this.props.updateKeywordsState( this.state.value.toLowerCase() );
        }); 
    }
  
    render() {
      return (
        <form>
          <p>Instructions: All you need to do is put whatever keywords you want to replace in the PDF is simply put them in the textarea below followed by a space and the app will handle the rest. You dont need a special format or anything.</p>
          <p>I included 3 keyworks below as an exampole but feel free to replace this with whatever keywords you want. This is not case sensitive so Beer is the same as beer or BeEr or bEER... it's all beer!</p>
          <label>
              Keywords: <br/>
              <textarea value={this.state.value} onChange={this.handleChange} rows="10" cols="40" />
          </label>
        </form>
      );
    }
  }

  export default Keywords;