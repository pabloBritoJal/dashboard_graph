import { Category, GraphLink, GraphNode } from "../types/graph_types";

export const graphData: { nodes: GraphNode[]; links: GraphLink[] } = 
{
  "nodes": [
    {
      "id": "Dealer_0",
      "name": "Dealer 40337",
      "type": "Dealer" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "Heading_1",
      "name": "Domestic",
      "type": "Heading" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "Segment_2",
      "name": "Domestic Cars",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_3",
      "name": "554927",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554927,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chrysler",
      "Model": "300",
      "Trim": "300C Varvatos Collection Luxury",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_4",
      "name": "531049",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531049,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Camaro",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_5",
      "name": "Domestic HD Trucks",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_6",
      "name": "513854",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513854,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Heading_7",
      "name": "Import",
      "type": "Heading" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "Segment_8",
      "name": "Import SUV's",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_9",
      "name": "593536",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 593536,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Suzuki",
      "Model": "Grand Vitara",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 2.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_10",
      "name": "552396",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552396,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Nissan",
      "Model": "Armada",
      "Trim": "SL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "Segment_11",
      "name": "Domestic Full Sized Truck",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_12",
      "name": "520585",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520585,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_13",
      "name": "536936",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536936,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Sonic",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_14",
      "name": "500122",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500122,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_15",
      "name": "560953",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560953,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.7L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_16",
      "name": "Domestic SUV's",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_17",
      "name": "511394",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511394,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Jeep",
      "Model": "Renegade",
      "Trim": "Islander",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, MultiAir, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_18",
      "name": "538461",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538461,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "R/T Scat Pack",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, MDS, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_19",
      "name": "570974",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570974,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Monte Carlo",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.4 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Heading_20",
      "name": "Highline",
      "type": "Heading" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "Segment_21",
      "name": "Import Highline Cars",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_22",
      "name": "600688",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600688,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2006,
      "Make": "Audi",
      "Model": "A6",
      "Trim": "3.2 Avant Quattro",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "V6, 3.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_23",
      "name": "Domestic Light Trucks",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_24",
      "name": "508541",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508541,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "Elevation",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_25",
      "name": "602385",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602385,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO Turbo Dsl",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_26",
      "name": "579997",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579997,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "Segment_27",
      "name": "Import Cars",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_28",
      "name": "594430",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594430,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Volkswagen",
      "Model": "CC",
      "Trim": "Lux Limited",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_29",
      "name": "584934",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584934,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "BMW",
      "Model": "6 Series",
      "Trim": "640i",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_30",
      "name": "559126",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559126,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2011,
      "Make": "Mercedes-Benz",
      "Model": "E",
      "Trim": "E 550 4MATIC",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 5.5 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_31",
      "name": "Import Full Size Truck",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_32",
      "name": "526433",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526433,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Toyota",
      "Model": "Tundra",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_33",
      "name": "562025",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562025,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2009,
      "Make": "Nissan",
      "Model": "Titan",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_34",
      "name": "543461",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543461,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "Lexus",
      "Model": "IS",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 2.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_35",
      "name": "Import Crossovers",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_36",
      "name": "517385",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517385,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Toyota",
      "Model": "RAV4",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_37",
      "name": "529233",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529233,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Jeep",
      "Model": "Cherokee",
      "Trim": "Latitude",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, PZEV, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_38",
      "name": "Import Light Truck",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_39",
      "name": "508407",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508407,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Nissan",
      "Model": "Frontier",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_40",
      "name": "566732",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566732,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_41",
      "name": "558333",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558333,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_42",
      "name": "561167",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 561167,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "INFINITI",
      "Model": "M",
      "Trim": "M45",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 4.5 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_43",
      "name": "520577",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520577,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Porsche",
      "Model": "Panamera",
      "Trim": "GTS Sport Turismo",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_44",
      "name": "539233",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539233,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2016,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera Black Edition",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, 3.4 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_45",
      "name": "553994",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553994,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ford",
      "Model": "Fiesta",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_46",
      "name": "515941",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515941,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Suburban",
      "Trim": "Premier",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_47",
      "name": "581448",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581448,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado (Classic) 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "Segment_48",
      "name": "Domestic Commercial Vehicles",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_49",
      "name": "505852",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505852,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Savana 3500 Passenger",
      "Trim": "LT Regular Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_50",
      "name": "545368",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545368,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoTec, FF, 4.3L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_51",
      "name": "501324",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501324,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Buick",
      "Model": "Enclave",
      "Trim": "Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_52",
      "name": "578618",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578618,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Oldsmobile",
      "Model": "Alero",
      "Trim": "GL",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.4 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_53",
      "name": "584733",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584733,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, Turbo Diesel, 7.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_54",
      "name": "591762",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591762,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_55",
      "name": "560280",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560280,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_56",
      "name": "573930",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573930,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Dodge",
      "Model": "Intrepid",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_57",
      "name": "525225",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525225,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Freightliner",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_58",
      "name": "607609",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607609,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Volvo",
      "Model": "XC90",
      "Trim": "B6 Plus Bright Theme",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Drive-E, Turbo, Supercharged, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_59",
      "name": "505141",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505141,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, Hybrid, PowerBoost, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_60",
      "name": "512919",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512919,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoTec3, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_61",
      "name": "Exotic Model",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_62",
      "name": "515727",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515727,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Lamborghini",
      "Model": "Urus",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_63",
      "name": "Domestic Crossovers",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_64",
      "name": "503354",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503354,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, MultiAir, PZEV, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_65",
      "name": "517909",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517909,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2019,
      "Make": "FIAT",
      "Model": "124 Spider",
      "Trim": "Lusso",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, MultiAir, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_66",
      "name": "534546",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534546,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "Transit 350",
      "Trim": "XL w/Low Roof w/60/40 Side Door Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_67",
      "name": "607999",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607999,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Suburban",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_68",
      "name": "541217",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541217,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Buick",
      "Model": "Encore",
      "Trim": "Leather",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_69",
      "name": "581292",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581292,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_70",
      "name": "562031",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562031,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_71",
      "name": "532972",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532972,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_72",
      "name": "522994",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522994,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_73",
      "name": "585340",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585340,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_74",
      "name": "505745",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505745,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_75",
      "name": "582491",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582491,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_76",
      "name": "521214",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521214,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_77",
      "name": "542413",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542413,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_78",
      "name": "570320",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570320,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_79",
      "name": "508675",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508675,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Toyota",
      "Model": "RAV4",
      "Trim": "XLE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Dynamic-Force, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_80",
      "name": "590163",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590163,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Ford",
      "Model": "Explorer",
      "Trim": "Eddie Bauer",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, SOHC, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_81",
      "name": "Domestic Highline Cars",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_82",
      "name": "534715",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534715,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2016,
      "Make": "Cadillac",
      "Model": "ATS",
      "Trim": "2.0L Turbo Premium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_83",
      "name": "510061",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510061,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "High Country",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_84",
      "name": "530876",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530876,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Limited Sterling Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, VVT, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_85",
      "name": "536142",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536142,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Audi",
      "Model": "A4",
      "Trim": "Prestige",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_86",
      "name": "561080",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 561080,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2009,
      "Make": "Nissan",
      "Model": "Maxima",
      "Trim": "SV",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_87",
      "name": "569332",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569332,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2006,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "EX-L",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, VTEC, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_88",
      "name": "531116",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531116,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Bentley",
      "Model": "Continental",
      "Trim": "GT",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "W12, Twin Turbo, 6.0 Liter",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_89",
      "name": "537459",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537459,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_90",
      "name": "565422",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565422,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Subaru",
      "Model": "Impreza",
      "Trim": "2.5i",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_91",
      "name": "509966",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509966,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera 4 Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_92",
      "name": "545189",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545189,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_93",
      "name": "600048",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600048,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_94",
      "name": "552234",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552234,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Scion",
      "Model": "tC",
      "Trim": "Release Series 7.0 Hatchback",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_95",
      "name": "574840",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 574840,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.4L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_96",
      "name": "529741",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529741,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_97",
      "name": "578263",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578263,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "5-Cyl, 3.7 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_98",
      "name": "587745",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587745,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_99",
      "name": "547019",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547019,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "X",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_100",
      "name": "500136",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500136,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "1500 Classic",
      "Trim": "Tradesman",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_101",
      "name": "529152",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529152,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Dsl, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_102",
      "name": "567918",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567918,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Avalanche",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.25ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_103",
      "name": "510351",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510351,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Bronco",
      "Trim": "Big Bend",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, EcoBoost, Turbo, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_104",
      "name": "520235",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520235,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_105",
      "name": "538943",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538943,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_106",
      "name": "606043",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606043,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera S",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_107",
      "name": "543586",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543586,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "INFINITI",
      "Model": "Q60",
      "Trim": "Journey",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_108",
      "name": "Import Highline SUVs",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_109",
      "name": "606834",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606834,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Defender 90",
      "Trim": "Carpathian Edition",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_110",
      "name": "556587",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 556587,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Nissan",
      "Model": "Rogue",
      "Trim": "S Krom Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_111",
      "name": "564988",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564988,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "GT Deluxe",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_112",
      "name": "563221",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563221,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.4L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_113",
      "name": "503291",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503291,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Porsche",
      "Model": "718 Boxster",
      "Trim": "GTS 4.0 Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_114",
      "name": "561699",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 561699,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2010,
      "Make": "Mercedes-Benz",
      "Model": "SLK",
      "Trim": "SLK 350 Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_115",
      "name": "607577",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607577,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Trailblazer",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.3 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.3,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_116",
      "name": "501016",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501016,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, Hybrid, PowerBoost, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_117",
      "name": "556027",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 556027,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_118",
      "name": "548723",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548723,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_119",
      "name": "520578",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520578,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_120",
      "name": "572909",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572909,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_121",
      "name": "543164",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543164,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_122",
      "name": "516485",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516485,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_123",
      "name": "568097",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568097,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_124",
      "name": "533887",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533887,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_125",
      "name": "501724",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501724,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_126",
      "name": "567123",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567123,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2011,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_127",
      "name": "567145",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567145,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.9 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_128",
      "name": "594417",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594417,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 7.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_129",
      "name": "529336",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529336,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLT All Terrain",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, Trbo Dsl, 2.8L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_130",
      "name": "555405",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 555405,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_131",
      "name": "566443",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566443,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_132",
      "name": "572215",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572215,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_133",
      "name": "512116",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512116,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ram",
      "Model": "1500 Classic",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_134",
      "name": "582570",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582570,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_135",
      "name": "607914",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607914,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_136",
      "name": "519844",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519844,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Acura",
      "Model": "RDX",
      "Trim": "AcuraWatch Plus Pkg",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_137",
      "name": "575972",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575972,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_138",
      "name": "579674",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579674,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 16V, 2.0L/2.3L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_139",
      "name": "577650",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577650,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "Taurus",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_140",
      "name": "500471",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500471,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Cadillac",
      "Model": "Escalade",
      "Trim": "Sport Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_141",
      "name": "505263",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505263,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Honda",
      "Model": "CR-V",
      "Trim": "Touring",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_142",
      "name": "596126",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596126,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_143",
      "name": "597515",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597515,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Nissan",
      "Model": "Altima",
      "Trim": "XE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_144",
      "name": "545563",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545563,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_145",
      "name": "570418",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570418,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_146",
      "name": "557332",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557332,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Toyota",
      "Model": "4Runner",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_147",
      "name": "592766",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592766,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "Transit 150",
      "Trim": "Low Roof w/LWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Flex Fuel, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_148",
      "name": "597567",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597567,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_149",
      "name": "526958",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526958,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Acura",
      "Model": "NSX",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, Hybrid, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_150",
      "name": "569925",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569925,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2007,
      "Make": "Land Rover",
      "Model": "Range Rover Sport",
      "Trim": "Supercharged",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Supercharged, 4.2L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_151",
      "name": "511088",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511088,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "SR5",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_152",
      "name": "604795",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604795,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Buick",
      "Model": "Encore GX",
      "Trim": "Preferred",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.2 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_153",
      "name": "568901",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568901,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_154",
      "name": "544411",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544411,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_155",
      "name": "511288",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511288,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "High Country",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_156",
      "name": "574862",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 574862,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2005,
      "Make": "Toyota",
      "Model": "Camry",
      "Trim": "LE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_157",
      "name": "557184",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557184,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_158",
      "name": "603759",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603759,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Cadillac",
      "Model": "CT4",
      "Trim": "V-Series",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_159",
      "name": "586891",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586891,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "Segment_160",
      "name": "Import Minivan",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_161",
      "name": "574483",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 574483,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2006,
      "Make": "Toyota",
      "Model": "Sienna",
      "Trim": "XLE Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "Segment_162",
      "name": "Domestic Highline Crossovers",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_163",
      "name": "506851",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506851,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Porsche",
      "Model": "Cayenne",
      "Trim": "E-Hybrid",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Hybrid, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_164",
      "name": "605989",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605989,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "GMC",
      "Model": "Yukon",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_165",
      "name": "536992",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536992,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Kia",
      "Model": "Sedona",
      "Trim": "LX Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_166",
      "name": "564853",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564853,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Explorer",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_167",
      "name": "542574",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542574,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Nissan",
      "Model": "Sentra",
      "Trim": "SL",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_168",
      "name": "509819",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509819,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "Z",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_169",
      "name": "Import Commercial Vehicles",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_170",
      "name": "509769",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509769,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_171",
      "name": "564323",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564323,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Avenger",
      "Trim": "R/T",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_172",
      "name": "528920",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528920,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "Transit 250",
      "Trim": "Low Roof w/Sliding Side Door w/RWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Flex Fuel, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_173",
      "name": "585367",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585367,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Saab",
      "Model": "9-may",
      "Trim": "Linear",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, Turbo, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_174",
      "name": "510170",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510170,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Freightliner",
      "Model": "Sprinter 4500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_175",
      "name": "559695",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559695,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ford",
      "Model": "E150 Cargo",
      "Trim": "Extended Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V8, Flex Fuel, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_176",
      "name": "501612",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501612,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Express 2500 Cargo",
      "Trim": "Regular Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_177",
      "name": "536815",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536815,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Kia",
      "Model": "Forte5",
      "Trim": "EX",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, GDI, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_178",
      "name": "589970",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589970,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "STX",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_179",
      "name": "547065",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547065,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "LX-S",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, i-VTEC, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_180",
      "name": "607143",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607143,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_181",
      "name": "517330",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517330,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Alfa Romeo",
      "Model": "Stelvio",
      "Trim": "Ti Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_182",
      "name": "599241",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599241,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2009,
      "Make": "BMW",
      "Model": "5 Series",
      "Trim": "535i",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "6-Cyl, Twin Turbo, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_183",
      "name": "579375",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579375,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "GMC",
      "Model": "Savana 3500 Cargo",
      "Trim": "Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_184",
      "name": "528254",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528254,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Trax",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, ECOTEC Turbo, 1.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_185",
      "name": "527096",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527096,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_186",
      "name": "530443",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530443,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "Transit 350",
      "Trim": "Extended Length High Roof w/Sliding Side Door Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Flex Fuel, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_187",
      "name": "504787",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504787,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Toyota",
      "Model": "Sequoia",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_188",
      "name": "566715",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566715,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera S Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_189",
      "name": "598722",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598722,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2009,
      "Make": "Audi",
      "Model": "A4",
      "Trim": "2.0T",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_190",
      "name": "534909",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534909,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Equinox",
      "Trim": "Premier",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_191",
      "name": "560710",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560710,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "SES",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, PZEV, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_192",
      "name": "543419",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543419,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Hyundai",
      "Model": "Equus",
      "Trim": "Signature",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_193",
      "name": "589311",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589311,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Dodge",
      "Model": "Durango",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.9 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_194",
      "name": "Import Highline Crossovers",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_195",
      "name": "602959",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602959,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2000,
      "Make": "Isuzu",
      "Model": "Amigo",
      "Trim": "S",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_196",
      "name": "590544",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590544,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Mercury",
      "Model": "Sable",
      "Trim": "LS Premium",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "V6, 24V, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_197",
      "name": "552766",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552766,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.4L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_198",
      "name": "599468",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599468,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_199",
      "name": "586795",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586795,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_200",
      "name": "585038",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585038,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Nissan",
      "Model": "Frontier",
      "Trim": "XE Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V6, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_201",
      "name": "515030",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515030,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Nissan",
      "Model": "Titan",
      "Trim": "Platinum Reserve",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_202",
      "name": "526690",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526690,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "High Country",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_203",
      "name": "589985",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589985,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "Edge",
      "Trim": "SEL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, EcoBoost, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_204",
      "name": "533292",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533292,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Volkswagen",
      "Model": "CC",
      "Trim": "2.0T R-Line Executive",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_205",
      "name": "507080",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507080,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, EcoTec3, DFM, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_206",
      "name": "599051",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599051,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_207",
      "name": "601785",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601785,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "6-Cyl, Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_208",
      "name": "550795",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550795,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_209",
      "name": "522601",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522601,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ford",
      "Model": "Transit 350",
      "Trim": "XLT w/High Roof w/Sliding Side Door Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, Flex Fuel, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_210",
      "name": "603946",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603946,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P360 S R Dynamic",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, MHEV, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_211",
      "name": "545267",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545267,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2013,
      "Make": "Audi",
      "Model": "Q5",
      "Trim": "2.0T Premium Plus",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_212",
      "name": "542732",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542732,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Subaru",
      "Model": "Legacy",
      "Trim": "2.5i Premium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, PZEV, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_213",
      "name": "548829",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548829,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "MINI",
      "Model": "Paceman",
      "Trim": "Cooper S",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_214",
      "name": "591483",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591483,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "King Ranch Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_215",
      "name": "544222",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544222,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Z71 LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, FF, 5.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_216",
      "name": "588147",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588147,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "6-Cyl, HO Turbo Dsl",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_217",
      "name": "506265",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506265,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_218",
      "name": "585009",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585009,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_219",
      "name": "531035",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531035,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Jeep",
      "Model": "Cherokee",
      "Trim": "Latitude",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_220",
      "name": "567039",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567039,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2010,
      "Make": "Mercedes-Benz",
      "Model": "GLK",
      "Trim": "GLK 350 4MATIC",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_221",
      "name": "521927",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521927,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_222",
      "name": "514551",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514551,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Mercedes-Benz",
      "Model": "S",
      "Trim": "S 560 Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_223",
      "name": "500024",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500024,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Cadillac",
      "Model": "Escalade",
      "Trim": "Prem Lux Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_224",
      "name": "559893",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559893,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "BMW",
      "Model": "3 Series",
      "Trim": "335xi",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "6-Cyl, Twin Turbo, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_225",
      "name": "543480",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543480,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volkswagen",
      "Model": "Passat",
      "Trim": "TDI SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo Dsl, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_226",
      "name": "585473",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585473,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2002,
      "Make": "Jaguar",
      "Model": "XK",
      "Trim": "XK8",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_227",
      "name": "550881",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550881,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, FF, 5.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_228",
      "name": "505425",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505425,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Savana 3500 Passenger",
      "Trim": "LT Regular Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_229",
      "name": "533484",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533484,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_230",
      "name": "566377",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566377,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_231",
      "name": "551070",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551070,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_232",
      "name": "567990",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567990,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "FX4",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_233",
      "name": "564450",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564450,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Nissan",
      "Model": "Versa",
      "Trim": "SL",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_234",
      "name": "571554",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571554,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_235",
      "name": "572431",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572431,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Toyota",
      "Model": "Avalon",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_236",
      "name": "546587",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546587,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Honda",
      "Model": "Civic",
      "Trim": "Si",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, iVTEC, 2.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_237",
      "name": "543033",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543033,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Toyota",
      "Model": "Venza",
      "Trim": "XLE",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_238",
      "name": "581907",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581907,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Volkswagen",
      "Model": "Jetta",
      "Trim": "GLS TDI",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, Turbo Diesel",
      "EngineCylinders": "4C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_239",
      "name": "534707",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534707,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "Z71",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, VVT, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_240",
      "name": "565096",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565096,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Chevrolet",
      "Model": "Traverse",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_241",
      "name": "555209",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 555209,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_242",
      "name": "502121",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502121,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_243",
      "name": "503537",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503537,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_244",
      "name": "505489",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505489,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_245",
      "name": "587820",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587820,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_246",
      "name": "569959",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569959,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2006,
      "Make": "Saab",
      "Model": "9-2X",
      "Trim": "2.5i",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_247",
      "name": "558613",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558613,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "Explorer",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_248",
      "name": "513627",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513627,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_249",
      "name": "536467",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536467,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Nissan",
      "Model": "Rogue Select",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_250",
      "name": "523954",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523954,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_251",
      "name": "529977",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529977,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_252",
      "name": "540581",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540581,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_253",
      "name": "607441",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607441,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Lincoln",
      "Model": "Nautilus",
      "Trim": "Reserve",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Hybrid, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_254",
      "name": "584885",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584885,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_255",
      "name": "599286",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599286,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "Cadillac",
      "Model": "DTS",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_256",
      "name": "Domestic Minivan",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_257",
      "name": "590586",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590586,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Dodge",
      "Model": "Cara",
      "Trim": "AVP Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_258",
      "name": "568565",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568565,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2007,
      "Make": "Honda",
      "Model": "CR-V",
      "Trim": "LX",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, VTEC, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_259",
      "name": "548439",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548439,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Dodge",
      "Model": "Durango",
      "Trim": "Citadel",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_260",
      "name": "533430",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533430,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Audi",
      "Model": "S5",
      "Trim": "Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, Supercharged, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_261",
      "name": "605843",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605843,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "Standard Roof w/144\" WB",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, Turbo Diesel, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_262",
      "name": "553443",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553443,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "STX",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 24V, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_263",
      "name": "513921",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513921,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_264",
      "name": "585081",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585081,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Chevrolet",
      "Model": "Tracker",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 2.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_265",
      "name": "583311",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583311,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_266",
      "name": "586287",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586287,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "Laramie",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.25ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_267",
      "name": "573320",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573320,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "STX",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_268",
      "name": "537558",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537558,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Buick",
      "Model": "Regal",
      "Trim": "Premium I",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_269",
      "name": "504701",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504701,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "SEL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, EcoBoost, Turbo, 1.5 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_270",
      "name": "500225",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500225,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Jeep",
      "Model": "Wrangler Unlimited",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_271",
      "name": "524151",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524151,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_272",
      "name": "532302",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532302,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volvo",
      "Model": "XC60",
      "Trim": "T6 Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl Drv-E Sprchrgd 2.0T",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_273",
      "name": "513501",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513501,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "RST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_274",
      "name": "530987",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530987,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, TT, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_275",
      "name": "538422",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538422,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2016,
      "Make": "Land Rover",
      "Model": "Range Rover Sport",
      "Trim": "Supercharged Dynamic Limited Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Supercharged, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_276",
      "name": "510204",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510204,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Jeep",
      "Model": "Wrangler Unlimited",
      "Trim": "80th Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, VVT, eTorque, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_277",
      "name": "576797",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576797,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_278",
      "name": "543237",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543237,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.7L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_279",
      "name": "587201",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587201,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_280",
      "name": "552716",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552716,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Kia",
      "Model": "Forte",
      "Trim": "LX",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_281",
      "name": "584910",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584910,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "HD Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "6-Cyl, Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_282",
      "name": "531982",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531982,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, Turbo EcoDsl, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_283",
      "name": "515585",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515585,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Acura",
      "Model": "MDX",
      "Trim": "Advance Pkg",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_284",
      "name": "538114",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538114,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "GMC",
      "Model": "Terrain",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_285",
      "name": "503979",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503979,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 7.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_286",
      "name": "532224",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532224,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Aston Martin",
      "Model": "DB11",
      "Trim": "Launch Edition",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V12, Twin Turbo, 5.2L",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 5.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_287",
      "name": "507228",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507228,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 1500 Limited",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_288",
      "name": "588546",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588546,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL 2D",
      "Doors": "4Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V6, 4.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_289",
      "name": "605328",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605328,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Hyundai",
      "Model": "Kona",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_290",
      "name": "555204",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 555204,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Rubicon",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_291",
      "name": "537612",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537612,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Equinox",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_292",
      "name": "584952",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584952,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_293",
      "name": "606493",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606493,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_294",
      "name": "577854",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577854,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_295",
      "name": "504202",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504202,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_296",
      "name": "551934",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551934,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_297",
      "name": "578018",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578018,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_298",
      "name": "546041",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546041,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "EX-L",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, PZEV, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_299",
      "name": "575848",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575848,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_300",
      "name": "514429",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514429,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_301",
      "name": "565968",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565968,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Subaru",
      "Model": "Forester",
      "Trim": "2.5X Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_302",
      "name": "570728",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570728,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2006,
      "Make": "Porsche",
      "Model": "Cayenne",
      "Trim": "Turbo S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Twin Turbo, 4.5 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_303",
      "name": "575454",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575454,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_304",
      "name": "570743",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570743,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2005,
      "Make": "INFINITI",
      "Model": "FX",
      "Trim": "FX35",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_305",
      "name": "571727",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571727,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_306",
      "name": "521992",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521992,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "McLaren",
      "Model": "570GT",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, Twin Turbo, 3.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_307",
      "name": "583564",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583564,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Rubicon",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_308",
      "name": "518226",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518226,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_309",
      "name": "546051",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546051,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "BMW",
      "Model": "3 Series",
      "Trim": "328i",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, SULEV, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_310",
      "name": "599882",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599882,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_311",
      "name": "543053",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543053,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "Fiesta",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "3-Cyl, EcoBoost, 1.0T",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_312",
      "name": "586540",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586540,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_313",
      "name": "543986",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543986,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volvo",
      "Model": "XC60",
      "Trim": "T6 Ocean Race",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl Drv-E Sprchrgd 2.0T",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_314",
      "name": "541938",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541938,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, CNG, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_315",
      "name": "579761",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579761,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_316",
      "name": "525256",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525256,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Laredo",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_317",
      "name": "564946",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564946,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "5-Cyl, 3.7 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_318",
      "name": "570444",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570444,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_319",
      "name": "521801",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521801,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Nissan",
      "Model": "NV200",
      "Trim": "SV Van",
      "Doors": "4Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_320",
      "name": "528440",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528440,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_321",
      "name": "566821",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566821,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_322",
      "name": "539387",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539387,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_323",
      "name": "597120",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597120,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl, 6.7L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_324",
      "name": "579771",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579771,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_325",
      "name": "567140",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567140,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "TRX",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.25ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_326",
      "name": "506791",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506791,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Toyota",
      "Model": "RAV4 Prime",
      "Trim": "XSE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Hybrid, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_327",
      "name": "516156",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516156,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "GMC",
      "Model": "Acadia",
      "Trim": "SLT-1",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_328",
      "name": "530019",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530019,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "INFINITI",
      "Model": "Q50",
      "Trim": "3.0t Signature Edition",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_329",
      "name": "503962",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503962,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_330",
      "name": "509970",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509970,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Lone Star",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_331",
      "name": "509875",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509875,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "SEL Hybrid",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Hybrid, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_332",
      "name": "602016",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602016,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Stratus",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Flex Fuel, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_333",
      "name": "514240",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514240,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 7.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_334",
      "name": "601361",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601361,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_335",
      "name": "603869",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603869,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P360 Metropolitan Edition (2023.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, MHEV, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_336",
      "name": "542410",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542410,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_337",
      "name": "531347",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531347,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Lexus",
      "Model": "LS",
      "Trim": "LS 500",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_338",
      "name": "536569",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536569,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.7L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_339",
      "name": "525694",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525694,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_340",
      "name": "573067",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573067,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "ZXW SE",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, PZEV, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_341",
      "name": "518483",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518483,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Equinox",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo Diesel, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_342",
      "name": "546001",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546001,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Toyota",
      "Model": "Avalon",
      "Trim": "XLE Touring",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_343",
      "name": "501818",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501818,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Audi",
      "Model": "Q4 e-tron",
      "Trim": "50 Prestige",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "Dual AC Electric Motors",
      "EngineCylinders": "Dual EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_344",
      "name": "529663",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529663,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof Extended w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, BlueTec, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_345",
      "name": "527570",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527570,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Nissan",
      "Model": "Murano",
      "Trim": "SL (2017.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_346",
      "name": "522646",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522646,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Volkswagen",
      "Model": "Atlas",
      "Trim": "SE w/Tech Pkg (2021.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_347",
      "name": "573236",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573236,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_348",
      "name": "608153",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 608153,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Lexus",
      "Model": "IS",
      "Trim": "IS 300 F SPORT",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_349",
      "name": "588238",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588238,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Short Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_350",
      "name": "601810",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601810,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Pontiac",
      "Model": "Vibe",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_351",
      "name": "502588",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502588,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_352",
      "name": "531148",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531148,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Bentley",
      "Model": "Mulsanne",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, Twin Turbo, 6.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_353",
      "name": "557248",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557248,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_354",
      "name": "534232",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534232,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_355",
      "name": "587502",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587502,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chevrolet",
      "Model": "Cavalier",
      "Trim": "Z24",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_356",
      "name": "591393",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591393,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "PreRunner",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V6, 3.4 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_357",
      "name": "580844",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 580844,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_358",
      "name": "512022",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512022,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2021,
      "Make": "Audi",
      "Model": "A5",
      "Trim": "Premium Plus Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_359",
      "name": "594134",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594134,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "GMC",
      "Model": "Savana 1500 Passenger",
      "Trim": "SLE Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_360",
      "name": "512355",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512355,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Elevation",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_361",
      "name": "546443",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546443,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Lincoln",
      "Model": "MKZ",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, EcoBoost, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_362",
      "name": "524885",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524885,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Freightliner",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_363",
      "name": "577105",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577105,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Cadillac",
      "Model": "XLR",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_364",
      "name": "583171",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583171,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_365",
      "name": "581137",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581137,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_366",
      "name": "602854",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602854,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_367",
      "name": "583323",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583323,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_368",
      "name": "554211",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554211,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_369",
      "name": "560050",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560050,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, EcoBoost, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_370",
      "name": "508227",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508227,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Volvo",
      "Model": "XC90",
      "Trim": "T5 Momentum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Drive-E, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_371",
      "name": "552540",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552540,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 16V, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_372",
      "name": "519663",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519663,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, EcoBoost, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_373",
      "name": "537626",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537626,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "Z71",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, VVT, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_374",
      "name": "501600",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501600,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_375",
      "name": "592785",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592785,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 7.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_376",
      "name": "577817",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577817,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_377",
      "name": "560797",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560797,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_378",
      "name": "594102",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594102,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "GMC",
      "Model": "Sierra 3500",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_379",
      "name": "563325",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563325,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.4L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_380",
      "name": "512006",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512006,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Volkswagen",
      "Model": "Jetta",
      "Trim": "1.4T SEL Premium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_381",
      "name": "524306",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524306,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Lone Star",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_382",
      "name": "512661",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512661,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Kia",
      "Model": "Sorento",
      "Trim": "LX",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, GDI, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_383",
      "name": "516235",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516235,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Transit 150",
      "Trim": "Low Roof w/LWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, PFDi, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_384",
      "name": "585261",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585261,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "PreRunner",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_385",
      "name": "607956",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607956,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "4-Cyl, TurboMax, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_386",
      "name": "543452",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543452,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Unlimited Willys Wheeler",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_387",
      "name": "513655",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513655,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Kia",
      "Model": "Telluride",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, GDI, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_388",
      "name": "548618",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548618,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Toyota",
      "Model": "Tundra",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, Flex Fuel, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_389",
      "name": "551101",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551101,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Rubicon",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_390",
      "name": "551340",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551340,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Nissan",
      "Model": "Maxima",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_391",
      "name": "588933",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588933,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2000,
      "Make": "Porsche",
      "Model": "Boxster",
      "Trim": "Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_392",
      "name": "532091",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532091,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_393",
      "name": "582900",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582900,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_394",
      "name": "531743",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531743,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Lexus",
      "Model": "RX",
      "Trim": "RX 350",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_395",
      "name": "582734",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582734,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "6-Cyl, Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_396",
      "name": "514068",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514068,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Audi",
      "Model": "S4",
      "Trim": "Premium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_397",
      "name": "540106",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540106,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "Land Rover",
      "Model": "Range Rover Evoque",
      "Trim": "Pure Plus",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_398",
      "name": "505370",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505370,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_399",
      "name": "520996",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520996,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_400",
      "name": "502221",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502221,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2023,
      "Make": "Honda",
      "Model": "CR-V",
      "Trim": "EX",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_401",
      "name": "601499",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601499,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.25ft",
      "Engine": "V8, Flex Fuel, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_402",
      "name": "607444",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607444,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Dodge",
      "Model": "Durango",
      "Trim": "Citadel",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_403",
      "name": "511282",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511282,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Transit 350",
      "Trim": "Low Roof w/LWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_404",
      "name": "544100",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544100,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_405",
      "name": "602397",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602397,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "XLS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_406",
      "name": "528694",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528694,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_407",
      "name": "527101",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527101,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Audi",
      "Model": "A5",
      "Trim": "Prestige",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_408",
      "name": "591399",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591399,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F150 (Heritage)",
      "Trim": "XLT STX",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_409",
      "name": "565393",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565393,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_410",
      "name": "566280",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566280,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2007,
      "Make": "Hyundai",
      "Model": "Azera",
      "Trim": "GLS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_411",
      "name": "530925",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530925,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "Crossroad",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_412",
      "name": "602172",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602172,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_413",
      "name": "532894",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532894,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "BMW",
      "Model": "X6",
      "Trim": "xDrive35i",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_414",
      "name": "504861",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504861,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 7.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_415",
      "name": "590277",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590277,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Pontiac",
      "Model": "Sunfire",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_416",
      "name": "585964",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585964,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_417",
      "name": "517326",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517326,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Mitsubishi",
      "Model": "Outlander Sport",
      "Trim": "GT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_418",
      "name": "521751",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521751,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_419",
      "name": "600424",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600424,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_420",
      "name": "607152",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607152,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Freightliner",
      "Model": "Sprinter 2500",
      "Trim": "High Roof w/144\" WB",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_421",
      "name": "532961",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532961,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2016,
      "Make": "Nissan",
      "Model": "Altima",
      "Trim": "3.5 SR",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_422",
      "name": "563334",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563334,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chrysler",
      "Model": "Town & Country",
      "Trim": "Touring Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_423",
      "name": "508025",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508025,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Genesis",
      "Model": "GV80",
      "Trim": "3.5T Advanced+",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_424",
      "name": "530045",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530045,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl Turbo Diesel 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_425",
      "name": "570906",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570906,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_426",
      "name": "504230",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504230,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, VVT, eTorque, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_427",
      "name": "577945",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577945,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_428",
      "name": "579574",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579574,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_429",
      "name": "546339",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546339,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_430",
      "name": "528777",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528777,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_431",
      "name": "554440",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554440,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_432",
      "name": "599218",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599218,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "SXT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_433",
      "name": "509570",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509570,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_434",
      "name": "560097",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560097,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Subaru",
      "Model": "Outback",
      "Trim": "2.5i Premium",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, PZEV, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_435",
      "name": "524794",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524794,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "SXT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_436",
      "name": "563244",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563244,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_437",
      "name": "511096",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511096,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "INFINITI",
      "Model": "Q50",
      "Trim": "RED SPORT 400",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_438",
      "name": "500530",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500530,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_439",
      "name": "507640",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507640,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 1500 Limited",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_440",
      "name": "587165",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587165,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Chrysler",
      "Model": "Sebring",
      "Trim": "LXi",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_441",
      "name": "504229",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504229,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_442",
      "name": "506896",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506896,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Savana 2500 Cargo",
      "Trim": "Regular Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_443",
      "name": "550166",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550166,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Subaru",
      "Model": "Outback",
      "Trim": "2.5i",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_444",
      "name": "588995",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588995,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "HSE7",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_445",
      "name": "578845",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578845,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_446",
      "name": "546806",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546806,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, TT, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_447",
      "name": "501457",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501457,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "INFINITI",
      "Model": "QX55",
      "Trim": "LUXE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_448",
      "name": "585203",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585203,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "GMC",
      "Model": "Sierra 3500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_449",
      "name": "581779",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581779,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_450",
      "name": "559674",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559674,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Longhorn Edition",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_451",
      "name": "566076",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566076,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.9 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_452",
      "name": "589795",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589795,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_453",
      "name": "597811",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597811,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Dodge",
      "Model": "Cara",
      "Trim": "Express Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_454",
      "name": "575486",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575486,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_455",
      "name": "568594",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568594,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.9 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_456",
      "name": "545930",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545930,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "FIAT",
      "Model": "500L",
      "Trim": "Lounge",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_457",
      "name": "587613",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587613,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Saab",
      "Model": "9-may",
      "Trim": "Arc",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_458",
      "name": "596891",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596891,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "Premium",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_459",
      "name": "532689",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532689,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_460",
      "name": "556131",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 556131,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Dsl 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_461",
      "name": "502158",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502158,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Jeep",
      "Model": "Wagoneer",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, HEMI, eTorque, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_462",
      "name": "577918",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577918,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Mercury",
      "Model": "Montego",
      "Trim": "Premier",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_463",
      "name": "592061",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592061,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chevrolet",
      "Model": "2500",
      "Trim": "Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, Turbo Diesel, 6.5L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.5,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_464",
      "name": "559476",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559476,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Saab",
      "Model": "9-4X",
      "Trim": "3.0i Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_465",
      "name": "580433",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 580433,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_466",
      "name": "558166",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558166,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2009,
      "Make": "Volkswagen",
      "Model": "GTI",
      "Trim": "2.0T ",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_467",
      "name": "552654",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552654,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Kia",
      "Model": "Forte",
      "Trim": "EX",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, GDI, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_468",
      "name": "517756",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517756,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Jeep",
      "Model": "Gladiator",
      "Trim": "California Edition",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_469",
      "name": "592688",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592688,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Subaru",
      "Model": "Legacy",
      "Trim": "GT",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_470",
      "name": "546291",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546291,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Audi",
      "Model": "A4",
      "Trim": "Premium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_471",
      "name": "553841",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553841,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_472",
      "name": "554610",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554610,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie Longhorn Edition",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_473",
      "name": "520143",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520143,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Volkswagen",
      "Model": "Atlas Cross Sport",
      "Trim": "SE R-Line 4Motion w/Technology",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_474",
      "name": "546803",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546803,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Kia",
      "Model": "Rio",
      "Trim": "SX",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_475",
      "name": "553331",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553331,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2013,
      "Make": "Lamborghini",
      "Model": "Aventador",
      "Trim": "LP 700-4 Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V12, 6.5 Liter",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_476",
      "name": "530521",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530521,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Volkswagen",
      "Model": "Golf",
      "Trim": "TSI Wolfsburg Edition ",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_477",
      "name": "587558",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587558,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chevrolet",
      "Model": "2500 HD",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_478",
      "name": "580301",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 580301,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_479",
      "name": "564744",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564744,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Mercury",
      "Model": "Milan",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_480",
      "name": "554495",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554495,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Toyota",
      "Model": "Sienna",
      "Trim": "Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_481",
      "name": "566895",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566895,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Suzuki",
      "Model": "Grand Vitara",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_482",
      "name": "540816",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540816,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2016,
      "Make": "Bentley",
      "Model": "Continental",
      "Trim": "GT",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "W12, Twin Turbo, FF, 6.0L",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_483",
      "name": "502412",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502412,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_484",
      "name": "595729",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 595729,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_485",
      "name": "599622",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599622,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2007,
      "Make": "Nissan",
      "Model": "Titan",
      "Trim": "LE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_486",
      "name": "507461",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507461,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Cadillac",
      "Model": "Escalade ESV",
      "Trim": "Prem Lux Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_487",
      "name": "564902",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564902,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_488",
      "name": "586305",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586305,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Chevrolet",
      "Model": "S10",
      "Trim": "Base",
      "Doors": "3Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_489",
      "name": "562467",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562467,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_490",
      "name": "516194",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516194,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_491",
      "name": "523425",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523425,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Nissan",
      "Model": "Pathfinder",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_492",
      "name": "588683",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588683,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Volkswagen",
      "Model": "Euro",
      "Trim": "MV Minivan",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 2.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_493",
      "name": "531674",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531674,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, EcoBoost, TT, 2.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_494",
      "name": "Import EV's",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_495",
      "name": "604383",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604383,
      "DealerId": 40337,
      "SegmentId": 133,
      "SegmentName": "Import EV's",
      "Heading": "Import",
      "Year": 2023,
      "Make": "Hyundai",
      "Model": "IONIQ 6",
      "Trim": "SEL",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "Electric Motor",
      "EngineCylinders": "EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 105
    },
    {
      "id": "ExactId_496",
      "name": "577379",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577379,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_497",
      "name": "525313",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525313,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "R/T",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_498",
      "name": "579963",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579963,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Jeep",
      "Model": "Liberty",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_499",
      "name": "596423",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596423,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_500",
      "name": "572958",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572958,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_501",
      "name": "603685",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603685,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Lexus",
      "Model": "ES",
      "Trim": "ES 250 Luxury",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_502",
      "name": "582390",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582390,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Chevrolet",
      "Model": "Silverado 1500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_503",
      "name": "608725",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 608725,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Freightliner",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "High Roof w/144\" WB",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, Turbo Diesel, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_504",
      "name": "596979",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596979,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "GMC",
      "Model": "Savana 3500 Passenger",
      "Trim": "LS Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, Flex Fuel, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_505",
      "name": "501211",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501211,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_506",
      "name": "601346",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601346,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Laredo",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_507",
      "name": "526949",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526949,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_508",
      "name": "511977",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511977,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2021,
      "Make": "Cadillac",
      "Model": "CT4",
      "Trim": "Luxury",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_509",
      "name": "543680",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543680,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_510",
      "name": "571862",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571862,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_511",
      "name": "542100",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542100,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Express",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, Flex Fuel, 3.6L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_512",
      "name": "582545",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582545,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_513",
      "name": "526039",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526039,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Acura",
      "Model": "MDX",
      "Trim": "SH-AWD",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_514",
      "name": "506686",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506686,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Hyundai",
      "Model": "Venue",
      "Trim": "SEL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_515",
      "name": "525401",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525401,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "Transit 350",
      "Trim": "High Roof w/Dual Sliding Side Doors Van",
      "Doors": "4Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_516",
      "name": "511871",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511871,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2021,
      "Make": "FIAT",
      "Model": "500X",
      "Trim": "Trekking Plus",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, MultiAir, Turbo, 1.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_517",
      "name": "515771",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515771,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2021,
      "Make": "Audi",
      "Model": "A6",
      "Trim": "55 TFSI Prestige",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_518",
      "name": "515762",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515762,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Kia",
      "Model": "Soul",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_519",
      "name": "566274",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566274,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_520",
      "name": "509933",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509933,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_521",
      "name": "591323",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591323,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "GMC",
      "Model": "Savana 3500 Cargo",
      "Trim": "Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V8, Turbo Diesel, 6.5L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.5,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_522",
      "name": "580493",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 580493,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Hyundai",
      "Model": "Elantra",
      "Trim": "GT",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_523",
      "name": "507447",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507447,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_524",
      "name": "600681",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600681,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_525",
      "name": "569759",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569759,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "MINI",
      "Model": "Hardtop",
      "Trim": "Cooper S",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_526",
      "name": "521952",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521952,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "MAZDA",
      "Model": "CX-3",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, SKYACTIV-G, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_527",
      "name": "539043",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539043,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_528",
      "name": "590274",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590274,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_529",
      "name": "515260",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515260,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Latitude",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, MultiAir, PZEV, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_530",
      "name": "525083",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525083,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Ferrari",
      "Model": "812 Superfast",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V12, 6.5 Liter",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_531",
      "name": "602910",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602910,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 4.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_532",
      "name": "539906",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539906,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_533",
      "name": "604009",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604009,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Audi",
      "Model": "S5",
      "Trim": "Premium",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_534",
      "name": "525343",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525343,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Toyota",
      "Model": "Prius v",
      "Trim": "Four",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, Hybrid, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_535",
      "name": "524031",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524031,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_536",
      "name": "568217",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568217,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F450 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.4L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_537",
      "name": "518800",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518800,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_538",
      "name": "513005",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513005,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Summit",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_539",
      "name": "586214",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586214,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "GMC",
      "Model": "Savana 1500 Passenger",
      "Trim": "Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_540",
      "name": "521838",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521838,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Buick",
      "Model": "Encore",
      "Trim": "Essence",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_541",
      "name": "505471",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505471,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Camaro",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_542",
      "name": "591383",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591383,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Saturn",
      "Model": "L-Series",
      "Trim": "L300",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 24V, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_543",
      "name": "530155",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530155,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_544",
      "name": "523709",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523709,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Express 3500 Passenger",
      "Trim": "LT Extended Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_545",
      "name": "542437",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542437,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_546",
      "name": "507546",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507546,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Elevation",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_547",
      "name": "505525",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505525,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera 4 GTS Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_548",
      "name": "510669",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510669,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Bronco",
      "Trim": "Big Bend",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, Twin Turbo, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_549",
      "name": "568937",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568937,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_550",
      "name": "603797",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603797,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Defender 90",
      "Trim": "Carpathian Edition (2023.5)",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Supercharged, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_551",
      "name": "511150",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511150,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Cadillac",
      "Model": "Escalade ESV",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_552",
      "name": "564724",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564724,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_553",
      "name": "597654",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597654,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2011,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera S Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_554",
      "name": "526139",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526139,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, EcoBoost, TT, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_555",
      "name": "590074",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590074,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, FFV, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_556",
      "name": "521845",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521845,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Land Rover",
      "Model": "Range Rover Evoque",
      "Trim": "Landmark Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 237 HP, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_557",
      "name": "546873",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546873,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "SRT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_558",
      "name": "554010",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554010,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "Edge",
      "Trim": "SEL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, EcoBoost 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_559",
      "name": "608604",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 608604,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Porsche",
      "Model": "Panamera",
      "Trim": "4",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Twin Turbo, 2.9 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_560",
      "name": "534323",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534323,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, EcoBoost, 3.5T",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_561",
      "name": "588491",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588491,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_562",
      "name": "557945",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557945,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Harley-Davidson",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V8, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_563",
      "name": "544191",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544191,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_564",
      "name": "516921",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516921,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2020,
      "Make": "MAZDA",
      "Model": "MX-5 Miata RF",
      "Trim": "Club",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, SKYACTIV-G, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_565",
      "name": "606073",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606073,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Porsche",
      "Model": "718 Cayman",
      "Trim": "GTS 4.0",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_566",
      "name": "515600",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515600,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_567",
      "name": "558981",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558981,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "5-Cyl, 3.7 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_568",
      "name": "556433",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 556433,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 24V, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_569",
      "name": "606531",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606531,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Audi",
      "Model": "SQ7",
      "Trim": "Premium Plus",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_570",
      "name": "565607",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565607,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_571",
      "name": "544937",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544937,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_572",
      "name": "597479",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597479,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_573",
      "name": "533351",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533351,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Cadillac",
      "Model": "Escalade",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_574",
      "name": "528214",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528214,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_575",
      "name": "594165",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594165,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Dakota",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 3.9 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_576",
      "name": "608042",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 608042,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_577",
      "name": "550151",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550151,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Chevrolet",
      "Model": "Express 3500 Passenger",
      "Trim": "LS Extended Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_578",
      "name": "516808",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516808,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2021,
      "Make": "Acura",
      "Model": "RDX",
      "Trim": "SH-AWD w/Advance Pkg",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, VTEC, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_579",
      "name": "539235",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539235,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_580",
      "name": "534308",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534308,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_581",
      "name": "551224",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551224,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Toyota",
      "Model": "Yaris",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_582",
      "name": "520007",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520007,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Hyundai",
      "Model": "Kona",
      "Trim": "Iron Man",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_583",
      "name": "606389",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606389,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_584",
      "name": "579220",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579220,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "STX",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_585",
      "name": "563918",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563918,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_586",
      "name": "543990",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543990,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Audi",
      "Model": "S5",
      "Trim": "Prestige",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, Supercharged, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_587",
      "name": "572236",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572236,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Volkswagen",
      "Model": "New Beetle",
      "Trim": "S",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "5-Cyl, PZEV, 2.5 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_588",
      "name": "508848",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508848,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Sierra 1500 Limited",
      "Trim": "Pro",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_589",
      "name": "594109",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594109,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V10, 8.0 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 8.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_590",
      "name": "547580",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547580,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Volvo",
      "Model": "XC70",
      "Trim": "T6 Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_591",
      "name": "546456",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546456,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Jeep",
      "Model": "Renegade",
      "Trim": "Latitude",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, MultiAir, FF, 2.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_592",
      "name": "518288",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518288,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_593",
      "name": "601916",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601916,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_594",
      "name": "594549",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594549,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_595",
      "name": "562549",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562549,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Dsl, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_596",
      "name": "577786",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577786,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_597",
      "name": "534642",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534642,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_598",
      "name": "593066",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 593066,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_599",
      "name": "522120",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522120,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Custom",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoTec3, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_600",
      "name": "592072",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592072,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, Turbo Diesel, 7.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_601",
      "name": "547689",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547689,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Hyundai",
      "Model": "Santa Fe",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, GDI, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_602",
      "name": "597808",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597808,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2012,
      "Make": "Fisker",
      "Model": "Karma",
      "Trim": "EcoChic",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "AC Electric Motor",
      "EngineCylinders": "EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "RWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_603",
      "name": "554706",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554706,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Hyundai",
      "Model": "Santa Fe Sport",
      "Trim": "2.0T",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, GDI 2.0T",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_604",
      "name": "542563",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542563,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Outdoorsman",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_605",
      "name": "596788",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596788,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_606",
      "name": "570717",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570717,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2006,
      "Make": "Kia",
      "Model": "Optima (2006.5)",
      "Trim": "EX",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_607",
      "name": "570087",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570087,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "6-Cyl, HO Trb Dsl 5.9L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 5.9,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_608",
      "name": "512890",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512890,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "High Country",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_609",
      "name": "579469",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579469,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_610",
      "name": "587900",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587900,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Laramie",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, High Output Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_611",
      "name": "513554",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513554,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_612",
      "name": "535594",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535594,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, Trbo Dsl, 2.8L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "Segment_613",
      "name": "Domestic EV's ",
      "type": "Segment" as Category,
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "id": "ExactId_614",
      "name": "512912",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512912,
      "DealerId": 40337,
      "SegmentId": 134,
      "SegmentName": "Domestic EV's ",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Lucid",
      "Model": "Air",
      "Trim": "Dream Edition Range",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "Dual Electric Motors",
      "EngineCylinders": "Dual EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_615",
      "name": "606141",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606141,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_616",
      "name": "599177",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599177,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Envoy",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_617",
      "name": "589791",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589791,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Saturn",
      "Model": "Ion",
      "Trim": "3",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_618",
      "name": "604911",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604911,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Acura",
      "Model": "MDX",
      "Trim": "SH-AWD w/Advance Pkg",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_619",
      "name": "581813",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581813,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2007,
      "Make": "Kia",
      "Model": "Spectra",
      "Trim": "EX",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_620",
      "name": "579232",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579232,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_621",
      "name": "504931",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504931,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_622",
      "name": "588553",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588553,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Z71",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, FFV, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_623",
      "name": "567170",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567170,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "XLS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_624",
      "name": "526229",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526229,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chrysler",
      "Model": "300",
      "Trim": "300 Limited",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_625",
      "name": "607711",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607711,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Mitsubishi",
      "Model": "Outlander Sport",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_626",
      "name": "520559",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520559,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_627",
      "name": "562670",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562670,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_628",
      "name": "539039",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539039,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2016,
      "Make": "BMW",
      "Model": "X5",
      "Trim": "xDrive35i",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_629",
      "name": "602139",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602139,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Chevrolet",
      "Model": "Tracker",
      "Trim": "Convertible",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 2.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_630",
      "name": "538736",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538736,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2016,
      "Make": "FIAT",
      "Model": "500L",
      "Trim": "Trekking",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_631",
      "name": "538818",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538818,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_632",
      "name": "513151",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513151,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Nissan",
      "Model": "Pathfinder",
      "Trim": "SL",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_633",
      "name": "517292",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517292,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Mercedes-Benz",
      "Model": "AMG C",
      "Trim": "C 63 S AMG",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_634",
      "name": "519025",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519025,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Freightliner",
      "Model": "Sprinter 2500 Cargo",
      "Trim": "Standard Roof w/144\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_635",
      "name": "584878",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584878,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "EX",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, ULEV, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_636",
      "name": "536361",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536361,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Audi",
      "Model": "A4",
      "Trim": "Prestige",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_637",
      "name": "538372",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538372,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8. FF, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_638",
      "name": "587816",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587816,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_639",
      "name": "591561",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591561,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO Turbo Dsl",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_640",
      "name": "521374",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 521374,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Jaguar",
      "Model": "F-TYPE",
      "Trim": "R-Dynamic",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, Supercharged, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_641",
      "name": "523120",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523120,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Dsl, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_642",
      "name": "559798",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559798,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_643",
      "name": "582042",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582042,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2006,
      "Make": "Nissan",
      "Model": "Altima",
      "Trim": "3.5 SE-R",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_644",
      "name": "551552",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551552,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_645",
      "name": "536392",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536392,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "MAZDA",
      "Model": "MAZDA6",
      "Trim": "i Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, SKYACTIV-G, 2.5L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_646",
      "name": "526855",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526855,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Audi",
      "Model": "S3",
      "Trim": "Premium Plus",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_647",
      "name": "513701",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513701,
      "DealerId": 40337,
      "SegmentId": 134,
      "SegmentName": "Domestic EV's ",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Tesla",
      "Model": "Model 3",
      "Trim": "Performance",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "Dual Electric Motors",
      "EngineCylinders": "Dual EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_648",
      "name": "547448",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547448,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Dodge",
      "Model": "Dart",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-CYL, Tigershark 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_649",
      "name": "534928",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534928,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_650",
      "name": "578473",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578473,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_651",
      "name": "517006",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517006,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Nissan",
      "Model": "NV1500",
      "Trim": "S Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_652",
      "name": "513054",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513054,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 7.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_653",
      "name": "586447",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586447,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_654",
      "name": "551650",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551650,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_655",
      "name": "545382",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545382,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Buick",
      "Model": "Regal",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_656",
      "name": "607769",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607769,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Trailblazer",
      "Trim": "ACTIV",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.3 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.3,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_657",
      "name": "598717",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598717,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "MAZDA",
      "Model": "MAZDA3",
      "Trim": "i Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_658",
      "name": "590783",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590783,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chrysler",
      "Model": "300M",
      "Trim": "Special",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_659",
      "name": "604558",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604558,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Trax",
      "Trim": "1RS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.2 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_660",
      "name": "599299",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599299,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_661",
      "name": "537337",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537337,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Nissan",
      "Model": "Murano",
      "Trim": "Platinum (2017.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_662",
      "name": "565504",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565504,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_663",
      "name": "566354",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566354,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_664",
      "name": "585569",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585569,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Chevrolet",
      "Model": "Sonic",
      "Trim": "LS ",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_665",
      "name": "561190",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 561190,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2012,
      "Make": "Lexus",
      "Model": "CT",
      "Trim": "CT 200h",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Hybrid, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_666",
      "name": "505923",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505923,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_667",
      "name": "534159",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534159,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_668",
      "name": "560652",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560652,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Buick",
      "Model": "Lucerne",
      "Trim": "Super",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_669",
      "name": "544068",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544068,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2012,
      "Make": "Audi",
      "Model": "Q5",
      "Trim": "2.0T Quattro Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_670",
      "name": "532424",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532424,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Nissan",
      "Model": "TITAN XD",
      "Trim": "SV",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_671",
      "name": "587315",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587315,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_672",
      "name": "557269",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557269,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_673",
      "name": "502340",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502340,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Hyundai",
      "Model": "Santa Fe",
      "Trim": "Calligraphy",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_674",
      "name": "596029",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596029,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Mercury",
      "Model": "Mountaineer",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Flex Fuel, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_675",
      "name": "500868",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500868,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Pro",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_676",
      "name": "543318",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543318,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_677",
      "name": "524980",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524980,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "Fusion",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, EcoBoost, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_678",
      "name": "603841",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603841,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P300 S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_679",
      "name": "544164",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544164,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_680",
      "name": "551155",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551155,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Turbo S",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_681",
      "name": "576434",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576434,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "STX",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_682",
      "name": "566898",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566898,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Chevrolet",
      "Model": "Express 2500 Cargo",
      "Trim": "Diesel Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_683",
      "name": "558703",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558703,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_684",
      "name": "607384",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607384,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2024,
      "Make": "MAZDA",
      "Model": "MAZDA3",
      "Trim": "2.5 Turbo Premium Plus",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, SKYACTIV-G, Turbo, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_685",
      "name": "535336",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535336,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_686",
      "name": "565879",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565879,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Saturn",
      "Model": "Ion",
      "Trim": "3 Quad",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_687",
      "name": "533183",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533183,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Z71 LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_688",
      "name": "567405",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567405,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Dodge",
      "Model": "Nitro",
      "Trim": "Heat",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_689",
      "name": "511010",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511010,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 3500 XD Cargo",
      "Trim": "Standard Roof w/144\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_690",
      "name": "546263",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546263,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "Titanium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, PZEV, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_691",
      "name": "545248",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545248,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Outdoorsman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Dsl, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_692",
      "name": "545123",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545123,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Hyundai",
      "Model": "Genesis",
      "Trim": "5.0",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_693",
      "name": "519275",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519275,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Hyundai",
      "Model": "Santa Fe",
      "Trim": "2.0T Ultimate",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_694",
      "name": "535244",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535244,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "Fiesta",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_695",
      "name": "515108",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515108,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Land Rover",
      "Model": "Discovery Sport",
      "Trim": "HSE R-Dynamic",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbocharged, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_696",
      "name": "578477",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578477,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_697",
      "name": "532973",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532973,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Volkswagen",
      "Model": "Golf GTI",
      "Trim": "SE ",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_698",
      "name": "595032",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 595032,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_699",
      "name": "571227",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571227,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2006,
      "Make": "MAZDA",
      "Model": "MAZDA6",
      "Trim": "s",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_700",
      "name": "560961",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560961,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2010,
      "Make": "Audi",
      "Model": "TT",
      "Trim": "Quattro Premium",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_701",
      "name": "502278",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502278,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Nissan",
      "Model": "Pathfinder",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_702",
      "name": "559670",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559670,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Kia",
      "Model": "Cadenza",
      "Trim": "Technology",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, GDI, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_703",
      "name": "590100",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590100,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "GMC",
      "Model": "Sierra 1500 HD",
      "Trim": "Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_704",
      "name": "580016",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 580016,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_705",
      "name": "589117",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589117,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_706",
      "name": "531703",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531703,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "3-Cyl, EcoBoost, 1.0T",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_707",
      "name": "547996",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547996,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Chevrolet",
      "Model": "Sonic",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_708",
      "name": "598317",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598317,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Volkswagen",
      "Model": "CC",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_709",
      "name": "599369",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599369,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "5-Cyl, 3.7 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_710",
      "name": "529606",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529606,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_711",
      "name": "608016",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 608016,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Chevrolet",
      "Model": "Express 2500 Passenger",
      "Trim": "LT",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_712",
      "name": "508692",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508692,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "R/T Scat Pack Widebody",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, MDS, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_713",
      "name": "525212",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525212,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Rolls-Royce",
      "Model": "Dawn",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V12, Twin Turbo, 6.6 Liter",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_714",
      "name": "562124",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562124,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Kia",
      "Model": "Sorento",
      "Trim": "LX",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_715",
      "name": "559735",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559735,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Cadillac",
      "Model": "Escalade",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_716",
      "name": "588340",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588340,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "GMC",
      "Model": "Savana 1500 Passenger",
      "Trim": "Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_717",
      "name": "528471",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528471,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Express 3500 Passenger",
      "Trim": "LT Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_718",
      "name": "512405",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512405,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Nissan",
      "Model": "Armada",
      "Trim": "SV",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_719",
      "name": "588026",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588026,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Jaguar",
      "Model": "XJ",
      "Trim": "XJ8",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, 4.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_720",
      "name": "516326",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516326,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "R/T Scat Pack",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, MDS, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_721",
      "name": "531287",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531287,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2016,
      "Make": "Volvo",
      "Model": "S60",
      "Trim": "T5 Inscription Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "5-Cyl, Turbo, 2.5 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_722",
      "name": "520955",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520955,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Yukon XL",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_723",
      "name": "516056",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516056,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_724",
      "name": "507561",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507561,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_725",
      "name": "582235",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582235,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_726",
      "name": "562323",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562323,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_727",
      "name": "566213",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566213,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "Mercedes-Benz",
      "Model": "E",
      "Trim": "E 350 4MATIC",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_728",
      "name": "579448",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 579448,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2004,
      "Make": "Kia",
      "Model": "Rio",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_729",
      "name": "565366",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565366,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_730",
      "name": "518955",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518955,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Lexus",
      "Model": "ES",
      "Trim": "ES 350",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_731",
      "name": "513969",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513969,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_732",
      "name": "566397",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566397,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Toyota",
      "Model": "Sienna",
      "Trim": "XLE Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_733",
      "name": "564974",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564974,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_734",
      "name": "575273",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575273,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chrysler",
      "Model": "Sebring",
      "Trim": "Touring",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_735",
      "name": "598684",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598684,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2009,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "EX-L",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, PZEV, i-VTEC, 2.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_736",
      "name": "535024",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535024,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "T/A Plus",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, MDS, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_737",
      "name": "510939",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510939,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Nissan",
      "Model": "Rogue Sport",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_738",
      "name": "527358",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527358,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Targa 4 GTS",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_739",
      "name": "578118",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578118,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "BMW",
      "Model": "i8",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "3-Cyl, Hybrid, 1.5T",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_740",
      "name": "547923",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547923,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_741",
      "name": "501913",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501913,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2023,
      "Make": "Subaru",
      "Model": "Outback",
      "Trim": "Limited XT Wagon",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_742",
      "name": "505640",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505640,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_743",
      "name": "568872",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568872,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2007,
      "Make": "Mercedes-Benz",
      "Model": "CLK",
      "Trim": "CLK 550",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, 5.5 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_744",
      "name": "604888",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604888,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Buick",
      "Model": "Encore GX",
      "Trim": "Preferred",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.2 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_745",
      "name": "577109",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577109,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Nissan",
      "Model": "Pathfinder",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_746",
      "name": "538811",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538811,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chrysler",
      "Model": "200",
      "Trim": "200C Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_747",
      "name": "534904",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534904,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_748",
      "name": "509369",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509369,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Custom Trail Boss",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_749",
      "name": "568100",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568100,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Jeep",
      "Model": "Patriot",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_750",
      "name": "584181",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584181,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Impala",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_751",
      "name": "561656",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 561656,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2012,
      "Make": "Mercedes-Benz",
      "Model": "SLK",
      "Trim": "SLK 350 Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_752",
      "name": "532271",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532271,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_753",
      "name": "560615",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560615,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Buick",
      "Model": "Lucerne",
      "Trim": "CXL",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_754",
      "name": "583383",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583383,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_755",
      "name": "586877",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586877,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_756",
      "name": "528341",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528341,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_757",
      "name": "517620",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517620,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "LE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_758",
      "name": "514426",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514426,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_759",
      "name": "582649",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582649,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Nissan",
      "Model": "Frontier",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "4.5ft",
      "Engine": "V6, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_760",
      "name": "593133",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 593133,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Hyundai",
      "Model": "Sonata",
      "Trim": "LX",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_761",
      "name": "515069",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515069,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 1500 Limited",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_762",
      "name": "524960",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524960,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "McLaren",
      "Model": "720S",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_763",
      "name": "567512",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 567512,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2010,
      "Make": "BMW",
      "Model": "Z4",
      "Trim": "sDrive35i Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, Twin Turbo, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_764",
      "name": "585733",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585733,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Chevrolet",
      "Model": "Cavalier",
      "Trim": "Z24",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_765",
      "name": "541584",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541584,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Traverse",
      "Trim": "Premier",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_766",
      "name": "534885",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534885,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_767",
      "name": "542131",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542131,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "BMW",
      "Model": "M3",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_768",
      "name": "598594",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598594,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_769",
      "name": "605530",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605530,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Nissan",
      "Model": "Frontier",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_770",
      "name": "538434",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538434,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_771",
      "name": "504838",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504838,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "TRD Sport",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_772",
      "name": "532653",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532653,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "Crossroad Plus",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_773",
      "name": "606310",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606310,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Ford",
      "Model": "Transit 350 HD",
      "Trim": "Low Roof w/LWB w/9,950-lb GVWR",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_774",
      "name": "546751",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546751,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "Edge",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, EcoBoost 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_775",
      "name": "578348",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578348,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "V8, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_776",
      "name": "563694",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563694,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Mitsubishi",
      "Model": "Outlander",
      "Trim": "XLS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_777",
      "name": "537370",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537370,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Big Horn",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_778",
      "name": "576236",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576236,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Ford",
      "Model": "Explorer",
      "Trim": "XLS Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Flex Fuel, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_779",
      "name": "527150",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527150,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "INFINITI",
      "Model": "Q60",
      "Trim": "2.0t Premium",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_780",
      "name": "587108",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587108,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_781",
      "name": "534779",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534779,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Subaru",
      "Model": "XV Crosstrek",
      "Trim": "Hybrid",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Hybrid, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_782",
      "name": "588318",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588318,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Audi",
      "Model": "A6",
      "Trim": "2.7T Quattro",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Turbo, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_783",
      "name": "562985",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562985,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Dsl, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_784",
      "name": "508441",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508441,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Jeep",
      "Model": "Grand Cherokee L",
      "Trim": "Summit",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_785",
      "name": "511135",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 511135,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Transit 150",
      "Trim": "Medium Roof w/LWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_786",
      "name": "596401",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596401,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Volkswagen",
      "Model": "Golf",
      "Trim": "GLS",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_787",
      "name": "549230",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 549230,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoTec3, FF, 4.3L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_788",
      "name": "590756",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590756,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chrysler",
      "Model": "Grand Voyager",
      "Trim": "SE Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_789",
      "name": "597820",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597820,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Toyota",
      "Model": "Sequoia",
      "Trim": "SR5",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_790",
      "name": "598419",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598419,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Saturn",
      "Model": "VUE",
      "Trim": "Red Line",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_791",
      "name": "531482",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531482,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Toyota",
      "Model": "Tundra",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_792",
      "name": "592586",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592586,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_793",
      "name": "598623",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598623,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "BMW",
      "Model": "M6",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V10, 5.0 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_794",
      "name": "562609",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562609,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2011,
      "Make": "Mitsubishi",
      "Model": "Eclipse",
      "Trim": "GT",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_795",
      "name": "543610",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543610,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Passenger",
      "Trim": "High Roof w/144\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "4-Cyl, Turbo Dsl, 2.1L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.1,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_796",
      "name": "545765",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545765,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_797",
      "name": "582119",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582119,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Trailblazer",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, 4.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_798",
      "name": "576090",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576090,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Dsl, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_799",
      "name": "551632",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551632,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Volvo",
      "Model": "XC90",
      "Trim": "3.2 Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, 3.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_800",
      "name": "530220",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530220,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "Crossroad",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_801",
      "name": "524892",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524892,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE All Terrain",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "4-Cyl, Trbo Dsl, 2.8L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_802",
      "name": "507646",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507646,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "4-Cyl, Turbo, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_803",
      "name": "529418",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529418,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Cadillac",
      "Model": "ATS",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_804",
      "name": "547944",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547944,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_805",
      "name": "587715",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587715,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2001,
      "Make": "Lexus",
      "Model": "GS",
      "Trim": "GS 300",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "6-Cyl, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_806",
      "name": "528267",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528267,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chrysler",
      "Model": "200",
      "Trim": "200S Alloy Edition",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, MultiAir, FF, 2.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_807",
      "name": "516066",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 516066,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_808",
      "name": "607738",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607738,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Toyota",
      "Model": "Corolla Hatchback",
      "Trim": "Nightshade",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Dynamic-Force, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_809",
      "name": "547678",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547678,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "Transit 250",
      "Trim": "High Roof w/Sliding Side Door w/LWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "5-Cyl, Diesel, 3.2 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.2,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_810",
      "name": "560445",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 560445,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Big Horn",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_811",
      "name": "545407",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545407,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2019,
      "Make": "MAZDA",
      "Model": "MAZDA3",
      "Trim": "Premium",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, SKYACTIV-G, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_812",
      "name": "604600",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604600,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Buick",
      "Model": "Encore GX",
      "Trim": "Sport Touring",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.3 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_813",
      "name": "584702",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584702,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Volkswagen",
      "Model": "Cabrio",
      "Trim": "GLX",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_814",
      "name": "559200",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559200,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_815",
      "name": "546484",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546484,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "PreRunner",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5ft",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_816",
      "name": "590146",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590146,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_817",
      "name": "553922",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553922,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Chevrolet",
      "Model": "Express 3500 Passenger",
      "Trim": "LS Diesel Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_818",
      "name": "503479",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503479,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Targa 4 GTS",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_819",
      "name": "553723",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553723,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Chevrolet",
      "Model": "HHR",
      "Trim": "LT Sport",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, Flex Fuel, 2.4L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_820",
      "name": "541966",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541966,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoTec3, FF, 4.3L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_821",
      "name": "604537",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604537,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Jeep",
      "Model": "Wrangler Unlimited",
      "Trim": "Beach Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, VVT, eTorque, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_822",
      "name": "598360",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598360,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_823",
      "name": "504054",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 504054,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Hyundai",
      "Model": "Kona",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_824",
      "name": "512558",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512558,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_825",
      "name": "537441",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537441,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, Trbo Dsl, 2.8L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_826",
      "name": "569663",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569663,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Colorado",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "5-Cyl, 3.7 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_827",
      "name": "557694",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557694,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Toyota",
      "Model": "Sequoia",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_828",
      "name": "506203",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506203,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_829",
      "name": "500751",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500751,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2023,
      "Make": "Hyundai",
      "Model": "Santa Fe",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, GDI, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_830",
      "name": "524479",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524479,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_831",
      "name": "524829",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524829,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_832",
      "name": "555342",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 555342,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_833",
      "name": "598858",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598858,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "GMC",
      "Model": "Yukon",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_834",
      "name": "507544",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507544,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_835",
      "name": "569799",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569799,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2007,
      "Make": "Subaru",
      "Model": "Forester",
      "Trim": "Sports X",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_836",
      "name": "601134",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 601134,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Mercedes-Benz",
      "Model": "E",
      "Trim": "E 500 4MATIC",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_837",
      "name": "607260",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607260,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "Lincoln",
      "Model": "Nautilus",
      "Trim": "Black Label",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Hybrid, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_838",
      "name": "563731",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563731,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "FX",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_839",
      "name": "514160",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514160,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "Transit Connect Cargo",
      "Trim": "XL Van",
      "Doors": "4Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_840",
      "name": "569252",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569252,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Aveo",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_841",
      "name": "594237",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594237,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "Eddie Bauer",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_842",
      "name": "519738",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519738,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Chevrolet",
      "Model": "Express 3500 Passenger",
      "Trim": "LT Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_843",
      "name": "522667",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522667,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Audi",
      "Model": "Q5",
      "Trim": "Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_844",
      "name": "548409",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548409,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Rolls-Royce",
      "Model": "Ghost",
      "Trim": "Extended",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V12, Twin Turbo, 6.6L",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_845",
      "name": "518234",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518234,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Nissan",
      "Model": "TITAN XD",
      "Trim": "SV",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_846",
      "name": "522107",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522107,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Cadillac",
      "Model": "XTS",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_847",
      "name": "520342",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520342,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_848",
      "name": "578436",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578436,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2004,
      "Make": "Nissan",
      "Model": "Pathfinder Armada",
      "Trim": "SE Off-Road",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_849",
      "name": "546669",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546669,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Subaru",
      "Model": "Impreza",
      "Trim": "2.0i Sport Limited",
      "Doors": "4Dr",
      "BodyStyle": "Wagon",
      "Engine": "4-Cyl, PZEV, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_850",
      "name": "505916",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505916,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Ferrari",
      "Model": "SF90",
      "Trim": "Stradale",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, Hybrid, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_851",
      "name": "517407",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517407,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Nissan",
      "Model": "Frontier",
      "Trim": "S",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_852",
      "name": "534889",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534889,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_853",
      "name": "597716",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597716,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Volkswagen",
      "Model": "Jetta",
      "Trim": "V6 GLS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 2.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_854",
      "name": "554787",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554787,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Hyundai",
      "Model": "Veloster",
      "Trim": "Base",
      "Doors": "3Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_855",
      "name": "524681",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524681,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_856",
      "name": "599358",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599358,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2007,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Turbo",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Turbo, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_857",
      "name": "505016",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 505016,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "BMW",
      "Model": "3 Series",
      "Trim": "330i",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_858",
      "name": "562608",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562608,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_859",
      "name": "547224",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547224,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie Limited",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_860",
      "name": "523440",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523440,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Hyundai",
      "Model": "Ioniq Plug-in Hybrid",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, Hybrid, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_861",
      "name": "537904",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537904,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Freightliner",
      "Model": "Sprinter 3500 Cargo",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Diesel, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_862",
      "name": "586712",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586712,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_863",
      "name": "517859",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517859,
      "DealerId": 40337,
      "SegmentId": 133,
      "SegmentName": "Import EV's",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Nissan",
      "Model": "LEAF",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "AC Electric Motor",
      "EngineCylinders": "EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "FWD",
      "Transmission": "Single Speed",
      "Adjustment": 105
    },
    {
      "id": "ExactId_864",
      "name": "568340",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568340,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_865",
      "name": "596357",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 596357,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "GMC",
      "Model": "Sierra 3500",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_866",
      "name": "589695",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589695,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_867",
      "name": "604642",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604642,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "AT4",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_868",
      "name": "566728",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566728,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Saturn",
      "Model": "SKY",
      "Trim": "Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_869",
      "name": "581166",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581166,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_870",
      "name": "568267",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568267,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Suburban 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_871",
      "name": "581490",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581490,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Chevrolet",
      "Model": "Cavalier",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_872",
      "name": "523613",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523613,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "SLE",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_873",
      "name": "583851",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583851,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_874",
      "name": "502152",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502152,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Dodge",
      "Model": "Challenger",
      "Trim": "R/T Scat Pack",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_875",
      "name": "565182",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 565182,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Jeep",
      "Model": "Grand Cherokee",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Turbo Dsl 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_876",
      "name": "578359",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 578359,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_877",
      "name": "597278",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597278,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Mercury",
      "Model": "Cougar",
      "Trim": "Zn",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 2.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_878",
      "name": "518987",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518987,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_879",
      "name": "546202",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546202,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Nissan",
      "Model": "NV3500 HD",
      "Trim": "SV Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_880",
      "name": "559923",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559923,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2009,
      "Make": "Nissan",
      "Model": "Titan",
      "Trim": "XE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_881",
      "name": "557744",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557744,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Nissan",
      "Model": "Xterra",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_882",
      "name": "559493",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559493,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "MAZDA",
      "Model": "MAZDA6",
      "Trim": "i Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_883",
      "name": "508151",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508151,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_884",
      "name": "583109",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583109,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "GMC",
      "Model": "Sierra 3500",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_885",
      "name": "604073",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604073,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Dodge",
      "Model": "Durango",
      "Trim": "SRT 392 Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, HEMI, MDS, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_886",
      "name": "530508",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530508,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_887",
      "name": "566977",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566977,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_888",
      "name": "576764",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576764,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_889",
      "name": "588865",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588865,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Short Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_890",
      "name": "594176",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594176,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Honda",
      "Model": "Accord",
      "Trim": "LX",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, VTEC, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_891",
      "name": "603664",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603664,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "INFINITI",
      "Model": "QX50",
      "Trim": "AUTOGRAPH",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_892",
      "name": "576850",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 576850,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2005,
      "Make": "Mitsubishi",
      "Model": "Endeavor",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_893",
      "name": "591138",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591138,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2005,
      "Make": "Toyota",
      "Model": "RAV4",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_894",
      "name": "525997",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525997,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "GMC",
      "Model": "Yukon",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, EcoTec3, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_895",
      "name": "523662",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 523662,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Cadillac",
      "Model": "XTS",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_896",
      "name": "510132",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510132,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Nissan",
      "Model": "Versa",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_897",
      "name": "588023",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588023,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_898",
      "name": "553724",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553724,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_899",
      "name": "515474",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515474,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Mercedes-Benz",
      "Model": "AMG E",
      "Trim": "E 53 AMG Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_900",
      "name": "524813",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524813,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Toyota",
      "Model": "Avalon",
      "Trim": "XLE Plus",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_901",
      "name": "590461",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590461,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Suburban 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_902",
      "name": "571066",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571066,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_903",
      "name": "510824",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510824,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Bronco",
      "Trim": "Black Diamond",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, Twin Turbo, 2.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_904",
      "name": "586992",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 586992,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "ZX5 SE",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_905",
      "name": "549156",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 549156,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Hyundai",
      "Model": "Veloster",
      "Trim": "Base",
      "Doors": "3Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_906",
      "name": "562863",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 562863,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "SXT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.25ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_907",
      "name": "541164",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541164,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2013,
      "Make": "Cadillac",
      "Model": "XTS",
      "Trim": "Premium Collection",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_908",
      "name": "533400",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533400,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_909",
      "name": "547046",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547046,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_910",
      "name": "510152",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510152,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "EcoBoost Premium",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, EcoBoost, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_911",
      "name": "535108",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535108,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "Titanium",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Flex Fuel, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_912",
      "name": "512531",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512531,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_913",
      "name": "551375",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551375,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Outdoorsman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_914",
      "name": "587408",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587408,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2002,
      "Make": "Kia",
      "Model": "Spectra",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_915",
      "name": "585693",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 585693,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Dodge",
      "Model": "Ram 3500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, HO Turbo Dsl",
      "EngineCylinders": "6C",
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_916",
      "name": "563482",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563482,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2008,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_917",
      "name": "542059",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542059,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 3.4 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_918",
      "name": "566235",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566235,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Toyota",
      "Model": "Sienna",
      "Trim": "XLE Limited Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_919",
      "name": "587018",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587018,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_920",
      "name": "554755",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554755,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2013,
      "Make": "Cadillac",
      "Model": "XTS",
      "Trim": "Luxury Collection",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_921",
      "name": "577557",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577557,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_922",
      "name": "581205",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 581205,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_923",
      "name": "507311",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 507311,
      "DealerId": 40337,
      "SegmentId": 133,
      "SegmentName": "Import EV's",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Polestar",
      "Model": "2",
      "Trim": "Long Range Dual Motor",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "Dual Electric Motors",
      "EngineCylinders": "Dual EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 105
    },
    {
      "id": "ExactId_924",
      "name": "540478",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540478,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2019,
      "Make": "Mercedes-Benz",
      "Model": "AMG E",
      "Trim": "E 63 S AMG",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_925",
      "name": "607404",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607404,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_926",
      "name": "543895",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 543895,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_927",
      "name": "548609",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548609,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Honda",
      "Model": "Civic",
      "Trim": "Hybrid",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Hybrid i-VTEC 1.5L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_928",
      "name": "552521",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552521,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_929",
      "name": "542251",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542251,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Outdoorsman",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_930",
      "name": "553752",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553752,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2011,
      "Make": "Porsche",
      "Model": "911",
      "Trim": "Carrera",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_931",
      "name": "532780",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 532780,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "Cadillac",
      "Model": "XT5",
      "Trim": "Luxury",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_932",
      "name": "607041",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607041,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Audi",
      "Model": "S5",
      "Trim": "Prestige",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, Hybrid, PowerBoost, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_933",
      "name": "594236",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594236,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "Expedition",
      "Trim": "Eddie Bauer",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_934",
      "name": "568987",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568987,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, FFV, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_935",
      "name": "537789",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537789,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Jeep",
      "Model": "Compass",
      "Trim": "Sport SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_936",
      "name": "594105",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594105,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chevrolet",
      "Model": "Silverado 2500",
      "Trim": "Short Bed",
      "Doors": "3Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_937",
      "name": "582723",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582723,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Dodge",
      "Model": "Durango",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_938",
      "name": "569267",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569267,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Sprinter 3500 Cargo",
      "Trim": "170\" W.B. Extended Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_939",
      "name": "556822",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 556822,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Scion",
      "Model": "xD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_940",
      "name": "515960",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515960,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Lexus",
      "Model": "IS",
      "Trim": "IS 300 F SPORT",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_941",
      "name": "597153",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597153,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_942",
      "name": "598346",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598346,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Pontiac",
      "Model": "G5",
      "Trim": "GT",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_943",
      "name": "536032",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536032,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_944",
      "name": "550187",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550187,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_945",
      "name": "566814",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566814,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_946",
      "name": "587002",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 587002,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, FFV, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_947",
      "name": "570452",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570452,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Jeep",
      "Model": "Patriot",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_948",
      "name": "501064",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 501064,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Audi",
      "Model": "A7",
      "Trim": "55 TFSI Prestige",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, MHEV, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_949",
      "name": "597186",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597186,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Jeep",
      "Model": "Cherokee",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_950",
      "name": "508453",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508453,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Toyota",
      "Model": "Tundra Hybrid",
      "Trim": "Platinum",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "5.5ft",
      "Engine": "V6, i-FORCE MAX, Hybrid, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas/Hybrid",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_951",
      "name": "557210",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557210,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_952",
      "name": "544903",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544903,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "BMW",
      "Model": "5 Series",
      "Trim": "528i xDrive",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_953",
      "name": "508358",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508358,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "GMC",
      "Model": "Sierra 1500 Limited",
      "Trim": "Pro",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_954",
      "name": "575072",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575072,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Isuzu",
      "Model": "Ascender",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, 4.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_955",
      "name": "544994",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544994,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_956",
      "name": "577807",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577807,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V10, 6.8 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_957",
      "name": "588114",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588114,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Long Bed",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_958",
      "name": "591024",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591024,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2003,
      "Make": "Acura",
      "Model": "NSX",
      "Trim": "NSX-T Targa Open Top",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, VTEC, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_959",
      "name": "545222",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545222,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, HO, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_960",
      "name": "518055",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 518055,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2019,
      "Make": "MAZDA",
      "Model": "MX-5 Miata",
      "Trim": "Club",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, SKYACTIV-G, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_961",
      "name": "564751",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564751,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "Fusion",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_962",
      "name": "526740",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526740,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_963",
      "name": "534917",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534917,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_964",
      "name": "527246",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 527246,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Honda",
      "Model": "Pilot",
      "Trim": "Touring",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_965",
      "name": "584724",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584724,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "E350 Super Duty Passenger",
      "Trim": "XL Extended Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, Turbo Diesel, 7.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_966",
      "name": "564458",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564458,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Impala",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, ECOTEC, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_967",
      "name": "540188",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540188,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Backcountry",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_968",
      "name": "513572",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513572,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_969",
      "name": "572412",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572412,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2005,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_970",
      "name": "600821",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600821,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "Focus",
      "Trim": "ZX3 SE",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_971",
      "name": "534874",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 534874,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_972",
      "name": "588489",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588489,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.3 Liter (L33)",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_973",
      "name": "570811",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570811,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Mercury",
      "Model": "Montego",
      "Trim": "Luxury",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V6, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_974",
      "name": "546452",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546452,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_975",
      "name": "591468",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591468,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_976",
      "name": "547141",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547141,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V6, Flex Fuel, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_977",
      "name": "525063",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525063,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Chevrolet",
      "Model": "Camaro",
      "Trim": "LS",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_978",
      "name": "513795",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513795,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2020,
      "Make": "Nissan",
      "Model": "NV1500",
      "Trim": "SV Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_979",
      "name": "582278",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582278,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_980",
      "name": "564427",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564427,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_981",
      "name": "503542",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 503542,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2022,
      "Make": "Hyundai",
      "Model": "Kona",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_982",
      "name": "549728",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 549728,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "INFINITI",
      "Model": "Q60",
      "Trim": "2.0t Pure",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_983",
      "name": "584529",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 584529,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V6, Flex Fuel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_984",
      "name": "573211",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573211,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_985",
      "name": "510534",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510534,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Buick",
      "Model": "Encore GX",
      "Trim": "Preferred",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "3-Cyl, ECOTEC, Turbo, 1.2 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_986",
      "name": "529785",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529785,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2017,
      "Make": "BMW",
      "Model": "6 Series",
      "Trim": "650i xDrive",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, Twin Turbo, 4.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_987",
      "name": "530969",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 530969,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_988",
      "name": "583796",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583796,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "Explorer Sport",
      "Trim": "XLS",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_989",
      "name": "571360",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571360,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, FF, 5.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_990",
      "name": "600539",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600539,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2005,
      "Make": "Hyundai",
      "Model": "Sonata",
      "Trim": "GL",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_991",
      "name": "502212",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502212,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Equinox",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_992",
      "name": "564275",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564275,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "STX",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 4.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_993",
      "name": "537973",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537973,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "ProMaster City",
      "Trim": "Tradesman Van",
      "Doors": "4Dr",
      "BodyStyle": "Cargo",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_994",
      "name": "563098",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563098,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "XFE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_995",
      "name": "540632",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540632,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chrysler",
      "Model": "300",
      "Trim": "300S",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_996",
      "name": "513343",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 513343,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Volkswagen",
      "Model": "Atlas",
      "Trim": "SEL R-Line 4Motion (2021.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_997",
      "name": "525780",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525780,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XL",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_998",
      "name": "598621",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 598621,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, FF, 5.3L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_999",
      "name": "570124",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570124,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2009,
      "Make": "MAZDA",
      "Model": "MAZDA5",
      "Trim": "Sport Minivan",
      "Doors": "4Dr",
      "BodyStyle": "Passenger",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1000",
      "name": "571856",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 571856,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2006,
      "Make": "Volkswagen",
      "Model": "New Beetle",
      "Trim": "2.5",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "5-Cyl, 2.5 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1001",
      "name": "590943",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590943,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1002",
      "name": "528367",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 528367,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1003",
      "name": "597401",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597401,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Subaru",
      "Model": "Legacy",
      "Trim": "GT",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1004",
      "name": "547937",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 547937,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volvo",
      "Model": "S60",
      "Trim": "T5 Premier (2015.5)",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, PZEV, Drv-E, 2.0T",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1005",
      "name": "550239",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550239,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Jaguar",
      "Model": "F-PACE",
      "Trim": "20d Premium",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo Dsl, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1006",
      "name": "553555",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 553555,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "MINI",
      "Model": "Convertible",
      "Trim": "Cooper S",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, Turbo, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1007",
      "name": "541975",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541975,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Tradesman",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1008",
      "name": "597257",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597257,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Ford",
      "Model": "Ranger",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V6, 4.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1009",
      "name": "551715",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551715,
      "DealerId": 40337,
      "SegmentId": 132,
      "SegmentName": "Import Full Size Truck",
      "Heading": "Import",
      "Year": 2018,
      "Make": "Nissan",
      "Model": "TITAN",
      "Trim": "S",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 5.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1010",
      "name": "546100",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 546100,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "High Country",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Turbo Dsl, 6.6L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1011",
      "name": "502261",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502261,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "Maverick",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "4.5ft",
      "Engine": "4-Cyl, EcoBoost, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1012",
      "name": "606912",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606912,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Defender 90",
      "Trim": "SE (2023.5)",
      "Doors": "2Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, Turbo Diesel, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1013",
      "name": "606709",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606709,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P360 Metropolitan Edition (2023.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 7.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 7.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1014",
      "name": "597287",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 597287,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Pontiac",
      "Model": "Sunfire",
      "Trim": "GT",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1015",
      "name": "564122",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 564122,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500 Passenger",
      "Trim": "High Roof 170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, Turbo Dsl, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1016",
      "name": "551311",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551311,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2014,
      "Make": "BMW",
      "Model": "4 Series",
      "Trim": "428i",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1017",
      "name": "605669",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605669,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "Jeep",
      "Model": "Grand Cherokee L",
      "Trim": "Overland",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, VVT, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1018",
      "name": "595662",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 595662,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2001,
      "Make": "Chevrolet",
      "Model": "Camaro",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1019",
      "name": "517168",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 517168,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V6, EcoBoost, Twin Turbo, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1020",
      "name": "592078",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592078,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "Short Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, 5.9 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.9,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1021",
      "name": "599112",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 599112,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Jeep",
      "Model": "Wrangler",
      "Trim": "Unlimited Sahara",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1022",
      "name": "600267",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600267,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.25ft",
      "Engine": "6-Cyl, HO Trb Dsl 5.9L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 5.9,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1023",
      "name": "526097",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 526097,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2017,
      "Make": "Mitsubishi",
      "Model": "Outlander Sport",
      "Trim": "ES",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1024",
      "name": "557328",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557328,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1025",
      "name": "540239",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540239,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Chevrolet",
      "Model": "Silverado 3500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, CNG, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Natural Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1026",
      "name": "541559",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541559,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1027",
      "name": "515067",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515067,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "LTZ",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, EcoTec3, DFM, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1028",
      "name": "545221",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545221,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2019,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Laramie",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Diesel, 6.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1029",
      "name": "603039",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603039,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Short Bed",
      "Doors": "3Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1030",
      "name": "582482",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582482,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "Excursion",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Turbo Diesel, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1031",
      "name": "536324",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 536324,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, Flex Fuel, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1032",
      "name": "590542",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590542,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1033",
      "name": "566703",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 566703,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2007,
      "Make": "BMW",
      "Model": "Z4",
      "Trim": "3.0i Roadster",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "6-Cyl, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1034",
      "name": "555074",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 555074,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2010,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1035",
      "name": "520557",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520557,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Jeep",
      "Model": "Cherokee",
      "Trim": "Overland",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1036",
      "name": "603886",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 603886,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P360 Metropolitan Edition",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "6-Cyl, MHEV, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1037",
      "name": "545141",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 545141,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2018,
      "Make": "Audi",
      "Model": "A5",
      "Trim": "Premium Plus",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1038",
      "name": "548775",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 548775,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "Dodge",
      "Model": "Viper",
      "Trim": "GTS",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V10, 8.4 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 8.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1039",
      "name": "604771",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604771,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2024,
      "Make": "BMW",
      "Model": "M4",
      "Trim": "Competition",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Twin Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1040",
      "name": "563020",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563020,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2011,
      "Make": "BMW",
      "Model": "3 Series",
      "Trim": "335i",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Turbo, 3.0 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1041",
      "name": "550590",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 550590,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2014,
      "Make": "Ford",
      "Model": "Escape",
      "Trim": "S",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, 2.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1042",
      "name": "583660",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 583660,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2004,
      "Make": "Honda",
      "Model": "S2000",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, VTEC, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1043",
      "name": "590061",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 590061,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2000,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "Long Bed",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1044",
      "name": "582636",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582636,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6L Turbo Dsl",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1045",
      "name": "563415",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 563415,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2009,
      "Make": "BMW",
      "Model": "M5",
      "Trim": "Base",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "V10, 5.0 Liter",
      "EngineCylinders": "10C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1046",
      "name": "509356",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 509356,
      "DealerId": 40337,
      "SegmentId": 126,
      "SegmentName": "Domestic Light Trucks",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "GMC",
      "Model": "Canyon",
      "Trim": "Denali",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, Turbo Diesel, 2.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1047",
      "name": "589673",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589673,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2002,
      "Make": "Mercedes-Benz",
      "Model": "CLK",
      "Trim": "CLK 320 Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V6, 3.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1048",
      "name": "592999",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 592999,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2004,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1049",
      "name": "542164",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 542164,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl, 6.7L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1050",
      "name": "607452",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 607452,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2024,
      "Make": "GMC",
      "Model": "Sierra 3500 HD",
      "Trim": "Pro",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1051",
      "name": "557799",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 557799,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, EcoBoost, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1052",
      "name": "537793",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537793,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "Lexus",
      "Model": "RC",
      "Trim": "RC 350",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1053",
      "name": "533923",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533923,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2017,
      "Make": "MAZDA",
      "Model": "MAZDA6",
      "Trim": "Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl PZEV SKYACTIV-G 2.5L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1054",
      "name": "544058",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544058,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volvo",
      "Model": "XC60",
      "Trim": "T5 Platinum (2015.5)",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "5-Cyl, Turbo, 2.5 Liter",
      "EngineCylinders": "5C",
      "EngineSizeLitters": 2.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1055",
      "name": "549324",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 549324,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SLE",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1056",
      "name": "515058",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 515058,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "5.75ft",
      "Engine": "V8, EcoTec3, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1057",
      "name": "569604",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 569604,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "Fusion",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, 2.3 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1058",
      "name": "506314",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506314,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2022,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Laramie Longhorn",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1059",
      "name": "540318",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 540318,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2013,
      "Make": "Nissan",
      "Model": "370Z",
      "Trim": "Touring",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1060",
      "name": "519884",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 519884,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "GMC",
      "Model": "Savana 2500 Passenger",
      "Trim": "LT Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1061",
      "name": "568932",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568932,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "ST",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1062",
      "name": "512031",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 512031,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Kia",
      "Model": "Forte",
      "Trim": "GT",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, GDI, 1.6 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1063",
      "name": "538680",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 538680,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "Lone Star",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V6, Turbo EcoDiesel, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1064",
      "name": "582177",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 582177,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F250 Super Duty",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Dsl 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1065",
      "name": "559933",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559933,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1066",
      "name": "591271",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 591271,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1067",
      "name": "570061",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 570061,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2010,
      "Make": "Dodge",
      "Model": "Ram 1500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 4.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.7,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1068",
      "name": "524231",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 524231,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ram",
      "Model": "2500",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "Mega Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 6.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1069",
      "name": "544794",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 544794,
      "DealerId": 40337,
      "SegmentId": 130,
      "SegmentName": "Import Commercial Vehicles",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Mercedes-Benz",
      "Model": "Sprinter 2500",
      "Trim": "High Roof w/170\" WB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, Turbo Dsl, 3.0L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1070",
      "name": "510443",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 510443,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2021,
      "Make": "Toyota",
      "Model": "Tacoma",
      "Trim": "SR",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6ft",
      "Engine": "4-Cyl, 2.7 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1071",
      "name": "573404",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573404,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "SL",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 8.1 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 8.1,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1072",
      "name": "506222",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506222,
      "DealerId": 40337,
      "SegmentId": 196,
      "SegmentName": "Domestic Highline Crossovers",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Cadillac",
      "Model": "XT6",
      "Trim": "Premium Luxury",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1073",
      "name": "520959",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 520959,
      "DealerId": 40337,
      "SegmentId": 125,
      "SegmentName": "Import Crossovers",
      "Heading": "Import",
      "Year": 2019,
      "Make": "Toyota",
      "Model": "Highlander",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1074",
      "name": "605626",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 605626,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2024,
      "Make": "Volkswagen",
      "Model": "Jetta",
      "Trim": "1.5T Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1075",
      "name": "529715",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 529715,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2017,
      "Make": "Chevrolet",
      "Model": "Cruze",
      "Trim": "L",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.4 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1076",
      "name": "574567",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 574567,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2006,
      "Make": "Aston Martin",
      "Model": "DB9",
      "Trim": "Volante",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V12, 6.0 Liter",
      "EngineCylinders": "12C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1077",
      "name": "588271",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 588271,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2006,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XLT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1078",
      "name": "535512",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 535512,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "Transit 150",
      "Trim": "Low Roof w/60/40 Side Door w/RWB Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1079",
      "name": "525031",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 525031,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2018,
      "Make": "Ram",
      "Model": "3500",
      "Trim": "Lone Star",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "6.33ft",
      "Engine": "6-Cyl, Turbo Dsl, 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1080",
      "name": "554104",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554104,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.5ft",
      "Engine": "V8, Flex Fuel, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1081",
      "name": "589197",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 589197,
      "DealerId": 40337,
      "SegmentId": 131,
      "SegmentName": "Import Light Truck",
      "Heading": "Import",
      "Year": 2000,
      "Make": "Isuzu",
      "Model": "Hombre",
      "Trim": "XS",
      "Doors": "2Dr",
      "BodyStyle": "Extended Cab",
      "Engine": "4-Cyl, 2.2 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1082",
      "name": "559151",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 559151,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2011,
      "Make": "GMC",
      "Model": "Sierra 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "6.5ft",
      "Engine": "V6, 4.3 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1083",
      "name": "575013",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 575013,
      "DealerId": 40337,
      "SegmentId": 139,
      "SegmentName": "Domestic Minivan",
      "Heading": "Domestic",
      "Year": 2009,
      "Make": "GMC",
      "Model": "Savana 1500 Passenger",
      "Trim": "LT Van",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V8, 5.3 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.3,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1084",
      "name": "506970",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506970,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2021,
      "Make": "Jeep",
      "Model": "Cherokee",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1085",
      "name": "558816",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 558816,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2012,
      "Make": "MAZDA",
      "Model": "MAZDA2",
      "Trim": "Touring",
      "Doors": "4Dr",
      "BodyStyle": "Hatchback",
      "Engine": "4-Cyl, 1.5 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Manual",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1086",
      "name": "551477",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551477,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ford",
      "Model": "Flex",
      "Trim": "Limited",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1087",
      "name": "514901",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 514901,
      "DealerId": 40337,
      "SegmentId": 194,
      "SegmentName": "Domestic Highline Cars",
      "Heading": "Highline",
      "Year": 2020,
      "Make": "Cadillac",
      "Model": "CT4",
      "Trim": "Premium Luxury",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 2.0 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1088",
      "name": "502453",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 502453,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Ford",
      "Model": "F150",
      "Trim": "XL",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1089",
      "name": "600486",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 600486,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2005,
      "Make": "Chevrolet",
      "Model": "Silverado 3500",
      "Trim": "LS",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1090",
      "name": "537479",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 537479,
      "DealerId": 40337,
      "SegmentId": 122,
      "SegmentName": "Domestic SUV's",
      "Heading": "Domestic",
      "Year": 2016,
      "Make": "Ford",
      "Model": "Expedition EL",
      "Trim": "King Ranch",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, EcoBoost, TT, 3.5L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1091",
      "name": "554272",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554272,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2012,
      "Make": "Ram",
      "Model": "1500",
      "Trim": "ST",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.33ft",
      "Engine": "V8, HEMI, 5.7 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1092",
      "name": "539808",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 539808,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2015,
      "Make": "Volkswagen",
      "Model": "Passat",
      "Trim": "1.8T Sport",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1093",
      "name": "522449",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 522449,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2021,
      "Make": "MINI",
      "Model": "Hardtop",
      "Trim": "Cooper",
      "Doors": "2Dr",
      "BodyStyle": "Hatchback",
      "Engine": "3-Cyl, Turbo, 1.5 Liter",
      "EngineCylinders": "3C",
      "EngineSizeLitters": 1.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1094",
      "name": "577920",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 577920,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Chevrolet",
      "Model": "Silverado (Classic) 3500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1095",
      "name": "554609",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 554609,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2010,
      "Make": "BMW",
      "Model": "6 Series",
      "Trim": "650i",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1096",
      "name": "551970",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 551970,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "V6 Premium",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V6, 3.7 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.7,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1097",
      "name": "604063",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604063,
      "DealerId": 40337,
      "SegmentId": 197,
      "SegmentName": "Import Highline Crossovers",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Porsche",
      "Model": "Cayenne",
      "Trim": "Turbo",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, Twin Turbo, 4.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1098",
      "name": "533177",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533177,
      "DealerId": 40337,
      "SegmentId": 124,
      "SegmentName": "Domestic Crossovers",
      "Heading": "Domestic",
      "Year": 2015,
      "Make": "Dodge",
      "Model": "Journey",
      "Trim": "SE",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, Flex Fuel, 3.6 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.6,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1099",
      "name": "533766",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 533766,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2015,
      "Make": "Audi",
      "Model": "A3",
      "Trim": "1.8T Premium Plus Cabriolet",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "4-Cyl, Turbo, 1.8 Liter",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 1.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1100",
      "name": "594215",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 594215,
      "DealerId": 40337,
      "SegmentId": 138,
      "SegmentName": "Import Minivan",
      "Heading": "Import",
      "Year": 2003,
      "Make": "Volkswagen",
      "Model": "Euro",
      "Trim": "MV Minivan",
      "Doors": "3Dr",
      "BodyStyle": "Passenger",
      "Engine": "V6, 2.8 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 2.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1101",
      "name": "500419",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 500419,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Chevrolet",
      "Model": "Silverado 2500 HD",
      "Trim": "Work Truck",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1102",
      "name": "606806",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 606806,
      "DealerId": 40337,
      "SegmentId": 199,
      "SegmentName": "Import Highline SUVs",
      "Heading": "Highline",
      "Year": 2023,
      "Make": "Land Rover",
      "Model": "Discovery",
      "Trim": "P300 S R Dynamic",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V8, 6.2 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1103",
      "name": "572907",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 572907,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2006,
      "Make": "Mercedes-Benz",
      "Model": "CLK",
      "Trim": "CLK 500",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1104",
      "name": "508067",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 508067,
      "DealerId": 40337,
      "SegmentId": 257,
      "SegmentName": "Import Highline Cars",
      "Heading": "Highline",
      "Year": 2022,
      "Make": "Mercedes-Benz",
      "Model": "E",
      "Trim": "E 450 4MATIC",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "6-Cyl, Turbo, 3.0 Liter w/EQ Boost",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "AWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1105",
      "name": "593350",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 593350,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2003,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "8ft",
      "Engine": "V8, Turbo Diesel, 6.0L",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1106",
      "name": "549569",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 549569,
      "DealerId": 40337,
      "SegmentId": 123,
      "SegmentName": "Import SUV's",
      "Heading": "Import",
      "Year": 2012,
      "Make": "Honda",
      "Model": "Pilot",
      "Trim": "EX-L",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "V6, i-VTEC, 3.5 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 3.5,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1107",
      "name": "574631",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 574631,
      "DealerId": 40337,
      "SegmentId": 137,
      "SegmentName": "Exotic Model",
      "Heading": "Highline",
      "Year": 2008,
      "Make": "Bentley",
      "Model": "Azure",
      "Trim": "Base",
      "Doors": "2Dr",
      "BodyStyle": "Convertible",
      "Engine": "V8, Twin Turbo, 6.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.8,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1108",
      "name": "604173",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 604173,
      "DealerId": 40337,
      "SegmentId": 134,
      "SegmentName": "Domestic EV's ",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "Tesla",
      "Model": "Model X",
      "Trim": "Plaid",
      "Doors": "4Dr",
      "BodyStyle": "SUV",
      "Engine": "Triple AC Electric Motors",
      "EngineCylinders": "Triple EV",
      "EngineFuelType": "Electric",
      "Drivetrain": "AWD",
      "Transmission": "Single Speed",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1109",
      "name": "541635",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 541635,
      "DealerId": 40337,
      "SegmentId": 127,
      "SegmentName": "Domestic Full Sized Truck",
      "Heading": "Domestic",
      "Year": 2013,
      "Make": "Chevrolet",
      "Model": "Silverado 1500",
      "Trim": "Work Truck",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "V8, Flex Fuel, 4.8 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 4.8,
      "EngineFuelType": "Flex Fuel",
      "Drivetrain": "2WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1110",
      "name": "602912",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 602912,
      "DealerId": 40337,
      "SegmentId": 129,
      "SegmentName": "Domestic Commercial Vehicles",
      "Heading": "Domestic",
      "Year": 2002,
      "Make": "Ford",
      "Model": "Econoline E150 Cargo",
      "Trim": "Van",
      "Doors": "3Dr",
      "BodyStyle": "Cargo",
      "Engine": "V6, 4.2 Liter",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 4.2,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1111",
      "name": "552867",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 552867,
      "DealerId": 40337,
      "SegmentId": 114,
      "SegmentName": "Import Cars",
      "Heading": "Import",
      "Year": 2014,
      "Make": "Volkswagen",
      "Model": "Jetta",
      "Trim": "2.0L TDI Value Edition",
      "Doors": "4Dr",
      "BodyStyle": "Sedan",
      "Engine": "4-Cyl, Turbo Dsl, 2.0L",
      "EngineCylinders": "4C",
      "EngineSizeLitters": 2.0,
      "EngineFuelType": "Diesel",
      "Drivetrain": "FWD",
      "Transmission": "Automatic",
      "Adjustment": 105
    },
    {
      "id": "ExactId_1112",
      "name": "568474",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 568474,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2007,
      "Make": "Ford",
      "Model": "F350 Super Duty",
      "Trim": "Lariat",
      "Doors": "4Dr",
      "BodyStyle": "Extended Cab",
      "BedLength": "6.75ft",
      "Engine": "V8, 5.4 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.4,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1113",
      "name": "573588",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 573588,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2008,
      "Make": "Dodge",
      "Model": "Ram 2500",
      "Trim": "SLT",
      "Doors": "2Dr",
      "BodyStyle": "Regular Cab",
      "BedLength": "8ft",
      "Engine": "6-Cyl, Turbo Dsl 6.7L",
      "EngineCylinders": "6C",
      "EngineSizeLitters": 6.7,
      "EngineFuelType": "Diesel",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1114",
      "name": "531724",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 531724,
      "DealerId": 40337,
      "SegmentId": 115,
      "SegmentName": "Domestic Cars",
      "Heading": "Domestic",
      "Year": 2020,
      "Make": "Ford",
      "Model": "Mustang",
      "Trim": "BULLITT",
      "Doors": "2Dr",
      "BodyStyle": "Coupe",
      "Engine": "V8, 5.0 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 5.0,
      "EngineFuelType": "Gas",
      "Drivetrain": "RWD",
      "Transmission": "Manual",
      "Adjustment": 85
    },
    {
      "id": "ExactId_1115",
      "name": "506308",
      "type": "ExactId" as Category,
      "x": 0,
      "y": 0,
      "z": 0,
      "ExactId": 506308,
      "DealerId": 40337,
      "SegmentId": 128,
      "SegmentName": "Domestic HD Trucks",
      "Heading": "Domestic",
      "Year": 2023,
      "Make": "GMC",
      "Model": "Sierra 2500 HD",
      "Trim": "AT",
      "Doors": "4Dr",
      "BodyStyle": "Crew Cab",
      "BedLength": "8ft",
      "Engine": "V8, 6.6 Liter",
      "EngineCylinders": "8C",
      "EngineSizeLitters": 6.6,
      "EngineFuelType": "Gas",
      "Drivetrain": "4WD",
      "Transmission": "Automatic",
      "Adjustment": 85
    }
  ],
  "links": [
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_3"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_4"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_6"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_9"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_10"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_12"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_13"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_14"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_15"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_17"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_18"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_19"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_22"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_24"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_25"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_26"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_28"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_29"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_30"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_32"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_33"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_34"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_36"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_37"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_39"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_40"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_41"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_42"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_43"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_44"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_45"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_46"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_47"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_49"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_50"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_51"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_52"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_53"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_54"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_55"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_56"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_57"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_58"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_59"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_60"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_62"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_64"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_65"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_66"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_67"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_68"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_69"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_70"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_71"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_72"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_73"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_74"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_75"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_76"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_77"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_78"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_79"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_80"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_82"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_83"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_84"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_85"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_86"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_87"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_88"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_89"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_90"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_91"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_92"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_93"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_94"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_95"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_96"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_97"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_98"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_99"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_100"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_101"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_102"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_103"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_104"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_105"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_106"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_107"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_109"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_110"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_111"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_112"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_113"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_114"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_115"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_116"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_117"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_118"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_119"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_120"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_121"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_122"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_123"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_124"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_125"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_126"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_127"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_128"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_129"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_130"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_131"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_132"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_133"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_134"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_135"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_136"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_137"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_138"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_139"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_140"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_141"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_142"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_143"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_144"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_145"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_146"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_147"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_148"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_149"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_150"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_151"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_152"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_153"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_154"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_155"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_156"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_157"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_158"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_159"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_161"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_163"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_164"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_165"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_166"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_167"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_168"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_170"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_171"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_172"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_173"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_174"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_175"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_176"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_177"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_178"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_179"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_180"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_181"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_182"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_183"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_184"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_185"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_186"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_187"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_188"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_189"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_190"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_191"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_192"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_193"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_195"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_196"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_197"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_198"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_199"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_200"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_201"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_202"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_203"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_204"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_205"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_206"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_207"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_208"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_209"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_210"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_211"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_212"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_213"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_214"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_215"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_216"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_217"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_218"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_219"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_220"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_221"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_222"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_223"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_224"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_225"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_226"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_227"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_228"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_229"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_230"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_231"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_232"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_233"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_234"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_235"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_236"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_237"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_238"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_239"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_240"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_241"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_242"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_243"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_244"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_245"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_246"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_247"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_248"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_249"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_250"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_251"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_252"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_253"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_254"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_255"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_257"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_258"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_259"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_260"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_261"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_262"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_263"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_264"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_265"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_266"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_267"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_268"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_269"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_270"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_271"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_272"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_273"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_274"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_275"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_276"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_277"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_278"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_279"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_280"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_281"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_282"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_283"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_284"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_285"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_286"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_287"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_288"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_289"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_290"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_291"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_292"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_293"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_294"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_295"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_296"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_297"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_298"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_299"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_300"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_301"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_302"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_303"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_304"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_305"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_306"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_307"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_308"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_309"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_310"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_311"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_312"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_313"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_314"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_315"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_316"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_317"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_318"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_319"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_320"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_321"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_322"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_323"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_324"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_325"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_326"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_327"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_328"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_329"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_330"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_331"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_332"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_333"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_334"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_335"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_336"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_337"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_338"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_339"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_340"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_341"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_342"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_343"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_344"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_345"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_346"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_347"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_348"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_349"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_350"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_351"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_352"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_353"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_354"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_355"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_356"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_357"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_358"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_359"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_360"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_361"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_362"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_363"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_364"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_365"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_366"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_367"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_368"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_369"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_370"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_371"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_372"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_373"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_374"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_375"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_376"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_377"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_378"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_379"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_380"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_381"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_382"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_383"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_384"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_385"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_386"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_387"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_388"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_389"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_390"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_391"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_392"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_393"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_394"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_395"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_396"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_397"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_398"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_399"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_400"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_401"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_402"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_403"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_404"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_405"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_406"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_407"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_408"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_409"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_410"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_411"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_412"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_413"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_414"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_415"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_416"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_417"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_418"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_419"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_420"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_421"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_422"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_423"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_424"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_425"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_426"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_427"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_428"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_429"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_430"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_431"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_432"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_433"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_434"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_435"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_436"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_437"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_438"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_439"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_440"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_441"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_442"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_443"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_444"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_445"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_446"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_447"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_448"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_449"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_450"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_451"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_452"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_453"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_454"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_455"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_456"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_457"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_458"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_459"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_460"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_461"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_462"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_463"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_464"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_465"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_466"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_467"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_468"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_469"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_470"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_471"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_472"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_473"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_474"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_475"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_476"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_477"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_478"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_479"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_480"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_481"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_482"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_483"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_484"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_485"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_486"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_487"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_488"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_489"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_490"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_491"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_492"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_493"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_494"
    },
    {
      "source": "Segment_494",
      "target": "ExactId_495"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_496"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_497"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_498"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_499"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_500"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_501"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_502"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_503"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_504"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_505"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_506"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_507"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_508"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_509"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_510"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_511"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_512"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_513"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_514"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_515"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_516"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_517"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_518"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_519"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_520"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_521"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_522"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_523"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_524"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_525"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_526"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_527"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_528"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_529"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_530"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_531"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_532"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_533"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_534"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_535"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_536"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_537"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_538"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_539"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_540"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_541"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_542"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_543"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_544"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_545"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_546"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_547"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_548"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_549"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_550"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_551"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_552"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_553"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_554"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_555"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_556"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_557"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_558"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_559"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_560"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_561"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_562"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_563"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_564"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_565"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_566"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_567"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_568"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_569"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_570"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_571"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_572"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_573"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_574"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_575"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_576"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_577"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_578"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_579"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_580"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_581"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_582"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_583"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_584"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_585"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_586"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_587"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_588"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_589"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_590"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_591"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_592"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_593"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_594"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_595"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_596"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_597"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_598"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_599"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_600"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_601"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_602"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_603"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_604"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_605"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_606"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_607"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_608"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_609"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_610"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_611"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_612"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_613"
    },
    {
      "source": "Segment_613",
      "target": "ExactId_614"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_615"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_616"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_617"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_618"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_619"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_620"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_621"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_622"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_623"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_624"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_625"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_626"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_627"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_628"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_629"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_630"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_631"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_632"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_633"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_634"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_635"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_636"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_637"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_638"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_639"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_640"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_641"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_642"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_643"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_644"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_645"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_646"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_613"
    },
    {
      "source": "Segment_613",
      "target": "ExactId_647"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_648"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_649"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_650"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_651"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_652"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_653"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_654"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_655"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_656"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_657"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_658"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_659"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_660"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_661"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_662"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_663"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_664"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_665"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_666"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_667"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_668"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_669"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_670"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_671"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_672"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_673"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_674"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_675"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_676"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_677"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_678"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_679"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_680"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_681"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_682"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_683"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_684"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_685"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_686"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_687"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_688"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_689"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_690"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_691"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_692"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_693"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_694"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_695"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_696"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_697"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_698"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_699"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_700"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_701"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_702"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_703"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_704"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_705"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_706"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_707"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_708"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_709"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_710"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_711"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_712"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_713"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_714"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_715"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_716"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_717"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_718"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_719"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_720"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_721"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_722"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_723"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_724"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_725"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_726"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_727"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_728"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_729"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_730"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_731"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_732"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_733"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_734"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_735"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_736"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_737"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_738"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_739"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_740"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_741"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_742"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_743"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_744"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_745"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_746"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_747"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_748"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_749"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_750"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_751"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_752"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_753"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_754"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_755"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_756"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_757"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_758"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_759"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_760"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_761"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_762"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_763"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_764"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_765"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_766"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_767"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_768"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_769"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_770"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_771"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_772"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_773"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_774"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_775"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_776"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_777"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_778"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_779"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_780"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_781"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_782"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_783"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_784"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_785"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_786"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_787"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_788"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_789"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_790"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_791"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_792"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_793"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_794"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_795"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_796"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_797"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_798"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_799"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_800"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_801"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_802"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_803"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_804"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_805"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_806"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_807"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_808"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_809"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_810"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_811"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_812"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_813"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_814"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_815"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_816"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_817"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_818"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_819"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_820"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_821"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_822"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_823"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_824"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_825"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_826"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_827"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_828"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_829"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_830"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_831"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_832"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_833"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_834"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_835"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_836"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_837"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_838"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_839"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_840"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_841"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_842"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_843"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_844"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_845"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_846"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_847"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_848"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_849"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_850"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_851"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_852"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_853"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_854"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_855"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_856"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_857"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_858"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_859"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_860"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_861"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_862"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_494"
    },
    {
      "source": "Segment_494",
      "target": "ExactId_863"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_864"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_865"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_866"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_867"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_868"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_869"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_870"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_871"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_872"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_873"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_874"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_875"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_876"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_877"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_878"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_879"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_880"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_881"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_882"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_883"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_884"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_885"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_886"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_887"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_888"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_889"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_890"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_891"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_892"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_893"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_894"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_895"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_896"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_897"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_898"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_899"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_900"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_901"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_902"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_903"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_904"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_905"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_906"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_907"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_908"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_909"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_910"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_911"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_912"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_913"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_914"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_915"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_916"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_917"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_918"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_919"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_920"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_921"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_922"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_494"
    },
    {
      "source": "Segment_494",
      "target": "ExactId_923"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_924"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_925"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_926"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_927"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_928"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_929"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_930"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_931"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_932"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_933"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_934"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_935"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_936"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_937"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_938"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_939"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_940"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_941"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_942"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_943"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_944"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_945"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_946"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_947"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_948"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_949"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_950"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_951"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_952"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_953"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_954"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_955"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_956"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_957"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_958"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_959"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_960"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_961"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_962"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_963"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_964"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_965"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_966"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_967"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_968"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_969"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_970"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_971"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_972"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_973"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_974"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_975"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_976"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_977"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_978"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_979"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_980"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_981"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_982"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_983"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_984"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_985"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_986"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_987"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_988"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_989"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_990"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_991"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_992"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_993"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_994"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_995"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_996"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_997"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_998"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_999"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1000"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1001"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1002"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1003"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1004"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_1005"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1006"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1007"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_1008"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_31"
    },
    {
      "source": "Segment_31",
      "target": "ExactId_1009"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1010"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_1011"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_1012"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_1013"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1014"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_1015"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1016"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1017"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1018"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1019"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1020"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1021"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1022"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_1023"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1024"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1025"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1026"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1027"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1028"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1029"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1030"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1031"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1032"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1033"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_1034"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1035"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_1036"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1037"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_1038"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_1039"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1040"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1041"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_1042"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1043"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1044"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1045"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_23"
    },
    {
      "source": "Segment_23",
      "target": "ExactId_1046"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1047"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1048"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1049"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1050"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1051"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1052"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1053"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_1054"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1055"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1056"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1057"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1058"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1059"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_1060"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1061"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1062"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1063"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1064"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1065"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1066"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1067"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1068"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_169"
    },
    {
      "source": "Segment_169",
      "target": "ExactId_1069"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_1070"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1071"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_162"
    },
    {
      "source": "Segment_162",
      "target": "ExactId_1072"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_35"
    },
    {
      "source": "Segment_35",
      "target": "ExactId_1073"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1074"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1075"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_1076"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1077"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_1078"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1079"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1080"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_38"
    },
    {
      "source": "Segment_38",
      "target": "ExactId_1081"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1082"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_256"
    },
    {
      "source": "Segment_256",
      "target": "ExactId_1083"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1084"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1085"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_1086"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_81"
    },
    {
      "source": "Segment_81",
      "target": "ExactId_1087"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1088"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1089"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_16"
    },
    {
      "source": "Segment_16",
      "target": "ExactId_1090"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1091"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1092"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1093"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1094"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1095"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1096"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_194"
    },
    {
      "source": "Segment_194",
      "target": "ExactId_1097"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_63"
    },
    {
      "source": "Segment_63",
      "target": "ExactId_1098"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1099"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_160"
    },
    {
      "source": "Segment_160",
      "target": "ExactId_1100"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1101"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_108"
    },
    {
      "source": "Segment_108",
      "target": "ExactId_1102"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1103"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_21"
    },
    {
      "source": "Segment_21",
      "target": "ExactId_1104"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1105"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_8"
    },
    {
      "source": "Segment_8",
      "target": "ExactId_1106"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_20"
    },
    {
      "source": "Heading_20",
      "target": "Segment_61"
    },
    {
      "source": "Segment_61",
      "target": "ExactId_1107"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_613"
    },
    {
      "source": "Segment_613",
      "target": "ExactId_1108"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_11"
    },
    {
      "source": "Segment_11",
      "target": "ExactId_1109"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_48"
    },
    {
      "source": "Segment_48",
      "target": "ExactId_1110"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_7"
    },
    {
      "source": "Heading_7",
      "target": "Segment_27"
    },
    {
      "source": "Segment_27",
      "target": "ExactId_1111"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1112"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1113"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_2"
    },
    {
      "source": "Segment_2",
      "target": "ExactId_1114"
    },
    {
      "source": "Dealer_0",
      "target": "Heading_1"
    },
    {
      "source": "Heading_1",
      "target": "Segment_5"
    },
    {
      "source": "Segment_5",
      "target": "ExactId_1115"
    }
  ]
};