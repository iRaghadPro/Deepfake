const Navbar = () =>{
    <div>
        <>
  <meta charSet="utf-8" />
  {/* Theme switcher (color modes) */}
  {/* Main Theme Styles + Bootstrap */}
  <link rel="stylesheet" media="screen" href="assets/css/theme.min.css" />
  {/* Page loading styles */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n      .page-loading {\n        background-color: #0b0f19;\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        -webkit-transition: all .4s .2s ease-in-out;\n        transition: all .4s .2s ease-in-out;\n        background-color: #fff;\n        opacity: 0;\n        visibility: hidden;\n        z-index: 9999;\n      }\n      [data-bs-theme="dark"] .page-loading {\n        background-color: #0b0f19;\n      }\n      .page-loading.active {\n        opacity: 1;\n        visibility: visible;\n      }\n      .page-loading-inner {\n        position: absolute;\n        top: 50%;\n        left: 0;\n        width: 100%;\n        text-align: center;\n        -webkit-transform: translateY(-50%);\n        transform: translateY(-50%);\n        -webkit-transition: opacity .2s ease-in-out;\n        transition: opacity .2s ease-in-out;\n        opacity: 0;\n      }\n      .page-loading.active > .page-loading-inner {\n        opacity: 1;\n      }\n      .page-loading-inner > span {\n        display: block;\n        font-size: 1rem;\n        font-weight: normal;\n        color: #9397ad;\n      }\n      [data-bs-theme="dark"] .page-loading-inner > span {\n        color: #fff;\n        opacity: .6;\n      }\n      .page-spinner {\n        display: inline-block;\n        width: 2.75rem;\n        height: 2.75rem;\n        margin-bottom: .75rem;\n        vertical-align: text-bottom;\n        border: .15em solid #b4b7c9;\n        border-right-color: transparent;\n        border-radius: 50%;\n        -webkit-animation: spinner .75s linear infinite;\n        animation: spinner .75s linear infinite;\n      }\n      [data-bs-theme="dark"] .page-spinner {\n        border-color: rgba(255,255,255,.4);\n        border-right-color: transparent;\n      }\n      @-webkit-keyframes spinner {\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n      @keyframes spinner {\n        100% {\n          -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n        }\n      }\n    '
    }}
  />
  {/* Page loading scripts */}
  {/* Navbar */}
  {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page */}
  <header className="header navbar navbar-expand-lg navbar-dark position-absolute navbar-sticky">
    <div className="container px-3">
      <a href="index.html" className="navbar-brand pe-3">
        Silicon
      </a>
      <div id="navbarNav" className="offcanvas offcanvas-end bg-dark">
        <div className="offcanvas-header border-bottom border-light">
          <h5 className="offcanvas-title text-white">Menu</h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="components/typography.html" className="nav-link">
                UI Kit
              </a>
            </li>
            <li className="nav-item">
              <a href="docs/getting-started.html" className="nav-link">
                Docs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</>

    </div>
}

export default Navbar