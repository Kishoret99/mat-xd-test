this.db.firestore.runTransaction(transaction => {
    const collectionRef = this.db.collection('movies');
    const oldDoc = collectionRef.doc('RvgToegUq0L5u24XIllj');
    const newDoc = collectionRef.doc('agnyaathavaasi-2018')
    const oldDocRef = oldDoc.ref;
    const newDocRef = newDoc.ref;


    // songs

    const oldDocSongsCollection = oldDoc.collection('songs');
    const newDocSongsCollection = newDoc.collection('songs');

    const oldSong1 = oldDocSongsCollection.doc('80f0NmypUJJzJBxTyIg3');
    const newSong1 = newDocSongsCollection.doc('dhaga-dhagamaney');

    const oldSong2 = oldDocSongsCollection.doc('RWUN3u920ndHXaawifd7');
    const newSong2 = newDocSongsCollection.doc('swagatham-krishna');

    const oldSong3 = oldDocSongsCollection.doc('UfjXjzsLafdGBMsR1pDC');
    const newSong3 = newDocSongsCollection.doc('ab-yevaro-nee-baby');

    const oldSong4 = oldDocSongsCollection.doc('bwjpdeHjKaesOlnXJaWl');
    const newSong4 = newDocSongsCollection.doc('baitikochi-chuste');

    const oldSong5 = oldDocSongsCollection.doc('ihSNNCgC5OYfTcOdiDfD');
    const newSong5 = newDocSongsCollection.doc('gaali-vaaluga');

    const oldSong6 = oldDocSongsCollection.doc('wjeDM5ggIJOm4fuTabn2');
    const newSong6 = newDocSongsCollection.doc('kodakaa-koteswar-rao');

    return Promise.all([
      transaction.get(oldDocRef),
      transaction.get(oldSong1.ref),
      transaction.get(oldSong2.ref),
      transaction.get(oldSong3.ref),
      transaction.get(oldSong4.ref),
      transaction.get(oldSong5.ref),
      transaction.get(oldSong6.ref)
    ]).then(oldDoc => {

        transaction.set(newDocRef, {
          ...oldDoc[0].data() || {}
        });
        
        transaction.set(newSong1.ref, {
          ...oldDoc[1].data() || {}
        });
        transaction.set(newSong2.ref, {
          ...oldDoc[2].data() || {}
        });
        transaction.set(newSong3.ref, {
          ...oldDoc[3].data() || {}
        });
        transaction.set(newSong4.ref, {
          ...oldDoc[4].data() || {}
        });
        transaction.set(newSong5.ref, {
          ...oldDoc[5].data() || {}
        });
        transaction.set(newSong6.ref, {
          ...oldDoc[6].data() || {}
        });


        transaction.delete(oldDocRef);
        transaction.delete(oldSong1.ref);
        transaction.delete(oldSong2.ref);
        transaction.delete(oldSong3.ref);
        transaction.delete(oldSong4.ref);
        transaction.delete(oldSong5.ref);
        transaction.delete(oldSong6.ref);
      })
  }).then(success => {
    console.log('> success', success);
  }).catch(err => {
    console.log('> error', err);
  })