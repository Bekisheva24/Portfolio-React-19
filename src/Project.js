import React from 'react';
import './Project.css';

function Project() {
	return (
		<div className='project component__space' id="Portfolio">
			<div className="heading">
				<h1 className="heading">My Latest Project
				</h1>
				<p className="heading p__color">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<p className="heading p__color">
					Lorem, ipsum dolor sit amet consectetur.
				</p>
			</div>

			<div className="container">
				<div className="row__3">
					<div className="project__box pointer">
						<div className="project__box__img pointer relative">
							<div className="project__img__box">
								<img src="" alt="" className="project__imj" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project