import React, { Component } from 'react'

import Masonry from 'react-masonry-css'
import M from 'materialize-css'

// import Table from '../parts/Table'
import Card from '../parts/Card'

// Mansory-css-responsive
const breakpointColumnsObj = {
	default: 3,
	1100: 3,
	700: 2,
	500: 1
};

export default class Kalender extends Component {
    componentDidMount() {
        var elems = document.querySelectorAll('.tabs');
        M.Tabs.init(elems, {});
    }
    render() {
        return (
            <div className="container">
                <h4>Agenda Hari Besar Adiwiyata</h4>
				<blockquote style={{ borderLeft: '5px solid #039688' }}> 
                    AGENDA HARI - HARI BESAR KEMENTERIAN LINGKUNGAN HUDUP DAN KEHUTANAN
                </blockquote>
                <div class="row">
                    <div class="col s12">
                        <ul class="tabs">
                            <li class="tab col s3"><a class="active" href="#Card">Card</a></li>
                            <li class="tab col s3"><a href="#Table">Table</a></li>
                        </ul>
                    </div>
                    <div id="Card" class="col s12">
                        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid mt40 mb40" columnClassName="my-masonry-grid_column">
                            <Card src="https://pbs.twimg.com/media/DTKS0qwU0AA_r_m.jpg" title="10 JANUARI">
                                Hari Perencanaan Gerakan 1 Juta Pohon
                            </Card>
                            <Card src="https://himasita.lk.ipb.ac.id/files/2018/02/AFD13A72-1D89-4F54-9204-B872ADD85C69.jpeg" title="2 FEBRUARI">
                                Hari lahan basah Se Dunia
                            </Card>
                            <Card src="https://jurnalposmedia.com/wp-content/uploads/2018/02/210218-HARI-PEDULI-SAMPAH.png" title="21 FEBRUARI">
                                Hari Peduli Sampah nasional
                            </Card>
                            <Card src="https://pbs.twimg.com/media/ESezZaZUUAAdpln.jpg" title="6 MARET">
                                Hari Strategi konservasi Se Dunia
                            </Card>
                            <Card src="https://updatekareba.com/wp-content/uploads/2019/03/FB_IMG_1552735046319.jpg" title="16 MARET">
                                Hari Bhakti Rimbawan
                            </Card>
                            <Card src="https://www.prestisa.com/wp-content/uploads/2019/03/harihutan-01-1024x1024.jpg" title="20 MARET">
                                Hari Kehutanan Sedunia
                            </Card>
                            <Card src="https://himasper.lk.ipb.ac.id/files/2017/03/hari-hutan-sedunia.png" title="21 MARET">
                                Hari Hutan Internasional
                            </Card>
                            <Card src="https://www.hidupkatolik.com/wp-content/uploads/2019/03/Hari-Air-Sedunia.jpg" title="22 MARET">
                                Hari Air Se Dunia
                            </Card>
                            <Card src="https://bpbd.temanggungkab.go.id/assets/img/img_andalan/54524155_982554448581871_7998078692632821760_n.jpg" title="23 MARET">
                                Hari Meteorolgi
                            </Card>
                            <Card src="https://assets-a1.kompasiana.com/statics/files/2014/04/1398164874671384389.jpg?t=o&v=800" title="22 APRIL">
                                Hari Bumi
                            </Card>
                            <Card src="https://semarangkota.go.id/packages/upload/photo/2019-05-22/WhatsApp-Image-2019-05-22-at-09.40.36.jpeg" title="21 MEI">
                                Hari Keanekaragaman Hayati
                            </Card>
                        </Masonry>
                    </div>
                    <div id="Table" class="col s12">

                            <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                                    <div class="col s2">
                                    <img src="https://pbs.twimg.com/media/DTKS0qwU0AA_r_m.jpg" alt="" class="responsive-img" />
                                    </div>
                                    <div class="col s10">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                                    <div class="col s2">
                                    <img src="https://himasita.lk.ipb.ac.id/files/2018/02/AFD13A72-1D89-4F54-9204-B872ADD85C69.jpeg" alt="" class="responsive-img" />
                                    </div>
                                    <div class="col s10">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                                    <div class="col s2">
                                    <img src="https://jurnalposmedia.com/wp-content/uploads/2018/02/210218-HARI-PEDULI-SAMPAH.png" alt="" class="responsive-img" />
                                    </div>
                                    <div class="col s10">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                                    <div class="col s2">
                                    <img src="https://jurnalposmedia.com/wp-content/uploads/2018/02/210218-HARI-PEDULI-SAMPAH.png" alt="" class="responsive-img" />
                                    </div>
                                    <div class="col s10">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-panel grey lighten-5 z-depth-1">
                                <div class="row valign-wrapper">
                                    <div class="col s2">
                                    <img src="https://jurnalposmedia.com/wp-content/uploads/2018/02/210218-HARI-PEDULI-SAMPAH.png" alt="" class="responsive-img" />
                                    </div>
                                    <div class="col s10">
                                    <span class="black-text">
                                        This is a square image. Add the "circle" class to it to make it appear circular.
                                    </span>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
			</div>
        )
    }
}
