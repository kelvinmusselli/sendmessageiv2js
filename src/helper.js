export const getUrlToken = () => {
  var url = new URL(window.location.href);
  return url.searchParams.get('token');
}