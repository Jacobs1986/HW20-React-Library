const router = require("express").Router();
const booksController = require("../../controllers/bookController")

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)

router.route("/create")
    .post(booksController.create);

module.exports = router;