import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import { react } from "@nosplatform/api-functions";
import utils from "../../utils";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TableRow from "../TableRow";

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

class Content extends React.Component {
   constructor() {
      super();
      this.state = {
         value: 0,
         data:
         [
            {
               "id":1,
               "name":"NEO",
               "age":"0"
            },
            {
               "id":2,
               "name":"NAS",
               "age":"0"
            },
            {
               "id":3,
               "name":"BTC",
               "age":"0"
            }
         ]
      }
   }
   render() {

     const { classes, nos } = this.props;

      return (
         <div>
            <div className={classes.App}>


            <table align='center'>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>BlockChain Name</th>
                  <th>Total Votes Received</th>
                  <th>Vote</th>
                </tr>
              </thead>
              <tbody>
                 {this.state.data.map((person, i) => <TableRow key = {i}
                    data = {person}  />)}
              </tbody>
            </table>

          </div>
         </div>
      );
   }
}


Content.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  nos: nosProps.isRequired
};

export default injectNOS(injectSheet(styles)(Content));
