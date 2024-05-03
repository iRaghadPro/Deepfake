import React from 'react';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import './main.css';


// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);


function Main() {
  return (
    <div>


      <section id='content' class="overflow-hidden pt-2 pt-md-4 pt-lg-5">
      <div class="col-md-5 order-md-1">
              <h1 class="display-4 mb-ms-4">تحقق من الفيديوهات</h1>
              <h1 class="display-4 mb-ms-4">بشكل أسهل</h1>

              <p class="fs-xl pb-2 pt-2 mb-4 mt-4 mb-xl-5" style={{width:'450px'}}>طور شيك ليحد من انتشار فيديوهات التزييف العميق</p>
              <div class="position-relative d-md-none d-lg-block mb-4" style={{width: '416px'}}>
                
              </div>
              
              
            </div>
       

      </section>


     
      <section id='section' class="container pt-1 py-sm-2 py-md-4 py-lg-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 py-5 mb-2 mb-sm-3">

          <div class="col pt-2 pt-md-0">
            <div class="text-center px-xl-4">
              <lord-icon
                  src="https://cdn.lordicon.com/ixugolht.json"
                  trigger="hover"
                  state="hover-speed"
                  colors="primary:#25ae7a,secondary:#084b82"
                  style={{width:'100px',height:'100px'}}>
              </lord-icon>
              <h3 class="h4 mb-2 text-light">سرعـــة</h3>
              <p class="fs-lg mb-0">Integer laoreet aliquam mi, est at vitae, egestas. Nisl proin ipsum dui, sagittis mauris vel arcu lacinia massa.</p>
            </div>
          </div>

          <div class="col pt-2 pt-md-0">
            <div class="text-center px-xl-4">
              <lord-icon
                  src="https://cdn.lordicon.com/cwcwweei.json"
                  trigger="hover"
                  colors="primary:#084b82,secondary:#25ae7a"
                  style={{width:'100px',height:'100px'}}>
              </lord-icon>
              <h3 class="h4 mb-2">Quality &amp; style</h3>
              <p class="fs-lg mb-0">Nunc aliquam arcu pretium mauris nibh quisque quis. Urna purus fringilla iaculis turpis libero mattis commodo.</p>
            </div>
          </div>

          <div class="col pt-2 pt-md-0">
            <div class="text-center px-xl-4">
              <lord-icon
                src="https://cdn.lordicon.com/rqdzxkkr.json"
                trigger="hover"
                colors="primary:#084b82,secondary:#25ae7a"
                style={{width:'100px',height:'100px'}}>
              </lord-icon>
              <h3 class="h4 mb-2">Cities made for living</h3>
              <p class="fs-lg mb-0">Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh diam volutpat posuere venenatis.</p>
            </div>
          </div>
        </div>
      </section>
     
    </div>



  )
}

export default Main;