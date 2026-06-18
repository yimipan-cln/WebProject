const mongoose = require("mongoose");

const tareaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Tarea", tareaSchema);