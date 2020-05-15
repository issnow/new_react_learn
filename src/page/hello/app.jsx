import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

export default (props) =>{
  const [time, setTime] = useState('');
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 500);    
  }, []);
  const [count, setCount] = useState(0);
  const [items, setItems] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setCount(count+1)
    if(count+1>5) {
      console.log('到底部了')
      setHasMore(false)
      return
    }
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };
  useEffect(() => {
    console.log(count,'cout');
  }, [count]);
  return (
    <div>
      现在的北京时间是{time}
      {/* <div className="list" style={{height: 200,border:'1px solid #ddd'}}>
        {
          arr.map((e,i)=>(
            <div key={i}>item{e}</div>
          ))
        }
      </div> */}

        <div style={{height:200,overflow:'auto',width:200}}>
          <InfiniteScroll
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={200}
            scrollThreshold={.8}
            endMessage={<h4>没有更多了...</h4>}
          >
            {items.map((i, index) => (
              <div style={style} key={index}>
                div - #{index}
              </div>
            ))}
          </InfiniteScroll>
        </div>
    </div>
  )
}
