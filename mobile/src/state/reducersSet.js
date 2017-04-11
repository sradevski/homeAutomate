import { combineReducers } from 'redux';

import aircon from './reducers/aircon';
import alarm from './reducers/alarm';
import player from './reducers/player';
import lights from './reducers/lights';
import appState from './reducers/appState';
import location from './reducers/location';
import notifications from './reducers/notifications';

const reducersSet = combineReducers({
	aircon,
	alarm,
	player,
	lights,
	appState,
	location,
	notifications,
});

export default reducersSet;
