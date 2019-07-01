import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Seo, MetaDefinitions, TAGS} from '../../entities';
import { Utils } from '../../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private meta: Meta,
    private title: Title
  ) { 

  }

  populate(partialSeo: Partial<Seo>) {
    if(!partialSeo) return;
    this.setTitle(Utils.getKeyValueOrReturnDefault(partialSeo, 'title', 'Telugu Lyrics - Lyrk'));
    
    const seo: Seo = this.buildEntity(partialSeo);
    this.setMetaTags(seo);
  }
  
  private buildEntity(partialSeo: Partial<Seo>): Seo {

    const seo: Seo = {
      ...partialSeo,
      description: Utils.getKeyValueOrReturnDefault(partialSeo, 'description', ''),
      image: Utils.getKeyValueOrReturnDefault(partialSeo, 'image', 'https://lyrk.co.in/favicon.ico'),
      "og:title": Utils.getKeyValueOrReturnDefault(partialSeo, 'title', ''),
      "og:description": Utils.getKeyValueOrReturnDefault(partialSeo, 'description', ''),
      "og:image": Utils.getKeyValueOrReturnDefault(partialSeo, 'image', 'https://lyrk.co.in/favicon.ico')
    };
    return seo;
  }

  private setTitle(title: string) {
    this.title.setTitle(title);
  }

  private setMetaTags(seo: Seo) {
    const metaDefs = new MetaDefinitions();
    const metaDefsArr: MetaDefinition[] = metaDefs.getMetaDefs(seo);
    metaDefsArr.forEach(metaDef => {
      this.meta.updateTag(metaDef);
    })
  }
}
