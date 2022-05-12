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
  eventsTitle: {
    color: 'white',
    textShadow: '4px 3px 4px #9E9E9E',
    backgroundColor: 'black',
  },
  eventsContainer: {
    backgroundImage:
      'url(https://cdnb.artstation.com/p/assets/images/images/020/065/699/large/bhavin-solanki-vlcsnap-2019-08-10-11h24m19s192.jpg?1566228322)',
  },
};

function EventCard(props) {
  return (
    <div>
      <div>
        <h2 style={styles.eventsTitle}>
          Here are some upcoming events for your favorite artists!
        </h2>
      </div>
      <ListGroup horizontal style={styles.eventsContainer}>
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
                  <p>
                    Show Date:
                    {event.dates.start.dateTime}
                  </p>
                  <p>Show Time:{event.dates.start.localTime}</p>
                  <p>Show Location:{event._embedded.venues[0].name}</p>
                  <button>
                    <a href={event.url}>Get tickets</a>
                  </button>
                  <button>
                    <a>Add to my events page</a>
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
