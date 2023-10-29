import './sources.css';
import { ISourcesContent } from '../../types/interfaces';

class Sources {
  draw(data: ISourcesContent[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector(
      '#sourceItemTemp',
    ) as HTMLTemplateElement;
    console.log(data);
    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(
        true,
      ) as HTMLTemplateElement;

      (<HTMLDivElement>(
        sourceClone.querySelector('.source__item-name')
      )).textContent = item.name;
      (<HTMLSpanElement>(
        sourceClone.querySelector('.source__item')
      )).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (<HTMLDivElement>document.querySelector('.sources')).append(fragment);
  }
}

export default Sources;
