import { Feature } from './feature.class';

export class FeatureCollection {
    attribution:string;
    license:string;
    query:string;
    type:string;
    version:string;
    features:Array<Feature> = [];

    constructor(attribution:string, license:string, query:string, type:string, version:string, features:Array<Feature>) {
        this.attribution = attribution;
        this.license = license;
        this.query = query;
        this.type = type;
        this.version = version;
        for (const feature of features) {
            this.features.push(new Feature(feature.properties, feature.geometry, feature.type));
        }
    }

    printFeatureCollection(): string {
        let featureString:string = '';
        for (const feature of this.features) {
            featureString += ` ${feature.printFeature()}`;
        }
        return `${this.attribution}, ${this.license}, ${this.query}, ${this.type}, ${this.version}, ${featureString}`;
    }
}