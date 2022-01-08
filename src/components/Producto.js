import { Component } from "react";
import Button from "./Button.js";

const styles = {
  img: {
    width: "100%",
    height: "350px",
  },
  producto: {
    width: "30%",
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    padding: "10px 15px",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    return (
      <div style={styles.producto}>
        <img style={styles.img} src={producto.img} alt={Producto.name} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}

export default Producto;
