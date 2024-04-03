// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network request in 10 sec...
  return 'ellie';
}

const user = fetchUser();
user.then(console.log); // 나중
console.log(user); // 먼저

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple(); // 프로미스이므로 바로 실행됨
  const bananaPromise = getBanana();
  const apple = await applePromise; // await 없으면 아직 getApple() return 안 돼서 안 담김.
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
