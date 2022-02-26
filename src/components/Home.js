import styled from "styled-components";

const Home = (props) => {
  return (
    <Container>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  overflow-x: hidden;
  padding: 0 calc(3.5vh + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;