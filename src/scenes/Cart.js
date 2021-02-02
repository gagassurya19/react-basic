import React from "react"

export default class Cart extends React.Component{
    constructor(){
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data user
            total: 0 // untuk menyimpan data total belanja
        }
    }

    initCart = (item) => {
        // memanggil data cart pada localstorage
        let tempCart = JSON.parse(localStorage.getItem("cart"))

        // memanggil data user pada localstorage
        let userName = localStorage.getItem("user")
        this.setState({
            user: userName
        })

        // kalkulasi total harga
        let totalHarga = 0;
        if(tempCart !== null && tempCart !== ""){
            tempCart.map(item => {
                totalHarga += (item.jumlahBeli * item.harga)
            })

            // memasukkam data cart, user dan totalHarga pada state
            this.setState({
                cart: tempCart,
                total: totalHarga
            })
        }
    }

    componentDidMount(){
        this.initCart()
    }

    DropAll = () => {
        localStorage.removeItem("cart")
        this.initCart()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempBuku = this.state.cart

            // posisi index data yg akan dihapus
            let index = tempBuku.indexOf(item)

            // pilih index data yang akan dihapus
            tempBuku.splice(index, 1)

            // ganti data lama ke yang baru
            
            // Don't use removeItem() that as the name says removes the whole item from localStorage. 
            // Just do another setItem() to overwrite the old data.

            localStorage.setItem('cart',JSON.stringify(tempBuku));
            this.setState({buku: tempBuku})
            
            // refresh page
            this.initCart()
        }
    }

    ubahJumlah = (item) => {
        let tempBuku = this.state.cart

        let promptJumlah = window.prompt("Masukkan jumlah item:", item.jumlahBeli)

        item.jumlahBeli = promptJumlah
        
        // ganti data lama ke yang baru
        // Don't use removeItem() that as the name says removes the whole item from localStorage. 
        // Just do another setItem() to overwrite the old data.
        localStorage.setItem('cart',JSON.stringify(tempBuku));
        
        // refresh page
        this.initCart()
    }

    render(){
        return(
            <div className="container">
                <blockquote>Nama User : { this.state.user }</blockquote>
                <table class="highlight responsive-table">
                    <thead>
                        <tr>
                            <th>Nama Item</th>
                            <th>Harga</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Option</th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.state.cart.map( (item, index) => (
                            <tr key={ index }>
                                <td>{ item.judul }</td>
                                <td>Rp { item.harga }</td>
                                <td>
                                    <input value={ item.jumlahBeli } onClick={ () => this.ubahJumlah(item) }></input>
                                </td>
                                <td>Rp { item.jumlahBeli * item.harga }</td>
                                <td>
                                    <a class="waves-effect waves-light btn-small red" onClick={ this.item = () => this.Drop(item) }><i class="material-icons">delete</i></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>Total Harga : Rp { this.state.total }</h4>
                <a class="waves-effect waves-light btn-small red right" onClick={ () => this.DropAll() }>Delete All</a>
            </div>
        )
    }
}