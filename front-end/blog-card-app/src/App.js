import styled from "styled-components";
import data from "./data/data.json";
import BlogCard from "./components/BlogCard";

const BlogCards = function () {
  return data.map((data) => {
    return <BlogCard {...data} />;
  });
};

function App() {
  return (
    <Main>
      <Title>J0RdN's Blog Card 4PP</Title>
      <Section>
        <BlogCards />
      </Section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const Title = styled.h2`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #214ed3, #5a4fcf);
  font-size: 36px;
  font-weight: bold;
`;

const Section = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
