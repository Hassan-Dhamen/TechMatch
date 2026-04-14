CREATE DATABASE TechMatch;
USE TechMatch;

CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL
);

CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    rating DECIMAL(2, 1) DEFAULT 0.0,
    image_url VARCHAR(255),
    stock INT DEFAULT 0,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Categories(category_id) ON DELETE SET NULL
);

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('admin', 'customer') DEFAULT 'customer'
);

CREATE TABLE Cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
);

INSERT INTO Categories (category_name) VALUES 
('Laptops'), ('Smartphones'), ('Accessories'), ('Tablets');

INSERT INTO Products (name, description, price, rating, image_url, stock, category_id) VALUES 
('MacBook Pro 14', 'M3 Chip, 16GB RAM, 512GB SSD Space Gray', 7499.00, 4.9, 'macpro.jpg', 15, 1),
('iPhone 15 Pro', 'Natural Titanium, Super Retina XDR Display', 4299.00, 4.8, 'iphone15.jpg', 20, 2),
('Samsung Galaxy S24 Ultra', 'AI Enhanced, 200MP Camera, 512GB', 4899.00, 4.7, 's24u.jpg', 10, 2),
('iPad Air M2', '11-inch Display, Liquid Retina, 128GB', 2699.00, 4.6, 'ipadair.jpg', 12, 4),
('Sony WH-1000XM5', 'Industry Leading Noise Cancelling Headphones', 1250.00, 4.9, 'sonyh.jpg', 30, 3),
('Dell XPS 13', 'Intel Core Ultra 7, 16GB RAM, Touchscreen', 5400.00, 4.5, 'dellxps.jpg', 8, 1),
('Apple Watch Series 9', 'Starlight Aluminum Case, Sport Band', 1750.00, 4.7, 'watch9.jpg', 25, 3),
('Logitech MX Master 3S', 'Advanced Wireless Mouse, Silent Clicks', 420.00, 4.8, 'logimouse.jpg', 50, 3),
('HP Spectre x360', 'Convertible Laptop, 4K OLED, Intel i7', 4900.00, 4.4, 'hpspectre.jpg', 7, 1),
('Google Pixel 8 Pro', 'Advanced AI Camera, Obsidian Black', 3200.00, 4.6, 'pixel8.jpg', 18, 2),
('AirPods Pro (2nd Gen)', 'Active Noise Cancellation, USB-C', 940.00, 4.9, 'airpods.jpg', 40, 3),
('Microsoft Surface Pro 9', '2-in-1 Tablet/Laptop, Intel i5, 256GB', 3800.00, 4.3, 'surface.jpg', 10, 1);

INSERT INTO Users (full_name, email, password, phone, role) VALUES 
('Mirza Aldaw', 'mirza@gmail.com', 'pass123', '0501234567', 'customer'),
('Mohammed Khalifa', 'admin@gmail.com', 'admin123', '0500000000', 'admin');
