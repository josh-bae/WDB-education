const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
      },
    password: {
    type: String,
    required: true,
      },
    courses: [{
        courseName: {
            type: String,
            required: true,
        },
        totalScore: {
            type: Number,
            required: true,
        },
        scorePerHole: {
            type: Array,
            required: false,
            validate: [arrayLimit, '{PATH} exceeds 18 holes']
        },
    }],
});
function arrayLimit(val) {
    return val.length <= 18;
}
module.exports = mongoose.model("user", UserSchema);