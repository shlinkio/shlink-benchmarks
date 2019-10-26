import http from 'k6/http';
import { check, sleep } from 'k6';

export default function() {
  const res = http.get('http://172.17.0.1:8080/rY9zd');
  check(res, {
    'Redirect happened': (r) => r.status === 200,
  });
  sleep(1);
};
