import React from 'react';
import './About.css';
import aboutImg from './img/about.jpg';

function About() {
	return (
		<div className='about component__space' id="About">
			<div className="container">
				<div className="row">
					<div className="col__2">
						<img src={aboutImg} alt="" className="about__img" />
					</div>
					<div className="col__2">
						<h1 className="about__heading">
							About Me
						</h1>
						<div className="about__meta">
							<p className="about__text p__color">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum sequi enim sunt tempora aliquid, dignissimos cupiditate necessitatibus delectus deleniti voluptatum vero quo maiores ipsa inventore deserunt? Cumque autem iure unde!
								Enim nemo quae minus, perferendis non quisquam atque harum cumque adipisci, ea sit ducimus dignissimos, neque odio perspiciatis. Iure nesciunt obcaecati quas voluptate velit quibusdam architecto fuga! Consequuntur, vitae. Quibusdam?
								Voluptatem animi autem placeat harum exercitationem omnis excepturi incidunt qui enim sed, illo, molestiae nemo quasi ab nesciunt maxime architecto odit iste possimus alias eaque modi quia! Distinctio, ut quis.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About