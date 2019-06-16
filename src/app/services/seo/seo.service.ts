import { Injectable } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Seo, MetaDefinitions, TAGS} from '../../entities' 

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
    this.setTitle(partialSeo.title);
    
    const seo: Seo = this.buildEntity(partialSeo);
    this.setMetaTags(seo);
  }
  
  private buildEntity(partialSeo: Partial<Seo>): Seo {

    const seo: Seo = {
      description: partialSeo.description,
      image: partialSeo.image,
      "og:title": partialSeo.title,
      "og:description": partialSeo.description,
      "og:image": partialSeo.image,
      ...partialSeo
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
