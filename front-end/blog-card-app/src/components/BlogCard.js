import styled from "styled-components";

export default function BlogCard({ title, imgUrl, summary, author, date }) {
  return (
    <Div>
      <Img src={imgUrl} alt="" />
      <CardTitle>{title}</CardTitle>
      <Summary>{summary && summary}</Summary>
      <div>
        <Author>{author}</Author>
        <Date>{date}</Date>
      </div>
    </Div>
  );
}

const Div = styled.div`
  width: 16rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Img = styled.img`
  width: 16rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.7rem;
`;

const CardTitle = styled.h4`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(45deg, #214ed3, #5a4fcf);
`;

const Summary = styled.p`
  color: gray;
  font-size: small;
`;

const Author = styled.p`
  color: gray;
  font-size: smaller;
  font-weight: bold;
`;

const Date = styled.p`
  color: gray;
  font-weight: 600;
  font-size: smaller;
`;
