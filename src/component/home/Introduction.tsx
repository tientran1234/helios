import { useEffect, useRef } from "react";
import { CCarousel, CCarouselItem } from "@coreui/react";
import { FaStar } from "react-icons/fa";
import { CButton } from "@coreui/react";
import useScrollStore from "../../zustand/scrollStore";
import { throttle } from "lodash";

function Introduction() {
  const introductionContentRef = useRef<HTMLDivElement>(null);
  const { handleScroll, isSticky } = useScrollStore();

  useEffect(() => {
    const throttledScrollHandler = throttle(() => handleScroll(), 10); 
    window.addEventListener("scroll", throttledScrollHandler);
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, [handleScroll]);

  return (
    <div >
      <div className="introduction">
      <h1>SẢN PHẨM NỔI BẬT</h1>
        <div  className={`introduction-img ${isSticky ? "sticky" : ""}`}>
          <CCarousel
            // interval={}
            controls >
            <CCarouselItem>
              <div className="introduction-img_item">
                <img  src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_1_720x.jpg?v=1710296828" alt="" />
                <img  src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_2_720x.jpg?v=1710296827" alt="" />
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="introduction-img_item">
                <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_3_720x.jpg?v=1710241827" alt="" />
                <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_4_720x.jpg?v=1710296827" alt="" />
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="introduction-img_item">
                <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_5_720x.jpg?v=1710296827" alt="" />
                <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_6_720x.jpg?v=1710296827" alt="" />
              </div>
            </CCarouselItem>
            <CCarouselItem>
              <div className="introduction-img_item">
                <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/nhan-bac-s925-adbaddon-helios-silver-original_7_720x.jpg?v=1710296828" alt="" />
                <video  controls>
                  <source  src="https://cdn.shopify.com/videos/c/vp/acbd7eb38f9e4e56937341e22fa025a1/acbd7eb38f9e4e56937341e22fa025a1.HD-1080p-7.2Mbps-25762544.mp4" type="video/mp4" />
                </video>
              </div>
            </CCarouselItem>
          </CCarousel>
        </div>
        <div className="introduction-content"   ref={introductionContentRef}
          >
          <h1>
            Nhẫn Bạc S925 Abaddon Helios Silver Original
          </h1>
          <p>
            925.000₫
          </p>
          <div className="introduction-content_icon">
            <FaStar style={{color:"yellow"}}></FaStar>
            <FaStar style={{color:"yellow"}}></FaStar>
            <FaStar style={{color:"yellow"}}></FaStar>
            <FaStar style={{color:"yellow"}}></FaStar>
            <FaStar style={{color:"yellow"}}></FaStar>
          </div>
          <p>Cỡ</p>
          <div className="introduction-content_size">
            <p>Size 6</p>
            <p>Size 7</p>
            <p>Size 8</p>
            <p>Size 9</p>
            <p>Size 10</p>
            <p>Size 11</p>
            <p>Size 12 (Pre-order)</p>
          </div>
          <div className="introduction-content_buy">
            <CButton color="danger" >
              Thêm Vào Giỏ Hàng

            </CButton>
            <p>Tên sản phẩm: Nhẫn bạc S925 Abaddon Helios Silver Original</p>
            <p>Chất liệu: Bạc S925</p>
            <p>Loại đá sử dụng: Không</p>
            <p>Thương hiệu: HELIOS</p>
            <p>Bảo hành: Theo chính sách bảo hành và nhận đánh sáng sản phẩm trọn đời</p>
            <p>
              Câu chuyện từ nhà thiết kế: Abaddon lấy cảm hứng từ quái vật Megalodon, một loài cá mập lớn nhất từng tồn tại, thống trị đại dương cách đây 23 triệu năm trước.
              </p>
              <p>
              Chế tác được thiết kế từ dáng nhẫn signet với mặt nhẫn táo bạo hình bullet, nổi bật hình cá mập khắc nổi khối.
              </p>
             
             <p>

              Họa tiết sóng xi đen bao quanh cả mặt ngoài lẫn mặt trong của chiếc nhẫn, tạo nên chiều sâu thu hút mọi ánh nhìn.
            </p>
          </div>
        </div>


      </div>




    </div>
  );
}

export default Introduction;
