const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require('./Note');
const app = express();
const Listing = require('./Listings')

app.use(cors());
app.use(express.json());

// const mongoURI = 'mongodb://localhost:27017/trademelistings';
const mongoURI = 'mongodb://mongo:27017/trademelistings';

//-----------------//week3 of mission 5---------------------------//
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));


//-----------------this is the code for week 1 of mission 5------------------//
// mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Connected to MongoDB:', process.env.MONGO_URL);
//     })
//     .catch(err => {
//         console.error('Failed to connect to MongoDB:', err);
//         // Handle connection error appropriately, e.g., exit the application
//         process.exit(1);
//     });



app.get('/api/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({message: "Fetched notes successfully", data: notes});
    } catch (err) {
        res.status(500).json({message: "Error fetching notes", error: err});
    } 
});

//--------------- Mission 5 get request-------------------//

app.get('/api/listings', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json({message: "Fetched listings successfully", data: listings});
    } catch (err) {
        res.status(500).json({message: "Error fetching listings", error: err});
    } 
});



app.post('/api/notes', async (req, res) => {
    try {
        const newNote = new Note ({
            title: req.body.title,
            content: req.body.content
        })
        const savedNote = await newNote.save();
        res.status(201).json({message: "Note created successfully", data: savedNote});
    } catch (err) {
        res.status(500).json({message: "Error creating notes", error: err});
    }
});



// ---------------- mission 5 api post-------------------//

app.post('/api/listings', async (req, res) => {
    try {
        const newListing = new Listing ({
            title: req.body.title,
            location: req.body.location,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
            currentBid: req.body.currentBid
        })
        const savedListing = await newListing.save();
        res.status(201).json({message: "Listing created successfully", data: savedListing});
    } catch (err) {
        res.status(500).json({message: "Error creating listing", error: err});
    }
});


//-----------------remove from database--------------------//
app.post('/api/listings/remove', async (req, res) => {
    try {
        
        const itemId = req.body._id;
        
         console.log(Listing.findByIdAndDelete)

        // ---------------------Perform the removal operation using Mongoose-------------//
        const removedListing = await Listing.findByIdAndDelete(itemId);

        if (!removedListing) {
            return res.status(404).json({ message: "Listing not found" });
        }

        res.status(200).json({ message: "Listing removed successfully", data: removedListing });
    } catch (err) {
        res.status(500).json({ message: "Error removing listing", error: err });
    }
});





app.all('*', (req, res) => {
    res.status(404).send("<h1> 404 | Page not found");
});

app.listen(4000, () => {
  console.log("Server is running or port localhost:4000");
});
