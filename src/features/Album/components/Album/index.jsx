import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.object.isRequired
};

function Album(props) {
    const { album } = props
    return (
        <div className='album'>
            <img src={album.thumbnail} alt={album.name}></img>
            <p>{album.name}</p>
        </div>
    );
}

export default Album;