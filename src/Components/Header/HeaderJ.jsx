import React from 'react'
import './HeaderC.css';   //CSSファイルをインポート 
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrapのインポートn

const Header = () => {
  return (
    <header className="fixed-top">
      <div className="d-flex justify-content-center">
        <img src={'https://kinmokusei.tech/images/logo.jpg'}
          alt=""
          className="icon-image mx-3 my-1"
        />
        <p>ヘッダーです</p>

      </div>
    </header>
  )
}

export default Header