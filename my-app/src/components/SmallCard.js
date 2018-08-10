import React from 'react';
// eslint-disable-next-line
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col , CardHeader} from 'reactstrap';
  import './boots.css';


const SmallCard = (props) => {
  return (
    <Col lg="4" md='4'  sm='12' xs='12'>
        <Card className="Card">
            {props.header && <CardHeader className="CardHeader">{props.header}</CardHeader>}
        <CardBody className="CardBody">
            {(props.bigContent && <CardTitle> {props.bigContentText}{props.bigContent}</CardTitle>) || (props.heading1Backup && <CardTitle>{props.heading1Backup}{props.content1Backup}</CardTitle>) }

            {props.subheadingStart && <CardSubtitle>{props.subheadingStart}</CardSubtitle>}
        <ul className="cardList">
        <li>{props.option1 && <CardText><span className="cardList_heading">{props.option1Text}</span>{props.option1}</CardText>}</li>
        <li>{props.option2 && <CardText><span className="cardList_heading">{props.option2Text}</span>{props.option2}</CardText>}</li>
        <li>{props.option3 && <CardText><span className="cardList_heading">{props.option3Text}</span>{props.option3}</CardText>}</li>
        <li>{props.option4 && <CardText><span className="cardList_heading">{props.option4Text}</span>{props.option4}</CardText>}</li>
        <li className="cardList_Subtitle">{props.subheadingEnd && <CardText>{props.subheadingEnd}</CardText>}</li>
        </ul>
        
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallCard;

// https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180
// <Button onClick={(e) => {props.handleTestButton();}}>Button</Button>