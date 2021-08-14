'use script'

const typingwprd = document.getElementById('typingword');
const timeindex = document.getElementById('time');
const pointindex = document.getElementById('point');
const element = document.querySelector('#inputting');
let time = 0;
let point = 0;
let game = 0;

const array = [
    'ごはん',
    'ばなな',
    'いちご',
    'みかん',
    'ぶどう',
    'ぷりん',
    'やさい',
    'あいす',
    'あいぬ',
    'あうと',
    'かがみ',
    'かなだ',
    'いんど',
    'どいつ',
    'にほん',
    'かんじ',
    'ぼーと',
    'てれび',
    'らじお',
    'ふくろ',
    'まくら',
    'ふとん',
    'ふすま',
    'たたみ',
    'たんす',
    'こんろ',
    'さいふ',
    'おちゃ',
    'ほんや',
    'たおる',
    'あたま',
    'おふろ',
    'ぼーる',
    'てじな',
    'ぼうし',
    'せいと',
    'のーと',
    'こども',
    'おとな',
    'ばった',
    'ぱんだ',
    'うさぎ',
    'まんが',
    'えほん',
    'しんく',
    'たまご',
    'きりん',
    'こーど',
    'なると',
    'すーぷ',
    'くじら',
    'ばたー',
    'ごりら',
    'かーど',
    'あぶら',
    'くるま',
    'ばいと',
    'ばいく',
    'すまほ',
    'ぶんこ',
    'めがね',
    'あぷり',
    'げーむ',
    'さいと',
    'そふぁ',
    'とうふ',
    'めろん',
    'すいか',
    'おくら',
    'とまと',
    'こあら',
    'てんき',
    'さらだ',
    'あにめ',
    'ぼたん',
    'めだか',
    'めばる',
    'てくび',
    'まだい',
    'いるか',
    'しゃち',
    'いわし',
    'さんま',
    'まぐろ',
    'ほてる',
    'ちょう',
    'はさみ',
    'とんぼ',
    'たんす',
    'こっぷ',
    'かっぷ',
    'とびら',
    'おんさ',
    'けーす',
    'まうす',
    'ねずみ',
    'ふせん',
    'いたち',
    'やもり',
    'いもり',
    'いわて',
    'あきた',
    'みやぎ',
    'とやま',
    'かがわ',
    'えひめ',
    'こうち',
    'しまね',
    'ひんと',
    'あいち',
    'なごや',
    'ゆうき',
    'きもち',
    'めがね',
    'かおす',
    'おなか',
    'はがき',
    'べんち',
    'わかめ',
    'こんぶ',
    'さくら',
    'つぼみ',
    'じごく',
    'もっぷ',
    'もんで',
    'くすり',
    'かおり',
]

const arrayLenght = array.length;

for (let i = arrayLenght - 1; i >= 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random],array[i]];
}

typingword.innerHTML = array[0];




element.addEventListener('change', hand);

function hand(event) {
    const value = event.target.value;
if (value == array[0] && game == 0) {
    point = point + (80 - time);
    pointindex.innerHTML = point;
    array.shift();
    typingword.innerHTML = array[0];
    element.value = '';
}}

const totalTime = 30000; // 10秒
const oldTime = Date.now();

const timerId = setInterval(() => {
  const currentTime = Date.now();
  // 差分を求める
  const diff = currentTime - oldTime;

  // 残りミリ秒を計算する
  const remainMSec = totalTime - diff;
  // ミリ秒を整数の秒数に変換する
  const remainSec = Math.ceil(remainMSec / 1000);

  let label = `${remainSec}s`;

  time = remainSec;

  // 0秒以下になったら
  if (remainMSec <= 0) {
    // タイマーを終了する
    clearInterval(timerId);
    game = 1;

    // タイマー終了の文言を表示
    label = '終了';


    setTimeout(() => {
      // コンテナ
     /* const container = document.querySelector('.explain');
      container.innerHTML = '';
      // 旧ボックス要素
      const oldBox = document.querySelector('#typingname');
      // 新ボックス要素。div要素を作り、「新ボックス」というテキストノードを追加する
      const newBox = document.createElement('a');
      newBox.textContent = 'REPLAY';
      // new-box, boxというCSSクラスを追加する
      // 新旧ボックスを入れ替える
      container.appendChild(newBox);*/

      var linkID = "yahoo";	// リンクを設定するタグのID
const linkURL = "smartphonetyping.html";
const baseTag = document.getElementById('yahoo');
const link1 = baseTag.firstChild.nodeValue;
const aTag = document.createElement("a");
aTag.href = linkURL;
const container = document.querySelector('.explain');
      container.innerHTML = '';
      aTag.textContent = 'REPLAY';
      container.appendChild(aTag);

      const div = document.getElementById('vovov');
div.classList.add('btn');
//aTag.appendChild(document.createTextNode(link1));
//baseTag.replaceChild(aTag, baseTag.firstChild);
    }, 1000);
    
  }

  // 画面に表示する
  timeindex.innerHTML = label;
}, 1000);
