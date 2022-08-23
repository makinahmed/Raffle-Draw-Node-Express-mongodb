const router = require("express").Router();
router.use("/api/v1/tickets", require("../routes/ticket"));

router.use()

//health route is checked for testing server is working or not  after deployment.
router.get("/health", (_req, res) => {
  // throw new Error('Eorror');
  res.status(200).json({ message: "Success" });
});

module.exports = router;