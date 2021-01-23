import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from '../src/scenes/Beranda'
import Gallery from '../src/scenes/Gallery'
import Kalender from '../src/scenes/Kalender'
import ReactList from '../src/scenes/ReactList'

const Router = () => (
    <Switch>
        <Route exact path = "/" component = { Beranda } />
        <Route path = "/gallery" component = { Gallery } />
        <Route path = "/kalender" component = { Kalender } />
        <Route path = "/album" component = { ReactList } />
    </Switch>
)

export default Router
