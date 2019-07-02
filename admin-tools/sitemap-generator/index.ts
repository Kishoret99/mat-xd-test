import * as firebase from 'firebase-admin';

class Movies {
    image: string;
    title: string;
    constructor(obj: any) {
        this.image = '';
        this.title = ''
    }
}

class MyLogger {
    private keyword: string;
    constructor(keyword: string) {
        this.keyword = keyword;
    };

    log(message: string) {
        console.log(this.keyword, message);
    }

    // test() {
    //     const entity: Movies = {
    //         image: 'image url',
    //         title: 'entity title'
    //     }
    // }
}

const logger = new MyLogger('log: ');
logger.log('logging data')