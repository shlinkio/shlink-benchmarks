import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  const body = {
    longUrl: 'https://api-spec.shlink.io',
    tags: ['foo', 'bar', 'baz']
  };
  const headers = {
    'X-Api-Key': 'valid_api_key',
    'Content-type': 'application/json',
    'Accept': 'application/json',
  };
  const res = http.post('http://172.17.0.1:8080/rest/v1/short-urls', JSON.stringify(body), { headers });
  check(res, {
    'URL was created': (r) => r.status === 200,
  });
  sleep(1);
};
