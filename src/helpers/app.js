import { API_ROOT } from '../config/api-config';
import Axios from 'axios';

async function verifyAndUpdate() {
  const { data: { version } } = await Axios.get(`${API_ROOT}/frontEndVersion`);

  if (localStorage.appVersion !== version) {
    update(version)
  }
}

function update(version) {
  localStorage.appVersion = version;
  window.location.reload(true);
}

export {
  verifyAndUpdate
};