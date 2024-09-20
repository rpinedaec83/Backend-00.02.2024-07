/*1.  Seleccionar los clientes que viven en el país de "usa"*/
Select * from Customers where country = 'USA';

/*2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"*/
Select * from suppliers where city = 'Berlin';

/*3.  Seleccionar los empleados con código 3,5 y 8*/
select * from employees where EmployeeID in ('3','5','8');

/*4.  Seleccionar los productos que tienen stock mayor que cero 
y son del proveedor 1,3 y 5*/
select * from products where SupplierID in (1,3,5);

/*5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90*/
select * from products where price between 20 and 90;

/*6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997*/
select * from orders where orderdate between '1997-01-01' and '1997-07-15';

/*7.  Mostrar las órdenes de compra hechas en el año 1997, 
que pertenecen a los empleados con códigos 1 ,3 ,4 ,8*/
select * from orders where employeeid in (1,3,4,8) and year(orderdate)='1997';

/*8.  Mostrar las ordenes hechas en el año 1996*/
select * from orders where year(OrderDate)='1996';

/*9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril*/
select * from orders where orderdate between '1997-04-01' and '1997-04-31';

/* 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998*/
select * from orders a where year(orderdate) ='1998' and day(orderdate)=1;

/*11. Mostrar todos los clientes que no tienen fax*/
select * from customers where postalcode is null or postalcode ='';

/*12. Mostrar todos los clientes que tienen fax*/
select * from customers where postalcode !='';

/*13. Mostrar el nombre del producto, el precio, el stock y 
el nombre de la categoría a la que pertenece.*/
select a.ProductName, a.price, a.unit, b.CategoryName from products a 
inner join categories b on b.CategoryID=a.CategoryID;

/*14. Mostrar el nombre del producto, el precio producto, 
el código del proveedor y el nombre de la compañía proveedora.*/
select a.ProductName, a.price, b.SupplierID, b.SupplierName from products a 
inner join suppliers b on b.SupplierID=a.SupplierID;

/*15. Mostrar el número de orden, el código del producto, el precio, 
la cantidad y el total pagado por producto.*/
select a.OrderID, b.productid, c.price, b.quantity, b.Quantity*c.Unit as totalPagado from orders a 
inner join orderdetails b on b.orderid = a.orderid
inner join products c on b.productid = c.productid;

/*16. Mostrar el número de la orden, fecha, 
código del producto, precio, código del empleado y su nombre completo.*/
select a.orderid, a.orderdate, b.ProductID, d.price, c.EmployeeID, 
concat(c.FirstName,' ',c.LastName) as NombreCompleto from orders a
inner join orderdetails b on a.orderid=b.OrderID
inner join products d on b.ProductID=d.ProductID
inner join employees c on a.EmployeeID=c.EmployeeID;

/*17. Mostrar los 10 productos con menor stock*/
select * from products
order by price asc
limit 10;

/*18. Mostrar los 10 productos con mayor stock*/
select * from products
order by price desc
limit 10;

/*19. Mostrar los 10 productos con menor precio*/
select * from products
order by price asc
limit 10;

/*20. Mostrar los 10 productos con mayor precio*/
select * from products
order by price desc
limit 10;

/*21. Mostrar los 10 productos más baratos*/
select * from products
order by price asc
limit 10;

/*22. Mostrar los 10 productos más caros*/
select * from products
order by price desc
limit 10;

/*23. Seleccionar todos los campos de la tabla clientes,ordenar por compania*/
select * from customers
order by 2;

/*24. Seleccionar todos los campos de clientes,cuya compania 
empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania*/
select * from customers
where CustomerName like 'B%'
and country='UK'
order by 2;

/*25. Seleccionar todos los campos de productos de las categorias 1,3 y 5
ordenar por categoria*/
select a.* from products a 
where a.CategoryID in (1,3,5)
order by a.CategoryID;

/*26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200*/
select * from products where price between 50 and 200;

/*27. Visualizar el nombre y el 
id de la compania del cliente,fecha,precio unitario y producto de la orden*/
select a.customerName, a.customerID, b.OrderDate, d.Price ,d.ProductName  from customers a
inner join orders b on a.CustomerID = b.CustomerID 
inner join orderdetails c on b.OrderID = c.OrderID
inner join products d on c.productID = d.productID;

/*28. Visualizar el nombre de la categoria  
y el numero de productos que hay por cada categoria.*/
select (b.categoryName), count(*) from products a 
inner join categories b on a.categoryID =  b. categoryID
group by a.categoryID;

/*29. Seleccionar los 5 productos mas vendidos*/
select c.productname, count(*) from orders a 
inner join orderdetails b on a.orderid=b.orderid
inner join products c on b.productid = c.productid
group by c.productname
order by 2 desc
limit 5;

/*30. Seleccionar los jefes de los empleados*/
-- no hay relacion con la tabla employees para sacar el jefe de los empleados.

/*31. Obtener todos los productos cuyo nombre comienzan con M y 
tienen un precio comprendido entre 28 y 129*/
select * from products a where a.productname like 'M%' and price between 28 and 129;

