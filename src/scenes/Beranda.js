import React, { Component } from 'react'

import Media from '../parts/Media'
import Gallery from '../scenes/Gallery'

export default class Beranda extends Component {
    render() {
        return (
            <div>
                <Media/>
                <Gallery/>
            </div>
        )
    }
}
