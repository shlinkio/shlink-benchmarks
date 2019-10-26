import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  const body = {
    longUrl: 'https://api-spec.shlink.io',
    tags: ['foo', 'bar', 'baz', 'foo4']
  };
  const headers = {
    'X-Api-Key': '7a531c75-134e-4d5c-86e0-a71b7167b57a',
    'Content-type': 'application/json',
    'Accept': 'application/json',
  };
  const res = http.post('http://172.17.0.1:8080/rest/v1/short-urls', JSON.stringify(body), { headers });
  check(res, {
    'URL was created': (r) => r.status === 200,
  });
  sleep(1);
};
