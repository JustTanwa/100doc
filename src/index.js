import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Today from './components/Today';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Archive from './components/Archive';
import Blog from './components/Blog';
import NotFound from './components/NotFound';
import Day from './pages/Day';
import ArchiveIndex from './components/ArchiveIndex';
import './index.css';

const daysCompleted = [
	{
		date: '24-3-2022',
		blog: '',
	},
	{
		date: '25-3-2022',
		blog: '',
	},
	{
		date: '26-3-2022',
		blog: '',
	},
	{
		date: '27-3-2022',
		blog: '',
	},
	{
		date: '28-3-2022',
		blog: '',
	},
	{
		date: '29-3-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-array-methods-mapping-4ioj',
			title: 'JavaScript Array Methods - Mapping',
		},
	},
	{
		date: '30-3-2022',
		blog: '',
	},
	{
		date: '31-3-2022',
		blog: '',
	},
	{
		date: '01-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-array-methods-filtering-1k3p',
			title: 'JavaScript Array Methods - Filtering',
		},
	},
	{
		date: '02-4-2022',
		blog: '',
	},
	{
		date: '03-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-array-methods-some-every-30bb',
			title: 'JavaScript Array Methods - Some & Every',
		},
	},
	{
		date: '04-4-2022',
		blog: '',
	},
	{
		date: '05-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-array-methods-shift-unshift-push-and-pop-1fgi',
			title: 'JavaScript Array Methods - Shift, Unshift, Push and Pop',
		},
	},
	{
		date: '06-4-2022',
		blog: '',
	},
	{
		date: '07-4-2022',
		blog: '',
	},
	{
		date: '08-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-array-methods-slice-splice-1jb6',
			title: 'JavaScript Array Methods - Slice & Splice',
		},
	},
	{
		date: '09-4-2022',
		blog: '',
	},
	{
		date: '10-4-2022',
		blog: '',
	},
	{
		date: '11-4-2022',
		blog: '',
	},
	{
		date: '12-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-brief-grid-layout-part-1-2ibo',
			title: 'CSS - Brief Grid Layout Part 1',
		},
	},
	{
		date: '13-4-2022',
		blog: '',
	},
	{
		date: '14-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-brief-grid-layout-part-2-1oaf',
			title: 'CSS - Brief Grid Layout Part 2',
		},
	},
	{
		date: '15-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-brief-grid-layout-part-3-2b53',
			title: 'CSS - Brief Grid Layout Part 3',
		},
	},
	{
		date: '16-4-2022',
		blog: '',
	},
	{
		date: '17-4-2022',
		blog: '',
	},
	{
		date: '18-4-2022',
		blog: '',
	},
	{
		date: '19-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-brief-guide-on-flexbox-layout-1gnp',
			title: 'CSS - Brief Guide on Flexbox Layout - Part 1',
		},
	},
	{
		date: '20-4-2022',
		blog: '',
	},
	{
		date: '21-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-brief-guide-on-flexbox-layout-part-2-14k9',
			title: 'CSS - Brief Guide on Flexbox Layout - Part 2',
		},
	},
	{
		date: '22-4-2022',
		blog: '',
	},
	{
		date: '23-4-2022',
		blog: '',
	},
	{
		date: '24-4-2022',
		blog: '',
	},
	{
		date: '25-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/css-position-property-4h7l',
			title: 'CSS - Position Property',
		},
	},
	{
		date: '26-4-2022',
		blog: '',
	},
	{
		date: '27-4-2022',
		blog: '',
	},
	{
		date: '28-4-2022',
		blog: {
			link: 'https://dev.to/justtanwa/how-i-got-better-with-css-fe7',
			title: 'How I got better with CSS',
		},
	},
	{
		date: '29-4-2022',
		blog: '',
	},
	{
		date: '30-4-2022',
		blog: '',
	},
	{
		date: '1-5-2022',
		blog: '',
	},
	{
		date: '2-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/semantic-html-do-you-know-about-it-4pi8',
			title: 'Semantic HTML: Do you know about it?',
		},
	},
	{
		date: '3-5-2022',
		blog: '',
	},
	{
		date: '4-5-2022',
		blog: '',
	},
	{
		date: '5-5-2022',
		blog: '',
	},
	{
		date: '6-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-event-listeners-and-handlers-1g9',
			title: 'JavaScript - Event Listeners and Handlers',
		},
	},
	{
		date: '7-5-2022',
		blog: '',
	},
	{
		date: '8-5-2022',
		blog: '',
	},
	{
		date: '9-5-2022',
		blog: '',
	},
	{
		date: '10-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-set-4mbf',
			title: 'JavaScript - Set',
		},
	},
	{
		date: '11-5-2022',
		blog: '',
	},
	{
		date: '12-5-2022',
		blog: '',
	},
	{
		date: '13-5-2022',
		blog: '',
	},
	{
		date: '14-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-map-ko1',
			title: 'JavaScript - Map',
		},
	},
	{
		date: '15-5-2022',
		blog: '',
	},
	{
		date: '16-5-2022',
		blog: '',
	},
	{
		date: '17-5-2022',
		blog: '',
	},
	{
		date: '18-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-forof-and-forin-3f67',
			title: 'JavaScript - for...of and for...in',
		},
	},
	{
		date: '19-5-2022',
		blog: '',
	},
	{
		date: '20-5-2022',
		blog: '',
	},
	{
		date: '21-5-2022',
		blog: '',
	},
	{
		date: '22-5-2022',
		blog: '',
	},
	{
		date: '23-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/nodejs-and-expressjs-hello-world-3eb3',
			title: 'NodeJS and ExpressJS - Hello World',
		},
	},
	{
		date: '24-5-2022',
		blog: '',
	},
	{
		date: '25-5-2022',
		blog: '',
	},
	{
		date: '26-5-2022',
		blog: '',
	},
	{
		date: '27-5-2022',
		blog: '',
	},
	{
		date: '28-5-2022',
		blog: '',
	},
	{
		date: '29-5-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-conditional-operator-594f',
			title: 'JavaScript  Conditional Operator',
		},
	},
	{
		date: '30-5-2022',
		blog: '',
	},
	{
		date: '31-5-2022',
		blog: '',
	},
	{
		date: '01-6-2022',
		blog: '',
	},
	{
		date: '02-6-2022',
		blog: '',
	},
	{
		date: '03-6-2022',
		blog: '',
	},
	{
		date: '04-6-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-json-510f',
			title: 'JavaScript - JSON',
		},
	},
	{
		date: '05-6-2022',
		blog: '',
	},
	{
		date: '06-6-2022',
		blog: '',
	},
	{
		date: '07-6-2022',
		blog: '',
	},
	{
		date: '08-6-2022',
		blog: '',
	},
	{
		date: '09-6-2022',
		blog: '',
	},
	{
		date: '10-6-2022',
		blog: '',
	},
	{
		date: '11-6-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-hoisting-24if',
			title: 'JavaScript - Hoisting',
		},
	},
	{
		date: '12-6-2022',
		blog: '',
	},
	{
		date: '13-6-2022',
		blog: '',
	},
	{
		date: '14-6-2022',
		blog: '',
	},
	{
		date: '15-6-2022',
		blog: '',
	},
	{
		date: '16-6-2022',
		blog: '',
	},
	{
		date: '17-6-2022',
		blog: '',
	},
	{
		date: '18-6-2022',
		blog: {
			link: 'https://dev.to/justtanwa/javascript-destructuring-assignment-4pfp',
			title: 'JavaScript - Destructuring assignment',
		},
	},
	{
		date: '19-6-2022',
		blog: '',
	},
	{
		date: '20-6-2022',
		blog: '',
	},
	{
		date: '21-6-2022',
		blog: '',
	},
	{
		date: '22-6-2022',
		blog: '',
	},
	{
		date: '23-6-2022',
		blog: '',
	},
	{
		date: '24-6-2022',
		blog: '',
	},
	{
		date: '25-6-2022',
		blog: '',
	},
	{
		date: '26-6-2022',
		blog: '',
	},
	{
		date: '27-6-2022',
		blog: '',
	},
	{
		date: '28-6-2022',
		blog: '',
	},
	{
		date: '29-6-2022',
		blog: {
			link: 'https://dev.to/justtanwa/what-is-your-favourite-es6-feature-2i3f',
			title: 'What is your favourite ES6 feature?',
		},
	},
	{
		date: '30-6-2022',
		blog: '',
	},
	{
		date: '01-7-2022',
		blog: '',
	},
];

ReactDOM.render(
	<BrowserRouter>
		<NavBar />
		<Routes>
			<Route exact path='/' element={<App />} />
			<Route path='/today' element={<Today />} />
			<Route
				path='/archive'
				element={<Archive daysCompleted={daysCompleted} />}
			>
				<Route index element={<ArchiveIndex daysCompleted={daysCompleted} />} />
				<Route path=':dayNum' element={<Day />} />
			</Route>
			<Route path='/blog' element={<Blog daysCompleted={daysCompleted} />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
