const {Router} = require("express")


const postsControllers = require("../controllers/postsController")

const router = Router()

// @route   GET /api/posts
// @desc    get all posts
// @access  Public 

router.get("/", postsControllers.getPosts)

// @route   Post/api/posts
// @desc    sent a post
// @access  Public 

router.post("/", postsControllers.sendPost)

module.exports = router;