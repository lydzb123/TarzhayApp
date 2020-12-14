import http from 'k6/http';
import { sleep } from 'k6';



export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '10s', target: 500 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 0 },


  ]
};


export default function () {
    var productId = Math.floor(Math.random() * 10000000) + 1;
    http.get(`http://localhost:3001/api/products/${productId}`);

}






// http_req_blocked...........: avg=315.3µs  min=2µs    med=272µs  max=49.35ms  p(90)=554µs    p(95)=796.64µs

// http_req_connecting........: avg=255.59µs min=0s     med=204µs  max=49.24ms  p(90)=422.3µs  p(95)=665.64µs

// http_req_sending...........: avg=221.94µs min=9µs    med=62µs   max=253.76ms p(90)=120µs    p(95)=150µs

// http_reqs..................: 10608  112.37464/s