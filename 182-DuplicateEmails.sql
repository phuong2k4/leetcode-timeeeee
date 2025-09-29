select name as Customers
from customers
where customers.id not in (SELECT CustomerID FROM Orders);