import React from "react";
import { Container, Row } from "react-bootstrap";
import "./News.css";
import useNews from "../../../Hooks/useNews";
import SingleNews from "./SingleNews";

const News =({quantity}) =>{
  const { news } = useNews();
  return (
    <div className='my-md-5 my-3'>
      <Container>
        <p className='regular-title'>Latest Covid News</p>
        <Row className='g-2 g-md-3'>
          {news.slice(0, quantity).map((single) => (
            <SingleNews single={single} key={single.id} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default News;
