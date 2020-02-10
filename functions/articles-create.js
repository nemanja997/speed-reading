import mongoose from 'mongoose';
import articleSchema from './models/article.schema';

let conn = null;
let Article = null;

const uri = 'mongodb+srv://nemanja997:speedreading@cluster1-dbw2g.mongodb.net/netlify-database?retryWrites=true&w=majority';

exports.handler = async (event, context) => {

    context.callbackWaitsForEmptyEventLoop = false;

    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    if (conn == null) {
        conn = await mongoose.createConnection(uri, {
            bufferCommands: false,
            bufferMaxEntries: 0,
            useNewUrlParser: true
        });
        Article = conn.model('Article', articleSchema);
    }

    try {
        const data = JSON.parse(event.body);
        let article = {
            _id: mongoose.Types.ObjectId(),
            title: data.title,
            body: data.body,
            author: data.author,
            imageUrl: data.imageUrl
        };
        let response = {
            msg: "Article successfully created",
            data: article
        }

        await Article.create(article);
        return {
            statusCode: 201,
            body: JSON.stringify(response)
        }
    } catch (err) {
        console.log('articles-create', err);
        return {
            statusCode: 500,
            body: JSON.stringify({msg: err.message})
        }
    }

};
