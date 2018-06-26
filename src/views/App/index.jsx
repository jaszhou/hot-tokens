import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import utils from "../../utils";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const { injectNOS, nosProps } = react.default;

const styles = {
  choices: {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center"
  },
  input: {
    width: "400px",
    height: "20px",
    padding: "10px",
    border: "none",
    outline: "none",
    backgroundColor: "rgb(243,243,243)",
    color: "black",
    margin: "5px",
    "::placeholder": {
      color: "rgb(203,203,203)"
    }
  },
  disabled: {
    backgroundColor: "white"
  },
  button: {
    position: "absolute",
    right: "10px",
    top: "10px",
    height: "30px",
    width: "60px"
  },
  inputBox: {
    position: "relative"
  }
};



class TableRow extends React.Component {

  constructor(props) {
       super(props);
       this.state = {
          header: "Header from props...",
          content: "Content from props...",
          value: ""
       }
    }

  getVote = async () => {
    console.log("Invoke 'getVote'");
    this.handleGetStorage("0a1948712e880db364e8e06e68ae8c614a399c05",'NAS',true,false);
  };

  makeVote = async (name) => {
    console.log("Invoke 'makeVote'");
    this.handleInvoke("0a1948712e880db364e8e06e68ae8c614a399c05", "add", [name]);
  };



  handleInvoke = (scriptHash, operation, args) =>
      this.props.nos
        .invoke({ scriptHash, operation, args })
        .then(txid => alert(`Invoke txid: ${txid} `))
        .catch(err => alert(`Error: ${err.message}`));

  handleGetStorage = async (scriptHash, key, encodeInput, decodeOutput) =>
      this.props.nos
        .getStorage({ scriptHash, key, encodeInput, decodeOutput })
        .then(txid => alert(`Invoke txid: ${txid} `))
        .catch(err => alert(`Error: ${err.message}`));

  handleGetValue = async (scriptHash, key, encodeInput, decodeOutput) =>
            this.props.nos
              .getStorage({ scriptHash, key, encodeInput, decodeOutput })
              .then(txid => this.setState({value:txid}))
              .catch(err => alert(`Error: ${err.message}`));

  getValue = async (key) => {
            return this.handleGetValue("0a1948712e880db364e8e06e68ae8c614a399c05",key,true,false)
          };

   render() {

     const { classes } = this.props;


     this.getValue(this.props.data.name);

     // this.setState({
     //   age: this.getValue(this.props.data.name),
     // });

     // console.log(this.state.value);

      return (
         <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.state.value}</td>
            <td>

            <button onClick={() => this.makeVote(this.props.data.name)}>
              Vote
            </button>


            </td>
         </tr>
      );
   }
}

TableRow.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(TableRow));
