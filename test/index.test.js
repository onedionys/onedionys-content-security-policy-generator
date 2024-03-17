// test/test.js
const assert = require('assert');
const generateCSP = require('../src/cspGenerator');

describe('Content Security Policy Generator', function() {
    it('should generate CSP header based on provided options', function() {
        const options = {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", 'example.com'],
            styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com'],
            imgSrc: ["'self'", 'data:'],
            connectSrc: ["'self'", 'api.example.com'],
            fontSrc: ["'self'", 'fonts.gstatic.com'],
            objectSrc: ["'none'"],
            mediaSrc: ["'self'"],
            frameSrc: ['youtube.com'],
            sandbox: ['allow-forms', 'allow-scripts'],
            reportUri: '/report-violation',
            reportTo: 'https://example.com/csp-report',
            blockAllMixedContent: true
        };
        const expectedCSP = "default-src 'self'; script-src 'self' example.com; style-src 'self' maxcdn.bootstrapcdn.com; img-src 'self' data:; connect-src 'self' api.example.com; font-src 'self' fonts.gstatic.com; object-src 'none'; media-src 'self'; frame-src youtube.com; sandbox allow-forms allow-scripts; report-uri /report-violation; report-to https://example.com/csp-report; block-all-mixed-content";

        const result = generateCSP(options);
        assert.strictEqual(result, expectedCSP);
    });
});
