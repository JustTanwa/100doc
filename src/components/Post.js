import React from 'react';

export default function Post(props) {
	const titleStyle = {
		display: 'block',
		position: 'absolute',
		bottom: '0',
		left: '0',
		background: 'rgba(0, 0, 0, 0.8)',
		fontSize: '2.5em',
		width: '100%',
		height: '30%',
		color: 'white',
		padding: '0.25em 0 0 0.25em',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	};
	const imageStyle = {
		position: 'relative',
		border: 'solid 1px black',
		background: `url(${props.src})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100%',
	};
	return (
		<div className='post-image' style={imageStyle}>
			<p style={titleStyle}>{props.title}</p>
		</div>
	);
}
