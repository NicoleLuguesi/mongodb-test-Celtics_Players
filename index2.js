const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Nick:Rhino9494@testing-mongodb-su8ip.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB....'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

const playerSchema = new mongoose.Schema({
    name: String,
    height: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    starter: Boolean,
    salary: Number
});

const Player = mongoose.model('Player', playerSchema);

async function createPlayer() {
const player = new Player({
    name: "Marcus Smart",
    height: "6'3'",
    tags: ["Flower Mound","USA"],
    starter: true,
    salary: 3400000
});

const result = await player.save();
console.log(result);
}

async function getPlayer() {
    return await Player
    .find( { name: 'Mosh', isPublished: true })
    .limit(10)
    .sort({name: 1})
    console.log(player);
}

async function displayPlayers() {
    const courses = await getPlayer();
    console.log(player);
}

//displayPlayers();

//Query first
// async function Player(id) {
//     const player = await Player.findById(id);
//     if(!player) return;
//     player.set({
//         isPublished: true,
//         name: 'Jaylen Brown'
//     });
//     const result = await player.save();
//     console.log(result);
// }

//updatePlayer('5e1cb30f76d4ce38b713a594');


async function removePlayer(id) {
    //const result = await Player.deleteOne({_id: id });
    const player = await Player.findByIdAndRemove(id);
    console.log(player);
}

//removePlayer('5e1cb30f76d4ce38b713a594');

createPlayer();
//getPlayer();