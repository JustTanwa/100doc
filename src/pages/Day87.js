import React, { useState } from 'react';
import Highlight from 'react-highlight';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Day87() {
	const [toggleAnswer, setToggleAnswer] = useState(false);

	const showAnswer = () => {
		setToggleAnswer(!toggleAnswer);
	};

	const leetCode = {
		name: '71. Simplify Path',
		question: `<div><p>Given a string <code>path</code>, which is an <strong>absolute path</strong> (starting with a slash <code>'/'</code>) to a file or directory in a Unix-style file system, convert it to the simplified <strong>canonical path</strong>.</p>

		<p>In a Unix-style file system, a period <code>'.'</code> refers to the current directory, a double period <code>'..'</code> refers to the directory up a level, and any multiple consecutive slashes (i.e. <code>'//'</code>) are treated as a single slash <code>'/'</code>. For this problem, any other format of periods such as <code>'...'</code> are treated as file/directory names.</p>
		
		<p>The <strong>canonical path</strong> should have the following format:</p>
		
		<ul>
			<li>The path starts with a single slash <code>'/'</code>.</li>
			<li>Any two directories are separated by a single slash <code>'/'</code>.</li>
			<li>The path does not end with a trailing <code>'/'</code>.</li>
			<li>The path only contains the directories on the path from the root directory to the target file or directory (i.e., no period <code>'.'</code> or double period <code>'..'</code>)</li>
		</ul>
		
		<p>Return <em>the simplified <strong>canonical path</strong></em>.</p>
		
		<p>&nbsp;</p>
		<p><strong>Example 1:</strong></p>
		
		<pre><strong>Input:</strong> path = "/home/"
<strong>Output:</strong> "/home"
<strong>Explanation:</strong> Note that there is no trailing slash after the last directory name.
		</pre>
		
		<p><strong>Example 2:</strong></p>
		
		<pre><strong>Input:</strong> path = "/../"
<strong>Output:</strong> "/"
<strong>Explanation:</strong> Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
		</pre>
		
		<p><strong>Example 3:</strong></p>
		
		<pre><strong>Input:</strong> path = "/home//foo/"
<strong>Output:</strong> "/home/foo"
<strong>Explanation:</strong> In the canonical path, multiple consecutive slashes are replaced by a single one.
		</pre>
		
		<p>&nbsp;</p>
		</div>`,
		level: 'Medium',
	};

	return (
		<main>
			<Container className='w-80 h-75 justify-content-center position-relative'>
				<Row>
					<Col
						lg={6}
						style={
							toggleAnswer
								? { overflowY: 'auto', maxHeight: '550px' }
								: { overflow: 'hidden', maxHeight: '550px' }
						}
					>
						<div className='code-container position-relative'>
							<Highlight className='language-javascript'>
								{`/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	// path order
    const Path = path.split("/");
    const pathStack = [];
    
    for (let i = 0; i < Path.length; i++) {
        if (pathStack.length > 0 && Path[i] === "..") {
            pathStack.pop();
        } 
        else if (Path[i] !== "" && Path[i] !== "." && Path[i] !== "..") {
            pathStack.push("/" + Path[i])
        }
    }
    
    if (pathStack.length === 0) return "/";
    return pathStack.join("");
};`}
							</Highlight>
							<div
								className={
									'overlay position-absolute' +
									(toggleAnswer ? '' : ' overlayBlur')
								}
							></div>
						</div>
					</Col>
					<Col lg={6}>
						<section>
							<p>Day 87: Solving one of LeetCode problems</p>
							<p>
								<strong>{leetCode.name}</strong> Difficulty - {leetCode.level}
							</p>
							<p dangerouslySetInnerHTML={{ __html: leetCode.question }}></p>
							<Button variant='secondary' type='button' onClick={showAnswer}>
								{toggleAnswer ? 'Hide' : 'Show'} solution
							</Button>
						</section>
					</Col>
				</Row>
			</Container>
		</main>
	);
}
