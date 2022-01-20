// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(item, i, array) {
    if (item % 5 === 0) {
      count ++;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  fruits = _.filter(fruits, function(item) {
    if (item === targetFruit) {
      return item;
    }
  });
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(item) {
    var lower = letter.toLowerCase();
    if (item[0] === lower) {
      return item;
    }
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(item) {
    if (item['type'] === 'cookie') {
      return item;
    }
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(memo, item) {
    return memo + Number(item.price.replace(/[^0-9.-]+/g, ''));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
   //create empty dessert object
  dessertObj = _.reduce(desserts, function(c, p) {
    c[p['type']] = (c[p['type']] || 0) + 1;
    return c;
  }, {});
  return dessertObj; //return complete desert object
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(acc, item) {
    if (item['releaseYear'] >= 1990 && item['releaseYear'] <= 2000) {
      acc.push(item['title']);
    }
    return acc;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(bool, item) {
    if (item.runtime <= timeLimit) {
      bool = true;
    }
    return bool;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var arr = _.map(fruits, function(element) {
    return element.toUpperCase();
  });
  return arr;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  var arr = _.map(desserts, function(item) {
    if (item.ingredients.includes('flour') === false) {
      item['glutenFree'] = true;
    } else {
      item['glutenFree'] = false;
    }
    return item;
  });
  return arr;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  var arr = _.map(groceries, function(element) {
    var price = Number(element.price.replace(/[^0-9.-]+/g, ''));
    var fixed = (price - (price * coupon));
    element['salePrice'] = '$' + Number(fixed.toFixed(2));
    return element;
  });
  return arr;
};
