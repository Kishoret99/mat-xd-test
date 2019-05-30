const fs = require('fs');
const lyrics = fs.readFileSync('./xz.txt', 'utf-8');
let singleLineLyric = '';
lyrics.split('\n').forEach(lyric => {
    if(!lyric) return;
    singleLineLyric += lyric + '\\n';
});

console.log(singleLineLyric);
firebase.firestore().doc('movies/T9AFHmqcyQUN1XQLY4FR')