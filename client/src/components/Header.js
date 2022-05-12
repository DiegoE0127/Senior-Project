import './Header.css'

function Header() {
  return (
    <div className="header">
      <img className="logo" src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" width="40px" height="40px" alt="test" />
      <div className="header__text">Drove</div>
      <div className="credits__container">
        <div className="credits__text">
          Created by Diego Escobar
        </div>
      </div>
    </div>
  )
}

export default Header;