fetch("https://webproject-vv87.onrender.com/tareas")
.then(res => res.json())
.then(data => {

    const lista = document.getElementById("lista");

    data.forEach(tarea => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="tarea-info">
                <span class="folio">Folio #${tarea.id}</span>
                <span class="titulo">${tarea.titulo}</span>
            </div>

            <a href="${tarea.url}" target="_blank" class="btn">
                Abrir tarea
            </a>
        `;

        lista.appendChild(li);

    });

});