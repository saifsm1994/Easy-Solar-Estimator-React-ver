import React from 'react';
// eslint-disable-next-line
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
  import SmallCard from './SmallCard';


const Cards = (props) => {
  return (
    <React.Fragment>
    { props.dataObjSmallCard.map((data, index) => {
        return(
       <SmallCard
         key={Math.random()}
         header = {data.header}
         option1 ={data.option1}
         option2 ={data.option2}
         option3 ={data.option3}
         option4 ={data.option4}
         option1Text ={data.option1Text}
         option2Text ={data.option2Text}
         option3Text ={data.option3Text}
         option4Text ={data.option4Text}
         subheadingStart={data.subheadingStart}
         subheadingEnd={data.subheadingEnd}
         bigContent={data.bigContent}
         bigContentText={data.bigContentText}
         handleTestButton = {props.handleTestButton}
         />
        )
     }
   )
 }
  </React.Fragment>
);
}




export default Cards;