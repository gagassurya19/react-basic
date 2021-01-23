import React, { Component } from 'react'

import Masonry from 'react-masonry-css'

import Card from '../parts/Card'
import Carousel from '../parts/Carousel'

// Mansory-css-responsive
const breakpointColumnsObj = {
	default: 4,
	1100: 3,
	700: 2,
	500: 1
};

export default class Gallery extends Component {
	render() {
		return (
			<div className="container">
				<h4>Slider</h4>
				<blockquote style={{ borderLeft: '5px solid #039688' }} > This is an example quotation that uses the blockquote tag. </blockquote>
				<Carousel />
				<h4>Card</h4>
				<blockquote style={{ borderLeft: '5px solid #039688' }}> This is an example quotation that uses the blockquote tag. </blockquote>
				<Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid mt40 mb40" columnClassName="my-masonry-grid_column">
					<Card src="/img/a.jpg" title="Go Green">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/b.jpg" title="Go Green">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/c.jpg" title="Turn Off the Light">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/d.jpg" title="Adiwiyata">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/e.jpg" title="Dow what you can">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/a.jpg" title="Go Green">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/b.jpg" title="Go Green">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/c.jpg" title="Turn Off the Light">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="img/d.jpg" title="Adiwiyata">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
					<Card src="https://i1.wp.com/quipperhome.wpcomstaging.com/wp-content/uploads/2019/11/Apa-Itu-Sekolah-Adiwiyata-dan-Bagaimana-Caranya-1.png" title="Do what you can">
						Ea et officia nulla aliqua ullamco incididunt esse do consequat cillum irure incididunt in. Amet magna exercitation enim nisi nisi duis et sit cupidatat cupidatat. Proident esse irure adipisicing dolor culpa laborum reprehenderit esse reprehenderit culpa. Mollit dolor ullamco cillum Lorem culpa.
                </Card>
				</Masonry>
			</div>
		)
	}
}
