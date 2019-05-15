import React from 'react';
import Painel from '../Painel/Painel';
import Nav from '../Navbar/Nav';
import Dashboard from '../Dashboard/Dashboard';
import Mapa from '../Mapa/Mapa';

const style = {
    width: '100%',
    height: '100%'
}

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pagina: 1, cliente: '', posto: '' }
        this.change = this.change.bind(this);
    }

    change(e) {
        this.setState({ pagina: e.pagina, cliente: e.cliente, posto: e.posto });
    }

    render() {
        return (
            <div style={style}>
                {alert('pagina' + this.state.pagina + 'cliente' + this.state.cliente + 'posto' + this.state.posto)}
                <Nav handleChange={this.change} pagina={this.state.pagina} />
                {this.state.pagina === 1 ? <Painel clientePosto={{ cliente: this.state.cliente, posto: this.state.posto }} />
                    : this.state.pagina === 2 ? <Dashboard />
                        : <Mapa />}
            </div >
        );
    }
}

export default Body;