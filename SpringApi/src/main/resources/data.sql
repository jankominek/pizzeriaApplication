--
-- CREATE FUNCTION myFunccc()
--     returns INTEGER
-- deterministic
-- BEGIN
-- return 5;
-- END

insert into voivodeship(voivodeship_id, voivodeship_name) values (1, 'Wielkopolskie'),
                                                                 (2, 'Mazowieckie');

insert into city(city_id, city_name) values (1, 'Poznań'),
                                            (2, 'Kalisz'),
                                            (3, 'Konin'),
                                            (4, 'Piła'),
                                            (5, 'Leszno'),
                                            (6, 'Luboń'),
                                            (7, 'Warszawa'),
                                            (8, 'Ciechanów'),
                                            (9, 'Radom');

insert into employee(employee_id, email, last_name, name, password, typ, city_id, veivodeship)
values (1, 'admin@gmail.com', 'admin', 'admin', 'admin', 'ADMIN', 1, 1),
       (2, 'kacper@gmail.com', 'szaur', 'kacper', 'kacper', 'ADMIN', 3, 1),
        (3, 'janek@gmail.com', 'kominek', 'janek', 'janek', 'ADMIN', 1, 1);

insert into ingredient(ingredient_id, ingredient_name, ingredient_price) values (1, 'Pepperoni', 5.50),
                                       (2, 'Szynka', 5.50),
                                       (3, 'Wołowina', 5.50),
                                       (4, 'Wieprzowina', 5.50),
                                       (5, 'Kurczak', 5.50),
                                       (6, 'Boczek', 5.50),
                                       (7, 'Kukurydza', 5.50),
                                       (8, 'Mozzarella', 5.50),
                                       (9, 'Oliwki', 5.50),
                                       (10, 'Jalapeno', 5.50),
                                       (11, 'Ananas', 5.50),
                                       (12, 'Pieczarki', 5.50),
                                       (13, 'Papryka', 5.50),
                                       (14, 'Pomidory',5.50 ),
                                       (15, 'Rukola', 5.50),
                                       (16, 'Szpinak', 5.50),
                                       (17, 'Kurczak kebab', 5.50),
                                       (18, 'Kiełbasa', 5.50),
                                       (19, 'Ser corregio', 5.50),
                                       (20, 'Ser śródziemnomorski',5.50 ),
                                        (21, 'Czerwona cebula', 5.50);

insert into dish (dish_id, dish_name, dish_price) values (1, 'Pizza Kurczak', 43.99),
                                        (2, 'Pizza Wiejska', 48.99 ),
                                        (3, 'Pizza Kebab', 48.99 ),
                                        (4, 'Pizza Serowa',48.99  ),
                                        (5, 'Pizza Grecka', 48.99 ),
                                        (6, 'Pizza Margherita',38.99  ),
                                        (7, 'Pizza Pepperoni', 43.99 ),
                                        (8, 'Pizza Hawajska', 43.99 ),
                                        (9, 'Pizza Classica', 43.99 ),
                                        (10, 'Pizza Americana', 43.99 ),
                                        (11, 'Pizza Teksas', 48.99 ),
                                        (12, 'Pizza Europejska', 48.99 ),
                                        (13, 'Pizza Hot Pepperoni', 48.99 ),
                                        (14, 'Pizza Supreme', 48.99 ),
                                        (15, 'Pizza Farmerska', 48.99 ),
                                        (16, 'Pizza Mięsna', 48.99 ),
                                        (17, 'Pizza Capricciosa', 48.99 );

insert into dish_ingredient(dish_id, ingredient_id) values (1, 5),
                                                           (1, 7),
                                                           (1, 8),
                                                           (2, 12),
                                                           (2, 18),
                                                           (2, 7),
                                                           (2, 8),
                                                           (2, 21),
                                                           (3, 17),
                                                           (3, 8),
                                                           (3, 21),
                                                           (4, 8),
                                                           (4, 19),
                                                           (5, 20),
                                                           (5, 9),
                                                           (5, 8),
                                                           (6, 8),
                                                           (7, 1),
                                                           (7, 8),
                                                           (8, 8),
                                                           (8, 11),
                                                           (8, 2),
                                                           (9, 2),
                                                           (9, 8),
                                                           (9, 12),
                                                           (10, 12),
                                                           (10, 8),
                                                           (11, 5),
                                                           (11, 21),
                                                           (11, 8),
                                                           (12, 3),
                                                           (12, 2),
                                                           (12, 12),
                                                           (12, 8),
                                                           (13, 1),
                                                           (13, 8),
                                                           (13, 10),
                                                           (13, 21),
                                                           (14, 3),
                                                           (14, 1),
                                                           (14, 21),
                                                           (14, 12),
                                                           (14, 8),
                                                           (15, 5),
                                                           (15, 21),
                                                           (15, 12),
                                                           (15, 8),
                                                           (16, 3),
                                                           (16, 4),
                                                           (16, 1),
                                                           (16, 8),
                                                           (17, 2),
                                                           (17, 12),
                                                           (17, 14),
                                                           (17, 9),
                                                           (17, 8);


insert into payment(payment_id, type) values (1, 'GOTÓWKA'), (2, 'KARTA');



