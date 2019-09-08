// Generics example
function getPropertyValue(element, property) {
    console.log(property + ": " + element[property]);
}
var taxi = {
    manufacturer: 'Toyota',
    model: 'Camry',
    year: 2014
};
getPropertyValue(taxi, "year");
var mp3 = {
    title: "song 1",
    bpm: 120,
    artist: "cool band",
    albumCover: "coo link"
};
getPropertyValue(mp3, "albumCover");
