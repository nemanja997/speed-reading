import mongoose from 'mongoose';
import articleSchema from './models/article.schema';

let conn = null;

// TODO: add password from url to .env file
const uri = 'mongodb+srv://nemanja997:speedreading@cluster1-dbw2g.mongodb.net/netlify-database?retryWrites=true&w=majority';

exports.handler = async (event, context) => {

    //the following line is critical for performance reasons to allow re-use of database connections
    // across calls to this Lambda function and avoid closing the database connection.
    // The first call to this lambda function takes about 5 seconds to complete, while subsequent,
    // close calls will only take a few hundred milliseconds.
    context.callbackWaitsForEmptyEventLoop = false;

    if (conn == null) {
        conn = await mongoose.createConnection(uri, {
            bufferCommands: false,
            bufferMaxEntries: 0,
            useNewUrlParser: true
        });
        conn.model('Article', articleSchema);
    }

    const M = conn.model('Article');

    const doc = await M.find();

    return {
        statusCode: 200,
        body: JSON.stringify(doc)
    };

};
