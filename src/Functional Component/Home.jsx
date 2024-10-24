import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import NewsItem from './NewsItem'

export default function Home(props) {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)
    let [page, setPage] = useState(1)
    async function getAPIData(page) {
        let response = await fetch(`https://newsapi.org/v2/everything?&page=${page}&q=${props.q}&sortBy=publishedAt&language=${props.language}&pageSize=12&apiKey=301c5411d2c14378ae6c68c0ff399326`)
        response = await response.json()
        if (response.articles) {
            if (page === 1) {
                setArticles(response.articles.filter((x) => x.title !== "[Removed]"))
                setTotalResults(response.totalResults)
            }
            else
                setArticles(articles.concat(response.articles.filter((x) => x.title !== "[Removed]")))
        }
    }
    let fetchData = async () => {
        getAPIData(page + 1)
        setPage(page + 1)
    }
    useEffect(()=>{
        getAPIData(1)
    },[props])
    return (
        <div className='container-fluid'>
            <h5 className='bg-secondary text-light text-center p-2 my-2'><span className='text-capitalize'>{props.q}</span> News Aritcles</h5>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchData}
                hasMore={articles.length < totalResults}
                loader={
                    <div className='py-5 text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                }
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>No More Data</b>
                    </p>
                }
            >
                <div className="row">
                    {
                        articles.map((item, index) => {
                            return <NewsItem
                                key={index}
                                title={item.title}
                                source={item.source.name}
                                pic={item.urlToImage}
                                date={item.publishedAt}
                                description={item.description}
                                url={item.url}
                            />
                        })
                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}
