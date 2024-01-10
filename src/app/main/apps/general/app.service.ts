import Query from 'devextreme/data/query';
import { Injectable } from '@angular/core';

export class ProductOrdersData {
    level: number;
    BoMID: string;
    isStart: boolean;
    CancelDate: string;
    CancelReason: string;
    siparisNo: string;
    siparisColor: string;
    mamulKodu: string;
    status: number;
    stopsList: Array<any>;;
    mamulAciklama: string;
    createdDate: string;
    inputProductName: string;
    inputProductID: string;
    inputProductQuantity: number;
    inputProductUnite: string;
    outputProductName: string;
    outputProductID: string;
    outputProductQuantity: number;
    outputProductUnite: string;
    produced: number;
    productedList: Array<any>;
    wastage: number;
    wastageList: Array<any>;
    rework: number;
    reworkList: Array<any>;;
    quality_control: number;
    quality_controlList: Array<any>;;
    startDate: string;
    finishDate: string;
    assignedDate: string;
    plannedStartDate: string;;
    plannedFinishDate: string;;
    updatedDate: string;;
    box: Array<any>;
    machineID: string;
    machineName: string;
    operatorID: string;
    operatorTelephone: string;
    reworkBoxesList: Array<any>;;
    operationValues: Array<any>;
    _id: string;
    type: string;
    code: string;
    unit_price: number;
    QRCode: string;
    siparisID: string;
    facID: string;
    assignedUserID: string;
    updatedUserID: string;
    description: string;
    variantCode: string;
    variantDescription: string;
    createdUserID: string;
    fisNo: string;
    cariKodu: string;
    name: string;
    plannedQuantity: number;
    estimatedTime: string;
    operationType: number;
    nextOperationType: number;
    nextOperationName: string;
    nextOperationID: string;
    previousProductionOrderID: string;
    previousOperationID: string;
    previousOperationName: string;
    operationID: string;
    operationName: string;
    workStation: string;
    userList: Array<any>;
    operatorList: Array<any>
    workstationName: String;

    __v: number;
}

export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    BirthDate: string;
    State: string;
}

let employees: Employee[] = [{
    "ID": 1,
    "Prefix": "Mr.",
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "State": "California",
    "BirthDate": "1964/03/16"
},
{
    "ID": 2,
    "Prefix": "Mrs.",
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Position": "Sales Assistant",
    "State": "California",
    "BirthDate": "1981/06/03"
},
{
    "ID": 3,
    "Prefix": "Mr.",
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Position": "CMO",
    "State": "Arkansas",
    "BirthDate": "1974/09/07"
},
{
    "ID": 4,
    "Prefix": "Ms.",
    "FirstName": "Greta",
    "LastName": "Sims",
    "Position": "HR Manager",
    "State": "Georgia",
    "BirthDate": "1977/11/22"
},
{
    "ID": 5,
    "Prefix": "Mr.",
    "FirstName": "Brett",
    "LastName": "Wade",
    "Position": "IT Manager",
    "State": "Idaho",
    "BirthDate": "1968/12/01"
},
{
    "ID": 6,
    "Prefix": "Mrs.",
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Position": "Controller",
    "State": "Utah",
    "BirthDate": "1974/11/15"
},
{
    "ID": 7,
    "Prefix": "Mr.",
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Position": "Shipping Manager",
    "State": "California",
    "BirthDate": "1978/01/09"
},
{
    "ID": 8,
    "Prefix": "Ms.",
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Position": "HR Assistant",
    "State": "Arkansas",
    "BirthDate": "1985/06/05"
},
{
    "ID": 9,
    "Prefix": "Dr.",
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Position": "Ombudsman",
    "State": "Missouri",
    "BirthDate": "1972/09/11"
}]

