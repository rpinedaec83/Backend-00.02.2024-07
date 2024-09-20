--1.  Seleccionar los clientes que viven en el país de "usa"
SELECT * FROM Customers WHERE country = 'USA'

--2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
SELECT * FROM suppliers WHERE city = 'BERLIN'

--3.  Seleccionar los empleados con código 3,5 y 8
SELECT * FROM employees WHERE employees.EmployeeID IN (3,5,8)

--5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
SELECT * FROM products WHERE price >= 20 AND price <= 90

--6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
SELECT * FROM orders WHERE OrderDate >= '1997-01-01' AND OrderDate <= '1997-07-15'

--7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
SELECT *
  FROM orders
	INNER JOIN employees
	ON orders.EmployeeID = employees.EmployeeID
	WHERE employees.EmployeeID IN (1,3,4,8)

--8.  Mostrar las ordenes hechas en el año 1996
SELECT * FROM orders WHERE YEAR(orderdate) = 1996

--9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
SELECT * FROM orders WHERE YEAR(orderdate) = 1997 and MONTH(orderdate) = 5

--10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
SELECT * FROM orders WHERE YEAR(orderdate) = 1998 AND DAYOFMONTH(orderdate) = 1

--11. Mostrar todos los clientes que no tienen fax
SELECT * FROM customers WHERE postalcode IS NULL OR postalcode = ''

--12. Mostrar todos los clientes que tienen fax
SELECT * FROM customers WHERE postalcode IS NOT NULL AND postalcode <> ''

--13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
SELECT productname, price, categoryname
  FROM products
  INNER JOIN categories
  ON products.CategoryID = categories.CategoryID

--14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
SELECT productname, price, suppliername
  FROM products
  INNER JOIN suppliers
  ON products.SupplierID = suppliers.SupplierID

--15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
SELECT orderid, productname, price, quantity, price * quantity as total
	FROM orderdetails
	INNER JOIN products
	ON orderdetails.productid = products.ProductID
	ORDER BY orderid

--16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
SELECT 
	orders.OrderID,
	orderdate,
	productid,
	price,
	orders.EmployeeID,
	CONCAT(firstname, ' ', lastname) AS 'Full name'
FROM orders
	INNER JOIN orderdetails USING (OrderID)
	INNER JOIN products USING (productid)
	INNER JOIN employees USING (employeeid)

--19. Mostrar los 10 productos con menor precio
SELECT * FROM products ORDER BY price ASC LIMIT 10

--20. Mostrar los 10 productos con mayor precio
SELECT * FROM products ORDER BY price DESC LIMIT 10

--21. Mostrar los 10 productos más baratos
SELECT * FROM products ORDER BY price ASC LIMIT 10

--22. Mostrar los 10 productos más caros
SELECT * FROM products ORDER BY price DESC LIMIT 10

--23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
SELECT * FROM customers order BY customername asc

--24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
SELECT * FROM customers WHERE customername LIKE 'B%' AND country = 'UK'

--25. Seleccionar todos los campos de productos de las categorias 1,3 y 5, ordenar por categoria
SELECT * FROM products WHERE categoryid IN (1,3,5) ORDER BY categoryid asc

--26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
SELECT * FROM products WHERE price BETWEEN 50 AND 200

--27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
SELECT
	customers.CustomerID,
	customers.CustomerName,
	orderdate,
	price,
	productname
FROM orders
	INNER JOIN orderdetails USING (orderid)
	INNER JOIN products USING (productid)
	INNER JOIN customers USING (customerid)

--28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
SELECT
  categoryname,
  COUNT(categoryname) AS 'Cantidad de productos'
FROM products
  INNER JOIN categories USING (categoryid)
  GROUP BY categoryname

--29. Seleccionar los 5 productos mas vendidos
SELECT
	productid,
	productname,
	COUNT(productid) AS 'TotalPedidos'
FROM orderdetails 
	INNER JOIN products USING (productid)
	GROUP BY productid
	ORDER BY TotalPedidos DESC
	LIMIT 5

--31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
SELECT * FROM products WHERE productname LIKE 'M%' AND price BETWEEN 28 AND 129

