import React from 'react'
import styles from "../../assets/styleProduct.module.scss"
 interface Content{
    image:string,
    title:string,
    content:String,
 }
function BannerProduct(props:Content) {
  return (
    <div>
       <div className={styles.banner}>
            <img src={props.image} alt="" />
            <div className={styles.content}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
       </div>
       
    </div>
  )
}

export default BannerProduct