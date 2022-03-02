
import {EntityRestClient} from 'entity-rest-client';

const BASE_URL = 'https://gorest.co.in';
const API_PREFIX = '/public/v2';
const USERS = 'users';

(async () => {
    const entityRESTClient = new EntityRestClient(BASE_URL, API_PREFIX)
    const users = await entityRESTClient.getEntities(USERS);
    console.log(JSON.stringify(users, null, 4));
})()