var productOrdersData: any[] = [
    {
        "level": 1,
        "BoMID": "5d5a54f1e214452f0c9f4660",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S13487",
        "siparisColor": "7fc0b6",
        "mamulKodu": "eklenmemiş",
        "status": 2,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566200148356",
        "inputProductName": "Mandal",
        "inputProductID": "5d5a54e0e214452f0c9f465f",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "100-Mandal",
        "outputProductID": "5d5a550ae214452f0c9f4661",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 6,
        "productedList": [],
        "wastage": 1,
        "wastageList": [],
        "rework": 1,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/06/2019 08:32",
        "finishDate": "12/06/2019 08:32",
        "assignedDate": "1566200148356",
        "plannedStartDate": "1566201173349",
        "plannedFinishDate": "1566201173349",
        "updatedDate": "1566285298894",
        "box": [
            {
                "status": 2,
                "color": "blue",
                "code": "100",
                "productionOrderID": "5d5a5555e214452f0c9f4665",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566200148458",
                        "_id": "5d5a54f1e214452f0c9f4660",
                        "productID": "5d5a5471e214452f0c9f465d",
                        "productName": "Çalışma Masası",
                        "name": "Çalışma Masası",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a5520e214452f0c9f4662",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Masa Ayak",
                                    "id": "5d5a548ee214452f0c9f465e",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Masa Ayak",
                                    "id": "5d5a5533e214452f0c9f4663",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-AsQrApHBvi-100",
                "wastage": 1,
                "produced": 6,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "12/03/2019 08:32",
                "updatedDate": "1566218815819",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a5555e214452f0c9f4666",
                "_id": "5d5a5c80e214452f0c9f466b",
                "quantity": 0,
                "capacity": 8,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203072651,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203072684
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203665889,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203665924
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566217366933,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566217366968
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218794725,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218794768
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566212942522,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566212942560
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218796888,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218796932
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566218808062,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "55.0"
                        },
                        "time": 1566218808098
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566218815775,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "6.0"
                        },
                        "time": 1566218815819
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }, {
                "status": 2,
                "color": "blue",
                "code": "100",
                "productionOrderID": "5d5a5555e214452f0c9f4665",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566200148458",
                        "_id": "5d5a54f1e214452f0c9f4660",
                        "productID": "5d5a5471e214452f0c9f465d",
                        "productName": "Çalışma Masası",
                        "name": "Çalışma Masası",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a5520e214452f0c9f4662",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Masa Ayak",
                                    "id": "5d5a548ee214452f0c9f465e",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Masa Ayak",
                                    "id": "5d5a5533e214452f0c9f4663",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-AsQrApHBvi-100",
                "wastage": 1,
                "produced": 6,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566203069581",
                "updatedDate": "1566218815819",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a5555e214452f0c9f4666",
                "_id": "5d5a5c80e214452f0c9f466b",
                "quantity": 0,
                "capacity": 8,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203072651,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203072684
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203665889,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203665924
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566217366933,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566217366968
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218794725,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218794768
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566212942522,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566212942560
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218796888,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218796932
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566218808062,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "55.0"
                        },
                        "time": 1566218808098
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566218815775,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "6.0"
                        },
                        "time": 1566218815819
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d2446034b093612a8d3e1ea",
        "machineName": "Taşlama",
        "operatorID": "all",
        "operatorTelephone": "all ",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5a5555e214452f0c9f4665",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedMykp8",
        "siparisID": "5d5a5553e214452f0c9f4664",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 300,
        "estimatedTime": "176400000",
        "operationType": 0,
        "nextOperationType": 1,
        "nextOperationName": "TEST Taşlama QQ Oper.",
        "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousProductionOrderID": "first",
        "previousOperationID": "first",
        "previousOperationName": "first",
        "operationID": "5d4c25519a4e4d17a8792786",
        "operationName": "TEST Taşlama Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566202952631",
                "endDate": "1566285298894",
                "isWorking": 0,
                "reasonDesc": "vardiye bitti",
                "_id": "5d5a5c48e214452f0c9f4668"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a54f1e214452f0c9f4660",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S13487",
        "siparisColor": "7fc0b6",
        "mamulKodu": "eklenmemiş",
        "status": 2,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566200148356",
        "inputProductName": "Mandal",
        "inputProductID": "5d5a54e0e214452f0c9f465f",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "100-Mandal",
        "outputProductID": "5d5a550ae214452f0c9f4661",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 6,
        "productedList": [],
        "wastage": 1,
        "wastageList": [],
        "rework": 1,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/07/2019 18:32",
        "finishDate": "15/07/2019 08:32",
        "assignedDate": "1566200148356",
        "plannedStartDate": "1566201173349",
        "plannedFinishDate": "1566201173349",
        "updatedDate": "1566285298894",
        "box": [
            {
                "status": 2,
                "color": "blue",
                "code": "100",
                "productionOrderID": "5d5a5555e214452f0c9f4665",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566200148458",
                        "_id": "5d5a54f1e214452f0c9f4660",
                        "productID": "5d5a5471e214452f0c9f465d",
                        "productName": "Çalışma Masası",
                        "name": "Çalışma Masası",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a5520e214452f0c9f4662",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Masa Ayak",
                                    "id": "5d5a548ee214452f0c9f465e",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Masa Ayak",
                                    "id": "5d5a5533e214452f0c9f4663",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-AsQrApHBvi-100",
                "wastage": 1,
                "produced": 6,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566203069581",
                "updatedDate": "1566218815819",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a5555e214452f0c9f4666",
                "_id": "5d5a5c80e214452f0c9f466b",
                "quantity": 0,
                "capacity": 8,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203072651,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203072684
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203665889,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203665924
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566217366933,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566217366968
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218794725,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218794768
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566212942522,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566212942560
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218796888,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218796932
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566218808062,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "55.0"
                        },
                        "time": 1566218808098
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566218815775,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "6.0"
                        },
                        "time": 1566218815819
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }, {
                "status": 2,
                "color": "blue",
                "code": "100",
                "productionOrderID": "5d5a5555e214452f0c9f4665",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566200148458",
                        "_id": "5d5a54f1e214452f0c9f4660",
                        "productID": "5d5a5471e214452f0c9f465d",
                        "productName": "Çalışma Masası",
                        "name": "Çalışma Masası",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a5520e214452f0c9f4662",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Masa Ayak",
                                    "id": "5d5a548ee214452f0c9f465e",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Masa Ayak",
                                    "id": "5d5a5533e214452f0c9f4663",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-AsQrApHBvi-100",
                "wastage": 1,
                "produced": 6,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "12/09/2019 08:32",
                "updatedDate": "12/10/2019 08:32",
                "finishDate": "12/10/2019 08:32",
                "next_productionOrderID": "5d5a5555e214452f0c9f4666",
                "_id": "5d5a5c80e214452f0c9f466b",
                "quantity": 0,
                "capacity": 8,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203072651,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203072684
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566203665889,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566203665924
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566217366933,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566217366968
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218794725,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218794768
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566212942522,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566212942560
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218796888,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566218796932
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566218808062,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "55.0"
                        },
                        "time": 1566218808098
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566218815775,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "6.0"
                        },
                        "time": 1566218815819
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d2446034b093612a8d3e1ea",
        "machineName": "Taşlama",
        "operatorID": "all",
        "operatorTelephone": "all ",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5a5555e214452f0c9f4665",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedMykp8",
        "siparisID": "5d5a5553e214452f0c9f4664",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 300,
        "estimatedTime": "176400000",
        "operationType": 0,
        "nextOperationType": 1,
        "nextOperationName": "TEST Taşlama QQ Oper.",
        "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousProductionOrderID": "first",
        "previousOperationID": "first",
        "previousOperationName": "first",
        "operationID": "5d4c25519a4e4d17a8792786",
        "operationName": "TEST Taşlama Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566202952631",
                "endDate": "1566285298894",
                "isWorking": 0,
                "reasonDesc": "vardiye bitti",
                "_id": "5d5a5c48e214452f0c9f4668"
            }
        ],
        "__v": 0,
        "workstationName": "cnc makinalar",
    },
    {
        "level": 1,
        "BoMID": "5d5a54f1e214452f0c9f4660",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S13487",
        "siparisColor": "7fc0b6",
        "mamulKodu": "eklenmemiş",
        "status": 2,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566200148356",
        "inputProductName": "100-Mandal",
        "inputProductID": "5d5a550ae214452f0c9f4661",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "101-100-Mandal",
        "outputProductID": "5d5a5520e214452f0c9f4662",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 0,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/09/2019 08:32",
        "finishDate": "12/10/2019 08:32",
        "assignedDate": "1566200148356",
        "plannedStartDate": "1566201142000",
        "plannedFinishDate": "1566373942000",
        "updatedDate": "1566202958363",
        "box": [],
        "machineID": "5d2446034b093612a8d3e1ea",
        "machineName": "Taşlama",
        "operatorID": "5d2446c24b093612a8d3e1f4",
        "operatorTelephone": "05051071533",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5a5555e214452f0c9f4666",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefined3DAZA",
        "siparisID": "5d5a5553e214452f0c9f4664",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 300,
        "estimatedTime": "172800000",
        "operationType": 1,
        "nextOperationType": 0,
        "nextOperationName": "TEST Parlatma Oper.",
        "nextOperationID": "5d4c259e9a4e4d17a8792787",
        "previousProductionOrderID": "5d5a5555e214452f0c9f4665",
        "previousOperationID": "5d4c25519a4e4d17a8792786",
        "previousOperationName": "TEST Taşlama Oper.",
        "operationID": "5d4c25b5cf3cf35c8825bfc6",
        "operationName": "TEST Taşlama QQ Oper.",
        "workStation": "5d24461a4b093612a8d3e1eb",
        "workstationName": "x Grubu",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa QQ Operatör",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "startDate": "1566202958363",
                "endDate": "1566202958363",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5a5c4ee214452f0c9f4669"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a54f1e214452f0c9f4660",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S13487",
        "siparisColor": "7fc0b6",
        "mamulKodu": "eklenmemiş",
        "status": 2,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566200148356",
        "inputProductName": "Masa Ayak",
        "inputProductID": "5d5a548ee214452f0c9f465e",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "102-Masa Ayak",
        "outputProductID": "5d5a5533e214452f0c9f4663",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 2,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/03/2019 08:32",
        "finishDate": "12/06/2019 08:32",
        "assignedDate": "1566200148356",
        "plannedStartDate": "1566201173787",
        "plannedFinishDate": "1566201173787",
        "updatedDate": "1566285495839",
        "box": [
            {
                "status": 0,
                "color": "blue",
                "code": "101",
                "productionOrderID": "5d5a5555e214452f0c9f4667",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2445fb4b093612a8d3e1e9",
                "machineName": "Partlatma",
                "operationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationID": "last",
                "nextOperationName": "last",
                "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "previousOperationName": "TEST Taşlama QQ Oper.",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566200148458",
                        "_id": "5d5a54f1e214452f0c9f4660",
                        "productID": "5d5a5471e214452f0c9f465d",
                        "productName": "Çalışma Masası",
                        "name": "Çalışma Masası",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a550ae214452f0c9f4661",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a5520e214452f0c9f4662",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Masa Ayak",
                                    "id": "5d5a548ee214452f0c9f465e",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Masa Ayak",
                                    "id": "5d5a5533e214452f0c9f4663",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-4aK63BzjHw-101",
                "wastage": 0,
                "produced": 2,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566203676736",
                "updatedDate": "1566218497916",
                "finishDate": "1566200148451",
                "next_productionOrderID": "last",
                "_id": "5d5a5c8ce214452f0c9f466c",
                "quantity": 0,
                "capacity": 11,
                "cells": [
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566218497877,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "10-9-8"
                        },
                        "time": 1566218497909
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566214580379,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "22-8-0"
                        },
                        "time": 1566214580408
                    },
                    {
                        "cellNo": 2,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d2445fb4b093612a8d3e1e9",
        "machineName": "Partlatma",
        "operatorID": "5d2446b74b093612a8d3e1f3",
        "operatorTelephone": "05051071532",
        "reworkBoxesList": [],
        "operationValues": [
            {
                "name": "RHA",
                "unite": "milimetre",
                "normalValue": 10,
                "minValue": 9.8,
                "maxValue": 10.3,
                "isOptional": true
            },
            {
                "name": "Radius",
                "unite": "milimetre",
                "normalValue": 6,
                "minValue": 5.9,
                "maxValue": 6.1,
                "isOptional": true
            },
            {
                "name": "PV",
                "unite": "milimetre",
                "normalValue": 15,
                "minValue": 14,
                "maxValue": 16,
                "isOptional": false
            }
        ],
        "_id": "5d5a5555e214452f0c9f4667",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefined6JRLU",
        "siparisID": "5d5a5553e214452f0c9f4664",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 300,
        "estimatedTime": "172800000",
        "operationType": 0,
        "nextOperationType": 9,
        "nextOperationName": "last",
        "nextOperationID": "last",
        "previousProductionOrderID": "5d5a5555e214452f0c9f4666",
        "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousOperationName": "TEST Taşlama QQ Oper.",
        "operationID": "5d4c259e9a4e4d17a8792787",
        "operationName": "TEST Parlatma Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566202989917",
                "endDate": "1566202989917",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5a5c6de214452f0c9f466a"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a9c02758af51eb0da21a3",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "87129",
        "siparisColor": "54333a",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566213545447",
        "inputProductName": "Mandal",
        "inputProductID": "5d5a54e0e214452f0c9f465f",
        "inputProductQuantity": 500,
        "inputProductUnite": "gram",
        "outputProductName": "100-Mandal",
        "outputProductID": "5d5a9c14758af51eb0da21af",
        "outputProductQuantity": 500,
        "outputProductUnite": "gram",
        "produced": 12,
        "productedList": [],
        "wastage": 1,
        "wastageList": [],
        "rework": 1,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/03/2019 08:32",
        "finishDate": "21/03/2019 16:44",
        "assignedDate": "1566213545447",
        "plannedStartDate": "1566220374000",
        "plannedFinishDate": "1566396774000",
        "updatedDate": "1566219918870",
        "box": [
            {
                "status": 2,
                "color": "blue",
                "code": "102",
                "productionOrderID": "5d5a9c60758af51eb0da21b4",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d3969f8f6a7c04c80eb3874",
                "machineName": "Taşlama 2",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-HR9hetY5SX-102",
                "wastage": 1,
                "produced": 9,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566219839752",
                "updatedDate": "1566219870356",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a9c60758af51eb0da21b5",
                "_id": "5d5a5c92e214452f0c9f466d",
                "quantity": 0,
                "capacity": 8,
                "cells": [
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219842957,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219842994
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219845159,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219845208
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566219863383,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "22.0"
                        },
                        "time": 1566219863430
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219848413,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219848453
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219850145,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219850182
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219851704,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219851737
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219853353,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219853397
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566219870323,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "33.0"
                        },
                        "time": 1566219870356
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            },
            {
                "status": 2,
                "color": "blue",
                "code": "103",
                "productionOrderID": "5d5a9c60758af51eb0da21b4",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d3969f8f6a7c04c80eb3874",
                "machineName": "Taşlama 2",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-LTDxt2D6AL-103",
                "wastage": 0,
                "produced": 6,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566219905379",
                "updatedDate": "1566219916675",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a9c60758af51eb0da21b5",
                "_id": "5d5a5c9ce214452f0c9f466e",
                "quantity": 0,
                "capacity": 11,
                "cells": [
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219907348,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219907379
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219908729,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219908763
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219915044,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219915075
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219910220,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219910252
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219912307,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219912339
                    },
                    {
                        "machineID": "5d3969f8f6a7c04c80eb3874",
                        "machineName": "Taşlama 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219916626,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566219916671
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d3969f8f6a7c04c80eb3874",
        "machineName": "Taşlama 2",
        "operatorID": "5d2446b74b093612a8d3e1f3",
        "operatorTelephone": "05051071532",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5a9c60758af51eb0da21b4",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedyxWbR",
        "siparisID": "5d5a9c5f758af51eb0da21b3",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 200,
        "estimatedTime": "176400000",
        "operationType": 0,
        "nextOperationType": 1,
        "nextOperationName": "TEST Taşlama QQ Oper.",
        "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousProductionOrderID": "first",
        "previousOperationID": "first",
        "previousOperationName": "first",
        "operationID": "5d4c25519a4e4d17a8792786",
        "operationName": "TEST Taşlama Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566219769524",
                "endDate": "1566219769524",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5a9df9758af51eb0da21b8"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a9c02758af51eb0da21ae",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "87129",
        "siparisColor": "54333a",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566213545447",
        "inputProductName": "100-Mandal",
        "inputProductID": "5d5a9c14758af51eb0da21af",
        "inputProductQuantity": 200,
        "inputProductUnite": "gram",
        "outputProductName": "101-100-Mandal",
        "outputProductID": "5d5a9c24758af51eb0da21b0",
        "outputProductQuantity": 200,
        "outputProductUnite": "gram",
        "produced": 0,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/05/2019 08:32",
        "finishDate": "28/05/2019 08:32",
        "assignedDate": "1566213545447",
        "plannedStartDate": "1566219343000",
        "plannedFinishDate": "1566392143000",
        "updatedDate": "1566296586199",
        "box": [],
        "machineID": "5d3969f8f6a7c04c80eb3874",
        "machineName": "Taşlama 2",
        "operatorID": "5d2446c24b093612a8d3e1f4",
        "operatorTelephone": "05051071533",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5a9c60758af51eb0da21b5",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedbas3q",
        "siparisID": "5d5a9c5f758af51eb0da21b3",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 200,
        "estimatedTime": "172800000",
        "operationType": 1,
        "nextOperationType": 0,
        "nextOperationName": "TEST Parlatma Oper.",
        "nextOperationID": "5d4c259e9a4e4d17a8792787",
        "previousProductionOrderID": "5d5a9c60758af51eb0da21b4",
        "previousOperationID": "5d4c25519a4e4d17a8792786",
        "previousOperationName": "TEST Taşlama Oper.",
        "operationID": "5d4c25b5cf3cf35c8825bfc6",
        "operationName": "TEST Taşlama QQ Oper.",
        "workStation": "5d24461a4b093612a8d3e1eb",
        "workstationName": "X makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa QQ Operatör",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "startDate": "1566219783762",
                "endDate": "1566296556378",
                "isWorking": 0,
                "reasonDesc": "gggh",
                "_id": "5d5a9e07758af51eb0da21ba"
            },
            {
                "operatorName": "Alaa QQ Operatör",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "startDate": "1566296586199",
                "endDate": "1566296586199",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5bca0af135d320c8efb2ae"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a9c02758af51eb0da21ae",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "87129",
        "siparisColor": "54333a",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566213545447",
        "inputProductName": "Yatak",
        "inputProductID": "5d5a9bf8758af51eb0da21ad",
        "inputProductQuantity": 200,
        "inputProductUnite": "Adet",
        "outputProductName": "102-Yatak",
        "outputProductID": "5d5a9c3f758af51eb0da21b1",
        "outputProductQuantity": 200,
        "outputProductUnite": "Adet",
        "produced": 11,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/06/2019 08:32",
        "finishDate": "23/06/2019 08:32",
        "assignedDate": "1566213545447",
        "plannedStartDate": "1566219360976",
        "plannedFinishDate": "1566219360976",
        "updatedDate": "1566304409958",
        "box": [
            {
                "status": 2,
                "color": "blue",
                "code": "104",
                "productionOrderID": "5d5a9c60758af51eb0da21b6",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationName": "TEST Parlatma QQ Oper.\t",
                "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "previousOperationName": "TEST Taşlama QQ Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-QjteDs454L-104",
                "wastage": 0,
                "produced": 5,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566219987162",
                "updatedDate": "1566220572830",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a9c61758af51eb0da21b7",
                "_id": "5d5a5ca7e214452f0c9f466f",
                "quantity": 0,
                "capacity": 18,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566219997796,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "11-12-14"
                        },
                        "time": 1566219997828
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566220011161,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "4-6-8"
                        },
                        "time": 1566220011190
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566220020570,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "22-77-9"
                        },
                        "time": 1566220020601
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566220483308,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "11-12-0"
                        },
                        "time": 1566220483348
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566220572738,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "9-9-8"
                        },
                        "time": 1566220572785
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            },
            {
                "status": 2,
                "color": "blue",
                "code": "105",
                "productionOrderID": "5d5a9c60758af51eb0da21b6",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationName": "TEST Parlatma QQ Oper.\t",
                "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "previousOperationName": "TEST Taşlama QQ Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-9w3N8FQahS-105",
                "wastage": 0,
                "produced": 4,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566225947583",
                "updatedDate": "1566297604772",
                "finishDate": "1566200148451",
                "next_productionOrderID": "5d5a9c61758af51eb0da21b7",
                "_id": "5d5a5cafe214452f0c9f4670",
                "quantity": 0,
                "capacity": 18,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566225955294,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "1-4-6"
                        },
                        "time": 1566225955327
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566225976732,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "22-66-6"
                        },
                        "time": 1566225976775
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566284561514,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "12-14-0"
                        },
                        "time": 1566284561565
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566297604717,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "11-12-45"
                        },
                        "time": 1566297604758
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            },
            {
                "status": 2,
                "color": "blue",
                "code": "112",
                "productionOrderID": "5d5a9c60758af51eb0da21b6",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationName": "TEST Parlatma QQ Oper.\t",
                "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "previousOperationName": "TEST Taşlama QQ Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-NoYWB9X5wC-112",
                "wastage": 0,
                "produced": 2,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566304179151",
                "updatedDate": "1566304405566",
                "finishDate": "1566298243265",
                "next_productionOrderID": "5d5a9c61758af51eb0da21b7",
                "_id": "5d5bd1ca642c86206079fca0",
                "quantity": 0,
                "capacity": 26,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304199572,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "3-7-3"
                        },
                        "time": 1566304199635
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304405451,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "5-5-7"
                        },
                        "time": 1566304405516
                    },
                    {
                        "cellNo": 2,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d396954f6a7c04c80eb3872",
        "machineName": "Parlatma 2",
        "operatorID": "5d2446b74b093612a8d3e1f3",
        "operatorTelephone": "05051071532",
        "reworkBoxesList": [
            {
                "status": 9,
                "color": "blue",
                "code": "112",
                "productionOrderID": "5d5a9c61758af51eb0da21b7",
                "usedBoxID": "5d5a5cafe214452f0c9f4670",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationID": "last",
                "nextOperationName": "last",
                "previousOperationID": "5d4c259e9a4e4d17a8792787",
                "previousOperationName": "TEST Parlatma Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma QQ Oper.\t",
                "workStation": "5d24461a4b093612a8d3e1eb",
                "qrcode": "5d2444d94b093612a8d3e1e5-NoYWB9X5wC-112",
                "wastage": 0,
                "produced": 0,
                "rework": 2,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566304003641",
                "updatedDate": "1566304082472",
                "finishDate": "1566298243265",
                "next_productionOrderID": "last",
                "_id": "5d5bd1ca642c86206079fca0",
                "quantity": 0,
                "capacity": 26,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 0,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566304022213,
                            "fromBoxID": "5d5bd1ca642c86206079fca0",
                            "fromBoxCode": "105",
                            "fromBoxCellNo": "0",
                            "toBoxCode": "112",
                            "toBoxID": "5d5a5cafe214452f0c9f4670",
                            "value": "55.0"
                        },
                        "time": 1566304022246
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 1,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566304082438,
                            "fromBoxID": "5d5bd1ca642c86206079fca0",
                            "fromBoxCode": "105",
                            "fromBoxCellNo": "1",
                            "toBoxCode": "112",
                            "toBoxID": "5d5a5cafe214452f0c9f4670",
                            "value": "40.0"
                        },
                        "time": 1566304082472
                    },
                    {
                        "cellNo": 2,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "operationValues": [
            {
                "name": "RHA",
                "unite": "milimetre",
                "normalValue": 10,
                "minValue": 9.8,
                "maxValue": 10.3,
                "isOptional": true
            },
            {
                "name": "Radius",
                "unite": "milimetre",
                "normalValue": 6,
                "minValue": 5.9,
                "maxValue": 6.1,
                "isOptional": true
            },
            {
                "name": "PV",
                "unite": "milimetre",
                "normalValue": 15,
                "minValue": 14,
                "maxValue": 16,
                "isOptional": false
            }
        ],
        "_id": "5d5a9c60758af51eb0da21b6",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedw42vk",
        "siparisID": "5d5a9c5f758af51eb0da21b3",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 200,
        "estimatedTime": "172800000",
        "operationType": 0,
        "nextOperationType": 1,
        "nextOperationName": "TEST Parlatma QQ Oper.\t",
        "nextOperationID": "5d5a9b1c758af51eb0da21a8",
        "previousProductionOrderID": "5d5a9c60758af51eb0da21b5",
        "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousOperationName": "TEST Taşlama QQ Oper.",
        "operationID": "5d4c259e9a4e4d17a8792787",
        "operationName": "TEST Parlatma Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566219779129",
                "endDate": "1566219779129",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5a9e03758af51eb0da21b9"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5a9c02758af51eb0da21ae",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "87129",
        "siparisColor": "54333a",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566213545447",
        "inputProductName": "102-Yatak",
        "inputProductID": "5d5a9c3f758af51eb0da21b1",
        "inputProductQuantity": 200,
        "inputProductUnite": "Adet",
        "outputProductName": "0004-102-Yatak",
        "outputProductID": "5d5a9c4c758af51eb0da21b2",
        "outputProductQuantity": 200,
        "outputProductUnite": "Adet",
        "produced": 6,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/05/2019 08:32",
        "finishDate": "12/06/2019 08:32",
        "assignedDate": "1566213545447",
        "plannedStartDate": "1566219343000",
        "plannedFinishDate": "1566651343000",
        "updatedDate": "1566304478224",
        "box": [
            {
                "status": 3,
                "color": "blue",
                "code": "105",
                "productionOrderID": "5d5a9c61758af51eb0da21b7",
                "usedBoxID": "5d5bd1ca642c86206079fca0",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationID": "last",
                "nextOperationName": "last",
                "previousOperationID": "5d4c259e9a4e4d17a8792787",
                "previousOperationName": "TEST Parlatma Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma QQ Oper.\t",
                "workStation": "5d24461a4b093612a8d3e1eb",
                "qrcode": "5d2444d94b093612a8d3e1e5-9w3N8FQahS-105",
                "wastage": 0,
                "produced": 4,
                "rework": 0,
                "temp_wastage": 1,
                "temp_produced": 1,
                "temp_rework": 2,
                "startedDate": "1566303967786",
                "updatedDate": "1566304122832",
                "finishDate": "1566200148451",
                "next_productionOrderID": "last",
                "_id": "5d5a5cafe214452f0c9f4670",
                "quantity": 0,
                "capacity": 18,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 0,
                        "status": 4,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304122800,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "1-4-6"
                        },
                        "time": 1566304122832
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 1,
                        "status": 5,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304000033,
                            "fromBoxID": "5d5a5cafe214452f0c9f4670",
                            "fromBoxCode": "105",
                            "fromBoxCellNo": "1",
                            "toBoxCode": "112",
                            "toBoxID": "null",
                            "value": "null"
                        },
                        "time": 1566304000065
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 2,
                        "status": 5,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304070863,
                            "fromBoxID": "5d5a5cafe214452f0c9f4670",
                            "fromBoxCode": "105",
                            "fromBoxCellNo": "2",
                            "toBoxCode": "112",
                            "toBoxID": "5d5bd1ca642c86206079fca0",
                            "value": "null"
                        },
                        "time": 1566304070913
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 5,
                        "status": 6,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566304106529,
                            "fromBoxID": "5d5a5cafe214452f0c9f4670",
                            "fromBoxCode": "105",
                            "fromBoxCellNo": "5",
                            "toBoxCode": "105",
                            "toBoxID": "5d5a5cafe214452f0c9f4670",
                            "value": "6.0"
                        },
                        "time": 1566304106562
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            },
            {
                "status": 3,
                "color": "blue",
                "code": "112",
                "productionOrderID": "5d5a9c61758af51eb0da21b7",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d396954f6a7c04c80eb3872",
                "machineName": "Parlatma 2",
                "operationID": "5d5a9b1c758af51eb0da21a8",
                "nextOperationID": "last",
                "nextOperationName": "last",
                "previousOperationID": "5d4c259e9a4e4d17a8792787",
                "previousOperationName": "TEST Parlatma Oper.",
                "BomList": [
                    {
                        "estTime": 781200000,
                        "status": 0,
                        "createdDate": "1566213545553",
                        "_id": "5d5a9c02758af51eb0da21ae",
                        "productID": "5d5a9bf8758af51eb0da21ad",
                        "productName": "Yatak",
                        "name": "Yatak",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5a9c14758af51eb0da21af",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5a9c24758af51eb0da21b0",
                                    "adet": "200",
                                    "birim": "gram"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Yatak",
                                    "id": "5d5a9bf8758af51eb0da21ad",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 5.9,
                                            "maxValue": 6.1,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "102-Yatak",
                                    "id": "5d5a9c3f758af51eb0da21b1",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "0004-102-Yatak",
                                    "id": "5d5a9c4c758af51eb0da21b2",
                                    "adet": "200",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Parlatma QQ Oper.\t",
                                    "id": "5d5a9b1c758af51eb0da21a8",
                                    "estTime": "259200000",
                                    "count": 4,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "Radius",
                                            "unite": "milimetre",
                                            "normalValue": 6,
                                            "minValue": 6.1,
                                            "maxValue": 5.9,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma QQ Oper.\t",
                "workStation": "5d24461a4b093612a8d3e1eb",
                "qrcode": "5d2444d94b093612a8d3e1e5-NoYWB9X5wC-112",
                "wastage": 0,
                "produced": 2,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 2,
                "temp_rework": 0,
                "startedDate": "1566304470217",
                "updatedDate": "1566304470217",
                "finishDate": "1566298243265",
                "next_productionOrderID": "last",
                "_id": "5d5bd1ca642c86206079fca0",
                "quantity": 0,
                "capacity": 26,
                "cells": [
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 0,
                        "status": 4,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304465277,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "3-7-3"
                        },
                        "time": 1566304465308
                    },
                    {
                        "machineID": "5d396954f6a7c04c80eb3872",
                        "machineName": "Parlatma 2",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 1,
                        "status": 4,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566304467507,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "5-5-7"
                        },
                        "time": 1566304467557
                    },
                    {
                        "cellNo": 2,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d396954f6a7c04c80eb3872",
        "machineName": "Parlatma 2",
        "operatorID": "5d2446c24b093612a8d3e1f4",
        "operatorTelephone": "05051071533",
        "reworkBoxesList": [],
        "operationValues": [
            {
                "name": "RHA",
                "unite": "milimetre",
                "normalValue": 10,
                "minValue": 9.8,
                "maxValue": 10.3,
                "isOptional": true
            },
            {
                "name": "Radius",
                "unite": "milimetre",
                "normalValue": 6,
                "minValue": 6.1,
                "maxValue": 5.9,
                "isOptional": true
            },
            {
                "name": "PV",
                "unite": "milimetre",
                "normalValue": 15,
                "minValue": 14,
                "maxValue": 16,
                "isOptional": false
            }
        ],
        "_id": "5d5a9c61758af51eb0da21b7",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefined6tUsN",
        "siparisID": "5d5a9c5f758af51eb0da21b3",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 200,
        "estimatedTime": "259200000",
        "operationType": 1,
        "nextOperationType": 9,
        "nextOperationName": "last",
        "nextOperationID": "last",
        "previousProductionOrderID": "5d5a9c60758af51eb0da21b6",
        "previousOperationID": "5d4c259e9a4e4d17a8792787",
        "previousOperationName": "TEST Parlatma Oper.",
        "operationID": "5d5a9b1c758af51eb0da21a8",
        "operationName": "TEST Parlatma QQ Oper.\t",
        "workStation": "5d24461a4b093612a8d3e1eb",
        "workstationName": "x makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa QQ Operatör",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "startDate": "1566219785770",
                "endDate": "1566219785770",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5a9e09758af51eb0da21bb"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5ba755f135d320c8efb2a0",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S26476",
        "siparisColor": "f7b530",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566284078413",
        "inputProductName": "Mandal",
        "inputProductID": "5d5a54e0e214452f0c9f465f",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "100-Mandal",
        "outputProductID": "5d5ba76af135d320c8efb2a1",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 18,
        "productedList": [],
        "wastage": 1,
        "wastageList": [],
        "rework": 1,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/04/2019 08:32",
        "finishDate": "12/05/2019 08:32",
        "assignedDate": "1566284078413",
        "plannedStartDate": "1566303651000",
        "plannedFinishDate": "1566480051000",
        "updatedDate": "1566298619846",
        "box": [
            {
                "status": 2,
                "color": "blue",
                "code": "108",
                "productionOrderID": "5d5ba9dbf135d320c8efb2a5",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566284078533",
                        "_id": "5d5ba755f135d320c8efb2a0",
                        "productID": "5d5ba74af135d320c8efb29f",
                        "productName": "Dolap",
                        "name": "Dolap",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5ba778f135d320c8efb2a2",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Dolap",
                                    "id": "5d5ba74af135d320c8efb29f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Dolap",
                                    "id": "5d5ba795f135d320c8efb2a3",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-1WzxqUN1Cl-108",
                "wastage": 1,
                "produced": 9,
                "rework": 1,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566288685167",
                "updatedDate": "1566288740556",
                "finishDate": "1566284078525",
                "next_productionOrderID": "5d5ba9dcf135d320c8efb2a6",
                "_id": "5d5baaedf135d320c8efb2ab",
                "quantity": 0,
                "capacity": 26,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288687830,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288687866
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288690649,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288690685
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288695950,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288695993
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 3,
                        "reason": {
                            "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                            "reasonName": "failed measurements",
                            "createdDate": 1566288718893,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "44.0"
                        },
                        "time": 1566288718946
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566288728321,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "3.0"
                        },
                        "time": 1566288728368
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288698491,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288698540
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288700925,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288700981
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 8,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288702810,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288702915
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 9,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288738229,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288738299
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 11,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288705888,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288706382
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 12,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288740468,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566288740538
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            },
            {
                "status": 2,
                "color": "blue",
                "code": "110",
                "productionOrderID": "5d5ba9dbf135d320c8efb2a5",
                "usedBoxID": "null",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25519a4e4d17a8792786",
                "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationName": "TEST Taşlama QQ Oper.",
                "previousOperationID": "first",
                "previousOperationName": "first",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566284078533",
                        "_id": "5d5ba755f135d320c8efb2a0",
                        "productID": "5d5ba74af135d320c8efb29f",
                        "productName": "Dolap",
                        "name": "Dolap",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5ba778f135d320c8efb2a2",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Dolap",
                                    "id": "5d5ba74af135d320c8efb29f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Dolap",
                                    "id": "5d5ba795f135d320c8efb2a3",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-5Igj0UnLGg-110",
                "wastage": 0,
                "produced": 9,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566298598891",
                "updatedDate": "1566298617397",
                "finishDate": "1566284078525",
                "next_productionOrderID": "5d5ba9dcf135d320c8efb2a6",
                "_id": "5d5baafdf135d320c8efb2ad",
                "quantity": 0,
                "capacity": 26,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298601806,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298601859
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298603793,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298603844
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298605611,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298605655
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298610271,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298610343
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298612276,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298612356
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 6,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298607130,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298607179
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 7,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298613901,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298613960
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 8,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298615649,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298615741
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 9,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566298617304,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "0"
                        },
                        "time": 1566298617371
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d2446034b093612a8d3e1ea",
        "machineName": "Taşlama",
        "operatorID": "5d2446b74b093612a8d3e1f3",
        "operatorTelephone": "05051071532",
        "reworkBoxesList": [
            {
                "status": 6,
                "color": "blue",
                "code": "111",
                "productionOrderID": "5d5ba9dcf135d320c8efb2a6",
                "usedBoxID": "5d5baafdf135d320c8efb2ad",
                "productID": null,
                "machineID": "5d2446034b093612a8d3e1ea",
                "machineName": "Taşlama",
                "operationID": "5d4c25b5cf3cf35c8825bfc6",
                "nextOperationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationName": "TEST Parlatma Oper.",
                "previousOperationID": "5d4c25519a4e4d17a8792786",
                "previousOperationName": "TEST Taşlama Oper.",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566284078533",
                        "_id": "5d5ba755f135d320c8efb2a0",
                        "productID": "5d5ba74af135d320c8efb29f",
                        "productName": "Dolap",
                        "name": "Dolap",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5ba778f135d320c8efb2a2",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Dolap",
                                    "id": "5d5ba74af135d320c8efb29f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Dolap",
                                    "id": "5d5ba795f135d320c8efb2a3",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Taşlama QQ Oper.",
                "workStation": "5d24461a4b093612a8d3e1eb",
                "qrcode": "5d2444d94b093612a8d3e1e5-hIvBNpWJUt-111",
                "wastage": 0,
                "produced": 0,
                "rework": 2,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "1566298681758",
                "updatedDate": "1566298762500",
                "finishDate": "1566298243265",
                "next_productionOrderID": "5d5ba9dcf135d320c8efb2a7",
                "_id": "5d5bd14a642c86206079fc9f",
                "quantity": 0,
                "capacity": 18,
                "cells": [
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 0,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566298752631,
                            "fromBoxID": "5d5bd14a642c86206079fc9f",
                            "fromBoxCode": "110",
                            "fromBoxCellNo": "0",
                            "toBoxCode": "111",
                            "toBoxID": "5d5baafdf135d320c8efb2ad",
                            "value": "8.0"
                        },
                        "time": 1566298752662
                    },
                    {
                        "machineID": "5d2446034b093612a8d3e1ea",
                        "machineName": "Taşlama",
                        "operatorID": "5d2446c24b093612a8d3e1f4",
                        "operatorName": "Alaa QQ Operatör",
                        "cellNo": 1,
                        "status": 2,
                        "reason": {
                            "reasonID": "5d274f7f918a30153cf98094",
                            "reasonName": "Radius Değeri",
                            "createdDate": 1566298762469,
                            "fromBoxID": "5d5bd14a642c86206079fc9f",
                            "fromBoxCode": "110",
                            "fromBoxCellNo": "1",
                            "toBoxCode": "111",
                            "toBoxID": "5d5baafdf135d320c8efb2ad",
                            "value": "10.0"
                        },
                        "time": 1566298762499
                    },
                    {
                        "cellNo": 2,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 3,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 4,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 5,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 8,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 9,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 10,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 11,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "operationValues": [],
        "_id": "5d5ba9dbf135d320c8efb2a5",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedhJjwG",
        "siparisID": "5d5ba9d6f135d320c8efb2a4",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 100,
        "estimatedTime": "176400000",
        "operationType": 0,
        "nextOperationType": 1,
        "nextOperationName": "TEST Taşlama QQ Oper.",
        "nextOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousProductionOrderID": "first",
        "previousOperationID": "first",
        "previousOperationName": "first",
        "operationID": "5d4c25519a4e4d17a8792786",
        "operationName": "TEST Taşlama Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566288591315",
                "endDate": "1566288591315",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5baacff135d320c8efb2a8"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5ba755f135d320c8efb2a0",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S26476",
        "siparisColor": "f7b530",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566284078413",
        "inputProductName": "100-Mandal",
        "inputProductID": "5d5ba76af135d320c8efb2a1",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "101-100-Mandal",
        "outputProductID": "5d5ba778f135d320c8efb2a2",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 0,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/03/2019 08:32",
        "finishDate": "21/03/2019 08:32",
        "assignedDate": "1566284078413",
        "plannedStartDate": "1566288309000",
        "plannedFinishDate": "1566461109000",
        "updatedDate": "1566288599275",
        "box": [],
        "machineID": "5d2446034b093612a8d3e1ea",
        "machineName": "Taşlama",
        "operatorID": "5d2446c24b093612a8d3e1f4",
        "operatorTelephone": "05051071533",
        "reworkBoxesList": [],
        "operationValues": [],
        "_id": "5d5ba9dcf135d320c8efb2a6",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedxPBKI",
        "siparisID": "5d5ba9d6f135d320c8efb2a4",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 100,
        "estimatedTime": "172800000",
        "operationType": 1,
        "nextOperationType": 0,
        "nextOperationName": "TEST Parlatma Oper.",
        "nextOperationID": "5d4c259e9a4e4d17a8792787",
        "previousProductionOrderID": "5d5ba9dbf135d320c8efb2a5",
        "previousOperationID": "5d4c25519a4e4d17a8792786",
        "previousOperationName": "TEST Taşlama Oper.",
        "operationID": "5d4c25b5cf3cf35c8825bfc6",
        "operationName": "TEST Taşlama QQ Oper.",
        "workStation": "5d24461a4b093612a8d3e1eb",
        "workstationName": "X makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa QQ Operatör",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "startDate": "1566288599275",
                "endDate": "1566288599275",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5baad7f135d320c8efb2a9"
            }
        ],
        "__v": 0
    },
    {
        "level": 1,
        "BoMID": "5d5ba755f135d320c8efb2a0",
        "isStart": true,
        "CancelDate": "null",
        "CancelReason": "null",
        "siparisNo": "S26476",
        "siparisColor": "f7b530",
        "mamulKodu": "eklenmemiş",
        "status": 1,
        "stopsList": [],
        "mamulAciklama": "0",
        "createdDate": "1566284078413",
        "inputProductName": "Dolap",
        "inputProductID": "5d5ba74af135d320c8efb29f",
        "inputProductQuantity": 100,
        "inputProductUnite": "Adet",
        "outputProductName": "102-Dolap",
        "outputProductID": "5d5ba795f135d320c8efb2a3",
        "outputProductQuantity": 100,
        "outputProductUnite": "Adet",
        "produced": 10,
        "productedList": [],
        "wastage": 0,
        "wastageList": [],
        "rework": 0,
        "reworkList": [],
        "quality_control": 0,
        "quality_controlList": [],
        "startDate": "12/03/2019 08:32",
        "finishDate": "12/04/2019 08:32",
        "assignedDate": "1566284078413",
        "plannedStartDate": "1566288348478",
        "plannedFinishDate": "1566288348478",
        "updatedDate": "1566303863154",
        "box": [
            {
                "status": 0,
                "color": "blue",
                "code": "109",
                "productionOrderID": "5d5ba9dcf135d320c8efb2a7",
                "usedBoxID": "null",
                "productID": "null",
                "machineID": "5d2445fb4b093612a8d3e1e9",
                "machineName": "Partlatma",
                "operationID": "5d4c259e9a4e4d17a8792787",
                "nextOperationID": "last",
                "nextOperationName": "last",
                "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
                "previousOperationName": "TEST Taşlama QQ Oper.",
                "BomList": [
                    {
                        "estTime": 522000000,
                        "status": 0,
                        "createdDate": "1566284078533",
                        "_id": "5d5ba755f135d320c8efb2a0",
                        "productID": "5d5ba74af135d320c8efb29f",
                        "productName": "Dolap",
                        "name": "Dolap",
                        "facID": "5d2444d94b093612a8d3e1e5",
                        "__v": 0,
                        "route": [
                            {
                                "input": {
                                    "name": "Mandal",
                                    "id": "5d5a54e0e214452f0c9f465f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Taşlama Oper.",
                                    "id": "5d4c25519a4e4d17a8792786",
                                    "estTime": "176400000",
                                    "count": 1
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            },
                            {
                                "input": {
                                    "name": "100-Mandal",
                                    "id": "5d5ba76af135d320c8efb2a1",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "101-100-Mandal",
                                    "id": "5d5ba778f135d320c8efb2a2",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 1,
                                    "name": "TEST Taşlama QQ Oper.",
                                    "id": "5d4c25b5cf3cf35c8825bfc6",
                                    "estTime": "172800000",
                                    "count": 2,
                                    "operationValues": []
                                },
                                "workStationID": "5d24461a4b093612a8d3e1eb"
                            },
                            {
                                "input": {
                                    "name": "Dolap",
                                    "id": "5d5ba74af135d320c8efb29f",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "output": {
                                    "name": "102-Dolap",
                                    "id": "5d5ba795f135d320c8efb2a3",
                                    "adet": "100",
                                    "birim": "Adet"
                                },
                                "operation": {
                                    "type": 0,
                                    "name": "TEST Parlatma Oper.",
                                    "id": "5d4c259e9a4e4d17a8792787",
                                    "estTime": "172800000",
                                    "count": 3,
                                    "operationValues": [
                                        {
                                            "name": "RHA",
                                            "unite": "milimetre",
                                            "normalValue": 10,
                                            "minValue": 9.8,
                                            "maxValue": 10.3,
                                            "isOptional": true
                                        },
                                        {
                                            "name": "PV",
                                            "unite": "milimetre",
                                            "normalValue": 15,
                                            "minValue": 14,
                                            "maxValue": 16,
                                            "isOptional": false
                                        }
                                    ]
                                },
                                "workStationID": "5d2445e74b093612a8d3e1e8"
                            }
                        ]
                    }
                ],
                "operationName": "TEST Parlatma Oper.",
                "workStation": "5d2445e74b093612a8d3e1e8",
                "qrcode": "5d2444d94b093612a8d3e1e5-9CPvgN7fR9-109",
                "wastage": 0,
                "produced": 10,
                "rework": 0,
                "temp_wastage": 0,
                "temp_produced": 0,
                "temp_rework": 0,
                "startedDate": "12/03/2019 08:32",
                "updatedDate": "12/04/2019 08:32",
                "finishDate": "1566284078525",
                "next_productionOrderID": "last",
                "_id": "5d5baaf5f135d320c8efb2ac",
                "quantity": 0,
                "capacity": 40,
                "cells": [
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 0,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288882764,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "15-1"
                        },
                        "time": 1566288882798
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 1,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288899966,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "111-0"
                        },
                        "time": 1566288900001
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 2,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566288908289,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "14-0"
                        },
                        "time": 1566288908325
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 3,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289281198,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "6-55"
                        },
                        "time": 1566289281253
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 4,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289303219,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "5-7"
                        },
                        "time": 1566289303282
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 5,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289386234,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "7-9"
                        },
                        "time": 1566289386304
                    },
                    {
                        "cellNo": 6,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 7,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 8,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289397887,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "8-0"
                        },
                        "time": 1566289397968
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 9,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289412184,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "55-1"
                        },
                        "time": 1566289412276
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 10,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566289422462,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "88-99"
                        },
                        "time": 1566289422537
                    },
                    {
                        "machineID": "5d2445fb4b093612a8d3e1e9",
                        "machineName": "Partlatma",
                        "operatorID": "5d2446b74b093612a8d3e1f3",
                        "operatorName": "Alaa Operatör",
                        "cellNo": 11,
                        "status": 1,
                        "reason": {
                            "reasonID": "null",
                            "reasonName": "null",
                            "createdDate": 1566296490896,
                            "fromBoxID": "null",
                            "fromBoxCode": "null",
                            "fromBoxCellNo": "null",
                            "toBoxCode": "null",
                            "toBoxID": "null",
                            "value": "11-2"
                        },
                        "time": 1566296491261
                    },
                    {
                        "cellNo": 12,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 13,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 14,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 15,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 16,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 17,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 18,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 19,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 20,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 21,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 22,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 23,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 24,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 25,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 26,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 27,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 28,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 29,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 30,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 31,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 32,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 33,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 34,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 35,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 36,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 37,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 38,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    },
                    {
                        "cellNo": 39,
                        "status": 0,
                        "reason": null,
                        "time": 1232131,
                        "machineID": "null",
                        "machineName": "null",
                        "operatorID": "null",
                        "operatorName": "null"
                    }
                ],
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0
            }
        ],
        "machineID": "5d2445fb4b093612a8d3e1e9",
        "machineName": "Partlatma",
        "operatorID": "5d2446b74b093612a8d3e1f3",
        "operatorTelephone": "05051071532",
        "reworkBoxesList": [],
        "operationValues": [
            {
                "name": "RHA",
                "unite": "milimetre",
                "normalValue": 10,
                "minValue": 9.8,
                "maxValue": 10.3,
                "isOptional": true
            },
            {
                "name": "PV",
                "unite": "milimetre",
                "normalValue": 15,
                "minValue": 14,
                "maxValue": 16,
                "isOptional": false
            }
        ],
        "_id": "5d5ba9dcf135d320c8efb2a7",
        "type": "0",
        "code": "1",
        "unit_price": 0,
        "QRCode": "P_O_undefinedwoJ0Y",
        "siparisID": "5d5ba9d6f135d320c8efb2a4",
        "facID": "5d2444d94b093612a8d3e1e5",
        "assignedUserID": "eklenmemiş",
        "updatedUserID": "eklenmemiş",
        "description": "eklenmemiş",
        "variantCode": "eklenmemiş",
        "variantDescription": "eklenmemiş",
        "createdUserID": "2132121",
        "fisNo": "eklenmemiş",
        "cariKodu": "eklenmemiş",
        "name": "eklenmemiş",
        "plannedQuantity": 100,
        "estimatedTime": "172800000",
        "operationType": 0,
        "nextOperationType": 9,
        "nextOperationName": "last",
        "nextOperationID": "last",
        "previousProductionOrderID": "5d5ba9dcf135d320c8efb2a6",
        "previousOperationID": "5d4c25b5cf3cf35c8825bfc6",
        "previousOperationName": "TEST Taşlama QQ Oper.",
        "operationID": "5d4c259e9a4e4d17a8792787",
        "operationName": "TEST Parlatma Oper.",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "workstationName": "cnc makinalar",
        "userList": [],
        "operatorList": [
            {
                "operatorName": "Alaa Operatör",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "startDate": "1566288605448",
                "endDate": "1566288605448",
                "isWorking": 1,
                "reasonDesc": "null",
                "_id": "5d5baaddf135d320c8efb2aa"
            }
        ],
        "__v": 0
    }
]

