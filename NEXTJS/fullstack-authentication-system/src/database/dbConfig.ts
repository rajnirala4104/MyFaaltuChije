import mongoose from 'mongoose'

export const connect = async() => {
    try {
        
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("database is connected successfully");
        })
        
        connection.on('error', (err) => {
            console.log("Database connection error", err);
            process.exit();
        })

    } catch (error) {
        console.log("something went wrong..");
        console.error(error);
    }
}
