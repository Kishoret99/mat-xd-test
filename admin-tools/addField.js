const firebase = require('firebase');


const config = {
    apiKey: "AIzaSyCHqwdr18Fa8R8NjvXAscinpBKUk7ZyyFA",
    authDomain: "lyrk-test.firebaseapp.com",
    databaseURL: "https://lyrk-test.firebaseio.com",
    projectId: "lyrk-test",
    storageBucket: "lyrk-test.appspot.com",
    messagingSenderId: "233740825588"
  }
firebase.initializeApp(config);
firebase.firestore().collection('movies').get().then(data => {
    data.docs.forEach(movie => {
        console.log(movie.data());
        const title = movie.data().title || '';
        movie.ref.collection('songs').get().then(songsQue => {
            songsQue.docs.forEach(song => {
                song.ref.update({movieTitle: title});
            })
        })
    })
})