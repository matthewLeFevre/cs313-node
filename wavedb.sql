
DROP TABLE IF EXISTS dispatch;
DROP TABLE IF EXISTS account_in_party;
DROP TABLE IF EXISTS party;
DROP TABLE IF EXISTS account;
DROP TYPE IF EXISTS state;

CREATE TYPE state AS ENUM ('online', 'away');
CREATE TYPE level AS ENUM ('user', 'admin');
CREATE TABLE account (
  accountId SERIAL NOT NULL,
  accountName VARCHAR(45) NOT NULL,
  accountState state NOT NULL DEFAULT 'online',
  accountPassword VARCHAR(255) NOT NULL,
  accountCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  accountActive TIMESTAMP NULL,
  accountLevel level NOT NULL DEFAULT 'user',
  PRIMARY KEY (accountId)
);

CREATE TABLE party (
  partyId SERIAL NOT NULL,
  partyName VARCHAR(45) NOT NULL DEFAULT 'New party',
  partyCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  accountId int NOT NULL,
  PRIMARY Key (partyId),
  FOREIGN KEY (accountId) REFERENCES account(accountId) ON DELETE CASCADE
);

CREATE TABLE account_in_party (
  account_in_partyId SERIAL NOT NULL,
  accountJoined TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  accountId int NOT NULL,
  partyId int NOT NULL,
  PRIMARY Key (account_in_partyId),
  FOREIGN KEY (accountId) REFERENCES account(accountId) ON DELETE CASCADE,
  FOREIGN KEY (partyId) REFERENCES party(partyId) ON DELETE CASCADE
);

CREATE TABLE dispatch (
  dispatchId SERIAL NOT NULL,
  dispatchCreated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  dispatchText text NOT NULL,
  accountId int NOT NULL,
  partyId int NOT NULL,
  PRIMARY Key (dispatchId),
  FOREIGN KEY (accountId) REFERENCES account(accountId) ON DELETE CASCADE,
  FOREIGN KEY (partyId) REFERENCES party(partyId) ON DELETE CASCADE
);

INSERT INTO account (accountName, accountPassword)
VALUES ('billey', 1234),
       ('sally', 1234),
       ('rick', 1234),
       ('cassey', 1234),
       ('matt', 1234);

INSERT INTO party (partyName, accountId)
VALUES ('sallys party', 2),
        ('matts party', 5);

INSERT INTO account_in_party (accountId, partyId) 
VALUES (1, 1),
       (2, 1),
       (1, 2),
       (2, 2),
       (3, 2),
       (4, 2),
       (5, 2);

INSERT INTO dispatch (accountId, partyId, dispatchText)
VALUES (2, 1, 'How are you doing today billey?'),
       (1, 1, 'I am doin great work is moving forward just like we planned!'),
       (2, 1, 'That is wonderful! See you at the meeting at 12'),
       (5, 2, 'Hello everyone just wanted to let you know I am stuck in traffic and wont make it on time to the meeting.'),
       (3, 2, 'Thanks for letting us know we will have rick cassey get us going.'),
       (4, 2, 'That sounds good.'),
       (2, 2, 'Drive safe'),
       (1, 2, 'See you then!');

SELECT * FROM account;
SELECT * FROM dispatch WHERE accountId = 2;