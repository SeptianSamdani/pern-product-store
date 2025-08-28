import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config"; 

// init arcjet 
export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics:['ip.src'], 
    rules: [
        // shield protects from common attacks e.g. SQL Injection, XSS, CSRF Attack 
        shield({mode: "LIVE"}), 
        detectBot({
            mode: "LIVE",
            // block all bots except search engine 
            allow: [
                "CATEGORY:SEARCH_ENGINE"
            ]
        }), 

        // rate limiting 

        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10, 
            capacity: 15,
        })
    ]
})
