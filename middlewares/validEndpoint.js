const validEndpoint = (req, res) => {
    res.status(404).json(
        {
            error: "Not found",
            message: "Pagina non trovata"
        }
    )
}

module.exports = validEndpoint;