import { LOADING_ANIMATION, CARD_WIDTH } from '../resources/Resources';
import { Card, ListGroup, ListGroupItem, Container, Row, Col, Placeholder } from 'react-bootstrap';

export default function Loading()
{
    return (
        <Card border="dark" style={{ width: CARD_WIDTH }} className="mt-3 mb-3">
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Placeholder as={Card.Title} animation={LOADING_ANIMATION}>
                    <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Subtitle} animation={LOADING_ANIMATION}>
                    <Placeholder xs={4} />
                </Placeholder>
                <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                    <Placeholder xs={7} /> <Placeholder xs={5} /> {' '}
                    <Placeholder xs={4} /> <Placeholder xs={8} /> {' '}
                    <Placeholder xs={9} />
                </Placeholder>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Placeholder as={Card.Subtitle} animation={LOADING_ANIMATION}>
                        <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                        <Placeholder xs={7} /> 
                    </Placeholder>
                </ListGroupItem>
                <ListGroupItem>
                    <Placeholder as={Card.Subtitle} animation={LOADING_ANIMATION}>
                        <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                        <Placeholder xs={7} /> 
                    </Placeholder>
                </ListGroupItem>
                <ListGroupItem>
                    <Placeholder as={Card.Subtitle} animation={LOADING_ANIMATION}>
                        <Placeholder xs={4} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                        <Placeholder xs={7} /> <Placeholder xs={7} />
                    </Placeholder>
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Placeholder as={Card.Subtitle} animation={LOADING_ANIMATION}>
                    <Placeholder xs={4} />
                </Placeholder>
                <Container>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                <Placeholder xs={6} /> 
                            </Placeholder>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                 <Placeholder xs={6} />
                            </Placeholder>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                <Placeholder xs={6} /> 
                            </Placeholder>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                 <Placeholder xs={6} />
                            </Placeholder>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                <Placeholder xs={6} /> 
                            </Placeholder>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                 <Placeholder xs={6} />
                            </Placeholder>                        
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Placeholder as={Card.Text} animation={LOADING_ANIMATION}>
                                <Placeholder xs={6} /> 
                            </Placeholder>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
    
}