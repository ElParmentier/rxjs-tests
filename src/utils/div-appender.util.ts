import { Feature } from '../classes/feature.class';
import { Properties } from '../classes/properties.class';
import { Geometry } from '../classes/geometry.class';

export class DivAppender {
    containerDivClass:string = 'container';
    propertiesDivClass:string = 'properties';
    geometryDivClass:string = 'geometry';
    feature:Feature;
    properties:Properties;
    geometry:Geometry;

    constructor (feature:Feature) {
        this.feature = feature;
        this.properties = new Properties(feature.properties.context, feature.properties.housenumber, feature.properties.label, feature.properties.postcode, feature.properties.citycode, feature.properties.id, feature.properties.score, feature.properties.name, feature.properties.city, feature.properties.type);
        this.geometry = new Geometry(feature.geometry.type, feature.geometry.coordinates);
    }

    initDivToAppend(): HTMLDivElement {
        const containerDiv = document.createElement('div');
        containerDiv.className = this.containerDivClass;
        return containerDiv;
    }

    populatePropertiesDiv(): HTMLDivElement {
        const propertiesDiv = document.createElement('div');
        propertiesDiv.className = this.propertiesDivClass;
        // init all elements
        const unorderedList = document.createElement('ul');
        const listNodeContext = document.createElement('li');
        const listNodeHouseNumber = document.createElement('li');
        const listNodeLabel = document.createElement('li');
        const listNodePostCode = document.createElement('li');
        const listNodeCityCode = document.createElement('li');
        const listNodeId = document.createElement('li');
        const listNodeScore = document.createElement('li');
        const listNodeName = document.createElement('li');
        const listNodeCity = document.createElement('li');
        const listNodeType = document.createElement('li');
        // init all list elements content
        const listNodeContextText = document.createTextNode(this.properties.printContext());
        const listNodeHouseNumberText = document.createTextNode(this.properties.printHouseNumber());
        const listNodeLabelText = document.createTextNode(this.properties.printLabel());
        const listNodePostCodeText = document.createTextNode(this.properties.printPostCode());
        const listNodeCityCodeText = document.createTextNode(this.properties.printCityCode());
        const listNodeIdText = document.createTextNode(this.properties.printId());
        const listNodeScoreText = document.createTextNode(this.properties.printScore());
        const listNodeNameText = document.createTextNode(this.properties.printName());
        const listNodeCityText = document.createTextNode(this.properties.printCity());
        const listNodeTypeText = document.createTextNode(this.properties.printType());
        // put text values in list elements
        listNodeContext.appendChild(listNodeContextText);
        listNodeHouseNumber.appendChild(listNodeHouseNumberText);
        listNodeLabel.appendChild(listNodeLabelText);
        listNodePostCode.appendChild(listNodePostCodeText);
        listNodeCityCode.appendChild(listNodeCityCodeText);
        listNodeId.appendChild(listNodeIdText);
        listNodeScore.appendChild(listNodeScoreText);
        listNodeName.appendChild(listNodeNameText);
        listNodeCity.appendChild(listNodeCityText);
        listNodeType.appendChild(listNodeTypeText);
        // put list elements in the parent ul
        unorderedList.appendChild(listNodeContext);
        if (listNodeHouseNumber) unorderedList.appendChild(listNodeHouseNumber);
        unorderedList.appendChild(listNodeLabel);
        unorderedList.appendChild(listNodePostCode);
        unorderedList.appendChild(listNodeCityCode);
        unorderedList.appendChild(listNodeId);
        unorderedList.appendChild(listNodeScore);
        unorderedList.appendChild(listNodeName);
        unorderedList.appendChild(listNodeCity);
        unorderedList.appendChild(listNodeType);
        // put all in root container
        propertiesDiv.appendChild(unorderedList);
        return propertiesDiv;
    }

    populateGeometryDiv(): HTMLDivElement {
        const geometryDiv = document.createElement('div');
        geometryDiv.className = this.geometryDivClass;
        const unorderedList = document.createElement('ul');
        const listNodeType = document.createElement('li');
        const listNodeCoordinates = document.createElement('li');
        const nodeTypeText = document.createTextNode(this.geometry.printType());
        const nodeCoordinatesText = document.createTextNode(this.geometry.printCoordinates());
        listNodeType.appendChild(nodeTypeText);
        listNodeCoordinates.appendChild(nodeCoordinatesText);
        unorderedList.appendChild(listNodeType);
        unorderedList.appendChild(listNodeCoordinates);
        geometryDiv.appendChild(unorderedList);
        return geometryDiv;
    }
}