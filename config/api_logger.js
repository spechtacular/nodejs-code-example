const requestip = require('request-ip');
const log = require('gelf-pro');
let gelf_host = '10.81.1.199';

if (process.env.NODE_ENV === 'production') {
    gelf_host = gelf_host;
} else if (process.env.NODE_ENV === 'development') {
    gelf_host = gelf_host;
} else {
    gelf_host = gelf_host;
}

log.setConfig({
    //fields: {facility: "example", owner: "Tom (a cat)"}, // optional; default fields for all messages
    fields: {redis: process.env.REDIS_PREFIX, facility: process.env.NODE_ENV}, // optional; default fields for all messages

    filter: [], // optional; filters to discard a message
    transform: [], // optional; transformers for a message
    broadcast: [], // optional; listeners of a message
    levels: {}, // optional; default: see the levels section below
    aliases: {}, // optional; default: see the aliases section below
    adapterName: 'tcp', // optional; currently supported "udp", "tcp" and "tcp-tls"; default: udp
    adapterOptions: { // this object is passed to the adapter.connect() method
        // common
        host: gelf_host, // graylog host should be configured via secrets
         // optional; default: 127.0.0.1
        port: 12201, // optional; default: 12201
        // ... and so on

        // tcp adapter example
        family: 4, // tcp only; optional; version of IP stack; default: 4
        timeout: 10000, // tcp only; optional; default: 10000 (10 sec)

        // udp adapter example
        protocol: 'udp4' // udp only; optional; udp adapter: udp4, udp6; default: udp4

        // tcp-tls adapter example
        //key: fs.readFileSync('client-key.pem'), // tcp-tls only; optional; only if using the client certificate authentication
        //cert: fs.readFileSync('client-cert.pem'), // tcp-tls only; optional; only if using the client certificate authentication
        //ca: [fs.readFileSync('server-cert.pem')] // tcp-tls only; optional; only for the self-signed certificate
    }
});

const self = module.exports = {

    // message is optional
    log_request(req, message, status) {

        if (req === null || req === undefined) return;
        let ua = 'unknown';
        let email = 'unknown';
        let users_id = 0;
        let remote_ip = 'unknown';


        if (status === null && status === undefined) {
            status = '000';
        }

        if (req.headers !== null && req.headers !== undefined) {
            if (req.headers['user-agent'] !== null &&
                req.headers['user-agent'] !== undefined) {
                ua = req.headers['user-agent'];
            }

            if (req.headers['x-forwarded-for'] !== null &&
                req.headers['x-forwarded-for'] !== undefined) {
                remote_ip = req.headers['x-forwarded-for'];
            }
        }

        if (req.hasOwnProperty('session') && req.session !== undefined &&
                req.session.hasOwnProperty('email') && req.session.email !== undefined) {
            email = req.session.email.toLowerCase();
            if (req.session.hasOwnProperty('users_id') && req.session.users_id !== undefined) {
                users_id = req.session.users_id;
            }
        } else if (req.hasOwnProperty('query') && req.query !== null && req.query !== undefined &&
                req.query.hasOwnProperty('email') && req.query.email !== null &&
                req.query.email !== undefined) {
            email = req.query.email.toLowerCase();
        } else if (!req.hasOwnProperty('body') || req.body === null || req.body === undefined ) {
            email = 'undefined';
        } else {
            if (req.body.email !== null && req.body.email !== undefined) {
                email = req.body.email.toLowerCase();
            } else if (req.body.user !== null && req.body.user !== undefined &&
                    req.body.user.hasOwnProperty('email') && req.body.user.email !== null &&
                    req.body.user.email !== undefined) {
                email = req.body.user.email.toLowerCase();
            } else {
                email = 'unknown';
            }
        }

        if (remote_ip === 'unknown') {
           remote_ip = requestip.getClientIp(req);
        }

        const log_entry = {
            client_ip: remote_ip,
            //referer: req.get('Referrer'), // this is undefined on some calls?
            users_id,
            users_email: email,
            request_path: req.baseUrl + req.path,
            user_agent: ua,
            message_string: message,
            status
        };

        if (email === 'unknown' || !email) {
            delete(log_entry.users_email);
        }

        if (ua === 'unknown' || !ua) {
            delete(log_entry.user_agent);
        }

        switch (status) {
            case '200':
            case '201':
            case '202':
            case '301':
            case '302':
                log.info("request", log_entry);
                break;
            case '000':
                log.debug("request", log_entry);
                break;
            case '404':
                log.warn("request", log_entry);
                break;
            default:
                log.error("request", log_entry);
                break;
        }

        if (process.env.NODE_ENV !== 'production')
            console.log(JSON.stringify(log_entry));
    },

    // message must be JSON formatted
    log_event(message, status) {

        if (status !== null && status !== undefined) {
            message.status = status;
        } else {
            status = '000';
            message.status = status;
        }

        switch (status) {
            case '200':
            case '201':
            case '202':
            case '301':
            case '302':
                log.info("event", message);
                break;
            case '000':
                log.debug("event", message);
                break;
            case '404':
                log.warn("event", message);
                break;
            default:
                log.error("event", message);
                break;
        }

        if (process.env.NODE_ENV !== 'production')
            console.log(JSON.stringify(message));
    }
};
