
create TABLE users (
    iduser SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio VARCHAR(255),
    discordLink VARCHAR(255),
    website VARCHAR(255),
    youtube VARCHAR(255),
    twitter VARCHAR(255),
    instagram VARCHAR(255),
    facebook VARCHAR(255),
    token VARCHAR(255),
    avatar VARCHAR(255)
);

create TABLE usersToken(
    iduser SERIAL PRIMARY KEY,
    accessToken VARCHAR(255) NOT NULL,
    refreshToken VARCHAR(255) NOT NULL,
    FOREIGN KEY (iduser) REFERENCES users(iduser)
)
create table UsersWallet(
    iduser SERIAL PRIMARY KEY,
    metamask VARCHAR(255),
    walletconnection VARCHAR(255),
    coinbase VARCHAR(255),
    FOREIGN KEY (iduser) REFERENCES users(iduser)
)

create TABLE Collection(
    idcollection SERIAL PRIMARY KEY,
    iduser INTEGER,
    name VARCHAR(255),
    description VARCHAR(255),
    image VARCHAR(255),
    ethername VARCHAR(255),
    originals VARCHAR(255),

    FOREIGN KEY (iduser) REFERENCES users(iduser)
    )

create TABLE nft(
    idnft SERIAL PRIMARY KEY,
    iduser INTEGER ,
    name VARCHAR(255),
    description VARCHAR(255),
    ethername VARCHAR(255),
    originals VARCHAR(255),

    FOREIGN KEY (iduser) REFERENCES users(iduser)
    )
create TABLE tags(
    idtag SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)
create TABLE collectionTags(
    idcollection INTEGER ,
    idtag INTEGER,


    FOREIGN KEY (idcollection) REFERENCES collection(idcollection),
    FOREIGN KEY (idtag) REFERENCES tags(idtag)
);

create TABLE OwnedCollectionUsers(
    idcollection INTEGER,
    iduser INTEGER,

    FOREIGN KEY (iduser) REFERENCES users(iduser),
    FOREIGN KEY (idcollection) REFERENCES collection(idcollection)
);

create TABLE creatoeSales(
    iduser  INTEGER,
    salesNumber INTEGER,
    date TIMESTAMP,
    FOREIGN KEY (iduser) REFERENCES users(iduser)
)
create TABLE categories(
    idcategory SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
)
create TABLE collectionsNft (
    idcollection INTEGER,
    idnft INTEGER,

    FOREIGN KEY (idcollection) REFERENCES collection(idcollection),
    FOREIGN KEY (idnft) REFERENCES nft(idnft)
)

create TABLE usersfollow(
    iduserfollw SERIAL PRIMARY KEY,
    iduser INTEGER,
    idfollow INTEGER,

    FOREIGN KEY (iduser) REFERENCES users(iduser),
)
