const config = require("./config");
const makeRatingFile = require("./rating-file");
const { WEIGHT, createRating, updateRating } = require("./calculations");

module.exports = {
    config,
    makeRatingFile,
    WEIGHT,
    createRating,
    updateRating
}