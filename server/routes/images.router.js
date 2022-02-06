const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * Get all of the images in list
 */
router.get("/", (req, res) => {
  pool
    .query(
      `
    SELECT * FROM image
    `
    )
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("err in get images", err);
    });
});

/**
 * Add an image for the logged in user to the list
 */
router.post("/", (req, res) => {
  // endpoint functionality
});

/**
 * Delete an image if it's something the logged in user added
 */
router.delete("/:id", (req, res) => {
  // endpoint functionality
  console.log(req.user);
  const queryText = "DELETE FROM image WHERE id=$1 AND user_id=$2";
  pool
    .query(queryText, [req.params.id, req.user.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error completing SELECT item query", err);
      res.sendStatus(500);
    });
});

/**
 * Update an image if it's something the logged in user added
 */
router.put("/:id", (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of images
 * they have added to the shelf
 */
router.get("/count", (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific image by id
 */
router.get("/:id", (req, res) => {
  // endpoint functionality
});

module.exports = router;
