import SingleCard from "./Card";
import { CardGroup } from "react-bootstrap";

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 
};
const CardVertical = (props) => {
  return (
    <div style = {styles}>
    <CardGroup>
      <SingleCard  title={props.title1} img={props.image1} body={props.body1} buttontext={props.button1} bodydepth = {props.bodydepth1}/>
      <SingleCard  title={props.title2} img={props.image2} body={props.body2}  buttontext={props.button2} bodydepth = {props.bodydepth2}/>
      <SingleCard  title={props.title3} img={props.image3} body={props.body3}  buttontext={props.button3} bodydepth = {props.bodydepth3}/>
    </CardGroup>
    </div>
  );
};
export default CardVertical;
