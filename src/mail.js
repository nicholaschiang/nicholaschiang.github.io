const sendmail = require('sendmail')();

const fromEmail = document.querySelector('#email').innerText;
const fromName = document.querySelector('#name').innerText;
const objective = document.querySelector('#objective').innerText;
const message = document.querySelector('#message').innerText;

sendmail({
    from: fromEmail,
    to: 'nicholas.h.chiang@gmail.com', // TODO: Don't include this anywhere
    subject: objective,
    html: 'Name: ' + fromName + ' <br><br> ' + message,
}, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});