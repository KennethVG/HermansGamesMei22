const toevoegenButtons = document.getElementsByTagName("button");
verwijderItem();

Array.from(toevoegenButtons).forEach(button => {
    button.addEventListener('click', (e) => {
        // De formulieren moeten niet gesubmit worden:
        e.preventDefault();

        // Haal het ID op van de button om te weten over welke console het gaat:
        const id = e.target.id;
        voegToe(id);
    });
});

function voegToe(naamConsole) {
    const naamSpel = document.getElementById("naam-" + naamConsole);

    // Maak een nieuw li element aan:
    const ul = document.getElementById("ul-" + naamConsole);
    let nieuwSpel = document.createElement("li");
    nieuwSpel.className = "list-group-item d-flex justify-content-between align-items-center";
    nieuwSpel.innerHTML = naamSpel.value + "<span class='badge rounded-pill'><img src='icons/trash.svg' alt='trash'></span>"
    ul.appendChild(nieuwSpel);

    // Zorg ervoor dat dit nieuwe element ook verwijderd kan worden:
    verwijderItem();
}

function verwijderItem() {
    // Alle alle vuilbak icoontjes op:
    const verwijderenIcons = document.getElementsByTagName("img");

    // Itereer over de vuilbakjes en verwijder het LI element wanneer er op geklikt wordt:
    Array.from(verwijderenIcons).forEach(vuilbakje => {
        vuilbakje.addEventListener('click', (e) => {
            const image = e.target;
            const liElement = image.parentElement.parentElement;
            const ulElement = liElement.parentElement;
            ulElement.removeChild(liElement);
        });
    });
}