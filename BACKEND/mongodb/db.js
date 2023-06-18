const { Cipher } = require('crypto');
const {MongoClient} = require('mongodb')


//------------this is how you can connect your database----------
async function connectDatabase(){
    const uri = "mongodb+srv://rajmongo:rajmongo@cluster0.2yskbyq.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);

    try{
        await client.connect()
        console.log(`Database connected successfully`);
        await showAllTheDatabases(client) //we're calling the showAllTheDatabases() function
        // await insertDataInDatabase(client, {userDummyName: "Raj Nirala", userDummyAge: 100}); //---we're calling insert funtion.
        // await deleteTheDataFromeDatabase(client, {userDummyName: "MeDummy"})
        // await updateDataFromTheDatabase(client, "MrDummy", "Raj Nirala")
        await readAllTheDataFromDatabase(client)
    }catch(e){
        console.log(`Oops!! something went wrong, check your code.. \n--------error----------\n${e}`);
    }finally{
        await client.close()
    }
}
connectDatabase()

//--------show all the databsases-------
async function showAllTheDatabases(client){
    const result = await client.db().admin().listDatabases(); 
    // result.databases -> 
    // console.log(result.databases)
    result.databases.forEach(db => {
        console.log(`-- ${db.name}`)
    });
}

//------insert the data in the database---------
async function insertDataInDatabase(client, dataYouWantToInsertInDatabase){
    const insertQuery = await client.db('dummyDB').collection('dummyData').insertOne(dataYouWantToInsertInDatabase)
    if(insertQuery){
        console.log(`${insertQuery}: \ninserted successfully`);
    }else{
        console.log("Oops!! i'm facing problem to insert the data in database, check your code or try again..");
    }
}

//------- function to read all the data from the database -----
async function readAllTheDataFromDatabase(client){
    const dbData = await client.db('dummyDB').collection('dummyData').find({}).toArray()
    if(dbData.length > 0){
        // dbData.forEach(dataobj => {
        //     console.log(dataobj.userDummyName);
        // })
        console.log(dbData)
    }else{
        console.log("Oops!! there is nothing to show you...");
    }
}

//------ a function to delete the data from the database ----------
async function deleteTheDataFromeDatabase(client, dataWhatYouWantToDelete){
    const result = await client.db('dummyDB').collection('dummyData').deleteOne(dataWhatYouWantToDelete)
    console.log(`${result.deletedCount} Document(s) is deleted`)
}


// ----------- Function to Update data from database ---------
async function updateDataFromTheDatabase(client, whatDataYouWantUpdate, intoWhat){
    const updatedData = await client.db('dummyDB').collection('dummyData').updateOne({userDummyName: whatDataYouWantUpdate}, {$set:{userDummyName: intoWhat}})
    // console.log(`${updatedData}, updated successfully`)

    // ------  $set ---------- is importent
}

