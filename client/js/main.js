import '../scss/style.scss';
import checkLoginState from './checkLoginState.mjs';

import listenForSocketUpdate from './updateUserList.mjs';

checkLoginState()
listenForSocketUpdate()

