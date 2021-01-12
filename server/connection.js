const {MongoClient} = require('mongodb');
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const ans = await client.db("Antara").collection("songs").findOne({SongName:"Titliaan_Warga"});
        console.log(ans)
        // Make the appropriate DB calls
       // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
    
//     let database = databasesList.databases[0].name
//     console.log(database);
//     //databasesList.databases.forEach(db => console.log(` - ${db.name}`));
    
// };
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://antara123:antara123@antara.nnbzs.mongodb.net/Antara?retryWrites=true&w=majority" 
const client = new MongoClient(uri);
try{
    await client.connect();
const ans = await client.db("Antara").collection("songs").findOne({SongName:"Titliaan_Warga"});
    console.log(ans)
}catch(err){
    console.log(err)
}