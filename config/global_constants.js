
let installationURL = null;

let api_url = null;

const shared_file_mount_point = '/mnt/shared/';
let media_file_path = null;
const media_secret = 'p2kEc14Z4aEO';
const allowed_origins = [
    'https://web.mobile.verity.org',
    'https://dev.mobile.verity.org',
    'https://api.mobile.verity.org',
    'https://verity.org'
];
const release_type = 'Release';
const event_type = 'Event';
let ad_groups_suffix = 'TEST';

if (process.env.NODE_ENV === 'production') {
    api_url = 'https://api.mobile.verity.org';
    installationURL = api_url+'/apps';
    ad_groups_suffix = 'PROD';

} else if (process.env.NODE_ENV === 'development') {
    api_url = 'https://dev.mobile.verity.org';
    installationURL = api_url+'/apps';
    media_file_path = shared_file_mount_point + 'media/development/';

} else if (process.env.NODE_ENV === 'test') {
    api_url = 'localhost:3000';
    installationURL = api_url+'/apps';
    media_file_path = shared_file_mount_point + 'media/development/';

} else if (process.env.NODE_ENV === 'local') {
    api_url = '127.0.0.1:3000';
    installationURL = api_url+'/apps';
    media_file_path = shared_file_mount_point + 'media/development/';

} else {
    api_url = 'https://dev.mobile.verity.org';
    installationURL = api_url+'/apps';
    media_file_path = shared_file_mount_point + 'media/development/';

}


module.exports = {
    installationURL,
    api_url,
    media_file_path,
    media_secret,
    allowed_origins,
    release_type,
    event_type,
    ad_groups_suffix

};
