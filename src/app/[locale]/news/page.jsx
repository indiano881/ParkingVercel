import {useTranslations} from 'next-intl';

const News = async ({params: {lang}}) => {
  const dict = await getDictionary(lang)
    return (
        <>
          <h2>{dict.news.title}</h2>
        </>
    )
};

export default News

