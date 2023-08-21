import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
    const albumList = [
        {
            "id": 1,
            "name": "Bolero",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg"
        },
        {
            "id": 2,
            "name": "EDM Now",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/a/0/a/a/a0aa6cfa01d4464367c57aa2d24c7e3b.jpg"
        },
        {
            "id": 3,
            "name": "Deep House",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/b/a/c/3bac96e151453ba70bee3ebdaeacfe6a.jpg"
        }
    ]

    return (
        <div>
            <h2>List Music Daily</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;