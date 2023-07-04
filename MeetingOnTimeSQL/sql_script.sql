USE MettingOnTime_db;



INSERT INTO PERMISSION (statut_PERMISSION)
VALUES 
    ('user'),
    ('moderator'),
    ('admin'),
    ('developer');


INSERT INTO USER (first_name_USER, last_name_USER, num_phone_USER, email_USER, id_PERMISSION)
VALUES 
    ('Leya', 'PRINCESS', '0673773556', 'naboo@senat.galactic.gouv', 1),
    ('Klarc', 'KENT', '0325246600', 'super.man@krypto.hero', 2),
    ('Marguaux', 'JEUNEBERGERE', '0924282647', 'la.ferme@dantan.meuh', 1),
    ('Kevin', 'PAILLETTE', '0942228647', 'ma-bague@pate_croute.lol', 3),
    ('Jessica', 'POTE', '497382016423', 'jessica@net.frigo', 4);


INSERT INTO ADRESSE (num_rue_Adresse, rue_Adresse, code_postale_Adresse, Ville_Adresse, pays_Adresse)
VALUES 
    ('1', 'Rue tabagua', '17000', 'Ici', 'Quelquepart'),
    ('45', 'Rue Fusse', '75000', 'Pinpon', 'QuelquePart'),
    ('14', 'Rue Stine', '89000', 'Kafarnaum', 'Là-Bas'),
    ('17', 'Rue de la Vie', '01890', 'BourgBressant', 'AlautreboutDuMonde'),
    ('69', 'Rue Sans Dessus-Dessous', '69069', 'TrouPerdus', 'Là-Bas');


INSERT INTO SPECIALITE (title_SPECIALITE, decription_SPECIALITE)
VALUES 
    ('Généraliste', 'S''occupe de tout et de rien. 5eme roue du carrosse'),
    ('Cardiologue', 'Fait attention à votre petit coeur tout moux'),
    ('Pneumologue', 'Inspirez - expirez'),
    ('Allergologue', 'A un sacré Bouleau, vous offre un bol d''air frais'),
    ('Gynécologue', 'Un explorateur des Monts Inconnus');

INSERT INTO RENDEZ_VOUS (title_RENDEZ_VOUS, dt_time_start_RENDEZ_VOUS, dt_time_end_RENDEZ_VOUS, confirm, content_RENDEZ_VOUS)
VALUES 
    ('Rendez-vous de Routine', '2023-04-15 14:04:55', '2023-04-15 15:04:55', true, 'Prendre ses médicaments'),
    ('Consultation Cardiologue', '2023-04-17 09:04:55', '2023-04-17 10:04:55', false, 'Vérifier le rythme cardiaque'),
    ('Consultation Pneumologue', '2023-04-19 16:04:55', '2023-04-19 17:04:55', false, 'Effectuer une radiographie des poumons'),
    ('Consultation Généraliste', '2023-04-21 10:04:55', '2023-04-21 11:04:55', true, 'Amène ses lunettes'),
    ('Premier Rendez-vous', '2023-04-30 14:04:36', '2023-04-30 15:04:36', false, 'Première visite');



INSERT INTO Localiser (id_ADRESSE, id_USER)
VALUES 
    (1, 1),
    (2, 2),
    (3, 3),
    (4, 4),
    (5, 5);


INSERT INTO Posseder (id_USER, id_SPECIALITE, dt_diplome_Posseder)
VALUES 
    (2, 1, '2002-01-25'),
    (2, 3, '2007-05-20'),
    (4, 2, '2001-04-21'),
    (5, 5, '2006-04-15');


INSERT INTO Prendre (id_PATIENT, id_PRATICIEN, id_RENDEZ_VOUS)
VALUES 
    ( '1', '2', '1'),
    ( '3', '5', '5'),
    ( '3', '2', '4'),
    ( '1', '4', '3');