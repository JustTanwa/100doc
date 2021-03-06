import React from 'react';
import Day100 from '../pages/Day100';

export default function Today() {
	return (
		<div style={{ maxWidth: '100vw' }}>
			<h2 className='text-center mt-5 mb-5'>
				Welcome, follow along on my journey to code for 100 days
			</h2>
			<Day100 />
		</div>
	);
}
