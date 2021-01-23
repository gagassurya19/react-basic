import React, { useEffect } from 'react'

import 'materialize-css/dist/css/materialize.min.css'
import '../assets/css/style.css'
import M from 'materialize-css'

const Card = (props) => {
    useEffect(() => {
        var elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {

        });
    }, [])
    return(
        <div class="card border hoverable">
            <div class="card-image border">
                <img className="materialboxed border"  data-caption={props.title + ", " + props.children} src={props.src} alt={props.title}/>
                <span class="card-title truncate activator text-shadow">{props.title}</span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
                <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Card
