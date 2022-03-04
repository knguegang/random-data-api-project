import '../styles.css';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';


export default function Restaurant({ restaurant })
{
    return (
        <Card border="dark" className="card-width mt-3 mb-3">
            <Card.Img variant="top" src={restaurant.logo} />
            <Card.Body>
                <Card.Title className="restaurant-name">{restaurant.name}</Card.Title>
                <Card.Subtitle className="restaurant-type">{restaurant.type}</Card.Subtitle>
                <Card.Text>{restaurant.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Card.Subtitle className="restaurant-phone-number">Phone number</Card.Subtitle>
                    <Card.Text>{restaurant.phone_number}</Card.Text>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Subtitle className="restaurant-address">Address</Card.Subtitle>
                    <Card.Text>{restaurant.address}</Card.Text>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Subtitle className="restaurant-review">Reviews</Card.Subtitle>
                    <Card.Text><li>{restaurant.review}</li></Card.Text>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Subtitle className="restaurant-hours">Hours</Card.Subtitle>
                <Container>
                    <Row>
                        <Col>
                            <Card.Text>Monday: {restaurant.hours.monday.opens_at} - {restaurant.hours.monday.closes_at} ~  {restaurant.hours.monday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Tuesday: {restaurant.hours.tuesday.opens_at} - {restaurant.hours.tuesday.closes_at} ~ {restaurant.hours.tuesday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Wednesday: {restaurant.hours.wednesday.opens_at} - {restaurant.hours.wednesday.closes_at} ~ {restaurant.hours.wednesday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Thursday: {restaurant.hours.thursday.opens_at} - {restaurant.hours.thursday.closes_at} ~ {restaurant.hours.thursday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Friday: {restaurant.hours.friday.opens_at} - {restaurant.hours.friday.closes_at} ~ {restaurant.hours.friday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Saturday: {restaurant.hours.saturday.opens_at} - {restaurant.hours.saturday.closes_at} ~ {restaurant.hours.saturday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card.Text>Sunday: {restaurant.hours.sunday.opens_at} - {restaurant.hours.sunday.closes_at} ~ {restaurant.hours.sunday.is_closed ? 'Closed' : 'Open'}</Card.Text>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
    
}