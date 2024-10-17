-- 1.  Seleccionar los clientes que viven en el país de "usa"
select * from customers where country = 'Usa';
      
-- 2.  Seleccionar los proveedores que viven en la ciudad de "BERLIN"
select * from suppliers where city = 'Berlin';
    
-- 3.  Seleccionar los empleados con código 3,5 y 8
select * from employees where EmployeeID in (3,5,8);
    
-- 4.  Seleccionar los productos que tienen stock mayor que cero y son del proveedor 1,3 y 5
select * from products where unit > 0 and supplierID in (1,3,5);
    
-- 5.  Seleccionar los productos con precio mayor o igual a 20 y menor o igual a 90
select * from products where price>= 20 and price<= 90;
    
-- 6.  Mostrar las órdenes de compra entre las fechas 01/01/1997 al 15/07/1997
select * from orders where OrderDate between '1997-01-01' and '1997-07-15';
    
-- 7.  Mostrar las órdenes de compra hechas en el año 1997, que pertenecen a los empleados con códigos 1 ,3 ,4 ,8
select * from orders where year(OrderDate) ='1997' and employeeId in (1,3,4,8);
    
-- 8.  Mostrar las ordenes hechas en el año 1996
select * from orders where year(OrderDate) ='1996';

-- 9.  Mostrar las ordenes hechas en el año 1997 ,del mes de abril
select * from orders where year(OrderDate) ='1997' and month(OrderDate)='4';

-- 10. Mostrar las ordenes hechas el primero de todos los meses, del año 1998
select * from orders where year(OrderDate) ='1998' and day(OrderDate)='1';

-- 11. Mostrar todos los clientes que no tienen fax
select * from customers; -- no hay el campo fax
    
-- 12. Mostrar todos los clientes que tienen fax
select * from customers; -- no hay el campo fax
    
-- 13. Mostrar el nombre del producto, el precio, el stock y el nombre de la categoría a la que pertenece.
select ProductName, price, unit, CategoryName 
from products
inner join categories on products.CategoryID = categories.CategoryID;
            
-- 14. Mostrar el nombre del producto, el precio producto, el código del proveedor y el nombre de la compañía proveedora.
select ProductName, price, products.SupplierID, SupplierName 
from products
inner join suppliers on products.SupplierID = suppliers.SupplierID;
         
-- 15. Mostrar el número de orden, el código del producto, el precio, la cantidad y el total pagado por producto.
select orderdetails.OrderID, orderdetails.ProductID, Price,Quantity, price*Quantity as totalPagado
from orderdetails 
inner join products on products.ProductID= orderdetails.ProductID
order by orderdetails.OrderID;

-- 16. Mostrar el número de la orden, fecha, código del producto, precio, código del empleado y su nombre completo.
select orderdetails.OrderID, orders.OrderDate, orderdetails.ProductID, Price, orders.EmployeeID, concat(employees.FirstName, ' ', employees.LastName) as NombreCompleto
from orderdetails 
inner join orders on orders.OrderID= orderdetails.OrderID
inner join products on products.ProductID= orderdetails.ProductID
inner join employees on employees.EmployeeID= orders.EmployeeID
order by orderdetails.OrderID;
         
-- 17. Mostrar los 10 productos con menor stock
select * from products order by unit limit 10;
    
-- 18. Mostrar los 10 productos con mayor stock
select * from products order by unit desc limit 10;
    
-- 19. Mostrar los 10 productos con menor precio
select * from products order by Price limit 10;
    
-- 20. Mostrar los 10 productos con mayor precio
select * from products order by Price desc limit 10;
    
-- 21. Mostrar los 10 productos más baratos
select * from products order by Price limit 10;
    
-- 22. Mostrar los 10 productos más caros
select * from products order by Price desc limit 10;
    
-- 23. Seleccionar todos los campos de la tabla clientes,ordenar por compania
select * from customers order by CustomerName;
    
-- 24. Seleccionar todos los campos de clientes,cuya compania empiece con la letra B y pertenezcan a UK ,ordenar por nombre de la compania
select * from customers where CustomerName like 'b%' and Country = 'uk' order by CustomerName;
    
-- 25. Seleccionar todos los campos de productos de las categorias 1,3 y 5,ordenar por categoria
select * from products where CategoryID in (1,3,5) order by CategoryID;
    
-- 26. Seleccionar los productos cuyos precios unitarios estan entre 50 y 200
select * from products where price between 50 and 200;
    
-- 27. Visualizar el nombre y el id de la compania del cliente,fecha,precio unitario y producto de la orden
select customers.CustomerName, customers.CustomerID, orders.OrderDate, products.Price, products.ProductName
from orderdetails 
inner join orders on orders.OrderID= orderdetails.OrderID
inner join products on products.ProductID= orderdetails.ProductID
inner join customers on customers.CustomerID= orders.CustomerID
order by orderdetails.OrderID;

-- 28. Visualizar el nombre de la categoria y el numero de productos que hay por cada categoria.
select categories.CategoryName, count(products.CategoryID) as cantProductos
from categories
inner join products on products.CategoryID= categories.CategoryID
group by categories.CategoryID;
    
-- 29. Seleccionar los 5 productos mas vendidos
select products.ProductName, count(products.ProductID) as cantVendida
from products
inner join orderdetails on orderdetails.ProductID= products.ProductID
group by products.ProductID
order by cantVendida desc limit 5;

-- 30. Seleccionar los jefes de los empleados
-- no hay tabla de jefes

-- 31. Obtener todos los productos cuyo nombre comienzan con M y tienen un precio comprendido entre 28 y 129
select * from products where ProductName like 'm%' and price between 28 and 129;
    
-- 32. Obtener todos los clientes del Pais de USA,Francia y UK
select * from customers where Country in ('USA','France','UK');
    
