import '../scss/style.scss';
import checkLoginState from './users and login/checkLoginState.mjs';

import listenForSocketUpdate from './Chat/updateUserList.mjs';

checkLoginState()
listenForSocketUpdate()

