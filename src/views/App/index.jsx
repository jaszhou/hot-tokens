import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";


import Header from "./../../components/Header";
import NOSActions from "./../../components/NOSActions";
import OpponentChoice from "./../../components/OpponentChoice";
import AddToken from "./../../components/AddToken";
import Content from "./../../components/Content";
import '../../assets/bootstrap.min.css';

const { injectNOS, nosProps } = react.default;




const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0,
    backgroundColor: "#ffffff"
  },
  App: {
    textAlign: "center"
  },
  intro: {
    fontSize: "large"
  },
  lineBreak: {
    width: "75%",
    borderTop: "1px solid #333333",
    margin: "32px auto"
  }
};



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.componentDidMount();

  }

  getInitialState = () => {

    return {
      playerAddress: "",
      contract: "fec29aa6a8215e1a40d2601a3031f3cc78db7a7d"

    };
  };

  handleAlert = async func => alert(await func);

  componentDidMount = async () => {
    try {
      const playerAddress = await this.props.nos.getAddress();

      console.log("address: "+playerAddress);

      await this.setState({
        playerAddress

      });
    } catch (e) {
      return;
    }

  };




render = () => {
  const { classes } = this.props;

  return (
    <div className={classes.App}>
      <Header title="The Top Rated Tokens" />
      <p className={classes.intro}>
      You can vote for the most profitable tokens on exchange
         at the moment.
      </p>

      <hr className={classes.lineBreak} />


     <Content  contract = {this.state.contract}/>



      <hr className={classes.lineBreak} />


    </div>
  );
};


}


App.propTypes = {
  classes: PropTypes.object.isRequired

};

export default injectSheet(styles)(App);
