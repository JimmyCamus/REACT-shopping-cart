import { Component } from "react";
import Navbar from "./components/Navbar.js";
import Layout from "./components/Layout.js";
import Title from "./components/Title.js";
import Productos from "./components/Productos.js";

class App extends Component {
  state = {
    productos: [
      { name: "Ram", price: 45000, img: "./productos/ram.jpg" },
      { name: "Disco Duro", price: 50000, img: "./productos/disco.jpg" },
      { name: "SSD", price: 65000, img: "./productos/ssd.jpg" },
    ],
    carro: [],
    esCarroVisible: false
  };

  agregarAlCarro = (producto) => {

    const {carro} = this.state

    if (carro.find(p => p.name === producto.name)){
      const newCarro = carro.map(p => p.name === producto.name ? ({
        ...p,
        cantidad: p.cantidad + 1
      }): p);

      return this.setState({carro: newCarro});
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    });
  }

  mostrarCarro = () => {
    if (!this.state.carro.length){
      return;
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible});
  }

  render() {
    const {esCarroVisible} = this.state;
    return (
      <div>
        <Navbar 
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
