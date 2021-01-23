CREATE SCHEMA IF NOT EXISTS `s16061-tin`;
CREATE TABLE `Order` (
    id int  NOT NULL,
    User_id int  NOT NULL,
    ProductList_id int  NOT NULL,
    Payment_id int  NOT NULL,
    price double  NULL,
    CONSTRAINT Order_pk PRIMARY KEY (id)
) ;

-- Table: Payment
CREATE TABLE Payment (
    id int  NOT NULL,
    type int  NOT NULL,
    price double  NOT NULL,
    datePayment datetime  NOT NULL,
    CONSTRAINT Payment_pk PRIMARY KEY (id)
) ;

-- Table: Product
CREATE TABLE Product (
    id int  NOT NULL,
    name varchar(50)  NOT NULL,
    price int  NOT NULL,
    CONSTRAINT Product_pk PRIMARY KEY (id)
) ;

-- Table: ProductList
CREATE TABLE ProductList (
    id int  NOT NULL,
    Product_id int  NOT NULL,
    quantity int  NOT NULL,
    CONSTRAINT ProductList_pk PRIMARY KEY (id)
) ;

-- Table: User
CREATE TABLE `User` (
    id int  NOT NULL,
    Name varchar(50)  NOT NULL,
    Surname varchar(50)  NOT NULL,
    phone int  NOT NULL,
    email varchar(30)  NOT NULL,
    CONSTRAINT User_pk PRIMARY KEY (id)
) ;

-- foreign keys
--  ProductList (table: Order)
ALTER TABLE `Order` ADD CONSTRAINT Order_ProductList
    FOREIGN KEY (ProductList_id)
    REFERENCES ProductList (id);

--  Table_25 (table: Order)
ALTER TABLE `Order` ADD CONSTRAINT Order_Table_25
    FOREIGN KEY (Payment_id)
    REFERENCES Payment (id);

--  User (table: Order)
ALTER TABLE `Order` ADD CONSTRAINT Order_User
    FOREIGN KEY (User_id)
    REFERENCES `User` (id);

--  tList_Product (table: ProductList)
ALTER TABLE ProductList ADD CONSTRAINT ProductList_Product
    FOREIGN KEY (Product_id)
    REFERENCES Product (id);