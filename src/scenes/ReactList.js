import React, { Component } from 'react';
import Card from '../parts/CardList'
import * as $ from "jquery";
import M from 'materialize-css'

class Album extends Component{

    // fungsi yang dijalankan setelah halaman tereksekusi
    // fungsi yang dijalankan setelah fungsi render
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
          });

          this.setUser()
    }

    Add = () => {
        // menampilkan komponen modal
        const elem = document.getElementById('modal_buku');
        const instance = M.Modal.init(elem);
        instance.open();
        this.setState({
            isbn: Math.random(1,10000000),
            judul: "",
            penulis: "",
            penerbit: "",
            cover: "",
            harga: 0,
            action: "insert"
        })
    }

    Edit = (item) => {
        // menampilkan komponen modal
        const elem = document.getElementById('modal_buku');
        const instance = M.Modal.init(elem);
        instance.open();
        this.setState({
            isbn: item.isbn,
            judul: item.judul,
            penulis: item.penulis,
            penerbit: item.penerbit,
            cover: item.cover,
            harga: item.harga,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempBuku = this.state.buku

        if (this.state.action === "insert") {
            // menambah data baru
            tempBuku.push({
                isbn: this.state.isbn,
                judul: this.state.judul,
                penulis: this.state.penulis,
                penerbit: this.state.penerbit,
                cover: this.state.cover,
                harga: this.state.harga,
            })
        }else if(this.state.action === "update"){
            // menyimpan perubahan data
            let index = tempBuku.indexOf(this.state.selectedItem)
            tempBuku[index].isbn = this.state.isbn
            tempBuku[index].judul = this.state.judul
            tempBuku[index].penulis = this.state.penulis
            tempBuku[index].penerbit = this.state.penerbit
            tempBuku[index].cover = this.state.cover
            tempBuku[index].harga = this.state.harga
        }

        this.setState({buku : tempBuku})
        
        // menutup komponen modal_buku
        const elem = document.getElementById('modal_buku');
        const instance = M.Modal.init(elem);
        instance.close();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempBuku = this.state.buku

            console.log(item)
            console.log(tempBuku)
            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)

            console.log(index)
            // hapus data
            tempBuku.splice(index, 1)

            this.setState({buku: tempBuku})
        }
    }
    
    setUser = () => {
        // check keberadaan session storage
        if(localStorage.getItem("user") === null){
            // kondisi jika session storage "user" BELUM dibuat
            let prompt = window.prompt("Masukkan nama anda:","")
            if(prompt === null || prompt === ""){
                // jika user tidak mengisi nama
                this.setUser()
            }else{
                // jika user mengisi nama
                // simpan nama user ke session storage
                localStorage.setItem("user", prompt)

                // simpan nama user ke state.user
                this.setState({ user: prompt })
            }
        }else{
            // kondisi jika session storage "user" TELAH dibuat
            // akses nilai dari session storage "user"
            let name = localStorage.getItem("user")
            this.setState({ user: name })
        }
    }

    rmUser = () =>{
        localStorage.removeItem("user")
        this.setUser()
    }

    addToCart = (selectedItem) => {
        // variable untuk menampung cart sementara
        let tempCart = [] // array kosong

        // cek keberadaan data cart pada local storage
        if(localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
            // JSON.parse() digunakan untuk mengkonversi dari string ke array object
        }

        // cek data yang dipilih user ke keranjang belanja
        let existItem = tempCart.find(item => item.isbn === selectedItem.isbn)

        // cek hasil
        if(existItem){
            // jika item yang dipilih ada dikeranjang
            window.alert("Item telah dikeranjang")
        }else{
            // user diminta memasukkan jumlah item yang dibeli
            let promptJumlah = window.prompt("Masukkan jumlah item:", "")
             if (promptJumlah !== null && promptJumlah !== ""){
                //  jika user memasukkan jumlah item yang dibeli

                // menambah property jumlahBeli pada item yang dipilih
                selectedItem.jumlahBeli = promptJumlah

                // masukkan item yang dipilih kedalam cart
                tempCart.push(selectedItem)

                // simpan array tempCart ke local storage
                localStorage.setItem("cart", JSON.stringify(tempCart))
             }
        }
    }

    constructor(){
        super()
        this.state = {
            buku: [
                {
                    isbn:"12345", judul:"Bulan", penulis:"Tere Liye",
                    penerbit:"CV Harapan Kita", harga: 90000,
                    cover:"https://drive.google.com/uc?id=1ui-jyKgu3DqFyo7VKJu-FFXkaNQN3aSg"
                },
                {
                    isbn:"12346", judul:"Anak Badai", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 80000,
                    cover:"https://drive.google.com/uc?id=1rJDcCOmsd14NL6DG3Wps_kewZomGcLU-"
                },
                {
                    isbn:"54321", judul:"Bumi", penulis:"Tere Liye",
                    penerbit:"CV Nusa Bangsa", harga: 70000,
                    cover:"https://drive.google.com/uc?id=1e-thvq7lkG1_gw0FqHzRoiAhfhdgpOUj"
                }
            ],

            action: "",
            isbn: "",
            judul: "",
            penulis: "",
            penerbit: "",
            harga: 0,
            cover: "",
            selectedItem: null,
            user: ""
        }   
    }

    render(){
        return(
            <div className="container">
                <blockquote>Nama User : <a href="#!" onClick={() => this.rmUser()}>{ this.state.user }</a></blockquote>
                <div className="row">
                    { this.state.buku.map( (item, index) => (
                        <Card
                        judul={item.judul}
                        penulis={item.penulis}
                        penerbit={item.penerbit}
                        harga={item.harga}
                        cover={item.cover}
                        onEdit={ () => this.Edit(item) }
                        onDrop={ () => this.Drop(item) }
                        onCart={ () => this.addToCart(item) } 
                        />
                    )) }
                </div>

                {/* Modal Trigger */}
                <a href="#" className="btn right" onClick={() => this.Add()}>
                    Tambah Data
                </a>

                {/* <!-- Modal Structure --> */}
                <div id="modal_buku" class="modal modal-fixed-footer">
                    <div class="modal-content">
                        <h4>Form Buku</h4>
                        <p>A bunch of text</p>

                        <form onSubmit={ev => this.Save(ev)}>
                            Judul Buku
                            <input type="text" className="form-control mb-2"
                            value={this.state.judul}
                            onChange={ ev => this.setState({judul: ev.target.value}) }
                            required />
                            
                            Penulis Buku
                            <input type="text" className="form-control mb-2"
                            value={this.state.penulis}
                            onChange={ ev => this.setState({penulis: ev.target.value}) }
                            required />
                            
                            Penerbit Buku
                            <input type="text" className="form-control mb-2"
                            value={this.state.penerbit}
                            onChange={ ev => this.setState({penerbit: ev.target.value}) }
                            required />
                            
                            Harga Buku
                            <input type="number" className="form-control mb-2"
                            value={this.state.harga}
                            onChange={ ev => this.setState({harga: ev.target.value}) }
                            required />
                            
                            Cover Buku
                            <input type="url" className="form-control mb-2"
                            value={this.state.cover}
                            onChange={ ev => this.setState({cover: ev.target.value}) }
                            required />

                            <button className="btn btn-info btn-block" type="submit">
                                Simpan
                            </button>
                        </form>

                    </div>
                    <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CLOSE</a>
                    </div>
                </div>
            </div>

        );
    }
}
export default Album;