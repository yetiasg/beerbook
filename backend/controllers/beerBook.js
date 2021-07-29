const {getDB} = require('../helpers/database');
const {ObjectId} = require('mongodb');
const createError = require('http-errors');


exports.getMainPage = async(req, res, next) => {
    try{
        res.status(200).json('Beerbook');
    }catch (error){
        next(error);
    }
}

exports.getBeers = async(req, res, next) => {
    try{
        const {userId} = req.payload;
        const db = await getDB();
        const userCollection = await db.collection('users');
        const result = await userCollection.findOne({_id: new ObjectId(userId)});
        if(!result) throw createError.NotFound();
        res.status(200).json(result.beers);
    }catch (error){
        next(error);
    }
};

// const result = await userCollection.find({"_id": new ObjectId('609c1c7e7ba9d94ba0cf135b')}, {projection: {"beers": {$elemMatch: {_id: new ObjectId('609c1d0574e5cb0b8c2b7c38') }}}}).toArray();

exports.getBeer = async(req, res, next) => {
    try{
        const {userId} = req.payload;
        const {beerId} = req.body;
        const db = await getDB();
        const userCollection = await db.collection('users');
        const result = await userCollection.find({"_id": new ObjectId(userId)}, {projection: {"beers": {$elemMatch: {_id: new ObjectId(beerId) }}}}).toArray();
        if(!result[0].beers) throw createError.NotFound();
        res.status(200).json(result);
    }catch (error){
        next(error);
    }
};


exports.addBeer = async(req, res, next) => {
    try{
        const {userId} = req.payload;
        const {beer} = req.body;
        const db = await getDB();
        const userCollection = await db.collection('users');
        const result = await userCollection.updateOne({"_id": new ObjectId(userId)}, {$push: {beers: {_id: new ObjectId, beer}}});
        if(!result) throw createError.NotFound();   
        res.status(200).json({message: "Dodano pomyślenie nowe piwo do listy piw"});
    }catch (error){
        next(error);
    }
};

exports.updateBeer = async(req, res, next) => {
    try{
        const {userId} = req.payload;
        const {beerId} = req.body;
        const {updateBeerData} = req.body;
        const db = await getDB();
        const userCollection = await db.collection('users');
        const result = await userCollection.updateOne(
            {
                "_id": new ObjectId(userId),
                "beers._id": new ObjectId(beerId)
            },
            {
                $set: {
                   "beers.$.beer": updateBeerData
                }
            }
        );
        if(!result) throw createError.NotFound();
        res.status(200).json({message: "Zaktualizowano"});
    }catch (error){
        next(error);
    }
};

exports.deleteBeer = async(req, res, next) => {
    try{
        const {userId} = req.payload;
        const {beerId} = req.body;
        const db = await getDB();
        const userCollection = await db.collection('users');
        const result = await userCollection.updateOne(
            {
                "_id": new ObjectId(userId),
                "beers._id": new ObjectId(beerId)
            },
            {
                $unset: {
                   "beers.$": ""
                }
            }
        );
        await userCollection.updateOne(
            {},
            {$pull: {"beers" : null}},
            {multi: true}
        );
        if(!result) throw createError.NotFound();
        res.status(200).json({message: 'Beer deleted'});
    }catch (error){
        next(error);
    }
};