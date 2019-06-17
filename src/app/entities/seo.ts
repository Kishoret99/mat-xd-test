import { MetaDefinition } from '@angular/platform-browser';

export interface Seo {
    title?: string,
    description: string,
    image: string,
    "og:title" : string,
    "og:description": string,
    "og:image": string
}

export enum TAGS {
    DESCRIPTION = 'description',
    IMAGE = 'image',
    OG_TITLE = 'og:title',
    OG_DESCRIPTION = 'og:description',
    OG_IMAGE = 'og:image'
}

export class MetaDefinitions {
    constructor() {
    }

    getMetaDefs(seoTags: Seo): MetaDefinition[] {

        const metaTags: Array<IMetaTag> = [];
        metaTags.push(new NameMetaTag(TAGS.DESCRIPTION, seoTags.description));
        metaTags.push(new NameMetaTag(TAGS.IMAGE, seoTags.image));
        metaTags.push(new PropertyMetaTag(TAGS.OG_TITLE, seoTags["og:title"]));
        metaTags.push(new PropertyMetaTag(TAGS.OG_DESCRIPTION, seoTags["og:description"]));
        metaTags.push(new PropertyMetaTag(TAGS.IMAGE, seoTags["og:image"]));

        const validMetaDefs: MetaDefinition[] = [];
        metaTags.forEach((metaTag: IMetaTag) => {
            const metaDef: MetaDefinition = metaTag.getMetaDef();
            if(metaDef === undefined) return;
            validMetaDefs.push(metaDef);
        });
        return validMetaDefs;
    }
}

interface IMetaTag {
    getMetaDef(): MetaDefinition
}

class NameMetaTag implements IMetaTag {
    private name;
    private content;
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }

    getMetaDef(): MetaDefinition {
        if(this.name === undefined || this.content === undefined) {
            return undefined;
        }
        const obj: MetaDefinition = {
            name: this.name,
            content: this.content,
        }
        return obj;
    }
}

class PropertyMetaTag implements IMetaTag {
    private property;
    private content;
    constructor(property, content) {
        this.property = property;
        this.content = content;
    }

    getMetaDef(): MetaDefinition {
        if(this.property === undefined ||  this.content === undefined) {
            return undefined;
        }
        const obj: MetaDefinition = {
            property: this.property,
            content: this.content
        }
        return obj;
    }
}



