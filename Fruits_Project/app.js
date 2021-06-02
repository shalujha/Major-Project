const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/PersonDB",{useNewUrlParser:true},{useUnifiedTopology:true});
// defining the structure of data that we will put into table/Collection/model

const FruitSchema=new mongoose.Schema({
  name:String,
  ratings:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});
const PersonSchema=new mongoose.Schema({
  name :{
    type: String,
    required:[true,"Please check your data entry! no name specified"]
  },
  Age:Number,
  Favourite_Fruit:FruitSchema,
});

const Person_Collection=mongoose.model('Person_Collection',PersonSchema);
const Fruit=mongoose.model('Fruit',FruitSchema);
const PineApple=new Fruit({
  name:"PineApple",
  ratings:7,
  review:"Great Fruit Ever !!",}
)
//
const person=new Person_Collection({
    name:'Arpit',
    Age:3,
    Favourite_Fruit:PineApple,
  });
// const Ayush=new Person_Collection({
//     name:"Ayush",
//     Age:18
//   });
// const Siddharth=new Person_Collection(
//   {
//   name:"Siddharth",
//   Age:22
//   }
// );

// Person_Collection.insertMany([Ayush,Siddharth],function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Successfully saved");
//   }
// });
 person.save();
 PineApple.save();
// Read a Collection:
// update a Document in a Collection by specify a query:
// Person_Collection.updateOne({_id:"607a910133e6c2bd84d0e48a"},{name:'Atharv'},function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log('Successfully updated Values');
//   }
// })
/*
Person_Collection.deleteOne({name:'Atharv'},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted a row");
  }
}) */
/*
Person_Collection.deleteMany({name:'Rashbhari'},function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Successfully deleted multiple Documents");
  }
}) */

Person_Collection.find(function(err,Persons){
  if(err){
    console.log(err);
  }else{
    Persons.forEach(function(item){
        console.log(item.name);
    })
  //  mongoose.connection.close();
  }
})
