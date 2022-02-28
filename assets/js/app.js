const loadPlayerInfo = () => {
    const playerField = document.getElementById('player-field');
    const playerText = playerField.value;
    playerField.value = '';


    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPlayerInfo(data.player))
}


const displayPlayerInfo = players => {

    const parent = document.getElementById('search-result');
    players.forEach(player => {
        console.log(player);

        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('mb-3');

        if (player.strThumb === null) {
            return;
        }
        else {
            div.innerHTML = `
        <div class="row g-0 ">
        <div class="col-md-4">
            <img src="${player.strThumb}" class="img-fluid rounded-start h-100" />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${player.strPlayer}</h5>
                <p class="card-text">${player.strDescriptionEN.slice(0, 250)}</p>
                <a href="" class="btn btn-danger px-4 py-2">Delete</a>
                <a href="" class="btn btn-primary px-4 py-2 ms-2">Details</a>
            </div>
        </div>
      </div>
        `;
            parent.appendChild(div);
        }

    });
}