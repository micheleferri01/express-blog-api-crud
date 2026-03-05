const express = require("express");
const router = express.Router();

const postsController = require('../controllers/postsController');
const validEndpoint = require('../middlewares/validEndpoint');
const dataValidation = require('../middlewares/dataValidation');
const errorsHandler = require('../middlewares/errorsHandler')



// # index
router.get("/", postsController.index);

// # show
router.get("/:id", postsController.show);

// # store
router.post("/",dataValidation, postsController.store);

// #update
router.put("/:id",dataValidation, postsController.update);

// # modify
router.patch("/:id", postsController.modify);

// # destroy
router.delete("/:id", postsController.destroy);

router.use(errorsHandler);

router.use(validEndpoint);


module.exports = router;