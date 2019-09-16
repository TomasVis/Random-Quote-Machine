import React from 'react';
import $ from "jquery";

class App extends React.Component {
  state ={text:""}

generator = () => {

  let text = this.state.text.quoteText;
let newString = text.replace(/\s/gm, "%20");
  let link = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
  console.log(link.concat(newString) );
document.getElementById("tweet-quote").setAttribute("href",link.concat(newString));
    }

 getQuote = () => {
          $.ajax({
          
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {method: "getQuote",lang: "en",format: "jsonp"}
    })
      .done( data => {        
      console.log({data});
          this.setState({text:data})         
    })
    .fail(function(err) {
      console.log('Error: ' + err.status);
    });
}
componentDidMount() {
this.getQuote()

  }
  
  render() {
     return <div style={{padding:10}} id="quote-box" >

      <h3 id="text">{this.state.text.quoteText}</h3>
    <h4 style={{fontSize:16}}  id="author">- {this.state.text.quoteAuthor}</h4>       
       <a href="https://twitter.com/intent/tweet"  onClick={this.generator} target= "_blank" id="tweet-quote"> <i className= "btn btn-light fa fa-twitter fa-2x"></i></a>
            
    <button className= "btn btn-light" style={{margin:10, fontSize:21}} id="new-quote" onClick={this.getQuote}>New Quote</button>
     
      </div>
    
  }
}

export default App;