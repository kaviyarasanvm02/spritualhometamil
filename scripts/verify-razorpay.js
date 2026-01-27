require('dotenv').config({ path: '.env' });
// If .env is in root, just require('dotenv').config() is enough, but specifying path is safer if running from scripts folder.
// However, standard Next.js usage might put .env in root.
// Let's assume running from root or handle paths. 
// Standard approach:
require('dotenv').config();

const Razorpay = require('razorpay');

// Keys from .env
const key_id = process.env.NEXT_PUBLIC_RAZORPAY_KEY;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

console.log("Testing Razorpay keys...");
console.log(`Key ID: ${key_id}`);
// console.log(`Key Secret Length: ${key_secret ? key_secret.length : 'undefined'}`); // Safer check

const razorpay = new Razorpay({
    key_id: key_id,
    key_secret: key_secret
});

async function testConnection() {
    try {
        console.log("Attempting to create a test order...");
        const options = {
            amount: 100, // 1 INR
            currency: "INR",
            receipt: "test_receipt_123"
        };
        const order = await razorpay.orders.create(options);
        console.log("SUCCESS! Order created:");
        console.log(order);
    } catch (error) {
        console.error("FAILED! Error details:");
        if (error.statusCode) {
            console.error(`Status Code: ${error.statusCode}`);
        }
        if (error.error) {
            console.error("Error Object:", JSON.stringify(error.error, null, 2));
        } else {
            console.error(error);
        }
    }
}

testConnection();
