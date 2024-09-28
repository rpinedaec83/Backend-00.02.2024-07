CREATE VIEW `BrazilCustomers` AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';
