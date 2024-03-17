
import '@coreui/coreui/dist/css/coreui.min.css'
import {CCarousel,CCarouselItem} from "@coreui/react"
function Banner() {
  return (
    <div >
         <div className="banner">
                <CCarousel  
                interval={1000}
                controls indicators>
                    <CCarouselItem>
                    <div className="banner-img1">
                <img src="https://heliosjewels.vn/cdn/shop/files/banner-desktop-blood-sun_1728x.jpg?v=1709086013" alt="" />

                </div>
                    </CCarouselItem>
                    <CCarouselItem>
                    <div className="banner-img2">
                    <img src="https://heliosjewels.vn/cdn/shop/files/1950x866_2_1728x.jpg?v=1709603841" alt=""  />
                </div>
                        
                    </CCarouselItem>
                    <CCarouselItem>
                    <div className="banner-img3">
                    <img src="https://heliosjewels.vn/cdn/shop/files/1950X866-min_1728x.jpg?v=1709635307" alt=""  />
                </div>
                      
                    </CCarouselItem>
                </CCarousel>
               
                
               
            </div>
    </div>
  )
}

export default Banner