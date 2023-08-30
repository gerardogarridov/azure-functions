module.exports = async function (context, req) {
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? `Hola ( ${name} ) :D  !!!!!!!!!!`
        : "Hola anonimo";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}