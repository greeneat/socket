module.exports = function(io){
    io.on('connect', function(client) {
    client.on('greet', function(data) {
       // private
        client.emit('reply', { message: 'Thanks' });

        // everyone except this client
        //client.broadcast.emit('reply', { message: 'Thanks' });

        // everyone
        //io.emit('reply', { message: 'Thanks' });
    });

    client.on('disconnect', function() {

    });
});
}