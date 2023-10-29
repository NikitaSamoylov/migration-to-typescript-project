import './news.css';
import { IDataContent } from '../../types/interfaces';

class News {
  draw(data: IDataContent[]) {
    const news =
      data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector(
      '#newsItemTemp',
    ) as HTMLTemplateElement;
    console.log(data);
    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(
        true,
      ) as HTMLTemplateElement;

      if (idx % 2)
        (<HTMLDivElement>newsClone.querySelector('.news__item')).classList.add(
          'alt',
        );

      (<HTMLDivElement>(
        newsClone.querySelector('.news__meta-photo')
      )).style.backgroundImage = `url(${
        item.urlToImage || 'img/news_placeholder.jpg'
      })`;
      (<HTMLUListElement>(
        newsClone.querySelector('.news__meta-author')
      )).textContent = item.author || item.source.name;
      (<HTMLDivElement>(
        newsClone.querySelector('.news__meta-date')
      )).textContent = item.publishedAt
        .slice(0, 10)
        .split('-')
        .reverse()
        .join('-');

      (<HTMLHeadElement>(
        newsClone.querySelector('.news__description-title')
      )).textContent = item.title;
      (<HTMLParagraphElement>(
        newsClone.querySelector('.news__description-source')
      )).textContent = item.source.name;
      (<HTMLParagraphElement>(
        newsClone.querySelector('.news__description-content')
      )).textContent = item.description;
      (<HTMLAnchorElement>(
        newsClone.querySelector('.news__read-more a')
      )).setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    (<HTMLDivElement>document.querySelector('.news')).innerHTML = '';
    (<HTMLDivElement>document.querySelector('.news')).appendChild(fragment);
  }
}

export default News;
