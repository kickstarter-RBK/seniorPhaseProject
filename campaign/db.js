const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const URI =
  "mongodb+srv://maysqunaibi:123456789rbk@cluster0-gtcao.mongodb.net/kickstarter?retryWrites=true&w=majority";

const ItemSchema = Schema({
  title: String,
  subTitle: String,
  location: String,
  img: String,
  video: String,
  fundingGoal: Number,
  targetLaunchDate: Date,
  campaignDuration: Number,
  rewards: [
    {
      title: String,
      pledgeAmount: Number,
      description: String,
      estimatedDelivery: String,
      numberofBackers: Number,
      rewardQuantity: Number
    }
  ],
  projImg1: String,
  projDescription1: String,
  projImg2: String,
  projImg20: String,
  projDescription2: String,
  projImg3: String,
  projImg30: String,
  projImg31: String,
  projImg32: String,
  projDescription3: String,
  projImg4: String,
  projDescription4: String,
  projImg5: String,
  projImg50: String,
  projImg51: String,
  projImg52: String,
  projImg53: String,
  projDescription5: String,
  projDescription50: String,
  projImg6: String,
  projImg60: String,
  projDescription6: String,
  projDescription60: String,
  projDescription61: String,
  projDescription62: String,
  projDescription63: String,
  projImg7: String
});

const Item = mongoose.model("item", ItemSchema);

mongoose.connect(URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("We are connected");
});
let pSave = () => {
  var project = Item({
    title: project.title,
    subTitle: project.subTitle,
    location: project.location,
    img: project.img,
    video: project.video,
    fundingGoal: project.fundingGoal,
    targetLaunchDate: project.targetLaunchDate,
    campaignDuration: project.campaignDuration,
    rewards: [
      {
        title: project.rewards[0].title,
        pledgeAmount: project.rewards[0].pledgeAmount,
        description: project.rewards[0].description,
        estimatedDelivery: project[0].rewards.estimatedDelivery,
        shipping: project.rewards[0].numberofBackers,
        rewardQuantity: project[0].rewardQuantity
      }
    ],
    projImg: project.projImg,
    projDescription: project.projDescription,
    projImg1: project.projImg1,
    projDescription1: project.projDescription1,
    projImg2: project.projImg2,
    projImg20: project.projImg20,
    projDescription2: project.projDescription2,
    projImg3: project.projImg3,
    projImg30: project.projImg30,
    projImg31: project.projImg31,
    projImg32: project.projImg32,
    projDescription3: project.projDescription3,
    projImg4: project.projImg4,
    projDescription4: project.projDescription4,
    projImg5: project.projImg5,
    projImg50: project.projImg50,
    projImg51: project.projImg51,
    projImg52: project.projImg52,
    projImg53: project.projImg53,
    projDescription5: project.projDescription5,
    projDescription50: project.projDescription50,
    projImg6: project.projImg6,
    projImg60: project.projImg60,
    projDescription6: project.projDescription6,
    projDescription60: project.projDescription60,
    projDescription61: project.projDescription61,
    projDescription62: project.projDescription62,
    projDescription63: project.projDescription63,
    projImg7: project.projImg7
  });
  project.save(function(err, suc) {
    if (err) {
      console.log("error accured");
    } else {
      console.log("succsessed savign");
    }
  });
};

module.exports.Item = Item;
module.exports.pSave = pSave;
