import React from "react";
import './article.css';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';


TimeAgo.addDefaultLocale(en);

function Article(props) {

    const timeAgo = new TimeAgo('en-UK');
    const myDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
    myDate.setUTCSeconds(props.article.timestamp);
    const passedTime = timeAgo.format(myDate, 'mini')

    return (
        <article className='article'>
            <div className="card-body">
                <a className="article-title" target="_blank" rel="noreferrer" href={`https://www.reddit.com${props.article.link}`}>
                    <h4>{props.article.title}</h4>
                </a>

                <div className="article-info">
                    <div className="article-author">
                        <h6>Posted by <span><a target="_blank" rel="noreferrer" href={`https://www.reddit.com/user/${props.article.author}`}>
                            <span className="author-name">{props.article.author}</span>
                        </a>
                        </span>
                        </h6>
                    </div>
                    <div className="date-box">
                        <h6>{passedTime} ago</h6>
                    </div>
                </div>
            </div>

            <div className="aside">
            </div>
        </article>
    )
}

export default Article;