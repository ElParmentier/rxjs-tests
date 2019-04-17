import { Properties } from './properties.class';
import { Geometry } from './geometry.class';

export class Feature {
    properties:Properties;
    geometry:Geometry;
    type:string;

    constructor(properties:Properties, geometry:Geometry, type:string) {
        this.properties = new Properties(properties.context, properties.housenumber, properties.label, properties.postcode, properties.citycode, properties.id, properties.score, properties.name, properties.city, properties.type);
        this.geometry = new Geometry(geometry.type, geometry.coordinates);
        this.type = type;
    }

    printFeatureType(): string {
        return `Cette feature est de type: ${this.type}`;
    }

    printFeature(): string {
        return `${this.printFeatureType()}, properties: ${this.properties.printProperties()}, geometry: ${this.geometry.printGeometry()}`;
    }
}