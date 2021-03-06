var transactionLookupVsTableMap = {
    "Item ID":"item",
    "Account ID":"account",
    "Buyer":"contact",
    "Seller":"contact",
    "From Account":"account",
    "To Account":"account"
};
var transactionLookupVsNameMap = {
  "Account ID":"Account Name",
  "Item ID":"Item Name",
  "Buyer":"Buyer Name",
  "Seller":"Seller Name",
  "From Account":"From Account",
  "To Account":"To Account"
};
var transactionHeaders = ["Date","Item Name","Account Name","Quantity","Transaction Amount",
"Buyer Name","Seller Name","From Account","To Account"];
var accountHeaders = ["Account Name","Account Owner","Account Manager","Account Balance"];
var itemHeaders = ["Item Type","Item Name","Available Quantity","Bought Quantity","Sold Quantity","Total Inflow","Total Outflow"];
var contactHeaders = ["Contact Name","Primary Phone","Secondary Phone","Email","Primary Address","Secondary Address"];
var moduleToNameFieldMap = {
    "accounts":"Account Name",
    "contacts":"Contact Name",
    "items":"Item Name"
};
var moduleToHeadersMap = {
    "accounts": accountHeaders,
    "items": itemHeaders,
    "contacts": contactHeaders,
    "transactions": transactionHeaders
};
