import React from 'react'

const NewsItem =(props)=> {

  
 
    let {title,description,imageUrl,newsUrl,author,publishedAt}=props;
    return (
        <>
      <div className='my-3'>
        <div className="card" >
  <img src={!imageUrl?"https://bl-i.thgim.com/public/incoming/mhdeht/article67232325.ece/alternates/LANDSCAPE_1200/Stock%20Market%20Live%20Today%20-%20Share%20Market.jpg":imageUrl} class="img-fluid rounded-start" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By <strong>{author}</strong>Last updated <strong>{new Date(publishedAt).toGMTString()}</strong> </small></p>
    <a rel="noreferrer"href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
  </div>
  
</div>
      </div>
     
      </>
    )
    
  
}

export default NewsItem
