import React from 'react'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <center>
                    <p className='text-muted credit'>copyright @ React JS Study</p>
                </center>
            </div>
            <div className='col-sm-4' style={{textAlign:"right"}}></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
