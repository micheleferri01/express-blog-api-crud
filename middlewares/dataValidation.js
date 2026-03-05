let posts = require('../data/posts');

posts = posts.map((post) => {
    return { ...post, image: "http://localhost:3000" + post.image }
});

const dataValidation = (req, res, next) => {
    const { title, content, image, tags } = req.body;

    if (!title || typeof title !== "string") {
        return res.status(400).json(
            {
                success: false,
                message: "il title inserito non è valido."
            }
        )

    }

    if (posts.some((post) => post.title === title)) {
        return res.status(400).json({
            success: false,
            message: "Esista già un post con questo titolo"
        })
    }

    if (!content || typeof content !== "string") {
        return res.status(400).json(
            {
                success: false,
                message: "il content inserito non è valido"
            }
        )
    }

    if (!image || typeof image !== "string") {
        return res.status(400).json(
            {
                success: false,
                message: "l'image inserita non è valida"
            }
        )
    }

    if (!tags || !Array.isArray(tags) || tags.length === 0) {
        return res.status(400).json(
            {
                success: false,
                message: "il formato dei tags è errato o inesistente."
            }
        )
    }

    next();
}

module.exports = dataValidation;