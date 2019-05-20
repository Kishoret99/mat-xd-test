export interface Song {
    duration: string;
    languageCode: string;
    lyricist: string;
    lyrics: string;
    singers: Array<string>;
    title: string;
}

export interface SongWithId extends Song {
    id: string;
}