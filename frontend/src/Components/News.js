import React, {  useState,useEffect } from 'react'
import Newsitem from "./Newsitem"
import Spinner from './Spinner';
import PropTypes from "prop-types";
import noimg from "./noimg.jfif";
import InfiniteScroll from 'react-infinite-scroll-component';
const News=(props)=> {
 
  const [articles,setArticles]=useState([]);
  const [loader,setLoader]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);


useEffect(()=>{
  const asyncfn=async ()=>{
    props.loadprogress(20);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=1`;
    let data=await fetch(url);
    let parseddata=await data.json();
    props.loadprogress(60);
    console.log(parseddata.articles);
    props.loadprogress(100);
    setArticles(parseddata.articles);
    setLoader(false);
    setPage(page=>page);
    setTotalResults(parseddata.totalResults);
  };
  asyncfn();
},[])
// async componentDidMount(){
//   console.log("cdm")
//   this.props.loadprogress(20);
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=${this.props.pagesize}&page=1`;
//   let data=await fetch(url);
//   let parseddata=await data.json();
//   this.props.loadprogress(60)
//   this.pages=Math.ceil(parseddata.totalResults/20);
//   console.log(parseddata.articles);
//   this.props.loadprogress(100);
//   this.setState({
//     articles:parseddata.articles,
//     loader:false,page:1,totalResults:parseddata.totalResults
//   })
//   console.log(this.state.totalResults);
// }

  // handlenext=async ()=>{
  //   this.setState({loader:true})
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=269e8facb2b54f05b9a8cbf2da5f8d23&pageSize=${this.props.pagesize}&page=${this.state.page+1}`;
  // let data=await fetch(url);
  // let parseddata=await data.json();
  //   this.setState({
  //     articles:parseddata.articles,
  //     loader:false,page:this.state.page+1
  //   })
  // }
  // handleprev=async ()=>{
  //   this.setState({loader:true})
  //   console.log(this.state.page-1);
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=269e8facb2b54f05b9a8cbf2da5f8d23&pageSize=${this.props.pagesize}&page=${this.state.page-1}`;
  // let data=await fetch(url);
  // let parseddata=await data.json();
  //   this.setState({
  //     articles:parseddata.articles,
  //     loader:false,page:this.state.page-1
  //   })
  // }
  // i=0;
  const fetchData=async ()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pagesize}&page=${page+1}`;
  let data=await fetch(url);
  let parseddata=await data.json();
  setPage(page=> page+1);
  setArticles(articles.concat(parseddata.articles));
  setLoader(false);
    
  }
 
    return (
      <div className='container '><h3 className='my-3 text-center'>News Top Headlines : {props.category} </h3>
      {loader&& <Spinner/>}
      


      <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length!==totalResults} // Replace with a condition based on your data source
      loader={<Spinner />}
      endMessage={<p>No more data to load.</p>}
    >
    <div className="container my-3">
    <div className="row">
      {!loader && articles.map((element)=>{
        return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12   " key={element.url}><Newsitem source={element.source?element.source.name:""} urlimg={element.urlToImage?element.urlToImage:noimg} author={element.author} dat={element.publishedAt} desc={element.description?element.description.slice(0,80):""} title={element.title?element.title.slice(0,50):""}/></div>
      })} 
      </div>
    </div>
      </InfiniteScroll>
      
      
      
      
      {/* <div className="my-2 d-flex justify-content-between">
      <button disabled={this.state.page<=1?true:false} type="button" className="btn btn-dark px-3" onClick={this.handleprev}>Prev</button>
      <button disabled={this.state.page>=this.pages?true:false} type="button" onClick={this.handlenext} className="btn btn-dark px-3">Next</button>
      </div> */}
      </div>
    )
  
}
News.defaultProps={
  country:"in",
 pagesize:5,
 category:"business"
 }
 News.propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
  pagesize:PropTypes.number
 }
export default News