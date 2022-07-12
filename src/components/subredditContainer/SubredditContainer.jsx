import React, { useState, useEffect } from 'react';
import Search from '../search/Search';
import Article from "../article/Article";
// import './subreddit.css';
import { useSelector, useDispatch } from 'react-redux'
import { fetchArticles } from "../../features/subreddit/subredditSlice"


// REDUX

const SubredditContainer = (props) => {
    const dispatch = useDispatch()

    const { articles, amount } = useSelector((state) => {
        console.log("state :", state)

        state.subreddits.filter(subredit => if ())

        return state.subreddit;
    })

    useEffect(() => {
        dispatch(fetchArticles(props.defaultSubreddit))
    }, [props, dispatch])

    if (amount < 1) {
        return <section className='empty-subreddits'>
            <h2>No subreddits to display.</h2>
        </section>
    }

    const onChange = (e) => {
        setSubredditState({ articles: subredditState.articles, subreddit: e.currentTarget.value, error: subredditState.error });
    };

    return <div className='subreddits-block'>

        <div className='articles-container'>
            <Search subreddit={subredditState.name} onChange={onChange} />
            {/* if (subredditState.error !== null) -> display error else */}
            {
                (articles !== null && articles.length > 0) ? articles.map((article, index) =>
                    < Article key={index} article={article} />
                ) : ''
            }
        </div>
    </div>
}

export default SubredditContainer;









// REACT COMPONENTS

// function SubredditsBlock(props) {

//     // const [articles, setArticles] = useState([]);
//     // const [subreddit, setSubreddit] = useState(props.defaultSubreddit)


//     const [subredditState, setSubredditState] = useState(name: props.defaultSubreddit});




//     function fetchSubredit() {
//         fetch(`https://www.reddit.com/r/${subredditState.name}.json`)
//             .then(response => {
//                 if (!response.ok) {
//                     throw Error('Could not fetch the data for that resourse.')
//                 }
//                 return response.json();

//             }).then(data => {
//                 // console.log('Children nested in Data: ', data.data.children);
//                 const myArticles = [];
//                 data.data.children.forEach(child => {
//                     const myArticle = {
//                         title: child.data.title,
//                         link: child.data.permalink,
//                         author: child.data.author,
//                         comments: child.data.num_comments,
//                         timestamp: child.data.created_utc
//                     };
//                     myArticles.push(myArticle);

//                 });
//                 setSubredditState({ articles: myArticles, name: subredditState.name, error: null });

//             }).catch(err => {
//                 console.log('Error: ', err);
//                 setSubredditState({ articles: [], name: subredditState.name, error: err });
//             });
//     }

//     useEffect(() => {
//         // fetch(`https://www.reddit.com/r/${subreddit}.json`).then(response => {
//         //     if (!response.ok) {
//         //         throw Error('Could not fetch the data for that resourse.')
//         //     }
//         //     return response.json();

//         // }).then(data => {
//         //     // console.log('Children nested in Data: ', data.data.children);
//         //     const myArticles = [];
//         //     data.data.children.forEach(child => {
//         //         const myArticle = {
//         //             title: child.data.title,
//         //             link: child.data.permalink,
//         //             author: child.data.author,
//         //             comments: child.data.num_comments,
//         //             timestamp: child.data.created_utc
//         //         };
//         //         myArticles.push(myArticle);

//         //     });
//         //     setArticles(myArticles);

//         // }).catch(err => {
//         //     console.log('Error: ', err)
//         // });

//         const timeOutId = setTimeout(() => fetchSubredit(), 1000);
//         const destructor = () => clearTimeout(timeOutId);
//         return destructor;
//     }, [subredditState]);


//     const onChange = (e) => {
//         setSubredditState({ articles: subredditState.articles, subreddit: e.currentTarget.value, error: subredditState.error });
//     };


//     return (
//         <div className='subreddits-block'>

//             <div className='articles-container'>
//                 <Search subreddit={subredditState.name} onChange={onChange} />
//                 {/* if (subredditState.error !== null) -> display error else */}
//                 {
//                     (subredditState.articles !== null && subredditState.articles.length > 0) ? subredditState.articles.map((article, index) =>
//                         < Article key={index} article={article} />
//                     ) : ''
//                 }
//             </div>
//         </div>
//     )

// }

// export default SubredditsBlock;