import { AppDataSource } from '../connection';

async function example() {
  await AppDataSource.initialize();

  await AppDataSource.query(
    "INSERT INTO `user` VALUES (1,'rafael','email@gmail.com','manhuacu','123456',''),(2,'Coelho Diniz','email2@gmail.com','manhuaçu','123asd','coelhodiniz.jpg'),(3,'Soares','email@gmail.com','manhuaçu','123456','soares.jpg'),(4,'Barbosa','email@gmail.com','manhuaçu','123456','barbosa.jpg');",
  );

  await AppDataSource.query(
    'INSERT INTO `supermarket_user` VALUES (2),(3),(4);',
  );

  await AppDataSource.query('INSERT INTO `consumer_user` VALUES (1);');

  await AppDataSource.query(
    "INSERT INTO `product` VALUES (1,'Arroz Tio João - 5kg',25.99,'Promoção para 10 até pacotes.','pereciveis','arroz.png'),(2,'Feijao Kicaldo - 2k',25.99,'Enquanto durar o estoque.','pereciveis','feijao.png'),(3,'Óleo de Soja - 900ml',25.99,'Promoção para 10 pacotes.','pereciveis','oleo.png'),(4,'Pasta de dente - Tandy',25.99,'Promoção para 10 até pacotes.','higiene','pasta.png'),(5,'Sampoo - Seda',25.99,'Enquanto durar o estoque.','higiene','shampoo.png'),(6,'Sabonete Phebo',2.50,'Promoção para 10 pacotes.','higiene','sabonete.png'),(7,'Sabão em pó Tixan',18.80,'Promoção para 10 até pacotes.','limpeza','sabao.png'),(8,'Veja Multiuso',7.80,'Enquanto durar o estoque.','limpeza','veja.png'),(9,'Assolan',4.99,'Promoção para 10 até pacotes.','limpeza','assolan.png'),(10,'Alface',3.99,'Enquanto durar o estoque.','hortifruit','alface.png'),(11,'Bandeja de Morangos',9.99,'Promoção para 10 até pacotes.','hortifruit','morango.png'),(12,'Batata Inglesa',8.50,'Enquanto durar o estoque.','hortifruit','batata.png');",
  );

  await AppDataSource.query(
    "INSERT INTO `shopping_list` VALUES (1,'Bebidas e petiscos',1),(2,'Presentes',1),(3,'Imperdível',1),(4,'Feira',1),(5,'Para casa',1),(6,'Congelados',1);",
  );

  await AppDataSource.query('INSERT INTO `ShoppingListProduct` VALUES (1,1);');

  await AppDataSource.query(
    "INSERT INTO `catalog` VALUES (1,'promoção','catalogo de promoção','2023-01-01 00:00:00','2023-12-12 00:00:00',1,2),(2,'ofertas','catalogo de promoção','2023-01-01 00:00:00','2023-12-12 00:00:00',1,3),(3,'catalogo','catalogo de promoção','2023-01-01 00:00:00','2023-12-12 00:00:00',1,4);",
  );

  await AppDataSource.query(
    'INSERT INTO `CatalogProduct` VALUES (1,1),(1,6),(1,7),(1,8),(1,12),(2,2),(2,4),(2,10),(3,3),(3,5),(3,9),(3,11);',
  );

  await AppDataSource.destroy();
}

example().then(() => console.log('Data seeded with success!'));
