import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

console.log('here 1');
console.log('App name:', appName);
console.log('App component:', App);

const AppWrapper = () => {
  console.log('AppWrapper called!');
  return App();
};

console.log('Registering component...');
AppRegistry.registerComponent(appName, () => AppWrapper);
console.log('Component registered successfully');
