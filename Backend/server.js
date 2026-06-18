require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const Tarea = require("./models/Tarea");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../Frontend")));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB conectado correctamente");
})
.catch((error) => {
    console.log("Error al conectar MongoDB:", error);
});

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../Frontend/index.html")
    );
});

// Endpoint
app.get("/tareas", async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener tareas"
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en puerto ${PORT}`);
});