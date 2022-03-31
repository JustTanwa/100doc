import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day8() {
    const [toggleAnswer, setToggleAnswer] = useState(false)

    const showAnswer = () => {
        setToggleAnswer(!toggleAnswer);
    }

    const codeWars = {
        name: "PaginationHelper",
        question: `For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
<br>
        The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
        
        The following are some examples of how this class is used:
        <div style="background-color: rgb(10,10,10); padding: 1em 1em">
            <code style="color: #fff">
            var helper = new PaginationHelper(['a','b','c','d','e','f'], 4); 
helper.pageCount(); //should == 2 <br>
helper.itemCount(); //should == 6 <br>
helper.pageItemCount(0); //should == 4 <br>
helper.pageItemCount(2); // should == -1 since the page is invalid <br>

// pageIndex takes an item index and returns the page that it belongs on <br>
helper.pageIndex(5); //should == 1 (zero based index) <br>
helper.pageIndex(2); //should == 0 <br>
helper.pageIndex(-10); //should == -1
            </code>
        </div>
        `,
        level: "5 kyu"
    }

    const blurSolution = {
        width: "calc(50% - 24px)",
        height: "100%",
        paddingRight: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        top: 0,
        WebkitBackdropFilter: "blur(10px)",
        backdropFilter: "blur(10px)",
    }

    return (
        <main>
            <Container className="w-80 h-75 justify-content-center position-relative">
                <Row>
                    <Col lg={6} style={toggleAnswer ? { overflowY: "scroll", maxHeight: "550px" } : { overflow: 'hidden', maxHeight: "550px" }}>
                        <div className="code-container position-relative">
                            <Highlight className="language-javascript" >
                                {`function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.numOfItems = collection.length;
}

PaginationHelper.prototype.itemCount = function() {
  return this.numOfItems;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.numOfItems / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const lastIndex = Math.floor(this.numOfItems / this.itemsPerPage);
  if (pageIndex >= 0 && pageIndex < lastIndex) return this.itemsPerPage;
  if (pageIndex === lastIndex) return this.numOfItems % this.itemsPerPage;
 
  return -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  const pageIndex = Math.floor(itemIndex / this.itemsPerPage);
  if (itemIndex >= this.numOfItems || itemIndex < 0) return -1;
  return pageIndex;
}`}
                            </Highlight>
                        </div>
                        <div className='overlay position-absolute' style={toggleAnswer ? null : blurSolution}>
                        </div>
                    </Col>
                    <Col>
                        <section>
                            <p>Day 8: Solving one of the Kata on CodeWars</p>
                            <p><strong>{codeWars.name}</strong> {codeWars.level}</p>
                            <p dangerouslySetInnerHTML={{ __html: codeWars.question }}></p>
                            <Button variant="secondary" type="button" onClick={showAnswer}>{toggleAnswer ? "Hide" : "Show"} solution</Button>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}
