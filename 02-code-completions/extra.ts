// Generics example

function getPropertyValue<T, K extends keyof T>(element: T, property: K) {
  console.log(`${property}: ${element[property]}`);
}

// =================================

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: 'Toyota',
  model: 'Camry',
  year: 2014
};

getPropertyValue(taxi, "year");

// =================================

interface Music {
  title: string;
  bpm: number;
  artist: string;
  albumCover?: string;
}

let mp3: Music = {
  title: "song 1",
  bpm: 120,
  artist: "cool band",
  albumCover: "coo link"
}

getPropertyValue(mp3, "bpm");