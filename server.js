const qrcode = require('qrcode')
const generatePayload = require('promptpay-qr')
const http = require('http');

const server = http.createServer((request, response) => {
    const mobileNumber = '0105550122773';
    const amount = 5000;
    const payload = generatePayload(mobileNumber, { amount })

    const options = { type: 'svg', color: { dark: '#0c0c0c', light: '#f7f8f7' } };
    qrcode.toString(payload, options, (err, svg) => {
        if (err) return response.end(err);
        response.end(svg);
    })
}).listen(3003);