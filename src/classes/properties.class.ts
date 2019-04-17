export class Properties {
    context:string;
    housenumber:string;
    label:string;
    postcode:string;
    citycode:string;
    id:string;
    score:number;
    name:string;
    city:string;
    type:string;

    constructor (context:string, housenumber:string, label:string, postcode:string, citycode:string, id:string, score:number, name:string, city:string, type:string) {
        this.context = context;
        this.housenumber = housenumber;
        this.label = label;
        this.postcode = postcode;
        this.citycode = citycode;
        this.id = id;
        this.score = score;
        this.name = name;
        this.city = city;
        this.type = type;
    }

    printProperties(): string {
        return `properties`;
    }

    printContext():string {
        return `Contexte du lieu: ${this.context}`;
    }

    printHouseNumber():string {
        return `Numéro de maison: ${this.housenumber}`;
    }

    printLabel():string {
        return `Label: ${this.label}`;
    }

    printPostCode():string {
        return `Code postal: ${this.postcode}`;
    }

    printCityCode():string {
        return `Code de la ville: ${this.citycode}`;
    }

    printId():string {
        return `Id de la ville: ${this.id}`;
    }

    printScore():string {
        return `Pertinence du résultat: ${this.score} (entre 0 et 1, 1 étant le plus proche)`;
    }

    printName():string {
        return `Nom: ${this.name}`;
    }

    printCity():string {
        return `Nom de la ville: ${this.city}`
    }

    printType():string {
        return `Type: ${this.type}`;
    }
}

enum PropertyType {
    HouseNumber = "Maison n°",
    Street = "Rue",
    Locality = "Lieu-dit",
    Municipality = "Ville de",
}