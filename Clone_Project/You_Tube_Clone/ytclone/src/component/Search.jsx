import { useState, useEffect  } from 'react';
import axios from 'axios';
import {debounce} from 'lodash'

const Search = () => {

  const [videos, setVideos] = useState([]);
   const [query , setquery] = useState('');
     const [count , setcount] = useState(0);
  
const fetchData = async () => {

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=AIzaSyBdOHgNZoPUfL3Tgxy4p9S18Cl7RvzNA_U&type=video&part=snippet&q=${query}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
   
    }

  useEffect(() => {  
    
   const debounceData =()=>{
        debounce(fetchData,1000)
   }
   return ()=>{
      debounceData();
   }
   
  }, [query]);
    
  return (
  <>
       <div id="header">
        <div id="layer1">
          <div id="icon-ctn">
          <div id="ham-icon"><img src="https://img.icons8.com/?size=100&id=3096&format=png" alt="manu-icon" /> </div>
        <div id="logo"><img src="https://i.imgur.com/GwHIJ5x.png" alt="youtube-logo" /></div>
        </div>
        <div id='search-box'>
  <img src="https://www.svgrepo.com/show/7109/search.svg" alt=""/>
         <input type="text"
           placeholder='search here...'
           onChange={(e)=>setquery(e.target.value)}
           value={query}
          />
          <button onClick={()=>{
            fetchData();
             setcount(count+1);
            }}>
              <img src="https://www.svgrepo.com/show/7109/search.svg" alt="" /></button>
     </div>
        <div id="search-voice"><button><img src="https://i.imgur.com/aU9JdiD.png" alt="microphone-img" /></button></div>
        <div id="user-utility">
        <div id="create-video"><img src="https://i.imgur.com/5L9hzrO.png" alt="" /></div>
        <div id="notification"><img src="https://i.imgur.com/B1a1wbh.png" alt="" /></div>
        <div id="user-profile"></div>
        </div>
        </div>
        <div id="layer2">
          <div>All</div>
          <div>News</div>
          <div>Start-Ups</div>
          <div>JavaScript</div>
          <div>Music</div>
          <div>Gaming</div>
          <div>Podcast</div>
          <div>AI</div>
          <div>Stocks</div>
          <div>Debates</div>
          <div>Chess</div>
          <div>EnglishTutorial</div>
        </div>
        </div>

    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-card">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.channelTitle}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Search;