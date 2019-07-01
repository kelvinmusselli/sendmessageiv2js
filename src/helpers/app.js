import { APP_VERSION } from '../config/app-config';
import { API_ROOT } from '../config/api-config';
import Axios from 'axios';

async function updateAvailable() {
  const { data: { version } } = await Axios.get(`${API_ROOT}/frontEndVersion`);
  return APP_VERSION !== version;
}

export {
  updateAvailable
};