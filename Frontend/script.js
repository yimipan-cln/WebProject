fetch("https://webproject-vv87.onrender.com/tareas")
.then(res => res.json())
.then(data => {

    const lista = document.getElementById("lista");

    data.forEach(tarea => {

        const li = document.createElement("li");

        li.innerHTML = `
            ${tarea.titulo}
            <a href="${tarea.url}" target="_blank">
                Abrir tarea
            </a>
        `;

        lista.appendChild(li);

    });

})
.catch(error => {
    console.error("Error:", error);
});