export class SimpleObject {
    value: number | string;
    name: string;
    icon?: string;
    badge?: string;
}

let DateFormat: SimpleObject[] = [
    { value: "d/M/yy", name: "Gün/Ay/YIL" },
    { value: "M/d/yy", name: "Ay/Gün/YIL" },
    { value: "yy/M/d", name: "YIL/Ay/Gün" },
    { value: "yy/M/d HH:MM:SS", name: "YIL/Ay/Gün Saat:Dakika:Saniye" },
    { value: "yy/M/d HH:MM", name: "YIL/Ay/Gün Saat:Dakika" },
    { value: "HH:MM:SS", name: "Saat:Dakika:Saniye" },
    { value: "HH", name: "Saat" },
];


let complaintsData = [
    { complaint: "Cold pizza", count: 780 },
    { complaint: "Not enough cheese", count: 120 },
    { complaint: "Underbaked or Overbaked", count: 52 },
    { complaint: "Delayed delivery", count: 1123 },
    { complaint: "Damaged pizza", count: 321 },
    { complaint: "Incorrect billing", count: 89 },
    { complaint: "Wrong size delivered", count: 222 }
];




var boxes_list = [
    {
        "status": 3,
        "color": "blue",
        "code": "11-101",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "5d67b71ce9b9065b84009921",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-R4jjf0KxMb",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 1,
        "temp_produced": 16,
        "temp_rework": 1,
        "startedDate": "1567080034716",
        "updatedDate": "1567080034716",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71ce9b9065b84009922",
            "code": "11-103",
            "capacity": 11,
            "used": 3,
            "qrcode": "box-qudY6qYRix",
            "isUsed": true
        },
        "_id": "5d67b71ce9b9065b84009920",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079486534,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567079487043
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079914874,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567079914907
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080002936,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567080002967
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 6,
                "reason": {
                    "reasonID": "5d2f37851c3c1c2d58fc1c2e",
                    "reasonName": "failed measurements",
                    "createdDate": 1567079235971,
                    "fromBoxID": "5d67b71ce9b9065b84009920",
                    "fromBoxCode": "11-101",
                    "fromBoxCellNo": "3",
                    "toBoxCode": "11-101",
                    "toBoxID": "5d67b71ce9b9065b84009920",
                    "value": "22.0"
                },
                "time": 1567079236453
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 4,
                "status": 5,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079265548,
                    "fromBoxID": "5d67b71ce9b9065b84009920",
                    "fromBoxCode": "11-101",
                    "fromBoxCellNo": "4",
                    "toBoxCode": "11-102",
                    "toBoxID": "null",
                    "value": "null"
                },
                "time": 1567079265881
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 5,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080020454,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567080020487
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 6,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079330530,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567079330766
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079170474,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-Q"
                },
                "time": 1567079170715
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079170474,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-Q"
                },
                "time": 1567079170715
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079170474,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-Q"
                },
                "time": 1567079170715
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567079170474,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-Q"
                },
                "time": 1567079170715
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 4,
        "color": "blue",
        "code": "11-102",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "5d67b71ce9b9065b84009920",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-5YIhNf1Xu3",
        "wastage": 0,
        "produced": 0,
        "rework": 1,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567079262917",
        "updatedDate": "1567079293182",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71ce9b9065b84009921",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 2,
                "reason": {
                    "reasonID": "5d2ec8a664f5d7221c68dd31",
                    "reasonName": "normal",
                    "createdDate": 1567079292846,
                    "fromBoxID": "5d67b71ce9b9065b84009921",
                    "fromBoxCode": "11-101",
                    "fromBoxCellNo": "0",
                    "toBoxCode": "11-102",
                    "toBoxID": "5d67b71ce9b9065b84009920",
                    "value": "22.0"
                },
                "time": 1567079293182
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-103",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-qudY6qYRix",
        "wastage": 0,
        "produced": 3,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567080020561",
        "updatedDate": "1567080020561",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71ce9b9065b84009922",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 3,
        "color": "blue",
        "code": "11-104",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-zA36zgLeuC",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 5,
        "temp_rework": 0,
        "startedDate": "1567080398204",
        "updatedDate": "1567081773761",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71de9b9065b84009924",
            "code": "11-105",
            "capacity": 11,
            "used": 7,
            "qrcode": "box-7oYBAXzg8N",
            "isUsed": true
        },
        "_id": "5d67b71ce9b9065b84009923",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080412752,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567080412791
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081736303,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567081736335
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081754994,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567081755033
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081773729,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567081773761
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 4,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080167519,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567080167554
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 5,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080175037,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567080175069
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 6,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080117318,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-1"
                },
                "time": 1567080117350
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080117318,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-1"
                },
                "time": 1567080117350
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080117318,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-1"
                },
                "time": 1567080117350
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080117318,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-1"
                },
                "time": 1567080117350
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567080117318,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-1"
                },
                "time": 1567080117350
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-105",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-7oYBAXzg8N",
        "wastage": 0,
        "produced": 7,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567081773925",
        "updatedDate": "1567081773925",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009924",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 3,
        "color": "blue",
        "code": "11-106",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-pEnpyd0vKD",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 6,
        "temp_rework": 0,
        "startedDate": "1567081884057",
        "updatedDate": "1567083181450",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71de9b9065b84009926",
            "code": "11-107",
            "capacity": 11,
            "used": 3,
            "qrcode": "box-vmA9nA9Vmt",
            "isUsed": true
        },
        "_id": "5d67b71de9b9065b84009925",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567082307453,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567082307497
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567082174439,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567082174469
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567082830166,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567082830197
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567083181419,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567083181450
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 4,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081844134,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "2-2-3-4"
                },
                "time": 1567081844167
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 5,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567082950054,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567082950085
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 6,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567082107999,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567082108030
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081844134,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "2-2-3-4"
                },
                "time": 1567081844167
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081844134,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "2-2-3-4"
                },
                "time": 1567081844167
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081844134,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "2-2-3-4"
                },
                "time": 1567081844167
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567081844134,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "2-2-3-4"
                },
                "time": 1567081844167
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-107",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-vmA9nA9Vmt",
        "wastage": 0,
        "produced": 3,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567083649532",
        "updatedDate": "1567083649532",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009926",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 3,
        "color": "blue",
        "code": "11-108",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-W5w1J2gzb0",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 5,
        "temp_rework": 0,
        "startedDate": "1567084296580",
        "updatedDate": "1567085274277",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71de9b9065b84009928",
            "code": "11-109",
            "capacity": 11,
            "used": 4,
            "qrcode": "box-l9D9sn2zgB",
            "isUsed": true
        },
        "_id": "5d67b71de9b9065b84009927",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084291843,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567084291881
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084231975,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567084232005
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084741366,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567084741398
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085144819,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567085144855
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 4,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085274245,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567085274277
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 5,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 6,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567084058539,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "3-4-5-5"
                },
                "time": 1567084058572
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-109",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-l9D9sn2zgB",
        "wastage": 0,
        "produced": 4,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567085274359",
        "updatedDate": "1567085274359",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009928",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 3,
        "color": "blue",
        "code": "11-110",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-QUtVoKODXD",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 6,
        "temp_rework": 0,
        "startedDate": "1567085852306",
        "updatedDate": "1567088477457",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71de9b9065b8400992a",
            "code": "11-111",
            "capacity": 11,
            "used": 2,
            "qrcode": "box-UDlbcmmiR3",
            "isUsed": true
        },
        "_id": "5d67b71de9b9065b84009929",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085809941,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567085809975
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567087117245,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567087117275
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088100448,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567088100478
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088477427,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567088477457
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 4,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085782083,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567085782117
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 5,
                "status": 4,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085789116,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "0"
                },
                "time": 1567085789153
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 6,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085747928,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-9"
                },
                "time": 1567085747963
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085747928,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-9"
                },
                "time": 1567085747963
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085747928,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-9"
                },
                "time": 1567085747963
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085747928,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-9"
                },
                "time": 1567085747963
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567085747928,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "1-1-1-9"
                },
                "time": 1567085747963
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-111",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-UDlbcmmiR3",
        "wastage": 0,
        "produced": 2,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567088477790",
        "updatedDate": "1567088477790",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b8400992a",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 3,
        "color": "blue",
        "code": "11-112",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": null,
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "5d5cf8b48f4f4634a0b992de",
        "nextOperationID": "last",
        "nextOperationName": "last",
        "previousOperationID": "5d5cf89c8f4f4634a0b992dd",
        "previousOperationName": "centring operasyonu",
        "BomList": [
            {
                "estTime": 194766000,
                "status": 0,
                "createdDate": "1566307766546",
                "_id": "5d5cf6ce8f4f4634a0b992d0",
                "productID": "5d5cf6a38f4f4634a0b992cd",
                "productName": "lens1",
                "name": "üretim kısmı reçetesi ",
                "facID": "5d2444d94b093612a8d3e1e5",
                "__v": 0,
                "route": [
                    {
                        "input": {
                            "name": "lens1",
                            "id": "5d5cf6a38f4f4634a0b992cd",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 1",
                            "id": "5d5cf7cd8f4f4634a0b992d5",
                            "estTime": "3661000",
                            "count": 1,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-lens1",
                            "id": "5d5cf7f28f4f4634a0b992d7",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Taşlama operasyon yüzey 2",
                            "id": "5d5cf7db8f4f4634a0b992d6",
                            "estTime": "3661000",
                            "count": 2,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "100-100-lens1",
                            "id": "5d5cf7fd8f4f4634a0b992d8",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 1.yüzey",
                            "id": "5d28403c918a30153cf9809c",
                            "estTime": "3661000",
                            "count": 3,
                            "operationValues": [
                                {
                                    "name": "a",
                                    "unite": "santimetreküp",
                                    "normalValue": 32,
                                    "minValue": 2,
                                    "maxValue": 3,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-100-100-lens1",
                            "id": "5d5cf80a8f4f4634a0b992d9",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "90000000",
                            "count": 4,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-100-100-lens1",
                            "id": "5d5cf8268f4f4634a0b992da",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "Parlatma operasyonu 2.yüzey",
                            "id": "5d284040918a30153cf9809d",
                            "estTime": "3661000",
                            "count": 5,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "t001-t111-t001-100-100-lens1",
                            "id": "5d5cf84f8f4f4634a0b992db",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "Parlatma Kalite Kontrol Operasyonu",
                            "id": "5d24465d4b093612a8d3e1f0",
                            "estTime": "86400000",
                            "count": 6,
                            "operationValues": []
                        },
                        "workStationID": "5d24461a4b093612a8d3e1eb"
                    },
                    {
                        "input": {
                            "name": "t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf85a8f4f4634a0b992dc",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 0,
                            "name": "centring operasyonu",
                            "id": "5d5cf89c8f4f4634a0b992dd",
                            "estTime": "3661000",
                            "count": 7,
                            "operationValues": [
                                {
                                    "name": "tepe",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak1",
                                    "unite": "Adet",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "pak2",
                                    "unite": "Litre",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                },
                                {
                                    "name": "x",
                                    "unite": "santimetreküp",
                                    "normalValue": 1,
                                    "minValue": 1,
                                    "maxValue": 2,
                                    "isOptional": true
                                }
                            ]
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    },
                    {
                        "input": {
                            "name": "11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8c68f4f4634a0b992df",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "output": {
                            "name": "11-11-t111-t001-t111-t001-100-100-lens1",
                            "id": "5d5cf8ce8f4f4634a0b992e0",
                            "adet": "1",
                            "birim": "Adet"
                        },
                        "operation": {
                            "type": 1,
                            "name": "centring kalite kontrol operasyonu",
                            "id": "5d5cf8b48f4f4634a0b992de",
                            "estTime": "3661000",
                            "count": 8,
                            "operationValues": []
                        },
                        "workStationID": "5d2445e74b093612a8d3e1e8"
                    }
                ]
            }
        ],
        "operationName": "centring kalite kontrol operasyonu",
        "workStation": "5d2445e74b093612a8d3e1e8",
        "qrcode": "box-AudPF0TaVq",
        "wastage": 0,
        "produced": 11,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 3,
        "temp_rework": 0,
        "startedDate": "1567088547925",
        "updatedDate": "1567089837697",
        "finishDate": "1567076711477",
        "next_productionOrderID": "last",
        "depoBox": {
            "_id": "5d67b71de9b9065b8400992c",
            "code": "11-113",
            "capacity": 11,
            "used": 1,
            "qrcode": "box-cueYRz8gKQ",
            "isUsed": true
        },
        "_id": "5d67b71de9b9065b8400992b",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 0,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088650318,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567088650411
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 1,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088715660,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567088715697
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 2,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567089673612,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567089673656
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 3,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567089767571,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567089767607
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 4,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 5,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446c24b093612a8d3e1f4",
                "operatorName": "Alaa QQ Operatör",
                "cellNo": 6,
                "status": 7,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567089837612,
                    "fromBoxID": null,
                    "fromBoxCode": null,
                    "fromBoxCellNo": null,
                    "toBoxCode": null,
                    "toBoxID": null,
                    "value": "null"
                },
                "time": 1567089837697
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 7,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 8,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 9,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            },
            {
                "machineID": "5d6515741a7af642d4946809",
                "machineName": "centring makinası",
                "operatorID": "5d2446b74b093612a8d3e1f3",
                "operatorName": "Alaa Operatör",
                "cellNo": 10,
                "status": 1,
                "reason": {
                    "reasonID": "null",
                    "reasonName": "null",
                    "createdDate": 1567088529433,
                    "fromBoxID": "null",
                    "fromBoxCode": "null",
                    "fromBoxCellNo": "null",
                    "toBoxCode": "null",
                    "toBoxID": "null",
                    "value": "5-7-8-9"
                },
                "time": 1567088529466
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 8,
        "color": "blue",
        "code": "11-113",
        "productionOrderID": "5d67b63ce9b9065b8400991f",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "5d6515741a7af642d4946809",
        "machineName": "centring makinası",
        "operationID": "eklenmedi",
        "nextOperationID": "depo",
        "nextOperationName": "depo",
        "previousOperationID": "depo",
        "previousOperationName": "depo",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "depo",
        "qrcode": "box-cueYRz8gKQ",
        "wastage": 0,
        "produced": 1,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567089837734",
        "updatedDate": "1567089837734",
        "finishDate": "1567076711477",
        "next_productionOrderID": "depo",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b8400992c",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-114",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-sGKZTWt56B",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b8400992d",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-115",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-Q1MIwgp48j",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b8400992e",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-116",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-mBPlILMI54",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b8400992f",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-117",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-pIImwagXzX",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009930",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-118",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-R4wy6l2869",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009931",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-119",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-wMrE4NOz6A",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009932",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    },
    {
        "status": 0,
        "color": "blue",
        "code": "11-120",
        "productionOrderID": "eklenmedi",
        "usedBoxID": "null",
        "productID": "eklenmedi",
        "machineID": "eklenmedi",
        "machineName": "eklenmedi",
        "operationID": "eklenmedi",
        "nextOperationID": "eklenmedi",
        "nextOperationName": "eklenmedi",
        "previousOperationID": "eklenmedi",
        "previousOperationName": "eklenmedi",
        "BomList": [],
        "operationName": "eklenmedi",
        "workStation": "eklenmedi",
        "qrcode": "box-LY1Xp6pnrq",
        "wastage": 0,
        "produced": 0,
        "rework": 0,
        "temp_wastage": 0,
        "temp_produced": 0,
        "temp_rework": 0,
        "startedDate": "1567076711477",
        "updatedDate": "1567076711477",
        "finishDate": "1567076711477",
        "next_productionOrderID": "eklenmedi",
        "depoBox": {
            "_id": "null",
            "code": "null",
            "capacity": 0,
            "used": 0,
            "qrcode": "null",
            "isUsed": false
        },
        "_id": "5d67b71de9b9065b84009933",
        "quantity": 0,
        "capacity": 11,
        "cells": [
            {
                "cellNo": 0,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 1,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 2,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 3,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 4,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 5,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 6,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 7,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 8,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 9,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            },
            {
                "cellNo": 10,
                "status": 0,
                "reason": null,
                "time": 1232131,
                "machineID": "null",
                "machineName": "null",
                "operatorID": "null",
                "operatorName": "null"
            }
        ],
        "facID": "5d2444d94b093612a8d3e1e5",
        "__v": 0
    }
]
@Injectable()
export class Service2 {
    getEmployees() {
        return employees;
    }
    mappingMachines(datas) {
        const map = new Map();
        var maks = 0;
        for (const entry of datas) {
            const { machineID, produced, rework, wastage } = entry;



            let known = map.get(machineID);
            if (!known) {
                // No, use this one (note: I would make a copy rather than modifying the original)
                known = entry;
                map.set(machineID, entry);
                // Initialize its max with the values from this entry
                entry.max_produced = produced; // makinada 1 den fazla üretim var ise o üretimlerden en iyisi 

            } else {
                // Update our max values
                known.max_produced = Math.max(known.max_produced, produced);

                // Add in the current entries to the sum
                known.rework += rework;
                known.wastage += wastage
                known.produced += produced; // makinadaki birden fazla üretimin toplamı
            }
        }
        var a = [...map.values()];
        console.log(a);
        return a

    }

    getTvScreenReport(data) {
        var groups = data.reduce(function (obj, item) {
            obj[item.workStation] = obj[item.workStation] || [];

            obj[item.workStation].push(item);
            return obj;
        }, {});
        var myArray = Object.keys(groups).map(function (key) {
            return { workStation: groups[key][0].workStation, workstationName: groups[key][0].workstationName, data: groups[key] };
        });
        return this.getTvScreenReport2(myArray)
    }

    getTvScreenReport2(array) {

        var liste = [];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            var groups = array[index].data.reduce(function (obj, item) {
                obj[item.machineID] = obj[item.machineID] || [];

                obj[item.machineID].push(item);
                return obj;
            }, {});

            liste.push(
                {
                    "workStationID": element.workStation,
                    "workStationName": element.workstationName,
                    "data": Object.keys(groups).map(function (key) {
                        return { machineID: groups[key][0].machineID, machineName: groups[key][0].machineName, data: groups[key] };
                    })
                }

            );
        };

        //liste);
        return this.getTvScreenReport3(liste)

    }
    getTvScreenReport3(liste) {
        var test = []
        //"liste");
        //liste);
        var a = [];
        for (let index = 0; index < liste.length; index++) {
            const data1 = liste[index].data;
            var b = [];
            for (let index = 0; index < data1.length; index++) {
                const element = data1[index];
                var toplam_uretim = 0;
                var toplam_rework = 0;
                var toplam_fire = 0;
                if (element.data) {
                    var test1 = [];
                    var test3 = [];
                    for (let index = 0; index < element.data.length; index++) {
                        const data2 = element.data[index];

                        if (data2.box.length > 0) {
                            var test = [];

                            for (let index = 0; index < data2.box.length; index++) {
                                const data3 = data2.box[index];
                                test.push([data3.code, data3.produced]);
                                test3.push([data3.code, data3.produced]);
                                toplam_uretim += data3.produced;
                                toplam_rework += data3.rework;
                                toplam_fire += data3.wastage;
                            }
                        }
                        data2.testbir = test
                        test1.push({ 'kutular': test, 'operation': data2.operationName })
                    }


                }
                if (element.machineName != "eklenmemiş") {
                    b.push({ 'machineName': element.machineName, "toplam_uretim": toplam_uretim, "toplam_rework": toplam_rework, "toplam_fire": toplam_fire, 'machineID': element.machineID, 'produced': test1, 'produced2': test3, 'data': element.data });
                }

            }
            a.push({ 'workStationName': liste[index].workStationName, 'workStationID': liste[index].workStationID, 'data': b });


        }
        return a
    }
    operasyonRapor(datas) {
        const map = new Map();
        var maks = 0;
        for (const entry of datas) {
            const { operationID, produced, rework, wastage } = entry;



            let known = map.get(operationID);
            if (!known) {
                // No, use this one (note: I would make a copy rather than modifying the original)
                known = entry;
                map.set(operationID, entry);
                // Initialize its max with the values from this entry
                entry.max_produced = produced; // makinada 1 den fazla üretim var ise o üretimlerden en iyisi 

            } else {
                // Update our max values
                known.max_produced = Math.max(known.max_produced, produced);

                // Add in the current entries to the sum
                known.rework += rework;
                known.wastage += wastage
                known.produced += produced; // makinadaki birden fazla üretimin toplamı
            }
        }
        var a = [...map.values()];
        return a
    }
    getBoxesReport() {
        return boxes_list;
    }
    getSingleMachine(machineID) {
        //machineID);

        return productOrdersData.filter(items => items.machineID === machineID);


    }

    getBoxesInsideBomList(productionOrder) {
        //productionOrder);

    }
    getTasks() {
        return productOrdersData;
    }

    makinaRapor() {
        let deneme;
        var max = 0;
        let map = productOrdersData.reduce((prev, next) => {


            if (next.machineID in prev) {
                prev[next.machineID].produced += next.produced;
                prev[next.machineID].wastage += next.wastage;
                prev[next.machineID].rework += next.rework;


                if (next.produced > max) {
                    max = prev[next.machineID].produced;
                    prev[next.machineID].max = max;

                }


            } else {
                prev[next.machineID] = next;

            }
            return prev;

        }, {});

        let result = Object.keys(map).map(machineID => map[machineID]);
        //"deneme", deneme);
        //"makina", result);
        return result

    }
    getLineHeights(): SimpleObject[] {
        return DateFormat;
    }
    refreshDatas(a) {
        //a);
        return this.getTvScreenReport(a);
    }


    refreshBoxesData(a) {
        return a
    }
    getSingleBox(boxID) {
        return boxes_list.filter(items => items._id === boxID);
    }
    getFilterBox(list, boxStatus) {
        //"filter box");
        //boxStatus);
        if (boxStatus == 999) {
            return list
        } else {
            if (boxStatus == 1) {
                //"burada")
                return list.filter(items =>
                    items.status === 1 || items.status === 6 || items.status === 2 || items.status === 9);
            }
            else if (boxStatus == 8) {
                return list.filter(items =>
                    items.status === 8 || items.status === 10);
            }
            else {
                return list.filter(items => items.status === boxStatus);
            }


        }

    }

    getAllProductionOrders(datas) {
        let groups = datas.reduce((prev, next) => {
            prev[next.inputProductID] = prev[next.inputProductID] || [];
            prev[next.inputProductID].push(next);
            return prev;
        }, {});

        var myArray = Object.keys(groups).map(function (key) {

            return {
                inputProduct: groups[key][0].inputProductID,
                inputProductName: groups[key][0].inputProductName,
                input_product_code: groups[key][0].input_product_code,
                val: groups[key]
            };
        });

        var liste1 = [];
        for (let index = 0; index < myArray.length; index++) {
            const element = myArray[index];
            var sum_planned_quantity = 0;
            var sum_used_quantity = 0;

            for (let index = 0; index < element.val.length; index++) {

                const element2 = element.val[index];
                sum_planned_quantity += element2.plannedQuantity;
                sum_used_quantity += element2.produced;
            }
            element['sum_planned_quantity'] = sum_planned_quantity;
            element['sum_used_quantity'] = sum_used_quantity
            liste1.push(element);
        }
        //"test list")
        //liste1);
        return liste1
    }

    getProducts(products, id) {
        //id)
        if (id != 999) {
            return products.filter(a => a.productType == id)
        } else {
            return products;
        }

    }
    mappingPersonels(datas) {
        const map = new Map();
        var maks = 0;
        for (const entry of datas) {
            const { operatorID, produced, rework, wastage } = entry;



            let known = map.get(operatorID);
            if (!known) {
                // No, use this one (note: I would make a copy rather than modifying the original)
                known = entry;
                map.set(operatorID, entry);
                // Initialize its max with the values from this entry
                entry.max_produced = produced; // makinada 1 den fazla üretim var ise o üretimlerden en iyisi 

            } else {
                // Update our max values
                known.max_produced = Math.max(known.max_produced, produced);

                // Add in the current entries to the sum
                known.rework += rework;
                known.wastage += wastage
                known.produced += produced; // makinadaki birden fazla üretimin toplamı
            }
        }
        var a = [...map.values()];
        return a

    }

    getReplaceProductionOrderAndProduct(datas) {
        let groups = datas.reduce((prev, next) => {
            prev[next.inputProductID] = prev[next.inputProductID] || [];
            prev[next.inputProductID].push(next);
            return prev;
        }, {});

        var myArray = Object.keys(groups).map(function (key) {

            return {
                inputProduct: groups[key][0].inputProductID,
                inputProductName: groups[key][0].inputProductName,
                input_product_code: groups[key][0].input_product_code,
                val: groups[key]
            };
        });
        var liste1 = [];
        for (let index = 0; index < myArray.length; index++) {
            const element = myArray[index];
            var sum_planned_quantity = 0;
            var sum_used_quantity = 0;
            var sum_of_stock = 0;
            for (let index = 0; index < element.val.length; index++) {

                const element2 = element.val[index];
                sum_planned_quantity += element2.plannedQuantity;
                sum_used_quantity += element2.produced;
                sum_of_stock = element2.products.quantity;
            }
            element['sum_planned_quantity'] = sum_planned_quantity;
            element['sum_used_quantity'] = sum_used_quantity
            element['sum_of_stock'] = sum_of_stock
            liste1.push(element);

        }
        //"test list")
        //liste1);
        return liste1
    }
    mappingProduct(datas) {
        const map = new Map();
        var maks = 0;
        for (const entry of datas) {
            const { inputProductID, produced, rework, wastage } = entry;
            let known = map.get(inputProductID);
            if (!known) {
                // No, use this one (note: I would make a copy rather than modifying the original)
                known = entry;
                map.set(inputProductID, entry);
                // Initialize its max with the values from this entry
                entry.max_produced = produced; // makinada 1 den fazla üretim var ise o üretimlerden en iyisi 
            } else {
                // Update our max values
                known.max_produced = Math.max(known.max_produced, produced);

                // Add in the current entries to the sum
                known.rework += rework;
                known.wastage += wastage
                known.produced += produced; // makinadaki birden fazla üretimin toplamı
            }
        }
        var a = [...map.values()];
        return a
    }


    getProductionOrderWithSiparis(datas) {
        let groups = datas.reduce((prev, next) => {
            prev[next.siparisID] = prev[next.siparisID] || [];
            prev[next.siparisID].push(next);
            return prev;
        }, {});

        var myArray = Object.keys(groups).map(function (key) {

            return {
                siparisID: groups[key][0].siparisID,
                siparisNo: groups[key][0].siparisNo,
                plannedStartDate:groups[key][0].plannedStartDate,
                plannedFinishDate:groups[key][0].plannedFinishDate,
                startDate:groups[key][0].startDate,
                finishDate:groups[key][0].finishDate,
                isRunningBox:groups[key][0].isRunningBox,
                val: groups[key],
                operatorList:groups[key][0].operatorList
            };
        });

        var liste1 = [];
        for (let index = 0; index < myArray.length; index++) {
            const element = myArray[index];
            var sum_planned_quantity = 0;
            var sum_used_quantity = 0;
            var countOfProductionOrder = 0;

            for (let index = 0; index < element.val.length; index++) {

                const element2 = element.val[index];
                sum_planned_quantity += element2.plannedQuantity;
                sum_used_quantity += element2.produced;
                countOfProductionOrder++;
            }
            element['sum_planned_quantity'] = sum_planned_quantity;
            element['sum_used_quantity'] = sum_used_quantity
            element['countOfProductionOrder'] = countOfProductionOrder
            liste1.push(element);
        }
        //"test list")
        //liste1);
        return liste1
    }

    getSinglePersonel(_id) {
        //_id)
    }

    getComplaintsData() {
        var data = complaintsData.sort(function (a, b) {
            return b.count - a.count;
        }),
            totalCount = data.reduce(function (prevValue, item) {
                return prevValue + item.count;
            }, 0),
            cumulativeCount = 0;
        return data.map(function (item, index) {
            cumulativeCount += item.count;
            return {
                complaint: item.complaint,
                count: item.count,
                cumulativePercent: Math.round(cumulativeCount * 100 / totalCount)
            };
        });
    }

    /* 
   getCustomers() {
       return tasks;
   }
   operasyonToplamRapor(){
      
       let map = tasks.reduce((prev, next) => {
           if (next.operationName in prev) {
               prev[next.operationName].produced += next.produced;
               prev[next.operationName].wastage += next.wastage;
               prev[next.operationName].rework += next.rework;
           } else {
               prev[next.operationName] = next;
           }
           return prev;
       }, {});
 
       let result = Object.keys(map).map(operationName => map[operationName]);
       //"result", result);
       return result
 
   }
 
   operasyonRapor() {
       var groups = tasks.reduce(function (obj, item) {
           obj[item.operationName] = obj[item.operationName] || [];
 
           obj[item.operationName].push(item);
           return obj;
       }, {});
       var myArray = Object.keys(groups).map(function (key) {
           return { operationName: groups[key][0].operationName, data: groups[key] };
       });
       return myArray
 
   }*/

    /*
     operatorRapor() {
 
         var groups = tasks.reduce(function (obj, item) {
             obj[item.operatorID] = obj[item.operatorID] || [];
 
             obj[item.operatorID].push(item);
             return obj;
         }, {});
         var myArray = Object.keys(groups).map(function (key) {
             return { operatorName: groups[key][0].operatorName, data: groups[key] };
         });
         return myArray
 
 
     }*/
    /* test4() {
         let data = [
             { "id": "2018", "name": "test", "total": 1200 },
             { "id": "2019", "name": "wath", "total": 1500 },
             { "id": "2019", "name": "wath", "total": 1800 },
             { "id": "2020", "name": "zooi", "total": 1000 },
         ];
 
         let map = tasks.reduce((prev, next) => {
             if (next.operationName in prev) {
                 prev[next.operationName].produced += next.produced;
                 prev[next.operationName].wastage += next.wastage;
                 prev[next.operationName].rework += next.rework;
             } else {
                 prev[next.operationName] = next;
             }
             return prev;
         }, {});
 
         let result = Object.keys(map).map(operationName => map[operationName]);
         //"result", result);
         return result
     }
     getOrders() {
         return tasks;
     }
     getPopulationData(): Task[] {
         return tasks;
     }
 */
    /* burada yapılması gerekenler 
    
    sorgu oluşturulup sorguya göre oluşan tabloları çağırmak olmalı 
    1-> Makinalar depertmanlarına göre ayrılıp departmanlarlarda ki makinaların bilgileri cartlar içerisinde görüntülenmeli 
    
    
    
    */

    istasyonMakina() {

        var groups = productOrdersData.reduce(function (obj, item) {
            obj[item.workStation] = obj[item.workStation] || [];

            obj[item.workStation].push(item);
            return obj;
        }, {});
        var myArray = Object.keys(groups).map(function (key) {
            return { workStation: groups[key][0].workStation, data: groups[key] };
        });

        //"birim", myArray);
        return myArray


    }



}
