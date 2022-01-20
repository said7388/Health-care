import React from "react";
import "./News.css";
import { Card, Col } from "react-bootstrap";

function SingleNews({ single }) {
  let { author, published, image } = single;
  const date = published.substring(0, 10);
  if (image === "None") {
    image = "https://www.linkpicture.com/q/no-thumbnail.png";
  }
  return (
    <Col sm={12} md={4}>
      <Card className='h-100'>
        <Card.Img variant='top' className='news-img' src={image} />
        <Card.Body>
          <Card.Title className='news-title'>
            <a href={single.url}>{single.title}</a>
          </Card.Title>
          <Card.Text className='text-start'>
            <p className='news-text'>{single.description}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='source'>
            <small className='source-name'>{author}</small>
            <small>{date}</small>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default SingleNews;
