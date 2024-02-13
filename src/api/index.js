import Chance from "chance";

const chance=Chance();

export const fakeUSerData=()=>{
    // console.log(chance.name({middle:true}));
    return chance.name({middle:true});
};