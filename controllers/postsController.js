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
    res.json(postsCopy);
};
const show = (req, res) => {
    const id = parseInt(req.params.id);
    // res.send(`Visualizzato post ${req.params.id}`);
    const post = posts.filter((post) => post.id === id);

    post.length != 0 ? res.json(post) : res.status(404).send("Post non trovato.");


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
    
    res.status(204).json();

};

module.exports = {index, show, store, update, modify, destroy};