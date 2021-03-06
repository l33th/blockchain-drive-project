import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment';
import lds from '../img/title/l33thDS.png';
import wm from '../img/title/wmouton.png'

class Main extends Component {
  render() {
    return (
      <div className='container-fluid mt-5 text-center'>
        <div className='row'>
          <main
            role='main'
            className='col-lg-12 ml-auto mr-auto'
            style={{ maxWidth: '1024px' }}
          >
            <div className='content'>
              <p>&nbsp;</p>
              <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                {/* <h1>L33th Decentralized Storage</h1> */}
                <div><img style={{width: '520px'}} src={lds} alt="" /></div>
                <div><img style={{width: '220px'}} src={wm} alt="" /></div>
                {/* <h6 style={{ textAlign: 'center' }}>by WMouton</h6> */}
              </div>
              <div>
                <p>
                  Note: This is a desktop application, the table is not yet
                  mobile frendly.
                </p>
                <h4>What you will need to properly use this application:</h4>
                <ul>
                  <li>
                      You will need the MetaMask extension to connect to the
                      blockchain.
                  </li>
                  <li>
                      You must have Ganache installed and connect it to
                      metamask.
                  </li>
                </ul>
                <p>
                  For a full guide see{' '}
                  <a href='https://www.linkedin.com/pulse/using-ganache-ethereum-emulator-metamask-farhan-khan'>
                    Using Ganache Ethereum Emulator with MetaMask
                  </a>
                  .
                </p>
              </div>
              <div
                className='card mb-3 mx-auto bg-dark'
                style={{ maxWidth: '512px' }}
              >
                <div style={{ marginTop: '15px' }}>
                  <h2 className='text-white text-monospace bg-dark'>
                    <b>
                      <ins>Share File</ins>
                    </b>
                  </h2>
                </div>
                <form
                  onSubmit={event => {
                    event.preventDefault();
                    const description = this.fileDescription.value;
                    this.props.uploadFile(description);
                  }}
                >
                  <div className='form-group'>
                    <br></br>
                    <input
                      id='fileDescription'
                      type='text'
                      ref={input => {
                        this.fileDescription = input;
                      }}
                      className='form-control text-monospace'
                      placeholder='description...'
                      required
                    />
                  </div>
                  <input
                    type='file'
                    onChange={this.props.captureFile}
                    className='text-white text-monospace'
                  />
                  <div style={{ marginTop: '15px' }}>
                    <button type='submit' className='btn-primary btn-block'>
                      <b>Upload!</b>
                    </button>
                  </div>
                </form>
              </div>

              <p>&nbsp;</p>
              {/* Create Table*/}

              <table
                className='table-sm table-bordered text-monospace'
                style={{ width: '1000px', maxHeight: '450px' }}
              >
                <thead style={{ fontSize: '15px' }}>
                  <tr className='bg-dark text-white'>
                    <th scope='col' style={{ width: '10px' }}>
                      id
                    </th>
                    <th scope='col' style={{ width: '200px' }}>
                      name
                    </th>
                    <th scope='col' style={{ width: '230px' }}>
                      description
                    </th>
                    <th scope='col' style={{ width: '120px' }}>
                      type
                    </th>
                    <th scope='col' style={{ width: '90px' }}>
                      size
                    </th>
                    <th scope='col' style={{ width: '90px' }}>
                      date
                    </th>
                    <th scope='col' style={{ width: '120px' }}>
                      uploader/view
                    </th>
                    <th scope='col' style={{ width: '120px' }}>
                      hash/view/get
                    </th>
                  </tr>
                </thead>
                {this.props.files.map((file, key) => {
                  return (
                    <thead style={{ fontSize: '12px' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>
                          {moment
                            .unix(file.uploadTime)
                            .format('h:mm:ss A M/D/Y')}
                        </td>
                        <td>
                          <a
                            href={
                              'https://etherscan.io/address/' + file.uploader
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {file.uploader.substring(0, 10)}...
                          </a>
                        </td>
                        <td>
                          <a
                            href={
                              'https://ipfs.infura.io/ipfs/' + file.fileHash
                            }
                            rel='noopener noreferrer'
                            target='_blank'
                          >
                            {file.fileHash.substring(0, 10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  );
                })}
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;
