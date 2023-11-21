console.clear();

const url = "https://swapi.dev/api/peopl";

async function fetchData() {

    try {
    const response = await fetch(url);
    console.log(response);

    if(!response.ok) {
        console.log("oh no!")
        return
    }

    const data = await response.json();
    console.log(data);

    const characterArray = data.results;
    const characterNames = characterArray.map((character) => character.name);
    console.log(characterNames);

    const charactersSmallerThan150cm = characterArray.filter((character) => character.height < 150).map((character) => {
        return {name: character.name, height: character.height} })


    console.log(charactersSmallerThan150cm);

} catch(error) {
    console.error(error);

}
    

}

fetchData();
