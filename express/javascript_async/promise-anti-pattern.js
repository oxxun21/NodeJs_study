function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === "done") {
      resolve("게임 가능");
    } else {
      reject(new Error("게임 불가능"));
    }
  });
}

// 콜백과 다를 게 없음
myWork("done").then(
  (value) => console.log(value),
  (e) => console.error(e)
);

// 에러는 catch 사용하여 처리
myWork("doing")
  .then((value) => console.log(value))
  .catch((e) => console.error(e));

/////////////////////////////////////////////
function myWork(work) {
  return new Promise((resolve, reject) => {
    resolve(work.toUpperCase());
  });
}

function playGame(work) {
  return new Promise((resolve, reject) => {
    if (work === "DONE") {
      resolve("게임 가능");
    } else {
      reject("게임 불가능");
    }
  });
}

myWork("done").then((result) => {
  playGame(result).then((val) => {
    console.log(val);
  });
});

myWork("done").then(playGame).then(console.log);
