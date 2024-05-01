import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

function Navbar() {
  return (

    
    <nav class="navbar navbar-expand-lg shadow " >
        <div class="container-fluid ">
            <Link to="/" class="navbar-brand ms-5" >شيـــــــــك</Link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link to="/" class="nav-link active mx-4 ">الرئيسيـــــــــة</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/news" class="nav-link active mx-4">نشرة شيـــــــــك </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link active mx-4">من نـــــــــحن</Link>
                    </li>
                </ul>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end me-5">
                    <button class="btn btn-outline-primary btn-sm" type="button">تسجيل دخول</button>
                    <button class="btn btn-primary btn-sm" type="button">إنشاء حساب</button>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar;