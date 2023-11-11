const { default: axios } = require("axios");

async function getTop20Movies() {
  const url = "https://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
  try {
    const result = await axios.get(url);
    const { data } = result;
    if (!data.articleList || data.articleList.size === 0) {
      throw new Error("데이터 없음");
    }
    const movieInfos = data.articleList.map((arti, i) => {
      return { title: arti.title, rank: i + 1 };
    });
    for (let movieInfo of movieInfos) {
      console.log(`${movieInfo.rank}위 : ${movieInfo.title}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}

getTop20Movies();
