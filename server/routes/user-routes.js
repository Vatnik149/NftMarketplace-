const Router = require('express');
const userController = require('../controllers/user-controller');
const nftController = require('../controllers/nft-controller');
const collectionController = require('../controllers/collection-controller');
const creatorsController = require('../controllers/creators-contoller');
const categoriesController = require('../controllers/categries-controller');
const mailController = require('../controllers/mail-controller');

require('dotenv').config();

const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/getOneuser", userController.getOneUser);

router.get("/getnfts", nftController.getNfts);
router.post("/createnft", nftController.createNft);
router.put("/updatenft", nftController.updateNft);
router.post("/getonenft", nftController.getOneNft);

router.post("/getusernft", nftController.getUserNFt);

router.get("/getcollections", collectionController.getCollection);
router.post("/createcollection", collectionController.createCollection);
router.put("/updatecollection", collectionController.updateCollection);
router.get("/getonecollection", collectionController.getOneCollection);
router.post("/getusercollection", collectionController.getUserCollection);

router.post("/getNftByName", nftController.getNftByName);
router.post("/getCollectionByName", collectionController.getCollectionByName);

router.post("/createcreatorsales", creatorsController.createCreatorsSales);
router.get("/topcreators", creatorsController.getTopCreatorsSales);
router.get("/topcreatorstoday", creatorsController.getTopCreatorsSalesToday);
router.get("/topcreatorsweek", creatorsController.getTopCreatorsSalesPastWeek);
router.get("/topcreatorsmonth", creatorsController.getTopCreatorsSalesPastMonth);


router.post("/createCategory", categoriesController.createCategories);
router.get("/topcreators", categoriesController.getallCat);

router.post("/sendMail", mailController.sendmail);

router.post("/followuser", userController.followUser);
router.post("/deletefollow", userController.deleteFollowUser);
router.post("/getuserfollow", userController.getAllUsersFollow);



module.exports = router;
