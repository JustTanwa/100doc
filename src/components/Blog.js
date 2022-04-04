import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, InputGroup, FormControl, ListGroup, ListGroupItem } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';

export default function Blog(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowChange = () => {
    console.log(windowWidth);
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", windowChange)
    return () => {
      window.removeEventListener("resize", windowChange)
    }
  }, [windowWidth]);

  const mainArticles = {
    paddingTop: "1em",
    paddingBottom: "1em",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
  const recentPostStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    paddingTop: "1em",
    paddingBottom: "1em"
  }

  const colorDark = "#212529";

  const lastestFiveArticles = props.daysCompleted.reduce((articles, day) => {
    if (day.blog) articles.push(day.blog);
    return articles
  }, []);

  

  return (
    <main style={{display: "grid", placeItems: "center"}}>
      <div style={{ width: "75%" }}>
        <Container>
          <Row>
            <Col md={8} style={mainArticles}>
              <Row style={{flexBasis: "100%", height: "60%", paddingBottom: 10 }}>
                <Post src={"https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2016/09/javascript-udemy-courses.jpg"} title={"The weird and wonderful of JavaScript"} />
              </Row>
              <Row style={{ flexBasis: "100%", height: "40%" }}>
                <Col sm={6} className="d-flex align-items-strech" style={{ paddingLeft: 0 }}>
                  <div className='flex-basis-100' style={{ flexBasis: "100%"}}>
                    <Post src={"https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV"} title="HTML stands for How To Mix Languages" />
                  </div>
                </Col>
                <Col sm={6} className="d-flex align-items-strech" style={{ paddingRight: 0 }}>
                  <div className='flex-basis-100' style={{ flexBasis: "100%"}}>
                    <Post src={"https://www.filepicker.io/api/file/4JkBtVU9QUwcwFCWi3AV"} title="Made with flexbox and Bootstrap" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4} style={recentPostStyle}>
              <InputGroup className="mb-2">
                <InputGroup.Text id="searchbar" style={{background: colorDark}}><FontAwesomeIcon icon={faSearch} style={{color: "#fff"}}/></InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder='Search....'
                  aria-label='search-bar'
                />
              </InputGroup>
              <Card>
                <Card.Header style={{background: colorDark, color: "#fff"}}> Recent Posts</Card.Header>
                <Card.Body>
                  <ListGroup>
                    {lastestFiveArticles.map( article => <ListGroupItem><a href={article.link}>{article.title}</a></ListGroupItem>)}
                    <ListGroupItem>Title of articles I have written, It can some times be super long</ListGroupItem>
                    <ListGroupItem>Title of articles I have written, It can some times be super long</ListGroupItem>
                    <ListGroupItem>Title of articles I have written, It can some times be super long</ListGroupItem>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Card className="mt-2" style={{ flexGrow: 1 }}>
                <Card.Header style={{background: colorDark, color: "#fff"}}>Social Media</Card.Header>
                <Card.Body>
                  <div className='d-flex justify-content-evenly'>
                    <a href="https://twitter.com/justtanwa" target={"_blank"} rel="noreferrer noopener nofollow" ><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                    <a href="https://github.com/Katakung95" target={"_blank"} rel=" noreferrer noopener nofollow"><FontAwesomeIcon icon={faGithub} size="3x" style={{ color: "black" }} /></a>
                    <a href="https://www.linkedin.com/" rel="noreferrer noopener nofollow"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </main>

  )
}
