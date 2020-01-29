
/* export our lambda function as named "handler" export */
exports.handler = (event, context, callback) => {

    console.log("news API invoked");

            /* Success! return the response with statusCode 200 */
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({pozdrav:"pozz"})
            })
}
