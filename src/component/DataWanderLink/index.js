import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import axios from 'axios';

import Item from './item';

class index extends Component {

    state = {
        data : []
    }

    componentDidMount(){
        axios.get('http://35.240.201.155:3000/api/v1/wanderlink/show/idn/destination')
        .then(res => {
            this.setState({data : res.data});
        })
    }

    render() {
        let tampilkanWisata;

        tampilkanWisata = this.state.data.map ((item, index) => {
            return <Item key={index}>{index}></Item>
        })

        return (
            <div>
                <h1>Data WanderLink</h1>
                <Row>{tampilkanWisata}</Row>

            </div>
        )
    }
}
export default index;