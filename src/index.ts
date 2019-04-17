import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FeatureCollection } from './classes/feature-collection.class';
import { DivAppender } from './utils/div-appender.util';

function fetchFromAdressApi(inputText:string) {
    return fetch(`https://api-adresse.data.gouv.fr/search/?q=${inputText}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}

function appendResponseProperties(properties:any, localization:any) {
    var ul = document.getElementById('list');
    var listElement = document.createElement("li");
    var listContent = document.createTextNode(properties.context);
    listElement.addEventListener('click', () => (console.log(properties)));
    listElement.appendChild(listContent);
    ul.appendChild(listElement);
    const divAppender = new DivAppender(localization);
    const geometryDiv = divAppender.populateGeometryDiv();
    const proprietiesDiv = divAppender.populatePropertiesDiv();
    ul.appendChild(geometryDiv);
    ul.appendChild(proprietiesDiv);
}

var searchBarInput = <HTMLInputElement>document.querySelector('#searchBar');
var keyupEvent = fromEvent(searchBarInput, 'keyup');
var final = keyupEvent.pipe(debounceTime(500));
final.subscribe(
    (data:any) => 
        fetchFromAdressApi(searchBarInput.value)
            .then(response => {
                const featureCollection = new FeatureCollection(response.attribution, response.license, response.query, response.type, response.version, response.features);
                emptyList();
                for (let localization of response.features) {
                    appendResponseProperties(localization.properties, localization);
                }
            })
    );

function emptyList() {
    var myNode = document.getElementById('list');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}