export class Geometry {
    type:string;
    coordinates:Array<number>;

    constructor(type:string, coordinates: Array<number>) {
        this.type = type;
        this.coordinates = coordinates;
    }

    printGeometry() : string {
        return `type: ${this.type}, coordonées: ${this.coordinates}`;
    }

    printType(): string {
        return `type: ${this.type}`;
    }

    printCoordinates(): string {
        return `lon: ${this.coordinates[0]}°, lat: ${this.coordinates[1]}°`;
    }
}