const hostname = window && window.location && window.location.hostname;
const localDatabaseUrl = "http://localhost:3100";
const productionDatabaseUrl = "https://send-message-iv2.herokuapp.com";
const apiVersion = "v1";
const productionAppHostname = "kelvinmusselli.github.io";
const backendHost =
  hostname === productionAppHostname ? productionDatabaseUrl : localDatabaseUrl;

export const API_ROOT = `${productionDatabaseUrl}/api/${apiVersion}`;
