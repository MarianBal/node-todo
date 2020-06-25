import {
  getSettings,
  postSettings
  //deleteSettings,
  //putSettings
} from './fetchSettings';
import { endpoints, url } from './../constants/enums/url';
const { init } = endpoints;

const apiURLConstructor = baseURL => extension => baseURL + extension;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT
if (window._CONFIG_) {
  baseUrl = window._CONFIG_.API_URL;
}
const nodeApi = apiURLConstructor(baseUrl);

export const getAllNotes = () => () => {
  return fetch(nodeApi(init), getSettings());
};

export const addSingleNote = data => () => {
  return fetch(nodeApi(init), postSettings(data));
};
