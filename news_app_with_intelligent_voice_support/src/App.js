import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';

import alan from './alan.jpg';

const alanKey = 'c642ce9329686c352c24d08a284376172e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if(command === 'newHeadlines'){
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if(command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
      }
    })
  },[])

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={alan} className={classes.alanLogo}/>
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  )
}

export default App;
