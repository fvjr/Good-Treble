import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const styles = {
  card: {
    padding: 20,
    background: 'black',
    borderStyle: 'solid',
    borderWdith: 15,
    borderColor: 'black',
  },
};

function EventCard(props) {
  return (
    <div>
      <h2>Here are the events you're going to!</h2>
      <ListGroup horizontal>
        <Row>
          {props.events.map((event) => (
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  key={event.id}
                  variant="top"
                  src={event.images[2].url}
                />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <p>Show Date:{event.dates.start.dateTime}</p>
                  <p>Show Time:{event.dates.start.localTime}</p>
                  <p>Show Location:{event._embedded.venues[0].name}</p>
                  <button>
                    <a href={event.url}>Still need tickets? Get them here</a>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </ListGroup>
    </div>
  );
}

export default EventCard;
