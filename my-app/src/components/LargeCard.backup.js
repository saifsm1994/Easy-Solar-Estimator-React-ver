import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col , CardHeader, Tooltip } from 'reactstrap';
  import './boots.css';


const LargeCard = (props) => {
  return (
    <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}  sm='12' xs='12'>
        <Card className="Card">
            {props.dataObjLargeCard.header && <CardHeader className="CardHeader">{props.dataObjLargeCard.header}</CardHeader>}
        <CardBody className="CardBody">
            {(props.dataObjLargeCard.bigContent && <CardTitle> {props.dataObjLargeCard.bigContentText}{props.dataObjLargeCard.bigContent}</CardTitle>) || (props.dataObjLargeCard.heading1Backup && <CardTitle>{props.dataObjLargeCard.heading1Backup}{props.dataObjLargeCard.content1Backup}</CardTitle>) }

            {props.dataObjLargeCard.subheadingStart && <CardSubtitle>{props.dataObjLargeCard.subheadingStart}</CardSubtitle>}
        <ul className="cardList">
        <li>{props.dataObjLargeCard.option1 && <CardText><span className="cardList_heading">{props.dataObjLargeCard.option1Text}</span><span  id="TooltipExample">{props.dataObjLargeCard.option1}</span></CardText>}</li>
        <li>{props.dataObjLargeCard.option2 && <CardText><span className="cardList_heading">{props.dataObjLargeCard.option2Text}</span>{props.dataObjLargeCard.option2}</CardText>}</li>
        <li>{props.dataObjLargeCard.option3 && <CardText><span className="cardList_heading">{props.dataObjLargeCard.option3Text}</span>{props.dataObjLargeCard.option3}</CardText>}</li>
        <li>{props.dataObjLargeCard.option4 && <CardText><span className="cardList_heading">{props.dataObjLargeCard.option4Text}</span>{props.dataObjLargeCard.option4}</CardText>}</li>
        <li className="cardList_Subtitle">{props.dataObjLargeCard.subheadingEnd && <CardText>{props.dataObjLargeCard.subheadingEnd}</CardText>}</li>
        </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LargeCard;

// https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180