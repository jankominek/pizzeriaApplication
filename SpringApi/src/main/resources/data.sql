insert into ingredient(id_ingredient, ingredient_name) values (1, 'Pepperoni'),
                                       (2, 'Szynka'),
                                       (3, 'Wołowina'),
                                       (4, 'Wieprzowina'),
                                       (5, 'Kurczak'),
                                       (6, 'Boczek'),
                                       (7, 'Kukurydza'),
                                       (8, 'Mozzarella'),
                                       (9, 'Oliwki'),
                                       (10, 'Jalapeno'),
                                       (11, 'Ananas'),
                                       (12, 'Pieczarki'),
                                       (13, 'Papryka'),
                                       (14, 'Pomidory'),
                                       (15, 'Rukola'),
                                       (16, 'Szpinak'),
                                       (17, 'Kurczak kebab'),
                                       (18, 'Kiełbasa'),
                                       (19, 'Ser corregio'),
                                       (20, 'Ser śródziemnomorski');

insert into dish (id_dish, dish_name) values (1, 'Pizza Kurczak'),
                                        (2, 'Pizza Wiejska'),
                                        (3, 'Pizza Kebab'),
                                        (4, 'Pizza Serowa'),
                                        (5, 'Pizza Grecka'),
                                        (6, 'Pizza Margherita'),
                                        (7, 'Pizza Pepperoni'),
                                        (8, 'Pizza Hawajska'),
                                        (9, 'Pizza Classica'),
                                        (10, 'Pizza Americana'),
                                        (11, 'Pizza Teksas'),
                                        (12, 'Pizza Europejska'),
                                        (13, 'Pizza Supreme'),
                                        (14, 'Pizza Farmerska'),
                                        (15, 'Pizza Mięsna'),
                                        (16, 'Pizza Capricciosa');

insert into dish_ingredient(id_d_i, id_dish, id_ingredient) values (1, 1, 1);

insert into voivodeship(id_voivodeship, voivodeship_name) values (1, 'Wielkopolskie'),
                                                                 (2, 'Mazowieckie');

insert into city(id_city, city_name) values (1, 'Poznań'),
                                            (2, 'Kalisz'),
                                            (3, 'Konin'),
                                            (4, 'Piła'),
                                            (5, 'Leszno'),
                                            (6, 'Luboń'),
                                            (7, 'Warszawa'),
                                            (8, 'Ciechanów'),
                                            (9, 'Radom');
insert into payment(id_payment, type) values (1, 'GOTOWKA'), (2, 'KARTA');