-- 33. Obtener todos los productos descontinuados o con stock cero.
select * from products where unit = 0;
    
-- 34. Obtener todas las ordenes hechas por el empleado King Robert
select OrderID, CustomerID, orders.EmployeeID, employees.FirstName, employees.LastName from orders
inner join employees on employees.EmployeeID = orders.EmployeeID
where employees.FirstName = 'Robert' and employees.LastName = 'King';

-- 35. Obtener todas las ordenes por el cliente cuya compania es "Que delicia"
select OrderID, orders.CustomerID, customers.CustomerName, OrderDate from orders
inner join customers on customers.CustomerID = orders.CustomerID
where customers.CustomerName = 'Que delicia';
    
-- 36. Obtener todas las ordenes hechas por el empleado King Robert,Davolio Nancy y Fuller Andrew
select OrderID, CustomerID, orders.EmployeeID, employees.FirstName, employees.LastName from orders
inner join employees on employees.EmployeeID = orders.EmployeeID
where employees.FirstName in ('Robert','Nancy','Andrew') and employees.LastName in ('King','Davolio','Fuller');
    
-- 37. Obtener todos los productos(codigo,nombre,precio,stock) de la orden 10257
select o.ProductID, p.ProductName, p.Price, p.Unit from orderdetails o
inner join products p on p.ProductID=o.ProductID
where OrderID = 10257;
    
-- 38. Obtener todos los productos(codigo,nombre,precio,stock) de las ordenes hechas desde 1997 hasta la fecha de hoy.
select od.ProductID, p.ProductName, p.Price, p.Unit, OrderDate from orderdetails od
inner join products p on p.ProductID=od.ProductID
inner join orders o on o.OrderID =od.OrderID
where year(OrderDate) >= 1997;

-- 39. Calcular los 15 productos mas caros
select * from products order by price desc limit 15;
    
-- 40. Calcular los 5 productos mas baratos
select * from products order by price limit 5;
    
-- 41. Obtener el nombre de todas las categorias y los nombres de sus productos,precio y stock.
select CategoryName, ProductName, Price, Unit from products
inner join categories on categories.CategoryID = products.CategoryID;
    
-- 42. Obtener el nombre de todas las categorias y los nombres de sus productos,solo los productos que su nombre no comience con la letra  P
select CategoryName, ProductName, Price, Unit from products
inner join categories on categories.CategoryID = products.CategoryID
where ProductName not like('p%')
order by ProductName;
        
-- 43. Calcular el stock de productos por cada categoria.Mostrar el nombre de la categoria y el stock por categoria.
select CategoryName, sum(Unit) from products
inner join categories on categories.CategoryID = products.CategoryID
group by CategoryName;

-- 44. Obtener el Nombre del cliente,Nombre del Proveedor,Nombre del empleado y el nombre de los productos que estan en la orden 10794
select CustomerName, SupplierName, employees.FirstName, ProductName from orderdetails
inner join orders on orders.OrderID = orderdetails.OrderID
inner join products on products.ProductID= orderdetails.ProductID
inner join customers on customers.CustomerID = orders.CustomerID
inner join employees on employees.EmployeeID = orders.EmployeeID
inner join suppliers on suppliers.SupplierID= products.SupplierID
where orderdetails.OrderID = 10794;

-- 45. Mostrar el numero de ordenes de cada uno de los clientes por año,luego ordenar codigo del cliente y el año.
select customers.CustomerName, year(orders.OrderDate), count(*) from orders
inner join orderdetails on orderdetails.OrderID = orders.OrderID
inner join customers on customers.CustomerID = orders.CustomerID
group by year(orders.OrderDate),customers.CustomerName
order by 1,2;
    
-- 46. Contar el numero de ordenes que se han realizado por años y meses ,luego debe ser ordenado por año y por mes.
select year(orderdate)as Año, month(orderdate) as Mes, count(*) as CantOrdenes from orders
group by month(orderdate),year(orderdate)
order by 1,2;

-- 47. Seleccionar el nombre de la compañía del cliente,él código de la orden de compra,la fecha de la orden de compra, código del producto, cantidad pedida del producto,nombre del producto, el nombre de la compañía proveedora y la ciudad del proveedor ,usar Join
select customers.CustomerName, orders.OrderID, orders.OrderDate, products.ProductID, orderdetails.Quantity ,products.ProductName,suppliers.SupplierName,suppliers.city from orders 
inner join orderdetails on orders.orderid = orderdetails.orderid
inner join products on orderdetails.ProductID = products.ProductID
inner join customers on orders.CustomerID = customers.CustomerID
inner join suppliers on products.SupplierID = suppliers.SupplierID;

-- 48. Seleccionar el nombre de la compañía del cliente, 
-- nombre del contacto, el código de la orden de compra, 
-- la fecha de la orden de compra, el código del producto,
-- cantidad pedida del producto, nombre del producto y el 
-- nombre de la compañía proveedora, usas JOIN.
-- Solamente las compañías proveedoras que comienzan con la letra de la A hasta la letra G,además 
-- la cantidad pedida del producto debe estar entre 23 y 187.
select customers.CustomerName, customers.ContactName, orders.orderid, orders.orderdate, products.ProductID, orderdetails.Quantity, products.ProductName, suppliers.SupplierName from orders
inner join orderdetails on orders.orderid = orderdetails.orderid
inner join products on orderdetails.ProductID = products.ProductID
inner join customers on orders.CustomerID = customers.CustomerID
inner join suppliers on products.SupplierID = suppliers.SupplierID
where orderdetails.Quantity between 23 and 187
and SUBSTRING(CustomerName, 1, 1) IN ('A', 'B', 'C', 'D', 'E', 'F', 'G');
