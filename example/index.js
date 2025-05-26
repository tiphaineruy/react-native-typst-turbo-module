import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

console.log('here 1');

AppRegistry.registerComponent(appName, () => App);
