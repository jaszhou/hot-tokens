import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";

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



class AddToken extends React.Component {
   constructor(props) {
      super(props);


      this.state = {
         token: 'NEO'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({token: e.target.value});


   }

   handleAlert = async func => alert(await func);

   render() {
       const { classes, nos } = this.props;

      return (
         <div>
            <input type = "text" value = {this.state.token}
               onChange = {this.updateState} />
            <h4>current address: {this.props.playerAddress}</h4>

            <button onClick={() => this.handleAlert(this.state.token)}>
              Vote
            </button>
         </div>
      );
   }
}


AddToken.propTypes = {
  playerAddress: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,

  classes: PropTypes.objectOf(PropTypes.any).isRequired

};



AddToken.defaultProps = {};

export default injectSheet(styles)(AddToken);
