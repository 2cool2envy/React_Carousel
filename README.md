
### Functionality
Interactive React UI component to show the auto-suggestion on the input based on the user's input in textbox based on provided data for suggestions. Demo - https://stackblitz.com/edit/react-b7kncf?file=src/App.js
![Screenshot -1 ](https://raw.githubusercontent.com/2cool2envy/fkbestOffers/master/compress_auto_suggestions.gif)


# Usage (Demo - https://stackblitz.com/edit/react-b7kncf?file=src/App.js)
    import  InputSuggestion  from  'inputbox-suggestion/dist';
    ....
    data =["measure", "message", "machine"]
    ....
    getCurrentVal = (curr) => this.setState({val : curr})
    ....
    setValue = (inputVal) => this.setState({text : inputVal})
    ...
    <InputSuggestion inputBoxValue={this.setValue} suggestions={data} />
    ...
    <InputSuggestion  currentInputBoxValue={this.getCurrentVal} inputBoxValue={this.setValue} 
    suggestionsStyle={{padding:'5%',borderBottom:'0.5px solid'}}
    suggestions={data} />

## Props Table         
| prop name         | functionality            | required/optional  |
| ----------------- |:------------------------:|-------------------:|
| suggestions       | Data in form of Array to show suggestion for input  | *required  |
| inputBoxValue     | Return selected value of input box                  |  optional  |
| currentInputBoxValue     | Return the current value of input box        |  optional  |
| suggestionsStyle  | Styles for suggestions                              |  optional  |


## Installation

    npm i inputbox-suggestion
  
### Contributor(s)
  Mohit Kapoor -@2cool2envy - [kapoormohit01@gmail.com](mailto:kapoormohit01@gmail.com)
  
### Let's together make it more better
eMail : [kapoormohit01@gmail.com](mailto:kapoormohit01@gmail.com)

