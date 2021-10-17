const { Router } = require("express");
const checkJwt = require("../middlewares/checkJwt");
const reqAdmin = require("../middlewares/reqAdmin");

const router = Router();

const {
  postUser,
  getUsers,
  deleteOneUser,
  banOneUser,
  updateOneUser,
} = require("../controllers/User");

router.post("/", postUser);
router.get("/", getUsers);
router.delete("/:id", deleteOneUser);
router.put("/:id/:status", checkJwt, reqAdmin, banOneUser);
router.put("/updateuser", updateOneUser);
module.exports = router;
