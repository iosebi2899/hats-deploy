import React , {useState} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Categorie from './Categorie'
import instaLogo from "./../images/instaicon.png"
import emailLogo from "./../images/emailicon.png"
import premiumLeatherHat from './../items/hats/img/premium-leather-khaki.jpg'

const categories = [
    {id:1, route:"Hats", name:"ქუდები", imgSrc:premiumLeatherHat,instore:true},
    {id:2, name:"მალე სხვა კატეგორიებიც", instore:false },
]

export const Categories = () => {
    
    return (
        <>
            <div id="categories" className="relative categories">
                <div className="categories-left">
                    {categories.map((e, index)=>{
                        if(e.instore){
                            return (
                                <Categorie key={index} route={e.route} imgSrc={e.imgSrc} alt="Categories item" pName={e.name} />
                            )
                        }else{
                            return(
                                <div key ={index} className="items noSelect">
                                    <p style={{cursor:"default", margin:0}}>{e.name}</p>
                                </div>
                            )
                        }
                    })}
                </div>
                
                <div className="title">პროდუქცია</div>
            </div>
        </>
    )
}

export const About = () =>{
    return(
        <div id="about" className="relative about">
            <div className="title">ჩვენ შესახებ</div>
            <p><span className="med">Hats.ge</span> არის ონლაინ სივრცე, სადაც შეძლებთ ქუდების დათვალიერებასა და შეძენას.  ყველაზე ტრენდული და ახალი მოდელები. საქმიანობა ჯერ მხოლოდ სექტემბრიდან დავიწყეთ, თუმცა ელვის სისწრაფით ვვითარდებით. გვსურს მაქსიმალურად გაგიმარტივოთ ქუდის შერჩევის. მომხმარებელის ინტერესის მაქსიმალურად გათვალისწინებამ მოგვცა ის შედეგი, რაც დღეს გვაქვს.</p>
        </div>
    )
}
export const FooterImg = () =>{
    return(
        <div className="footerImg">
            <img src="https://i.imgur.com/ka6NpFj.png" alt="bottom"></img>
        </div>
    )
}
export const Contact = () => {
    
    return (
        <div id="categories" className="relative contact">
            <div className="contact-left">
                კონტაქტი
            </div>
            <div className="contact-right">
                <div className="mainLogo noSelect"><img src={emailLogo} alt="logo" /><p>ceohats.ge@gmail.com</p></div>
                <a className="mainLogo noSelect" href="https://www.instagram.com/hats.ge/" target="_blank" rel="noreferrer"><img src={instaLogo} alt="logo" /><p>Hats.ge on Instagram</p></a>
            </div>
        </div>
    )
}