--32. Obtener todos los clientes del Pais de USA,Francia y UK
SELECT * FROM customers WHERE country IN ('UK', 'USA', 'France')

--34. Obtener todas las ordenes hechas por el empleado King Robert
SELECT
	CONCAT(lastname,' ',firstname) AS Fullname,
	orderid
FROM employees
INNER JOIN orders USING (employeeid)
HAVING Fullname LIKE 'King Robert'

--35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
SELECT * FROM customers
  INNER JOIN orders USING(customerid)
  WHERE customername LIKE 'Que Delícia'

--36. Obtener todas las ordenes hechas por el empleado King Robert, Davolio Nancy y Fuller Andrew
SELECT
	CONCAT(lastname,' ',firstname) AS Fullname,
	orderid
FROM employees
	INNER JOIN orders
	USING (employeeid)
	HAVING Fullname IN ('King Robert','Davolio Nancy','Fuller Andrew')

--37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 
SELECT
	orderid,
	productid,
	productname,
	price
FROM orderdetails
	INNER JOIN products
	USING (ProductID)
WHERE orderid = '10257'

--38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
SELECT
	orderid,
	orderdate,
	productid,
	productname,
	price
FROM orderdetails
INNER JOIN orders USING(orderid)
INNER JOIN products USING(productid)
WHERE YEAR(orderdate) > 1996

--39. Calcular los 15 productos mas caros
SELECT * FROM products ORDER BY price DESC LIMIT 15

--40. Calcular los 5 productos mas baratos
SELECT * FROM products ORDER BY price ASC LIMIT 5

--41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
SELECT
	categoryname
	productid,
	productname,
	price
FROM products
  INNER JOIN categories
  USING(categoryid)

--42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra P
SELECT
	categoryname
	productid,
	productname,
	price
FROM products
  INNER JOIN categories
  USING(categoryid)
WHERE productname NOT LIKE 'P%'

--44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
SELECT
	customername,
	suppliername,
	productname,
	CONCAT(firstname,' ',lastname) AS 'Fullname Employee'
FROM orderdetails
	INNER JOIN products USING (ProductID)
	INNER JOIN orders USING (orderid)
	INNER JOIN customers USING (customerid)
	INNER JOIN suppliers USING (supplierid)
	INNER JOIN employees USING (employeeid)
WHERE orderid = '10257'

--45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
SELECT
	customerid,
	customername,
	YEAR(orderdate) AS 'inYear',
	count(customerid)
FROM orders
INNER JOIN customers USING(customerid)
GROUP BY customerid, inYear
ORDER BY customerid, inYear

--46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
SELECT
	YEAR(orderdate) AS 'iYear',
	MONTHNAME(orderdate) AS 'iMonth',
	COUNT(orderid)
FROM orders
GROUP BY iYear, iMonth
ORDER BY iYear ASC, iMonth ASC

--47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra,
--    código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora
--    y la ciudad del proveedor ,usar Join
SELECT
	orderid,
	customername,
	orderdate,
	productid,
	quantity,
	productname,
	suppliername,
	suppliers.city
FROM orders
INNER JOIN customers USING(customerid)
INNER JOIN orderdetails USING(orderid)
INNER JOIN products USING(productid)
INNER JOIN suppliers USING(supplierid)

-- 48. Seleccionar el nombre de la compañía del cliente, nombre del contacto, el código de la orden de compra,
--     la fecha de la orden de compra, el código del producto,cantidad pedida del producto, nombre del producto y
--     el nombre de la compañía proveedora, usas JOIN.Solamente las compañías proveedoras que comienzan con la
--     letra de la A hasta la letra G,además la cantidad pedida del producto debe estar entre 23 y 187.
SELECT
	customername,
	customers.contactname,
	orderid,
	orderdate,
	productid,
	quantity,
	productname,
	suppliername
FROM customers
INNER JOIN orders USING(customerid)
INNER JOIN orderdetails USING(orderid)
INNER JOIN products USING(productid)
INNER JOIN suppliers USING(supplierid)
WHERE quantity BETWEEN 23 AND 187
AND customername REGEXP '^[A-G]'