# object-string-query - Object query with string

Find object propery by querying  object with a string

## Installation

```bashp
npm install object-string-query
```

## Usage
Find object propery by querying object with a string 
```bashp
  const osq = require('object-string-query');
  
  var obj = {
    vehicle: 'car',
    cities: ['city1', 'city2']
  }
  
  var queryString  = 'vehicle'
  
  // find object property
  var result = osq.parse(queryString, obj);
  
  console.log(result) // 'car'
```
Propery inside object array
```bashp
  const osq = require('object-string-query');
  
  var obj = {
    vehicle: 'car',
    cities: ['city1', 'city2']
  }
  
  var queryString  = 'cities[1]';
  
  // find object property
  var result = osq.parse(queryString, obj);
  
  console.log(result) // 'city2'
```

Find nested property
```bashp
  const osq = require('object-string-query');
  
  var obj = {
    places: {
        country: 'country1',
        cities: ['city1', 'city2']
      }
  }
  
  var queryString  = 'places.cities[1]';
  
  // find object property
  var result = osq.parse(queryString, obj);
  
  console.log(result) // 'city2'
```

