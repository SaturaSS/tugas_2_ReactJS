import React, { Component } from 'react';

class ListMenuUtama extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>Selamat Datang Di Warung Nusantara</h1>
          <img src={this.props.linkGambar} alt="Masakan Nusantara" width="600"/>
        </center>
      </div>
    );
  }
}
export default ListMenuUtama;
