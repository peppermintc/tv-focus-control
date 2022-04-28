import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  border: 5px solid gray;
  background-color: white;
`;

const Title = styled.div`
  background-color: gray;
  color: white;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const LinkContainer = styled(Link)`
  background-color: #a8a8a8;
  color: white;
  font-weight: 700;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  &:hover {
    background-color: gray;
  }
`;

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      <Title>Switch Device</Title>
      <LinkContainer to="/hd">HD TV</LinkContainer>
      <LinkContainer to="/fhd">FHD TV</LinkContainer>
      <LinkContainer to="/qhd">QHD TV</LinkContainer>
      <LinkContainer to="/iphone">IPhone SE</LinkContainer>
      <LinkContainer to="/ipad">IPad 6</LinkContainer>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