/*32. Obtener todos los clientes del Pais de USA,Francia y UK*/
select * from customers where country in ('USA','France','UK');

/*33. Obtener todos los productos descontinuados o con stock cero.*/
Select * from Products where price is null or price = 0;

/*34. Obtener todas las ordenes hechas por el empleado King Robert*/
select a.* from orders a 
inner join employees b on a.employeeid=b.employeeid
where b.firstname = 'Robert' and b.LastName = 'King';

/*35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"*/
select a.* from orders a
inner join customers b on a.CustomerID = b.customerID
where b.CustomerName = 'Que Delícia';

/*36. Obtener todas las ordenes hechas por el empleado King
    Robert,Davolio Nancy y Fuller Andrew*/
select a.* from orders a 
inner join employees b on a.employeeid=b.employeeid
where b.firstname in ('Robert','Nancy','Andrew') and b.LastName in ('King','Davolio','Fuller');

/*37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden
    10257*/
select a.productid, b.productname, b.Price, b.unit from orderdetails a 
inner join products b on a.ProductID = b.productid
where a.orderid=10257;

/*38. Obtener todos los productos(codigo,nombre,precio,stock) 
de las ordenes hechas desde 1997 hasta la fecha de hoy.*/
select a.productid, b.productname, b.Price, b.unit from orderdetails a 
inner join products b on a.ProductID = b.productid
inner join orders c on a.orderid = c.orderid
where c.orderdate between '1997-01-01' and (current_date());

/*39. Calcular los 15 productos mas caros*/
select * from products
order by price desc
limit 15;

/*40. Calcular los 5 productos mas baratos*/
select * from products
order by price asc
limit 5;

/*41. Obtener el nombre de todas las categorias 
y los nombres de sus productos,precio y stock.*/
select Categories.CategoryName, Products.ProductName, Products.Price, Products.Unit  from Products 
inner join Categories on Products.CategoryID = Categories.CategoryID;

/*42. Obtener el nombre de todas las categorias y los nombres de sus 
productos,solo los productos que su nombre no comience con la letra P*/
select a.ProductName, b.CategoryName from products a
inner join categories b on a.categoryid = b.categoryid 
where a.ProductName not like 'P%';

/*43. Calcular el stock de productos por cada categoria.
Mostrar el nombre de la categoria y el stock por categoria.*/
select c.categoryname, sum(p.price) from categories c 
inner join products p on c.categoryid = p.categoryid
group by c.categoryname;

/*44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado 
y el nombre de los productos que estan en la orden 10794*/
select b.CustomerName, f.SupplierName ,concat(c.firstname,'',c.lastname) as NombreEmpleado, e.ProductName  from orders a
inner join customers b on a.customerid = b.customerid
inner join employees c on a.EmployeeID = c.EmployeeID
inner join orderdetails d on a.orderid = d.OrderID
inner join products e on d.ProductID = e.productid
inner join suppliers f on e.SupplierID = f.SupplierID
where a.orderid = '10794';
 

/*45. Mostrar el numero de ordenes de cada uno de los 
clientes por año,luego ordenar codigo del cliente y el año.*/
select c.customername, year(a.orderdate), count(*) from orders a 
inner join orderdetails b on a.orderid = b.orderid
inner join customers c on a.CustomerID = c.CustomerID
group by year(a.orderdate),c.customername
order by 1,2;

/*46. Contar el numero de ordenes que se han realizado 
por años y meses ,luego debe ser ordenado por año y por mes.*/
select year(orderdate), month(orderdate), count(*) from orders a
group by month(orderdate),year(orderdate)
order by 1,2;

/*47. Seleccionar el nombre de la compañía del cliente,
él código de la orden de compra,
la fecha de la orden de compra, 
código del producto, 
cantidad pedida del producto,
nombre del producto, 
el nombre de la compañía proveedora y la ciudad del proveedor ,
usar Join*/
select d.CustomerName, a.OrderID, a.OrderDate, c.ProductID, b.Quantity ,c.ProductName,e.SupplierName,e.city from orders a 
inner join orderdetails b on a.orderid = b.orderid
inner join products c on b.ProductID = c.ProductID
inner join customers d on a.CustomerID = d.CustomerID
inner join suppliers e on c.SupplierID = e.SupplierID;

/*48. Seleccionar el nombre de la compañía del cliente, 
nombre del contacto, 
el código de la orden de compra, 
la fecha de la orden de compra, el código del producto,cantidad pedida del producto, 
nombre del producto y el nombre de la compañía proveedora, 
usas JOIN.
Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,
además la cantidad pedida del producto debe estar entre 23 y 187.*/
select d.CustomerName, d.ContactName, a.orderid, a.orderdate, c.ProductID, b.Quantity, c.ProductName, e.SupplierName from orders a 
inner join orderdetails b on a.orderid = b.orderid
inner join products c on b.ProductID = c.ProductID
inner join customers d on a.CustomerID = d.CustomerID
inner join suppliers e on c.SupplierID = e.SupplierID
where b.Quantity between 23 and 187
and SUBSTRING(CustomerName, 1, 1) IN ('A', 'B', 'C', 'D', 'E', 'F', 'G');

