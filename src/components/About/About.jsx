import React, { useState } from 'react'
import './style.css'

const About = () => {
	const skills = ['React', 'Redux', 'CSS3', 'HTML5', 'Jest', 'Sass']
	const [active, setActive] = useState(true)

	setTimeout(() => setActive(false), 1000)

	const disableScroll = () => {
		document.body.style.overflow = 'hidden'
	}

	const enableScroll = () => {
		document.body.style.overflow = 'visible'
	}

	if (active) {
		disableScroll()
	}

	return (
		<>
			<div
				className={`${active ? 'coffee-container' : 'out-of-coffee'}`}
				onTransitionEnd={() => enableScroll()}
			>
				<div className='coffee'>
					<div />
					<div />
					<div />
				</div>
			</div>
			<div className='about-main' id='about'>
				<div className='about-image-container'>
					<img
						src='https://i.imgur.com/nCUx4VC.jpg'
						alt='image of space'
						className='about-image'
						data-testid='about-image'
					/>
					<div className='about-image-tags'>
						Photo by{' '}
						<a
							href='https://unsplash.com/@nicolescapturedmoments?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
							target='_blank'
						>
							Nicole Avagliano
						</a>{' '}
						on{' '}
						<a
							href='https://unsplash.com/s/photos/space-background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
							target='_blank'
						>
							Unsplash
						</a>
					</div>
				</div>
				<div className='about-content' data-testid='about-content'>
					<h4 data-testid='about-header' className='about-header'>
						About Me
					</h4>
					<p>Hello!</p>
					<p>
						My name is <span>Ryan O'Connell </span>
						and I'm a software developer that specializes on the{' '}
						<span>Frontend.</span>
					</p>
					<p>
						I'm interested in creating responsive and accessible front-end web
						applications.
					</p>
				</div>
				<div className='about-skills' data-testid='about-skills'>
					<p className='about-skills-header'>
						Here are a few of my skills / technologies
					</p>
					<div className='about-skills-grid'>
						{skills.map((skill, index) => (
							<div className='about-skill-item' data-testid='skill-item'>
								<p>{skill}</p>
							</div>
						))}
					</div>
				</div>
				<div className='about-more'>
					<div className='about-contact blue__button'>
						<a href='#contact' data-testid='hire-button'>
							HIRE ME
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
