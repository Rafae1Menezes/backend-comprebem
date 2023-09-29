-- User table
CREATE TABLE User (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  city VARCHAR(255),
  password VARCHAR(255)
);

-- ConsumerUser table
CREATE TABLE ConsumerUser (
  user_id INT PRIMARY KEY,
  FOREIGN KEY (user_id) REFERENCES User(id)
);

-- SupermarketUser table
CREATE TABLE SupermarketUser (
  user_id INT PRIMARY KEY,
  FOREIGN KEY (user_id) REFERENCES User(id)
);

-- Product table
CREATE TABLE Product (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10, 2),
  description VARCHAR(255),
  category VARCHAR(255),
  owner_id INT,
  FOREIGN KEY (owner_id) REFERENCES SupermarketUser(user_id)
);

-- Catalog table
CREATE TABLE Catalog (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  description VARCHAR(255),
  start_date DATE,
  end_date DATE,
  is_active BOOLEAN,
  owner_id INT,
  FOREIGN KEY (owner_id) REFERENCES SupermarketUser(user_id)
);

-- CatalogProduct table (association table between Catalog and Product)
CREATE TABLE CatalogProduct (
  catalog_id INT,
  product_id INT,
  PRIMARY KEY (catalog_id, product_id),
  FOREIGN KEY (catalog_id) REFERENCES Catalog(id),
  FOREIGN KEY (product_id) REFERENCES Product(id)
);

-- Friendship table
CREATE TABLE Friendship (
  user_id1 INT,
  user_id2 INT,
  status VARCHAR(255),
  PRIMARY KEY (user_id1, user_id2),
  FOREIGN KEY (user_id1) REFERENCES ConsumerUser(user_id),
  FOREIGN KEY (user_id2) REFERENCES ConsumerUser(user_id)
);

-- FriendshipRequest table
CREATE TABLE FriendshipRequest (
  id INT PRIMARY KEY,
  sender_user_id INT,
  receiver_user_id INT,
  status VARCHAR(255),
  FOREIGN KEY (sender_user_id) REFERENCES ConsumerUser(user_id),
  FOREIGN KEY (receiver_user_id) REFERENCES ConsumerUser(user_id)
);

-- ShoppingList table
CREATE TABLE ShoppingList (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  consumer_user_id INT,
  FOREIGN KEY (consumer_user_id) REFERENCES ConsumerUser(user_id)
);

-- ShoppingListProduct table (many-to-many relationship)
CREATE TABLE ShoppingListProduct (
  shopping_list_id INT,
  product_id INT,
  PRIMARY KEY (shopping_list_id, product_id),
  FOREIGN KEY (shopping_list_id) REFERENCES ShoppingList(id),
  FOREIGN KEY (product_id) REFERENCES Product(id)
);

-- SharedList table (many-to-many relationship)
CREATE TABLE SharedList (
  shopping_list_id INT,
  friend_user_id INT,
  PRIMARY KEY (shopping_list_id, friend_user_id),
  FOREIGN KEY (shopping_list_id) REFERENCES ShoppingList(id),
  FOREIGN KEY (friend_user_id) REFERENCES ConsumerUser(user_id)
);
