type StringOrNum = string | number;
type objWithNameAndUid = {name: string,uid:StringOrNum};

const logDetails = (uid: string | number, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

//const greet_alias = (user: {name: string,uid: string | number}) => {

const greet_alias = (user: objWithNameAndUid) => {
    console.log(`${user.name} says hello!`);
}

//const greet_alias_again = (user: {name: string, uid: string | number}) => {

const greet_alias_again = (user: {name: string, uid: StringOrNum}) => {
    console.log(`${user.name} says hello`);
}
