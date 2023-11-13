import React from 'react'

const  Newsitem=(props)=> {

  
    let {title,desc,urlimg,author,dat,source}=props;
    return (
      <div ><div className="card mb-2 mx-auto" style={{width: "13rem"}}>
      <img style={{height:"120px"}} src={urlimg} className="card-img-top" alt="..."/>
      <div className="card-body" >
        <h6 style={{fontSize:"0.8rem"}} className="card-title">{title}<span style={{zIndex:1}} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
  </span></h6>
        <p style={{fontSize:"0.8rem"}} className="card-text">{desc}</p>
        <p style={{fontSize:"0.8rem"}} className="card-text"><small className="text-body-secondary">By {author} at {new Date(dat).toLocaleDateString()}</small></p>
        <a  style={{fontSize:"0.8rem"}} href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div></div>
    )
  
}

export default Newsitem