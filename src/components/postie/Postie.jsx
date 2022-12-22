import "./postie.css"

export default function Postie() {
  return (
     <div className ="postie">

        <img 
          className ="postImage" 
          src = " https://www.investopedia.com/thmb/NhnAQzNqF2HrcKDmNZprh3JCk04=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/economics-source-b80e91b606bd4729815840bad4ff3ecd.png" 
          alt =""
            
          />
          <div className = "postInfo">
            <div className = "postCats">Financial Kits
              <span className="postCat">Financial Statement</span>
              <span className="postCat">Financial Statement</span>
              
            </div>
            <span className = "postTitle">
            Investors today are looking to put their money in </span>
            <hr/>
            <span className = "postDate">2 hrs ago</span>
          </div>
          <p className = "postDesc">Mango plants are distributed around the world, it is one of
           the most exploited fruits for food, juice, flavour, and fragrance.
           Mango is a very delicious fruit you will always want to eat.
           it contains some of the most important nutrition 
           people need in their daily life. Mango belongs to 
           the genus Mangifera and it belongs to the plant family Anacardiaceae.
           
           </p>
          
    </div>     
  
    
  )
}
