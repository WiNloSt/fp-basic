const FP = require("./utils");
const { log } = FP;
const { users } = require("./data");

// list transformation
users.map(a => a.name);

// filter
females = users.filter(i => i.gender === "female");
femalesV2 = FP.filter(FP.propEq("gender", "female"), users);

// exclude
// male = FP.filter(users => !FP.propEq("gender", "female")(users), users);
// male = FP.filter(obj => obj["gender"] !== "female", users);

male = FP.exclude(obj => obj["gender"] === "female", users);
// console.log(male);

// version 1
const mapName = FP.curry(FP.map)(FP.prop("name"));
// mapName(users).forEach(name => console.log(name))

// version 2
const logUsersName = users => users.forEach(user => console.log(user.name));

const input = [1, 2, 3];
// logUsersName(male);

numbers = FP.drop(1, input); // [1, 3]
numbers;
numbers = FP.drop(1, input);
numbers;

const sum = input.reduce((prev, current) => prev + current);
sum;

const mapReducer = fn => (prev, current) => prev.concat(fn(current));
const map = (fn, array) => array.reduce(mapReducer(fn), []);
const filter = (fn, array) =>
  array.reduce((prev, current) => {
    if (fn(current)) {
      return prev.concat(current);
    }
    return prev;
  }, []);

result = map(a => a + 1, [1, 2, 3]);
result;

result = filter(a => a > 1, [0, 1, 2, 3, 4]);
result;
// reduce(fn, [1,2,3])

users.map(user => ({
    date: asdf+1,
    a : user.a + user.b
}))

