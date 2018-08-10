import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from 'reactstrap';


const LocationCard = (props) => {
  return (
    <Col lg="3" md='4'  sm='5' xs='12'>
        <Card>
        <CardImg top width="100%" src="" alt="Card image cap" />
        <CardBody>
        {props.City && <CardTitle>{props.cardTitle}</CardTitle>}

        {props.Month && <CardTitle>{props.Month}</CardTitle>}
        
        <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LocationCard;