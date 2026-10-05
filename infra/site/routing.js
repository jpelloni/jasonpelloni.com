// CloudFront viewer-request function, rendered by templatefile() in cdn.tf.
// Redirects www to the apex (path kept, query dropped), and maps extensionless
// paths to the Next.js static export's <page>.html files (/about and /about/ -> /about.html).
function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value : '';

  if (host === 'www.${domain_name}') {
    return {
      statusCode: 301,
      statusDescription: 'Moved Permanently',
      headers: {
        location: { value: 'https://${domain_name}' + request.uri }
      }
    };
  }

  var uri = request.uri;
  if (uri.length > 1 && uri.charAt(uri.length - 1) === '/') {
    uri = uri.substring(0, uri.length - 1);
  }
  var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
  if (uri === '/') {
    request.uri = '/index.html';
  } else if (lastSegment.indexOf('.') === -1) {
    request.uri = uri + '.html';
  }
  return request;
}
