const axios = require('axios');
const cheerio = require('cheerio');

let html = '';

async function getHtml() {
  try {
    return await axios.get('https://www.youtube.com/watch?v=Ytz61uka79M&list=PL61V04zH0gCnJl2tPt7f5ETHxNwpttuM9');
  } catch (error) {
    console.error(error);
  }
}

getHtml()
  .then((html) => {
    let playList = [];
    const $ = cheerio.load(html.data);
    console.log($);
    let $bodyList = $('#secondary #items').children('ytd-playlist-panel-renderer.style-scope');
    console.log($bodyList);

    // $bodyList.each(function (i, elem) {
    //   playList[i] = {
    //     video_url: $(this).find('a #container #thumbnail-container ytd-thumbnail a').attr('href'),
    //     title: $(this).find('a #container #meta h4 span').text(),
    //   };

    //   // console.log(playList[i]);
    // });
  })
  .then((res) => console.log(res));
