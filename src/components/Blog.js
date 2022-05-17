import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import {
	Container,
	Row,
	Col,
	Card,
	InputGroup,
	FormControl,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';

export default function Blog(props) {
	const [showMorePost, setShowMorePost] = useState(true);
	const [showMoreSocials, setShowMoreSocials] = useState(true);
	const [search, setSearch] = useState('');
	const recentPostStyle = {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'center',
		paddingTop: '1em',
		paddingBottom: '1em',
	};

	const colorDark = '#212529';

	const lastestFiveArticles = props.daysCompleted.reduce((articles, day) => {
		if (day.blog) articles.push(day.blog);
		return articles;
	}, []);

	const togglePost = () => {
		setShowMorePost(!showMorePost);
	};

	const toggleSocial = () => {
		setShowMoreSocials(!showMoreSocials);
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	return (
		<main style={{ display: 'grid', placeItems: 'center' }}>
			<div style={{ width: '75%' }}>
				<Container>
					<Row>
						<Col md={4} style={recentPostStyle}>
							<InputGroup className='mb-2'>
								<InputGroup.Text
									id='searchbar'
									style={{ background: colorDark }}
								>
									<FontAwesomeIcon icon={faSearch} style={{ color: '#fff' }} />
								</InputGroup.Text>
								<FormControl
									type='search'
									placeholder='Search....'
									aria-label='search-bar'
									onChange={handleChange}
								/>
							</InputGroup>
							<Card
								style={{ flexGrow: 1, maxHeight: '80vh', overflow: 'hidden' }}
							>
								<Card.Header
									style={{ background: colorDark, color: '#fff' }}
									onClick={togglePost}
								>
									{' '}
									Recent Posts
								</Card.Header>
								<Card.Body
									className={showMorePost ? 'recent-post-collapse' : null}
								>
									<ListGroup>
										{lastestFiveArticles.map((article) => (
											<ListGroupItem>
												<a href={article.link}>{article.title}</a>
											</ListGroupItem>
										))}
									</ListGroup>
								</Card.Body>
							</Card>
							<Card className='mt-2'>
								<Card.Header
									style={{ background: colorDark, color: '#fff' }}
									onClick={toggleSocial}
								>
									Social Media
								</Card.Header>
								<Card.Body
									className={showMoreSocials ? 'socials-collapse' : null}
								>
									<div className='d-flex justify-content-evenly'>
										<a
											href='https://twitter.com/justtanwa'
											target={'_blank'}
											rel='noreferrer noopener nofollow'
										>
											<FontAwesomeIcon icon={faTwitter} size='3x' />
										</a>
										<a
											href='https://github.com/JustTanwa'
											target={'_blank'}
											rel=' noreferrer noopener nofollow'
										>
											<FontAwesomeIcon
												icon={faGithub}
												size='3x'
												style={{ color: 'black' }}
											/>
										</a>
										<a
											href='https://www.linkedin.com/'
											rel='noreferrer noopener nofollow'
										>
											<FontAwesomeIcon icon={faLinkedin} size='3x' />
										</a>
									</div>
								</Card.Body>
							</Card>
						</Col>
						<Col md={8} className='articles'>
							{lastestFiveArticles.map((article) => (
								<Post
									src={
										'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
									}
									title={article.title}
								/>
							))}
						</Col>
					</Row>
				</Container>
			</div>
		</main>
	);
}
