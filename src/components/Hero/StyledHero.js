import styled from "styled-components";
import defaultImg from "../../images/room-1.jpeg";

const StyledHero = styled.header`
  width: 100%;
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export default StyledHero;
