import React, { Component } from 'react'
// import './componentStyles/newsCard.css'

export default class NewsCard extends Component {

    render() {
        let { newsTime, newsTitle, newsDescription, readMore, imageURL } = this.props
        return (
            <>
                <div className="col-12 col-md-6 col-lg-4 p-3 col-sm-6">
                    <div className="bg-white p-3 shadow card border-0 rounded news h-100">
                        <div className="publishedTime">{newsTime}</div>
                        <img src={imageURL} class="card-img-top" alt="image is not loaded.." />
                        <div className="card-body">
                            <h5 className="card-title">{newsTitle}</h5>
                            <p className="card-text">{newsDescription}.</p>
                            <a className="btn btn-sm btn-primary" target='_black' href={readMore}>Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
