import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

const NewsCards = ({articles}) => {
  return (
    <div>
      {articles.map((article) => (
        <NewsCard />
      ))}
    </div>
  )
}

export default NewsCards;
