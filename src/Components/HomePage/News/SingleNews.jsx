import React from "react";
import "./News.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleNews({ single }) {
  const { author, published } = single;
  const date = published.substring(0, 10);
  return (
    <Col sm={12} md={4}>
      <Card className='h-100'>
        <Card.Img variant='top' className='news-img' src={single.image} />
        <Card.Body>
          <Card.Title className='news-title'>
            <a href={single.url}>{single.title}</a>
          </Card.Title>
          <Card.Text className='text-start'>
            <p className='news-text'>{single.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <p className='source'>
            {" "}
            <small className='source-name'>{author}</small>{" "}
            <small>{date}</small>{" "}
          </p>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default SingleNews;
