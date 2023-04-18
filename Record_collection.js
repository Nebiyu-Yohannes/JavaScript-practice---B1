// this is the object that holds the record collection 

var records_collection = {
    "0001": {
        "artist": "childish gambino",
        "album": "Because Of the internet",
        "genre": "RnB & Rap",
        "best_tracks": ["flight of the navigator", "pink toes", "3005"]
    },
    "0002": {
        "artist": "Frank Ocean",
        "album": "Nostalgia",
        "genre": "RnB",
        "best_tracks": ["swim good", "lovercrimes", "nature feels"]
    },
    "0003": {
        "artist": "NF",
        "album": "perception",
        "genre": "Rap",
        "best_tracks": ["You're Special", "If you want love", "my life"]
    },
    "0004": {
        "artist": "Micheal Jackson",
        "album": "thriller",
        "genre": "pop & hip-pop",
        "best_tracks": ["you rock my world", "beat it", "thriller"]
    }
} 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ``
// keeps a copy of the original records collection 
var records_collection_copy = JSON.parse(JSON.stringify(records_collection));


const t_property = ["artist", "album", "genre", "best_tracks"];
const single_property = ["artist", "album", "genre"];

var shownewrec = [];

function  record_updater(id, property, value){
    if (!t_property.includes(property)) throw new Error('NO PROPERTY');
    if (value === ""){
        delete records_collection[id][property];
    } else if (single_property.includes(property)){
        // creating the property incase it doesn't exist
        //records_collection[id][property] = records_collection[id][property] || [];
        records_collection[id][property] = value;
    }else {
        records_collection[id][property].push(value);
        }

    //shownewrec = records_collection.id[property]; 
    //console.log(shownewrec);
    //shownewrec = records_collection.id[property];
    //return shownewrec;

    return records_collection;
}

console.log(record_updater("0002", "best_tracks", "american wedding"));