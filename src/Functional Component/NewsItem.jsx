import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-3">
            <div className="card">
                <img src={props.pic ? props.pic : "/images/noimage.jpg"} height={150} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div className='card-source'>
                        <p>{props.source}</p>
                        <p>{(new Date(props.date)).toDateString()}</p>
                    </div>
                    <hr />
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target='_blank' rel="noreferrer" className="btn btn-secondary btn-sm w-100">Read Full Articles</a>
                </div>
            </div>
        </div>
    )
}
