import React from 'react';
import New from './New';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => (
    <div className="row">
        {news.map(noticie => (
            <New
                key={noticie.url}
                noticie={noticie}
            />
        ))}
    </div>

);
ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;