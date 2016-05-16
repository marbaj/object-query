# object-string-query - Object query with string

## Installation

```bashp
npm install object-string-query
```

## Usage

```bashp
  const osq = require('object-string-query');
  
  var obj = {
    vehicle: 'car',
    cities: ['city1', 'city2']
  }
  
  var queryString  = 'vehicle'
  
  var result = osq.parse(queryString, obj);
  
  console.log(result) // 'car'
```
