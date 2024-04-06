
import useScrollStore from "../../zustand/scrollStore";
import Button from "../custome/Button";



function TopCollection() {
    const {  isSticky } = useScrollStore();
    

  return (
    <>
    
     <div  className={`${isSticky?"hide":""}`} style={{marginTop:"200px"}}>
    
        <div className={`top-collection`} >
      
            <div className="top-collection_item">
                <img loading="lazy" alt="" src="https://heliosjewels.vn/cdn/shop/files/2_1_720x.webp?v=1710132774" />
           
                <h1>THUANTHIEN COLLECTION</h1>
                <Button name="View Collection" link="/"></Button>
            </div>
            <div className="top-collection_item">
            <img loading="lazy" src="https://heliosjewels.vn/cdn/shop/files/2x2_1_720x.webp?v=1710132887" alt="" />
                <h1>ANGELOS COLLECTION</h1>
                <Button name="View Collection" link="/"></Button>
                </div>
                
        </div>
    </div>
    </>
   
  )
}

export default TopCollection