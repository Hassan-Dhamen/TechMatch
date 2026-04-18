-- =======================================================
-- TechMatch Database - Milestone 2
-- CIS 423: Web-based Systems
-- Group 9MS02 - Group #4
-- =======================================================

DROP DATABASE IF EXISTS TechMatch;
CREATE DATABASE TechMatch;
USE TechMatch;

-- =======================================================
-- 1. Categories
-- =======================================================
CREATE TABLE Categories (
    category_id   INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

-- =======================================================
-- 2. Products
-- =======================================================
CREATE TABLE Products (
    product_id    INT AUTO_INCREMENT PRIMARY KEY,
    name          VARCHAR(255) NOT NULL,
    brand         VARCHAR(100),
    description   TEXT,
    price         DECIMAL(10,2) NOT NULL,
    rating        DECIMAL(2,1) DEFAULT 0.0 CHECK (rating BETWEEN 0 AND 5),
    picture       VARCHAR(255),
    stock         INT DEFAULT 0 CHECK (stock >= 0),
    category_id   INT,
    FOREIGN KEY (category_id)
        REFERENCES Categories(category_id)
        ON DELETE SET NULL
);

-- =======================================================
-- 3. Specifications
-- =======================================================
CREATE TABLE Specifications (
    spec_id     INT AUTO_INCREMENT PRIMARY KEY,
    product_id  INT NOT NULL,
    spec_name   VARCHAR(100) NOT NULL,
    spec_value  VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id)
        REFERENCES Products(product_id)
        ON DELETE CASCADE
);

-- =======================================================
-- 4. Admins
-- =======================================================
-- NOTE: Passwords are plain text for Milestone 2 only
-- They will be hashed in Milestone 3 (PHP)
CREATE TABLE Admins (
    admin_id   INT AUTO_INCREMENT PRIMARY KEY,
    full_name  VARCHAR(150) NOT NULL,
    email      VARCHAR(150) UNIQUE NOT NULL,
    password   VARCHAR(255) NOT NULL,
    phone      VARCHAR(20)
);

-- =======================================================
-- 5. Orders
-- =======================================================
CREATE TABLE Orders (
    order_id       INT AUTO_INCREMENT PRIMARY KEY,
    customer_name  VARCHAR(150),
    customer_email VARCHAR(150),
    customer_phone VARCHAR(20),
    total_price    DECIMAL(10,2) NOT NULL,
    order_date     DATETIME DEFAULT CURRENT_TIMESTAMP,
    status         ENUM('Pending', 'Completed', 'Cancelled') DEFAULT 'Completed'
);

-- =======================================================
-- 6. Order Items
-- =======================================================
CREATE TABLE OrderItems (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id      INT NOT NULL,
    product_id    INT NOT NULL,
    quantity      INT NOT NULL,
    unit_price    DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id)
        REFERENCES Orders(order_id)
        ON DELETE CASCADE,
    FOREIGN KEY (product_id)
        REFERENCES Products(product_id)
        ON DELETE CASCADE
);

-- =======================================================
-- SAMPLE DATA
-- =======================================================

-- Categories
INSERT INTO Categories (category_name) VALUES
('Laptops'),
('Smartphones'),
('Accessories'),
('Tablets');

-- Products
INSERT INTO Products (name, brand, description, price, rating, picture, stock, category_id) VALUES
('MacBook Pro 14', 'Apple', 'M3 Chip, 16GB RAM, 512GB SSD Space Gray', 7499.00, 4.9, 'macpro.jpg', 15, 1),
('iPhone 15 Pro', 'Apple', 'Natural Titanium, Super Retina XDR Display', 4299.00, 4.8, 'iphone15.jpg', 20, 2),
('Samsung Galaxy S24 Ultra', 'Samsung', 'AI Enhanced, 200MP Camera, 512GB', 4899.00, 4.7, 's24u.jpg', 10, 2),
('iPad Air M2', 'Apple', '11-inch Display, Liquid Retina, 128GB', 2699.00, 4.6, 'ipadair.jpg', 12, 4),
('Sony WH-1000XM5', 'Sony', 'Noise Cancelling Headphones', 1250.00, 4.9, 'sonyh.jpg', 30, 3),
('Dell XPS 13', 'Dell', 'Intel Core Ultra 7, 16GB RAM', 5400.00, 4.5, 'dellxps.jpg', 8, 1),
('Apple Watch Series 9', 'Apple', 'Sport Band', 1750.00, 4.7, 'watch9.jpg', 25, 3),
('Logitech MX Master 3S', 'Logitech', 'Wireless Mouse', 420.00, 4.8, 'logimouse.jpg', 50, 3),
('HP Spectre x360', 'HP', '4K OLED Laptop', 4900.00, 4.4, 'hpspectre.jpg', 7, 1),
('Google Pixel 8 Pro', 'Google', 'AI Camera', 3200.00, 4.6, 'pixel8.jpg', 18, 2),
('AirPods Pro (2nd Gen)', 'Apple', 'Noise Cancellation', 940.00, 4.9, 'airpods.jpg', 40, 3),
('Microsoft Surface Pro 9', 'Microsoft', '2-in-1 Device', 3800.00, 4.3, 'surface.jpg', 10, 4);

-- Specifications
INSERT INTO Specifications (product_id, spec_name, spec_value) VALUES
(1, 'Processor', 'Apple M3'),
(1, 'RAM', '16GB'),
(2, 'Processor', 'A17 Pro'),
(5, 'Battery', '30 Hours');

-- Admins
INSERT INTO Admins (full_name, email, password, phone) VALUES
('Mohammed Abdullah AlKhalifah', 'mohammed@techmatch.com', 'admin123', '0500000001'),
('Mirza Mahdi Aldaw', 'mirza@techmatch.com', 'mirza123', '0500000002'),
('Hassan Abdul Elah AlDhamen', 'hassan@techmatch.com', 'hassan123', '0500000003'),
('Hussain Ibraheem Alromaih', 'hussain@techmatch.com', 'hussain123', '0500000004'),
('Abdullah Ibrahim AlMashar', 'abdullah@techmatch.com', 'abdullah123', '0500000005');

-- Orders
INSERT INTO Orders (customer_name, customer_email, customer_phone, total_price, status) VALUES
('Guest', 'guest1@example.com', '0500000001', 5249.00, 'Completed'),
('Guest', 'guest2@example.com', '0500000002', 7499.00, 'Completed');

-- Order Items
INSERT INTO OrderItems (order_id, product_id, quantity, unit_price) VALUES
(1, 2, 1, 4299.00),
(1, 11, 1, 940.00),
(2, 1, 1, 7499.00);

-- =======================================================
-- INDEXES
-- =======================================================
CREATE INDEX idx_products_category ON Products(category_id);
CREATE INDEX idx_orders_date ON Orders(order_date);
