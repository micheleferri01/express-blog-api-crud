const posts = require('../data/posts');

const index = (req, res) => {
    const searchFilter = req.query.search;
    let postsCopy = [...posts];
    if(searchFilter) {
        postsCopy = postsCopy.filter((post) => {
            const normalizedFilter = searchFilter.toLowerCase().trim();
            for (const tag of post.tags) {
                const normalizedtag = tag.toLowerCase().trim();
                if(normalizedtag.includes(normalizedFilter)) return true;
            }
            return false;
        })
    }
    res.json(
        {
            success: true,
            result: postsCopy
        }
    );
};
const show = (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Visualizzato post ${req.params.id}`);
    const post = posts.filter((post) => post.id === id);

    post.length != 0 ? res.json(post) : res.status(404).json(
        { 
        success: false,
        message: "Post non trovato."
    });


};
const store = (req, res) => {
    res.send("Creato nuovo post");
};
const update = (req, res) => {
    res.send(`il post ${req.params.id} è stato modificato interamente`);
};
const modify = (req, res) => {
    res.send(`il post ${req.params.id} è stato modificato parzialmente`);
};
const destroy = (req, res) => {
    // res.send(`il post ${req.params.id} è stato eliminato`);
    const id = parseInt(req.params.id);
    const newPostsList = posts.filter((post) => post.id != id);
    console.log(newPostsList);
    const deletedPost = posts.filter((post) => post.id === id);

    deletedPost.length > 0? 
    res.status(204): 
    res.status(404).json(
        {
            success: false,
            message: "il post che si vuole eliminare non esiste"
        }
    );
    
    

};

module.exports = {index, show, store, update, modify, destroy};