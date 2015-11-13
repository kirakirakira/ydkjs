const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_acct_balance = 303.91;
var purchase_amt = 0;

function calculate_tax(amt) {
	return amt * TAX_RATE;
}

function format_price(amt) {
	return "$" + amt.toFixed(2);
}

while (bank_acct_balance - PHONE_PRICE > purchase_amt) {
	purchase_amt = purchase_amt + PHONE_PRICE;
	purchase_amt = purchase_amt + calculate_tax(purchase_amt);
	console.log("bought a phone ", purchase_amt);

	if (purchase_amt < SPENDING_THRESHOLD) {
		purchase_amt = purchase_amt + ACCESSORY_PRICE;
		purchase_amt = purchase_amt + calculate_tax(purchase_amt);
		console.log("bought an accessory ", purchase_amt);
	}
}

console.log(format_price(purchase_amt));
