import { Component } from "react";

const styles = {
  layout: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  container: {
    width: "80%",
  },
};

class Layout extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <div style={styles.container}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
