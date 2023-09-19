import styled from "styled-components";
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const Comments = ({ showComment, title }) => {
  const [comment, setComment] = useState("");
  const [comments, addComment] = useState(
    JSON.parse(localStorage.getItem("c-" + title)) || []
  );
  useEffect(() => {
    localStorage.setItem("c-" + title, JSON.stringify(comments));
  }, [comments, title]);

  return (
    showComment && (
      <CommentSection>
        <CommentField>
          <CommentInput
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <SendIcon
            onClick={(e) => {
              if (comment) {
                addComment([...comments, comment]);
                setComment("");
              }
            }}
          />
        </CommentField>
        {(() => {
          return comments.map((comment) => {
            return <Comment>{comment}</Comment>;
          });
        })()}
      </CommentSection>
    )
  );
};

export default function BlogCard({ title, imgUrl, summary, author, date }) {
  const [likes, setLikes] = useState(
    JSON.parse(localStorage.getItem(title)) || { like: 0, status: false }
  );
  const [showComment, setShowComment] = useState(false);

  useEffect(() => {
    localStorage.setItem(title, JSON.stringify(likes));
  }, [likes, title]);

  return (
    <Div>
      <Img src={imgUrl} alt="" />
      <CardTitle>{title}</CardTitle>
      <Summary>{summary && summary}</Summary>
      <Footer>
        <div>
          <Author>{author}</Author>
          <Date>{date}</Date>
        </div>
        <CommentIcon
          onClick={(e) => {
            setShowComment(!showComment);
          }}
          $isActive={showComment}
        />
        <LikeDiv>
          <small>{likes.like}</small>
          <LikeIcon
            onClick={(e) => {
              if (likes.status) {
                setLikes({ like: likes.like - 1, status: false });
              } else {
                setLikes({ like: likes.like + 1, status: true });
              }
            }}
            $isLiked={likes.status}
          />
        </LikeDiv>
      </Footer>
      <Comments showComment={showComment} title={title} />
    </Div>
  );
}

const LikeDiv = styled.div`
  display: flex;
  gap: 2px;
  color: darkslategray;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding-top: 0.5rem;
`;

const CommentField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Comment = styled.p`
  font-size: small;
  color: gray;
  margin: 4px 0;
`;

const CommentInput = styled.input`
  flex: auto;
  padding: 6px 12px;
  outline: none;
  border: 1px solid gray;
  border-radius: 16px;
  cursor: pointer;
  &:focus {
    border-color: #5a4fcf;
  }
`;

const SendIcon = styled(PaperAirplaneIcon)`
  width: 20px;
  height: 20px;
  color: gray;
  cursor: pointer;
  &:hover {
    color: #5a4fcf;
  }
`;

const LikeIcon = styled(HandThumbUpIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => (props.$isLiked ? "#5a4fcf" : "gray")};
  cursor: pointer;
  &:hover {
    color: #5a4fcf;
  }
`;

const CommentIcon = styled(ChatBubbleBottomCenterTextIcon)`
  width: 20px;
  height: 20px;
  color: ${(props) => (props.$isActive ? "#5a4fcf" : "gray")};
  cursor: pointer;
  &:hover {
    color: #5a4fcf;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

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
  font-size: x-small;
  font-weight: bold;
`;

const Date = styled.p`
  color: gray;
  font-weight: 600;
  font-size: x-small;
`;
