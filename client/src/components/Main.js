import React, { Component } from 'react';
import { ENDPOINT } from '../resources/Resources';
import Restaurant from './Restaurant';
import { Container, Row, Col, Alert, Navbar } from 'react-bootstrap';
import axios from 'axios';
import '../styles.css';

export default class Main extends Component
{
    constructor()
    {
        super();
        this.state = { 
            restaurants: [],
            alertBody: '',
            showAlert: false,
        }
    }

    componentDidMount()
    {
        axios.get(ENDPOINT)
        .then((response) => 
        {
            if (response.data)
            {
                this.setState({ restaurants: response.data, alertBody: '', showAlert: false });
            }
            else
            {
                this.setState({alertBody: "Error retrieving data from Random Data API", showAlert: true});
            }
        })
        .catch((error) => 
        {
            this.setState({alertBody: "Error retrieving data from Random Data API", showAlert: true});
        })
    }


    render()
    {
        return(
            <>
            <Navbar className="navbar mb-3">
                <Container>
                    <Navbar.Brand>Random Restaurants</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <Alert variant="danger" show={this.state.showAlert} dissimissible className="mb-3">{this.state.alertBody}</Alert>
                <Row className="justify-content-md-center">
                    {this.state.restaurants.map((restaurant, index) =>
                        <Col key={index} xs="auto" sm="auto">
                            <Restaurant restaurant={restaurant} />
                        </Col>
                    )}
                </Row>
            </Container>
            </>
        )
    }
}
