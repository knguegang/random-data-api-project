import { COLORS, CARD_WIDTH } from '../resources/Resources';
import { Card, ListGroup, ListGroupItem, Container, Row, Col } from 'react-bootstrap';

export default function Restaurant({ restaurant })
{
    return (
        <Card border="dark" style={{ width: CARD_WIDTH }} className="mt-3 mb-3">
            <Card.Img variant="top" src={restaurant.logo} />
            <Card.Body>
                <Card.Title style={{color: COLORS.RESTAURANT.NAME}}>{restaurant.name}</Card.Title>
                <Card.Subtitle style={{color: COLORS.RESTAURANT.TYPE}}>{restaurant.type}</Card.Subtitle>
                <Card.Text>{restaurant.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Card.Subtitle style={{color: COLORS.RESTAURANT.PHONE_NUMBER}}>Phone number</Card.Subtitle>
                    <Card.Text>{restaurant.phone_number}</Card.Text>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Subtitle style={{color: COLORS.RESTAURANT.ADDRESS}}>Address</Card.Subtitle>
                    <Card.Text>{restaurant.address}</Card.Text>
                </ListGroupItem>
                <ListGroupItem>
                    <Card.Subtitle style={{color: COLORS.RESTAURANT.REVIEW}}>Reviews</Card.Subtitle>
                    <Card.Text><li>{restaurant.review}</li></Card.Text>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Subtitle style={{color: COLORS.RESTAURANT.HOURS}}>Hours</Card.Subtitle>
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