import React from "react"

const CardList = (props) => {
    return (
        <div class="col s12 m12 l6 xl4">
            <div class="card horizontal">
                <div class="card-image">
                <img src={ props.cover }/>
                </div>
                <div class="card-stacked">
                <div class="card-content">
                    <span class="card-title">{ props.judul }</span>
                    <p>Penulis: { props.penulis }</p>
                    <p>Penerbit: { props.penerbit }</p>
                    <p>Harga: Rp { props.harga }</p>
                </div>
                <div class="card-action">
                    <div class="right-align">
                        <a class="waves-effect waves-light btn-small" onClick={ props.onEdit }><i class="material-icons">edit</i></a>
                        <a class="waves-effect waves-light btn-small red" onClick={ props.onDrop }><i class="material-icons">delete</i></a>
                        <a class="waves-effect waves-light btn-small" onClick={ props.onCart }>Add</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default CardList;

