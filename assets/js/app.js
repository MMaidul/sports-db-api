const loadPlayerInfo = () => {
    const playerField = document.getElementById('player-field');
    const playerText = playerField.value;
    playerText.value = '';


    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${playerText}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.player))
}