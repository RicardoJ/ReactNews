import React from 'react';
import New from './New';


const ListNews = ({news}) =>  (
<div className = "row">
    {news.map(noticie => (
        <New
        key = {noticie.url}
        noticie = {noticie}
        />
    ))}
</div>

      );

 
export default ListNews;