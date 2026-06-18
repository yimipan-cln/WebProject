fetch("http://localhost:3000/tareas")
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

});