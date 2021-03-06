import _ from 'lodash';

export default function parseServerFormatMiddleware(state, componentName){
	return new Promise((resolve, reject) => {
    if (componentName !== 'state' && componentName !== 'hotkeys'){
      resolve(parsersContainer[componentName](state));
    }

    const parsedState = {};

    _.keys(state).forEach((key) => {
      const parser = parsersContainer[key];
      if (parser){
        parsedState[key] = parser(state[key]);
      }
    });

    resolve(parsedState);
	});
}

//Container of the parsers for each component in the JSON data coming from the server.
const parsersContainer = {};

parsersContainer.alarm = (state) => ({
  isOn: state.is_on,
  timeData: {
   hour: state.hour.toString(),
   minute: state.minute.toString(),
  }
});

parsersContainer.aircon = (state) => ({
  isOn: state.is_on,
  mode: state.mode,
  temperature: state.temperature
});

parsersContainer.location = (state) => ({
  isHome: state.am_home
});

parsersContainer.player = (state) => ({
  volume: state.volume,
  isOn: state.is_on,
  isPlaying: state.is_playing,
});

parsersContainer.lights = (state) => ({
  'EN': state.shelf_light.is_on,
  'BD': state.door_light.is_on,
  'DK': state.desk_light.is_on,
});
