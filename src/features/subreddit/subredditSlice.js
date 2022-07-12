import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    subreddits: []
    // 
    // articles: [],
    // amount: 0,
    // status: 'empty',
    // isLoading: true,
};

// function fetchSubredit() {
//     fetch(`https://www.reddit.com/r/${subredditState.name}.json`)
//         .then(response => {
//             if (!response.ok) {
//                 throw Error('Could not fetch the data for that resourse.')
//             }
//             return response.json();

//         }).then(data => {

//             const myArticles = [];
//             data.data.children.forEach(child => {
//                 const myArticle = {
//                     title: child.data.title,
//                     link: child.data.permalink,
//                     author: child.data.author,
//                     comments: child.data.num_comments,
//                     timestamp: child.data.created_utc
//                 };
//                 myArticles.push(myArticle);

//             });
//             setSubredditState({ articles: myArticles, name: subredditState.name, error: null });

//         }).catch(err => {
//             console.log('Error: ', err);
//         });
// }

let client = {
    get: subredditName => {
        return fetch(`https://www.reddit.com/r/${subredditName}.json`);
    }
}

export const fetchArticles = createAsyncThunk(
    'subreddit/fetchArticles',
    async subredditName => {
        const response = await client.get(subredditName);
        if (!response.ok) {
            return { isError: true }
        }
        const data = await response.json();
        return data;
    }
)

const subredditSlice = createSlice({
    name: 'subreddit',
    initialState,
    reducers: {},
    extraReducers: {

    }
});



export default subredditSlice.reducer;