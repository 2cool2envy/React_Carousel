function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
const defaultStylesDiv = {
  width: '14%',
  background: '#fff',
  zIndex: 10,
  position: 'absolute',
  boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
};

class InputSuggestion extends Component {
  constructor(props) {
    super();

    _defineProperty(this, "setWidthOfBox", width => {
      if (width <= 200) {
        //  console.log("idth < 200")
        this.setState({
          defaultStylesDiv: {
            width: '68%',
            background: '#fff',
            zIndex: 10,
            position: 'absolute',
            boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
          }
        });
      } else if (width <= 425) {
        //  console.log("idth < 425")
        this.setState({
          defaultStylesDiv: {
            width: '48%',
            background: '#fff',
            zIndex: 10,
            position: 'absolute',
            boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
          }
        });
      } else if (width >= 426 && width <= 670) {
        //  console.log("idth < 700")
        this.setState({
          defaultStylesDiv: {
            width: '38%',
            background: '#fff',
            zIndex: 10,
            position: 'absolute',
            boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
          }
        });
      } else if (width >= 671 && width < 900) {
        // console.log("idth < 900")
        this.setState({
          defaultStylesDiv: {
            width: '24%',
            background: '#fff',
            zIndex: 10,
            position: 'absolute',
            boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
          }
        });
      } else {
        this.setState({
          defaultStylesDiv: {
            width: '14%',
            zIndex: 10,
            background: '#fff',
            zIndex: 10,
            position: 'absolute',
            boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
          }
        });
      }
    });

    _defineProperty(this, "handleResize", () => {
      //    console.log('window.innerWidth ', window.innerWidth);
      this.setWidthOfBox(window.innerWidth);
    });

    _defineProperty(this, "onTextChange", event => {
      let userInput = event.target.value.toLowerCase();
      const userValCurrent = event.target.value;
      this.props.currentInputBoxValue(userValCurrent);

      if (this.state.suggestions && this.state.suggestions.length > 0) {
        if (userInput.length > 0) {
          this.setState({
            inputVal: event.target.value
          });
          const val = event.target.value;

          if (this.props.inputBoxValue) {//this.props.inputBoxValue(val);
          } else {
            console.warn('inputbox-suggestion - props inputBoxValue missing');
          }

          let tempArr = this.state.suggestions.filter(val => val.toLowerCase().includes(userInput));
          this.setState({
            cloneSuggestions: tempArr
          });
        }

        if (userInput.length < 1) {
          this.setState({
            inputVal: ''
          });
        }
      }
    });

    this.state = {
      inputVal: '',
      suggestions: [],
      suggestionsStyle: {},
      cloneSuggestions: [],
      isDefaultStyles: true,
      defaultStylesDiv: {
        width: '14%',
        background: '#fff',
        zIndex: 10,
        position: 'absolute',
        boxShadow: "rgb(158, 158, 158) 1px 1px 5px"
      }
    };
  }

  componentDidMount() {
    this.setState({
      suggestions: this.props.suggestions
    });
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.suggestions !== state.suggestions) {
      return {
        suggestions: props.suggestions,
        suggestionsStyle: props.suggestionsStyle ? props.suggestionsStyle : {}
      };
    }

    return null;
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "InputSuggestionClass"
    }, /*#__PURE__*/React.createElement("input", {
      onChange: this.onTextChange,
      type: "text",
      id: "InputSuggestion",
      name: "InputSuggestion"
    }), /*#__PURE__*/React.createElement("div", {
      style: this.state.defaultStylesDiv
    }, this.state.inputVal.length > 0 && this.state.cloneSuggestions.map((data, i) => {
      return /*#__PURE__*/React.createElement("div", {
        className: "inputSuggestionElement",
        style: {
          padding: '2%'
        },
        onClick: e => {
          document.getElementById('InputSuggestion').value = data;
          this.setState({
            cloneSuggestions: []
          });
          if (data.length > 0) this.props.inputBoxValue(data);
          e.preventDefault();
        },
        style: Object.keys(this.state.suggestionsStyle).length > 0 ? this.state.suggestionsStyle : null,
        key: i
      }, data, /*#__PURE__*/React.createElement("br", null));
    })));
  }

}

export default InputSuggestion;