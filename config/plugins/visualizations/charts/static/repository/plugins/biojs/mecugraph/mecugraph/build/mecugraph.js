var MecuGraph =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 140);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global HTMLElement DocumentTouch */

var window = __webpack_require__( 4 );
var navigator = window ? window.navigator : null;
var document = window ? window.document : null;

var typeofstr = typeof '';
var typeofobj = typeof {};
var typeoffn = typeof function(){};
var typeofhtmlele = typeof HTMLElement;

var instanceStr = function( obj ){
  return obj && obj.instanceString && is.fn( obj.instanceString ) ? obj.instanceString() : null;
};

var is = {
  defined: function( obj ){
    return obj != null; // not undefined or null
  },

  string: function( obj ){
    return obj != null && typeof obj == typeofstr;
  },

  fn: function( obj ){
    return obj != null && typeof obj === typeoffn;
  },

  array: function( obj ){
    return Array.isArray ? Array.isArray( obj ) : obj != null && obj instanceof Array;
  },

  plainObject: function( obj ){
    return obj != null && typeof obj === typeofobj && !is.array( obj ) && obj.constructor === Object;
  },

  object: function( obj ){
    return obj != null && typeof obj === typeofobj;
  },

  number: function( obj ){
    return obj != null && typeof obj === typeof 1 && !isNaN( obj );
  },

  integer: function( obj ){
    return is.number( obj ) && Math.floor( obj ) === obj;
  },

  bool: function( obj ){
    return obj != null && typeof obj === typeof true;
  },

  htmlElement: function( obj ){
    if( 'undefined' === typeofhtmlele ){
      return undefined;
    } else {
      return null != obj && obj instanceof HTMLElement;
    }
  },

  elementOrCollection: function( obj ){
    return is.element( obj ) || is.collection( obj );
  },

  element: function( obj ){
    return instanceStr( obj ) === 'collection' && obj._private.single;
  },

  collection: function( obj ){
    return instanceStr( obj ) === 'collection' && !obj._private.single;
  },

  core: function( obj ){
    return instanceStr( obj ) === 'core';
  },

  style: function( obj ){
    return instanceStr( obj ) === 'style';
  },

  stylesheet: function( obj ){
    return instanceStr( obj ) === 'stylesheet';
  },

  event: function( obj ){
    return instanceStr( obj ) === 'event';
  },

  thread: function( obj ){
    return instanceStr( obj ) === 'thread';
  },

  fabric: function( obj ){
    return instanceStr( obj ) === 'fabric';
  },

  emptyString: function( obj ){
    if( obj === undefined || obj === null ){ // null is empty
      return true;
    } else if( obj === '' || obj.match( /^\s+$/ ) ){
      return true; // empty string is empty
    }

    return false; // otherwise, we don't know what we've got
  },

  nonemptyString: function( obj ){
    if( obj && is.string( obj ) && obj !== '' && !obj.match( /^\s+$/ ) ){
      return true;
    }

    return false;
  },

  domElement: function( obj ){
    if( typeof HTMLElement === 'undefined' ){
      return false; // we're not in a browser so it doesn't matter
    } else {
      return obj instanceof HTMLElement;
    }
  },

  boundingBox: function( obj ){
    return is.plainObject( obj ) &&
      is.number( obj.x1 ) && is.number( obj.x2 ) &&
      is.number( obj.y1 ) && is.number( obj.y2 )
    ;
  },

  promise: function( obj ){
    return is.object( obj ) && is.fn( obj.then );
  },

  touch: function(){
    return window && ( ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch );
  },

  gecko: function(){
    return window && ( typeof InstallTrigger !== 'undefined' || ('MozAppearance' in document.documentElement.style) );
  },

  webkit: function(){
    return window && ( typeof webkitURL !== 'undefined' || ('WebkitAppearance' in document.documentElement.style) );
  },

  chromium: function(){
    return window && ( typeof chrome !== 'undefined' );
  },

  khtml: function(){
    return navigator && navigator.vendor.match( /kde/i ); // probably a better way to detect this...
  },

  khtmlEtc: function(){
    return is.khtml() || is.webkit() || is.chromium();
  },

  ms: function(){
    return navigator && navigator.userAgent.match( /msie|trident|edge/i ); // probably a better way to detect this...
  },

  windows: function(){
    return navigator && navigator.appVersion.match( /Win/i );
  },

  mac: function(){
    return navigator && navigator.appVersion.match( /Mac/i );
  },

  linux: function(){
    return navigator && navigator.appVersion.match( /Linux/i );
  },

  unix: function(){
    return navigator && navigator.appVersion.match( /X11/i );
  }
};

module.exports = is;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global console */

var is = __webpack_require__( 0 );
var math = __webpack_require__( 2 );

var util = {

  trueify: function(){ return true; },

  falsify: function(){ return false; },

  zeroify: function(){ return 0; },

  noop: function(){},

  error: function( msg ){
    /* eslint-disable */
    if( console.error ){
      console.error.apply( console, arguments );

      if( console.trace ){ console.trace(); }
    } else {
      console.log.apply( console, arguments );

      if( console.trace ){ console.trace(); }
    }
    /* eslint-enable */
  },

  clone: function( obj ){
    return this.extend( {}, obj );
  },

  // gets a shallow copy of the argument
  copy: function( obj ){
    if( obj == null ){
      return obj;
    } if( is.array( obj ) ){
      return obj.slice();
    } else if( is.plainObject( obj ) ){
      return this.clone( obj );
    } else {
      return obj;
    }
  },

  uuid: function(
      a,b                // placeholders
  ){
      for(               // loop :)
          b=a='';        // b - result , a - numeric variable
          a++<36;        //
          b+=a*51&52  // if "a" is not 9 or 14 or 19 or 24
                      ?  //  return a random number or 4
             (
               a^15      // if "a" is not 15
                  ?      // genetate a random number from 0 to 15
               8^Math.random()*
               (a^20?16:4)  // unless "a" is 20, in which case a random number from 8 to 11
                  :
               4            //  otherwise 4
               ).toString(16)
                      :
             '-'            //  in other cases (if "a" is 9,14,19,24) insert "-"
          );
      return b;
  }

};

util.makeBoundingBox = math.makeBoundingBox.bind( math );

util._staticEmptyObject = {};

util.staticEmptyObject = function(){
  return util._staticEmptyObject;
};

util.extend = Object.assign != null ? Object.assign : function( tgt ){
  var args = arguments;

  for( var i = 1; i < args.length; i++ ){
    var obj = args[ i ];

    if( !obj ){ continue; }

    var keys = Object.keys( obj );

    for( var j = 0; j < keys.length; j++ ){
      var k = keys[j];

      tgt[ k ] = obj[ k ];
    }
  }

  return tgt;
};

util.default = function( val, def ){
  if( val === undefined ){
    return def;
  } else {
    return val;
  }
};

util.removeFromArray = function( arr, ele, manyCopies ){
  for( var i = arr.length; i >= 0; i-- ){
    if( arr[i] === ele ){
      arr.splice( i, 1 );

      if( !manyCopies ){ break; }
    }
  }
};

util.clearArray = function( arr ){
  arr.splice( 0, arr.length );
};

util.getPrefixedProperty = function( obj, propName, prefix ){
  if( prefix ){
    propName = this.prependCamel( prefix, propName ); // e.g. (labelWidth, source) => sourceLabelWidth
  }

  return obj[ propName ];
};

util.setPrefixedProperty = function( obj, propName, prefix, value ){
  if( prefix ){
    propName = this.prependCamel( prefix, propName ); // e.g. (labelWidth, source) => sourceLabelWidth
  }

  obj[ propName ] = value;
};

[
  __webpack_require__( 118 ),
  __webpack_require__( 119 ),
  { memoize: __webpack_require__( 23 ) },
  __webpack_require__( 120 ),
  __webpack_require__( 121 ),
  __webpack_require__( 122 )
].forEach( function( req ){
  util.extend( util, req );
} );

module.exports = util;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = {};

math.arePositionsSame = function( p1, p2 ){
  return p1.x === p2.x && p1.y === p2.y;
};

math.copyPosition = function( p ){
  return { x: p.x, y: p.y };
};

math.array2point = function( arr ){
  return {
    x: arr[0],
    y: arr[1]
  };
};

math.deg2rad = function( deg ){
  return Math.PI * deg / 180;
};

math.log2 = Math.log2 || function( n ){
  return Math.log( n ) / Math.log( 2 );
};

math.signum = function( x ){
  if( x > 0 ){
    return 1;
  } else if( x < 0 ){
    return -1;
  } else {
    return 0;
  }
};

math.dist = function( p1, p2 ){
  return Math.sqrt( math.sqdist( p1, p2 ) );
};

math.sqdist = function( p1, p2 ){
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;

  return dx * dx + dy * dy;
};

// from http://en.wikipedia.org/wiki/Bézier_curve#Quadratic_curves
math.qbezierAt = function( p0, p1, p2, t ){
  return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
};

math.qbezierPtAt = function( p0, p1, p2, t ){
  return {
    x: math.qbezierAt( p0.x, p1.x, p2.x, t ),
    y: math.qbezierAt( p0.y, p1.y, p2.y, t )
  };
};

math.lineAt = function( p0, p1, t, d ){
  var vec = {
    x: p1.x - p0.x,
    y: p1.y - p0.y
  };

  var vecDist = math.dist( p0, p1 );

  var normVec = {
    x: vec.x / vecDist,
    y: vec.y / vecDist
  };

  t = t == null ? 0 : t;

  var d = d != null ? d : t * vecDist;

  return {
    x: p0.x + normVec.x * d,
    y: p0.y + normVec.y * d
  };
};

math.lineAtDist = function( p0, p1, d ){
  return math.lineAt( p0, p1, undefined, d );
};

// get angle at A via cosine law
math.triangleAngle = function( A, B, C ){
  var a = math.dist( B, C );
  var b = math.dist( A, C );
  var c = math.dist( A, B );

  return Math.acos( (a*a + b*b - c*c)/(2*a*b) );
};

math.bound = function( min, val, max ){
  return Math.max( min, Math.min( max, val ) );
};

// makes a full bb (x1, y1, x2, y2, w, h) from implicit params
math.makeBoundingBox = function( bb ){
  if( bb == null ){
    return {
      x1: Infinity,
      y1: Infinity,
      x2: -Infinity,
      y2: -Infinity,
      w: 0,
      h: 0
    };
  } else if( bb.x1 != null && bb.y1 != null ){
    if( bb.x2 != null && bb.y2 != null && bb.x2 >= bb.x1 && bb.y2 >= bb.y1 ){
      return {
        x1: bb.x1,
        y1: bb.y1,
        x2: bb.x2,
        y2: bb.y2,
        w: bb.x2 - bb.x1,
        h: bb.y2 - bb.y1
      };
    } else if( bb.w != null && bb.h != null && bb.w >= 0 && bb.h >= 0 ){
      return {
        x1: bb.x1,
        y1: bb.y1,
        x2: bb.x1 + bb.w,
        y2: bb.y1 + bb.h,
        w: bb.w,
        h: bb.h
      };
    }
  }
};

math.updateBoundingBox = function( bb1, bb2 ){
  // update bb1 with bb2 bounds

  bb1.x1 = Math.min( bb1.x1, bb2.x1 );
  bb1.x2 = Math.max( bb1.x2, bb2.x2 );
  bb1.w = bb1.x2 - bb1.x1;

  bb1.y1 = Math.min( bb1.y1, bb2.y1 );
  bb1.y2 = Math.max( bb1.y2, bb2.y2 );
  bb1.h = bb1.y2 - bb1.y1;
};

math.expandBoundingBox = function( bb, padding ){
  bb.x1 -= padding;
  bb.x2 += padding;
  bb.y1 -= padding;
  bb.y2 += padding;
  bb.w = bb.x2 - bb.x1;
  bb.h = bb.y2 - bb.y1;

  return bb;
};

math.boundingBoxesIntersect = function( bb1, bb2 ){
  // case: one bb to right of other
  if( bb1.x1 > bb2.x2 ){ return false; }
  if( bb2.x1 > bb1.x2 ){ return false; }

  // case: one bb to left of other
  if( bb1.x2 < bb2.x1 ){ return false; }
  if( bb2.x2 < bb1.x1 ){ return false; }

  // case: one bb above other
  if( bb1.y2 < bb2.y1 ){ return false; }
  if( bb2.y2 < bb1.y1 ){ return false; }

  // case: one bb below other
  if( bb1.y1 > bb2.y2 ){ return false; }
  if( bb2.y1 > bb1.y2 ){ return false; }

  // otherwise, must have some overlap
  return true;
};

math.inBoundingBox = function( bb, x, y ){
  return bb.x1 <= x && x <= bb.x2 && bb.y1 <= y && y <= bb.y2;
};

math.pointInBoundingBox = function( bb, pt ){
  return this.inBoundingBox( bb, pt.x, pt.y );
};

math.boundingBoxInBoundingBox = function( bb1, bb2 ){
  return (
       math.inBoundingBox( bb1, bb2.x1, bb2.y1 )
    && math.inBoundingBox( bb1, bb2.x2, bb2.y2 )
  );
};

math.roundRectangleIntersectLine = function(
  x, y, nodeX, nodeY, width, height, padding ){

  var cornerRadius = this.getRoundRectangleRadius( width, height );

  var halfWidth = width / 2;
  var halfHeight = height / 2;

  // Check intersections with straight line segments
  var straightLineIntersections;

  // Top segment, left to right
  {
    var topStartX = nodeX - halfWidth + cornerRadius - padding;
    var topStartY = nodeY - halfHeight - padding;
    var topEndX = nodeX + halfWidth - cornerRadius + padding;
    var topEndY = topStartY;

    straightLineIntersections = this.finiteLinesIntersect(
      x, y, nodeX, nodeY, topStartX, topStartY, topEndX, topEndY, false );

    if( straightLineIntersections.length > 0 ){
      return straightLineIntersections;
    }
  }

  // Right segment, top to bottom
  {
    var rightStartX = nodeX + halfWidth + padding;
    var rightStartY = nodeY - halfHeight + cornerRadius - padding;
    var rightEndX = rightStartX;
    var rightEndY = nodeY + halfHeight - cornerRadius + padding;

    straightLineIntersections = this.finiteLinesIntersect(
      x, y, nodeX, nodeY, rightStartX, rightStartY, rightEndX, rightEndY, false );

    if( straightLineIntersections.length > 0 ){
      return straightLineIntersections;
    }
  }

  // Bottom segment, left to right
  {
    var bottomStartX = nodeX - halfWidth + cornerRadius - padding;
    var bottomStartY = nodeY + halfHeight + padding;
    var bottomEndX = nodeX + halfWidth - cornerRadius + padding;
    var bottomEndY = bottomStartY;

    straightLineIntersections = this.finiteLinesIntersect(
      x, y, nodeX, nodeY, bottomStartX, bottomStartY, bottomEndX, bottomEndY, false );

    if( straightLineIntersections.length > 0 ){
      return straightLineIntersections;
    }
  }

  // Left segment, top to bottom
  {
    var leftStartX = nodeX - halfWidth - padding;
    var leftStartY = nodeY - halfHeight + cornerRadius - padding;
    var leftEndX = leftStartX;
    var leftEndY = nodeY + halfHeight - cornerRadius + padding;

    straightLineIntersections = this.finiteLinesIntersect(
      x, y, nodeX, nodeY, leftStartX, leftStartY, leftEndX, leftEndY, false );

    if( straightLineIntersections.length > 0 ){
      return straightLineIntersections;
    }
  }

  // Check intersections with arc segments
  var arcIntersections;

  // Top Left
  {
    var topLeftCenterX = nodeX - halfWidth + cornerRadius;
    var topLeftCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = this.intersectLineCircle(
      x, y, nodeX, nodeY,
      topLeftCenterX, topLeftCenterY, cornerRadius + padding );

    // Ensure the intersection is on the desired quarter of the circle
    if( arcIntersections.length > 0
      && arcIntersections[0] <= topLeftCenterX
      && arcIntersections[1] <= topLeftCenterY ){
      return [ arcIntersections[0], arcIntersections[1] ];
    }
  }

  // Top Right
  {
    var topRightCenterX = nodeX + halfWidth - cornerRadius;
    var topRightCenterY = nodeY - halfHeight + cornerRadius;
    arcIntersections = this.intersectLineCircle(
      x, y, nodeX, nodeY,
      topRightCenterX, topRightCenterY, cornerRadius + padding );

    // Ensure the intersection is on the desired quarter of the circle
    if( arcIntersections.length > 0
      && arcIntersections[0] >= topRightCenterX
      && arcIntersections[1] <= topRightCenterY ){
      return [ arcIntersections[0], arcIntersections[1] ];
    }
  }

  // Bottom Right
  {
    var bottomRightCenterX = nodeX + halfWidth - cornerRadius;
    var bottomRightCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = this.intersectLineCircle(
      x, y, nodeX, nodeY,
      bottomRightCenterX, bottomRightCenterY, cornerRadius + padding );

    // Ensure the intersection is on the desired quarter of the circle
    if( arcIntersections.length > 0
      && arcIntersections[0] >= bottomRightCenterX
      && arcIntersections[1] >= bottomRightCenterY ){
      return [ arcIntersections[0], arcIntersections[1] ];
    }
  }

  // Bottom Left
  {
    var bottomLeftCenterX = nodeX - halfWidth + cornerRadius;
    var bottomLeftCenterY = nodeY + halfHeight - cornerRadius;
    arcIntersections = this.intersectLineCircle(
      x, y, nodeX, nodeY,
      bottomLeftCenterX, bottomLeftCenterY, cornerRadius + padding );

    // Ensure the intersection is on the desired quarter of the circle
    if( arcIntersections.length > 0
      && arcIntersections[0] <= bottomLeftCenterX
      && arcIntersections[1] >= bottomLeftCenterY ){
      return [ arcIntersections[0], arcIntersections[1] ];
    }
  }

  return []; // if nothing
};

math.inLineVicinity = function( x, y, lx1, ly1, lx2, ly2, tolerance ){
  var t = tolerance;

  var x1 = Math.min( lx1, lx2 );
  var x2 = Math.max( lx1, lx2 );
  var y1 = Math.min( ly1, ly2 );
  var y2 = Math.max( ly1, ly2 );

  return x1 - t <= x && x <= x2 + t
    && y1 - t <= y && y <= y2 + t;
};

math.inBezierVicinity = function(
  x, y, x1, y1, x2, y2, x3, y3, tolerance ){

  var bb = {
    x1: Math.min( x1, x3, x2 ) - tolerance,
    x2: Math.max( x1, x3, x2 ) + tolerance,
    y1: Math.min( y1, y3, y2 ) - tolerance,
    y2: Math.max( y1, y3, y2 ) + tolerance
  };

  // if outside the rough bounding box for the bezier, then it can't be a hit
  if( x < bb.x1 || x > bb.x2 || y < bb.y1 || y > bb.y2 ){
    // console.log('bezier out of rough bb')
    return false;
  } else {
    // console.log('do more expensive check');
    return true;
  }

};

math.solveCubic = function( a, b, c, d, result ){

  // Solves a cubic function, returns root in form [r1, i1, r2, i2, r3, i3], where
  // r is the real component, i is the imaginary component

  // An implementation of the Cardano method from the year 1545
  // http://en.wikipedia.org/wiki/Cubic_function#The_nature_of_the_roots

  b /= a;
  c /= a;
  d /= a;

  var discriminant, q, r, dum1, s, t, term1, r13;

  q = (3.0 * c - (b * b)) / 9.0;
  r = -(27.0 * d) + b * (9.0 * c - 2.0 * (b * b));
  r /= 54.0;

  discriminant = q * q * q + r * r;
  result[1] = 0;
  term1 = (b / 3.0);

  if( discriminant > 0 ){
    s = r + Math.sqrt( discriminant );
    s = ((s < 0) ? -Math.pow( -s, (1.0 / 3.0) ) : Math.pow( s, (1.0 / 3.0) ));
    t = r - Math.sqrt( discriminant );
    t = ((t < 0) ? -Math.pow( -t, (1.0 / 3.0) ) : Math.pow( t, (1.0 / 3.0) ));
    result[0] = -term1 + s + t;
    term1 += (s + t) / 2.0;
    result[4] = result[2] = -term1;
    term1 = Math.sqrt( 3.0 ) * (-t + s) / 2;
    result[3] = term1;
    result[5] = -term1;
    return;
  }

  result[5] = result[3] = 0;

  if( discriminant === 0 ){
    r13 = ((r < 0) ? -Math.pow( -r, (1.0 / 3.0) ) : Math.pow( r, (1.0 / 3.0) ));
    result[0] = -term1 + 2.0 * r13;
    result[4] = result[2] = -(r13 + term1);
    return;
  }

  q = -q;
  dum1 = q * q * q;
  dum1 = Math.acos( r / Math.sqrt( dum1 ) );
  r13 = 2.0 * Math.sqrt( q );
  result[0] = -term1 + r13 * Math.cos( dum1 / 3.0 );
  result[2] = -term1 + r13 * Math.cos( (dum1 + 2.0 * Math.PI) / 3.0 );
  result[4] = -term1 + r13 * Math.cos( (dum1 + 4.0 * Math.PI) / 3.0 );

  return;
};

math.sqdistToQuadraticBezier = function(
  x, y, x1, y1, x2, y2, x3, y3 ){

  // Find minimum distance by using the minimum of the distance
  // function between the given point and the curve

  // This gives the coefficients of the resulting cubic equation
  // whose roots tell us where a possible minimum is
  // (Coefficients are divided by 4)

  var a = 1.0 * x1 * x1 - 4 * x1 * x2 + 2 * x1 * x3 + 4 * x2 * x2 - 4 * x2 * x3 + x3 * x3
    + y1 * y1 - 4 * y1 * y2 + 2 * y1 * y3 + 4 * y2 * y2 - 4 * y2 * y3 + y3 * y3;

  var b = 1.0 * 9 * x1 * x2 - 3 * x1 * x1 - 3 * x1 * x3 - 6 * x2 * x2 + 3 * x2 * x3
    + 9 * y1 * y2 - 3 * y1 * y1 - 3 * y1 * y3 - 6 * y2 * y2 + 3 * y2 * y3;

  var c = 1.0 * 3 * x1 * x1 - 6 * x1 * x2 + x1 * x3 - x1 * x + 2 * x2 * x2 + 2 * x2 * x - x3 * x
    + 3 * y1 * y1 - 6 * y1 * y2 + y1 * y3 - y1 * y + 2 * y2 * y2 + 2 * y2 * y - y3 * y;

  var d = 1.0 * x1 * x2 - x1 * x1 + x1 * x - x2 * x
    + y1 * y2 - y1 * y1 + y1 * y - y2 * y;

  // debug("coefficients: " + a / a + ", " + b / a + ", " + c / a + ", " + d / a);

  var roots = [];

  // Use the cubic solving algorithm
  this.solveCubic( a, b, c, d, roots );

  var zeroThreshold = 0.0000001;

  var params = [];

  for( var index = 0; index < 6; index += 2 ){
    if( Math.abs( roots[ index + 1] ) < zeroThreshold
        && roots[ index ] >= 0
        && roots[ index ] <= 1.0 ){
      params.push( roots[ index ] );
    }
  }

  params.push( 1.0 );
  params.push( 0.0 );

  var minDistanceSquared = -1;
  var closestParam;

  var curX, curY, distSquared;
  for( var i = 0; i < params.length; i++ ){
    curX = Math.pow( 1.0 - params[ i ], 2.0 ) * x1
      + 2.0 * (1 - params[ i ]) * params[ i ] * x2
      + params[ i ] * params[ i ] * x3;

    curY = Math.pow( 1 - params[ i ], 2.0 ) * y1
      + 2 * (1.0 - params[ i ]) * params[ i ] * y2
      + params[ i ] * params[ i ] * y3;

    distSquared = Math.pow( curX - x, 2 ) + Math.pow( curY - y, 2 );
    // debug('distance for param ' + params[i] + ": " + Math.sqrt(distSquared));
    if( minDistanceSquared >= 0 ){
      if( distSquared < minDistanceSquared ){
        minDistanceSquared = distSquared;
        closestParam = params[ i ];
      }
    } else {
      minDistanceSquared = distSquared;
      closestParam = params[ i ];
    }
  }

  return minDistanceSquared;
};

math.sqdistToFiniteLine = function( x, y, x1, y1, x2, y2 ){
  var offset = [ x - x1, y - y1 ];
  var line = [ x2 - x1, y2 - y1 ];

  var lineSq = line[0] * line[0] + line[1] * line[1];
  var hypSq = offset[0] * offset[0] + offset[1] * offset[1];

  var dotProduct = offset[0] * line[0] + offset[1] * line[1];
  var adjSq = dotProduct * dotProduct / lineSq;

  if( dotProduct < 0 ){
    return hypSq;
  }

  if( adjSq > lineSq ){
    return (x - x2) * (x - x2) + (y - y2) * (y - y2);
  }

  return hypSq - adjSq;
};

math.pointInsidePolygonPoints = function( x, y, points ){
  var x1, y1, x2, y2;
  var y3;

  // Intersect with vertical line through (x, y)
  var up = 0;
  var down = 0;
  for( var i = 0; i < points.length / 2; i++ ){

    x1 = points[ i * 2];
    y1 = points[ i * 2 + 1];

    if( i + 1 < points.length / 2 ){
      x2 = points[ (i + 1) * 2];
      y2 = points[ (i + 1) * 2 + 1];
    } else {
      x2 = points[ (i + 1 - points.length / 2) * 2];
      y2 = points[ (i + 1 - points.length / 2) * 2 + 1];
    }

    if( x1 == x && x2 == x ){
      // then ignore
    } else if( (x1 >= x && x >= x2)
      || (x1 <= x && x <= x2) ){

      y3 = (x - x1) / (x2 - x1) * (y2 - y1) + y1;

      if( y3 > y ){
        up++;
      }

      if( y3 < y ){
        down++;
      }

    } else {
      continue;
    }

  }

  if( up % 2 === 0 ){
    return false;
  } else {
    return true;
  }
};

math.pointInsidePolygon = function(
  x, y, basePoints, centerX, centerY, width, height, direction, padding ){

  //var direction = arguments[6];
  var transformedPoints = new Array( basePoints.length );

  // Gives negative angle
  var angle;

  if( direction[0] != null ){
    angle = Math.atan( direction[1] / direction[0] );

    if( direction[0] < 0 ){
      angle = angle + Math.PI / 2;
    } else {
      angle = -angle - Math.PI / 2;
    }
  } else {
    angle = direction;
  }

  var cos = Math.cos( -angle );
  var sin = Math.sin( -angle );

  //    console.log("base: " + basePoints);
  for( var i = 0; i < transformedPoints.length / 2; i++ ){
    transformedPoints[ i * 2] =
      width / 2 * (basePoints[ i * 2] * cos
        - basePoints[ i * 2 + 1] * sin);

    transformedPoints[ i * 2 + 1] =
      height / 2 * (basePoints[ i * 2 + 1] * cos
        + basePoints[ i * 2] * sin);

    transformedPoints[ i * 2] += centerX;
    transformedPoints[ i * 2 + 1] += centerY;
  }

  var points;

  if( padding > 0 ){
    var expandedLineSet = this.expandPolygon(
      transformedPoints,
      -padding );

    points = this.joinLines( expandedLineSet );
  } else {
    points = transformedPoints;
  }

  return math.pointInsidePolygonPoints( x, y, points );
};

math.joinLines = function( lineSet ){

  var vertices = new Array( lineSet.length / 2 );

  var currentLineStartX, currentLineStartY, currentLineEndX, currentLineEndY;
  var nextLineStartX, nextLineStartY, nextLineEndX, nextLineEndY;

  for( var i = 0; i < lineSet.length / 4; i++ ){
    currentLineStartX = lineSet[ i * 4];
    currentLineStartY = lineSet[ i * 4 + 1];
    currentLineEndX = lineSet[ i * 4 + 2];
    currentLineEndY = lineSet[ i * 4 + 3];

    if( i < lineSet.length / 4 - 1 ){
      nextLineStartX = lineSet[ (i + 1) * 4];
      nextLineStartY = lineSet[ (i + 1) * 4 + 1];
      nextLineEndX = lineSet[ (i + 1) * 4 + 2];
      nextLineEndY = lineSet[ (i + 1) * 4 + 3];
    } else {
      nextLineStartX = lineSet[0];
      nextLineStartY = lineSet[1];
      nextLineEndX = lineSet[2];
      nextLineEndY = lineSet[3];
    }

    var intersection = this.finiteLinesIntersect(
      currentLineStartX, currentLineStartY,
      currentLineEndX, currentLineEndY,
      nextLineStartX, nextLineStartY,
      nextLineEndX, nextLineEndY,
      true );

    vertices[ i * 2] = intersection[0];
    vertices[ i * 2 + 1] = intersection[1];
  }

  return vertices;
};

math.expandPolygon = function( points, pad ){

  var expandedLineSet = new Array( points.length * 2 );

  var currentPointX, currentPointY, nextPointX, nextPointY;

  for( var i = 0; i < points.length / 2; i++ ){
    currentPointX = points[ i * 2];
    currentPointY = points[ i * 2 + 1];

    if( i < points.length / 2 - 1 ){
      nextPointX = points[ (i + 1) * 2];
      nextPointY = points[ (i + 1) * 2 + 1];
    } else {
      nextPointX = points[0];
      nextPointY = points[1];
    }

    // Current line: [currentPointX, currentPointY] to [nextPointX, nextPointY]

    // Assume CCW polygon winding

    var offsetX = (nextPointY - currentPointY);
    var offsetY = -(nextPointX - currentPointX);

    // Normalize
    var offsetLength = Math.sqrt( offsetX * offsetX + offsetY * offsetY );
    var normalizedOffsetX = offsetX / offsetLength;
    var normalizedOffsetY = offsetY / offsetLength;

    expandedLineSet[ i * 4] = currentPointX + normalizedOffsetX * pad;
    expandedLineSet[ i * 4 + 1] = currentPointY + normalizedOffsetY * pad;
    expandedLineSet[ i * 4 + 2] = nextPointX + normalizedOffsetX * pad;
    expandedLineSet[ i * 4 + 3] = nextPointY + normalizedOffsetY * pad;
  }

  return expandedLineSet;
};

math.intersectLineEllipse = function(
  x, y, centerX, centerY, ellipseWradius, ellipseHradius ){

  var dispX = centerX - x;
  var dispY = centerY - y;

  dispX /= ellipseWradius;
  dispY /= ellipseHradius;

  var len = Math.sqrt( dispX * dispX + dispY * dispY );

  var newLength = len - 1;

  if( newLength < 0 ){
    return [];
  }

  var lenProportion = newLength / len;

  return [ (centerX - x) * lenProportion + x, (centerY - y) * lenProportion + y ];
};

// Returns intersections of increasing distance from line's start point
math.intersectLineCircle = function(
  x1, y1, x2, y2, centerX, centerY, radius ){

  // Calculate d, direction vector of line
  var d = [ x2 - x1, y2 - y1 ]; // Direction vector of line
  var c = [ centerX, centerY ]; // Center of circle
  var f = [ x1 - centerX, y1 - centerY ];

  var a = d[0] * d[0] + d[1] * d[1];
  var b = 2 * (f[0] * d[0] + f[1] * d[1]);
  var c = (f[0] * f[0] + f[1] * f[1]) - radius * radius ;

  var discriminant = b * b - 4 * a * c;

  if( discriminant < 0 ){
    return [];
  }

  var t1 = (-b + Math.sqrt( discriminant )) / (2 * a);
  var t2 = (-b - Math.sqrt( discriminant )) / (2 * a);

  var tMin = Math.min( t1, t2 );
  var tMax = Math.max( t1, t2 );
  var inRangeParams = [];

  if( tMin >= 0 && tMin <= 1 ){
    inRangeParams.push( tMin );
  }

  if( tMax >= 0 && tMax <= 1 ){
    inRangeParams.push( tMax );
  }

  if( inRangeParams.length === 0 ){
    return [];
  }

  var nearIntersectionX = inRangeParams[0] * d[0] + x1;
  var nearIntersectionY = inRangeParams[0] * d[1] + y1;

  if( inRangeParams.length > 1 ){

    if( inRangeParams[0] == inRangeParams[1] ){
      return [ nearIntersectionX, nearIntersectionY ];
    } else {

      var farIntersectionX = inRangeParams[1] * d[0] + x1;
      var farIntersectionY = inRangeParams[1] * d[1] + y1;

      return [ nearIntersectionX, nearIntersectionY, farIntersectionX, farIntersectionY ];
    }

  } else {
    return [ nearIntersectionX, nearIntersectionY ];
  }

};

math.findCircleNearPoint = function( centerX, centerY,
  radius, farX, farY ){

  var displacementX = farX - centerX;
  var displacementY = farY - centerY;
  var distance = Math.sqrt( displacementX * displacementX
    + displacementY * displacementY );

  var unitDisplacementX = displacementX / distance;
  var unitDisplacementY = displacementY / distance;

  return [ centerX + unitDisplacementX * radius,
    centerY + unitDisplacementY * radius ];
};

math.findMaxSqDistanceToOrigin = function( points ){
  var maxSqDistance = 0.000001;
  var sqDistance;

  for( var i = 0; i < points.length / 2; i++ ){

    sqDistance = points[ i * 2] * points[ i * 2]
      + points[ i * 2 + 1] * points[ i * 2 + 1];

    if( sqDistance > maxSqDistance ){
      maxSqDistance = sqDistance;
    }
  }

  return maxSqDistance;
};

math.midOfThree = function( a, b, c ){
  if( (b <= a && a <= c) || (c <= a && a <= b) ){
    return a;
  } else if( (a <= b && b <= c) || (c <= b && b <= a) ){
    return b;
  } else {
    return c;
  }
};

math.finiteLinesIntersect = function( x1, y1, x2, y2, x3, y3, x4, y4, infiniteLines ){

  var dx13 = x1 - x3;
  var dx21 = x2 - x1;
  var dx43 = x4 - x3;

  var dy13 = y1 - y3;
  var dy21 = y2 - y1;
  var dy43 = y4 - y3;

  var ua_t = dx43 * dy13 - dy43 * dx13;
  var ub_t = dx21 * dy13 - dy21 * dx13;
  var u_b  = dy43 * dx21 - dx43 * dy21;

  if( u_b !== 0 ){
    var ua = ua_t / u_b;
    var ub = ub_t / u_b;

    var flptThreshold = 0.001;
    var min = 0 - flptThreshold;
    var max = 1 + flptThreshold;

    if( min <= ua && ua <= max && min <= ub && ub <= max ){
      return [ x1 + ua * dx21, y1 + ua * dy21 ];

    } else {
      if( !infiniteLines ){
        return [];
      } else {
        return [ x1 + ua * dx21, y1 + ua * dy21 ];
      }
    }
  } else {
    if( ua_t === 0 || ub_t === 0 ){

      // Parallel, coincident lines. Check if overlap

      // Check endpoint of second line
      if( this.midOfThree( x1, x2, x4 ) === x4 ){
        return [ x4, y4 ];
      }

      // Check start point of second line
      if( this.midOfThree( x1, x2, x3 ) === x3 ){
        return [ x3, y3 ];
      }

      // Endpoint of first line
      if( this.midOfThree( x3, x4, x2 ) === x2 ){
        return [ x2, y2 ];
      }

      return [];
    } else {

      // Parallel, non-coincident
      return [];
    }
  }
};

math.polygonIntersectLine = function(
  x, y, basePoints, centerX, centerY, width, height, padding ){

  var intersections = [];
  var intersection;

  var transformedPoints = new Array( basePoints.length );

  for( var i = 0; i < transformedPoints.length / 2; i++ ){
    transformedPoints[ i * 2] = basePoints[ i * 2] * width + centerX;
    transformedPoints[ i * 2 + 1] = basePoints[ i * 2 + 1] * height + centerY;
  }

  var points;

  if( padding > 0 ){
    var expandedLineSet = math.expandPolygon(
      transformedPoints,
      -padding );

    points = math.joinLines( expandedLineSet );
  } else {
    points = transformedPoints;
  }
  // var points = transformedPoints;

  var currentX, currentY, nextX, nextY;

  for( var i = 0; i < points.length / 2; i++ ){

    currentX = points[ i * 2];
    currentY = points[ i * 2 + 1];

    if( i < points.length / 2 - 1 ){
      nextX = points[ (i + 1) * 2];
      nextY = points[ (i + 1) * 2 + 1];
    } else {
      nextX = points[0];
      nextY = points[1];
    }

    intersection = this.finiteLinesIntersect(
      x, y, centerX, centerY,
      currentX, currentY,
      nextX, nextY );

    if( intersection.length !== 0 ){
      intersections.push( intersection[0], intersection[1] );
    }
  }

  return intersections;
};

math.shortenIntersection = function(
  intersection, offset, amount ){

  var disp = [ intersection[0] - offset[0], intersection[1] - offset[1] ];

  var length = Math.sqrt( disp[0] * disp[0] + disp[1] * disp[1] );

  var lenRatio = (length - amount) / length;

  if( lenRatio < 0 ){
    lenRatio = 0.00001;
  }

  return [ offset[0] + lenRatio * disp[0], offset[1] + lenRatio * disp[1] ];
};

math.generateUnitNgonPointsFitToSquare = function( sides, rotationRadians ){
  var points = math.generateUnitNgonPoints( sides, rotationRadians );
  points = math.fitPolygonToSquare( points );

  return points;
};

math.fitPolygonToSquare = function( points ){
  var x, y;
  var sides = points.length / 2;
  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

  for( var i = 0; i < sides; i++ ){
    x = points[2 * i ];
    y = points[2 * i + 1];

    minX = Math.min( minX, x );
    maxX = Math.max( maxX, x );
    minY = Math.min( minY, y );
    maxY = Math.max( maxY, y );
  }

  // stretch factors
  var sx = 2 / (maxX - minX);
  var sy = 2 / (maxY - minY);

  for( var i = 0; i < sides; i++ ){
    x = points[2 * i ] = points[2 * i ] * sx;
    y = points[2 * i + 1] = points[2 * i + 1] * sy;

    minX = Math.min( minX, x );
    maxX = Math.max( maxX, x );
    minY = Math.min( minY, y );
    maxY = Math.max( maxY, y );
  }

  if( minY < -1 ){
    for( var i = 0; i < sides; i++ ){
      y = points[2 * i + 1] = points[2 * i + 1] + (-1 - minY);
    }
  }

  return points;
};

math.generateUnitNgonPoints = function( sides, rotationRadians ){

  var increment = 1.0 / sides * 2 * Math.PI;
  var startAngle = sides % 2 === 0 ?
    Math.PI / 2.0 + increment / 2.0 : Math.PI / 2.0;
  //    console.log(nodeShapes['square']);
  startAngle += rotationRadians;

  var points = new Array( sides * 2 );

  var currentAngle, x, y;
  for( var i = 0; i < sides; i++ ){
    currentAngle = i * increment + startAngle;

    x = points[2 * i ] = Math.cos( currentAngle );// * (1 + i/2);
    y = points[2 * i + 1] = Math.sin( -currentAngle );//  * (1 + i/2);
  }

  return points;
};

math.getRoundRectangleRadius = function( width, height ){

  // Set the default radius, unless half of width or height is smaller than default
  return Math.min( width / 4, height / 4, 8 );
};

module.exports = math;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// use this module to cherry pick functions into your prototype
// (useful for functions shared between the core and collections, for example)

// e.g.
// var foo = define.foo({ /* params... */ })

var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );
var Selector = __webpack_require__( 10 );
var Promise = __webpack_require__( 5 );
var Event = __webpack_require__( 13 );
var Animation = __webpack_require__( 36 );

var define = {

  // access data field
  data: function( params ){
    var defaults = {
      field: 'data',
      bindingEvent: 'data',
      allowBinding: false,
      allowSetting: false,
      allowGetting: false,
      settingEvent: 'data',
      settingTriggersEvent: false,
      triggerFnName: 'trigger',
      immutableKeys: {}, // key => true if immutable
      updateStyle: false,
      onSet: function( self ){},
      canSet: function( self ){ return true; }
    };
    params = util.extend( {}, defaults, params );

    return function dataImpl( name, value ){
      var p = params;
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var single = selfIsArrayLike ? self[0] : self;

      // .data('foo', ...)
      if( is.string( name ) ){ // set or get property

        // .data('foo')
        if( p.allowGetting && value === undefined ){ // get

          var ret;
          if( single ){
            ret = single._private[ p.field ][ name ];
          }
          return ret;

        // .data('foo', 'bar')
        } else if( p.allowSetting && value !== undefined ){ // set
          var valid = !p.immutableKeys[ name ];
          if( valid ){
            for( var i = 0, l = all.length; i < l; i++ ){
              if( p.canSet( all[ i ] ) ){
                all[ i ]._private[ p.field ][ name ] = value;
              }
            }

            // update mappers if asked
            if( p.updateStyle ){ self.updateStyle(); }

            // call onSet callback
            p.onSet( self );

            if( p.settingTriggersEvent ){
              self[ p.triggerFnName ]( p.settingEvent );
            }
          }
        }

      // .data({ 'foo': 'bar' })
      } else if( p.allowSetting && is.plainObject( name ) ){ // extend
        var obj = name;
        var k, v;
        var keys = Object.keys( obj );

        for( var i = 0; i < keys.length; i++ ){
          k = keys[ i ];
          v = obj[ k ];

          var valid = !p.immutableKeys[ k ];
          if( valid ){
            for( var j = 0; j < all.length; j++ ){
              var ele = all[j];

              if( p.canSet( ele ) ){
                ele._private[ p.field ][ k ] = v;
              }
            }
          }
        }

        // update mappers if asked
        if( p.updateStyle ){ self.updateStyle(); }

        // call onSet callback
        p.onSet( self );

        if( p.settingTriggersEvent ){
          self[ p.triggerFnName ]( p.settingEvent );
        }

      // .data(function(){ ... })
      } else if( p.allowBinding && is.fn( name ) ){ // bind to event
        var fn = name;
        self.on( p.bindingEvent, fn );

      // .data()
      } else if( p.allowGetting && name === undefined ){ // get whole object
        var ret;
        if( single ){
          ret = single._private[ p.field ];
        }
        return ret;
      }

      return self; // maintain chainability
    }; // function
  }, // data

  // remove data field
  removeData: function( params ){
    var defaults = {
      field: 'data',
      event: 'data',
      triggerFnName: 'trigger',
      triggerEvent: false,
      immutableKeys: {} // key => true if immutable
    };
    params = util.extend( {}, defaults, params );

    return function removeDataImpl( names ){
      var p = params;
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like

      // .removeData('foo bar')
      if( is.string( names ) ){ // then get the list of keys, and delete them
        var keys = names.split( /\s+/ );
        var l = keys.length;

        for( var i = 0; i < l; i++ ){ // delete each non-empty key
          var key = keys[ i ];
          if( is.emptyString( key ) ){ continue; }

          var valid = !p.immutableKeys[ key ]; // not valid if immutable
          if( valid ){
            for( var i_a = 0, l_a = all.length; i_a < l_a; i_a++ ){
              all[ i_a ]._private[ p.field ][ key ] = undefined;
            }
          }
        }

        if( p.triggerEvent ){
          self[ p.triggerFnName ]( p.event );
        }

      // .removeData()
      } else if( names === undefined ){ // then delete all keys

        for( var i_a = 0, l_a = all.length; i_a < l_a; i_a++ ){
          var _privateFields = all[ i_a ]._private[ p.field ];
          var keys = Object.keys( _privateFields );

          for( var i = 0; i < keys.length; i++ ){
            var key = keys[i];
            var validKeyToDelete = !p.immutableKeys[ key ];

            if( validKeyToDelete ){
              _privateFields[ key ] = undefined;
            }
          }
        }

        if( p.triggerEvent ){
          self[ p.triggerFnName ]( p.event );
        }
      }

      return self; // maintain chaining
    }; // function
  }, // removeData

  // event function reusable stuff
  event: {
    regex: /(\w+)(\.(?:\w+|\*))?/, // regex for matching event strings (e.g. "click.namespace")
    universalNamespace: '.*', // matches as if no namespace specified and prevents users from unbinding accidentally
    optionalTypeRegex: /(\w+)?(\.(?:\w+|\*))?/,
    falseCallback: function(){ return false; }
  },

  // event binding
  on: function( params ){
    var defaults = {
      unbindSelfOnTrigger: false,
      unbindAllBindersOnTrigger: false
    };
    params = util.extend( {}, defaults, params );

    return function onImpl( events, selector, data, callback ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var eventsIsString = is.string( events );
      var p = params;

      if( is.plainObject( selector ) ){ // selector is actually data
        callback = data;
        data = selector;
        selector = undefined;
      } else if( is.fn( selector ) || selector === false ){ // selector is actually callback
        callback = selector;
        data = undefined;
        selector = undefined;
      }

      if( is.fn( data ) || data === false ){ // data is actually callback
        callback = data;
        data = undefined;
      }

      // if there isn't a callback, we can't really do anything
      // (can't speak for mapped events arg version)
      if( !(is.fn( callback ) || callback === false) && eventsIsString ){
        return self; // maintain chaining
      }

      if( eventsIsString ){ // then convert to map
        var map = {};
        map[ events ] = callback;
        events = map;
      }

      var keys = Object.keys( events );

      for( var k = 0; k < keys.length; k++ ){
        var evts = keys[k];

        callback = events[ evts ];
        if( callback === false ){
          callback = define.event.falseCallback;
        }

        if( !is.fn( callback ) ){ continue; }

        evts = evts.split( /\s+/ );
        for( var i = 0; i < evts.length; i++ ){
          var evt = evts[ i ];
          if( is.emptyString( evt ) ){ continue; }

          var match = evt.match( define.event.regex ); // type[.namespace]

          if( match ){
            var type = match[1];
            var namespace = match[2] ? match[2] : undefined;

            var listener = {
              callback: callback, // callback to run
              data: data, // extra data in eventObj.data
              delegated: selector ? true : false, // whether the evt is delegated
              selector: selector, // the selector to match for delegated events
              selObj: new Selector( selector ), // cached selector object to save rebuilding
              type: type, // the event type (e.g. 'click')
              namespace: namespace, // the event namespace (e.g. ".foo")
              unbindSelfOnTrigger: p.unbindSelfOnTrigger,
              unbindAllBindersOnTrigger: p.unbindAllBindersOnTrigger,
              binders: all // who bound together
            };

            for( var j = 0; j < all.length; j++ ){
              var _p = all[ j ]._private = all[ j ]._private || {};

              _p.listeners = _p.listeners || [];
              _p.listeners.push( listener );
            }
          }
        } // for events array
      } // for events map

      return self; // maintain chaining
    }; // function
  }, // on

  eventAliasesOn: function( proto ){
    var p = proto;

    p.addListener = p.listen = p.bind = p.on;
    p.removeListener = p.unlisten = p.unbind = p.off;
    p.emit = p.trigger;

    // this is just a wrapper alias of .on()
    p.pon = p.promiseOn = function( events, selector ){
      var self = this;
      var args = Array.prototype.slice.call( arguments, 0 );

      return new Promise( function( resolve, reject ){
        var callback = function( e ){
          self.off.apply( self, offArgs );

          resolve( e );
        };

        var onArgs = args.concat( [ callback ] );
        var offArgs = onArgs.concat( [] );

        self.on.apply( self, onArgs );
      } );
    };
  },

  off: function offImpl( params ){
    var defaults = {
    };
    params = util.extend( {}, defaults, params );

    return function( events, selector, callback ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var eventsIsString = is.string( events );

      if( arguments.length === 0 ){ // then unbind all

        for( var i = 0; i < all.length; i++ ){
          all[ i ]._private = all[ i ]._private || {};

          _p.listeners = [];
        }

        return self; // maintain chaining
      }

      if( is.fn( selector ) || selector === false ){ // selector is actually callback
        callback = selector;
        selector = undefined;
      }

      if( eventsIsString ){ // then convert to map
        var map = {};
        map[ events ] = callback;
        events = map;
      }

      var keys = Object.keys( events );

      for( var k = 0; k < keys.length; k++ ){
        var evts = keys[k];

        callback = events[ evts ];

        if( callback === false ){
          callback = define.event.falseCallback;
        }

        evts = evts.split( /\s+/ );
        for( var h = 0; h < evts.length; h++ ){
          var evt = evts[ h ];
          if( is.emptyString( evt ) ){ continue; }

          var match = evt.match( define.event.optionalTypeRegex ); // [type][.namespace]
          if( match ){
            var type = match[1] ? match[1] : undefined;
            var namespace = match[2] ? match[2] : undefined;

            for( var i = 0; i < all.length; i++ ){ //
              var _p = all[ i ]._private = all[ i ]._private || {};
              var listeners = _p.listeners = _p.listeners || [];

              for( var j = 0; j < listeners.length; j++ ){
                var listener = listeners[ j ];
                var nsMatches = !namespace || namespace === listener.namespace;
                var typeMatches = !type || listener.type === type;
                var cbMatches = !callback || callback === listener.callback;
                var listenerMatches = nsMatches && typeMatches && cbMatches;

                // delete listener if it matches
                if( listenerMatches ){
                  listeners.splice( j, 1 );
                  j--;
                }
              } // for listeners
            } // for all
          } // if match
        } // for events array

      } // for events map

      return self; // maintain chaining
    }; // function
  }, // off

  trigger: function( params ){
    var defaults = {};
    params = util.extend( {}, defaults, params );

    return function triggerImpl( events, extraParams, fnToTrigger ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var eventsIsString = is.string( events );
      var eventsIsObject = is.plainObject( events );
      var eventsIsEvent = is.event( events );
      var _p = this._private = this._private || {};
      var cy = _p.cy || ( is.core( this ) ? this : null );
      var hasCompounds = cy ? cy.hasCompoundNodes() : false;

      if( eventsIsString ){ // then make a plain event object for each event name
        var evts = events.split( /\s+/ );
        events = [];

        for( var i = 0; i < evts.length; i++ ){
          var evt = evts[ i ];
          if( is.emptyString( evt ) ){ continue; }

          var match = evt.match( define.event.regex ); // type[.namespace]
          var type = match[1];
          var namespace = match[2] ? match[2] : undefined;

          events.push( {
            type: type,
            namespace: namespace
          } );
        }
      } else if( eventsIsObject ){ // put in length 1 array
        var eventArgObj = events;

        events = [ eventArgObj ];
      }

      if( extraParams ){
        if( !is.array( extraParams ) ){ // make sure extra params are in an array if specified
          extraParams = [ extraParams ];
        }
      } else { // otherwise, we've got nothing
        extraParams = [];
      }

      for( var i = 0; i < events.length; i++ ){ // trigger each event in order
        var evtObj = events[ i ];

        for( var j = 0; j < all.length; j++ ){ // for each
          var triggerer = all[ j ];
          var _p = triggerer._private = triggerer._private || {};
          var listeners = _p.listeners = _p.listeners || [];
          var triggererIsElement = is.element( triggerer );
          var bubbleUp = triggererIsElement || params.layout;

          // create the event for this element from the event object
          var evt;

          if( eventsIsEvent ){ // then just get the object
            evt = evtObj;

            evt.cyTarget = evt.cyTarget || triggerer;
            evt.cy = evt.cy || cy;

          } else { // then we have to make one
            evt = new Event( evtObj, {
              cyTarget: triggerer,
              cy: cy,
              namespace: evtObj.namespace
            } );
          }

          // if a layout was specified, then put it in the typed event
          if( evtObj.layout ){
            evt.layout = evtObj.layout;
          }

          // if triggered by layout, put in event
          if( params.layout ){
            evt.layout = triggerer;
          }

          // create a rendered position based on the passed position
          if( evt.cyPosition ){
            var pos = evt.cyPosition;
            var zoom = cy.zoom();
            var pan = cy.pan();

            evt.cyRenderedPosition = {
              x: pos.x * zoom + pan.x,
              y: pos.y * zoom + pan.y
            };
          }

          if( fnToTrigger ){ // then override the listeners list with just the one we specified
            listeners = [ {
              namespace: evt.namespace,
              type: evt.type,
              callback: fnToTrigger
            } ];
          }

          for( var k = 0; k < listeners.length; k++ ){ // check each listener
            var lis = listeners[ k ];
            var nsMatches = !lis.namespace || lis.namespace === evt.namespace || lis.namespace === define.event.universalNamespace;
            var typeMatches = lis.type === evt.type;
            var targetMatches = lis.delegated ? ( triggerer !== evt.cyTarget && is.element( evt.cyTarget ) && lis.selObj.matches( evt.cyTarget ) ) : (true); // we're not going to validate the hierarchy; that's too expensive
            var listenerMatches = nsMatches && typeMatches && targetMatches;

            if( listenerMatches ){ // then trigger it
              var args = [ evt ];
              args = args.concat( extraParams ); // add extra params to args list

              if( lis.data ){ // add on data plugged into binding
                evt.data = lis.data;
              } else { // or clear it in case the event obj is reused
                evt.data = undefined;
              }

              if( lis.unbindSelfOnTrigger || lis.unbindAllBindersOnTrigger ){ // then remove listener
                listeners.splice( k, 1 );
                k--;
              }

              if( lis.unbindAllBindersOnTrigger ){ // then delete the listener for all binders
                var binders = lis.binders;
                for( var l = 0; l < binders.length; l++ ){
                  var binder = binders[ l ];
                  if( !binder || binder === triggerer ){ continue; } // already handled triggerer or we can't handle it

                  var binderListeners = binder._private.listeners;
                  for( var m = 0; m < binderListeners.length; m++ ){
                    var binderListener = binderListeners[ m ];

                    if( binderListener === lis ){ // delete listener from list
                      binderListeners.splice( m, 1 );
                      m--;
                    }
                  }
                }
              }

              // run the callback
              var context = lis.delegated ? evt.cyTarget : triggerer;
              var ret = lis.callback.apply( context, args );

              if( ret === false || evt.isPropagationStopped() ){
                // then don't bubble
                bubbleUp = false;

                if( ret === false ){
                  // returning false is a shorthand for stopping propagation and preventing the def. action
                  evt.stopPropagation();
                  evt.preventDefault();
                }
              }
            } // if listener matches
          } // for each listener

          // bubble up event for elements
          if( bubbleUp ){
            var parent = hasCompounds ? triggerer._private.parent : null;
            var hasParent = parent != null && parent.length !== 0;

            if( hasParent ){ // then bubble up to parent
              parent = parent[0];
              parent.trigger( evt );
            } else { // otherwise, bubble up to the core
              cy.trigger( evt );
            }
          }

        } // for each of all
      } // for each event

      return self; // maintain chaining
    }; // function
  }, // trigger

  animated: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function animatedImpl(){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return false; }

      var ele = all[0];

      if( ele ){
        return ele._private.animation.current.length > 0;
      }
    };
  }, // animated

  clearQueue: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function clearQueueImpl(){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return this; }

      for( var i = 0; i < all.length; i++ ){
        var ele = all[ i ];
        ele._private.animation.queue = [];
      }

      return this;
    };
  }, // clearQueue

  delay: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function delayImpl( time, complete ){
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return this; }

      return this.animate( {
        delay: time,
        duration: time,
        complete: complete
      } );
    };
  }, // delay

  delayAnimation: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function delayAnimationImpl( time, complete ){
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return this; }

      return this.animation( {
        delay: time,
        duration: time,
        complete: complete
      } );
    };
  }, // delay

  animation: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function animationImpl( properties, params ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var cy = this._private.cy || this;
      var isCore = !selfIsArrayLike;
      var isEles = !isCore;

      if( !cy.styleEnabled() ){ return this; }

      var style = cy.style();

      properties = util.extend( {}, properties, params );

      if( properties.duration === undefined ){
        properties.duration = 400;
      }

      switch( properties.duration ){
      case 'slow':
        properties.duration = 600;
        break;
      case 'fast':
        properties.duration = 200;
        break;
      }

      var propertiesEmpty = Object.keys( properties ).length === 0;

      if( propertiesEmpty ){
        return new Animation( all[0], properties ); // nothing to animate
      }

      if( isEles ){
        properties.style = style.getPropsList( properties.style || properties.css );

        properties.css = undefined;
      }

      if( properties.renderedPosition && isEles ){
        var rpos = properties.renderedPosition;
        var pan = cy.pan();
        var zoom = cy.zoom();

        properties.position = {
          x: ( rpos.x - pan.x ) / zoom,
          y: ( rpos.y - pan.y ) / zoom
        };
      }

      // override pan w/ panBy if set
      if( properties.panBy && isCore ){
        var panBy = properties.panBy;
        var cyPan = cy.pan();

        properties.pan = {
          x: cyPan.x + panBy.x,
          y: cyPan.y + panBy.y
        };
      }

      // override pan w/ center if set
      var center = properties.center || properties.centre;
      if( center && isCore ){
        var centerPan = cy.getCenterPan( center.eles, properties.zoom );

        if( centerPan ){
          properties.pan = centerPan;
        }
      }

      // override pan & zoom w/ fit if set
      if( properties.fit && isCore ){
        var fit = properties.fit;
        var fitVp = cy.getFitViewport( fit.eles || fit.boundingBox, fit.padding );

        if( fitVp ){
          properties.pan = fitVp.pan;
          properties.zoom = fitVp.zoom;
        }
      }

      return new Animation( all[0], properties );
    };
  }, // animate

  animate: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function animateImpl( properties, params ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return this; }

      if( params ){
        properties = util.extend( {}, properties, params );
      }

      // manually hook and run the animation
      for( var i = 0; i < all.length; i++ ){
        var ele = all[ i ];
        var queue = ele.animated() && (properties.queue === undefined || properties.queue);

        var ani = ele.animation( properties, (queue ? { queue: true } : undefined) );

        ani.play();
      }

      return this; // chaining
    };
  }, // animate

  stop: function( fnParams ){
    var defaults = {};
    fnParams = util.extend( {}, defaults, fnParams );

    return function stopImpl( clearQueue, jumpToEnd ){
      var self = this;
      var selfIsArrayLike = self.length !== undefined;
      var all = selfIsArrayLike ? self : [ self ]; // put in array if not array-like
      var cy = this._private.cy || this;

      if( !cy.styleEnabled() ){ return this; }

      for( var i = 0; i < all.length; i++ ){
        var ele = all[ i ];
        var _p = ele._private;
        var anis = _p.animation.current;

        for( var j = 0; j < anis.length; j++ ){
          var ani = anis[ j ];
          var ani_p = ani._private;

          if( jumpToEnd ){
            // next iteration of the animation loop, the animation
            // will go straight to the end and be removed
            ani_p.duration = 0;
          }
        }

        // clear the queue of future animations
        if( clearQueue ){
          _p.animation.queue = [];
        }

        if( !jumpToEnd ){
          _p.animation.current = [];
        }
      }

      // we have to notify (the animation loop doesn't do it for us on `stop`)
      cy.notify( {
        eles: this,
        type: 'draw'
      } );

      return this;
    };
  } // stop

}; // define

module.exports = define;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = ( typeof window === 'undefined' ? null : window ); // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
Embeddable Minimum Strictly-Compliant Promises/A+ 1.1.1 Thenable
Copyright (c) 2013-2014 Ralf S. Engelschall (http://engelschall.com)
Licensed under The MIT License (http://opensource.org/licenses/MIT)
*/



/*  promise states [Promises/A+ 2.1]  */
var STATE_PENDING   = 0;                                         /*  [Promises/A+ 2.1.1]  */
var STATE_FULFILLED = 1;                                         /*  [Promises/A+ 2.1.2]  */
var STATE_REJECTED  = 2;                                         /*  [Promises/A+ 2.1.3]  */

/*  promise object constructor  */
var api = function( executor ){
  /*  optionally support non-constructor/plain-function call  */
  if( !(this instanceof api) )
    return new api( executor );

  /*  initialize object  */
  this.id           = 'Thenable/1.0.7';
  this.state        = STATE_PENDING; /*  initial state  */
  this.fulfillValue = undefined;     /*  initial value  */     /*  [Promises/A+ 1.3, 2.1.2.2]  */
  this.rejectReason = undefined;     /*  initial reason */     /*  [Promises/A+ 1.5, 2.1.3.2]  */
  this.onFulfilled  = [];            /*  initial handlers  */
  this.onRejected   = [];            /*  initial handlers  */

  /*  provide optional information-hiding proxy  */
  this.proxy = {
    then: this.then.bind( this )
  };

  /*  support optional executor function  */
  if( typeof executor === 'function' )
    executor.call( this, this.fulfill.bind( this ), this.reject.bind( this ) );
};

/*  promise API methods  */
api.prototype = {
  /*  promise resolving methods  */
  fulfill: function( value ){ return deliver( this, STATE_FULFILLED, 'fulfillValue', value ); },
  reject:  function( value ){ return deliver( this, STATE_REJECTED,  'rejectReason', value ); },

  /*  "The then Method" [Promises/A+ 1.1, 1.2, 2.2]  */
  then: function( onFulfilled, onRejected ){
    var curr = this;
    var next = new api();                                    /*  [Promises/A+ 2.2.7]  */
    curr.onFulfilled.push(
      resolver( onFulfilled, next, 'fulfill' ) );             /*  [Promises/A+ 2.2.2/2.2.6]  */
    curr.onRejected.push(
      resolver( onRejected,  next, 'reject' ) );             /*  [Promises/A+ 2.2.3/2.2.6]  */
    execute( curr );
    return next.proxy;                                       /*  [Promises/A+ 2.2.7, 3.3]  */
  }
};

/*  deliver an action  */
var deliver = function( curr, state, name, value ){
  if( curr.state === STATE_PENDING ){
    curr.state = state;                                      /*  [Promises/A+ 2.1.2.1, 2.1.3.1]  */
    curr[ name ] = value;                                      /*  [Promises/A+ 2.1.2.2, 2.1.3.2]  */
    execute( curr );
  }
  return curr;
};

/*  execute all handlers  */
var execute = function( curr ){
  if( curr.state === STATE_FULFILLED )
    execute_handlers( curr, 'onFulfilled', curr.fulfillValue );
  else if( curr.state === STATE_REJECTED )
    execute_handlers( curr, 'onRejected',  curr.rejectReason );
};

/*  execute particular set of handlers  */
var execute_handlers = function( curr, name, value ){
  /* global setImmediate: true */
  /* global setTimeout: true */

  /*  short-circuit processing  */
  if( curr[ name ].length === 0 )
    return;

  /*  iterate over all handlers, exactly once  */
  var handlers = curr[ name ];
  curr[ name ] = [];                                             /*  [Promises/A+ 2.2.2.3, 2.2.3.3]  */
  var func = function(){
    for( var i = 0; i < handlers.length; i++ )
      handlers[ i ]( value );                                  /*  [Promises/A+ 2.2.5]  */
  };

  /*  execute procedure asynchronously  */                     /*  [Promises/A+ 2.2.4, 3.1]  */
  if( typeof setImmediate === 'function' )
    setImmediate( func );
  else
    setTimeout( func, 0 );
};

/*  generate a resolver function  */
var resolver = function( cb, next, method ){
  return function( value ){
    if( typeof cb !== 'function' )                            /*  [Promises/A+ 2.2.1, 2.2.7.3, 2.2.7.4]  */
      next[ method ].call( next, value );                      /*  [Promises/A+ 2.2.7.3, 2.2.7.4]  */
    else {
      var result;
      try { result = cb( value ); }                          /*  [Promises/A+ 2.2.2.1, 2.2.3.1, 2.2.5, 3.2]  */
      catch( e ){
        next.reject( e );                                  /*  [Promises/A+ 2.2.7.2]  */
        return;
      }
      resolve( next, result );                               /*  [Promises/A+ 2.2.7.1]  */
    }
  };
};

/*  "Promise Resolution Procedure"  */                           /*  [Promises/A+ 2.3]  */
var resolve = function( promise, x ){
  /*  sanity check arguments  */                               /*  [Promises/A+ 2.3.1]  */
  if( promise === x || promise.proxy === x ){
    promise.reject( new TypeError( 'cannot resolve promise with itself' ) );
    return;
  }

  /*  surgically check for a "then" method
    (mainly to just call the "getter" of "then" only once)  */
  var then;
  if( (typeof x === 'object' && x !== null) || typeof x === 'function' ){
    try { then = x.then; }                                   /*  [Promises/A+ 2.3.3.1, 3.5]  */
    catch( e ){
      promise.reject( e );                                   /*  [Promises/A+ 2.3.3.2]  */
      return;
    }
  }

  /*  handle own Thenables    [Promises/A+ 2.3.2]
    and similar "thenables" [Promises/A+ 2.3.3]  */
  if( typeof then === 'function' ){
    var resolved = false;
    try {
      /*  call retrieved "then" method */                  /*  [Promises/A+ 2.3.3.3]  */
      then.call( x,
        /*  resolvePromise  */                           /*  [Promises/A+ 2.3.3.3.1]  */
        function( y ){
          if( resolved ) return; resolved = true;       /*  [Promises/A+ 2.3.3.3.3]  */
          if( y === x )                                 /*  [Promises/A+ 3.6]  */
            promise.reject( new TypeError( 'circular thenable chain' ) );
          else
            resolve( promise, y );
        },

        /*  rejectPromise  */                            /*  [Promises/A+ 2.3.3.3.2]  */
        function( r ){
          if( resolved ) return; resolved = true;       /*  [Promises/A+ 2.3.3.3.3]  */
          promise.reject( r );
        }
      );
    }
    catch( e ){
      if( !resolved )                                       /*  [Promises/A+ 2.3.3.3.3]  */
        promise.reject( e );                               /*  [Promises/A+ 2.3.3.3.4]  */
    }
    return;
  }

  /*  handle other values  */
  promise.fulfill( x );                                          /*  [Promises/A+ 2.3.4, 2.3.3.4]  */
};

// so we always have Promise.all()
api.all = function( ps ){
  return new api(function( resolveAll, rejectAll ){
    var vals = new Array( ps.length );
    var doneCount = 0;

    var fulfill = function( i, val ){
      vals[ i ] = val;
      doneCount++;

      if( doneCount === ps.length ){
        resolveAll( vals );
      }
    };

    for( var i = 0; i < ps.length; i++ ){
      (function( i ){
        var p = ps[i];
        var isPromise = p != null && p.then != null;

        if( isPromise ){
          p.then( function( val ){
            fulfill( i, val );
          }, function( err ){
            rejectAll( err );
          } );
        } else {
          var val = p;
          fulfill( i, val );
        }
      })( i );
    }

  } );
};

api.resolve = function( val ){
  return new api(function( resolve, reject ){ resolve( val ); });
};

api.reject = function( val ){
  return new api(function( resolve, reject ){ reject( val ); });
};

module.exports = typeof Promise !== 'undefined' ? Promise : api; // eslint-disable-line no-undef

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var Element = __webpack_require__( 18 );

// factory for generating edge ids when no id is specified for a new element
var idFactory = {
  generate: function( cy, element, tryThisId ){
    var id = tryThisId != null ? tryThisId : util.uuid();

    while( cy.hasElementWithId( id ) ){
      id = util.uuid();
    }

    return id;
  }
};

// represents a set of nodes, edges, or both together
var Collection = function( cy, elements, options ){
  if( cy === undefined || !is.core( cy ) ){
    util.error( 'A collection must have a reference to the core' );
    return;
  }

  var ids = {};
  var indexes = {};
  var createdElements = false;

  if( !elements ){
    elements = [];
  } else if( elements.length > 0 && is.plainObject( elements[0] ) && !is.element( elements[0] ) ){
    createdElements = true;

    // make elements from json and restore all at once later
    var eles = [];
    var elesIds = {};

    for( var i = 0, l = elements.length; i < l; i++ ){
      var json = elements[ i ];

      if( json.data == null ){
        json.data = {};
      }

      var data = json.data;

      // make sure newly created elements have valid ids
      if( data.id == null ){
        data.id = idFactory.generate( cy, json );
      } else if( cy.hasElementWithId( data.id ) || elesIds[ data.id ] ){
        continue; // can't create element if prior id already exists
      }

      var ele = new Element( cy, json, false );
      eles.push( ele );
      elesIds[ data.id ] = true;
    }

    elements = eles;
  }

  this.length = 0;

  for( var i = 0, l = elements.length; i < l; i++ ){
    var element = elements[ i ];
    if( !element ){  continue; }

    var id = element._private.data.id;

    if( !options || (options.unique && !ids[ id ] ) ){
      ids[ id ] = element;
      indexes[ id ] = this.length;

      this[ this.length ] = element;
      this.length++;
    }
  }

  this._private = {
    cy: cy,
    ids: ids,
    indexes: indexes
  };

  // restore the elements if we created them from json
  if( createdElements ){
    this.restore();
  }
};

// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////

// keep the prototypes in sync (an element has the same functions as a collection)
// and use elefn and elesfn as shorthands to the prototypes
var elesfn = Element.prototype = Collection.prototype;

elesfn.instanceString = function(){
  return 'collection';
};

elesfn.spawn = function( cy, eles, opts ){
  if( !is.core( cy ) ){ // cy is optional
    opts = eles;
    eles = cy;
    cy = this.cy();
  }

  return new Collection( cy, eles, opts );
};

elesfn.spawnSelf = function(){
  return this.spawn( this );
};

elesfn.cy = function(){
  return this._private.cy;
};

elesfn.element = function(){
  return this[0];
};

elesfn.collection = function(){
  if( is.collection( this ) ){
    return this;
  } else { // an element
    return new Collection( this._private.cy, [ this ] );
  }
};

elesfn.unique = function(){
  return new Collection( this._private.cy, this, { unique: true } );
};

elesfn.hasElementWithId = function( id ){
  return !!this._private.ids[ id ];
};

elesfn.getElementById = function( id ){
  var cy = this._private.cy;
  var ele = this._private.ids[ id ];

  return ele ? ele : new Collection( cy ); // get ele or empty collection
};

elesfn.poolIndex = function(){
  var cy = this._private.cy;
  var eles = cy._private.elements;
  var id = this._private.data.id;

  return eles._private.indexes[ id ];
};

elesfn.json = function( obj ){
  var ele = this.element();
  var cy = this.cy();

  if( ele == null && obj ){ return this; } // can't set to no eles

  if( ele == null ){ return undefined; } // can't get from no eles

  var p = ele._private;

  if( is.plainObject( obj ) ){ // set

    cy.startBatch();

    if( obj.data ){
      ele.data( obj.data );
    }

    if( obj.position ){
      ele.position( obj.position );
    }

    // ignore group -- immutable

    var checkSwitch = function( k, trueFnName, falseFnName ){
      var obj_k = obj[ k ];

      if( obj_k != null && obj_k !== p[ k ] ){
        if( obj_k ){
          ele[ trueFnName ]();
        } else {
          ele[ falseFnName ]();
        }
      }
    };

    checkSwitch( 'removed', 'remove', 'restore' );

    checkSwitch( 'selected', 'select', 'unselect' );

    checkSwitch( 'selectable', 'selectify', 'unselectify' );

    checkSwitch( 'locked', 'lock', 'unlock' );

    checkSwitch( 'grabbable', 'grabify', 'ungrabify' );

    if( obj.classes != null ){
      ele.classes( obj.classes );
    }

    cy.endBatch();

    return this;

  } else if( obj === undefined ){ // get

    var json = {
      data: util.copy( p.data ),
      position: util.copy( p.position ),
      group: p.group,
      removed: p.removed,
      selected: p.selected,
      selectable: p.selectable,
      locked: p.locked,
      grabbable: p.grabbable,
      classes: null
    };

    json.classes = Object.keys( p.classes ).filter(function( cls ){
      return p.classes[cls];
    }).join(' ');

    return json;
  }
};

elesfn.jsons = function(){
  var jsons = [];

  for( var i = 0; i < this.length; i++ ){
    var ele = this[ i ];
    var json = ele.json();

    jsons.push( json );
  }

  return jsons;
};

elesfn.clone = function(){
  var cy = this.cy();
  var elesArr = [];

  for( var i = 0; i < this.length; i++ ){
    var ele = this[ i ];
    var json = ele.json();
    var clone = new Element( cy, json, false ); // NB no restore

    elesArr.push( clone );
  }

  return new Collection( cy, elesArr );
};
elesfn.copy = elesfn.clone;

elesfn.restore = function( notifyRenderer ){
  var self = this;
  var cy = self.cy();
  var cy_p = cy._private;

  if( notifyRenderer === undefined ){
    notifyRenderer = true;
  }

  // create arrays of nodes and edges, since we need to
  // restore the nodes first
  var nodes = [];
  var edges = [];
  var elements;
  for( var i = 0, l = self.length; i < l; i++ ){
    var ele = self[ i ];

    if( !ele.removed() ){
      // don't need to handle this ele
      continue;
    }

    // keep nodes first in the array and edges after
    if( ele.isNode() ){ // put to front of array if node
      nodes.push( ele );
    } else { // put to end of array if edge
      edges.push( ele );
    }
  }

  elements = nodes.concat( edges );

  var i;
  var removeFromElements = function(){
    elements.splice( i, 1 );
    i--;
  };

  // now, restore each element
  for( i = 0; i < elements.length; i++ ){
    var ele = elements[ i ];

    var _private = ele._private;
    var data = _private.data;

    // the traversal cache should start fresh when ele is added
    _private.traversalCache = null;

    // set id and validate
    if( data.id === undefined ){
      data.id = idFactory.generate( cy, ele );

    } else if( is.number( data.id ) ){
      data.id = '' + data.id; // now it's a string

    } else if( is.emptyString( data.id ) || !is.string( data.id ) ){
      util.error( 'Can not create element with invalid string ID `' + data.id + '`' );

      // can't create element if it has empty string as id or non-string id
      removeFromElements();
      continue;
    } else if( cy.hasElementWithId( data.id ) ){
      util.error( 'Can not create second element with ID `' + data.id + '`' );

      // can't create element if one already has that id
      removeFromElements();
      continue;
    }

    var id = data.id; // id is finalised, now let's keep a ref

    if( ele.isNode() ){ // extra checks for nodes
      var node = ele;
      var pos = _private.position;

      // make sure the nodes have a defined position

      if( pos.x == null ){
        pos.x = 0;
      }

      if( pos.y == null ){
        pos.y = 0;
      }
    }

    if( ele.isEdge() ){ // extra checks for edges

      var edge = ele;
      var fields = [ 'source', 'target' ];
      var fieldsLength = fields.length;
      var badSourceOrTarget = false;
      for( var j = 0; j < fieldsLength; j++ ){

        var field = fields[ j ];
        var val = data[ field ];

        if( is.number( val ) ){
          val = data[ field ] = '' + data[ field ]; // now string
        }

        if( val == null || val === '' ){
          // can't create if source or target is not defined properly
          util.error( 'Can not create edge `' + id + '` with unspecified ' + field );
          badSourceOrTarget = true;
        } else if( !cy.hasElementWithId( val ) ){
          // can't create edge if one of its nodes doesn't exist
          util.error( 'Can not create edge `' + id + '` with nonexistant ' + field + ' `' + val + '`' );
          badSourceOrTarget = true;
        }
      }

      if( badSourceOrTarget ){ removeFromElements(); continue; } // can't create this

      var src = cy.getElementById( data.source );
      var tgt = cy.getElementById( data.target );

      src._private.edges.push( edge );
      tgt._private.edges.push( edge );

      edge._private.source = src;
      edge._private.target = tgt;
    } // if is edge

    // create mock ids / indexes maps for element so it can be used like collections
    _private.ids = {};
    _private.ids[ id ] = ele;
    _private.indexes = {};
    _private.indexes[ id ] = ele;

    _private.removed = false;
    cy.addToPool( ele );
  } // for each element

  // do compound node sanity checks
  for( var i = 0; i < nodes.length; i++ ){ // each node
    var node = nodes[ i ];
    var data = node._private.data;

    if( is.number( data.parent ) ){ // then automake string
      data.parent = '' + data.parent;
    }

    var parentId = data.parent;

    var specifiedParent = parentId != null;

    if( specifiedParent ){
      var parent = cy.getElementById( parentId );

      if( parent.empty() ){
        // non-existant parent; just remove it
        data.parent = undefined;
      } else {
        var selfAsParent = false;
        var ancestor = parent;
        while( !ancestor.empty() ){
          if( node.same( ancestor ) ){
            // mark self as parent and remove from data
            selfAsParent = true;
            data.parent = undefined; // remove parent reference

            // exit or we loop forever
            break;
          }

          ancestor = ancestor.parent();
        }

        if( !selfAsParent ){
          // connect with children
          parent[0]._private.children.push( node );
          node._private.parent = parent[0];

          // let the core know we have a compound graph
          cy_p.hasCompoundNodes = true;
        }
      } // else
    } // if specified parent
  } // for each node

  if( elements.length > 0 ){
    var restored = new Collection( cy, elements );

    for( var i = 0; i < restored.length; i++ ){
      var ele = restored[i];

      if( ele.isNode() ){ continue; }

      // adding an edge invalidates the traversal caches for the parallel edges
      var pedges = ele.parallelEdges();
      for( var j = 0; j < pedges.length; j++ ){
        pedges[j]._private.traversalCache = null;
      }

      // adding an edge invalidates the traversal cache for the connected nodes
      ele.source()[0]._private.traversalCache = null;
      ele.target()[0]._private.traversalCache = null;
    }

    var toUpdateStyle;

    if( cy_p.hasCompoundNodes ){
      toUpdateStyle = restored.add( restored.connectedNodes() ).add( restored.parent() );
    } else {
      toUpdateStyle = restored;
    }

    toUpdateStyle.updateStyle( notifyRenderer );

    if( notifyRenderer ){
      restored.rtrigger( 'add' );
    } else {
      restored.trigger( 'add' );
    }
  }

  return self; // chainability
};

elesfn.removed = function(){
  var ele = this[0];
  return ele && ele._private.removed;
};

elesfn.inside = function(){
  var ele = this[0];
  return ele && !ele._private.removed;
};

elesfn.remove = function( notifyRenderer ){
  var self = this;
  var removed = [];
  var elesToRemove = [];
  var elesToRemoveIds = {};
  var cy = self._private.cy;

  if( notifyRenderer === undefined ){
    notifyRenderer = true;
  }

  // add connected edges
  function addConnectedEdges( node ){
    var edges = node._private.edges;
    for( var i = 0; i < edges.length; i++ ){
      add( edges[ i ] );
    }
  }


  // add descendant nodes
  function addChildren( node ){
    var children = node._private.children;

    for( var i = 0; i < children.length; i++ ){
      add( children[ i ] );
    }
  }

  function add( ele ){
    var alreadyAdded =  elesToRemoveIds[ ele.id() ];
    if( alreadyAdded ){
      return;
    } else {
      elesToRemoveIds[ ele.id() ] = true;
    }

    if( ele.isNode() ){
      elesToRemove.push( ele ); // nodes are removed last

      addConnectedEdges( ele );
      addChildren( ele );
    } else {
      elesToRemove.unshift( ele ); // edges are removed first
    }
  }

  // make the list of elements to remove
  // (may be removing more than specified due to connected edges etc)

  for( var i = 0, l = self.length; i < l; i++ ){
    var ele = self[ i ];

    add( ele );
  }

  function removeEdgeRef( node, edge ){
    var connectedEdges = node._private.edges;

    util.removeFromArray( connectedEdges, edge );

    // removing an edges invalidates the traversal cache for its nodes
    node._private.traversalCache = null;
  }

  function removeParallelRefs( edge ){
    // removing an edge invalidates the traversal caches for the parallel edges
    var pedges = edge.parallelEdges();
    for( var j = 0; j < pedges.length; j++ ){
      pedges[j]._private.traversalCache = null;
    }
  }

  var alteredParents = [];
  alteredParents.ids = {};

  function removeChildRef( parent, ele ){
    ele = ele[0];
    parent = parent[0];

    var children = parent._private.children;
    var pid = parent.id();

    util.removeFromArray( children, ele );

    if( !alteredParents.ids[ pid ] ){
      alteredParents.ids[ pid ] = true;
      alteredParents.push( parent );
    }
  }

  // remove from core pool
  cy.removeFromPool( elesToRemove );

  for( var i = 0; i < elesToRemove.length; i++ ){
    var ele = elesToRemove[ i ];

    // mark as removed
    ele._private.removed = true;

    // add to list of removed elements
    removed.push( ele );

    if( ele.isEdge() ){ // remove references to this edge in its connected nodes
      var src = ele.source()[0];
      var tgt = ele.target()[0];

      removeEdgeRef( src, ele );
      removeEdgeRef( tgt, ele );
      removeParallelRefs( ele );

    } else { // remove reference to parent
      var parent = ele.parent();

      if( parent.length !== 0 ){
        removeChildRef( parent, ele );
      }
    }
  }

  // check to see if we have a compound graph or not
  var elesStillInside = cy._private.elements;
  cy._private.hasCompoundNodes = false;
  for( var i = 0; i < elesStillInside.length; i++ ){
    var ele = elesStillInside[ i ];

    if( ele.isParent() ){
      cy._private.hasCompoundNodes = true;
      break;
    }
  }

  var removedElements = new Collection( this.cy(), removed );
  if( removedElements.size() > 0 ){
    // must manually notify since trigger won't do this automatically once removed

    if( notifyRenderer ){
      this.cy().notify( {
        type: 'remove',
        eles: removedElements
      } );
    }

    removedElements.trigger( 'remove' );
  }

  // the parents who were modified by the removal need their style updated
  for( var i = 0; i < alteredParents.length; i++ ){
    var ele = alteredParents[ i ];

    if( !ele.removed() ){
      ele.updateStyle();
    }
  }

  return new Collection( cy, removed );
};

elesfn.move = function( struct ){
  var cy = this._private.cy;

  if( struct.source !== undefined || struct.target !== undefined ){
    var srcId = struct.source;
    var tgtId = struct.target;
    var srcExists = cy.hasElementWithId( srcId );
    var tgtExists = cy.hasElementWithId( tgtId );

    if( srcExists || tgtExists ){
      var jsons = this.jsons();

      this.remove();

      for( var i = 0; i < jsons.length; i++ ){
        var json = jsons[i];
        var ele = this[i];

        if( json.group === 'edges' ){
          if( srcExists ){ json.data.source = srcId; }

          if( tgtExists ){ json.data.target = tgtId; }

          json.scratch = ele._private.scratch;
        }
      }

      return cy.add( jsons );
    }

  } else if( struct.parent !== undefined ){ // move node to new parent
    var parentId = struct.parent;
    var parentExists = parentId === null || cy.hasElementWithId( parentId );

    if( parentExists ){
      var jsons = this.jsons();
      var descs = this.descendants();
      var descsEtcJsons = descs.union( descs.union( this ).connectedEdges() ).jsons();

      this.remove(); // NB: also removes descendants and their connected edges

      for( var i = 0; i < jsons.length; i++ ){
        var json = jsons[i];
        var ele = this[i];

        if( json.group === 'nodes' ){
          json.data.parent = parentId === null ? undefined : parentId;

          json.scratch = ele._private.scratch;
        }
      }

      return cy.add( jsons.concat( descsEtcJsons ) );
    }
  }

  return this; // if nothing done
};

[
  __webpack_require__( 45 ),
  __webpack_require__( 49 ),
  __webpack_require__( 50 ),
  __webpack_require__( 51 ),
  __webpack_require__( 52 ),
  __webpack_require__( 53 ),
  __webpack_require__( 54 ),
  __webpack_require__( 55 ),
  __webpack_require__( 56 ),
  __webpack_require__( 57 ),
  __webpack_require__( 58 ),
  __webpack_require__( 6 ),
  __webpack_require__( 59 ),
  __webpack_require__( 60 ),
  __webpack_require__( 61 ),
  __webpack_require__( 62 ),
  __webpack_require__( 63 )
].forEach( function( props ){
  util.extend( elesfn, props );
} );

module.exports = Collection;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var powergraph = __webpack_require__(28);
var linklengths_1 = __webpack_require__(16);
var descent_1 = __webpack_require__(15);
var rectangle_1 = __webpack_require__(8);
var shortestpaths_1 = __webpack_require__(12);
var geom_1 = __webpack_require__(25);
var handledisconnected_1 = __webpack_require__(27);
var EventType;
(function (EventType) {
    EventType[EventType["start"] = 0] = "start";
    EventType[EventType["tick"] = 1] = "tick";
    EventType[EventType["end"] = 2] = "end";
})(EventType = exports.EventType || (exports.EventType = {}));
;
function isGroup(g) {
    return typeof g.leaves !== 'undefined' || typeof g.groups !== 'undefined';
}
var Layout = (function () {
    function Layout() {
        var _this = this;
        this._canvasSize = [1, 1];
        this._linkDistance = 20;
        this._defaultNodeSize = 10;
        this._linkLengthCalculator = null;
        this._linkType = null;
        this._avoidOverlaps = false;
        this._handleDisconnected = true;
        this._running = false;
        this._nodes = [];
        this._groups = [];
        this._rootGroup = null;
        this._links = [];
        this._constraints = [];
        this._distanceMatrix = null;
        this._descent = null;
        this._directedLinkConstraints = null;
        this._threshold = 0.01;
        this._visibilityGraph = null;
        this._groupCompactness = 1e-6;
        this.event = null;
        this.linkAccessor = {
            getSourceIndex: Layout.getSourceIndex,
            getTargetIndex: Layout.getTargetIndex,
            setLength: Layout.setLinkLength,
            getType: function (l) { return typeof _this._linkType === "function" ? _this._linkType(l) : 0; }
        };
    }
    Layout.prototype.on = function (e, listener) {
        if (!this.event)
            this.event = {};
        if (typeof e === 'string') {
            this.event[EventType[e]] = listener;
        }
        else {
            this.event[e] = listener;
        }
        return this;
    };
    Layout.prototype.trigger = function (e) {
        if (this.event && typeof this.event[e.type] !== 'undefined') {
            this.event[e.type](e);
        }
    };
    Layout.prototype.kick = function () {
        while (!this.tick())
            ;
    };
    Layout.prototype.tick = function () {
        if (this._alpha < this._threshold) {
            this._running = false;
            this.trigger({ type: EventType.end, alpha: this._alpha = 0, stress: this._lastStress });
            return true;
        }
        var n = this._nodes.length, m = this._links.length;
        var o, i;
        this._descent.locks.clear();
        for (i = 0; i < n; ++i) {
            o = this._nodes[i];
            if (o.fixed) {
                if (typeof o.px === 'undefined' || typeof o.py === 'undefined') {
                    o.px = o.x;
                    o.py = o.y;
                }
                var p = [o.px, o.py];
                this._descent.locks.add(i, p);
            }
        }
        var s1 = this._descent.rungeKutta();
        if (s1 === 0) {
            this._alpha = 0;
        }
        else if (typeof this._lastStress !== 'undefined') {
            this._alpha = s1;
        }
        this._lastStress = s1;
        this.updateNodePositions();
        this.trigger({ type: EventType.tick, alpha: this._alpha, stress: this._lastStress });
        return false;
    };
    Layout.prototype.updateNodePositions = function () {
        var x = this._descent.x[0], y = this._descent.x[1];
        var o, i = this._nodes.length;
        while (i--) {
            o = this._nodes[i];
            o.x = x[i];
            o.y = y[i];
        }
    };
    Layout.prototype.nodes = function (v) {
        if (!v) {
            if (this._nodes.length === 0 && this._links.length > 0) {
                var n = 0;
                this._links.forEach(function (l) {
                    n = Math.max(n, l.source, l.target);
                });
                this._nodes = new Array(++n);
                for (var i = 0; i < n; ++i) {
                    this._nodes[i] = {};
                }
            }
            return this._nodes;
        }
        this._nodes = v;
        return this;
    };
    Layout.prototype.groups = function (x) {
        var _this = this;
        if (!x)
            return this._groups;
        this._groups = x;
        this._rootGroup = {};
        this._groups.forEach(function (g) {
            if (typeof g.padding === "undefined")
                g.padding = 1;
            if (typeof g.leaves !== "undefined") {
                g.leaves.forEach(function (v, i) {
                    if (typeof v === 'number')
                        (g.leaves[i] = _this._nodes[v]).parent = g;
                });
            }
            if (typeof g.groups !== "undefined") {
                g.groups.forEach(function (gi, i) {
                    if (typeof gi === 'number')
                        (g.groups[i] = _this._groups[gi]).parent = g;
                });
            }
        });
        this._rootGroup.leaves = this._nodes.filter(function (v) { return typeof v.parent === 'undefined'; });
        this._rootGroup.groups = this._groups.filter(function (g) { return typeof g.parent === 'undefined'; });
        return this;
    };
    Layout.prototype.powerGraphGroups = function (f) {
        var g = powergraph.getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
        this.groups(g.groups);
        f(g);
        return this;
    };
    Layout.prototype.avoidOverlaps = function (v) {
        if (!arguments.length)
            return this._avoidOverlaps;
        this._avoidOverlaps = v;
        return this;
    };
    Layout.prototype.handleDisconnected = function (v) {
        if (!arguments.length)
            return this._handleDisconnected;
        this._handleDisconnected = v;
        return this;
    };
    Layout.prototype.flowLayout = function (axis, minSeparation) {
        if (!arguments.length)
            axis = 'y';
        this._directedLinkConstraints = {
            axis: axis,
            getMinSeparation: typeof minSeparation === 'number' ? function () { return minSeparation; } : minSeparation
        };
        return this;
    };
    Layout.prototype.links = function (x) {
        if (!arguments.length)
            return this._links;
        this._links = x;
        return this;
    };
    Layout.prototype.constraints = function (c) {
        if (!arguments.length)
            return this._constraints;
        this._constraints = c;
        return this;
    };
    Layout.prototype.distanceMatrix = function (d) {
        if (!arguments.length)
            return this._distanceMatrix;
        this._distanceMatrix = d;
        return this;
    };
    Layout.prototype.size = function (x) {
        if (!x)
            return this._canvasSize;
        this._canvasSize = x;
        return this;
    };
    Layout.prototype.defaultNodeSize = function (x) {
        if (!x)
            return this._defaultNodeSize;
        this._defaultNodeSize = x;
        return this;
    };
    Layout.prototype.groupCompactness = function (x) {
        if (!x)
            return this._groupCompactness;
        this._groupCompactness = x;
        return this;
    };
    Layout.prototype.linkDistance = function (x) {
        if (!x) {
            return this._linkDistance;
        }
        this._linkDistance = typeof x === "function" ? x : +x;
        this._linkLengthCalculator = null;
        return this;
    };
    Layout.prototype.linkType = function (f) {
        this._linkType = f;
        return this;
    };
    Layout.prototype.convergenceThreshold = function (x) {
        if (!x)
            return this._threshold;
        this._threshold = typeof x === "function" ? x : +x;
        return this;
    };
    Layout.prototype.alpha = function (x) {
        if (!arguments.length)
            return this._alpha;
        else {
            x = +x;
            if (this._alpha) {
                if (x > 0)
                    this._alpha = x;
                else
                    this._alpha = 0;
            }
            else if (x > 0) {
                if (!this._running) {
                    this._running = true;
                    this.trigger({ type: EventType.start, alpha: this._alpha = x });
                    this.kick();
                }
            }
            return this;
        }
    };
    Layout.prototype.getLinkLength = function (link) {
        return typeof this._linkDistance === "function" ? +(this._linkDistance(link)) : this._linkDistance;
    };
    Layout.setLinkLength = function (link, length) {
        link.length = length;
    };
    Layout.prototype.getLinkType = function (link) {
        return typeof this._linkType === "function" ? this._linkType(link) : 0;
    };
    Layout.prototype.symmetricDiffLinkLengths = function (idealLength, w) {
        var _this = this;
        if (w === void 0) { w = 1; }
        this.linkDistance(function (l) { return idealLength * l.length; });
        this._linkLengthCalculator = function () { return linklengths_1.symmetricDiffLinkLengths(_this._links, _this.linkAccessor, w); };
        return this;
    };
    Layout.prototype.jaccardLinkLengths = function (idealLength, w) {
        var _this = this;
        if (w === void 0) { w = 1; }
        this.linkDistance(function (l) { return idealLength * l.length; });
        this._linkLengthCalculator = function () { return linklengths_1.jaccardLinkLengths(_this._links, _this.linkAccessor, w); };
        return this;
    };
    Layout.prototype.start = function (initialUnconstrainedIterations, initialUserConstraintIterations, initialAllConstraintsIterations, gridSnapIterations, keepRunning) {
        var _this = this;
        if (initialUnconstrainedIterations === void 0) { initialUnconstrainedIterations = 0; }
        if (initialUserConstraintIterations === void 0) { initialUserConstraintIterations = 0; }
        if (initialAllConstraintsIterations === void 0) { initialAllConstraintsIterations = 0; }
        if (gridSnapIterations === void 0) { gridSnapIterations = 0; }
        if (keepRunning === void 0) { keepRunning = true; }
        var i, j, n = this.nodes().length, N = n + 2 * this._groups.length, m = this._links.length, w = this._canvasSize[0], h = this._canvasSize[1];
        var x = new Array(N), y = new Array(N);
        var G = null;
        var ao = this._avoidOverlaps;
        this._nodes.forEach(function (v, i) {
            v.index = i;
            if (typeof v.x === 'undefined') {
                v.x = w / 2, v.y = h / 2;
            }
            x[i] = v.x, y[i] = v.y;
        });
        if (this._linkLengthCalculator)
            this._linkLengthCalculator();
        var distances;
        if (this._distanceMatrix) {
            distances = this._distanceMatrix;
        }
        else {
            distances = (new shortestpaths_1.Calculator(N, this._links, Layout.getSourceIndex, Layout.getTargetIndex, function (l) { return _this.getLinkLength(l); })).DistanceMatrix();
            G = descent_1.Descent.createSquareMatrix(N, function () { return 2; });
            this._links.forEach(function (l) {
                if (typeof l.source == "number")
                    l.source = _this._nodes[l.source];
                if (typeof l.target == "number")
                    l.target = _this._nodes[l.target];
            });
            this._links.forEach(function (e) {
                var u = Layout.getSourceIndex(e), v = Layout.getTargetIndex(e);
                G[u][v] = G[v][u] = e.weight || 1;
            });
        }
        var D = descent_1.Descent.createSquareMatrix(N, function (i, j) {
            return distances[i][j];
        });
        if (this._rootGroup && typeof this._rootGroup.groups !== 'undefined') {
            var i = n;
            var addAttraction = function (i, j, strength, idealDistance) {
                G[i][j] = G[j][i] = strength;
                D[i][j] = D[j][i] = idealDistance;
            };
            this._groups.forEach(function (g) {
                addAttraction(i, i + 1, _this._groupCompactness, 0.1);
                x[i] = 0, y[i++] = 0;
                x[i] = 0, y[i++] = 0;
            });
        }
        else
            this._rootGroup = { leaves: this._nodes, groups: [] };
        var curConstraints = this._constraints || [];
        if (this._directedLinkConstraints) {
            this.linkAccessor.getMinSeparation = this._directedLinkConstraints.getMinSeparation;
            curConstraints = curConstraints.concat(linklengths_1.generateDirectedEdgeConstraints(n, this._links, this._directedLinkConstraints.axis, (this.linkAccessor)));
        }
        this.avoidOverlaps(false);
        this._descent = new descent_1.Descent([x, y], D);
        this._descent.locks.clear();
        for (var i = 0; i < n; ++i) {
            var o = this._nodes[i];
            if (o.fixed) {
                o.px = o.x;
                o.py = o.y;
                var p = [o.x, o.y];
                this._descent.locks.add(i, p);
            }
        }
        this._descent.threshold = this._threshold;
        this.initialLayout(initialUnconstrainedIterations, x, y);
        if (curConstraints.length > 0)
            this._descent.project = new rectangle_1.Projection(this._nodes, this._groups, this._rootGroup, curConstraints).projectFunctions();
        this._descent.run(initialUserConstraintIterations);
        this.separateOverlappingComponents(w, h);
        this.avoidOverlaps(ao);
        if (ao) {
            this._nodes.forEach(function (v, i) { v.x = x[i], v.y = y[i]; });
            this._descent.project = new rectangle_1.Projection(this._nodes, this._groups, this._rootGroup, curConstraints, true).projectFunctions();
            this._nodes.forEach(function (v, i) { x[i] = v.x, y[i] = v.y; });
        }
        this._descent.G = G;
        this._descent.run(initialAllConstraintsIterations);
        if (gridSnapIterations) {
            this._descent.snapStrength = 1000;
            this._descent.snapGridSize = this._nodes[0].width;
            this._descent.numGridSnapNodes = n;
            this._descent.scaleSnapByMaxH = n != N;
            var G0 = descent_1.Descent.createSquareMatrix(N, function (i, j) {
                if (i >= n || j >= n)
                    return G[i][j];
                return 0;
            });
            this._descent.G = G0;
            this._descent.run(gridSnapIterations);
        }
        this.updateNodePositions();
        this.separateOverlappingComponents(w, h);
        return keepRunning ? this.resume() : this;
    };
    Layout.prototype.initialLayout = function (iterations, x, y) {
        if (this._groups.length > 0 && iterations > 0) {
            var n = this._nodes.length;
            var edges = this._links.map(function (e) { return ({ source: e.source.index, target: e.target.index }); });
            var vs = this._nodes.map(function (v) { return ({ index: v.index }); });
            this._groups.forEach(function (g, i) {
                vs.push({ index: g.index = n + i });
            });
            this._groups.forEach(function (g, i) {
                if (typeof g.leaves !== 'undefined')
                    g.leaves.forEach(function (v) { return edges.push({ source: g.index, target: v.index }); });
                if (typeof g.groups !== 'undefined')
                    g.groups.forEach(function (gg) { return edges.push({ source: g.index, target: gg.index }); });
            });
            new Layout()
                .size(this.size())
                .nodes(vs)
                .links(edges)
                .avoidOverlaps(false)
                .linkDistance(this.linkDistance())
                .symmetricDiffLinkLengths(5)
                .convergenceThreshold(1e-4)
                .start(iterations, 0, 0, 0, false);
            this._nodes.forEach(function (v) {
                x[v.index] = vs[v.index].x;
                y[v.index] = vs[v.index].y;
            });
        }
        else {
            this._descent.run(iterations);
        }
    };
    Layout.prototype.separateOverlappingComponents = function (width, height) {
        var _this = this;
        if (!this._distanceMatrix && this._handleDisconnected) {
            var x_1 = this._descent.x[0], y_1 = this._descent.x[1];
            this._nodes.forEach(function (v, i) { v.x = x_1[i], v.y = y_1[i]; });
            var graphs = handledisconnected_1.separateGraphs(this._nodes, this._links);
            handledisconnected_1.applyPacking(graphs, width, height, this._defaultNodeSize);
            this._nodes.forEach(function (v, i) {
                _this._descent.x[0][i] = v.x, _this._descent.x[1][i] = v.y;
                if (v.bounds) {
                    v.bounds.setXCentre(v.x);
                    v.bounds.setYCentre(v.y);
                }
            });
        }
    };
    Layout.prototype.resume = function () {
        return this.alpha(0.1);
    };
    Layout.prototype.stop = function () {
        return this.alpha(0);
    };
    Layout.prototype.prepareEdgeRouting = function (nodeMargin) {
        if (nodeMargin === void 0) { nodeMargin = 0; }
        this._visibilityGraph = new geom_1.TangentVisibilityGraph(this._nodes.map(function (v) {
            return v.bounds.inflate(-nodeMargin).vertices();
        }));
    };
    Layout.prototype.routeEdge = function (edge, draw) {
        var lineData = [];
        var vg2 = new geom_1.TangentVisibilityGraph(this._visibilityGraph.P, { V: this._visibilityGraph.V, E: this._visibilityGraph.E }), port1 = { x: edge.source.x, y: edge.source.y }, port2 = { x: edge.target.x, y: edge.target.y }, start = vg2.addPoint(port1, edge.source.index), end = vg2.addPoint(port2, edge.target.index);
        vg2.addEdgeIfVisible(port1, port2, edge.source.index, edge.target.index);
        if (typeof draw !== 'undefined') {
            draw(vg2);
        }
        var sourceInd = function (e) { return e.source.id; }, targetInd = function (e) { return e.target.id; }, length = function (e) { return e.length(); }, spCalc = new shortestpaths_1.Calculator(vg2.V.length, vg2.E, sourceInd, targetInd, length), shortestPath = spCalc.PathFromNodeToNode(start.id, end.id);
        if (shortestPath.length === 1 || shortestPath.length === vg2.V.length) {
            var route = rectangle_1.makeEdgeBetween(edge.source.innerBounds, edge.target.innerBounds, 5);
            lineData = [route.sourceIntersection, route.arrowStart];
        }
        else {
            var n = shortestPath.length - 2, p = vg2.V[shortestPath[n]].p, q = vg2.V[shortestPath[0]].p, lineData = [edge.source.innerBounds.rayIntersection(p.x, p.y)];
            for (var i = n; i >= 0; --i)
                lineData.push(vg2.V[shortestPath[i]].p);
            lineData.push(rectangle_1.makeEdgeTo(q, edge.target.innerBounds, 5));
        }
        return lineData;
    };
    Layout.getSourceIndex = function (e) {
        return typeof e.source === 'number' ? e.source : e.source.index;
    };
    Layout.getTargetIndex = function (e) {
        return typeof e.target === 'number' ? e.target : e.target.index;
    };
    Layout.linkId = function (e) {
        return Layout.getSourceIndex(e) + "-" + Layout.getTargetIndex(e);
    };
    Layout.dragStart = function (d) {
        if (isGroup(d)) {
            Layout.storeOffset(d, Layout.dragOrigin(d));
        }
        else {
            Layout.stopNode(d);
            d.fixed |= 2;
        }
    };
    Layout.stopNode = function (v) {
        v.px = v.x;
        v.py = v.y;
    };
    Layout.storeOffset = function (d, origin) {
        if (typeof d.leaves !== 'undefined') {
            d.leaves.forEach(function (v) {
                v.fixed |= 2;
                Layout.stopNode(v);
                v._dragGroupOffsetX = v.x - origin.x;
                v._dragGroupOffsetY = v.y - origin.y;
            });
        }
        if (typeof d.groups !== 'undefined') {
            d.groups.forEach(function (g) { return Layout.storeOffset(g, origin); });
        }
    };
    Layout.dragOrigin = function (d) {
        if (isGroup(d)) {
            return {
                x: d.bounds.cx(),
                y: d.bounds.cy()
            };
        }
        else {
            return d;
        }
    };
    Layout.drag = function (d, position) {
        if (isGroup(d)) {
            if (typeof d.leaves !== 'undefined') {
                d.leaves.forEach(function (v) {
                    d.bounds.setXCentre(position.x);
                    d.bounds.setYCentre(position.y);
                    v.px = v._dragGroupOffsetX + position.x;
                    v.py = v._dragGroupOffsetY + position.y;
                });
            }
            if (typeof d.groups !== 'undefined') {
                d.groups.forEach(function (g) { return Layout.drag(g, position); });
            }
        }
        else {
            d.px = position.x;
            d.py = position.y;
        }
    };
    Layout.dragEnd = function (d) {
        if (isGroup(d)) {
            if (typeof d.leaves !== 'undefined') {
                d.leaves.forEach(function (v) {
                    Layout.dragEnd(v);
                    delete v._dragGroupOffsetX;
                    delete v._dragGroupOffsetY;
                });
            }
            if (typeof d.groups !== 'undefined') {
                d.groups.forEach(Layout.dragEnd);
            }
        }
        else {
            d.fixed &= ~6;
        }
    };
    Layout.mouseOver = function (d) {
        d.fixed |= 4;
        d.px = d.x, d.py = d.y;
    };
    Layout.mouseOut = function (d) {
        d.fixed &= ~4;
    };
    return Layout;
}());
exports.Layout = Layout;
//# sourceMappingURL=layout.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vpsc_1 = __webpack_require__(17);
var rbtree_1 = __webpack_require__(30);
function computeGroupBounds(g) {
    g.bounds = typeof g.leaves !== "undefined" ?
        g.leaves.reduce(function (r, c) { return c.bounds.union(r); }, Rectangle.empty()) :
        Rectangle.empty();
    if (typeof g.groups !== "undefined")
        g.bounds = g.groups.reduce(function (r, c) { return computeGroupBounds(c).union(r); }, g.bounds);
    g.bounds = g.bounds.inflate(g.padding);
    return g.bounds;
}
exports.computeGroupBounds = computeGroupBounds;
var Rectangle = (function () {
    function Rectangle(x, X, y, Y) {
        this.x = x;
        this.X = X;
        this.y = y;
        this.Y = Y;
    }
    Rectangle.empty = function () { return new Rectangle(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY); };
    Rectangle.prototype.cx = function () { return (this.x + this.X) / 2; };
    Rectangle.prototype.cy = function () { return (this.y + this.Y) / 2; };
    Rectangle.prototype.overlapX = function (r) {
        var ux = this.cx(), vx = r.cx();
        if (ux <= vx && r.x < this.X)
            return this.X - r.x;
        if (vx <= ux && this.x < r.X)
            return r.X - this.x;
        return 0;
    };
    Rectangle.prototype.overlapY = function (r) {
        var uy = this.cy(), vy = r.cy();
        if (uy <= vy && r.y < this.Y)
            return this.Y - r.y;
        if (vy <= uy && this.y < r.Y)
            return r.Y - this.y;
        return 0;
    };
    Rectangle.prototype.setXCentre = function (cx) {
        var dx = cx - this.cx();
        this.x += dx;
        this.X += dx;
    };
    Rectangle.prototype.setYCentre = function (cy) {
        var dy = cy - this.cy();
        this.y += dy;
        this.Y += dy;
    };
    Rectangle.prototype.width = function () {
        return this.X - this.x;
    };
    Rectangle.prototype.height = function () {
        return this.Y - this.y;
    };
    Rectangle.prototype.union = function (r) {
        return new Rectangle(Math.min(this.x, r.x), Math.max(this.X, r.X), Math.min(this.y, r.y), Math.max(this.Y, r.Y));
    };
    Rectangle.prototype.lineIntersections = function (x1, y1, x2, y2) {
        var sides = [[this.x, this.y, this.X, this.y],
            [this.X, this.y, this.X, this.Y],
            [this.X, this.Y, this.x, this.Y],
            [this.x, this.Y, this.x, this.y]];
        var intersections = [];
        for (var i = 0; i < 4; ++i) {
            var r = Rectangle.lineIntersection(x1, y1, x2, y2, sides[i][0], sides[i][1], sides[i][2], sides[i][3]);
            if (r !== null)
                intersections.push({ x: r.x, y: r.y });
        }
        return intersections;
    };
    Rectangle.prototype.rayIntersection = function (x2, y2) {
        var ints = this.lineIntersections(this.cx(), this.cy(), x2, y2);
        return ints.length > 0 ? ints[0] : null;
    };
    Rectangle.prototype.vertices = function () {
        return [
            { x: this.x, y: this.y },
            { x: this.X, y: this.y },
            { x: this.X, y: this.Y },
            { x: this.x, y: this.Y },
            { x: this.x, y: this.y }
        ];
    };
    Rectangle.lineIntersection = function (x1, y1, x2, y2, x3, y3, x4, y4) {
        var dx12 = x2 - x1, dx34 = x4 - x3, dy12 = y2 - y1, dy34 = y4 - y3, denominator = dy34 * dx12 - dx34 * dy12;
        if (denominator == 0)
            return null;
        var dx31 = x1 - x3, dy31 = y1 - y3, numa = dx34 * dy31 - dy34 * dx31, a = numa / denominator, numb = dx12 * dy31 - dy12 * dx31, b = numb / denominator;
        if (a >= 0 && a <= 1 && b >= 0 && b <= 1) {
            return {
                x: x1 + a * dx12,
                y: y1 + a * dy12
            };
        }
        return null;
    };
    Rectangle.prototype.inflate = function (pad) {
        return new Rectangle(this.x - pad, this.X + pad, this.y - pad, this.Y + pad);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
function makeEdgeBetween(source, target, ah) {
    var si = source.rayIntersection(target.cx(), target.cy()) || { x: source.cx(), y: source.cy() }, ti = target.rayIntersection(source.cx(), source.cy()) || { x: target.cx(), y: target.cy() }, dx = ti.x - si.x, dy = ti.y - si.y, l = Math.sqrt(dx * dx + dy * dy), al = l - ah;
    return {
        sourceIntersection: si,
        targetIntersection: ti,
        arrowStart: { x: si.x + al * dx / l, y: si.y + al * dy / l }
    };
}
exports.makeEdgeBetween = makeEdgeBetween;
function makeEdgeTo(s, target, ah) {
    var ti = target.rayIntersection(s.x, s.y);
    if (!ti)
        ti = { x: target.cx(), y: target.cy() };
    var dx = ti.x - s.x, dy = ti.y - s.y, l = Math.sqrt(dx * dx + dy * dy);
    return { x: ti.x - ah * dx / l, y: ti.y - ah * dy / l };
}
exports.makeEdgeTo = makeEdgeTo;
var Node = (function () {
    function Node(v, r, pos) {
        this.v = v;
        this.r = r;
        this.pos = pos;
        this.prev = makeRBTree();
        this.next = makeRBTree();
    }
    return Node;
}());
var Event = (function () {
    function Event(isOpen, v, pos) {
        this.isOpen = isOpen;
        this.v = v;
        this.pos = pos;
    }
    return Event;
}());
function compareEvents(a, b) {
    if (a.pos > b.pos) {
        return 1;
    }
    if (a.pos < b.pos) {
        return -1;
    }
    if (a.isOpen) {
        return -1;
    }
    if (b.isOpen) {
        return 1;
    }
    return 0;
}
function makeRBTree() {
    return new rbtree_1.RBTree(function (a, b) { return a.pos - b.pos; });
}
var xRect = {
    getCentre: function (r) { return r.cx(); },
    getOpen: function (r) { return r.y; },
    getClose: function (r) { return r.Y; },
    getSize: function (r) { return r.width(); },
    makeRect: function (open, close, center, size) { return new Rectangle(center - size / 2, center + size / 2, open, close); },
    findNeighbours: findXNeighbours
};
var yRect = {
    getCentre: function (r) { return r.cy(); },
    getOpen: function (r) { return r.x; },
    getClose: function (r) { return r.X; },
    getSize: function (r) { return r.height(); },
    makeRect: function (open, close, center, size) { return new Rectangle(open, close, center - size / 2, center + size / 2); },
    findNeighbours: findYNeighbours
};
function generateGroupConstraints(root, f, minSep, isContained) {
    if (isContained === void 0) { isContained = false; }
    var padding = root.padding, gn = typeof root.groups !== 'undefined' ? root.groups.length : 0, ln = typeof root.leaves !== 'undefined' ? root.leaves.length : 0, childConstraints = !gn ? []
        : root.groups.reduce(function (ccs, g) { return ccs.concat(generateGroupConstraints(g, f, minSep, true)); }, []), n = (isContained ? 2 : 0) + ln + gn, vs = new Array(n), rs = new Array(n), i = 0, add = function (r, v) { rs[i] = r; vs[i++] = v; };
    if (isContained) {
        var b = root.bounds, c = f.getCentre(b), s = f.getSize(b) / 2, open = f.getOpen(b), close = f.getClose(b), min = c - s + padding / 2, max = c + s - padding / 2;
        root.minVar.desiredPosition = min;
        add(f.makeRect(open, close, min, padding), root.minVar);
        root.maxVar.desiredPosition = max;
        add(f.makeRect(open, close, max, padding), root.maxVar);
    }
    if (ln)
        root.leaves.forEach(function (l) { return add(l.bounds, l.variable); });
    if (gn)
        root.groups.forEach(function (g) {
            var b = g.bounds;
            add(f.makeRect(f.getOpen(b), f.getClose(b), f.getCentre(b), f.getSize(b)), g.minVar);
        });
    var cs = generateConstraints(rs, vs, f, minSep);
    if (gn) {
        vs.forEach(function (v) { v.cOut = [], v.cIn = []; });
        cs.forEach(function (c) { c.left.cOut.push(c), c.right.cIn.push(c); });
        root.groups.forEach(function (g) {
            var gapAdjustment = (g.padding - f.getSize(g.bounds)) / 2;
            g.minVar.cIn.forEach(function (c) { return c.gap += gapAdjustment; });
            g.minVar.cOut.forEach(function (c) { c.left = g.maxVar; c.gap += gapAdjustment; });
        });
    }
    return childConstraints.concat(cs);
}
function generateConstraints(rs, vars, rect, minSep) {
    var i, n = rs.length;
    var N = 2 * n;
    console.assert(vars.length >= n);
    var events = new Array(N);
    for (i = 0; i < n; ++i) {
        var r = rs[i];
        var v = new Node(vars[i], r, rect.getCentre(r));
        events[i] = new Event(true, v, rect.getOpen(r));
        events[i + n] = new Event(false, v, rect.getClose(r));
    }
    events.sort(compareEvents);
    var cs = new Array();
    var scanline = makeRBTree();
    for (i = 0; i < N; ++i) {
        var e = events[i];
        var v = e.v;
        if (e.isOpen) {
            scanline.insert(v);
            rect.findNeighbours(v, scanline);
        }
        else {
            scanline.remove(v);
            var makeConstraint = function (l, r) {
                var sep = (rect.getSize(l.r) + rect.getSize(r.r)) / 2 + minSep;
                cs.push(new vpsc_1.Constraint(l.v, r.v, sep));
            };
            var visitNeighbours = function (forward, reverse, mkcon) {
                var u, it = v[forward].iterator();
                while ((u = it[forward]()) !== null) {
                    mkcon(u, v);
                    u[reverse].remove(v);
                }
            };
            visitNeighbours("prev", "next", function (u, v) { return makeConstraint(u, v); });
            visitNeighbours("next", "prev", function (u, v) { return makeConstraint(v, u); });
        }
    }
    console.assert(scanline.size === 0);
    return cs;
}
function findXNeighbours(v, scanline) {
    var f = function (forward, reverse) {
        var it = scanline.findIter(v);
        var u;
        while ((u = it[forward]()) !== null) {
            var uovervX = u.r.overlapX(v.r);
            if (uovervX <= 0 || uovervX <= u.r.overlapY(v.r)) {
                v[forward].insert(u);
                u[reverse].insert(v);
            }
            if (uovervX <= 0) {
                break;
            }
        }
    };
    f("next", "prev");
    f("prev", "next");
}
function findYNeighbours(v, scanline) {
    var f = function (forward, reverse) {
        var u = scanline.findIter(v)[forward]();
        if (u !== null && u.r.overlapX(v.r) > 0) {
            v[forward].insert(u);
            u[reverse].insert(v);
        }
    };
    f("next", "prev");
    f("prev", "next");
}
function generateXConstraints(rs, vars) {
    return generateConstraints(rs, vars, xRect, 1e-6);
}
exports.generateXConstraints = generateXConstraints;
function generateYConstraints(rs, vars) {
    return generateConstraints(rs, vars, yRect, 1e-6);
}
exports.generateYConstraints = generateYConstraints;
function generateXGroupConstraints(root) {
    return generateGroupConstraints(root, xRect, 1e-6);
}
exports.generateXGroupConstraints = generateXGroupConstraints;
function generateYGroupConstraints(root) {
    return generateGroupConstraints(root, yRect, 1e-6);
}
exports.generateYGroupConstraints = generateYGroupConstraints;
function removeOverlaps(rs) {
    var vs = rs.map(function (r) { return new vpsc_1.Variable(r.cx()); });
    var cs = generateXConstraints(rs, vs);
    var solver = new vpsc_1.Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) { return rs[i].setXCentre(v.position()); });
    vs = rs.map(function (r) { return new vpsc_1.Variable(r.cy()); });
    cs = generateYConstraints(rs, vs);
    solver = new vpsc_1.Solver(vs, cs);
    solver.solve();
    vs.forEach(function (v, i) { return rs[i].setYCentre(v.position()); });
}
exports.removeOverlaps = removeOverlaps;
var IndexedVariable = (function (_super) {
    __extends(IndexedVariable, _super);
    function IndexedVariable(index, w) {
        var _this = _super.call(this, 0, w) || this;
        _this.index = index;
        return _this;
    }
    return IndexedVariable;
}(vpsc_1.Variable));
exports.IndexedVariable = IndexedVariable;
var Projection = (function () {
    function Projection(nodes, groups, rootGroup, constraints, avoidOverlaps) {
        if (rootGroup === void 0) { rootGroup = null; }
        if (constraints === void 0) { constraints = null; }
        if (avoidOverlaps === void 0) { avoidOverlaps = false; }
        var _this = this;
        this.nodes = nodes;
        this.groups = groups;
        this.rootGroup = rootGroup;
        this.avoidOverlaps = avoidOverlaps;
        this.variables = nodes.map(function (v, i) {
            return v.variable = new IndexedVariable(i, 1);
        });
        if (constraints)
            this.createConstraints(constraints);
        if (avoidOverlaps && rootGroup && typeof rootGroup.groups !== 'undefined') {
            nodes.forEach(function (v) {
                if (!v.width || !v.height) {
                    v.bounds = new Rectangle(v.x, v.x, v.y, v.y);
                    return;
                }
                var w2 = v.width / 2, h2 = v.height / 2;
                v.bounds = new Rectangle(v.x - w2, v.x + w2, v.y - h2, v.y + h2);
            });
            computeGroupBounds(rootGroup);
            var i = nodes.length;
            groups.forEach(function (g) {
                _this.variables[i] = g.minVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
                _this.variables[i] = g.maxVar = new IndexedVariable(i++, typeof g.stiffness !== "undefined" ? g.stiffness : 0.01);
            });
        }
    }
    Projection.prototype.createSeparation = function (c) {
        return new vpsc_1.Constraint(this.nodes[c.left].variable, this.nodes[c.right].variable, c.gap, typeof c.equality !== "undefined" ? c.equality : false);
    };
    Projection.prototype.makeFeasible = function (c) {
        var _this = this;
        if (!this.avoidOverlaps)
            return;
        var axis = 'x', dim = 'width';
        if (c.axis === 'x')
            axis = 'y', dim = 'height';
        var vs = c.offsets.map(function (o) { return _this.nodes[o.node]; }).sort(function (a, b) { return a[axis] - b[axis]; });
        var p = null;
        vs.forEach(function (v) {
            if (p)
                v[axis] = p[axis] + p[dim] + 1;
            p = v;
        });
    };
    Projection.prototype.createAlignment = function (c) {
        var _this = this;
        var u = this.nodes[c.offsets[0].node].variable;
        this.makeFeasible(c);
        var cs = c.axis === 'x' ? this.xConstraints : this.yConstraints;
        c.offsets.slice(1).forEach(function (o) {
            var v = _this.nodes[o.node].variable;
            cs.push(new vpsc_1.Constraint(u, v, o.offset, true));
        });
    };
    Projection.prototype.createConstraints = function (constraints) {
        var _this = this;
        var isSep = function (c) { return typeof c.type === 'undefined' || c.type === 'separation'; };
        this.xConstraints = constraints
            .filter(function (c) { return c.axis === "x" && isSep(c); })
            .map(function (c) { return _this.createSeparation(c); });
        this.yConstraints = constraints
            .filter(function (c) { return c.axis === "y" && isSep(c); })
            .map(function (c) { return _this.createSeparation(c); });
        constraints
            .filter(function (c) { return c.type === 'alignment'; })
            .forEach(function (c) { return _this.createAlignment(c); });
    };
    Projection.prototype.setupVariablesAndBounds = function (x0, y0, desired, getDesired) {
        this.nodes.forEach(function (v, i) {
            if (v.fixed) {
                v.variable.weight = v.fixedWeight ? v.fixedWeight : 1000;
                desired[i] = getDesired(v);
            }
            else {
                v.variable.weight = 1;
            }
            var w = (v.width || 0) / 2, h = (v.height || 0) / 2;
            var ix = x0[i], iy = y0[i];
            v.bounds = new Rectangle(ix - w, ix + w, iy - h, iy + h);
        });
    };
    Projection.prototype.xProject = function (x0, y0, x) {
        if (!this.rootGroup && !(this.avoidOverlaps || this.xConstraints))
            return;
        this.project(x0, y0, x0, x, function (v) { return v.px; }, this.xConstraints, generateXGroupConstraints, function (v) { return v.bounds.setXCentre(x[v.variable.index] = v.variable.position()); }, function (g) {
            var xmin = x[g.minVar.index] = g.minVar.position();
            var xmax = x[g.maxVar.index] = g.maxVar.position();
            var p2 = g.padding / 2;
            g.bounds.x = xmin - p2;
            g.bounds.X = xmax + p2;
        });
    };
    Projection.prototype.yProject = function (x0, y0, y) {
        if (!this.rootGroup && !this.yConstraints)
            return;
        this.project(x0, y0, y0, y, function (v) { return v.py; }, this.yConstraints, generateYGroupConstraints, function (v) { return v.bounds.setYCentre(y[v.variable.index] = v.variable.position()); }, function (g) {
            var ymin = y[g.minVar.index] = g.minVar.position();
            var ymax = y[g.maxVar.index] = g.maxVar.position();
            var p2 = g.padding / 2;
            g.bounds.y = ymin - p2;
            ;
            g.bounds.Y = ymax + p2;
        });
    };
    Projection.prototype.projectFunctions = function () {
        var _this = this;
        return [
            function (x0, y0, x) { return _this.xProject(x0, y0, x); },
            function (x0, y0, y) { return _this.yProject(x0, y0, y); }
        ];
    };
    Projection.prototype.project = function (x0, y0, start, desired, getDesired, cs, generateConstraints, updateNodeBounds, updateGroupBounds) {
        this.setupVariablesAndBounds(x0, y0, desired, getDesired);
        if (this.rootGroup && this.avoidOverlaps) {
            computeGroupBounds(this.rootGroup);
            cs = cs.concat(generateConstraints(this.rootGroup));
        }
        this.solve(this.variables, cs, start, desired);
        this.nodes.forEach(updateNodeBounds);
        if (this.rootGroup && this.avoidOverlaps) {
            this.groups.forEach(updateGroupBounds);
            computeGroupBounds(this.rootGroup);
        }
    };
    Projection.prototype.solve = function (vs, cs, starting, desired) {
        var solver = new vpsc_1.Solver(vs, cs);
        solver.setStartingPositions(starting);
        solver.setDesiredPositions(desired);
        solver.solve();
    };
    return Projection;
}());
exports.Projection = Projection;
//# sourceMappingURL=rectangle.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
Ported by Xueqiao Xu <xueqiaoxu@gmail.com>;

PSF LICENSE AGREEMENT FOR PYTHON 2.7.2

1. This LICENSE AGREEMENT is between the Python Software Foundation (“PSF”), and the Individual or Organization (“Licensee”) accessing and otherwise using Python 2.7.2 software in source or binary form and its associated documentation.
2. Subject to the terms and conditions of this License Agreement, PSF hereby grants Licensee a nonexclusive, royalty-free, world-wide license to reproduce, analyze, test, perform and/or display publicly, prepare derivative works, distribute, and otherwise use Python 2.7.2 alone or in any derivative version, provided, however, that PSF’s License Agreement and PSF’s notice of copyright, i.e., “Copyright © 2001-2012 Python Software Foundation; All Rights Reserved” are retained in Python 2.7.2 alone or in any derivative version prepared by Licensee.
3. In the event Licensee prepares a derivative work that is based on or incorporates Python 2.7.2 or any part thereof, and wants to make the derivative work available to others as provided herein, then Licensee hereby agrees to include in any such work a brief summary of the changes made to Python 2.7.2.
4. PSF is making Python 2.7.2 available to Licensee on an “AS IS” basis. PSF MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. BY WAY OF EXAMPLE, BUT NOT LIMITATION, PSF MAKES NO AND DISCLAIMS ANY REPRESENTATION OR WARRANTY OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF PYTHON 2.7.2 WILL NOT INFRINGE ANY THIRD PARTY RIGHTS.
5. PSF SHALL NOT BE LIABLE TO LICENSEE OR ANY OTHER USERS OF PYTHON 2.7.2 FOR ANY INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES OR LOSS AS A RESULT OF MODIFYING, DISTRIBUTING, OR OTHERWISE USING PYTHON 2.7.2, OR ANY DERIVATIVE THEREOF, EVEN IF ADVISED OF THE POSSIBILITY THEREOF.
6. This License Agreement will automatically terminate upon a material breach of its terms and conditions.
7. Nothing in this License Agreement shall be deemed to create any relationship of agency, partnership, or joint venture between PSF and Licensee. This License Agreement does not grant permission to use PSF trademarks or trade name in a trademark sense to endorse or promote products or services of Licensee, or any third party.
8. By copying, installing or otherwise using Python 2.7.2, Licensee agrees to be bound by the terms and conditions of this License Agreement.
*/


// Generated by CoffeeScript 1.8.0

var Heap, defaultCmp, floor, heapify, heappop, heappush, heappushpop, heapreplace, insort, min, nlargest, nsmallest, updateItem, _siftdown, _siftup;

floor = Math.floor, min = Math.min;


/*
Default comparison function to be used
 */

defaultCmp = function( x, y ){
  if( x < y ){
    return -1;
  }
  if( x > y ){
    return 1;
  }
  return 0;
};


/*
Insert item x in list a, and keep it sorted assuming a is sorted.

If x is already in a, insert it to the right of the rightmost x.

Optional args lo (default 0) and hi (default a.length) bound the slice
of a to be searched.
 */

insort = function( a, x, lo, hi, cmp ){
  var mid;
  if( lo == null ){
    lo = 0;
  }
  if( cmp == null ){
    cmp = defaultCmp;
  }
  if( lo < 0 ){
    throw new Error( 'lo must be non-negative' );
  }
  if( hi == null ){
    hi = a.length;
  }
  while( lo < hi ){
    mid = floor( (lo + hi) / 2 );
    if( cmp( x, a[ mid ] ) < 0 ){
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }
  return ([].splice.apply( a, [ lo, lo - lo ].concat( x ) ), x);
};


/*
Push item onto heap, maintaining the heap invariant.
 */

heappush = function( array, item, cmp ){
  if( cmp == null ){
    cmp = defaultCmp;
  }
  array.push( item );
  return _siftdown( array, 0, array.length - 1, cmp );
};


/*
Pop the smallest item off the heap, maintaining the heap invariant.
 */

heappop = function( array, cmp ){
  var lastelt, returnitem;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  lastelt = array.pop();
  if( array.length ){
    returnitem = array[0];
    array[0] = lastelt;
    _siftup( array, 0, cmp );
  } else {
    returnitem = lastelt;
  }
  return returnitem;
};


/*
Pop and return the current smallest value, and add the new item.

This is more efficient than heappop() followed by heappush(), and can be
more appropriate when using a fixed size heap. Note that the value
returned may be larger than item! That constrains reasonable use of
this routine unless written as part of a conditional replacement:
    if item > array[0]
      item = heapreplace(array, item)
 */

heapreplace = function( array, item, cmp ){
  var returnitem;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  returnitem = array[0];
  array[0] = item;
  _siftup( array, 0, cmp );
  return returnitem;
};


/*
Fast version of a heappush followed by a heappop.
 */

heappushpop = function( array, item, cmp ){
  var _ref;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  if( array.length && cmp( array[0], item ) < 0 ){
    _ref = [ array[0], item ], item = _ref[0], array[0] = _ref[1];
    _siftup( array, 0, cmp );
  }
  return item;
};


/*
Transform list into a heap, in-place, in O(array.length) time.
 */

heapify = function( array, cmp ){
  var i, _i, _j, _len, _ref, _ref1, _results, _results1;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  _ref1 = (function(){
    _results1 = [];
    for( var _j = 0, _ref = floor( array.length / 2 ); 0 <= _ref ? _j < _ref : _j > _ref; 0 <= _ref ? _j++ : _j-- ){ _results1.push( _j ); }
    return _results1;
  }).apply( this ).reverse();
  _results = [];
  for( _i = 0, _len = _ref1.length; _i < _len; _i++ ){
    i = _ref1[ _i ];
    _results.push( _siftup( array, i, cmp ) );
  }
  return _results;
};


/*
Update the position of the given item in the heap.
This function should be called every time the item is being modified.
 */

updateItem = function( array, item, cmp ){
  var pos;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  pos = array.indexOf( item );
  if( pos === -1 ){
    return;
  }
  _siftdown( array, 0, pos, cmp );
  return _siftup( array, pos, cmp );
};


/*
Find the n largest elements in a dataset.
 */

nlargest = function( array, n, cmp ){
  var elem, result, _i, _len, _ref;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  result = array.slice( 0, n );
  if( !result.length ){
    return result;
  }
  heapify( result, cmp );
  _ref = array.slice( n );
  for( _i = 0, _len = _ref.length; _i < _len; _i++ ){
    elem = _ref[ _i ];
    heappushpop( result, elem, cmp );
  }
  return result.sort( cmp ).reverse();
};


/*
Find the n smallest elements in a dataset.
 */

nsmallest = function( array, n, cmp ){
  var elem, i, los, result, _i, _j, _len, _ref, _ref1, _results;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  if( n * 10 <= array.length ){
    result = array.slice( 0, n ).sort( cmp );
    if( !result.length ){
      return result;
    }
    los = result[ result.length - 1];
    _ref = array.slice( n );
    for( _i = 0, _len = _ref.length; _i < _len; _i++ ){
      elem = _ref[ _i ];
      if( cmp( elem, los ) < 0 ){
        insort( result, elem, 0, null, cmp );
        result.pop();
        los = result[ result.length - 1];
      }
    }
    return result;
  }
  heapify( array, cmp );
  _results = [];
  for( i = _j = 0, _ref1 = min( n, array.length ); 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j ){
    _results.push( heappop( array, cmp ) );
  }
  return _results;
};

_siftdown = function( array, startpos, pos, cmp ){
  var newitem, parent, parentpos;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  newitem = array[ pos ];
  while( pos > startpos ){
    parentpos = (pos - 1) >> 1;
    parent = array[ parentpos ];
    if( cmp( newitem, parent ) < 0 ){
      array[ pos ] = parent;
      pos = parentpos;
      continue;
    }
    break;
  }
  return array[ pos ] = newitem;
};

_siftup = function( array, pos, cmp ){
  var childpos, endpos, newitem, rightpos, startpos;
  if( cmp == null ){
    cmp = defaultCmp;
  }
  endpos = array.length;
  startpos = pos;
  newitem = array[ pos ];
  childpos = 2 * pos + 1;
  while( childpos < endpos ){
    rightpos = childpos + 1;
    if( rightpos < endpos && !(cmp( array[ childpos ], array[ rightpos ] ) < 0) ){
      childpos = rightpos;
    }
    array[ pos ] = array[ childpos ];
    pos = childpos;
    childpos = 2 * pos + 1;
  }
  array[ pos ] = newitem;
  return _siftdown( array, startpos, pos, cmp );
};

Heap = (function(){
  Heap.push = heappush;

  Heap.pop = heappop;

  Heap.replace = heapreplace;

  Heap.pushpop = heappushpop;

  Heap.heapify = heapify;

  Heap.updateItem = updateItem;

  Heap.nlargest = nlargest;

  Heap.nsmallest = nsmallest;

  function Heap( cmp ){
    this.cmp = cmp != null ? cmp : defaultCmp;
    this.nodes = [];
  }

  Heap.prototype.push = function( x ){
    return heappush( this.nodes, x, this.cmp );
  };

  Heap.prototype.pop = function(){
    return heappop( this.nodes, this.cmp );
  };

  Heap.prototype.peek = function(){
    return this.nodes[0];
  };

  Heap.prototype.contains = function( x ){
    return this.nodes.indexOf( x ) !== -1;
  };

  Heap.prototype.replace = function( x ){
    return heapreplace( this.nodes, x, this.cmp );
  };

  Heap.prototype.pushpop = function( x ){
    return heappushpop( this.nodes, x, this.cmp );
  };

  Heap.prototype.heapify = function(){
    return heapify( this.nodes, this.cmp );
  };

  Heap.prototype.updateItem = function( x ){
    return updateItem( this.nodes, x, this.cmp );
  };

  Heap.prototype.clear = function(){
    return this.nodes = [];
  };

  Heap.prototype.empty = function(){
    return this.nodes.length === 0;
  };

  Heap.prototype.size = function(){
    return this.nodes.length;
  };

  Heap.prototype.clone = function(){
    var heap;
    heap = new Heap();
    heap.nodes = this.nodes.slice( 0 );
    return heap;
  };

  Heap.prototype.toArray = function(){
    return this.nodes.slice( 0 );
  };

  Heap.prototype.insert = Heap.prototype.push;

  Heap.prototype.top = Heap.prototype.peek;

  Heap.prototype.front = Heap.prototype.peek;

  Heap.prototype.has = Heap.prototype.contains;

  Heap.prototype.copy = Heap.prototype.clone;

  return Heap;

})();

module.exports = Heap;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var Selector = function( selector ){

  if( !(this instanceof Selector) ){
    return new Selector( selector );
  }

  var self = this;

  self._private = {
    selectorText: null,
    invalid: true
  };

  // storage for parsed queries
  var newQuery = function(){
    return {
      classes: [],
      colonSelectors: [],
      data: [],
      group: null,
      ids: [],
      meta: [],

      // fake selectors
      collection: null, // a collection to match against
      filter: null, // filter function

      // these are defined in the upward direction rather than down (e.g. child)
      // because we need to go up in Selector.filter()
      parent: null, // parent query obj
      ancestor: null, // ancestor query obj
      subject: null, // defines subject in compound query (subject query obj; points to self if subject)

      // use these only when subject has been defined
      child: null,
      descendant: null
    };
  };

  if( !selector || ( is.string( selector ) && selector.match( /^\s*$/ ) ) ){

    self.length = 0;

  } else if( selector === '*' || selector === 'edge' || selector === 'node' ){

    // make single, group-only selectors cheap to make and cheap to filter

    self[0] = newQuery();
    self[0].group = selector === '*' ? selector : selector + 's';
    self[0].groupOnly = true;
    self._private.invalid = false;
    self._private.selectorText = selector;
    self.length = 1;

  } else if( is.elementOrCollection( selector ) ){

    var collection = selector.collection();

    self[0] = newQuery();
    self[0].collection = collection;
    self.length = 1;

  } else if( is.fn( selector ) ){

    self[0] = newQuery();
    self[0].filter = selector;
    self.length = 1;

  } else if( is.string( selector ) ){

    // the current subject in the query
    var currentSubject = null;

    // tokens in the query language
    var tokens = {
      metaChar: '[\\!\\"\\#\\$\\%\\&\\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]', // chars we need to escape in var names, etc
      comparatorOp: '=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=', // binary comparison op (used in data selectors)
      boolOp: '\\?|\\!|\\^', // boolean (unary) operators (used in data selectors)
      string: '"(?:\\\\"|[^"])+"' + '|' + "'(?:\\\\'|[^'])+'", // string literals (used in data selectors) -- doublequotes | singlequotes
      number: util.regex.number, // number literal (used in data selectors) --- e.g. 0.1234, 1234, 12e123
      meta: 'degree|indegree|outdegree', // allowed metadata fields (i.e. allowed functions to use from Collection)
      separator: '\\s*,\\s*', // queries are separated by commas, e.g. edge[foo = 'bar'], node.someClass
      descendant: '\\s+',
      child: '\\s+>\\s+',
      subject: '\\$'
    };
    tokens.variable = '(?:[\\w-]|(?:\\\\' + tokens.metaChar + '))+'; // a variable name
    tokens.value = tokens.string + '|' + tokens.number; // a value literal, either a string or number
    tokens.className = tokens.variable; // a class name (follows variable conventions)
    tokens.id = tokens.variable; // an element id (follows variable conventions)

    // when a token like a variable has escaped meta characters, we need to clean the backslashes out
    // so that values get compared properly in Selector.filter()
    var cleanMetaChars = function( str ){
      return str.replace( new RegExp( '\\\\(' + tokens.metaChar + ')', 'g' ), function( match, $1, offset, original ){
        return $1;
      } );
    };

    // add @ variants to comparatorOp
    var ops = tokens.comparatorOp.split( '|' );
    for( var i = 0; i < ops.length; i++ ){
      var op = ops[ i ];
      tokens.comparatorOp += '|@' + op;
    }

    // add ! variants to comparatorOp
    var ops = tokens.comparatorOp.split( '|' );
    for( var i = 0; i < ops.length; i++ ){
      var op = ops[ i ];

      if( op.indexOf( '!' ) >= 0 ){ continue; } // skip ops that explicitly contain !
      if( op === '=' ){ continue; } // skip = b/c != is explicitly defined

      tokens.comparatorOp += '|\\!' + op;
    }

    // NOTE: add new expression syntax here to have it recognised by the parser;
    // - a query contains all adjacent (i.e. no separator in between) expressions;
    // - the current query is stored in self[i] --- you can use the reference to `this` in the populate function;
    // - you need to check the query objects in Selector.filter() for it actually filter properly, but that's pretty straight forward
    // - when you add something here, also add to Selector.toString()
    var exprs = [
      {
        name: 'group',
        query: true,
        regex: '(node|edge|\\*)',
        populate: function( group ){
          this.group = group === '*' ? group : group + 's';
        }
      },

      {
        name: 'state',
        query: true,
        // NB: if one colon selector is a substring of another from its start, place the longer one first
        // e.g. :foobar|:foo
        regex: '(:selected|:unselected|:locked|:unlocked|:visible|:hidden|:transparent|:grabbed|:free|:removed|:inside|:grabbable|:ungrabbable|:animated|:unanimated|:selectable|:unselectable|:orphan|:nonorphan|:parent|:child|:loop|:simple|:active|:inactive|:touch|:backgrounding|:nonbackgrounding)',
        populate: function( state ){
          this.colonSelectors.push( state );
        }
      },

      {
        name: 'id',
        query: true,
        regex: '\\#(' + tokens.id + ')',
        populate: function( id ){
          this.ids.push( cleanMetaChars( id ) );
        }
      },

      {
        name: 'className',
        query: true,
        regex: '\\.(' + tokens.className + ')',
        populate: function( className ){
          this.classes.push( cleanMetaChars( className ) );
        }
      },

      {
        name: 'dataExists',
        query: true,
        regex: '\\[\\s*(' + tokens.variable + ')\\s*\\]',
        populate: function( variable ){
          this.data.push( {
            field: cleanMetaChars( variable )
          } );
        }
      },

      {
        name: 'dataCompare',
        query: true,
        regex: '\\[\\s*(' + tokens.variable + ')\\s*(' + tokens.comparatorOp + ')\\s*(' + tokens.value + ')\\s*\\]',
        populate: function( variable, comparatorOp, value ){
          var valueIsString = new RegExp( '^' + tokens.string + '$' ).exec( value ) != null;

          if( valueIsString ){
            value = value.substring( 1, value.length - 1 );
          } else {
            value = parseFloat( value );
          }

          this.data.push( {
            field: cleanMetaChars( variable ),
            operator: comparatorOp,
            value: value
          } );
        }
      },

      {
        name: 'dataBool',
        query: true,
        regex: '\\[\\s*(' + tokens.boolOp + ')\\s*(' + tokens.variable + ')\\s*\\]',
        populate: function( boolOp, variable ){
          this.data.push( {
            field: cleanMetaChars( variable ),
            operator: boolOp
          } );
        }
      },

      {
        name: 'metaCompare',
        query: true,
        regex: '\\[\\[\\s*(' + tokens.meta + ')\\s*(' + tokens.comparatorOp + ')\\s*(' + tokens.number + ')\\s*\\]\\]',
        populate: function( meta, comparatorOp, number ){
          this.meta.push( {
            field: cleanMetaChars( meta ),
            operator: comparatorOp,
            value: parseFloat( number )
          } );
        }
      },

      {
        name: 'nextQuery',
        separator: true,
        regex: tokens.separator,
        populate: function(){
          // go on to next query
          self[ ++i ] = newQuery();
          currentSubject = null;
        }
      },

      {
        name: 'child',
        separator: true,
        regex: tokens.child,
        populate: function(){
          // this query is the parent of the following query
          var childQuery = newQuery();
          childQuery.parent = this;
          childQuery.subject = currentSubject;

          // we're now populating the child query with expressions that follow
          self[ i ] = childQuery;
        }
      },

      {
        name: 'descendant',
        separator: true,
        regex: tokens.descendant,
        populate: function(){
          // this query is the ancestor of the following query
          var descendantQuery = newQuery();
          descendantQuery.ancestor = this;
          descendantQuery.subject = currentSubject;

          // we're now populating the descendant query with expressions that follow
          self[ i ] = descendantQuery;
        }
      },

      {
        name: 'subject',
        modifier: true,
        regex: tokens.subject,
        populate: function(){
          if( currentSubject != null && this.subject != this ){
            util.error( 'Redefinition of subject in selector `' + selector + '`' );
            return false;
          }

          currentSubject = this;
          this.subject = this;
        }

      }
    ];

    self._private.selectorText = selector;
    var remaining = selector;
    var i = 0;

    // of all the expressions, find the first match in the remaining text
    var consumeExpr = function( expectation ){
      var expr;
      var match;
      var name;

      for( var j = 0; j < exprs.length; j++ ){
        var e = exprs[ j ];
        var n = e.name;

        // ignore this expression if it doesn't meet the expectation function
        if( is.fn( expectation ) && !expectation( n, e ) ){ continue; }

        var m = remaining.match( new RegExp( '^' + e.regex ) );

        if( m != null ){
          match = m;
          expr = e;
          name = n;

          var consumed = m[0];
          remaining = remaining.substring( consumed.length );

          break; // we've consumed one expr, so we can return now
        }
      }

      return {
        expr: expr,
        match: match,
        name: name
      };
    };

    // consume all leading whitespace
    var consumeWhitespace = function(){
      var match = remaining.match( /^\s+/ );

      if( match ){
        var consumed = match[0];
        remaining = remaining.substring( consumed.length );
      }
    };

    self[0] = newQuery(); // get started

    consumeWhitespace(); // get rid of leading whitespace
    for( ;; ){
      var check = consumeExpr();

      if( check.expr == null ){
        util.error( 'The selector `' + selector + '`is invalid' );
        return;
      } else {
        var args = [];
        for( var j = 1; j < check.match.length; j++ ){
          args.push( check.match[ j ] );
        }

        // let the token populate the selector object (i.e. in self[i])
        var ret = check.expr.populate.apply( self[ i ], args );

        if( ret === false ){ return; } // exit if population failed
      }

      // we're done when there's nothing left to parse
      if( remaining.match( /^\s*$/ ) ){
        break;
      }
    }

    self.length = i + 1;

    // adjust references for subject
    for( var j = 0; j < self.length; j++ ){
      var query = self[ j ];

      if( query.subject != null ){
        // go up the tree until we reach the subject
        for( ;; ){
          if( query.subject == query ){ break; } // done if subject is self

          if( query.parent != null ){ // swap parent/child reference
            var parent = query.parent;
            var child = query;

            child.parent = null;
            parent.child = child;

            query = parent; // go up the tree
          } else if( query.ancestor != null ){ // swap ancestor/descendant
            var ancestor = query.ancestor;
            var descendant = query;

            descendant.ancestor = null;
            ancestor.descendant = descendant;

            query = ancestor; // go up the tree
          } else {
            util.error( 'When adjusting references for the selector `' + query + '`, neither parent nor ancestor was found' );
            break;
          }
        } // for

        self[ j ] = query.subject; // subject should be the root query
      } // if
    } // for

  } else {
    util.error( 'A selector must be created from a string; found ' + selector );
    return;
  }

  self._private.invalid = false;

};

var selfn = Selector.prototype;

selfn.size = function(){
  return this.length;
};

selfn.eq = function( i ){
  return this[ i ];
};

var queryMatches = function( query, ele ){
  var ele_p = ele._private;

  // make single group-only selectors really cheap to check since they're the most common ones
  if( query.groupOnly ){
    return query.group === '*' || query.group === ele_p.group;
  }

  // check group
  if( query.group != null && query.group != '*' && query.group != ele_p.group ){
    return false;
  }

  var cy = ele.cy();

  // check colon selectors
  var allColonSelectorsMatch = true;
  for( var k = 0; k < query.colonSelectors.length; k++ ){
    var sel = query.colonSelectors[ k ];

    switch( sel ){
      case ':selected':
        allColonSelectorsMatch = ele.selected();
        break;
      case ':unselected':
        allColonSelectorsMatch = !ele.selected();
        break;
      case ':selectable':
        allColonSelectorsMatch = ele.selectable();
        break;
      case ':unselectable':
        allColonSelectorsMatch = !ele.selectable();
        break;
      case ':locked':
        allColonSelectorsMatch = ele.locked();
        break;
      case ':unlocked':
        allColonSelectorsMatch = !ele.locked();
        break;
      case ':visible':
        allColonSelectorsMatch = ele.visible();
        break;
      case ':hidden':
        allColonSelectorsMatch = !ele.visible();
        break;
      case ':transparent':
        allColonSelectorsMatch = ele.transparent();
        break;
      case ':grabbed':
        allColonSelectorsMatch = ele.grabbed();
        break;
      case ':free':
        allColonSelectorsMatch = !ele.grabbed();
        break;
      case ':removed':
        allColonSelectorsMatch = ele.removed();
        break;
      case ':inside':
        allColonSelectorsMatch = !ele.removed();
        break;
      case ':grabbable':
        allColonSelectorsMatch = ele.grabbable();
        break;
      case ':ungrabbable':
        allColonSelectorsMatch = !ele.grabbable();
        break;
      case ':animated':
        allColonSelectorsMatch = ele.animated();
        break;
      case ':unanimated':
        allColonSelectorsMatch = !ele.animated();
        break;
      case ':parent':
        allColonSelectorsMatch = ele.isNode() && ele.children().nonempty();
        break;
      case ':child':
      case ':nonorphan':
        allColonSelectorsMatch = ele.isNode() && ele.parent().nonempty();
        break;
      case ':orphan':
        allColonSelectorsMatch = ele.isNode() && ele.parent().empty();
        break;
      case ':loop':
        allColonSelectorsMatch = ele.isEdge() && ele.data( 'source' ) === ele.data( 'target' );
        break;
      case ':simple':
        allColonSelectorsMatch = ele.isEdge() && ele.data( 'source' ) !== ele.data( 'target' );
        break;
      case ':active':
        allColonSelectorsMatch = ele.active();
        break;
      case ':inactive':
        allColonSelectorsMatch = !ele.active();
        break;
      case ':touch':
        allColonSelectorsMatch = is.touch();
        break;
      case ':backgrounding':
        allColonSelectorsMatch = ele.backgrounding();
        break;
      case ':nonbackgrounding':
        allColonSelectorsMatch = !ele.backgrounding();
        break;
    }

    if( !allColonSelectorsMatch ) break;
  }
  if( !allColonSelectorsMatch ) return false;

  // check id
  var allIdsMatch = true;
  for( var k = 0; k < query.ids.length; k++ ){
    var id = query.ids[ k ];
    var actualId = ele_p.data.id;

    allIdsMatch = allIdsMatch && (id == actualId);

    if( !allIdsMatch ) break;
  }
  if( !allIdsMatch ) return false;

  // check classes
  var allClassesMatch = true;
  for( var k = 0; k < query.classes.length; k++ ){
    var cls = query.classes[ k ];

    allClassesMatch = allClassesMatch && ele.hasClass( cls );

    if( !allClassesMatch ) break;
  }
  if( !allClassesMatch ) return false;

  // generic checking for data/metadata
  var operandsMatch = function( params ){
    var allDataMatches = true;
    for( var k = 0; k < query[ params.name ].length; k++ ){
      var data = query[ params.name ][ k ];
      var operator = data.operator;
      var value = data.value;
      var field = data.field;
      var matches;

      if( operator != null && value != null ){

        var fieldVal = params.fieldValue( field );
        var fieldStr = !is.string( fieldVal ) && !is.number( fieldVal ) ? '' : '' + fieldVal;
        var valStr = '' + value;

        var caseInsensitive = false;
        if( operator.indexOf( '@' ) >= 0 ){
          fieldStr = fieldStr.toLowerCase();
          valStr = valStr.toLowerCase();

          operator = operator.replace( '@', '' );
          caseInsensitive = true;
        }

        var notExpr = false;
        if( operator.indexOf( '!' ) >= 0 ){
          operator = operator.replace( '!', '' );
          notExpr = true;
        }

        // if we're doing a case insensitive comparison, then we're using a STRING comparison
        // even if we're comparing numbers
        if( caseInsensitive ){
          value = valStr.toLowerCase();
          fieldVal = fieldStr.toLowerCase();
        }

        var isIneqCmp = false;

        switch( operator ){
        case '*=':
          matches = fieldStr.indexOf( valStr ) >= 0;
          break;
        case '$=':
          matches = fieldStr.indexOf( valStr, fieldStr.length - valStr.length ) >= 0;
          break;
        case '^=':
          matches = fieldStr.indexOf( valStr ) === 0;
          break;
        case '=':
          matches = fieldVal === value;
          break;
        case '>':
          isIneqCmp = true;
          matches = fieldVal > value;
          break;
        case '>=':
          isIneqCmp = true;
          matches = fieldVal >= value;
          break;
        case '<':
          isIneqCmp = true;
          matches = fieldVal < value;
          break;
        case '<=':
          isIneqCmp = true;
          matches = fieldVal <= value;
          break;
        default:
          matches = false;
          break;
        }

        // apply the not op, but null vals for inequalities should always stay non-matching
        if( notExpr && ( fieldVal != null || !isIneqCmp ) ){
          matches = !matches;
        }
      } else if( operator != null ){
        switch( operator ){
        case '?':
          matches = params.fieldTruthy( field );
          break;
        case '!':
          matches = !params.fieldTruthy( field );
          break;
        case '^':
          matches = params.fieldUndefined( field );
          break;
        }
      } else {
        matches = !params.fieldUndefined( field );
      }

      if( !matches ){
        allDataMatches = false;
        break;
      }
    } // for

    return allDataMatches;
  }; // operandsMatch

  // check data matches
  var allDataMatches = operandsMatch( {
    name: 'data',
    fieldValue: function( field ){
      return ele_p.data[ field ];
    },
    fieldUndefined: function( field ){
      return ele_p.data[ field ] === undefined;
    },
    fieldTruthy: function( field ){
      if( ele_p.data[ field ] ){
        return true;
      }
      return false;
    }
  } );

  if( !allDataMatches ){
    return false;
  }

  // check metadata matches
  var allMetaMatches = operandsMatch( {
    name: 'meta',
    fieldValue: function( field ){
      return ele[ field ]();
    },
    fieldUndefined: function( field ){
      return ele[ field ]() == null;
    },
    fieldTruthy: function( field ){
      if( ele[ field ]() ){
        return true;
      }
      return false;
    }
  } );

  if( !allMetaMatches ){
    return false;
  }

  // check collection
  if( query.collection != null ){
    var matchesAny = query.collection.hasElementWithId( ele.id() );

    if( !matchesAny ){
      return false;
    }
  }

  // check filter function
  if( query.filter != null && ele.collection().filter( query.filter ).size() === 0 ){
    return false;
  }

  // check parent/child relations
  var confirmRelations = function( query, eles ){
    if( query != null ){
      var matches = false;

      if( !cy.hasCompoundNodes() ){
        return false;
      }

      eles = eles(); // save cycles if query == null

      // query must match for at least one element (may be recursive)
      for( var i = 0; i < eles.length; i++ ){
        if( queryMatches( query, eles[ i ] ) ){
          matches = true;
          break;
        }
      }

      return matches;
    } else {
      return true;
    }
  };

  if( !confirmRelations( query.parent, function(){
    return ele.parent();
  } ) ){ return false; }

  if( !confirmRelations( query.ancestor, function(){
    return ele.parents();
  } ) ){ return false; }

  if( !confirmRelations( query.child, function(){
    return ele.children();
  } ) ){ return false; }

  if( !confirmRelations( query.descendant, function(){
    return ele.descendants();
  } ) ){ return false; }

  // we've reached the end, so we've matched everything for this query
  return true;
}; // queryMatches

// filter an existing collection
selfn.filter = function( collection ){
  var self = this;
  var cy = collection.cy();

  // don't bother trying if it's invalid
  if( self._private.invalid ){
    return cy.collection();
  }

  var selectorFunction = function( i, element ){
    for( var j = 0; j < self.length; j++ ){
      var query = self[ j ];

      if( queryMatches( query, element ) ){
        return true;
      }
    }

    return false;
  };

  if( self._private.selectorText == null ){
    selectorFunction = function(){ return true; };
  }

  var filteredCollection = collection.filter( selectorFunction );

  return filteredCollection;
}; // filter

// does selector match a single element?
selfn.matches = function( ele ){
  var self = this;

  // don't bother trying if it's invalid
  if( self._private.invalid ){
    return false;
  }

  for( var j = 0; j < self.length; j++ ){
    var query = self[ j ];

    if( queryMatches( query, ele ) ){
      return true;
    }
  }

  return false;
}; // filter

// ith query to string
selfn.toString = selfn.selector = function(){

  var str = '';

  var clean = function( obj ){
    if( obj == null ){
      return '';
    } else {
      return obj;
    }
  };

  var cleanVal = function( val ){
    if( is.string( val ) ){
      return '"' + val + '"';
    } else {
      return clean( val );
    }
  };

  var space = function( val ){
    return ' ' + val + ' ';
  };

  var queryToString = function( query ){
    var str = '';

    if( query.subject === query ){
      str += '$';
    }

    var group = clean( query.group );
    str += group.substring( 0, group.length - 1 );

    for( var j = 0; j < query.data.length; j++ ){
      var data = query.data[ j ];

      if( data.value ){
        str += '[' + data.field + space( clean( data.operator ) ) + cleanVal( data.value ) + ']';
      } else {
        str += '[' + clean( data.operator ) + data.field + ']';
      }
    }

    for( var j = 0; j < query.meta.length; j++ ){
      var meta = query.meta[ j ];
      str += '[[' + meta.field + space( clean( meta.operator ) ) + cleanVal( meta.value ) + ']]';
    }

    for( var j = 0; j < query.colonSelectors.length; j++ ){
      var sel = query.colonSelectors[ i ];
      str += sel;
    }

    for( var j = 0; j < query.ids.length; j++ ){
      var sel = '#' + query.ids[ i ];
      str += sel;
    }

    for( var j = 0; j < query.classes.length; j++ ){
      var sel = '.' + query.classes[ j ];
      str += sel;
    }

    if( query.parent != null ){
      str = queryToString( query.parent ) + ' > ' + str;
    }

    if( query.ancestor != null ){
      str = queryToString( query.ancestor ) + ' ' + str;
    }

    if( query.child != null ){
      str += ' > ' + queryToString( query.child );
    }

    if( query.descendant != null ){
      str += ' ' + queryToString( query.descendant );
    }

    return str;
  };

  for( var i = 0; i < this.length; i++ ){
    var query = this[ i ];

    str += queryToString( query );

    if( this.length > 1 && i < this.length - 1 ){
      str += ', ';
    }
  }

  return str;
};

module.exports = Selector;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Makes argument to be an array if it's not
 *
 * @param input
 * @returns {Array}
 */

module.exports.makeItArrayIfItsNot = function (input) {
  return Object.prototype.toString.call( input ) !== '[object Array]'
    ? [input]
    : input
}

/**
 *
 * Utilizes bisection method to search an interval to which
 * point belongs to, then returns an index of left border
 * of the interval
 *
 * @param {Number} point
 * @param {Array} intervals
 * @returns {Number}
 */

module.exports.findIntervalLeftBorderIndex = function (point, intervals) {
  //If point is beyond given intervals
  if (point < intervals[0])
    return 0
  if (point > intervals[intervals.length - 1])
    return intervals.length - 1
  //If point is inside interval
  //Start searching on a full range of intervals
  var indexOfNumberToCompare 
    , leftBorderIndex = 0
    , rightBorderIndex = intervals.length - 1
  //Reduce searching range till it find an interval point belongs to using binary search
  while (rightBorderIndex - leftBorderIndex !== 1) {
    indexOfNumberToCompare = leftBorderIndex + Math.floor((rightBorderIndex - leftBorderIndex)/2)
    point >= intervals[indexOfNumberToCompare]
      ? leftBorderIndex = indexOfNumberToCompare
      : rightBorderIndex = indexOfNumberToCompare
  }
  return leftBorderIndex
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var pqueue_1 = __webpack_require__(29);
var Neighbour = (function () {
    function Neighbour(id, distance) {
        this.id = id;
        this.distance = distance;
    }
    return Neighbour;
}());
var Node = (function () {
    function Node(id) {
        this.id = id;
        this.neighbours = [];
    }
    return Node;
}());
var QueueEntry = (function () {
    function QueueEntry(node, prev, d) {
        this.node = node;
        this.prev = prev;
        this.d = d;
    }
    return QueueEntry;
}());
var Calculator = (function () {
    function Calculator(n, es, getSourceIndex, getTargetIndex, getLength) {
        this.n = n;
        this.es = es;
        this.neighbours = new Array(this.n);
        var i = this.n;
        while (i--)
            this.neighbours[i] = new Node(i);
        i = this.es.length;
        while (i--) {
            var e = this.es[i];
            var u = getSourceIndex(e), v = getTargetIndex(e);
            var d = getLength(e);
            this.neighbours[u].neighbours.push(new Neighbour(v, d));
            this.neighbours[v].neighbours.push(new Neighbour(u, d));
        }
    }
    Calculator.prototype.DistanceMatrix = function () {
        var D = new Array(this.n);
        for (var i = 0; i < this.n; ++i) {
            D[i] = this.dijkstraNeighbours(i);
        }
        return D;
    };
    Calculator.prototype.DistancesFromNode = function (start) {
        return this.dijkstraNeighbours(start);
    };
    Calculator.prototype.PathFromNodeToNode = function (start, end) {
        return this.dijkstraNeighbours(start, end);
    };
    Calculator.prototype.PathFromNodeToNodeWithPrevCost = function (start, end, prevCost) {
        var q = new pqueue_1.PriorityQueue(function (a, b) { return a.d <= b.d; }), u = this.neighbours[start], qu = new QueueEntry(u, null, 0), visitedFrom = {};
        q.push(qu);
        while (!q.empty()) {
            qu = q.pop();
            u = qu.node;
            if (u.id === end) {
                break;
            }
            var i = u.neighbours.length;
            while (i--) {
                var neighbour = u.neighbours[i], v = this.neighbours[neighbour.id];
                if (qu.prev && v.id === qu.prev.node.id)
                    continue;
                var viduid = v.id + ',' + u.id;
                if (viduid in visitedFrom && visitedFrom[viduid] <= qu.d)
                    continue;
                var cc = qu.prev ? prevCost(qu.prev.node.id, u.id, v.id) : 0, t = qu.d + neighbour.distance + cc;
                visitedFrom[viduid] = t;
                q.push(new QueueEntry(v, qu, t));
            }
        }
        var path = [];
        while (qu.prev) {
            qu = qu.prev;
            path.push(qu.node.id);
        }
        return path;
    };
    Calculator.prototype.dijkstraNeighbours = function (start, dest) {
        if (dest === void 0) { dest = -1; }
        var q = new pqueue_1.PriorityQueue(function (a, b) { return a.d <= b.d; }), i = this.neighbours.length, d = new Array(i);
        while (i--) {
            var node = this.neighbours[i];
            node.d = i === start ? 0 : Number.POSITIVE_INFINITY;
            node.q = q.push(node);
        }
        while (!q.empty()) {
            var u = q.pop();
            d[u.id] = u.d;
            if (u.id === dest) {
                var path = [];
                var v = u;
                while (typeof v.prev !== 'undefined') {
                    path.push(v.prev.id);
                    v = v.prev;
                }
                return path;
            }
            i = u.neighbours.length;
            while (i--) {
                var neighbour = u.neighbours[i];
                var v = this.neighbours[neighbour.id];
                var t = u.d + neighbour.distance;
                if (u.d !== Number.MAX_VALUE && v.d > t) {
                    v.d = t;
                    v.prev = u;
                    q.reduceKey(v.q, v, function (e, q) { return e.q = q; });
                }
            }
        }
        return d;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=shortestpaths.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
Event object based on jQuery events, MIT license

https://jquery.org/license/
https://tldrlegal.com/license/mit-license
https://github.com/jquery/jquery/blob/master/src/event.js
*/

var Event = function( src, props ){
  // Allow instantiation without the 'new' keyword
  if( !(this instanceof Event) ){
    return new Event( src, props );
  }

  // Event object
  if( src && src.type ){
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = ( src.defaultPrevented ) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if( props ){
    // util.extend( this, props );

    // more efficient to manually copy fields we use
    this.type = props.type !== undefined ? props.type : this.type;
    this.cy = props.cy;
    this.cyTarget = props.cyTarget;
    this.cyPosition = props.cyPosition;
    this.cyRenderedPosition = props.cyRenderedPosition;
    this.namespace = props.namespace;
    this.layout = props.layout;
    this.data = props.data;
    this.message = props.message;
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || Date.now();
};

function returnFalse(){
  return false;
}

function returnTrue(){
  return true;
}

// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
Event.prototype = {
  instanceString: function(){
    return 'event';
  },

  preventDefault: function(){
    this.isDefaultPrevented = returnTrue;

    var e = this.originalEvent;
    if( !e ){
      return;
    }

    // if preventDefault exists run it on the original event
    if( e.preventDefault ){
      e.preventDefault();
    }
  },

  stopPropagation: function(){
    this.isPropagationStopped = returnTrue;

    var e = this.originalEvent;
    if( !e ){
      return;
    }

    // if stopPropagation exists run it on the original event
    if( e.stopPropagation ){
      e.stopPropagation();
    }
  },

  stopImmediatePropagation: function(){
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  },

  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse
};

module.exports = Event;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/*! Weaver licensed under MIT (https://tldrlegal.com/license/mit-license), copyright Max Franz */

// cross-env thread/worker
// NB : uses (heavyweight) processes on nodejs so best not to create too many threads



var window = __webpack_require__(4);
var util = __webpack_require__(1);
var Promise = __webpack_require__(5);
var Event = __webpack_require__(13);
var define = __webpack_require__(3);
var is = __webpack_require__(0);

var Thread = function( opts ){
  if( !(this instanceof Thread) ){
    return new Thread( opts );
  }

  var _p = this._private = {
    requires: [],
    files: [],
    queue: null,
    pass: [],
    disabled: false
  };

  if( is.plainObject(opts) ){
    if( opts.disabled != null ){
      _p.disabled = !!opts.disabled;
    }
  }

};

var thdfn = Thread.prototype; // short alias

var stringifyFieldVal = function( val ){
  var valStr = is.fn( val ) ? val.toString() : "JSON.parse('" + JSON.stringify(val) + "')";

  return valStr;
};

// allows for requires with prototypes and subobjs etc
var fnAsRequire = function( fn ){
  var req;
  var fnName;

  if( is.object(fn) && fn.fn ){ // manual fn
    req = fnAs( fn.fn, fn.name );
    fnName = fn.name;
    fn = fn.fn;
  } else if( is.fn(fn) ){ // auto fn
    req = fn.toString();
    fnName = fn.name;
  } else if( is.string(fn) ){ // stringified fn
    req = fn;
  } else if( is.object(fn) ){ // plain object
    if( fn.proto ){
      req = '';
    } else {
      req = fn.name + ' = {};';
    }

    fnName = fn.name;
    fn = fn.obj;
  }

  req += '\n';

  var protoreq = function( val, subname ){
    if( val.prototype ){
      var protoNonempty = false;
      for( var prop in val.prototype ){ protoNonempty = true; break; } // jshint ignore:line

      if( protoNonempty ){
        req += fnAsRequire( {
          name: subname,
          obj: val,
          proto: true
        }, val );
      }
    }
  };

  // pull in prototype
  if( fn.prototype && fnName != null ){

    for( var name in fn.prototype ){
      var protoStr = '';

      var val = fn.prototype[ name ];
      var valStr = stringifyFieldVal( val );
      var subname = fnName + '.prototype.' + name;

      protoStr += subname + ' = ' + valStr + ';\n';

      if( protoStr ){
        req += protoStr;
      }

      protoreq( val, subname ); // subobject with prototype
    }

  }

  // pull in properties for obj/fns
  if( !is.string(fn) ){ for( var name in fn ){
    var propsStr = '';

    if( fn.hasOwnProperty(name) ){
      var val = fn[ name ];
      var valStr = stringifyFieldVal( val );
      var subname = fnName + '["' + name + '"]';

      propsStr += subname + ' = ' + valStr + ';\n';
    }

    if( propsStr ){
      req += propsStr;
    }

    protoreq( val, subname ); // subobject with prototype
  } }

  return req;
};

var isPathStr = function( str ){
  return is.string(str) && str.match(/\.js$/);
};

util.extend(thdfn, {

  instanceString: function(){ return 'thread'; },

  require: function( fn, as ){
    var requires = this._private.requires;

    if( isPathStr(fn) ){
      this._private.files.push( fn );

      return this;
    }

    if( as ){
      if( is.fn(fn) ){
        fn = { name: as, fn: fn };
      } else {
        fn = { name: as, obj: fn };
      }
    } else {
      if( is.fn(fn) ){
        if( !fn.name ){
          throw 'The function name could not be automatically determined.  Use thread.require( someFunction, "someFunction" )';
        }

        fn = { name: fn.name, fn: fn };
      }
    }

    requires.push( fn );

    return this; // chaining
  },

  pass: function( data ){
    this._private.pass.push( data );

    return this; // chaining
  },

  run: function( fn, pass ){ // fn used like main()
    var self = this;
    var _p = this._private;
    pass = pass || _p.pass.shift();

    if( _p.stopped ){
      throw 'Attempted to run a stopped thread!  Start a new thread or do not stop the existing thread and reuse it.';
    }

    if( _p.running ){
      return ( _p.queue = _p.queue.then(function(){ // inductive step
        return self.run( fn, pass );
      }) );
    }

    var useWW = window != null && !_p.disabled;
    var useNode = !window && typeof module !== 'undefined' && !_p.disabled;

    self.trigger('run');

    var runP = new Promise(function( resolve, reject ){

      _p.running = true;

      var threadTechAlreadyExists = _p.ran;

      var fnImplStr = is.string( fn ) ? fn : fn.toString();

      // worker code to exec
      var fnStr = '\n' + ( _p.requires.map(function( r ){
        return fnAsRequire( r );
      }) ).concat( _p.files.map(function( f ){
        if( useWW ){
          var wwifyFile = function( file ){
            if( file.match(/^\.\//) || file.match(/^\.\./) ){
              return window.location.origin + window.location.pathname + file;
            } else if( file.match(/^\//) ){
              return window.location.origin + '/' + file;
            }
            return file;
          };

          return 'importScripts("' + wwifyFile(f) + '");';
        } else if( useNode ) {
          return 'eval( require("fs").readFileSync("' + f + '", { encoding: "utf8" }) );';
        } else {
          throw 'External file `' + f + '` can not be required without any threading technology.';
        }
      }) ).concat([
        '( function(){',
          'var ret = (' + fnImplStr + ')(' + JSON.stringify(pass) + ');',
          'if( ret !== undefined ){ resolve(ret); }', // assume if ran fn returns defined value (incl. null), that we want to resolve to it
        '} )()\n'
      ]).join('\n');

      // because we've now consumed the requires, empty the list so we don't dupe on next run()
      _p.requires = [];
      _p.files = [];

      if( useWW ){
        var fnBlob, fnUrl;

        // add normalised thread api functions
        if( !threadTechAlreadyExists ){
          var fnPre = fnStr + '';

          fnStr = [
            'function _ref_(o){ return eval(o); };',
            'function broadcast(m){ return message(m); };', // alias
            'function message(m){ postMessage(m); };',
            'function listen(fn){',
            '  self.addEventListener("message", function(m){ ',
            '    if( typeof m === "object" && (m.data.$$eval || m.data === "$$start") ){',
            '    } else { ',
            '      fn( m.data );',
            '    }',
            '  });',
            '};',
            'self.addEventListener("message", function(m){  if( m.data.$$eval ){ eval( m.data.$$eval ); }  });',
            'function resolve(v){ postMessage({ $$resolve: v }); };',
            'function reject(v){ postMessage({ $$reject: v }); };'
          ].join('\n');

          fnStr += fnPre;

          fnBlob = new Blob([ fnStr ], {
            type: 'application/javascript'
          });
          fnUrl = window.URL.createObjectURL( fnBlob );
        }
        // create webworker and let it exec the serialised code
        var ww = _p.webworker = _p.webworker || new Worker( fnUrl );

        if( threadTechAlreadyExists ){ // then just exec new run() code
          ww.postMessage({
            $$eval: fnStr
          });
        }

        // worker messages => events
        var cb;
        ww.addEventListener('message', cb = function( m ){
          var isObject = is.object(m) && is.object( m.data );

          if( isObject && ('$$resolve' in m.data) ){
            ww.removeEventListener('message', cb); // done listening b/c resolve()

            resolve( m.data.$$resolve );
          } else if( isObject && ('$$reject' in m.data) ){
            ww.removeEventListener('message', cb); // done listening b/c reject()

            reject( m.data.$$reject );
          } else {
            self.trigger( new Event(m, { type: 'message', message: m.data }) );
          }
        }, false);

        if( !threadTechAlreadyExists ){
          ww.postMessage('$$start'); // start up the worker
        }

      } else if( useNode ){
        // create a new process

        if( !_p.child ){
          _p.child = ( __webpack_require__(139).fork( __webpack_require__(130).join(__dirname, 'thread-node-fork') ) );
        }

        var child = _p.child;

        // child process messages => events
        var cb;
        child.on('message', cb = function( m ){
          if( is.object(m) && ('$$resolve' in m) ){
            child.removeListener('message', cb); // done listening b/c resolve()

            resolve( m.$$resolve );
          } else if( is.object(m) && ('$$reject' in m) ){
            child.removeListener('message', cb); // done listening b/c reject()

            reject( m.$$reject );
          } else {
            self.trigger( new Event({}, { type: 'message', message: m }) );
          }
        });

        // ask the child process to eval the worker code
        child.send({
          $$eval: fnStr
        });

      } else { // use a fallback mechanism using a timeout

        var promiseResolve = resolve;
        var promiseReject = reject;

        var timer = _p.timer = _p.timer || {

          listeners: [],

          exec: function(){
            // as a string so it can't be mangled by minifiers and processors
            fnStr = [
              'function _ref_(o){ return eval(o); };',
              'function broadcast(m){ return message(m); };',
              'function message(m){ self.trigger( new Event({}, { type: "message", message: m }) ); };',
              'function listen(fn){ timer.listeners.push( fn ); };',
              'function resolve(v){ promiseResolve(v); };',
              'function reject(v){ promiseReject(v); };'
            ].join('\n') + fnStr;

            // the .run() code
            eval( fnStr ); // jshint ignore:line
          },

          message: function( m ){
            var ls = timer.listeners;

            for( var i = 0; i < ls.length; i++ ){
              var fn = ls[i];

              fn( m );
            }
          }

        };

        timer.exec();
      }

    }).then(function( v ){
      _p.running = false;
      _p.ran = true;

      self.trigger('ran');

      return v;
    });

    if( _p.queue == null ){
      _p.queue = runP; // i.e. first step of inductive promise chain (for queue)
    }

    return runP;
  },

  // send the thread a message
  message: function( m ){
    var _p = this._private;

    if( _p.webworker ){
      _p.webworker.postMessage( m );
    }

    if( _p.child ){
      _p.child.send( m );
    }

    if( _p.timer ){
      _p.timer.message( m );
    }

    return this; // chaining
  },

  stop: function(){
    var _p = this._private;

    if( _p.webworker ){
      _p.webworker.terminate();
    }

    if( _p.child ){
      _p.child.kill();
    }

    if( _p.timer ){
      // nothing we can do if we've run a timeout
    }

    _p.stopped = true;

    return this.trigger('stop'); // chaining
  },

  stopped: function(){
    return this._private.stopped;
  }

});

// turns a stringified function into a (re)named function
var fnAs = function( fn, name ){
  var fnStr = fn.toString();
  fnStr = fnStr.replace(/function\s*?\S*?\s*?\(/, 'function ' + name + '(');

  return fnStr;
};

var defineFnal = function( opts ){
  opts = opts || {};

  return function fnalImpl( fn, arg1 ){
    var fnStr = fnAs( fn, '_$_$_' + opts.name );

    this.require( fnStr );

    return this.run( [
      'function( data ){',
      '  var origResolve = resolve;',
      '  var res = [];',
      '  ',
      '  resolve = function( val ){',
      '    res.push( val );',
      '  };',
      '  ',
      '  var ret = data.' + opts.name + '( _$_$_' + opts.name + ( arguments.length > 1 ? ', ' + JSON.stringify(arg1) : '' ) + ' );',
      '  ',
      '  resolve = origResolve;',
      '  resolve( res.length > 0 ? res : ret );',
      '}'
    ].join('\n') );
  };
};

util.extend(thdfn, {
  reduce: defineFnal({ name: 'reduce' }),

  reduceRight: defineFnal({ name: 'reduceRight' }),

  map: defineFnal({ name: 'map' })
});

// aliases
var fn = thdfn;
fn.promise = fn.run;
fn.terminate = fn.halt = fn.stop;
fn.include = fn.require;

// pull in event apis
util.extend(thdfn, {
  on: define.on(),
  one: define.on({ unbindSelfOnTrigger: true }),
  off: define.off(),
  trigger: define.trigger()
});

define.eventAliasesOn( thdfn );

module.exports = Thread;

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Locks = (function () {
    function Locks() {
        this.locks = {};
    }
    Locks.prototype.add = function (id, x) {
        this.locks[id] = x;
    };
    Locks.prototype.clear = function () {
        this.locks = {};
    };
    Locks.prototype.isEmpty = function () {
        for (var l in this.locks)
            return false;
        return true;
    };
    Locks.prototype.apply = function (f) {
        for (var l in this.locks) {
            f(Number(l), this.locks[l]);
        }
    };
    return Locks;
}());
exports.Locks = Locks;
var Descent = (function () {
    function Descent(x, D, G) {
        if (G === void 0) { G = null; }
        this.D = D;
        this.G = G;
        this.threshold = 0.0001;
        this.numGridSnapNodes = 0;
        this.snapGridSize = 100;
        this.snapStrength = 1000;
        this.scaleSnapByMaxH = false;
        this.random = new PseudoRandom();
        this.project = null;
        this.x = x;
        this.k = x.length;
        var n = this.n = x[0].length;
        this.H = new Array(this.k);
        this.g = new Array(this.k);
        this.Hd = new Array(this.k);
        this.a = new Array(this.k);
        this.b = new Array(this.k);
        this.c = new Array(this.k);
        this.d = new Array(this.k);
        this.e = new Array(this.k);
        this.ia = new Array(this.k);
        this.ib = new Array(this.k);
        this.xtmp = new Array(this.k);
        this.locks = new Locks();
        this.minD = Number.MAX_VALUE;
        var i = n, j;
        while (i--) {
            j = n;
            while (--j > i) {
                var d = D[i][j];
                if (d > 0 && d < this.minD) {
                    this.minD = d;
                }
            }
        }
        if (this.minD === Number.MAX_VALUE)
            this.minD = 1;
        i = this.k;
        while (i--) {
            this.g[i] = new Array(n);
            this.H[i] = new Array(n);
            j = n;
            while (j--) {
                this.H[i][j] = new Array(n);
            }
            this.Hd[i] = new Array(n);
            this.a[i] = new Array(n);
            this.b[i] = new Array(n);
            this.c[i] = new Array(n);
            this.d[i] = new Array(n);
            this.e[i] = new Array(n);
            this.ia[i] = new Array(n);
            this.ib[i] = new Array(n);
            this.xtmp[i] = new Array(n);
        }
    }
    Descent.createSquareMatrix = function (n, f) {
        var M = new Array(n);
        for (var i = 0; i < n; ++i) {
            M[i] = new Array(n);
            for (var j = 0; j < n; ++j) {
                M[i][j] = f(i, j);
            }
        }
        return M;
    };
    Descent.prototype.offsetDir = function () {
        var _this = this;
        var u = new Array(this.k);
        var l = 0;
        for (var i = 0; i < this.k; ++i) {
            var x = u[i] = this.random.getNextBetween(0.01, 1) - 0.5;
            l += x * x;
        }
        l = Math.sqrt(l);
        return u.map(function (x) { return x *= _this.minD / l; });
    };
    Descent.prototype.computeDerivatives = function (x) {
        var _this = this;
        var n = this.n;
        if (n < 1)
            return;
        var i;
        var d = new Array(this.k);
        var d2 = new Array(this.k);
        var Huu = new Array(this.k);
        var maxH = 0;
        for (var u = 0; u < n; ++u) {
            for (i = 0; i < this.k; ++i)
                Huu[i] = this.g[i][u] = 0;
            for (var v = 0; v < n; ++v) {
                if (u === v)
                    continue;
                var maxDisplaces = n;
                while (maxDisplaces--) {
                    var sd2 = 0;
                    for (i = 0; i < this.k; ++i) {
                        var dx = d[i] = x[i][u] - x[i][v];
                        sd2 += d2[i] = dx * dx;
                    }
                    if (sd2 > 1e-9)
                        break;
                    var rd = this.offsetDir();
                    for (i = 0; i < this.k; ++i)
                        x[i][v] += rd[i];
                }
                var l = Math.sqrt(sd2);
                var D = this.D[u][v];
                var weight = this.G != null ? this.G[u][v] : 1;
                if (weight > 1 && l > D || !isFinite(D)) {
                    for (i = 0; i < this.k; ++i)
                        this.H[i][u][v] = 0;
                    continue;
                }
                if (weight > 1) {
                    weight = 1;
                }
                var D2 = D * D;
                var gs = 2 * weight * (l - D) / (D2 * l);
                var l3 = l * l * l;
                var hs = 2 * -weight / (D2 * l3);
                if (!isFinite(gs))
                    console.log(gs);
                for (i = 0; i < this.k; ++i) {
                    this.g[i][u] += d[i] * gs;
                    Huu[i] -= this.H[i][u][v] = hs * (l3 + D * (d2[i] - sd2) + l * sd2);
                }
            }
            for (i = 0; i < this.k; ++i)
                maxH = Math.max(maxH, this.H[i][u][u] = Huu[i]);
        }
        var r = this.snapGridSize / 2;
        var g = this.snapGridSize;
        var w = this.snapStrength;
        var k = w / (r * r);
        var numNodes = this.numGridSnapNodes;
        for (var u = 0; u < numNodes; ++u) {
            for (i = 0; i < this.k; ++i) {
                var xiu = this.x[i][u];
                var m = xiu / g;
                var f = m % 1;
                var q = m - f;
                var a = Math.abs(f);
                var dx = (a <= 0.5) ? xiu - q * g :
                    (xiu > 0) ? xiu - (q + 1) * g : xiu - (q - 1) * g;
                if (-r < dx && dx <= r) {
                    if (this.scaleSnapByMaxH) {
                        this.g[i][u] += maxH * k * dx;
                        this.H[i][u][u] += maxH * k;
                    }
                    else {
                        this.g[i][u] += k * dx;
                        this.H[i][u][u] += k;
                    }
                }
            }
        }
        if (!this.locks.isEmpty()) {
            this.locks.apply(function (u, p) {
                for (i = 0; i < _this.k; ++i) {
                    _this.H[i][u][u] += maxH;
                    _this.g[i][u] -= maxH * (p[i] - x[i][u]);
                }
            });
        }
    };
    Descent.dotProd = function (a, b) {
        var x = 0, i = a.length;
        while (i--)
            x += a[i] * b[i];
        return x;
    };
    Descent.rightMultiply = function (m, v, r) {
        var i = m.length;
        while (i--)
            r[i] = Descent.dotProd(m[i], v);
    };
    Descent.prototype.computeStepSize = function (d) {
        var numerator = 0, denominator = 0;
        for (var i = 0; i < this.k; ++i) {
            numerator += Descent.dotProd(this.g[i], d[i]);
            Descent.rightMultiply(this.H[i], d[i], this.Hd[i]);
            denominator += Descent.dotProd(d[i], this.Hd[i]);
        }
        if (denominator === 0 || !isFinite(denominator))
            return 0;
        return 1 * numerator / denominator;
    };
    Descent.prototype.reduceStress = function () {
        this.computeDerivatives(this.x);
        var alpha = this.computeStepSize(this.g);
        for (var i = 0; i < this.k; ++i) {
            this.takeDescentStep(this.x[i], this.g[i], alpha);
        }
        return this.computeStress();
    };
    Descent.copy = function (a, b) {
        var m = a.length, n = b[0].length;
        for (var i = 0; i < m; ++i) {
            for (var j = 0; j < n; ++j) {
                b[i][j] = a[i][j];
            }
        }
    };
    Descent.prototype.stepAndProject = function (x0, r, d, stepSize) {
        Descent.copy(x0, r);
        this.takeDescentStep(r[0], d[0], stepSize);
        if (this.project)
            this.project[0](x0[0], x0[1], r[0]);
        this.takeDescentStep(r[1], d[1], stepSize);
        if (this.project)
            this.project[1](r[0], x0[1], r[1]);
        for (var i = 2; i < this.k; i++)
            this.takeDescentStep(r[i], d[i], stepSize);
    };
    Descent.mApply = function (m, n, f) {
        var i = m;
        while (i-- > 0) {
            var j = n;
            while (j-- > 0)
                f(i, j);
        }
    };
    Descent.prototype.matrixApply = function (f) {
        Descent.mApply(this.k, this.n, f);
    };
    Descent.prototype.computeNextPosition = function (x0, r) {
        var _this = this;
        this.computeDerivatives(x0);
        var alpha = this.computeStepSize(this.g);
        this.stepAndProject(x0, r, this.g, alpha);
        if (this.project) {
            this.matrixApply(function (i, j) { return _this.e[i][j] = x0[i][j] - r[i][j]; });
            var beta = this.computeStepSize(this.e);
            beta = Math.max(0.2, Math.min(beta, 1));
            this.stepAndProject(x0, r, this.e, beta);
        }
    };
    Descent.prototype.run = function (iterations) {
        var stress = Number.MAX_VALUE, converged = false;
        while (!converged && iterations-- > 0) {
            var s = this.rungeKutta();
            converged = Math.abs(stress / s - 1) < this.threshold;
            stress = s;
        }
        return stress;
    };
    Descent.prototype.rungeKutta = function () {
        var _this = this;
        this.computeNextPosition(this.x, this.a);
        Descent.mid(this.x, this.a, this.ia);
        this.computeNextPosition(this.ia, this.b);
        Descent.mid(this.x, this.b, this.ib);
        this.computeNextPosition(this.ib, this.c);
        this.computeNextPosition(this.c, this.d);
        var disp = 0;
        this.matrixApply(function (i, j) {
            var x = (_this.a[i][j] + 2.0 * _this.b[i][j] + 2.0 * _this.c[i][j] + _this.d[i][j]) / 6.0, d = _this.x[i][j] - x;
            disp += d * d;
            _this.x[i][j] = x;
        });
        return disp;
    };
    Descent.mid = function (a, b, m) {
        Descent.mApply(a.length, a[0].length, function (i, j) {
            return m[i][j] = a[i][j] + (b[i][j] - a[i][j]) / 2.0;
        });
    };
    Descent.prototype.takeDescentStep = function (x, d, stepSize) {
        for (var i = 0; i < this.n; ++i) {
            x[i] = x[i] - stepSize * d[i];
        }
    };
    Descent.prototype.computeStress = function () {
        var stress = 0;
        for (var u = 0, nMinus1 = this.n - 1; u < nMinus1; ++u) {
            for (var v = u + 1, n = this.n; v < n; ++v) {
                var l = 0;
                for (var i = 0; i < this.k; ++i) {
                    var dx = this.x[i][u] - this.x[i][v];
                    l += dx * dx;
                }
                l = Math.sqrt(l);
                var d = this.D[u][v];
                if (!isFinite(d))
                    continue;
                var rl = d - l;
                var d2 = d * d;
                stress += rl * rl / d2;
            }
        }
        return stress;
    };
    return Descent;
}());
Descent.zeroDistance = 1e-10;
exports.Descent = Descent;
var PseudoRandom = (function () {
    function PseudoRandom(seed) {
        if (seed === void 0) { seed = 1; }
        this.seed = seed;
        this.a = 214013;
        this.c = 2531011;
        this.m = 2147483648;
        this.range = 32767;
    }
    PseudoRandom.prototype.getNext = function () {
        this.seed = (this.seed * this.a + this.c) % this.m;
        return (this.seed >> 16) / this.range;
    };
    PseudoRandom.prototype.getNextBetween = function (min, max) {
        return min + this.getNext() * (max - min);
    };
    return PseudoRandom;
}());
exports.PseudoRandom = PseudoRandom;
//# sourceMappingURL=descent.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function unionCount(a, b) {
    var u = {};
    for (var i in a)
        u[i] = {};
    for (var i in b)
        u[i] = {};
    return Object.keys(u).length;
}
function intersectionCount(a, b) {
    var n = 0;
    for (var i in a)
        if (typeof b[i] !== 'undefined')
            ++n;
    return n;
}
function getNeighbours(links, la) {
    var neighbours = {};
    var addNeighbours = function (u, v) {
        if (typeof neighbours[u] === 'undefined')
            neighbours[u] = {};
        neighbours[u][v] = {};
    };
    links.forEach(function (e) {
        var u = la.getSourceIndex(e), v = la.getTargetIndex(e);
        addNeighbours(u, v);
        addNeighbours(v, u);
    });
    return neighbours;
}
function computeLinkLengths(links, w, f, la) {
    var neighbours = getNeighbours(links, la);
    links.forEach(function (l) {
        var a = neighbours[la.getSourceIndex(l)];
        var b = neighbours[la.getTargetIndex(l)];
        la.setLength(l, 1 + w * f(a, b));
    });
}
function symmetricDiffLinkLengths(links, la, w) {
    if (w === void 0) { w = 1; }
    computeLinkLengths(links, w, function (a, b) { return Math.sqrt(unionCount(a, b) - intersectionCount(a, b)); }, la);
}
exports.symmetricDiffLinkLengths = symmetricDiffLinkLengths;
function jaccardLinkLengths(links, la, w) {
    if (w === void 0) { w = 1; }
    computeLinkLengths(links, w, function (a, b) {
        return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1 ? 0 : intersectionCount(a, b) / unionCount(a, b);
    }, la);
}
exports.jaccardLinkLengths = jaccardLinkLengths;
function generateDirectedEdgeConstraints(n, links, axis, la) {
    var components = stronglyConnectedComponents(n, links, la);
    var nodes = {};
    components.forEach(function (c, i) {
        return c.forEach(function (v) { return nodes[v] = i; });
    });
    var constraints = [];
    links.forEach(function (l) {
        var ui = la.getSourceIndex(l), vi = la.getTargetIndex(l), u = nodes[ui], v = nodes[vi];
        if (u !== v) {
            constraints.push({
                axis: axis,
                left: ui,
                right: vi,
                gap: la.getMinSeparation(l)
            });
        }
    });
    return constraints;
}
exports.generateDirectedEdgeConstraints = generateDirectedEdgeConstraints;
function stronglyConnectedComponents(numVertices, edges, la) {
    var nodes = [];
    var index = 0;
    var stack = [];
    var components = [];
    function strongConnect(v) {
        v.index = v.lowlink = index++;
        stack.push(v);
        v.onStack = true;
        for (var _i = 0, _a = v.out; _i < _a.length; _i++) {
            var w = _a[_i];
            if (typeof w.index === 'undefined') {
                strongConnect(w);
                v.lowlink = Math.min(v.lowlink, w.lowlink);
            }
            else if (w.onStack) {
                v.lowlink = Math.min(v.lowlink, w.index);
            }
        }
        if (v.lowlink === v.index) {
            var component = [];
            while (stack.length) {
                w = stack.pop();
                w.onStack = false;
                component.push(w);
                if (w === v)
                    break;
            }
            components.push(component.map(function (v) { return v.id; }));
        }
    }
    for (var i = 0; i < numVertices; i++) {
        nodes.push({ id: i, out: [] });
    }
    for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
        var e = edges_1[_i];
        var v_1 = nodes[la.getSourceIndex(e)], w = nodes[la.getTargetIndex(e)];
        v_1.out.push(w);
    }
    for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
        var v = nodes_1[_a];
        if (typeof v.index === 'undefined')
            strongConnect(v);
    }
    return components;
}
exports.stronglyConnectedComponents = stronglyConnectedComponents;
//# sourceMappingURL=linklengths.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PositionStats = (function () {
    function PositionStats(scale) {
        this.scale = scale;
        this.AB = 0;
        this.AD = 0;
        this.A2 = 0;
    }
    PositionStats.prototype.addVariable = function (v) {
        var ai = this.scale / v.scale;
        var bi = v.offset / v.scale;
        var wi = v.weight;
        this.AB += wi * ai * bi;
        this.AD += wi * ai * v.desiredPosition;
        this.A2 += wi * ai * ai;
    };
    PositionStats.prototype.getPosn = function () {
        return (this.AD - this.AB) / this.A2;
    };
    return PositionStats;
}());
exports.PositionStats = PositionStats;
var Constraint = (function () {
    function Constraint(left, right, gap, equality) {
        if (equality === void 0) { equality = false; }
        this.left = left;
        this.right = right;
        this.gap = gap;
        this.equality = equality;
        this.active = false;
        this.unsatisfiable = false;
        this.left = left;
        this.right = right;
        this.gap = gap;
        this.equality = equality;
    }
    Constraint.prototype.slack = function () {
        return this.unsatisfiable ? Number.MAX_VALUE
            : this.right.scale * this.right.position() - this.gap
                - this.left.scale * this.left.position();
    };
    return Constraint;
}());
exports.Constraint = Constraint;
var Variable = (function () {
    function Variable(desiredPosition, weight, scale) {
        if (weight === void 0) { weight = 1; }
        if (scale === void 0) { scale = 1; }
        this.desiredPosition = desiredPosition;
        this.weight = weight;
        this.scale = scale;
        this.offset = 0;
    }
    Variable.prototype.dfdv = function () {
        return 2.0 * this.weight * (this.position() - this.desiredPosition);
    };
    Variable.prototype.position = function () {
        return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
    };
    Variable.prototype.visitNeighbours = function (prev, f) {
        var ff = function (c, next) { return c.active && prev !== next && f(c, next); };
        this.cOut.forEach(function (c) { return ff(c, c.right); });
        this.cIn.forEach(function (c) { return ff(c, c.left); });
    };
    return Variable;
}());
exports.Variable = Variable;
var Block = (function () {
    function Block(v) {
        this.vars = [];
        v.offset = 0;
        this.ps = new PositionStats(v.scale);
        this.addVariable(v);
    }
    Block.prototype.addVariable = function (v) {
        v.block = this;
        this.vars.push(v);
        this.ps.addVariable(v);
        this.posn = this.ps.getPosn();
    };
    Block.prototype.updateWeightedPosition = function () {
        this.ps.AB = this.ps.AD = this.ps.A2 = 0;
        for (var i = 0, n = this.vars.length; i < n; ++i)
            this.ps.addVariable(this.vars[i]);
        this.posn = this.ps.getPosn();
    };
    Block.prototype.compute_lm = function (v, u, postAction) {
        var _this = this;
        var dfdv = v.dfdv();
        v.visitNeighbours(u, function (c, next) {
            var _dfdv = _this.compute_lm(next, v, postAction);
            if (next === c.right) {
                dfdv += _dfdv * c.left.scale;
                c.lm = _dfdv;
            }
            else {
                dfdv += _dfdv * c.right.scale;
                c.lm = -_dfdv;
            }
            postAction(c);
        });
        return dfdv / v.scale;
    };
    Block.prototype.populateSplitBlock = function (v, prev) {
        var _this = this;
        v.visitNeighbours(prev, function (c, next) {
            next.offset = v.offset + (next === c.right ? c.gap : -c.gap);
            _this.addVariable(next);
            _this.populateSplitBlock(next, v);
        });
    };
    Block.prototype.traverse = function (visit, acc, v, prev) {
        var _this = this;
        if (v === void 0) { v = this.vars[0]; }
        if (prev === void 0) { prev = null; }
        v.visitNeighbours(prev, function (c, next) {
            acc.push(visit(c));
            _this.traverse(visit, acc, next, v);
        });
    };
    Block.prototype.findMinLM = function () {
        var m = null;
        this.compute_lm(this.vars[0], null, function (c) {
            if (!c.equality && (m === null || c.lm < m.lm))
                m = c;
        });
        return m;
    };
    Block.prototype.findMinLMBetween = function (lv, rv) {
        this.compute_lm(lv, null, function () { });
        var m = null;
        this.findPath(lv, null, rv, function (c, next) {
            if (!c.equality && c.right === next && (m === null || c.lm < m.lm))
                m = c;
        });
        return m;
    };
    Block.prototype.findPath = function (v, prev, to, visit) {
        var _this = this;
        var endFound = false;
        v.visitNeighbours(prev, function (c, next) {
            if (!endFound && (next === to || _this.findPath(next, v, to, visit))) {
                endFound = true;
                visit(c, next);
            }
        });
        return endFound;
    };
    Block.prototype.isActiveDirectedPathBetween = function (u, v) {
        if (u === v)
            return true;
        var i = u.cOut.length;
        while (i--) {
            var c = u.cOut[i];
            if (c.active && this.isActiveDirectedPathBetween(c.right, v))
                return true;
        }
        return false;
    };
    Block.split = function (c) {
        c.active = false;
        return [Block.createSplitBlock(c.left), Block.createSplitBlock(c.right)];
    };
    Block.createSplitBlock = function (startVar) {
        var b = new Block(startVar);
        b.populateSplitBlock(startVar, null);
        return b;
    };
    Block.prototype.splitBetween = function (vl, vr) {
        var c = this.findMinLMBetween(vl, vr);
        if (c !== null) {
            var bs = Block.split(c);
            return { constraint: c, lb: bs[0], rb: bs[1] };
        }
        return null;
    };
    Block.prototype.mergeAcross = function (b, c, dist) {
        c.active = true;
        for (var i = 0, n = b.vars.length; i < n; ++i) {
            var v = b.vars[i];
            v.offset += dist;
            this.addVariable(v);
        }
        this.posn = this.ps.getPosn();
    };
    Block.prototype.cost = function () {
        var sum = 0, i = this.vars.length;
        while (i--) {
            var v = this.vars[i], d = v.position() - v.desiredPosition;
            sum += d * d * v.weight;
        }
        return sum;
    };
    return Block;
}());
exports.Block = Block;
var Blocks = (function () {
    function Blocks(vs) {
        this.vs = vs;
        var n = vs.length;
        this.list = new Array(n);
        while (n--) {
            var b = new Block(vs[n]);
            this.list[n] = b;
            b.blockInd = n;
        }
    }
    Blocks.prototype.cost = function () {
        var sum = 0, i = this.list.length;
        while (i--)
            sum += this.list[i].cost();
        return sum;
    };
    Blocks.prototype.insert = function (b) {
        b.blockInd = this.list.length;
        this.list.push(b);
    };
    Blocks.prototype.remove = function (b) {
        var last = this.list.length - 1;
        var swapBlock = this.list[last];
        this.list.length = last;
        if (b !== swapBlock) {
            this.list[b.blockInd] = swapBlock;
            swapBlock.blockInd = b.blockInd;
        }
    };
    Blocks.prototype.merge = function (c) {
        var l = c.left.block, r = c.right.block;
        var dist = c.right.offset - c.left.offset - c.gap;
        if (l.vars.length < r.vars.length) {
            r.mergeAcross(l, c, dist);
            this.remove(l);
        }
        else {
            l.mergeAcross(r, c, -dist);
            this.remove(r);
        }
    };
    Blocks.prototype.forEach = function (f) {
        this.list.forEach(f);
    };
    Blocks.prototype.updateBlockPositions = function () {
        this.list.forEach(function (b) { return b.updateWeightedPosition(); });
    };
    Blocks.prototype.split = function (inactive) {
        var _this = this;
        this.updateBlockPositions();
        this.list.forEach(function (b) {
            var v = b.findMinLM();
            if (v !== null && v.lm < Solver.LAGRANGIAN_TOLERANCE) {
                b = v.left.block;
                Block.split(v).forEach(function (nb) { return _this.insert(nb); });
                _this.remove(b);
                inactive.push(v);
            }
        });
    };
    return Blocks;
}());
exports.Blocks = Blocks;
var Solver = (function () {
    function Solver(vs, cs) {
        this.vs = vs;
        this.cs = cs;
        this.vs = vs;
        vs.forEach(function (v) {
            v.cIn = [], v.cOut = [];
        });
        this.cs = cs;
        cs.forEach(function (c) {
            c.left.cOut.push(c);
            c.right.cIn.push(c);
        });
        this.inactive = cs.map(function (c) { c.active = false; return c; });
        this.bs = null;
    }
    Solver.prototype.cost = function () {
        return this.bs.cost();
    };
    Solver.prototype.setStartingPositions = function (ps) {
        this.inactive = this.cs.map(function (c) { c.active = false; return c; });
        this.bs = new Blocks(this.vs);
        this.bs.forEach(function (b, i) { return b.posn = ps[i]; });
    };
    Solver.prototype.setDesiredPositions = function (ps) {
        this.vs.forEach(function (v, i) { return v.desiredPosition = ps[i]; });
    };
    Solver.prototype.mostViolated = function () {
        var minSlack = Number.MAX_VALUE, v = null, l = this.inactive, n = l.length, deletePoint = n;
        for (var i = 0; i < n; ++i) {
            var c = l[i];
            if (c.unsatisfiable)
                continue;
            var slack = c.slack();
            if (c.equality || slack < minSlack) {
                minSlack = slack;
                v = c;
                deletePoint = i;
                if (c.equality)
                    break;
            }
        }
        if (deletePoint !== n &&
            (minSlack < Solver.ZERO_UPPERBOUND && !v.active || v.equality)) {
            l[deletePoint] = l[n - 1];
            l.length = n - 1;
        }
        return v;
    };
    Solver.prototype.satisfy = function () {
        if (this.bs == null) {
            this.bs = new Blocks(this.vs);
        }
        this.bs.split(this.inactive);
        var v = null;
        while ((v = this.mostViolated()) && (v.equality || v.slack() < Solver.ZERO_UPPERBOUND && !v.active)) {
            var lb = v.left.block, rb = v.right.block;
            if (lb !== rb) {
                this.bs.merge(v);
            }
            else {
                if (lb.isActiveDirectedPathBetween(v.right, v.left)) {
                    v.unsatisfiable = true;
                    continue;
                }
                var split = lb.splitBetween(v.left, v.right);
                if (split !== null) {
                    this.bs.insert(split.lb);
                    this.bs.insert(split.rb);
                    this.bs.remove(lb);
                    this.inactive.push(split.constraint);
                }
                else {
                    v.unsatisfiable = true;
                    continue;
                }
                if (v.slack() >= 0) {
                    this.inactive.push(v);
                }
                else {
                    this.bs.merge(v);
                }
            }
        }
    };
    Solver.prototype.solve = function () {
        this.satisfy();
        var lastcost = Number.MAX_VALUE, cost = this.bs.cost();
        while (Math.abs(lastcost - cost) > 0.0001) {
            this.satisfy();
            lastcost = cost;
            cost = this.bs.cost();
        }
        return cost;
    };
    return Solver;
}());
Solver.LAGRANGIAN_TOLERANCE = -1e-4;
Solver.ZERO_UPPERBOUND = -1e-10;
exports.Solver = Solver;
function removeOverlapInOneDimension(spans, lowerBound, upperBound) {
    var vs = spans.map(function (s) { return new Variable(s.desiredCenter); });
    var cs = [];
    var n = spans.length;
    for (var i = 0; i < n - 1; i++) {
        var left = spans[i], right = spans[i + 1];
        cs.push(new Constraint(vs[i], vs[i + 1], (left.size + right.size) / 2));
    }
    var leftMost = vs[0], rightMost = vs[n - 1], leftMostSize = spans[0].size / 2, rightMostSize = spans[n - 1].size / 2;
    var vLower = null, vUpper = null;
    if (lowerBound) {
        vLower = new Variable(lowerBound, leftMost.weight * 1000);
        vs.push(vLower);
        cs.push(new Constraint(vLower, leftMost, leftMostSize));
    }
    if (upperBound) {
        vUpper = new Variable(upperBound, rightMost.weight * 1000);
        vs.push(vUpper);
        cs.push(new Constraint(rightMost, vUpper, rightMostSize));
    }
    var solver = new Solver(vs, cs);
    solver.solve();
    return {
        newCenters: vs.slice(0, spans.length).map(function (v) { return v.position(); }),
        lowerBound: vLower ? vLower.position() : leftMost.position() - leftMostSize,
        upperBound: vUpper ? vUpper.position() : rightMost.position() + rightMostSize
    };
}
exports.removeOverlapInOneDimension = removeOverlapInOneDimension;
//# sourceMappingURL=vpsc.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

// represents a node or an edge
var Element = function( cy, params, restore ){
  var self = this;
  restore = (restore === undefined || restore ? true : false);

  if( cy === undefined || params === undefined || !is.core( cy ) ){
    util.error( 'An element must have a core reference and parameters set' );
    return;
  }

  var group = params.group;

  // try to automatically infer the group if unspecified
  if( group == null ){
    if( params.data && params.data.source != null && params.data.target != null ){
      group = 'edges';
    } else {
      group = 'nodes';
    }
  }

  // validate group
  if( group !== 'nodes' && group !== 'edges' ){
    util.error( 'An element must be of type `nodes` or `edges`; you specified `' + group + '`' );
    return;
  }

  // make the element array-like, just like a collection
  this.length = 1;
  this[0] = this;

  // NOTE: when something is added here, add also to ele.json()
  this._private = {
    cy: cy,
    single: true, // indicates this is an element
    data: params.data || {}, // data object
    position: params.position || {}, // (x, y) position pair
    autoWidth: undefined, // width and height of nodes calculated by the renderer when set to special 'auto' value
    autoHeight: undefined,
    listeners: [], // array of bound listeners
    group: group, // string; 'nodes' or 'edges'
    style: {}, // properties as set by the style
    rstyle: {}, // properties for style sent from the renderer to the core
    styleCxts: [], // applied style contexts from the styler
    removed: true, // whether it's inside the vis; true if removed (set true here since we call restore)
    selected: params.selected ? true : false, // whether it's selected
    selectable: params.selectable === undefined ? true : ( params.selectable ? true : false ), // whether it's selectable
    locked: params.locked ? true : false, // whether the element is locked (cannot be moved)
    grabbed: false, // whether the element is grabbed by the mouse; renderer sets this privately
    grabbable: params.grabbable === undefined ? true : ( params.grabbable ? true : false ), // whether the element can be grabbed
    active: false, // whether the element is active from user interaction
    classes: {}, // map ( className => true )
    animation: { // object for currently-running animations
      current: [],
      queue: []
    },
    rscratch: {}, // object in which the renderer can store information
    scratch: params.scratch || {}, // scratch objects
    edges: [], // array of connected edges
    children: [], // array of children
    traversalCache: {} // cache of output of traversal functions
  };

  // renderedPosition overrides if specified
  if( params.renderedPosition ){
    var rpos = params.renderedPosition;
    var pan = cy.pan();
    var zoom = cy.zoom();

    this._private.position = {
      x: (rpos.x - pan.x) / zoom,
      y: (rpos.y - pan.y) / zoom
    };
  }

  if( is.string( params.classes ) ){
    var classes = params.classes.split( /\s+/ );
    for( var i = 0, l = classes.length; i < l; i++ ){
      var cls = classes[ i ];
      if( !cls || cls === '' ){ continue; }

      self._private.classes[ cls ] = true;
    }
  }

  if( params.style || params.css ){
    cy.style().applyBypass( this, params.style || params.css );
  }

  if( restore === undefined || restore ){
    this.restore();
  }

};

module.exports = Element;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var zIndexSort = function( a, b ){
  var cy = a.cy();
  var zDiff = a.pstyle( 'z-index' ).value - b.pstyle( 'z-index' ).value;
  var depthA = 0;
  var depthB = 0;
  var hasCompoundNodes = cy.hasCompoundNodes();
  var aIsNode = a.isNode();
  var aIsEdge = !aIsNode;
  var bIsNode = b.isNode();
  var bIsEdge = !bIsNode;

  // no need to calculate element depth if there is no compound node
  if( hasCompoundNodes ){
    depthA = a.zDepth();
    depthB = b.zDepth();
  }

  var depthDiff = depthA - depthB;
  var sameDepth = depthDiff === 0;

  if( sameDepth ){

    if( aIsNode && bIsEdge ){
      return 1; // 'a' is a node, it should be drawn later

    } else if( aIsEdge && bIsNode ){
      return -1; // 'a' is an edge, it should be drawn first

    } else { // both nodes or both edges
      if( zDiff === 0 ){ // same z-index => compare indices in the core (order added to graph w/ last on top)
        return a.poolIndex() - b.poolIndex();
      } else {
        return zDiff;
      }
    }

  // elements on different level
  } else {
    return depthDiff; // deeper element should be drawn later
  }

};

module.exports = zIndexSort;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var window = __webpack_require__( 4 );
var util = __webpack_require__( 1 );
var Collection = __webpack_require__( 6 );
var is = __webpack_require__( 0 );
var Promise = __webpack_require__( 5 );
var define = __webpack_require__( 3 );

var Core = function( opts ){
  var cy = this;

  opts = util.extend( {}, opts );

  var container = opts.container;

  // allow for passing a wrapped jquery object
  // e.g. cytoscape({ container: $('#cy') })
  if( container && !is.htmlElement( container ) && is.htmlElement( container[0] ) ){
    container = container[0];
  }

  var reg = container ? container._cyreg : null; // e.g. already registered some info (e.g. readies) via jquery
  reg = reg || {};

  if( reg && reg.cy ){
    reg.cy.destroy();

    reg = {}; // old instance => replace reg completely
  }

  var readies = reg.readies = reg.readies || [];

  if( container ){ container._cyreg = reg; } // make sure container assoc'd reg points to this cy
  reg.cy = cy;

  var head = window !== undefined && container !== undefined && !opts.headless;
  var options = opts;
  options.layout = util.extend( { name: head ? 'grid' : 'null' }, options.layout );
  options.renderer = util.extend( { name: head ? 'canvas' : 'null' }, options.renderer );

  var defVal = function( def, val, altVal ){
    if( val !== undefined ){
      return val;
    } else if( altVal !== undefined ){
      return altVal;
    } else {
      return def;
    }
  };

  var _p = this._private = {
    container: container, // html dom ele container
    ready: false, // whether ready has been triggered
    initrender: false, // has initrender has been triggered
    options: options, // cached options
    elements: new Collection( this ), // elements in the graph
    listeners: [], // list of listeners
    aniEles: new Collection( this ), // elements being animated
    scratch: {}, // scratch object for core
    layout: null,
    renderer: null,
    notificationsEnabled: true, // whether notifications are sent to the renderer
    minZoom: 1e-50,
    maxZoom: 1e50,
    zoomingEnabled: defVal( true, options.zoomingEnabled ),
    userZoomingEnabled: defVal( true, options.userZoomingEnabled ),
    panningEnabled: defVal( true, options.panningEnabled ),
    userPanningEnabled: defVal( true, options.userPanningEnabled ),
    boxSelectionEnabled: defVal( true, options.boxSelectionEnabled ),
    autolock: defVal( false, options.autolock, options.autolockNodes ),
    autoungrabify: defVal( false, options.autoungrabify, options.autoungrabifyNodes ),
    autounselectify: defVal( false, options.autounselectify ),
    styleEnabled: options.styleEnabled === undefined ? head : options.styleEnabled,
    zoom: is.number( options.zoom ) ? options.zoom : 1,
    pan: {
      x: is.plainObject( options.pan ) && is.number( options.pan.x ) ? options.pan.x : 0,
      y: is.plainObject( options.pan ) && is.number( options.pan.y ) ? options.pan.y : 0
    },
    animation: { // object for currently-running animations
      current: [],
      queue: []
    },
    hasCompoundNodes: false
  };

  // set selection type
  var selType = options.selectionType;
  if( selType === undefined || (selType !== 'additive' && selType !== 'single') ){
    // then set default

    _p.selectionType = 'single';
  } else {
    _p.selectionType = selType;
  }

  // init zoom bounds
  if( is.number( options.minZoom ) && is.number( options.maxZoom ) && options.minZoom < options.maxZoom ){
    _p.minZoom = options.minZoom;
    _p.maxZoom = options.maxZoom;
  } else if( is.number( options.minZoom ) && options.maxZoom === undefined ){
    _p.minZoom = options.minZoom;
  } else if( is.number( options.maxZoom ) && options.minZoom === undefined ){
    _p.maxZoom = options.maxZoom;
  }

  var loadExtData = function( extData, next ){
    var anyIsPromise = extData.some( is.promise );

    if( anyIsPromise ){
      return Promise.all( extData ).then( next ); // load all data asynchronously, then exec rest of init
    } else {
      next( extData ); // exec synchronously for convenience
    }
  };

  // create the renderer
  cy.initRenderer( util.extend( {
    hideEdgesOnViewport: options.hideEdgesOnViewport,
    textureOnViewport: options.textureOnViewport,
    wheelSensitivity: is.number( options.wheelSensitivity ) && options.wheelSensitivity > 0 ? options.wheelSensitivity : 1,
    motionBlur: options.motionBlur === undefined ? false : options.motionBlur, // off by default
    motionBlurOpacity: options.motionBlurOpacity === undefined ? 0.05 : options.motionBlurOpacity,
    pixelRatio: is.number( options.pixelRatio ) && options.pixelRatio > 0 ? options.pixelRatio : undefined,
    desktopTapThreshold: options.desktopTapThreshold === undefined ? 4 : options.desktopTapThreshold,
    touchTapThreshold: options.touchTapThreshold === undefined ? 8 : options.touchTapThreshold
  }, options.renderer ) );

  loadExtData([ options.style, options.elements ], function( thens ){
    var initStyle = thens[0];
    var initEles = thens[1];

    // init style
    if( _p.styleEnabled ){
      cy.setStyle( initStyle );
    }

    // trigger the passed function for the `initrender` event
    if( options.initrender ){
      cy.on( 'initrender', options.initrender );
      cy.on( 'initrender', function(){
        _p.initrender = true;
      } );
    }

    // initial load
    cy.load( initEles, function(){ // onready
      cy.startAnimationLoop();
      _p.ready = true;

      // if a ready callback is specified as an option, the bind it
      if( is.fn( options.ready ) ){
        cy.on( 'ready', options.ready );
      }

      // bind all the ready handlers registered before creating this instance
      for( var i = 0; i < readies.length; i++ ){
        var fn = readies[ i ];
        cy.on( 'ready', fn );
      }
      if( reg ){ reg.readies = []; } // clear b/c we've bound them all and don't want to keep it around in case a new core uses the same div etc

      cy.trigger( 'ready' );
    }, options.done );

  } );
};

var corefn = Core.prototype; // short alias

util.extend( corefn, {
  instanceString: function(){
    return 'core';
  },

  isReady: function(){
    return this._private.ready;
  },

  ready: function( fn ){
    if( this.isReady() ){
      this.trigger( 'ready', [], fn ); // just calls fn as though triggered via ready event
    } else {
      this.on( 'ready', fn );
    }

    return this;
  },

  initrender: function(){
    return this._private.initrender;
  },

  destroy: function(){
    var cy = this;

    cy.stopAnimationLoop();

    cy.destroyRenderer();

    return cy;
  },

  hasElementWithId: function( id ){
    return this._private.elements.hasElementWithId( id );
  },

  getElementById: function( id ){
    return this._private.elements.getElementById( id );
  },

  selectionType: function(){
    return this._private.selectionType;
  },

  hasCompoundNodes: function(){
    return this._private.hasCompoundNodes;
  },

  headless: function(){
    return this._private.options.renderer.name === 'null';
  },

  styleEnabled: function(){
    return this._private.styleEnabled;
  },

  addToPool: function( eles ){
    this._private.elements.merge( eles );

    return this; // chaining
  },

  removeFromPool: function( eles ){
    this._private.elements.unmerge( eles );

    return this;
  },

  container: function(){
    return this._private.container;
  },

  options: function(){
    return util.copy( this._private.options );
  },

  json: function( obj ){
    var cy = this;
    var _p = cy._private;
    var eles = cy.mutableElements();

    if( is.plainObject( obj ) ){ // set

      cy.startBatch();

      if( obj.elements ){
        var idInJson = {};

        var updateEles = function( jsons, gr ){
          for( var i = 0; i < jsons.length; i++ ){
            var json = jsons[ i ];
            var id = json.data.id;
            var ele = cy.getElementById( id );

            idInJson[ id ] = true;

            if( ele.length !== 0 ){ // existing element should be updated
              ele.json( json );
            } else { // otherwise should be added
              if( gr ){
                cy.add( util.extend( { group: gr }, json ) );
              } else {
                cy.add( json );
              }
            }
          }
        };

        if( is.array( obj.elements ) ){ // elements: []
          updateEles( obj.elements );

        } else { // elements: { nodes: [], edges: [] }
          var grs = [ 'nodes', 'edges' ];
          for( var i = 0; i < grs.length; i++ ){
            var gr = grs[ i ];
            var elements = obj.elements[ gr ];

            if( is.array( elements ) ){
              updateEles( elements, gr );
            }
          }
        }

        // elements not specified in json should be removed
        eles.stdFilter( function( ele ){
          return !idInJson[ ele.id() ];
        } ).remove();
      }

      if( obj.style ){
        cy.style( obj.style );
      }

      if( obj.zoom != null && obj.zoom !== _p.zoom ){
        cy.zoom( obj.zoom );
      }

      if( obj.pan ){
        if( obj.pan.x !== _p.pan.x || obj.pan.y !== _p.pan.y ){
          cy.pan( obj.pan );
        }
      }

      var fields = [
        'minZoom', 'maxZoom', 'zoomingEnabled', 'userZoomingEnabled',
        'panningEnabled', 'userPanningEnabled',
        'boxSelectionEnabled',
        'autolock', 'autoungrabify', 'autounselectify'
      ];

      for( var i = 0; i < fields.length; i++ ){
        var f = fields[ i ];

        if( obj[ f ] != null ){
          cy[ f ]( obj[ f ] );
        }
      }

      cy.endBatch();

      return this; // chaining
    } else if( obj === undefined ){ // get
      var json = {};

      json.elements = {};
      eles.forEach( function( ele ){
        var group = ele.group();

        if( !json.elements[ group ] ){
          json.elements[ group ] = [];
        }

        json.elements[ group ].push( ele.json() );
      } );

      if( this._private.styleEnabled ){
        json.style = cy.style().json();
      }

      json.zoomingEnabled = cy._private.zoomingEnabled;
      json.userZoomingEnabled = cy._private.userZoomingEnabled;
      json.zoom = cy._private.zoom;
      json.minZoom = cy._private.minZoom;
      json.maxZoom = cy._private.maxZoom;
      json.panningEnabled = cy._private.panningEnabled;
      json.userPanningEnabled = cy._private.userPanningEnabled;
      json.pan = util.copy( cy._private.pan );
      json.boxSelectionEnabled = cy._private.boxSelectionEnabled;
      json.renderer = util.copy( cy._private.options.renderer );
      json.hideEdgesOnViewport = cy._private.options.hideEdgesOnViewport;
      json.textureOnViewport = cy._private.options.textureOnViewport;
      json.wheelSensitivity = cy._private.options.wheelSensitivity;
      json.motionBlur = cy._private.options.motionBlur;

      return json;
    }
  },

  scratch: define.data( {
    field: 'scratch',
    bindingEvent: 'scratch',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'scratch',
    settingTriggersEvent: true,
    triggerFnName: 'trigger',
    allowGetting: true
  } ),

  removeScratch: define.removeData( {
    field: 'scratch',
    event: 'scratch',
    triggerFnName: 'trigger',
    triggerEvent: true
  } )

} );

[
  __webpack_require__( 64 ),
  __webpack_require__( 65 ),
  __webpack_require__( 66 ),
  __webpack_require__( 67 ),
  __webpack_require__( 68 ),
  __webpack_require__( 69 ),
  __webpack_require__( 70 ),
  __webpack_require__( 71 ),
  __webpack_require__( 72 ),
  __webpack_require__( 73 )
].forEach( function( props ){
  util.extend( corefn, props );
} );

module.exports = Core;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var fullFpsTime = 1000/60; // assume 60 frames per second

module.exports = {
  setupDequeueing: function( opts ){
    return function setupDequeueingImpl(){
      var self = this;
      var r = this.renderer;

      if( self.dequeueingSetup ){
        return;
      } else {
        self.dequeueingSetup = true;
      }

      var queueRedraw = util.debounce( function(){
        r.redrawHint( 'eles', true );
        r.redrawHint( 'drag', true );

        r.redraw();
      }, opts.deqRedrawThreshold );

      var dequeue = function( willDraw, frameStartTime ){
        var startTime = util.performanceNow();
        var avgRenderTime = r.averageRedrawTime;
        var renderTime = r.lastRedrawTime;
        var deqd = [];
        var extent = r.cy.extent();
        var pixelRatio = r.getPixelRatio();

        while( true ){
          var now = util.performanceNow();
          var duration = now - startTime;
          var frameDuration = now - frameStartTime;

          if( renderTime < fullFpsTime ){
            // if we're rendering faster than the ideal fps, then do dequeueing
            // during all of the remaining frame time

            var timeAvailable = fullFpsTime - ( willDraw ? avgRenderTime : 0 );

            if( frameDuration >= opts.deqFastCost * timeAvailable ){
              break;
            }
          } else {
            if( willDraw ){
              if(
                   duration >= opts.deqCost * renderTime
                || duration >= opts.deqAvgCost * avgRenderTime
              ){
                break;
              }
            } else if( frameDuration >= opts.deqNoDrawCost * fullFpsTime ){
              break;
            }
          }

          var thisDeqd = opts.deq( self, pixelRatio, extent );

          if( thisDeqd.length > 0 ){
            for( var i = 0; i < thisDeqd.length; i++ ){
              deqd.push( thisDeqd[i] );
            }
          } else {
            break;
          }
        }

        // callbacks on dequeue
        if( deqd.length > 0 ){
          opts.onDeqd( self, deqd );

          if( !willDraw && opts.shouldRedraw( self, deqd, pixelRatio, extent ) ){
            queueRedraw();
          }
        }
      };

      var priority = opts.priority || util.noop;

      r.beforeRender( dequeue, priority( self ) );
    };
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var Selector = __webpack_require__( 10 );

var Style = function( cy ){

  if( !(this instanceof Style) ){
    return new Style( cy );
  }

  if( !is.core( cy ) ){
    util.error( 'A style must have a core reference' );
    return;
  }

  this._private = {
    cy: cy,
    coreStyle: {}
  };

  this.length = 0;

  this.resetToDefault();
};

var styfn = Style.prototype;

styfn.instanceString = function(){
  return 'style';
};

// remove all contexts
styfn.clear = function(){
  for( var i = 0; i < this.length; i++ ){
    this[ i ] = undefined;
  }
  this.length = 0;

  var _p = this._private;

  _p.newStyle = true;

  return this; // chaining
};

styfn.resetToDefault = function(){
  this.clear();
  this.addDefaultStylesheet();

  return this;
};

// builds a style object for the 'core' selector
styfn.core = function(){
  return this._private.coreStyle;
};

// create a new context from the specified selector string and switch to that context
styfn.selector = function( selectorStr ){
  // 'core' is a special case and does not need a selector
  var selector = selectorStr === 'core' ? null : new Selector( selectorStr );

  var i = this.length++; // new context means new index
  this[ i ] = {
    selector: selector,
    properties: [],
    mappedProperties: [],
    index: i
  };

  return this; // chaining
};

// add one or many css rules to the current context
styfn.css = function(){
  var self = this;
  var args = arguments;

  switch( args.length ){
  case 1:
    var map = args[0];

    for( var i = 0; i < self.properties.length; i++ ){
      var prop = self.properties[ i ];
      var mapVal = map[ prop.name ];

      if( mapVal === undefined ){
        mapVal = map[ util.dash2camel( prop.name ) ];
      }

      if( mapVal !== undefined ){
        this.cssRule( prop.name, mapVal );
      }
    }

    break;

  case 2:
    this.cssRule( args[0], args[1] );
    break;

  default:
    break; // do nothing if args are invalid
  }

  return this; // chaining
};
styfn.style = styfn.css;

// add a single css rule to the current context
styfn.cssRule = function( name, value ){
  // name-value pair
  var property = this.parse( name, value );

  // add property to current context if valid
  if( property ){
    var i = this.length - 1;
    this[ i ].properties.push( property );
    this[ i ].properties[ property.name ] = property; // allow access by name as well

    if( property.name.match( /pie-(\d+)-background-size/ ) && property.value ){
      this._private.hasPie = true;
    }

    if( property.mapped ){
      this[ i ].mappedProperties.push( property );
    }

    // add to core style if necessary
    var currentSelectorIsCore = !this[ i ].selector;
    if( currentSelectorIsCore ){
      this._private.coreStyle[ property.name ] = property;
    }
  }

  return this; // chaining
};

// static function
Style.fromJson = function( cy, json ){
  var style = new Style( cy );

  style.fromJson( json );

  return style;
};

Style.fromString = function( cy, string ){
  return new Style( cy ).fromString( string );
};

[
  __webpack_require__( 109 ),
  __webpack_require__( 110 ),
  __webpack_require__( 111 ),
  __webpack_require__( 112 ),
  __webpack_require__( 113 ),
  __webpack_require__( 116 ),
  __webpack_require__( 115 ),
  __webpack_require__( 114 )
].forEach( function( props ){
  util.extend( styfn, props );
} );


Style.types = styfn.types;
Style.properties = styfn.properties;

module.exports = Style;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function memoize( fn, keyFn ){
  if( !keyFn ){
    keyFn = function(){
      if( arguments.length === 1 ){
        return arguments[0];
      } else if( arguments.length === 0 ){
        return 'undefined';
      }

      var args = [];

      for( var i = 0; i < arguments.length; i++ ){
        args.push( arguments[ i ] );
      }

      return args.join( '$' );
    };
  }

  var memoizedFn = function(){
    var self = this;
    var args = arguments;
    var ret;
    var k = keyFn.apply( self, args );
    var cache = memoizedFn.cache;

    if( !(ret = cache[ k ]) ){
      ret = cache[ k ] = fn.apply( self, args );
    }

    return ret;
  };

  memoizedFn.cache = {};

  return memoizedFn;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var rectangle_1 = __webpack_require__(8);
var Point = (function () {
    function Point() {
    }
    return Point;
}());
exports.Point = Point;
var LineSegment = (function () {
    function LineSegment(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    return LineSegment;
}());
exports.LineSegment = LineSegment;
var PolyPoint = (function (_super) {
    __extends(PolyPoint, _super);
    function PolyPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PolyPoint;
}(Point));
exports.PolyPoint = PolyPoint;
function isLeft(P0, P1, P2) {
    return (P1.x - P0.x) * (P2.y - P0.y) - (P2.x - P0.x) * (P1.y - P0.y);
}
exports.isLeft = isLeft;
function above(p, vi, vj) {
    return isLeft(p, vi, vj) > 0;
}
function below(p, vi, vj) {
    return isLeft(p, vi, vj) < 0;
}
function ConvexHull(S) {
    var P = S.slice(0).sort(function (a, b) { return a.x !== b.x ? b.x - a.x : b.y - a.y; });
    var n = S.length, i;
    var minmin = 0;
    var xmin = P[0].x;
    for (i = 1; i < n; ++i) {
        if (P[i].x !== xmin)
            break;
    }
    var minmax = i - 1;
    var H = [];
    H.push(P[minmin]);
    if (minmax === n - 1) {
        if (P[minmax].y !== P[minmin].y)
            H.push(P[minmax]);
    }
    else {
        var maxmin, maxmax = n - 1;
        var xmax = P[n - 1].x;
        for (i = n - 2; i >= 0; i--)
            if (P[i].x !== xmax)
                break;
        maxmin = i + 1;
        i = minmax;
        while (++i <= maxmin) {
            if (isLeft(P[minmin], P[maxmin], P[i]) >= 0 && i < maxmin)
                continue;
            while (H.length > 1) {
                if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0)
                    break;
                else
                    H.length -= 1;
            }
            if (i != minmin)
                H.push(P[i]);
        }
        if (maxmax != maxmin)
            H.push(P[maxmax]);
        var bot = H.length;
        i = maxmin;
        while (--i >= minmax) {
            if (isLeft(P[maxmax], P[minmax], P[i]) >= 0 && i > minmax)
                continue;
            while (H.length > bot) {
                if (isLeft(H[H.length - 2], H[H.length - 1], P[i]) > 0)
                    break;
                else
                    H.length -= 1;
            }
            if (i != minmin)
                H.push(P[i]);
        }
    }
    return H;
}
exports.ConvexHull = ConvexHull;
function clockwiseRadialSweep(p, P, f) {
    P.slice(0).sort(function (a, b) { return Math.atan2(a.y - p.y, a.x - p.x) - Math.atan2(b.y - p.y, b.x - p.x); }).forEach(f);
}
exports.clockwiseRadialSweep = clockwiseRadialSweep;
function nextPolyPoint(p, ps) {
    if (p.polyIndex === ps.length - 1)
        return ps[0];
    return ps[p.polyIndex + 1];
}
function prevPolyPoint(p, ps) {
    if (p.polyIndex === 0)
        return ps[ps.length - 1];
    return ps[p.polyIndex - 1];
}
function tangent_PointPolyC(P, V) {
    return { rtan: Rtangent_PointPolyC(P, V), ltan: Ltangent_PointPolyC(P, V) };
}
function Rtangent_PointPolyC(P, V) {
    var n = V.length - 1;
    var a, b, c;
    var upA, dnC;
    if (below(P, V[1], V[0]) && !above(P, V[n - 1], V[0]))
        return 0;
    for (a = 0, b = n;;) {
        if (b - a === 1)
            if (above(P, V[a], V[b]))
                return a;
            else
                return b;
        c = Math.floor((a + b) / 2);
        dnC = below(P, V[c + 1], V[c]);
        if (dnC && !above(P, V[c - 1], V[c]))
            return c;
        upA = above(P, V[a + 1], V[a]);
        if (upA) {
            if (dnC)
                b = c;
            else {
                if (above(P, V[a], V[c]))
                    b = c;
                else
                    a = c;
            }
        }
        else {
            if (!dnC)
                a = c;
            else {
                if (below(P, V[a], V[c]))
                    b = c;
                else
                    a = c;
            }
        }
    }
}
function Ltangent_PointPolyC(P, V) {
    var n = V.length - 1;
    var a, b, c;
    var dnA, dnC;
    if (above(P, V[n - 1], V[0]) && !below(P, V[1], V[0]))
        return 0;
    for (a = 0, b = n;;) {
        if (b - a === 1)
            if (below(P, V[a], V[b]))
                return a;
            else
                return b;
        c = Math.floor((a + b) / 2);
        dnC = below(P, V[c + 1], V[c]);
        if (above(P, V[c - 1], V[c]) && !dnC)
            return c;
        dnA = below(P, V[a + 1], V[a]);
        if (dnA) {
            if (!dnC)
                b = c;
            else {
                if (below(P, V[a], V[c]))
                    b = c;
                else
                    a = c;
            }
        }
        else {
            if (dnC)
                a = c;
            else {
                if (above(P, V[a], V[c]))
                    b = c;
                else
                    a = c;
            }
        }
    }
}
function tangent_PolyPolyC(V, W, t1, t2, cmp1, cmp2) {
    var ix1, ix2;
    ix1 = t1(W[0], V);
    ix2 = t2(V[ix1], W);
    var done = false;
    while (!done) {
        done = true;
        while (true) {
            if (ix1 === V.length - 1)
                ix1 = 0;
            if (cmp1(W[ix2], V[ix1], V[ix1 + 1]))
                break;
            ++ix1;
        }
        while (true) {
            if (ix2 === 0)
                ix2 = W.length - 1;
            if (cmp2(V[ix1], W[ix2], W[ix2 - 1]))
                break;
            --ix2;
            done = false;
        }
    }
    return { t1: ix1, t2: ix2 };
}
exports.tangent_PolyPolyC = tangent_PolyPolyC;
function LRtangent_PolyPolyC(V, W) {
    var rl = RLtangent_PolyPolyC(W, V);
    return { t1: rl.t2, t2: rl.t1 };
}
exports.LRtangent_PolyPolyC = LRtangent_PolyPolyC;
function RLtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Ltangent_PointPolyC, above, below);
}
exports.RLtangent_PolyPolyC = RLtangent_PolyPolyC;
function LLtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Ltangent_PointPolyC, Ltangent_PointPolyC, below, below);
}
exports.LLtangent_PolyPolyC = LLtangent_PolyPolyC;
function RRtangent_PolyPolyC(V, W) {
    return tangent_PolyPolyC(V, W, Rtangent_PointPolyC, Rtangent_PointPolyC, above, above);
}
exports.RRtangent_PolyPolyC = RRtangent_PolyPolyC;
var BiTangent = (function () {
    function BiTangent(t1, t2) {
        this.t1 = t1;
        this.t2 = t2;
    }
    return BiTangent;
}());
exports.BiTangent = BiTangent;
var BiTangents = (function () {
    function BiTangents() {
    }
    return BiTangents;
}());
exports.BiTangents = BiTangents;
var TVGPoint = (function (_super) {
    __extends(TVGPoint, _super);
    function TVGPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TVGPoint;
}(Point));
exports.TVGPoint = TVGPoint;
var VisibilityVertex = (function () {
    function VisibilityVertex(id, polyid, polyvertid, p) {
        this.id = id;
        this.polyid = polyid;
        this.polyvertid = polyvertid;
        this.p = p;
        p.vv = this;
    }
    return VisibilityVertex;
}());
exports.VisibilityVertex = VisibilityVertex;
var VisibilityEdge = (function () {
    function VisibilityEdge(source, target) {
        this.source = source;
        this.target = target;
    }
    VisibilityEdge.prototype.length = function () {
        var dx = this.source.p.x - this.target.p.x;
        var dy = this.source.p.y - this.target.p.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return VisibilityEdge;
}());
exports.VisibilityEdge = VisibilityEdge;
var TangentVisibilityGraph = (function () {
    function TangentVisibilityGraph(P, g0) {
        this.P = P;
        this.V = [];
        this.E = [];
        if (!g0) {
            var n = P.length;
            for (var i = 0; i < n; i++) {
                var p = P[i];
                for (var j = 0; j < p.length; ++j) {
                    var pj = p[j], vv = new VisibilityVertex(this.V.length, i, j, pj);
                    this.V.push(vv);
                    if (j > 0)
                        this.E.push(new VisibilityEdge(p[j - 1].vv, vv));
                }
            }
            for (var i = 0; i < n - 1; i++) {
                var Pi = P[i];
                for (var j = i + 1; j < n; j++) {
                    var Pj = P[j], t = tangents(Pi, Pj);
                    for (var q in t) {
                        var c = t[q], source = Pi[c.t1], target = Pj[c.t2];
                        this.addEdgeIfVisible(source, target, i, j);
                    }
                }
            }
        }
        else {
            this.V = g0.V.slice(0);
            this.E = g0.E.slice(0);
        }
    }
    TangentVisibilityGraph.prototype.addEdgeIfVisible = function (u, v, i1, i2) {
        if (!this.intersectsPolys(new LineSegment(u.x, u.y, v.x, v.y), i1, i2)) {
            this.E.push(new VisibilityEdge(u.vv, v.vv));
        }
    };
    TangentVisibilityGraph.prototype.addPoint = function (p, i1) {
        var n = this.P.length;
        this.V.push(new VisibilityVertex(this.V.length, n, 0, p));
        for (var i = 0; i < n; ++i) {
            if (i === i1)
                continue;
            var poly = this.P[i], t = tangent_PointPolyC(p, poly);
            this.addEdgeIfVisible(p, poly[t.ltan], i1, i);
            this.addEdgeIfVisible(p, poly[t.rtan], i1, i);
        }
        return p.vv;
    };
    TangentVisibilityGraph.prototype.intersectsPolys = function (l, i1, i2) {
        for (var i = 0, n = this.P.length; i < n; ++i) {
            if (i != i1 && i != i2 && intersects(l, this.P[i]).length > 0) {
                return true;
            }
        }
        return false;
    };
    return TangentVisibilityGraph;
}());
exports.TangentVisibilityGraph = TangentVisibilityGraph;
function intersects(l, P) {
    var ints = [];
    for (var i = 1, n = P.length; i < n; ++i) {
        var int = rectangle_1.Rectangle.lineIntersection(l.x1, l.y1, l.x2, l.y2, P[i - 1].x, P[i - 1].y, P[i].x, P[i].y);
        if (int)
            ints.push(int);
    }
    return ints;
}
function tangents(V, W) {
    var m = V.length - 1, n = W.length - 1;
    var bt = new BiTangents();
    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            var v1 = V[i == 0 ? m - 1 : i - 1];
            var v2 = V[i];
            var v3 = V[i + 1];
            var w1 = W[j == 0 ? n - 1 : j - 1];
            var w2 = W[j];
            var w3 = W[j + 1];
            var v1v2w2 = isLeft(v1, v2, w2);
            var v2w1w2 = isLeft(v2, w1, w2);
            var v2w2w3 = isLeft(v2, w2, w3);
            var w1w2v2 = isLeft(w1, w2, v2);
            var w2v1v2 = isLeft(w2, v1, v2);
            var w2v2v3 = isLeft(w2, v2, v3);
            if (v1v2w2 >= 0 && v2w1w2 >= 0 && v2w2w3 < 0
                && w1w2v2 >= 0 && w2v1v2 >= 0 && w2v2v3 < 0) {
                bt.ll = new BiTangent(i, j);
            }
            else if (v1v2w2 <= 0 && v2w1w2 <= 0 && v2w2w3 > 0
                && w1w2v2 <= 0 && w2v1v2 <= 0 && w2v2v3 > 0) {
                bt.rr = new BiTangent(i, j);
            }
            else if (v1v2w2 <= 0 && v2w1w2 > 0 && v2w2w3 <= 0
                && w1w2v2 >= 0 && w2v1v2 < 0 && w2v2v3 >= 0) {
                bt.rl = new BiTangent(i, j);
            }
            else if (v1v2w2 >= 0 && v2w1w2 < 0 && v2w2w3 >= 0
                && w1w2v2 <= 0 && w2v1v2 > 0 && w2v2v3 <= 0) {
                bt.lr = new BiTangent(i, j);
            }
        }
    }
    return bt;
}
exports.tangents = tangents;
function isPointInsidePoly(p, poly) {
    for (var i = 1, n = poly.length; i < n; ++i)
        if (below(poly[i - 1], poly[i], p))
            return false;
    return true;
}
function isAnyPInQ(p, q) {
    return !p.every(function (v) { return !isPointInsidePoly(v, q); });
}
function polysOverlap(p, q) {
    if (isAnyPInQ(p, q))
        return true;
    if (isAnyPInQ(q, p))
        return true;
    for (var i = 1, n = p.length; i < n; ++i) {
        var v = p[i], u = p[i - 1];
        if (intersects(new LineSegment(u.x, u.y, v.x, v.y), q).length > 0)
            return true;
    }
    return false;
}
exports.polysOverlap = polysOverlap;
//# sourceMappingURL=geom.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var rectangle_1 = __webpack_require__(8);
var vpsc_1 = __webpack_require__(17);
var shortestpaths_1 = __webpack_require__(12);
var NodeWrapper = (function () {
    function NodeWrapper(id, rect, children) {
        this.id = id;
        this.rect = rect;
        this.children = children;
        this.leaf = typeof children === 'undefined' || children.length === 0;
    }
    return NodeWrapper;
}());
exports.NodeWrapper = NodeWrapper;
var Vert = (function () {
    function Vert(id, x, y, node, line) {
        if (node === void 0) { node = null; }
        if (line === void 0) { line = null; }
        this.id = id;
        this.x = x;
        this.y = y;
        this.node = node;
        this.line = line;
    }
    return Vert;
}());
exports.Vert = Vert;
var LongestCommonSubsequence = (function () {
    function LongestCommonSubsequence(s, t) {
        this.s = s;
        this.t = t;
        var mf = LongestCommonSubsequence.findMatch(s, t);
        var tr = t.slice(0).reverse();
        var mr = LongestCommonSubsequence.findMatch(s, tr);
        if (mf.length >= mr.length) {
            this.length = mf.length;
            this.si = mf.si;
            this.ti = mf.ti;
            this.reversed = false;
        }
        else {
            this.length = mr.length;
            this.si = mr.si;
            this.ti = t.length - mr.ti - mr.length;
            this.reversed = true;
        }
    }
    LongestCommonSubsequence.findMatch = function (s, t) {
        var m = s.length;
        var n = t.length;
        var match = { length: 0, si: -1, ti: -1 };
        var l = new Array(m);
        for (var i = 0; i < m; i++) {
            l[i] = new Array(n);
            for (var j = 0; j < n; j++)
                if (s[i] === t[j]) {
                    var v = l[i][j] = (i === 0 || j === 0) ? 1 : l[i - 1][j - 1] + 1;
                    if (v > match.length) {
                        match.length = v;
                        match.si = i - v + 1;
                        match.ti = j - v + 1;
                    }
                    ;
                }
                else
                    l[i][j] = 0;
        }
        return match;
    };
    LongestCommonSubsequence.prototype.getSequence = function () {
        return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
    };
    return LongestCommonSubsequence;
}());
exports.LongestCommonSubsequence = LongestCommonSubsequence;
var GridRouter = (function () {
    function GridRouter(originalnodes, accessor, groupPadding) {
        if (groupPadding === void 0) { groupPadding = 12; }
        var _this = this;
        this.originalnodes = originalnodes;
        this.groupPadding = groupPadding;
        this.leaves = null;
        this.nodes = originalnodes.map(function (v, i) { return new NodeWrapper(i, accessor.getBounds(v), accessor.getChildren(v)); });
        this.leaves = this.nodes.filter(function (v) { return v.leaf; });
        this.groups = this.nodes.filter(function (g) { return !g.leaf; });
        this.cols = this.getGridLines('x');
        this.rows = this.getGridLines('y');
        this.groups.forEach(function (v) {
            return v.children.forEach(function (c) { return _this.nodes[c].parent = v; });
        });
        this.root = { children: [] };
        this.nodes.forEach(function (v) {
            if (typeof v.parent === 'undefined') {
                v.parent = _this.root;
                _this.root.children.push(v.id);
            }
            v.ports = [];
        });
        this.backToFront = this.nodes.slice(0);
        this.backToFront.sort(function (x, y) { return _this.getDepth(x) - _this.getDepth(y); });
        var frontToBackGroups = this.backToFront.slice(0).reverse().filter(function (g) { return !g.leaf; });
        frontToBackGroups.forEach(function (v) {
            var r = rectangle_1.Rectangle.empty();
            v.children.forEach(function (c) { return r = r.union(_this.nodes[c].rect); });
            v.rect = r.inflate(_this.groupPadding);
        });
        var colMids = this.midPoints(this.cols.map(function (r) { return r.pos; }));
        var rowMids = this.midPoints(this.rows.map(function (r) { return r.pos; }));
        var rowx = colMids[0], rowX = colMids[colMids.length - 1];
        var coly = rowMids[0], colY = rowMids[rowMids.length - 1];
        var hlines = this.rows.map(function (r) { return ({ x1: rowx, x2: rowX, y1: r.pos, y2: r.pos }); })
            .concat(rowMids.map(function (m) { return ({ x1: rowx, x2: rowX, y1: m, y2: m }); }));
        var vlines = this.cols.map(function (c) { return ({ x1: c.pos, x2: c.pos, y1: coly, y2: colY }); })
            .concat(colMids.map(function (m) { return ({ x1: m, x2: m, y1: coly, y2: colY }); }));
        var lines = hlines.concat(vlines);
        lines.forEach(function (l) { return l.verts = []; });
        this.verts = [];
        this.edges = [];
        hlines.forEach(function (h) {
            return vlines.forEach(function (v) {
                var p = new Vert(_this.verts.length, v.x1, h.y1);
                h.verts.push(p);
                v.verts.push(p);
                _this.verts.push(p);
                var i = _this.backToFront.length;
                while (i-- > 0) {
                    var node = _this.backToFront[i], r = node.rect;
                    var dx = Math.abs(p.x - r.cx()), dy = Math.abs(p.y - r.cy());
                    if (dx < r.width() / 2 && dy < r.height() / 2) {
                        p.node = node;
                        break;
                    }
                }
            });
        });
        lines.forEach(function (l, li) {
            _this.nodes.forEach(function (v, i) {
                v.rect.lineIntersections(l.x1, l.y1, l.x2, l.y2).forEach(function (intersect, j) {
                    var p = new Vert(_this.verts.length, intersect.x, intersect.y, v, l);
                    _this.verts.push(p);
                    l.verts.push(p);
                    v.ports.push(p);
                });
            });
            var isHoriz = Math.abs(l.y1 - l.y2) < 0.1;
            var delta = function (a, b) { return isHoriz ? b.x - a.x : b.y - a.y; };
            l.verts.sort(delta);
            for (var i = 1; i < l.verts.length; i++) {
                var u = l.verts[i - 1], v = l.verts[i];
                if (u.node && u.node === v.node && u.node.leaf)
                    continue;
                _this.edges.push({ source: u.id, target: v.id, length: Math.abs(delta(u, v)) });
            }
        });
    }
    GridRouter.prototype.avg = function (a) { return a.reduce(function (x, y) { return x + y; }) / a.length; };
    GridRouter.prototype.getGridLines = function (axis) {
        var columns = [];
        var ls = this.leaves.slice(0, this.leaves.length);
        while (ls.length > 0) {
            var overlapping = ls.filter(function (v) { return v.rect['overlap' + axis.toUpperCase()](ls[0].rect); });
            var col = {
                nodes: overlapping,
                pos: this.avg(overlapping.map(function (v) { return v.rect['c' + axis](); }))
            };
            columns.push(col);
            col.nodes.forEach(function (v) { return ls.splice(ls.indexOf(v), 1); });
        }
        columns.sort(function (a, b) { return a.pos - b.pos; });
        return columns;
    };
    GridRouter.prototype.getDepth = function (v) {
        var depth = 0;
        while (v.parent !== this.root) {
            depth++;
            v = v.parent;
        }
        return depth;
    };
    GridRouter.prototype.midPoints = function (a) {
        var gap = a[1] - a[0];
        var mids = [a[0] - gap / 2];
        for (var i = 1; i < a.length; i++) {
            mids.push((a[i] + a[i - 1]) / 2);
        }
        mids.push(a[a.length - 1] + gap / 2);
        return mids;
    };
    GridRouter.prototype.findLineage = function (v) {
        var lineage = [v];
        do {
            v = v.parent;
            lineage.push(v);
        } while (v !== this.root);
        return lineage.reverse();
    };
    GridRouter.prototype.findAncestorPathBetween = function (a, b) {
        var aa = this.findLineage(a), ba = this.findLineage(b), i = 0;
        while (aa[i] === ba[i])
            i++;
        return { commonAncestor: aa[i - 1], lineages: aa.slice(i).concat(ba.slice(i)) };
    };
    GridRouter.prototype.siblingObstacles = function (a, b) {
        var _this = this;
        var path = this.findAncestorPathBetween(a, b);
        var lineageLookup = {};
        path.lineages.forEach(function (v) { return lineageLookup[v.id] = {}; });
        var obstacles = path.commonAncestor.children.filter(function (v) { return !(v in lineageLookup); });
        path.lineages
            .filter(function (v) { return v.parent !== path.commonAncestor; })
            .forEach(function (v) { return obstacles = obstacles.concat(v.parent.children.filter(function (c) { return c !== v.id; })); });
        return obstacles.map(function (v) { return _this.nodes[v]; });
    };
    GridRouter.getSegmentSets = function (routes, x, y) {
        var vsegments = [];
        for (var ei = 0; ei < routes.length; ei++) {
            var route = routes[ei];
            for (var si = 0; si < route.length; si++) {
                var s = route[si];
                s.edgeid = ei;
                s.i = si;
                var sdx = s[1][x] - s[0][x];
                if (Math.abs(sdx) < 0.1) {
                    vsegments.push(s);
                }
            }
        }
        vsegments.sort(function (a, b) { return a[0][x] - b[0][x]; });
        var vsegmentsets = [];
        var segmentset = null;
        for (var i = 0; i < vsegments.length; i++) {
            var s = vsegments[i];
            if (!segmentset || Math.abs(s[0][x] - segmentset.pos) > 0.1) {
                segmentset = { pos: s[0][x], segments: [] };
                vsegmentsets.push(segmentset);
            }
            segmentset.segments.push(s);
        }
        return vsegmentsets;
    };
    GridRouter.nudgeSegs = function (x, y, routes, segments, leftOf, gap) {
        var n = segments.length;
        if (n <= 1)
            return;
        var vs = segments.map(function (s) { return new vpsc_1.Variable(s[0][x]); });
        var cs = [];
        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                if (i === j)
                    continue;
                var s1 = segments[i], s2 = segments[j], e1 = s1.edgeid, e2 = s2.edgeid, lind = -1, rind = -1;
                if (x == 'x') {
                    if (leftOf(e1, e2)) {
                        if (s1[0][y] < s1[1][y]) {
                            lind = j, rind = i;
                        }
                        else {
                            lind = i, rind = j;
                        }
                    }
                }
                else {
                    if (leftOf(e1, e2)) {
                        if (s1[0][y] < s1[1][y]) {
                            lind = i, rind = j;
                        }
                        else {
                            lind = j, rind = i;
                        }
                    }
                }
                if (lind >= 0) {
                    cs.push(new vpsc_1.Constraint(vs[lind], vs[rind], gap));
                }
            }
        }
        var solver = new vpsc_1.Solver(vs, cs);
        solver.solve();
        vs.forEach(function (v, i) {
            var s = segments[i];
            var pos = v.position();
            s[0][x] = s[1][x] = pos;
            var route = routes[s.edgeid];
            if (s.i > 0)
                route[s.i - 1][1][x] = pos;
            if (s.i < route.length - 1)
                route[s.i + 1][0][x] = pos;
        });
    };
    GridRouter.nudgeSegments = function (routes, x, y, leftOf, gap) {
        var vsegmentsets = GridRouter.getSegmentSets(routes, x, y);
        for (var i = 0; i < vsegmentsets.length; i++) {
            var ss = vsegmentsets[i];
            var events = [];
            for (var j = 0; j < ss.segments.length; j++) {
                var s = ss.segments[j];
                events.push({ type: 0, s: s, pos: Math.min(s[0][y], s[1][y]) });
                events.push({ type: 1, s: s, pos: Math.max(s[0][y], s[1][y]) });
            }
            events.sort(function (a, b) { return a.pos - b.pos + a.type - b.type; });
            var open = [];
            var openCount = 0;
            events.forEach(function (e) {
                if (e.type === 0) {
                    open.push(e.s);
                    openCount++;
                }
                else {
                    openCount--;
                }
                if (openCount == 0) {
                    GridRouter.nudgeSegs(x, y, routes, open, leftOf, gap);
                    open = [];
                }
            });
        }
    };
    GridRouter.prototype.routeEdges = function (edges, nudgeGap, source, target) {
        var _this = this;
        var routePaths = edges.map(function (e) { return _this.route(source(e), target(e)); });
        var order = GridRouter.orderEdges(routePaths);
        var routes = routePaths.map(function (e) { return GridRouter.makeSegments(e); });
        GridRouter.nudgeSegments(routes, 'x', 'y', order, nudgeGap);
        GridRouter.nudgeSegments(routes, 'y', 'x', order, nudgeGap);
        GridRouter.unreverseEdges(routes, routePaths);
        return routes;
    };
    GridRouter.unreverseEdges = function (routes, routePaths) {
        routes.forEach(function (segments, i) {
            var path = routePaths[i];
            if (path.reversed) {
                segments.reverse();
                segments.forEach(function (segment) {
                    segment.reverse();
                });
            }
        });
    };
    GridRouter.angleBetween2Lines = function (line1, line2) {
        var angle1 = Math.atan2(line1[0].y - line1[1].y, line1[0].x - line1[1].x);
        var angle2 = Math.atan2(line2[0].y - line2[1].y, line2[0].x - line2[1].x);
        var diff = angle1 - angle2;
        if (diff > Math.PI || diff < -Math.PI) {
            diff = angle2 - angle1;
        }
        return diff;
    };
    GridRouter.isLeft = function (a, b, c) {
        return ((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) <= 0;
    };
    GridRouter.getOrder = function (pairs) {
        var outgoing = {};
        for (var i = 0; i < pairs.length; i++) {
            var p = pairs[i];
            if (typeof outgoing[p.l] === 'undefined')
                outgoing[p.l] = {};
            outgoing[p.l][p.r] = true;
        }
        return function (l, r) { return typeof outgoing[l] !== 'undefined' && outgoing[l][r]; };
    };
    GridRouter.orderEdges = function (edges) {
        var edgeOrder = [];
        for (var i = 0; i < edges.length - 1; i++) {
            for (var j = i + 1; j < edges.length; j++) {
                var e = edges[i], f = edges[j], lcs = new LongestCommonSubsequence(e, f);
                var u, vi, vj;
                if (lcs.length === 0)
                    continue;
                if (lcs.reversed) {
                    f.reverse();
                    f.reversed = true;
                    lcs = new LongestCommonSubsequence(e, f);
                }
                if ((lcs.si <= 0 || lcs.ti <= 0) &&
                    (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length)) {
                    edgeOrder.push({ l: i, r: j });
                    continue;
                }
                if (lcs.si + lcs.length >= e.length || lcs.ti + lcs.length >= f.length) {
                    u = e[lcs.si + 1];
                    vj = e[lcs.si - 1];
                    vi = f[lcs.ti - 1];
                }
                else {
                    u = e[lcs.si + lcs.length - 2];
                    vi = e[lcs.si + lcs.length];
                    vj = f[lcs.ti + lcs.length];
                }
                if (GridRouter.isLeft(u, vi, vj)) {
                    edgeOrder.push({ l: j, r: i });
                }
                else {
                    edgeOrder.push({ l: i, r: j });
                }
            }
        }
        return GridRouter.getOrder(edgeOrder);
    };
    GridRouter.makeSegments = function (path) {
        function copyPoint(p) {
            return { x: p.x, y: p.y };
        }
        var isStraight = function (a, b, c) { return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < 0.001; };
        var segments = [];
        var a = copyPoint(path[0]);
        for (var i = 1; i < path.length; i++) {
            var b = copyPoint(path[i]), c = i < path.length - 1 ? path[i + 1] : null;
            if (!c || !isStraight(a, b, c)) {
                segments.push([a, b]);
                a = b;
            }
        }
        return segments;
    };
    GridRouter.prototype.route = function (s, t) {
        var _this = this;
        var source = this.nodes[s], target = this.nodes[t];
        this.obstacles = this.siblingObstacles(source, target);
        var obstacleLookup = {};
        this.obstacles.forEach(function (o) { return obstacleLookup[o.id] = o; });
        this.passableEdges = this.edges.filter(function (e) {
            var u = _this.verts[e.source], v = _this.verts[e.target];
            return !(u.node && u.node.id in obstacleLookup
                || v.node && v.node.id in obstacleLookup);
        });
        for (var i = 1; i < source.ports.length; i++) {
            var u = source.ports[0].id;
            var v = source.ports[i].id;
            this.passableEdges.push({
                source: u,
                target: v,
                length: 0
            });
        }
        for (var i = 1; i < target.ports.length; i++) {
            var u = target.ports[0].id;
            var v = target.ports[i].id;
            this.passableEdges.push({
                source: u,
                target: v,
                length: 0
            });
        }
        var getSource = function (e) { return e.source; }, getTarget = function (e) { return e.target; }, getLength = function (e) { return e.length; };
        var shortestPathCalculator = new shortestpaths_1.Calculator(this.verts.length, this.passableEdges, getSource, getTarget, getLength);
        var bendPenalty = function (u, v, w) {
            var a = _this.verts[u], b = _this.verts[v], c = _this.verts[w];
            var dx = Math.abs(c.x - a.x), dy = Math.abs(c.y - a.y);
            if (a.node === source && a.node === b.node || b.node === target && b.node === c.node)
                return 0;
            return dx > 1 && dy > 1 ? 1000 : 0;
        };
        var shortestPath = shortestPathCalculator.PathFromNodeToNodeWithPrevCost(source.ports[0].id, target.ports[0].id, bendPenalty);
        var pathPoints = shortestPath.reverse().map(function (vi) { return _this.verts[vi]; });
        pathPoints.push(this.nodes[target.id].ports[0]);
        return pathPoints.filter(function (v, i) {
            return !(i < pathPoints.length - 1 && pathPoints[i + 1].node === source && v.node === source
                || i > 0 && v.node === target && pathPoints[i - 1].node === target);
        });
    };
    GridRouter.getRoutePath = function (route, cornerradius, arrowwidth, arrowheight) {
        var result = {
            routepath: 'M ' + route[0][0].x + ' ' + route[0][0].y + ' ',
            arrowpath: ''
        };
        if (route.length > 1) {
            for (var i = 0; i < route.length; i++) {
                var li = route[i];
                var x = li[1].x, y = li[1].y;
                var dx = x - li[0].x;
                var dy = y - li[0].y;
                if (i < route.length - 1) {
                    if (Math.abs(dx) > 0) {
                        x -= dx / Math.abs(dx) * cornerradius;
                    }
                    else {
                        y -= dy / Math.abs(dy) * cornerradius;
                    }
                    result.routepath += 'L ' + x + ' ' + y + ' ';
                    var l = route[i + 1];
                    var x0 = l[0].x, y0 = l[0].y;
                    var x1 = l[1].x;
                    var y1 = l[1].y;
                    dx = x1 - x0;
                    dy = y1 - y0;
                    var angle = GridRouter.angleBetween2Lines(li, l) < 0 ? 1 : 0;
                    var x2, y2;
                    if (Math.abs(dx) > 0) {
                        x2 = x0 + dx / Math.abs(dx) * cornerradius;
                        y2 = y0;
                    }
                    else {
                        x2 = x0;
                        y2 = y0 + dy / Math.abs(dy) * cornerradius;
                    }
                    var cx = Math.abs(x2 - x);
                    var cy = Math.abs(y2 - y);
                    result.routepath += 'A ' + cx + ' ' + cy + ' 0 0 ' + angle + ' ' + x2 + ' ' + y2 + ' ';
                }
                else {
                    var arrowtip = [x, y];
                    var arrowcorner1, arrowcorner2;
                    if (Math.abs(dx) > 0) {
                        x -= dx / Math.abs(dx) * arrowheight;
                        arrowcorner1 = [x, y + arrowwidth];
                        arrowcorner2 = [x, y - arrowwidth];
                    }
                    else {
                        y -= dy / Math.abs(dy) * arrowheight;
                        arrowcorner1 = [x + arrowwidth, y];
                        arrowcorner2 = [x - arrowwidth, y];
                    }
                    result.routepath += 'L ' + x + ' ' + y + ' ';
                    if (arrowheight > 0) {
                        result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1]
                            + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
                    }
                }
            }
        }
        else {
            var li = route[0];
            var x = li[1].x, y = li[1].y;
            var dx = x - li[0].x;
            var dy = y - li[0].y;
            var arrowtip = [x, y];
            var arrowcorner1, arrowcorner2;
            if (Math.abs(dx) > 0) {
                x -= dx / Math.abs(dx) * arrowheight;
                arrowcorner1 = [x, y + arrowwidth];
                arrowcorner2 = [x, y - arrowwidth];
            }
            else {
                y -= dy / Math.abs(dy) * arrowheight;
                arrowcorner1 = [x + arrowwidth, y];
                arrowcorner2 = [x - arrowwidth, y];
            }
            result.routepath += 'L ' + x + ' ' + y + ' ';
            if (arrowheight > 0) {
                result.arrowpath = 'M ' + arrowtip[0] + ' ' + arrowtip[1] + ' L ' + arrowcorner1[0] + ' ' + arrowcorner1[1]
                    + ' L ' + arrowcorner2[0] + ' ' + arrowcorner2[1];
            }
        }
        return result;
    };
    return GridRouter;
}());
exports.GridRouter = GridRouter;
//# sourceMappingURL=gridrouter.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var packingOptions = {
    PADDING: 10,
    GOLDEN_SECTION: (1 + Math.sqrt(5)) / 2,
    FLOAT_EPSILON: 0.0001,
    MAX_INERATIONS: 100
};
function applyPacking(graphs, w, h, node_size, desired_ratio) {
    if (desired_ratio === void 0) { desired_ratio = 1; }
    var init_x = 0, init_y = 0, svg_width = w, svg_height = h, desired_ratio = typeof desired_ratio !== 'undefined' ? desired_ratio : 1, node_size = typeof node_size !== 'undefined' ? node_size : 0, real_width = 0, real_height = 0, min_width = 0, global_bottom = 0, line = [];
    if (graphs.length == 0)
        return;
    calculate_bb(graphs);
    apply(graphs, desired_ratio);
    put_nodes_to_right_positions(graphs);
    function calculate_bb(graphs) {
        graphs.forEach(function (g) {
            calculate_single_bb(g);
        });
        function calculate_single_bb(graph) {
            var min_x = Number.MAX_VALUE, min_y = Number.MAX_VALUE, max_x = 0, max_y = 0;
            graph.array.forEach(function (v) {
                var w = typeof v.width !== 'undefined' ? v.width : node_size;
                var h = typeof v.height !== 'undefined' ? v.height : node_size;
                w /= 2;
                h /= 2;
                max_x = Math.max(v.x + w, max_x);
                min_x = Math.min(v.x - w, min_x);
                max_y = Math.max(v.y + h, max_y);
                min_y = Math.min(v.y - h, min_y);
            });
            graph.width = max_x - min_x;
            graph.height = max_y - min_y;
        }
    }
    function put_nodes_to_right_positions(graphs) {
        graphs.forEach(function (g) {
            var center = { x: 0, y: 0 };
            g.array.forEach(function (node) {
                center.x += node.x;
                center.y += node.y;
            });
            center.x /= g.array.length;
            center.y /= g.array.length;
            var corner = { x: center.x - g.width / 2, y: center.y - g.height / 2 };
            var offset = { x: g.x - corner.x + svg_width / 2 - real_width / 2, y: g.y - corner.y + svg_height / 2 - real_height / 2 };
            g.array.forEach(function (node) {
                node.x += offset.x;
                node.y += offset.y;
            });
        });
    }
    function apply(data, desired_ratio) {
        var curr_best_f = Number.POSITIVE_INFINITY;
        var curr_best = 0;
        data.sort(function (a, b) { return b.height - a.height; });
        min_width = data.reduce(function (a, b) {
            return a.width < b.width ? a.width : b.width;
        });
        var left = x1 = min_width;
        var right = x2 = get_entire_width(data);
        var iterationCounter = 0;
        var f_x1 = Number.MAX_VALUE;
        var f_x2 = Number.MAX_VALUE;
        var flag = -1;
        var dx = Number.MAX_VALUE;
        var df = Number.MAX_VALUE;
        while ((dx > min_width) || df > packingOptions.FLOAT_EPSILON) {
            if (flag != 1) {
                var x1 = right - (right - left) / packingOptions.GOLDEN_SECTION;
                var f_x1 = step(data, x1);
            }
            if (flag != 0) {
                var x2 = left + (right - left) / packingOptions.GOLDEN_SECTION;
                var f_x2 = step(data, x2);
            }
            dx = Math.abs(x1 - x2);
            df = Math.abs(f_x1 - f_x2);
            if (f_x1 < curr_best_f) {
                curr_best_f = f_x1;
                curr_best = x1;
            }
            if (f_x2 < curr_best_f) {
                curr_best_f = f_x2;
                curr_best = x2;
            }
            if (f_x1 > f_x2) {
                left = x1;
                x1 = x2;
                f_x1 = f_x2;
                flag = 1;
            }
            else {
                right = x2;
                x2 = x1;
                f_x2 = f_x1;
                flag = 0;
            }
            if (iterationCounter++ > 100) {
                break;
            }
        }
        step(data, curr_best);
    }
    function step(data, max_width) {
        line = [];
        real_width = 0;
        real_height = 0;
        global_bottom = init_y;
        for (var i = 0; i < data.length; i++) {
            var o = data[i];
            put_rect(o, max_width);
        }
        return Math.abs(get_real_ratio() - desired_ratio);
    }
    function put_rect(rect, max_width) {
        var parent = undefined;
        for (var i = 0; i < line.length; i++) {
            if ((line[i].space_left >= rect.height) && (line[i].x + line[i].width + rect.width + packingOptions.PADDING - max_width) <= packingOptions.FLOAT_EPSILON) {
                parent = line[i];
                break;
            }
        }
        line.push(rect);
        if (parent !== undefined) {
            rect.x = parent.x + parent.width + packingOptions.PADDING;
            rect.y = parent.bottom;
            rect.space_left = rect.height;
            rect.bottom = rect.y;
            parent.space_left -= rect.height + packingOptions.PADDING;
            parent.bottom += rect.height + packingOptions.PADDING;
        }
        else {
            rect.y = global_bottom;
            global_bottom += rect.height + packingOptions.PADDING;
            rect.x = init_x;
            rect.bottom = rect.y;
            rect.space_left = rect.height;
        }
        if (rect.y + rect.height - real_height > -packingOptions.FLOAT_EPSILON)
            real_height = rect.y + rect.height - init_y;
        if (rect.x + rect.width - real_width > -packingOptions.FLOAT_EPSILON)
            real_width = rect.x + rect.width - init_x;
    }
    ;
    function get_entire_width(data) {
        var width = 0;
        data.forEach(function (d) { return width += d.width + packingOptions.PADDING; });
        return width;
    }
    function get_real_ratio() {
        return (real_width / real_height);
    }
}
exports.applyPacking = applyPacking;
function separateGraphs(nodes, links) {
    var marks = {};
    var ways = {};
    var graphs = [];
    var clusters = 0;
    for (var i = 0; i < links.length; i++) {
        var link = links[i];
        var n1 = link.source;
        var n2 = link.target;
        if (ways[n1.index])
            ways[n1.index].push(n2);
        else
            ways[n1.index] = [n2];
        if (ways[n2.index])
            ways[n2.index].push(n1);
        else
            ways[n2.index] = [n1];
    }
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (marks[node.index])
            continue;
        explore_node(node, true);
    }
    function explore_node(n, is_new) {
        if (marks[n.index] !== undefined)
            return;
        if (is_new) {
            clusters++;
            graphs.push({ array: [] });
        }
        marks[n.index] = clusters;
        graphs[clusters - 1].array.push(n);
        var adjacent = ways[n.index];
        if (!adjacent)
            return;
        for (var j = 0; j < adjacent.length; j++) {
            explore_node(adjacent[j], false);
        }
    }
    return graphs;
}
exports.separateGraphs = separateGraphs;
//# sourceMappingURL=handledisconnected.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PowerEdge = (function () {
    function PowerEdge(source, target, type) {
        this.source = source;
        this.target = target;
        this.type = type;
    }
    return PowerEdge;
}());
exports.PowerEdge = PowerEdge;
var Configuration = (function () {
    function Configuration(n, edges, linkAccessor, rootGroup) {
        var _this = this;
        this.linkAccessor = linkAccessor;
        this.modules = new Array(n);
        this.roots = [];
        if (rootGroup) {
            this.initModulesFromGroup(rootGroup);
        }
        else {
            this.roots.push(new ModuleSet());
            for (var i = 0; i < n; ++i)
                this.roots[0].add(this.modules[i] = new Module(i));
        }
        this.R = edges.length;
        edges.forEach(function (e) {
            var s = _this.modules[linkAccessor.getSourceIndex(e)], t = _this.modules[linkAccessor.getTargetIndex(e)], type = linkAccessor.getType(e);
            s.outgoing.add(type, t);
            t.incoming.add(type, s);
        });
    }
    Configuration.prototype.initModulesFromGroup = function (group) {
        var moduleSet = new ModuleSet();
        this.roots.push(moduleSet);
        for (var i = 0; i < group.leaves.length; ++i) {
            var node = group.leaves[i];
            var module = new Module(node.id);
            this.modules[node.id] = module;
            moduleSet.add(module);
        }
        if (group.groups) {
            for (var j = 0; j < group.groups.length; ++j) {
                var child = group.groups[j];
                var definition = {};
                for (var prop in child)
                    if (prop !== "leaves" && prop !== "groups" && child.hasOwnProperty(prop))
                        definition[prop] = child[prop];
                moduleSet.add(new Module(-1 - j, new LinkSets(), new LinkSets(), this.initModulesFromGroup(child), definition));
            }
        }
        return moduleSet;
    };
    Configuration.prototype.merge = function (a, b, k) {
        if (k === void 0) { k = 0; }
        var inInt = a.incoming.intersection(b.incoming), outInt = a.outgoing.intersection(b.outgoing);
        var children = new ModuleSet();
        children.add(a);
        children.add(b);
        var m = new Module(this.modules.length, outInt, inInt, children);
        this.modules.push(m);
        var update = function (s, i, o) {
            s.forAll(function (ms, linktype) {
                ms.forAll(function (n) {
                    var nls = n[i];
                    nls.add(linktype, m);
                    nls.remove(linktype, a);
                    nls.remove(linktype, b);
                    a[o].remove(linktype, n);
                    b[o].remove(linktype, n);
                });
            });
        };
        update(outInt, "incoming", "outgoing");
        update(inInt, "outgoing", "incoming");
        this.R -= inInt.count() + outInt.count();
        this.roots[k].remove(a);
        this.roots[k].remove(b);
        this.roots[k].add(m);
        return m;
    };
    Configuration.prototype.rootMerges = function (k) {
        if (k === void 0) { k = 0; }
        var rs = this.roots[k].modules();
        var n = rs.length;
        var merges = new Array(n * (n - 1));
        var ctr = 0;
        for (var i = 0, i_ = n - 1; i < i_; ++i) {
            for (var j = i + 1; j < n; ++j) {
                var a = rs[i], b = rs[j];
                merges[ctr] = { id: ctr, nEdges: this.nEdges(a, b), a: a, b: b };
                ctr++;
            }
        }
        return merges;
    };
    Configuration.prototype.greedyMerge = function () {
        for (var i = 0; i < this.roots.length; ++i) {
            if (this.roots[i].modules().length < 2)
                continue;
            var ms = this.rootMerges(i).sort(function (a, b) { return a.nEdges == b.nEdges ? a.id - b.id : a.nEdges - b.nEdges; });
            var m = ms[0];
            if (m.nEdges >= this.R)
                continue;
            this.merge(m.a, m.b, i);
            return true;
        }
    };
    Configuration.prototype.nEdges = function (a, b) {
        var inInt = a.incoming.intersection(b.incoming), outInt = a.outgoing.intersection(b.outgoing);
        return this.R - inInt.count() - outInt.count();
    };
    Configuration.prototype.getGroupHierarchy = function (retargetedEdges) {
        var _this = this;
        var groups = [];
        var root = {};
        toGroups(this.roots[0], root, groups);
        var es = this.allEdges();
        es.forEach(function (e) {
            var a = _this.modules[e.source];
            var b = _this.modules[e.target];
            retargetedEdges.push(new PowerEdge(typeof a.gid === "undefined" ? e.source : groups[a.gid], typeof b.gid === "undefined" ? e.target : groups[b.gid], e.type));
        });
        return groups;
    };
    Configuration.prototype.allEdges = function () {
        var es = [];
        Configuration.getEdges(this.roots[0], es);
        return es;
    };
    Configuration.getEdges = function (modules, es) {
        modules.forAll(function (m) {
            m.getEdges(es);
            Configuration.getEdges(m.children, es);
        });
    };
    return Configuration;
}());
exports.Configuration = Configuration;
function toGroups(modules, group, groups) {
    modules.forAll(function (m) {
        if (m.isLeaf()) {
            if (!group.leaves)
                group.leaves = [];
            group.leaves.push(m.id);
        }
        else {
            var g = group;
            m.gid = groups.length;
            if (!m.isIsland() || m.isPredefined()) {
                g = { id: m.gid };
                if (m.isPredefined())
                    for (var prop in m.definition)
                        g[prop] = m.definition[prop];
                if (!group.groups)
                    group.groups = [];
                group.groups.push(m.gid);
                groups.push(g);
            }
            toGroups(m.children, g, groups);
        }
    });
}
var Module = (function () {
    function Module(id, outgoing, incoming, children, definition) {
        if (outgoing === void 0) { outgoing = new LinkSets(); }
        if (incoming === void 0) { incoming = new LinkSets(); }
        if (children === void 0) { children = new ModuleSet(); }
        this.id = id;
        this.outgoing = outgoing;
        this.incoming = incoming;
        this.children = children;
        this.definition = definition;
    }
    Module.prototype.getEdges = function (es) {
        var _this = this;
        this.outgoing.forAll(function (ms, edgetype) {
            ms.forAll(function (target) {
                es.push(new PowerEdge(_this.id, target.id, edgetype));
            });
        });
    };
    Module.prototype.isLeaf = function () {
        return this.children.count() === 0;
    };
    Module.prototype.isIsland = function () {
        return this.outgoing.count() === 0 && this.incoming.count() === 0;
    };
    Module.prototype.isPredefined = function () {
        return typeof this.definition !== "undefined";
    };
    return Module;
}());
exports.Module = Module;
function intersection(m, n) {
    var i = {};
    for (var v in m)
        if (v in n)
            i[v] = m[v];
    return i;
}
var ModuleSet = (function () {
    function ModuleSet() {
        this.table = {};
    }
    ModuleSet.prototype.count = function () {
        return Object.keys(this.table).length;
    };
    ModuleSet.prototype.intersection = function (other) {
        var result = new ModuleSet();
        result.table = intersection(this.table, other.table);
        return result;
    };
    ModuleSet.prototype.intersectionCount = function (other) {
        return this.intersection(other).count();
    };
    ModuleSet.prototype.contains = function (id) {
        return id in this.table;
    };
    ModuleSet.prototype.add = function (m) {
        this.table[m.id] = m;
    };
    ModuleSet.prototype.remove = function (m) {
        delete this.table[m.id];
    };
    ModuleSet.prototype.forAll = function (f) {
        for (var mid in this.table) {
            f(this.table[mid]);
        }
    };
    ModuleSet.prototype.modules = function () {
        var vs = [];
        this.forAll(function (m) {
            if (!m.isPredefined())
                vs.push(m);
        });
        return vs;
    };
    return ModuleSet;
}());
exports.ModuleSet = ModuleSet;
var LinkSets = (function () {
    function LinkSets() {
        this.sets = {};
        this.n = 0;
    }
    LinkSets.prototype.count = function () {
        return this.n;
    };
    LinkSets.prototype.contains = function (id) {
        var result = false;
        this.forAllModules(function (m) {
            if (!result && m.id == id) {
                result = true;
            }
        });
        return result;
    };
    LinkSets.prototype.add = function (linktype, m) {
        var s = linktype in this.sets ? this.sets[linktype] : this.sets[linktype] = new ModuleSet();
        s.add(m);
        ++this.n;
    };
    LinkSets.prototype.remove = function (linktype, m) {
        var ms = this.sets[linktype];
        ms.remove(m);
        if (ms.count() === 0) {
            delete this.sets[linktype];
        }
        --this.n;
    };
    LinkSets.prototype.forAll = function (f) {
        for (var linktype in this.sets) {
            f(this.sets[linktype], Number(linktype));
        }
    };
    LinkSets.prototype.forAllModules = function (f) {
        this.forAll(function (ms, lt) { return ms.forAll(f); });
    };
    LinkSets.prototype.intersection = function (other) {
        var result = new LinkSets();
        this.forAll(function (ms, lt) {
            if (lt in other.sets) {
                var i = ms.intersection(other.sets[lt]), n = i.count();
                if (n > 0) {
                    result.sets[lt] = i;
                    result.n += n;
                }
            }
        });
        return result;
    };
    return LinkSets;
}());
exports.LinkSets = LinkSets;
function intersectionCount(m, n) {
    return Object.keys(intersection(m, n)).length;
}
function getGroups(nodes, links, la, rootGroup) {
    var n = nodes.length, c = new Configuration(n, links, la, rootGroup);
    while (c.greedyMerge())
        ;
    var powerEdges = [];
    var g = c.getGroupHierarchy(powerEdges);
    powerEdges.forEach(function (e) {
        var f = function (end) {
            var g = e[end];
            if (typeof g == "number")
                e[end] = nodes[g];
        };
        f("source");
        f("target");
    });
    return { groups: g, powerEdges: powerEdges };
}
exports.getGroups = getGroups;
//# sourceMappingURL=powergraph.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PairingHeap = (function () {
    function PairingHeap(elem) {
        this.elem = elem;
        this.subheaps = [];
    }
    PairingHeap.prototype.toString = function (selector) {
        var str = "", needComma = false;
        for (var i = 0; i < this.subheaps.length; ++i) {
            var subheap = this.subheaps[i];
            if (!subheap.elem) {
                needComma = false;
                continue;
            }
            if (needComma) {
                str = str + ",";
            }
            str = str + subheap.toString(selector);
            needComma = true;
        }
        if (str !== "") {
            str = "(" + str + ")";
        }
        return (this.elem ? selector(this.elem) : "") + str;
    };
    PairingHeap.prototype.forEach = function (f) {
        if (!this.empty()) {
            f(this.elem, this);
            this.subheaps.forEach(function (s) { return s.forEach(f); });
        }
    };
    PairingHeap.prototype.count = function () {
        return this.empty() ? 0 : 1 + this.subheaps.reduce(function (n, h) {
            return n + h.count();
        }, 0);
    };
    PairingHeap.prototype.min = function () {
        return this.elem;
    };
    PairingHeap.prototype.empty = function () {
        return this.elem == null;
    };
    PairingHeap.prototype.contains = function (h) {
        if (this === h)
            return true;
        for (var i = 0; i < this.subheaps.length; i++) {
            if (this.subheaps[i].contains(h))
                return true;
        }
        return false;
    };
    PairingHeap.prototype.isHeap = function (lessThan) {
        var _this = this;
        return this.subheaps.every(function (h) { return lessThan(_this.elem, h.elem) && h.isHeap(lessThan); });
    };
    PairingHeap.prototype.insert = function (obj, lessThan) {
        return this.merge(new PairingHeap(obj), lessThan);
    };
    PairingHeap.prototype.merge = function (heap2, lessThan) {
        if (this.empty())
            return heap2;
        else if (heap2.empty())
            return this;
        else if (lessThan(this.elem, heap2.elem)) {
            this.subheaps.push(heap2);
            return this;
        }
        else {
            heap2.subheaps.push(this);
            return heap2;
        }
    };
    PairingHeap.prototype.removeMin = function (lessThan) {
        if (this.empty())
            return null;
        else
            return this.mergePairs(lessThan);
    };
    PairingHeap.prototype.mergePairs = function (lessThan) {
        if (this.subheaps.length == 0)
            return new PairingHeap(null);
        else if (this.subheaps.length == 1) {
            return this.subheaps[0];
        }
        else {
            var firstPair = this.subheaps.pop().merge(this.subheaps.pop(), lessThan);
            var remaining = this.mergePairs(lessThan);
            return firstPair.merge(remaining, lessThan);
        }
    };
    PairingHeap.prototype.decreaseKey = function (subheap, newValue, setHeapNode, lessThan) {
        var newHeap = subheap.removeMin(lessThan);
        subheap.elem = newHeap.elem;
        subheap.subheaps = newHeap.subheaps;
        if (setHeapNode !== null && newHeap.elem !== null) {
            setHeapNode(subheap.elem, subheap);
        }
        var pairingNode = new PairingHeap(newValue);
        if (setHeapNode !== null) {
            setHeapNode(newValue, pairingNode);
        }
        return this.merge(pairingNode, lessThan);
    };
    return PairingHeap;
}());
exports.PairingHeap = PairingHeap;
var PriorityQueue = (function () {
    function PriorityQueue(lessThan) {
        this.lessThan = lessThan;
    }
    PriorityQueue.prototype.top = function () {
        if (this.empty()) {
            return null;
        }
        return this.root.elem;
    };
    PriorityQueue.prototype.push = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var pairingNode;
        for (var i = 0, arg; arg = args[i]; ++i) {
            pairingNode = new PairingHeap(arg);
            this.root = this.empty() ?
                pairingNode : this.root.merge(pairingNode, this.lessThan);
        }
        return pairingNode;
    };
    PriorityQueue.prototype.empty = function () {
        return !this.root || !this.root.elem;
    };
    PriorityQueue.prototype.isHeap = function () {
        return this.root.isHeap(this.lessThan);
    };
    PriorityQueue.prototype.forEach = function (f) {
        this.root.forEach(f);
    };
    PriorityQueue.prototype.pop = function () {
        if (this.empty()) {
            return null;
        }
        var obj = this.root.min();
        this.root = this.root.removeMin(this.lessThan);
        return obj;
    };
    PriorityQueue.prototype.reduceKey = function (heapNode, newKey, setHeapNode) {
        if (setHeapNode === void 0) { setHeapNode = null; }
        this.root = this.root.decreaseKey(heapNode, newKey, setHeapNode, this.lessThan);
    };
    PriorityQueue.prototype.toString = function (selector) {
        return this.root.toString(selector);
    };
    PriorityQueue.prototype.count = function () {
        return this.root.count();
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=pqueue.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TreeBase = (function () {
    function TreeBase() {
        this.findIter = function (data) {
            var res = this._root;
            var iter = this.iterator();
            while (res !== null) {
                var c = this._comparator(data, res.data);
                if (c === 0) {
                    iter._cursor = res;
                    return iter;
                }
                else {
                    iter._ancestors.push(res);
                    res = res.get_child(c > 0);
                }
            }
            return null;
        };
    }
    TreeBase.prototype.clear = function () {
        this._root = null;
        this.size = 0;
    };
    ;
    TreeBase.prototype.find = function (data) {
        var res = this._root;
        while (res !== null) {
            var c = this._comparator(data, res.data);
            if (c === 0) {
                return res.data;
            }
            else {
                res = res.get_child(c > 0);
            }
        }
        return null;
    };
    ;
    TreeBase.prototype.lowerBound = function (data) {
        return this._bound(data, this._comparator);
    };
    ;
    TreeBase.prototype.upperBound = function (data) {
        var cmp = this._comparator;
        function reverse_cmp(a, b) {
            return cmp(b, a);
        }
        return this._bound(data, reverse_cmp);
    };
    ;
    TreeBase.prototype.min = function () {
        var res = this._root;
        if (res === null) {
            return null;
        }
        while (res.left !== null) {
            res = res.left;
        }
        return res.data;
    };
    ;
    TreeBase.prototype.max = function () {
        var res = this._root;
        if (res === null) {
            return null;
        }
        while (res.right !== null) {
            res = res.right;
        }
        return res.data;
    };
    ;
    TreeBase.prototype.iterator = function () {
        return new Iterator(this);
    };
    ;
    TreeBase.prototype.each = function (cb) {
        var it = this.iterator(), data;
        while ((data = it.next()) !== null) {
            cb(data);
        }
    };
    ;
    TreeBase.prototype.reach = function (cb) {
        var it = this.iterator(), data;
        while ((data = it.prev()) !== null) {
            cb(data);
        }
    };
    ;
    TreeBase.prototype._bound = function (data, cmp) {
        var cur = this._root;
        var iter = this.iterator();
        while (cur !== null) {
            var c = this._comparator(data, cur.data);
            if (c === 0) {
                iter._cursor = cur;
                return iter;
            }
            iter._ancestors.push(cur);
            cur = cur.get_child(c > 0);
        }
        for (var i = iter._ancestors.length - 1; i >= 0; --i) {
            cur = iter._ancestors[i];
            if (cmp(data, cur.data) > 0) {
                iter._cursor = cur;
                iter._ancestors.length = i;
                return iter;
            }
        }
        iter._ancestors.length = 0;
        return iter;
    };
    ;
    return TreeBase;
}());
exports.TreeBase = TreeBase;
var Iterator = (function () {
    function Iterator(tree) {
        this._tree = tree;
        this._ancestors = [];
        this._cursor = null;
    }
    Iterator.prototype.data = function () {
        return this._cursor !== null ? this._cursor.data : null;
    };
    ;
    Iterator.prototype.next = function () {
        if (this._cursor === null) {
            var root = this._tree._root;
            if (root !== null) {
                this._minNode(root);
            }
        }
        else {
            if (this._cursor.right === null) {
                var save;
                do {
                    save = this._cursor;
                    if (this._ancestors.length) {
                        this._cursor = this._ancestors.pop();
                    }
                    else {
                        this._cursor = null;
                        break;
                    }
                } while (this._cursor.right === save);
            }
            else {
                this._ancestors.push(this._cursor);
                this._minNode(this._cursor.right);
            }
        }
        return this._cursor !== null ? this._cursor.data : null;
    };
    ;
    Iterator.prototype.prev = function () {
        if (this._cursor === null) {
            var root = this._tree._root;
            if (root !== null) {
                this._maxNode(root);
            }
        }
        else {
            if (this._cursor.left === null) {
                var save;
                do {
                    save = this._cursor;
                    if (this._ancestors.length) {
                        this._cursor = this._ancestors.pop();
                    }
                    else {
                        this._cursor = null;
                        break;
                    }
                } while (this._cursor.left === save);
            }
            else {
                this._ancestors.push(this._cursor);
                this._maxNode(this._cursor.left);
            }
        }
        return this._cursor !== null ? this._cursor.data : null;
    };
    ;
    Iterator.prototype._minNode = function (start) {
        while (start.left !== null) {
            this._ancestors.push(start);
            start = start.left;
        }
        this._cursor = start;
    };
    ;
    Iterator.prototype._maxNode = function (start) {
        while (start.right !== null) {
            this._ancestors.push(start);
            start = start.right;
        }
        this._cursor = start;
    };
    ;
    return Iterator;
}());
exports.Iterator = Iterator;
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.red = true;
    }
    Node.prototype.get_child = function (dir) {
        return dir ? this.right : this.left;
    };
    ;
    Node.prototype.set_child = function (dir, val) {
        if (dir) {
            this.right = val;
        }
        else {
            this.left = val;
        }
    };
    ;
    return Node;
}());
var RBTree = (function (_super) {
    __extends(RBTree, _super);
    function RBTree(comparator) {
        var _this = _super.call(this) || this;
        _this._root = null;
        _this._comparator = comparator;
        _this.size = 0;
        return _this;
    }
    RBTree.prototype.insert = function (data) {
        var ret = false;
        if (this._root === null) {
            this._root = new Node(data);
            ret = true;
            this.size++;
        }
        else {
            var head = new Node(undefined);
            var dir = false;
            var last = false;
            var gp = null;
            var ggp = head;
            var p = null;
            var node = this._root;
            ggp.right = this._root;
            while (true) {
                if (node === null) {
                    node = new Node(data);
                    p.set_child(dir, node);
                    ret = true;
                    this.size++;
                }
                else if (RBTree.is_red(node.left) && RBTree.is_red(node.right)) {
                    node.red = true;
                    node.left.red = false;
                    node.right.red = false;
                }
                if (RBTree.is_red(node) && RBTree.is_red(p)) {
                    var dir2 = ggp.right === gp;
                    if (node === p.get_child(last)) {
                        ggp.set_child(dir2, RBTree.single_rotate(gp, !last));
                    }
                    else {
                        ggp.set_child(dir2, RBTree.double_rotate(gp, !last));
                    }
                }
                var cmp = this._comparator(node.data, data);
                if (cmp === 0) {
                    break;
                }
                last = dir;
                dir = cmp < 0;
                if (gp !== null) {
                    ggp = gp;
                }
                gp = p;
                p = node;
                node = node.get_child(dir);
            }
            this._root = head.right;
        }
        this._root.red = false;
        return ret;
    };
    ;
    RBTree.prototype.remove = function (data) {
        if (this._root === null) {
            return false;
        }
        var head = new Node(undefined);
        var node = head;
        node.right = this._root;
        var p = null;
        var gp = null;
        var found = null;
        var dir = true;
        while (node.get_child(dir) !== null) {
            var last = dir;
            gp = p;
            p = node;
            node = node.get_child(dir);
            var cmp = this._comparator(data, node.data);
            dir = cmp > 0;
            if (cmp === 0) {
                found = node;
            }
            if (!RBTree.is_red(node) && !RBTree.is_red(node.get_child(dir))) {
                if (RBTree.is_red(node.get_child(!dir))) {
                    var sr = RBTree.single_rotate(node, dir);
                    p.set_child(last, sr);
                    p = sr;
                }
                else if (!RBTree.is_red(node.get_child(!dir))) {
                    var sibling = p.get_child(!last);
                    if (sibling !== null) {
                        if (!RBTree.is_red(sibling.get_child(!last)) && !RBTree.is_red(sibling.get_child(last))) {
                            p.red = false;
                            sibling.red = true;
                            node.red = true;
                        }
                        else {
                            var dir2 = gp.right === p;
                            if (RBTree.is_red(sibling.get_child(last))) {
                                gp.set_child(dir2, RBTree.double_rotate(p, last));
                            }
                            else if (RBTree.is_red(sibling.get_child(!last))) {
                                gp.set_child(dir2, RBTree.single_rotate(p, last));
                            }
                            var gpc = gp.get_child(dir2);
                            gpc.red = true;
                            node.red = true;
                            gpc.left.red = false;
                            gpc.right.red = false;
                        }
                    }
                }
            }
        }
        if (found !== null) {
            found.data = node.data;
            p.set_child(p.right === node, node.get_child(node.left === null));
            this.size--;
        }
        this._root = head.right;
        if (this._root !== null) {
            this._root.red = false;
        }
        return found !== null;
    };
    ;
    RBTree.is_red = function (node) {
        return node !== null && node.red;
    };
    RBTree.single_rotate = function (root, dir) {
        var save = root.get_child(!dir);
        root.set_child(!dir, save.get_child(dir));
        save.set_child(dir, root);
        root.red = true;
        save.red = false;
        return save;
    };
    RBTree.double_rotate = function (root, dir) {
        root.set_child(!dir, RBTree.single_rotate(root.get_child(!dir), !dir));
        return RBTree.single_rotate(root, dir);
    };
    return RBTree;
}(TreeBase));
exports.RBTree = RBTree;
//# sourceMappingURL=rbtree.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
Copyright (c) The Cytoscape Consortium

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

;(function(){ 'use strict';

  // registers the extension on a cytoscape lib ref
  var register = function( cytoscape, cola ){
    if( !cytoscape || !cola ){ return; } // can't register if cytoscape unspecified

    var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
    var isString = function(o){ return typeof o === typeof ''; };
    var isNumber = function(o){ return typeof o === typeof 0; };
    var isObject = function(o){ return o != null && typeof o === typeof {}; };

    // default layout options
    var defaults = {
      animate: true, // whether to show the layout as it's running
      refresh: 1, // number of ticks per frame; higher is faster but more jerky
      maxSimulationTime: 4000, // max length in ms to run the layout
      ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
      fit: true, // on every layout reposition of nodes, fit the viewport
      padding: 30, // padding around the simulation
      boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

      // layout event callbacks
      ready: function(){}, // on layoutready
      stop: function(){}, // on layoutstop

      // positioning options
      randomize: false, // use random node positions at beginning of layout
      avoidOverlap: true, // if true, prevents overlap of node bounding boxes
      handleDisconnected: true, // if true, avoids disconnected components from overlapping
      nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
      flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
      alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }

      // different methods of specifying edge length
      // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
      edgeLength: undefined, // sets edge length directly in simulation
      edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
      edgeJaccardLength: undefined, // jaccard edge length in simulation

      // iterations of cola algorithm; uses default values on undefined
      unconstrIter: undefined, // unconstrained initial layout iterations
      userConstIter: undefined, // initial layout iterations with user-specified constraints
      allConstIter: undefined, // initial layout iterations with all constraints including non-overlap

      // infinite layout options
      infinite: false // overrides all other options for a forces-all-the-time mode
    };

    // constructor
    // options : object containing layout options
    function ColaLayout( options ){
      var opts = this.options = {};
      for( var i in defaults ){ opts[i] = defaults[i]; }
      for( var i in options ){ opts[i] = options[i]; }
    }

    // runs the layout
    ColaLayout.prototype.run = function(){
      var layout = this;
      var options = this.options;

      layout.manuallyStopped = false;

      var cy = options.cy; // cy is automatically populated for us in the constructor
      var eles = options.eles;
      var nodes = eles.nodes();
      var edges = eles.edges();
      var ready = false;

      var bb = options.boundingBox || { x1: 0, y1: 0, w: cy.width(), h: cy.height() };
      if( bb.x2 === undefined ){ bb.x2 = bb.x1 + bb.w; }
      if( bb.w === undefined ){ bb.w = bb.x2 - bb.x1; }
      if( bb.y2 === undefined ){ bb.y2 = bb.y1 + bb.h; }
      if( bb.h === undefined ){ bb.h = bb.y2 - bb.y1; }

      var typeoffn = typeof function(){};
      var getOptVal = function( val, ele ){
        if( typeof val === typeoffn ){
          var fn = val;
          return fn.apply( ele, [ ele ] );
        } else {
          return val;
        }
      };

      var updateNodePositions = function(){
        for( var i = 0; i < nodes.length; i++ ){
          var node = nodes[i];
          var scratch = node.scratch('cola');

          // update node dims
          if( !scratch.updatedDims ){
            var padding = getOptVal( options.nodeSpacing, node );

            scratch.width = node.outerWidth() + 2*padding;
            scratch.height = node.outerHeight() + 2*padding;
          }
        }

        nodes.positions(function(i, node){
          var scratch = node.scratch().cola;
          var retPos;

          if( !node.grabbed() && !node.isParent() ){
            retPos = {
              x: bb.x1 + scratch.x,
              y: bb.y1 + scratch.y
            };

            if( !isNumber(retPos.x) || !isNumber(retPos.y) ){
              retPos = undefined;
            }
          }

          return retPos;
        });

        nodes.updateCompoundBounds(); // because the way this layout sets positions is buggy for some reason; ref #878

        if( !ready ){
          onReady();
          ready = true;
        }

        if( options.fit ){
          cy.fit( options.padding );
        }
      };

      var onDone = function(){
        if( options.ungrabifyWhileSimulating ){
          grabbableNodes.grabify();
        }

        cy.off('destroy', destroyHandler);

        nodes.off('grab free position', grabHandler);
        nodes.off('lock unlock', lockHandler);

        // trigger layoutstop when the layout stops (e.g. finishes)
        layout.one('layoutstop', options.stop);
        layout.trigger({ type: 'layoutstop', layout: layout });
      };

      var onReady = function(){
        // trigger layoutready when each node has had its position set at least once
        layout.one('layoutready', options.ready);
        layout.trigger({ type: 'layoutready', layout: layout });
      };

      var ticksPerFrame = options.refresh;
      var tickSkip = 1; // frames until a tick; used to slow down sim for debugging

      if( options.refresh < 0 ){
        tickSkip = Math.abs( options.refresh );
        ticksPerFrame = 1;
      } else {
        ticksPerFrame = Math.max( 1, ticksPerFrame ); // at least 1
      }

      var adaptor = layout.adaptor = cola.adaptor({
        trigger: function( e ){ // on sim event
          var TICK = cola.EventType ? cola.EventType.tick : null;
          var END = cola.EventType ? cola.EventType.end : null;

          switch( e.type ){
            case 'tick':
            case TICK:
              if( options.animate ){
                updateNodePositions();
              }
              break;

            case 'end':
            case END:
              updateNodePositions();
              if( !options.infinite ){ onDone(); }
              break;
          }
        },

        kick: function(){ // kick off the simulation
          //var skip = 0;

          var inftick = function(){
            if( layout.manuallyStopped ){
              onDone();

              return true;
            }

            var ret = adaptor.tick();

            if( ret && options.infinite ){ // resume layout if done
              adaptor.resume(); // resume => new kick
            }

            return ret; // allow regular finish b/c of new kick
          };

          var multitick = function(){ // multiple ticks in a row
            var ret;

            // skip ticks to slow down layout for debugging
            // var thisSkip = skip;
            // skip = (skip + 1) % tickSkip;
            // if( thisSkip !== 0 ){
            //   return false;
            // }

            for( var i = 0; i < ticksPerFrame && !ret; i++ ){
              ret = ret || inftick(); // pick up true ret vals => sim done
            }

            return ret;
          };

          if( options.animate ){
            var frame = function(){
              if( multitick() ){ return; }

              raf( frame );
            };

            raf( frame );
          } else {
            while( !inftick() ){}
          }
        },

        on: function( type, listener ){}, // dummy; not needed

        drag: function(){} // not needed for our case
      });
      layout.adaptor = adaptor;

      // if set no grabbing during layout
      var grabbableNodes = nodes.filter(':grabbable');
      if( options.ungrabifyWhileSimulating ){
        grabbableNodes.ungrabify();
      }

      var destroyHandler;
      cy.one('destroy', destroyHandler = function(e){
        layout.stop();
      });

      // handle node dragging
      var grabHandler;
      nodes.on('grab free position', grabHandler = function(e){
        var node = this;
        var scrCola = node.scratch().cola;
        var pos = node.position();
        
        switch( e.type ){
          case 'grab':
            adaptor.dragstart( scrCola );
            adaptor.resume();
            break;
          case 'free':
            adaptor.dragend( scrCola );
            break;
          case 'position':
            // only update when different (i.e. manual .position() call or drag) so we don't loop needlessly
            if( scrCola.x !== pos.x - bb.x1 || scrCola.y !== pos.y - bb.y1 ){
              scrCola.px = pos.x - bb.x1;
              scrCola.py = pos.y - bb.y1;
              adaptor.resume();
            }
            break;
        }

      });

      var lockHandler;
      nodes.on('lock unlock', lockHandler = function(e){
        var node = this;
        var scrCola = node.scratch().cola;

        scrCola.fixed = node.locked();

        if( node.locked() ){
          adaptor.dragstart( scrCola );
        } else {
          adaptor.dragend( scrCola );
        }
      });

      var nonparentNodes = nodes.stdFilter(function( node ){
        return !node.isParent();
      });

      // add nodes to cola
      adaptor.nodes( nonparentNodes.map(function( node, i ){
        var padding = getOptVal( options.nodeSpacing, node );
        var pos = node.position();
        var nbb = node.boundingBox();

        var struct = node.scratch().cola = {
          x: options.randomize || pos.x === undefined ? Math.round( Math.random() * bb.w ) : pos.x,
          y: options.randomize || pos.y === undefined ? Math.round( Math.random() * bb.h ) : pos.y,
          width: nbb.w + 2*padding,
          height: nbb.h + 2*padding,
          index: i,
          fixed: node.locked()
        };

        return struct;
      }) );

      if( options.alignment ){ // then set alignment constraints

        var offsetsX = [];
        var offsetsY = [];

        nonparentNodes.forEach(function( node ){
          var align = getOptVal( options.alignment, node );
          var scrCola = node.scratch().cola;
          var index = scrCola.index;

          if( !align ){ return; }

          if( align.x != null ){
            offsetsX.push({
              node: index,
              offset: align.x
            });
          }

          if( align.y != null ){
            offsetsY.push({
              node: index,
              offset: align.y
            });
          }
        });

        // add alignment constraints on nodes
        var constraints = [];

        if( offsetsX.length > 0 ){
          constraints.push({
            type: 'alignment',
            axis: 'x',
            offsets: offsetsX
          });
        }

        if( offsetsY.length > 0 ){
          constraints.push({
            type: 'alignment',
            axis: 'y',
            offsets: offsetsY
          });
        }

        adaptor.constraints( constraints );

      }

      // add compound nodes to cola
      adaptor.groups( nodes.stdFilter(function( node ){
        return node.isParent();
      }).map(function( node, i ){ // add basic group incl leaf nodes
        var optPadding = getOptVal( options.nodeSpacing, node );
        var getPadding = function(d){
          return parseFloat( node.style('padding-'+d) );
        };

        var pleft = getPadding('left') + optPadding;
        var pright = getPadding('right') + optPadding;
        var ptop = getPadding('top') + optPadding;
        var pbottom = getPadding('bottom') + optPadding;

        node.scratch().cola = {
          index: i,

          padding: Math.max( pleft, pright, ptop, pbottom ),

          // leaves should only contain direct descendants (children),
          // not the leaves of nested compound nodes or any nodes that are compounds themselves
          leaves: node.children().stdFilter(function( child ){
            return !child.isParent();
          }).map(function( child ){
            return child[0].scratch().cola.index;
          }),

          fixed: node.locked()
        };

        return node;
      }).map(function( node ){ // add subgroups
        node.scratch().cola.groups = node.children().stdFilter(function( child ){
          return child.isParent();
        }).map(function( child ){
          return child.scratch().cola.index;
        });

        return node.scratch().cola;
      }) );

      // get the edge length setting mechanism
      var length;
      var lengthFnName;
      if( options.edgeLength != null ){
        length = options.edgeLength;
        lengthFnName = 'linkDistance';
      } else if( options.edgeSymDiffLength != null ){
        length = options.edgeSymDiffLength;
        lengthFnName = 'symmetricDiffLinkLengths';
      } else if( options.edgeJaccardLength != null ){
        length = options.edgeJaccardLength;
        lengthFnName = 'jaccardLinkLengths';
      } else {
        length = 100;
        lengthFnName = 'linkDistance';
      }

      var lengthGetter = function( link ){
        return link.calcLength;
      };

      // add the edges to cola
      adaptor.links( edges.stdFilter(function( edge ){
        return !edge.source().isParent() && !edge.target().isParent();
      }).map(function( edge, i ){
        var c = edge.scratch().cola = {
          source: edge.source()[0].scratch().cola.index,
          target: edge.target()[0].scratch().cola.index
        };

        if( length != null ){
          c.calcLength = getOptVal( length, edge );
        }

        return c;
      }) );

      adaptor.size([ bb.w, bb.h ]);

      if( length != null ){
        adaptor[ lengthFnName ]( lengthGetter );
      }

      // set the flow of cola
      if( options.flow ){
        var flow;
        var defAxis = 'y';
        var defMinSep = 50;

        if( isString(options.flow) ){
          flow = {
            axis: options.flow,
            minSeparation: defMinSep
          };
        } else if( isNumber(options.flow) ){
          flow = {
            axis: defAxis,
            minSeparation: options.flow
          };
        } else if( isObject(options.flow) ){
          flow = options.flow;

          flow.axis = flow.axis || defAxis;
          flow.minSeparation = flow.minSeparation != null ? flow.minSeparation : defMinSep;
        } else { // e.g. options.flow: true
          flow = {
            axis: defAxis,
            minSeparation: defMinSep
          };
        }

        adaptor.flowLayout( flow.axis , flow.minSeparation );
      }

      layout.trigger({ type: 'layoutstart', layout: layout });

      adaptor
        .avoidOverlaps( options.avoidOverlap )
        .handleDisconnected( options.handleDisconnected )
        .start( options.unconstrIter, options.userConstIter, options.allConstIter)
      ;

      if( !options.infinite ){
        setTimeout(function(){
          if( !layout.manuallyStopped ){
            adaptor.stop();
          }
        }, options.maxSimulationTime);
      }

      return this; // chaining
    };

    // called on continuous layouts to stop them before they finish
    ColaLayout.prototype.stop = function(){
      if( this.adaptor ){
        this.manuallyStopped = true;
        this.adaptor.stop();
      }

      return this; // chaining
    };


    cytoscape('layout', 'cola', ColaLayout);

  };

  if( typeof module !== 'undefined' && module.exports ){ // expose as a commonjs module
    module.exports = register;
  }

  if( true ){ // expose as an amd/requirejs module
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
      return register;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  if( typeof cytoscape !== 'undefined' && typeof cola !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
    register( cytoscape, cola );
  }

})();


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(35);

var window = __webpack_require__( 4 );
var is = __webpack_require__( 0 );
var Core = __webpack_require__( 20 );
var extension = __webpack_require__( 74 );
var registerJquery = __webpack_require__( 108 );
var Stylesheet = __webpack_require__( 117 );
var Thread = __webpack_require__( 14 );
var Fabric = __webpack_require__( 107 );

var cytoscape = function( options ){ // jshint ignore:line
  // if no options specified, use default
  if( options === undefined ){
    options = {};
  }

  // create instance
  if( is.plainObject( options ) ){
    return new Core( options );
  }

  // allow for registration of extensions
  else if( is.string( options ) ){
    return extension.apply( extension, arguments );
  }
};

// replaced by build system
cytoscape.version = __webpack_require__(123);

// try to register w/ jquery
if( window && window.jQuery ){
  registerJquery( window.jQuery, cytoscape );
}

// expose register api
cytoscape.registerJquery = function( jQuery ){
  registerJquery( jQuery, cytoscape );
};

// expose public apis (mostly for extensions)
cytoscape.stylesheet = cytoscape.Stylesheet = Stylesheet;
cytoscape.thread = cytoscape.Thread = Thread;
cytoscape.fabric = cytoscape.Fabric = Fabric;

module.exports = cytoscape;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Expose module API:

module.exports.polynomial = __webpack_require__(126)
module.exports.linear = __webpack_require__(124)
module.exports.linearRegression = __webpack_require__(125)
module.exports.step = __webpack_require__(127)


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(132));
__export(__webpack_require__(134));
__export(__webpack_require__(15));
__export(__webpack_require__(25));
__export(__webpack_require__(26));
__export(__webpack_require__(27));
__export(__webpack_require__(7));
__export(__webpack_require__(137));
__export(__webpack_require__(16));
__export(__webpack_require__(28));
__export(__webpack_require__(29));
__export(__webpack_require__(30));
__export(__webpack_require__(8));
__export(__webpack_require__(12));
__export(__webpack_require__(17));
__export(__webpack_require__(133));
//# sourceMappingURL=index.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!

Cytoscape.js {{VERSION}} (MIT licensed)

Copyright (c) The Cytoscape Consortium

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/




/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );
var Promise = __webpack_require__( 5 );

var Animation = function( target, opts, opts2 ){
  if( !(this instanceof Animation) ){
    return new Animation( target, opts, opts2 );
  }

  var _p = this._private = util.extend( {
    duration: 1000
  }, opts, opts2 );

  _p.target = target;
  _p.style = _p.style || _p.css;
  _p.started = false;
  _p.playing = false;
  _p.hooked = false;
  _p.applying = false;
  _p.progress = 0;
  _p.completes = [];
  _p.frames = [];

  if( _p.complete && is.fn( _p.complete ) ){
    _p.completes.push( _p.complete );
  }

  // for future timeline/animations impl
  this.length = 1;
  this[0] = this;
};

var anifn = Animation.prototype;

util.extend( anifn, {

  instanceString: function(){ return 'animation'; },

  hook: function(){
    var _p = this._private;

    if( !_p.hooked ){
      // add to target's animation queue
      var q;
      var tAni = _p.target._private.animation;
      if( _p.queue ){
        q = tAni.queue;
      } else {
        q = tAni.current;
      }
      q.push( this );

      // add to the animation loop pool
      if( is.elementOrCollection( _p.target ) ){
        _p.target.cy().addToAnimationPool( _p.target );
      }

      _p.hooked = true;
    }

    return this;
  },

  play: function(){
    var _p = this._private;

    // autorewind
    if( _p.progress === 1 ){
      _p.progress = 0;
    }

    _p.playing = true;
    _p.started = false; // needs to be started by animation loop
    _p.stopped = false;

    this.hook();

    // the animation loop will start the animation...

    return this;
  },

  playing: function(){
    return this._private.playing;
  },

  apply: function(){
    var _p = this._private;

    _p.applying = true;
    _p.started = false; // needs to be started by animation loop
    _p.stopped = false;

    this.hook();

    // the animation loop will apply the animation at this progress

    return this;
  },

  applying: function(){
    return this._private.applying;
  },

  pause: function(){
    var _p = this._private;

    _p.playing = false;
    _p.started = false;

    return this;
  },

  stop: function(){
    var _p = this._private;

    _p.playing = false;
    _p.started = false;
    _p.stopped = true; // to be removed from animation queues

    return this;
  },

  rewind: function(){
    return this.progress( 0 );
  },

  fastforward: function(){
    return this.progress( 1 );
  },

  time: function( t ){
    var _p = this._private;

    if( t === undefined ){
      return _p.progress * _p.duration;
    } else {
      return this.progress( t / _p.duration );
    }
  },

  progress: function( p ){
    var _p = this._private;
    var wasPlaying = _p.playing;

    if( p === undefined ){
      return _p.progress;
    } else {
      if( wasPlaying ){
        this.pause();
      }

      _p.progress = p;
      _p.started = false;

      if( wasPlaying ){
        this.play();
      }
    }

    return this;
  },

  completed: function(){
    return this._private.progress === 1;
  },

  reverse: function(){
    var _p = this._private;
    var wasPlaying = _p.playing;

    if( wasPlaying ){
      this.pause();
    }

    _p.progress = 1 - _p.progress;
    _p.started = false;

    var swap = function( a, b ){
      var _pa = _p[ a ];

      _p[ a ] = _p[ b ];
      _p[ b ] = _pa;
    };

    swap( 'zoom', 'startZoom' );
    swap( 'pan', 'startPan' );
    swap( 'position', 'startPosition' );

    // swap styles
    for( var i = 0; i < _p.style.length; i++ ){
      var prop = _p.style[ i ];
      var name = prop.name;
      var startStyleProp = _p.startStyle[ name ];

      _p.startStyle[ name ] = prop;
      _p.style[ i ] = startStyleProp;
    }

    if( wasPlaying ){
      this.play();
    }

    return this;
  },

  promise: function( type ){
    var _p = this._private;

    var arr;

    switch( type ){
      case 'frame':
        arr = _p.frames;
        break;
      default:
      case 'complete':
      case 'completed':
        arr = _p.completes;
    }

    return new Promise( function( resolve, reject ){
      arr.push( function(){
        resolve();
      } );
    } );
  }

} );

anifn.complete = anifn.completed;

module.exports = Animation;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var elesfn = ({

  // Implemented from pseudocode from wikipedia
  aStar: function( options ){
    var eles = this;

    options = options || {};

    // Reconstructs the path from Start to End, acumulating the result in pathAcum
    var reconstructPath = function( start, end, cameFromMap, pathAcum ){
      // Base case
      if( start == end ){
        pathAcum.push( cy.getElementById( end ) );
        return pathAcum;
      }

      if( end in cameFromMap ){
        // We know which node is before the last one
        var previous = cameFromMap[ end ];
        var previousEdge = cameFromEdge[ end ];

        pathAcum.push( cy.getElementById( end ) );
        pathAcum.push( cy.getElementById( previousEdge ) );


        return reconstructPath( start,
                     previous,
                     cameFromMap,
                     pathAcum );
      }

      // We should not reach here!
      return undefined;
    };

    // Returns the index of the element in openSet which has minimum fScore
    var findMin = function( openSet, fScore ){
      if( openSet.length === 0 ){
        // Should never be the case
        return undefined;
      }
      var minPos = 0;
      var tempScore = fScore[ openSet[0] ];
      for( var i = 1; i < openSet.length; i++ ){
        var s = fScore[ openSet[ i ] ];
        if( s < tempScore ){
          tempScore = s;
          minPos = i;
        }
      }
      return minPos;
    };

    var cy = this._private.cy;

    // root - mandatory!
    if( options != null && options.root != null ){
      var source = is.string( options.root ) ?
        // use it as a selector, e.g. "#rootID
        this.filter( options.root )[0] :
        options.root[0];
    } else {
      return undefined;
    }

    // goal - mandatory!
    if( options.goal != null ){
      var target = is.string( options.goal ) ?
        // use it as a selector, e.g. "#goalID
        this.filter( options.goal )[0] :
        options.goal[0];
    } else {
      return undefined;
    }

    // Heuristic function - optional
    if( options.heuristic != null && is.fn( options.heuristic ) ){
      var heuristic = options.heuristic;
    } else {
      var heuristic = function(){ return 0; }; // use constant if unspecified
    }

    // Weight function - optional
    if( options.weight != null && is.fn( options.weight ) ){
      var weightFn = options.weight;
    } else {
      // If not specified, assume each edge has equal weight (1)
      var weightFn = function( e ){return 1;};
    }

    // directed - optional
    if( options.directed != null ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    var closedSet = [];
    var openSet = [ source.id() ];
    var cameFrom = {};
    var cameFromEdge = {};
    var gScore = {};
    var fScore = {};

    gScore[ source.id() ] = 0;
    fScore[ source.id() ] = heuristic( source );

    var edges = this.edges().stdFilter( function( e ){ return !e.isLoop(); } );
    var nodes = this.nodes();

    // Counter
    var steps = 0;

    // Main loop
    while( openSet.length > 0 ){
      var minPos = findMin( openSet, fScore );
      var cMin = cy.getElementById( openSet[ minPos ] );
      steps++;

      // If we've found our goal, then we are done
      if( cMin.id() == target.id() ){
        var rPath = reconstructPath( source.id(), target.id(), cameFrom, [] );
        rPath.reverse();
        return {
          found: true,
          distance: gScore[ cMin.id() ],
          path: eles.spawn( rPath ),
          steps: steps
        };
      }

      // Add cMin to processed nodes
      closedSet.push( cMin.id() );
      // Remove cMin from boundary nodes
      openSet.splice( minPos, 1 );

      // Update scores for neighbors of cMin
      // Take into account if graph is directed or not
      var vwEdges = cMin.connectedEdges();
      if( directed ){ vwEdges = vwEdges.stdFilter( function( ele ){ return ele.data( 'source' ) === cMin.id(); } ); }
      vwEdges = vwEdges.intersect( edges );

      for( var i = 0; i < vwEdges.length; i++ ){
        var e = vwEdges[ i ];
        var w = e.connectedNodes().stdFilter( function( n ){ return n.id() !== cMin.id(); } ).intersect( nodes );

        // if node is in closedSet, ignore it
        if( closedSet.indexOf( w.id() ) != -1 ){
          continue;
        }

        // New tentative score for node w
        var tempScore = gScore[ cMin.id() ] + weightFn.apply( e, [ e ] );

        // Update gScore for node w if:
        //   w not present in openSet
        // OR
        //   tentative gScore is less than previous value

        // w not in openSet
        if( openSet.indexOf( w.id() ) == -1 ){
          gScore[ w.id() ] = tempScore;
          fScore[ w.id() ] = tempScore + heuristic( w );
          openSet.push( w.id() ); // Add node to openSet
          cameFrom[ w.id() ] = cMin.id();
          cameFromEdge[ w.id() ] = e.id();
          continue;
        }
        // w already in openSet, but with greater gScore
        if( tempScore < gScore[ w.id() ] ){
          gScore[ w.id() ] = tempScore;
          fScore[ w.id() ] = tempScore + heuristic( w );
          cameFrom[ w.id() ] = cMin.id();
        }

      } // End of neighbors update

    } // End of main loop

    // If we've reached here, then we've not reached our goal
    return {
      found: false,
      distance: undefined,
      path: undefined,
      steps: steps
    };
  }

}); // elesfn


module.exports = elesfn;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var elesfn = ({

  // Implemented from pseudocode from wikipedia
  bellmanFord: function( options ){
    var eles = this;

    options = options || {};

    // Weight function - optional
    if( options.weight != null && is.fn( options.weight ) ){
      var weightFn = options.weight;
    } else {
      // If not specified, assume each edge has equal weight (1)
      var weightFn = function( e ){return 1;};
    }

    // directed - optional
    if( options.directed != null ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    // root - mandatory!
    if( options.root != null ){
      if( is.string( options.root ) ){
        // use it as a selector, e.g. "#rootID
        var source = this.filter( options.root )[0];
      } else {
        var source = options.root[0];
      }
    } else {
      return undefined;
    }

    var cy = this._private.cy;
    var edges = this.edges().stdFilter( function( e ){ return !e.isLoop(); } );
    var nodes = this.nodes();
    var numNodes = nodes.length;

    // mapping: node id -> position in nodes array
    var id2position = {};
    for( var i = 0; i < numNodes; i++ ){
      id2position[ nodes[ i ].id() ] = i;
    }

    // Initializations
    var cost = [];
    var predecessor = [];
    var predEdge = [];

    for( var i = 0; i < numNodes; i++ ){
      if( nodes[ i ].id() === source.id() ){
        cost[ i ] = 0;
      } else {
        cost[ i ] = Infinity;
      }
      predecessor[ i ] = undefined;
    }

    // Edges relaxation
    var flag = false;
    for( var i = 1; i < numNodes; i++ ){
      flag = false;
      for( var e = 0; e < edges.length; e++ ){
        var sourceIndex = id2position[ edges[ e ].source().id() ];
        var targetIndex = id2position[ edges[ e ].target().id() ];
        var weight = weightFn.apply( edges[ e ], [ edges[ e ] ] );

        var temp = cost[ sourceIndex ] + weight;
        if( temp < cost[ targetIndex ] ){
          cost[ targetIndex ] = temp;
          predecessor[ targetIndex ] = sourceIndex;
          predEdge[ targetIndex ] = edges[ e ];
          flag = true;
        }

        // If undirected graph, we need to take into account the 'reverse' edge
        if( !directed ){
          var temp = cost[ targetIndex ] + weight;
          if( temp < cost[ sourceIndex ] ){
            cost[ sourceIndex ] = temp;
            predecessor[ sourceIndex ] = targetIndex;
            predEdge[ sourceIndex ] = edges[ e ];
            flag = true;
          }
        }
      }

      if( !flag ){
        break;
      }
    }

    if( flag ){
      // Check for negative weight cycles
      for( var e = 0; e < edges.length; e++ ){
        var sourceIndex = id2position[ edges[ e ].source().id() ];
        var targetIndex = id2position[ edges[ e ].target().id() ];
        var weight = weightFn.apply( edges[ e ], [ edges[ e ] ] );

        if( cost[ sourceIndex ] + weight < cost[ targetIndex ] ){
          util.error( 'Graph contains a negative weight cycle for Bellman-Ford' );
          return { pathTo: undefined,
               distanceTo: undefined,
               hasNegativeWeightCycle: true};
        }
      }
    }

    // Build result object
    var position2id = [];
    for( var i = 0; i < numNodes; i++ ){
      position2id.push( nodes[ i ].id() );
    }


    var res = {
      distanceTo: function( to ){
        if( is.string( to ) ){
          // to is a selector string
          var toId = (cy.filter( to )[0]).id();
        } else {
          // to is a node
          var toId = to.id();
        }

        return cost[ id2position[ toId ] ];
      },

      pathTo: function( to ){

        var reconstructPathAux = function( predecessor, fromPos, toPos, position2id, acumPath, predEdge ){
          for( ;; ){
            // Add toId to path
            acumPath.push( cy.getElementById( position2id[ toPos ] ) );
            acumPath.push( predEdge[ toPos ] );

            if( fromPos === toPos ){
              // reached starting node
              return acumPath;
            }

            // If no path exists, discart acumulated path and return undefined
            var predPos = predecessor[ toPos ];
            if( typeof predPos === 'undefined' ){
              return undefined;
            }

            toPos = predPos;
          }

        };

        if( is.string( to ) ){
          // to is a selector string
          var toId = (cy.filter( to )[0]).id();
        } else {
          // to is a node
          var toId = to.id();
        }
        var path = [];

        // This returns a reversed path
        var res =  reconstructPathAux( predecessor,
                      id2position[ source.id() ],
                      id2position[ toId ],
                      position2id,
                      path,
                      predEdge );

        // Get it in the correct order and return it
        if( res != null ){
          res.reverse();
        }

        return eles.spawn( res );
      },

      hasNegativeWeightCycle: false
    };

    return res;

  } // bellmanFord

}); // elesfn

module.exports = elesfn;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var Heap = __webpack_require__( 9 );

var elesfn = ({

  // Implemented from the algorithm in the paper "On Variants of Shortest-Path Betweenness Centrality and their Generic Computation" by Ulrik Brandes
  betweennessCentrality: function( options ){
    options = options || {};

    // Weight - optional
    var weighted, weightFn;
    if( is.fn( options.weight ) ){
      weightFn = options.weight;
      weighted = true;
    } else {
      weighted = false;
    }

    // Directed - default false
    var directed = options.directed != null ? options.directed : false;

    var cy = this._private.cy;

    // starting
    var V = this.nodes();
    var A = {};
    var _C = {};
    var max = 0;
    var C = {
      set: function( key, val ){
        _C[ key ] = val;

        if( val > max ){ max = val; }
      },

      get: function( key ){ return _C[ key ]; }
    };

    // A contains the neighborhoods of every node
    for( var i = 0; i < V.length; i++ ){
      var v = V[ i ];
      var vid = v.id();

      if( directed ){
        A[ vid ] = v.outgoers().nodes(); // get outgoers of every node
      } else {
        A[ vid ] = v.openNeighborhood().nodes(); // get neighbors of every node
      }

      C.set( vid, 0 );
    }

    for( var s = 0; s < V.length; s++ ){
      var sid = V[s].id();
      var S = []; // stack
      var P = {};
      var g = {};
      var d = {};
      var Q = new Heap(function( a, b ){
        return d[a] - d[b];
      }); // queue

      // init dictionaries
      for( var i = 0; i < V.length; i++ ){
        var vid = V[ i ].id();

        P[ vid ] = [];
        g[ vid ] = 0;
        d[ vid ] = Infinity;
      }

      g[ sid ] = 1; // sigma
      d[ sid ] = 0; // distance to s

      Q.push( sid );

      while( !Q.empty() ){
        var v = Q.pop();

        S.push( v );

        if( weighted ){
          for( var j = 0; j < A[v].length; j++ ){
            var w = A[v][j];
            var vEle = cy.getElementById( v );

            var edge;
            if( vEle.edgesTo( w ).length > 0 ){
              edge = vEle.edgesTo( w )[0];
            } else {
              edge = w.edgesTo( vEle )[0];
            }

            var edgeWeight = weightFn.apply( edge, [ edge ] );

            w = w.id();

            if( d[w] > d[v] + edgeWeight ){
              d[w] = d[v] + edgeWeight;

              if( Q.nodes.indexOf( w ) < 0 ){ //if w is not in Q
                Q.push( w );
              } else { // update position if w is in Q
                Q.updateItem( w );
              }

              g[w] = 0;
              P[w] = [];
            }

            if( d[w] == d[v] + edgeWeight ){
              g[w] = g[w] + g[v];
              P[w].push( v );
            }
          }
        } else {
          for( var j = 0; j < A[v].length; j++ ){
            var w = A[v][j].id();

            if( d[w] == Infinity ){
              Q.push( w );

              d[w] = d[v] + 1;
            }

            if( d[w] == d[v] + 1 ){
              g[w] = g[w] + g[v];
              P[w].push( v );
            }
          }
        }
      }

      var e = {};
      for( var i = 0; i < V.length; i++ ){
        e[ V[ i ].id() ] = 0;
      }

      while( S.length > 0 ){
        var w = S.pop();

        for( var j = 0; j < P[w].length; j++ ){
          var v = P[w][j];

          e[v] = e[v] + (g[v] / g[w]) * (1 + e[w]);

          if( w != V[s].id() ){
            C.set( w, C.get( w ) + e[w] );
          }
        }
      }
    }

    var ret = {
      betweenness: function( node ){
        if( is.string( node ) ){
          var node = cy.filter( node ).id();
        } else {
          var node = node.id();
        }

        return C.get( node );
      },

      betweennessNormalized: function( node ){
        if ( max == 0 )
          return 0;

        if( is.string( node ) ){
          var node = cy.filter( node ).id();
        } else {
          var node = node.id();
        }

        return C.get( node ) / max;
      }
    };

    // alias
    ret.betweennessNormalised = ret.betweennessNormalized;

    return ret;
  } // betweennessCentrality

}); // elesfn

// nice, short mathemathical alias
elesfn.bc = elesfn.betweennessCentrality;

module.exports = elesfn;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var defineSearch = function( params ){
  params = {
    bfs: params.bfs || !params.dfs,
    dfs: params.dfs || !params.bfs
  };

  // from pseudocode on wikipedia
  return function searchFn( roots, fn, directed ){
    var options;
    var std;
    var thisArg;
    if( is.plainObject( roots ) && !is.elementOrCollection( roots ) ){
      options = roots;
      roots = options.roots || options.root;
      fn = options.visit;
      directed = options.directed;
      std = options.std;
      thisArg = options.thisArg;
    }

    directed = arguments.length === 2 && !is.fn( fn ) ? fn : directed;
    fn = is.fn( fn ) ? fn : function(){};

    var cy = this._private.cy;
    var v = roots = is.string( roots ) ? this.filter( roots ) : roots;
    var Q = [];
    var connectedNodes = [];
    var connectedBy = {};
    var id2depth = {};
    var V = {};
    var j = 0;
    var found;
    var nodes = this.nodes();
    var edges = this.edges();

    // enqueue v
    for( var i = 0; i < v.length; i++ ){
      if( v[ i ].isNode() ){
        Q.unshift( v[ i ] );

        if( params.bfs ){
          V[ v[ i ].id() ] = true;

          connectedNodes.push( v[ i ] );
        }

        id2depth[ v[ i ].id() ] = 0;
      }
    }

    while( Q.length !== 0 ){
      var v = params.bfs ? Q.shift() : Q.pop();

      if( params.dfs ){
        if( V[ v.id() ] ){ continue; }

        V[ v.id() ] = true;

        connectedNodes.push( v );
      }

      var depth = id2depth[ v.id() ];
      var prevEdge = connectedBy[ v.id() ];
      var prevNode = prevEdge == null ? undefined : prevEdge.connectedNodes().not( v )[0];
      var ret;

      if( std ){
        ret = fn.call( thisArg, v, prevEdge, prevNode, j++, depth );
      } else {
        ret = fn.call( v, j++, depth, v, prevEdge, prevNode );
      }

      if( ret === true ){
        found = v;
        break;
      }

      if( ret === false ){
        break;
      }

      var vwEdges = v.connectedEdges( directed ? function(){ return this.data( 'source' ) === v.id(); } : undefined ).intersect( edges );
      for( var i = 0; i < vwEdges.length; i++ ){
        var e = vwEdges[ i ];
        var w = e.connectedNodes( function(){ return this.id() !== v.id(); } ).intersect( nodes );

        if( w.length !== 0 && !V[ w.id() ] ){
          w = w[0];

          Q.push( w );

          if( params.bfs ){
            V[ w.id() ] = true;

            connectedNodes.push( w );
          }

          connectedBy[ w.id() ] = e;

          id2depth[ w.id() ] = id2depth[ v.id() ] + 1;
        }
      }

    }

    var connectedEles = [];

    for( var i = 0; i < connectedNodes.length; i++ ){
      var node = connectedNodes[ i ];
      var edge = connectedBy[ node.id() ];

      if( edge ){
        connectedEles.push( edge );
      }

      connectedEles.push( node );
    }

    return {
      path: cy.collection( connectedEles, { unique: true } ),
      found: cy.collection( found )
    };
  };
};

// search, spanning trees, etc
var elesfn = ({
  breadthFirstSearch: defineSearch( { bfs: true } ),
  depthFirstSearch: defineSearch( { dfs: true } )
});

// nice, short mathemathical alias
elesfn.bfs = elesfn.breadthFirstSearch;
elesfn.dfs = elesfn.depthFirstSearch;

module.exports = elesfn;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var elesfn = ({

  closenessCentralityNormalized: function( options ){
    options = options || {};

    var cy = this.cy();

    var harmonic = options.harmonic;
    if( harmonic === undefined ){
      harmonic = true;
    }

    var closenesses = {};
    var maxCloseness = 0;
    var nodes = this.nodes();
    var fw = this.floydWarshall( { weight: options.weight, directed: options.directed } );

    // Compute closeness for every node and find the maximum closeness
    for( var i = 0; i < nodes.length; i++ ){
      var currCloseness = 0;
      for( var j = 0; j < nodes.length; j++ ){
        if( i != j ){
          var d = fw.distance( nodes[ i ], nodes[ j ] );

          if( harmonic ){
            currCloseness += 1 / d;
          } else {
            currCloseness += d;
          }
        }
      }

      if( !harmonic ){
        currCloseness = 1 / currCloseness;
      }

      if( maxCloseness < currCloseness ){
        maxCloseness = currCloseness;
      }

      closenesses[ nodes[ i ].id() ] = currCloseness;
    }

    return {
      closeness: function( node ){
        if( maxCloseness == 0 ){ return 0; }

        if( is.string( node ) ){
          // from is a selector string
          var node = (cy.filter( node )[0]).id();
        } else {
          // from is a node
          var node = node.id();
        }

        return closenesses[ node ] / maxCloseness;
      }
    };
  },

  // Implemented from pseudocode from wikipedia
  closenessCentrality: function( options ){
    options = options || {};

    // root - mandatory!
    if( options.root != null ){
      if( is.string( options.root ) ){
        // use it as a selector, e.g. "#rootID
        var root = this.filter( options.root )[0];
      } else {
        var root = options.root[0];
      }
    } else {
      return undefined;
    }

    // weight - optional
    if( options.weight != null && is.fn( options.weight ) ){
      var weight = options.weight;
    } else {
      var weight = function(){return 1;};
    }

    // directed - optional
    if( options.directed != null && is.bool( options.directed ) ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    var harmonic = options.harmonic;
    if( harmonic === undefined ){
      harmonic = true;
    }

    // we need distance from this node to every other node
    var dijkstra = this.dijkstra( {
      root: root,
      weight: weight,
      directed: directed
    } );
    var totalDistance = 0;

    var nodes = this.nodes();
    for( var i = 0; i < nodes.length; i++ ){
      if( nodes[ i ].id() != root.id() ){
        var d = dijkstra.distanceTo( nodes[ i ] );

        if( harmonic ){
          totalDistance += 1 / d;
        } else {
          totalDistance += d;
        }
      }
    }

    return harmonic ? totalDistance : 1 / totalDistance;
  } // closenessCentrality

}); // elesfn

// nice, short mathemathical alias
elesfn.cc = elesfn.closenessCentrality;
elesfn.ccn = elesfn.closenessCentralityNormalised = elesfn.closenessCentralityNormalized;

module.exports = elesfn;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var elesfn = ({

  degreeCentralityNormalized: function( options ){
    options = options || {};

    var cy = this.cy();

    // directed - optional
    if( options.directed != null ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    var nodes = this.nodes();
    var numNodes = nodes.length;

    if( !directed ){
      var degrees = {};
      var maxDegree = 0;

      for( var i = 0; i < numNodes; i++ ){
        var node = nodes[ i ];
        // add current node to the current options object and call degreeCentrality
        var currDegree = this.degreeCentrality( util.extend( {}, options, {root: node} ) );
        if( maxDegree < currDegree.degree )
          maxDegree = currDegree.degree;

        degrees[ node.id() ] = currDegree.degree;
      }

      return {
        degree: function( node ){
          if( maxDegree == 0 )
            return 0;

          if( is.string( node ) ){
            // from is a selector string
            var node = (cy.filter( node )[0]).id();
          } else {
            // from is a node
            var node = node.id();
          }

          return degrees[ node ] / maxDegree;
        }
      };
    } else {
      var indegrees = {};
      var outdegrees = {};
      var maxIndegree = 0;
      var maxOutdegree = 0;

      for( var i = 0; i < numNodes; i++ ){
        var node = nodes[ i ];
        // add current node to the current options object and call degreeCentrality
        var currDegree = this.degreeCentrality( util.extend( {}, options, {root: node} ) );

        if( maxIndegree < currDegree.indegree )
          maxIndegree = currDegree.indegree;

        if( maxOutdegree < currDegree.outdegree )
          maxOutdegree = currDegree.outdegree;

        indegrees[ node.id() ] = currDegree.indegree;
        outdegrees[ node.id() ] = currDegree.outdegree;
      }

      return {
        indegree: function( node ){
          if ( maxIndegree == 0 )
            return 0;

          if( is.string( node ) ){
            // from is a selector string
            var node = (cy.filter( node )[0]).id();
          } else {
            // from is a node
            var node = node.id();
          }

          return indegrees[ node ] / maxIndegree;
        },
        outdegree: function( node ){
          if ( maxOutdegree == 0 )
            return 0;

          if( is.string( node ) ){
            // from is a selector string
            var node = (cy.filter( node )[0]).id();
          } else {
            // from is a node
            var node = node.id();
          }

          return outdegrees[ node ] / maxOutdegree;
        }

      };
    }

  }, // degreeCentralityNormalized

  // Implemented from the algorithm in Opsahl's paper
  // "Node centrality in weighted networks: Generalizing degree and shortest paths"
  // check the heading 2 "Degree"
  degreeCentrality: function( options ){
    options = options || {};

    var callingEles = this;

    // root - mandatory!
    if( options != null && options.root != null ){
      var root = is.string( options.root ) ? this.filter( options.root )[0] : options.root[0];
    } else {
      return undefined;
    }

    // weight - optional
    if( options.weight != null && is.fn( options.weight ) ){
      var weightFn = options.weight;
    } else {
      // If not specified, assume each edge has equal weight (1)
      var weightFn = function( e ){
        return 1;
      };
    }

    // directed - optional
    if( options.directed != null ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    // alpha - optional
    if( options.alpha != null && is.number( options.alpha ) ){
      var alpha = options.alpha;
    } else {
      alpha = 0;
    }


    if( !directed ){
      var connEdges = root.connectedEdges().intersection( callingEles );
      var k = connEdges.length;
      var s = 0;

      // Now, sum edge weights
      for( var i = 0; i < connEdges.length; i++ ){
        var edge = connEdges[ i ];
        s += weightFn.apply( edge, [ edge ] );
      }

      return {
        degree: Math.pow( k, 1 - alpha ) * Math.pow( s, alpha )
      };
    } else {
      var incoming = root.connectedEdges( 'edge[target = "' + root.id() + '"]' ).intersection( callingEles );
      var outgoing = root.connectedEdges( 'edge[source = "' + root.id() + '"]' ).intersection( callingEles );
      var k_in = incoming.length;
      var k_out = outgoing.length;
      var s_in = 0;
      var s_out = 0;

      // Now, sum incoming edge weights
      for( var i = 0; i < incoming.length; i++ ){
        var edge = incoming[ i ];
        s_in += weightFn.apply( edge, [ edge ] );
      }

      // Now, sum outgoing edge weights
      for( var i = 0; i < outgoing.length; i++ ){
        var edge = outgoing[ i ];
        s_out += weightFn.apply( edge, [ edge ] );
      }

      return {
        indegree: Math.pow( k_in, 1 - alpha ) * Math.pow( s_in, alpha ),
        outdegree: Math.pow( k_out, 1 - alpha ) * Math.pow( s_out, alpha )
      };
    }
  } // degreeCentrality

}); // elesfn

// nice, short mathemathical alias
elesfn.dc = elesfn.degreeCentrality;
elesfn.dcn = elesfn.degreeCentralityNormalised = elesfn.degreeCentralityNormalized;

module.exports = elesfn;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var Heap = __webpack_require__( 9 );

var elesfn = ({

  dijkstra: function( root, weightFn, directed ){
    var options;
    if( is.plainObject( root ) && !is.elementOrCollection( root ) ){
      options = root;
      root = options.root;
      weightFn = options.weight;
      directed = options.directed;
    }

    var cy = this._private.cy;
    weightFn = is.fn( weightFn ) ? weightFn : function(){ return 1; }; // if not specified, assume each edge has equal weight (1)

    var source = is.string( root ) ? this.filter( root )[0] : root[0];
    var dist = {};
    var prev = {};
    var knownDist = {};

    var edges = this.edges().filter( function(){ return !this.isLoop(); } );
    var nodes = this.nodes();

    var getDist = function( node ){
      return dist[ node.id() ];
    };

    var setDist = function( node, d ){
      dist[ node.id() ] = d;

      Q.updateItem( node );
    };

    var Q = new Heap( function( a, b ){
      return getDist( a ) - getDist( b );
    } );

    for( var i = 0; i < nodes.length; i++ ){
      var node = nodes[ i ];

      dist[ node.id() ] = node.same( source ) ? 0 : Infinity;
      Q.push( node );
    }

    var distBetween = function( u, v ){
      var uvs = ( directed ? u.edgesTo( v ) : u.edgesWith( v ) ).intersect( edges );
      var smallestDistance = Infinity;
      var smallestEdge;

      for( var i = 0; i < uvs.length; i++ ){
        var edge = uvs[ i ];
        var weight = weightFn.apply( edge, [ edge ] );

        if( weight < smallestDistance || !smallestEdge ){
          smallestDistance = weight;
          smallestEdge = edge;
        }
      }

      return {
        edge: smallestEdge,
        dist: smallestDistance
      };
    };

    while( Q.size() > 0 ){
      var u = Q.pop();
      var smalletsDist = getDist( u );
      var uid = u.id();

      knownDist[ uid ] = smalletsDist;

      if( smalletsDist === Math.Infinite ){
        break;
      }

      var neighbors = u.neighborhood().intersect( nodes );
      for( var i = 0; i < neighbors.length; i++ ){
        var v = neighbors[ i ];
        var vid = v.id();
        var vDist = distBetween( u, v );

        var alt = smalletsDist + vDist.dist;

        if( alt < getDist( v ) ){
          setDist( v, alt );

          prev[ vid ] = {
            node: u,
            edge: vDist.edge
          };
        }
      } // for
    } // while

    return {
      distanceTo: function( node ){
        var target = is.string( node ) ? nodes.filter( node )[0] : node[0];

        return knownDist[ target.id() ];
      },

      pathTo: function( node ){
        var target = is.string( node ) ? nodes.filter( node )[0] : node[0];
        var S = [];
        var u = target;

        if( target.length > 0 ){
          S.unshift( target );

          while( prev[ u.id() ] ){
            var p = prev[ u.id() ];

            S.unshift( p.edge );
            S.unshift( p.node );

            u = p.node;
          }
        }

        return cy.collection( S );
      }
    };
  }
});

module.exports = elesfn;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var elesfn = ({

  // Implemented from pseudocode from wikipedia
  floydWarshall: function( options ){
    options = options || {};

    var cy = this.cy();

    // Weight function - optional
    if( options.weight != null && is.fn( options.weight ) ){
      var weightFn = options.weight;
    } else {
      // If not specified, assume each edge has equal weight (1)
      var weightFn = function( e ){return 1;};
    }

    // directed - optional
    if( options.directed != null ){
      var directed = options.directed;
    } else {
      var directed = false;
    }

    var edges = this.edges().stdFilter( function( e ){ return !e.isLoop(); } );
    var nodes = this.nodes();
    var numNodes = nodes.length;

    // mapping: node id -> position in nodes array
    var id2position = {};
    for( var i = 0; i < numNodes; i++ ){
      id2position[ nodes[ i ].id() ] = i;
    }

    // Initialize distance matrix
    var dist = [];
    for( var i = 0; i < numNodes; i++ ){
      var newRow = new Array( numNodes );
      for( var j = 0; j < numNodes; j++ ){
        if( i == j ){
          newRow[ j ] = 0;
        } else {
          newRow[ j ] = Infinity;
        }
      }
      dist.push( newRow );
    }

    // Initialize matrix used for path reconstruction
    // Initialize distance matrix
    var next = [];
    var edgeNext = [];

    var initMatrix = function( next ){
      for( var i = 0; i < numNodes; i++ ){
        var newRow = new Array( numNodes );
        for( var j = 0; j < numNodes; j++ ){
          newRow[ j ] = undefined;
        }
        next.push( newRow );
      }
    };

    initMatrix( next );
    initMatrix( edgeNext );

    // Process edges
    for( var i = 0; i < edges.length ; i++ ){
      var sourceIndex = id2position[ edges[ i ].source().id() ];
      var targetIndex = id2position[ edges[ i ].target().id() ];
      var weight = weightFn.apply( edges[ i ], [ edges[ i ] ] );

      // Check if already process another edge between same 2 nodes
      if( dist[ sourceIndex ][ targetIndex ] > weight ){
        dist[ sourceIndex ][ targetIndex ] = weight;
        next[ sourceIndex ][ targetIndex ] = targetIndex;
        edgeNext[ sourceIndex ][ targetIndex ] = edges[ i ];
      }
    }

    // If undirected graph, process 'reversed' edges
    if( !directed ){
      for( var i = 0; i < edges.length ; i++ ){
        var sourceIndex = id2position[ edges[ i ].target().id() ];
        var targetIndex = id2position[ edges[ i ].source().id() ];
        var weight = weightFn.apply( edges[ i ], [ edges[ i ] ] );

        // Check if already process another edge between same 2 nodes
        if( dist[ sourceIndex ][ targetIndex ] > weight ){
          dist[ sourceIndex ][ targetIndex ] = weight;
          next[ sourceIndex ][ targetIndex ] = targetIndex;
          edgeNext[ sourceIndex ][ targetIndex ] = edges[ i ];
        }
      }
    }

    // Main loop
    for( var k = 0; k < numNodes; k++ ){
      for( var i = 0; i < numNodes; i++ ){
        for( var j = 0; j < numNodes; j++ ){
          if( dist[ i ][ k ] + dist[ k ][ j ] < dist[ i ][ j ] ){
            dist[ i ][ j ] = dist[ i ][ k ] + dist[ k ][ j ];
            next[ i ][ j ] = next[ i ][ k ];
          }
        }
      }
    }

    // Build result object
    var position2id = [];
    for( var i = 0; i < numNodes; i++ ){
      position2id.push( nodes[ i ].id() );
    }

    var res = {
      distance: function( from, to ){
        if( is.string( from ) ){
          // from is a selector string
          var fromId = (cy.filter( from )[0]).id();
        } else {
          // from is a node
          var fromId = from.id();
        }

        if( is.string( to ) ){
          // to is a selector string
          var toId = (cy.filter( to )[0]).id();
        } else {
          // to is a node
          var toId = to.id();
        }

        return dist[ id2position[ fromId ] ][ id2position[ toId ] ];
      },

      path: function( from, to ){
        var reconstructPathAux = function( from, to, next, position2id, edgeNext ){
          if( from === to ){
            return cy.getElementById( position2id[ from ] );
          }
          if( next[ from ][ to ] === undefined ){
            return undefined;
          }

          var path = [ cy.getElementById( position2id[ from ] ) ];
          var prev = from;
          while( from !== to ){
            prev = from;
            from = next[ from ][ to ];

            var edge = edgeNext[ prev ][ from ];
            path.push( edge );

            path.push( cy.getElementById( position2id[ from ] ) );
          }
          return path;
        };

        if( is.string( from ) ){
          // from is a selector string
          var fromId = (cy.filter( from )[0]).id();
        } else {
          // from is a node
          var fromId = from.id();
        }

        if( is.string( to ) ){
          // to is a selector string
          var toId = (cy.filter( to )[0]).id();
        } else {
          // to is a node
          var toId = to.id();
        }

        var pathArr = reconstructPathAux( id2position[ fromId ],
                      id2position[ toId ],
                      next,
                      position2id,
                      edgeNext );

        return cy.collection( pathArr );
      }
    };

    return res;

  } // floydWarshall

}); // elesfn

module.exports = elesfn;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var elesfn = {};

[
  __webpack_require__( 40 ),
  __webpack_require__( 43 ),
  __webpack_require__( 47 ),
  __webpack_require__( 37 ),
  __webpack_require__( 44 ),
  __webpack_require__( 38 ),
  __webpack_require__( 46 ),
  __webpack_require__( 48 ),
  __webpack_require__( 42 ),
  __webpack_require__( 41 ),
  __webpack_require__( 39 )
].forEach( function( props ){
  util.extend( elesfn, props );
} );

module.exports = elesfn;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var elesfn = ({

  // Computes the minimum cut of an undirected graph
  // Returns the correct answer with high probability
  kargerStein: function( options ){
    var eles = this;

    options = options || {};

    // Function which colapses 2 (meta) nodes into one
    // Updates the remaining edge lists
    // Receives as a paramater the edge which causes the collapse
    var colapse = function( edgeIndex, nodeMap, remainingEdges ){
      var edgeInfo = remainingEdges[ edgeIndex ];
      var sourceIn = edgeInfo[1];
      var targetIn = edgeInfo[2];
      var partition1 = nodeMap[ sourceIn ];
      var partition2 = nodeMap[ targetIn ];

      // Delete all edges between partition1 and partition2
      var newEdges = remainingEdges.filter( function( edge ){
        if( nodeMap[ edge[1] ] === partition1 && nodeMap[ edge[2] ] === partition2 ){
          return false;
        }
        if( nodeMap[ edge[1] ] === partition2 && nodeMap[ edge[2] ] === partition1 ){
          return false;
        }
        return true;
      } );

      // All edges pointing to partition2 should now point to partition1
      for( var i = 0; i < newEdges.length; i++ ){
        var edge = newEdges[ i ];
        if( edge[1] === partition2 ){ // Check source
          newEdges[ i ] = edge.slice( 0 );
          newEdges[ i ][1] = partition1;
        } else if( edge[2] === partition2 ){ // Check target
          newEdges[ i ] = edge.slice( 0 );
          newEdges[ i ][2] = partition1;
        }
      }

      // Move all nodes from partition2 to partition1
      for( var i = 0; i < nodeMap.length; i++ ){
        if( nodeMap[ i ] === partition2 ){
          nodeMap[ i ] = partition1;
        }
      }

      return newEdges;
    };


    // Contracts a graph until we reach a certain number of meta nodes
    var contractUntil = function( metaNodeMap,
                   remainingEdges,
                   size,
                   sizeLimit ){
      // Stop condition
      if( size <= sizeLimit ){
        return remainingEdges;
      }

      // Choose an edge randomly
      var edgeIndex = Math.floor( (Math.random() * remainingEdges.length) );

      // Colapse graph based on edge
      var newEdges = colapse( edgeIndex, metaNodeMap, remainingEdges );

      return contractUntil( metaNodeMap,
                 newEdges,
                 size - 1,
                 sizeLimit );
    };

    var cy = this._private.cy;
    var edges = this.edges().stdFilter( function( e ){ return !e.isLoop(); } );
    var nodes = this.nodes();
    var numNodes = nodes.length;
    var numEdges = edges.length;
    var numIter = Math.ceil( Math.pow( Math.log( numNodes ) / Math.LN2, 2 ) );
    var stopSize = Math.floor( numNodes / Math.sqrt( 2 ) );

    if( numNodes < 2 ){
      util.error( 'At least 2 nodes are required for Karger-Stein algorithm' );
      return undefined;
    }

    // Create numerical identifiers for each node
    // mapping: node id -> position in nodes array
    // for reverse mapping, simply use nodes array
    var id2position = {};
    for( var i = 0; i < numNodes; i++ ){
      id2position[ nodes[ i ].id() ] = i;
    }

    // Now store edge destination as indexes
    // Format for each edge (edge index, source node index, target node index)
    var edgeIndexes = [];
    for( var i = 0; i < numEdges; i++ ){
      var e = edges[ i ];
      edgeIndexes.push( [ i, id2position[ e.source().id() ], id2position[ e.target().id() ] ] );
    }

    // We will store the best cut found here
    var minCutSize = Infinity;
    var minCut;

    // Initial meta node partition
    var originalMetaNode = [];
    for( var i = 0; i < numNodes; i++ ){
      originalMetaNode.push( i );
    }

    // Main loop
    for( var iter = 0; iter <= numIter; iter++ ){
      // Create new meta node partition
      var metaNodeMap = originalMetaNode.slice( 0 );

      // Contract until stop point (stopSize nodes)
      var edgesState = contractUntil( metaNodeMap, edgeIndexes, numNodes, stopSize );

      // Create a copy of the colapsed nodes state
      var metaNodeMap2 = metaNodeMap.slice( 0 );

      // Run 2 iterations starting in the stop state
      var res1 = contractUntil( metaNodeMap, edgesState, stopSize, 2 );
      var res2 = contractUntil( metaNodeMap2, edgesState, stopSize, 2 );

      // Is any of the 2 results the best cut so far?
      if( res1.length <= res2.length && res1.length < minCutSize ){
        minCutSize = res1.length;
        minCut = [ res1, metaNodeMap ];
      } else if( res2.length <= res1.length && res2.length < minCutSize ){
        minCutSize = res2.length;
        minCut = [ res2, metaNodeMap2 ];
      }
    } // end of main loop


    // Construct result
    var resEdges = (minCut[0]).map( function( e ){ return edges[ e[0] ]; } );
    var partition1 = [];
    var partition2 = [];

    // traverse metaNodeMap for best cut
    var witnessNodePartition = minCut[1][0];
    for( var i = 0; i < minCut[1].length; i++ ){
      var partitionId = minCut[1][ i ];
      if( partitionId === witnessNodePartition ){
        partition1.push( nodes[ i ] );
      } else {
        partition2.push( nodes[ i ] );
      }
    }

    var ret = {
      cut: eles.spawn( cy, resEdges ),
      partition1: eles.spawn( partition1 ),
      partition2: eles.spawn( partition2 )
    };

    return ret;
  }
}); // elesfn


module.exports = elesfn;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

// search, spanning trees, etc
var elesfn = ({

  // kruskal's algorithm (finds min spanning tree, assuming undirected graph)
  // implemented from pseudocode from wikipedia
  kruskal: function( weightFn ){
    var cy = this.cy();

    weightFn = is.fn( weightFn ) ? weightFn : function(){ return 1; }; // if not specified, assume each edge has equal weight (1)

    function findSet( ele ){
      for( var i = 0; i < forest.length; i++ ){
        var eles = forest[ i ];

        if( eles.anySame( ele ) ){
          return {
            eles: eles,
            index: i
          };
        }
      }
    }

    var A = cy.collection( cy, [] );
    var forest = [];
    var nodes = this.nodes();

    for( var i = 0; i < nodes.length; i++ ){
      forest.push( nodes[ i ].collection() );
    }

    var edges = this.edges();
    var S = edges.toArray().sort( function( a, b ){
      var weightA = weightFn.call( a, a );
      var weightB = weightFn.call( b, b );

      return weightA - weightB;
    } );

    for( var i = 0; i < S.length; i++ ){
      var edge = S[ i ];
      var u = edge.source()[0];
      var v = edge.target()[0];
      var setU = findSet( u );
      var setV = findSet( v );

      if( setU.index !== setV.index ){
        A = A.add( edge );

        // combine forests for u and v
        forest[ setU.index ] = setU.eles.add( setV.eles );
        forest.splice( setV.index, 1 );
      }
    }

    return nodes.add( A );
  }
});

module.exports = elesfn;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var elesfn = ({

  pageRank: function( options ){
    options = options || {};

    var normalizeVector = function( vector ){
      var length = vector.length;

      // First, get sum of all elements
      var total = 0;
      for( var i = 0; i < length; i++ ){
        total += vector[ i ];
      }

      // Now, divide each by the sum of all elements
      for( var i = 0; i < length; i++ ){
        vector[ i ] = vector[ i ] / total;
      }
    };

    // dampingFactor - optional
    if( options != null &&
      options.dampingFactor != null ){
      var dampingFactor = options.dampingFactor;
    } else {
      var dampingFactor = 0.8; // Default damping factor
    }

    // desired precision - optional
    if( options != null &&
      options.precision != null ){
      var epsilon = options.precision;
    } else {
      var epsilon = 0.000001; // Default precision
    }

    // Max number of iterations - optional
    if( options != null &&
      options.iterations != null ){
      var numIter = options.iterations;
    } else {
      var numIter = 200; // Default number of iterations
    }

    // Weight function - optional
    if( options != null &&
      options.weight != null &&
      is.fn( options.weight ) ){
      var weightFn = options.weight;
    } else {
      // If not specified, assume each edge has equal weight (1)
      var weightFn = function( e ){return 1;};
    }

    var cy = this._private.cy;
    var edges = this.edges().stdFilter( function( e ){ return !e.isLoop(); } );
    var nodes = this.nodes();
    var numNodes = nodes.length;
    var numEdges = edges.length;

    // Create numerical identifiers for each node
    // mapping: node id -> position in nodes array
    // for reverse mapping, simply use nodes array
    var id2position = {};
    for( var i = 0; i < numNodes; i++ ){
      id2position[ nodes[ i ].id() ] = i;
    }

    // Construct transposed adjacency matrix
    // First lets have a zeroed matrix of the right size
    // We'll also keep track of the sum of each column
    var matrix = [];
    var columnSum = [];
    var additionalProb = (1 - dampingFactor) / numNodes;

    // Create null matric
    for( var i = 0; i < numNodes; i++ ){
      var newRow = [];
      for( var j = 0; j < numNodes; j++ ){
        newRow.push( 0.0 );
      }
      matrix.push( newRow );
      columnSum.push( 0.0 );
    }

    // Now, process edges
    for( var i = 0; i < numEdges; i++ ){
      var edge = edges[ i ];
      var s = id2position[ edge.source().id() ];
      var t = id2position[ edge.target().id() ];
      var w = weightFn.apply( edge, [ edge ] );

      // Update matrix
      matrix[ t ][ s ] += w;

      // Update column sum
      columnSum[ s ] += w;
    }

    // Add additional probability based on damping factor
    // Also, take into account columns that have sum = 0
    var p = 1.0 / numNodes + additionalProb; // Shorthand
    // Traverse matrix, column by column
    for( var j = 0; j < numNodes; j++ ){
      if( columnSum[ j ] === 0 ){
        // No 'links' out from node jth, assume equal probability for each possible node
        for( var i = 0; i < numNodes; i++ ){
          matrix[ i ][ j ] = p;
        }
      } else {
        // Node jth has outgoing link, compute normalized probabilities
        for( var i = 0; i < numNodes; i++ ){
          matrix[ i ][ j ] = matrix[ i ][ j ] / columnSum[ j ] + additionalProb;
        }
      }
    }

    // Compute dominant eigenvector using power method
    var eigenvector = [];
    var nullVector = [];
    var previous;

    // Start with a vector of all 1's
    // Also, initialize a null vector which will be used as shorthand
    for( var i = 0; i < numNodes; i++ ){
      eigenvector.push( 1.0 );
      nullVector.push( 0.0 );
    }

    for( var iter = 0; iter < numIter; iter++ ){
      // New array with all 0's
      var temp = nullVector.slice( 0 );

      // Multiply matrix with previous result
      for( var i = 0; i < numNodes; i++ ){
        for( var j = 0; j < numNodes; j++ ){
          temp[ i ] += matrix[ i ][ j ] * eigenvector[ j ];
        }
      }

      normalizeVector( temp );
      previous = eigenvector;
      eigenvector = temp;

      var diff = 0;
      // Compute difference (squared module) of both vectors
      for( var i = 0; i < numNodes; i++ ){
        diff += Math.pow( previous[ i ] - eigenvector[ i ], 2 );
      }

      // If difference is less than the desired threshold, stop iterating
      if( diff < epsilon ){
        break;
      }
    }

    // Construct result
    var res = {
      rank: function( node ){
        if( is.string( node ) ){
          // is a selector string
          var nodeId = (cy.filter( node )[0]).id();
        } else {
          // is a node object
          var nodeId = node.id();
        }
        return eigenvector[ id2position[ nodeId ] ];
      }
    };


    return res;
  } // pageRank

}); // elesfn

module.exports = elesfn;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );

var elesfn = ({
  animate: define.animate(),
  animation: define.animation(),
  animated: define.animated(),
  clearQueue: define.clearQueue(),
  delay: define.delay(),
  delayAnimation: define.delayAnimation(),
  stop: define.stop()
});

module.exports = elesfn;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var elesfn = ({
  classes: function( classes ){
    classes = ( classes || '' ).match( /\S+/g ) || [];
    var self = this;
    var changed = [];
    var classesMap = {};

    // fill in classes map
    for( var i = 0; i < classes.length; i++ ){
      var cls = classes[ i ];

      classesMap[ cls ] = true;
    }

    // check and update each ele
    for( var j = 0; j < self.length; j++ ){
      var ele = self[ j ];
      var _p = ele._private;
      var eleClasses = _p.classes;
      var changedEle = false;

      // check if ele has all of the passed classes
      for( var i = 0; i < classes.length; i++ ){
        var cls = classes[ i ];
        var eleHasClass = eleClasses[ cls ];

        if( !eleHasClass ){
          changedEle = true;
          break;
        }
      }

      // check if ele has classes outside of those passed
      if( !changedEle ){
        var classes = Object.keys( eleClasses );

        for( var i = 0; i < classes.length; i++ ){
          var eleCls = classes[i];
          var eleHasClass = eleClasses[ eleCls ];
          var specdClass = classesMap[ eleCls ]; // i.e. this class is passed to the function

          if( eleHasClass && !specdClass ){
            changedEle = true;
            break;
          }
        }
      }

      if( changedEle ){
        _p.classes = util.copy( classesMap );

        changed.push( ele );
      }
    }

    // trigger update style on those eles that had class changes
    if( changed.length > 0 ){
      this.spawn( changed )
        .updateStyle()
        .trigger( 'class' )
      ;
    }

    return self;
  },

  addClass: function( classes ){
    return this.toggleClass( classes, true );
  },

  hasClass: function( className ){
    var ele = this[0];
    return ( ele != null && ele._private.classes[ className ] ) ? true : false;
  },

  toggleClass: function( classesStr, toggle ){
    var classes = classesStr.match( /\S+/g ) || [];
    var self = this;
    var changed = []; // eles who had classes changed

    for( var i = 0, il = self.length; i < il; i++ ){
      var ele = self[ i ];
      var changedEle = false;

      for( var j = 0; j < classes.length; j++ ){
        var cls = classes[ j ];
        var eleClasses = ele._private.classes;
        var hasClass = eleClasses[ cls ];
        var shouldAdd = toggle || (toggle === undefined && !hasClass);

        if( shouldAdd ){
          eleClasses[ cls ] = true;

          if( !hasClass && !changedEle ){
            changed.push( ele );
            changedEle = true;
          }
        } else { // then remove
          eleClasses[ cls ] = false;

          if( hasClass && !changedEle ){
            changed.push( ele );
            changedEle = true;
          }
        }

      } // for j classes
    } // for i eles

    // trigger update style on those eles that had class changes
    if( changed.length > 0 ){
      this.spawn( changed )
        .updateStyle()
        .trigger( 'class' )
      ;
    }

    return self;
  },

  removeClass: function( classes ){
    return this.toggleClass( classes, false );
  },

  flashClass: function( classes, duration ){
    var self = this;

    if( duration == null ){
      duration = 250;
    } else if( duration === 0 ){
      return self; // nothing to do really
    }

    self.addClass( classes );
    setTimeout( function(){
      self.removeClass( classes );
    }, duration );

    return self;
  }
});

module.exports = elesfn;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elesfn = ({
  allAre: function( selector ){
    return this.filter( selector ).length === this.length;
  },

  is: function( selector ){
    return this.filter( selector ).length > 0;
  },

  some: function( fn, thisArg ){
    for( var i = 0; i < this.length; i++ ){
      var ret = !thisArg ? fn( this[ i ], i, this ) : fn.apply( thisArg, [ this[ i ], i, this ] );

      if( ret ){
        return true;
      }
    }

    return false;
  },

  every: function( fn, thisArg ){
    for( var i = 0; i < this.length; i++ ){
      var ret = !thisArg ? fn( this[ i ], i, this ) : fn.apply( thisArg, [ this[ i ], i, this ] );

      if( !ret ){
        return false;
      }
    }

    return true;
  },

  same: function( collection ){
    collection = this.cy().collection( collection );

    // cheap extra check
    if( this.length !== collection.length ){
      return false;
    }

    return this.intersect( collection ).length === this.length;
  },

  anySame: function( collection ){
    collection = this.cy().collection( collection );

    return this.intersect( collection ).length > 0;
  },

  allAreNeighbors: function( collection ){
    collection = this.cy().collection( collection );

    return this.neighborhood().intersect( collection ).length === collection.length;
  }
});

elesfn.allAreNeighbours = elesfn.allAreNeighbors;

module.exports = elesfn;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elesfn = ({
  parent: function( selector ){
    var parents = [];
    var cy = this._private.cy;

    for( var i = 0; i < this.length; i++ ){
      var ele = this[ i ];
      var parent = cy.getElementById( ele._private.data.parent );

      if( parent.size() > 0 ){
        parents.push( parent );
      }
    }

    return this.spawn( parents, { unique: true } ).filter( selector );
  },

  parents: function( selector ){
    var parents = [];

    var eles = this.parent();
    while( eles.nonempty() ){
      for( var i = 0; i < eles.length; i++ ){
        var ele = eles[ i ];
        parents.push( ele );
      }

      eles = eles.parent();
    }

    return this.spawn( parents, { unique: true } ).filter( selector );
  },

  commonAncestors: function( selector ){
    var ancestors;

    for( var i = 0; i < this.length; i++ ){
      var ele = this[ i ];
      var parents = ele.parents();

      ancestors = ancestors || parents;

      ancestors = ancestors.intersect( parents ); // current list must be common with current ele parents set
    }

    return ancestors.filter( selector );
  },

  orphans: function( selector ){
    return this.stdFilter( function( ele ){
      return ele.isNode() && ele.parent().empty();
    } ).filter( selector );
  },

  nonorphans: function( selector ){
    return this.stdFilter( function( ele ){
      return ele.isNode() && ele.parent().nonempty();
    } ).filter( selector );
  },

  children: function( selector ){
    var children = [];

    for( var i = 0; i < this.length; i++ ){
      var ele = this[ i ];
      children = children.concat( ele._private.children );
    }

    return this.spawn( children, { unique: true } ).filter( selector );
  },

  siblings: function( selector ){
    return this.parent().children().not( this ).filter( selector );
  },

  isParent: function(){
    var ele = this[0];

    if( ele ){
      return ele._private.children.length !== 0;
    }
  },

  isChild: function(){
    var ele = this[0];

    if( ele ){
      return ele._private.data.parent !== undefined && ele.parent().length !== 0;
    }
  },

  descendants: function( selector ){
    var elements = [];

    function add( eles ){
      for( var i = 0; i < eles.length; i++ ){
        var ele = eles[ i ];

        elements.push( ele );

        if( ele.children().nonempty() ){
          add( ele.children() );
        }
      }
    }

    add( this.children() );

    return this.spawn( elements, { unique: true } ).filter( selector );
  }
});

// aliases
elesfn.ancestors = elesfn.parents;

module.exports = elesfn;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );
var fn, elesfn;

fn = elesfn = ({

  data: define.data( {
    field: 'data',
    bindingEvent: 'data',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'data',
    settingTriggersEvent: true,
    triggerFnName: 'trigger',
    allowGetting: true,
    immutableKeys: {
      'id': true,
      'source': true,
      'target': true,
      'parent': true
    },
    updateStyle: true
  } ),

  removeData: define.removeData( {
    field: 'data',
    event: 'data',
    triggerFnName: 'trigger',
    triggerEvent: true,
    immutableKeys: {
      'id': true,
      'source': true,
      'target': true,
      'parent': true
    },
    updateStyle: true
  } ),

  scratch: define.data( {
    field: 'scratch',
    bindingEvent: 'scratch',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'scratch',
    settingTriggersEvent: true,
    triggerFnName: 'trigger',
    allowGetting: true,
    updateStyle: true
  } ),

  removeScratch: define.removeData( {
    field: 'scratch',
    event: 'scratch',
    triggerFnName: 'trigger',
    triggerEvent: true,
    updateStyle: true
  } ),

  rscratch: define.data( {
    field: 'rscratch',
    allowBinding: false,
    allowSetting: true,
    settingTriggersEvent: false,
    allowGetting: true
  } ),

  removeRscratch: define.removeData( {
    field: 'rscratch',
    triggerEvent: false
  } ),

  id: function(){
    var ele = this[0];

    if( ele ){
      return ele._private.data.id;
    }
  }

});

// aliases
fn.attr = fn.data;
fn.removeAttr = fn.removeData;

module.exports = elesfn;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var elesfn = {};

function defineDegreeFunction( callback ){
  return function( includeLoops ){
    var self = this;

    if( includeLoops === undefined ){
      includeLoops = true;
    }

    if( self.length === 0 ){ return; }

    if( self.isNode() && !self.removed() ){
      var degree = 0;
      var node = self[0];
      var connectedEdges = node._private.edges;

      for( var i = 0; i < connectedEdges.length; i++ ){
        var edge = connectedEdges[ i ];

        if( !includeLoops && edge.isLoop() ){
          continue;
        }

        degree += callback( node, edge );
      }

      return degree;
    } else {
      return;
    }
  };
}

util.extend( elesfn, {
  degree: defineDegreeFunction( function( node, edge ){
    if( edge.source().same( edge.target() ) ){
      return 2;
    } else {
      return 1;
    }
  } ),

  indegree: defineDegreeFunction( function( node, edge ){
    if( edge.target().same( node ) ){
      return 1;
    } else {
      return 0;
    }
  } ),

  outdegree: defineDegreeFunction( function( node, edge ){
    if( edge.source().same( node ) ){
      return 1;
    } else {
      return 0;
    }
  } )
} );

function defineDegreeBoundsFunction( degreeFn, callback ){
  return function( includeLoops ){
    var ret;
    var nodes = this.nodes();

    for( var i = 0; i < nodes.length; i++ ){
      var ele = nodes[ i ];
      var degree = ele[ degreeFn ]( includeLoops );
      if( degree !== undefined && (ret === undefined || callback( degree, ret )) ){
        ret = degree;
      }
    }

    return ret;
  };
}

util.extend( elesfn, {
  minDegree: defineDegreeBoundsFunction( 'degree', function( degree, min ){
    return degree < min;
  } ),

  maxDegree: defineDegreeBoundsFunction( 'degree', function( degree, max ){
    return degree > max;
  } ),

  minIndegree: defineDegreeBoundsFunction( 'indegree', function( degree, min ){
    return degree < min;
  } ),

  maxIndegree: defineDegreeBoundsFunction( 'indegree', function( degree, max ){
    return degree > max;
  } ),

  minOutdegree: defineDegreeBoundsFunction( 'outdegree', function( degree, min ){
    return degree < min;
  } ),

  maxOutdegree: defineDegreeBoundsFunction( 'outdegree', function( degree, max ){
    return degree > max;
  } )
} );

util.extend( elesfn, {
  totalDegree: function( includeLoops ){
    var total = 0;
    var nodes = this.nodes();

    for( var i = 0; i < nodes.length; i++ ){
      total += nodes[ i ].degree( includeLoops );
    }

    return total;
  }
} );

module.exports = elesfn;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );
var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var fn, elesfn;

fn = elesfn = ({

  position: define.data( {
    field: 'position',
    bindingEvent: 'position',
    allowBinding: true,
    allowSetting: true,
    settingEvent: 'position',
    settingTriggersEvent: true,
    triggerFnName: 'rtrigger',
    allowGetting: true,
    validKeys: [ 'x', 'y' ],
    onSet: function( eles ){
      var updatedEles = eles.updateCompoundBounds();
      updatedEles.rtrigger( 'position' );
    },
    canSet: function( ele ){
      return !ele.locked() && !ele.isParent();
    }
  } ),

  // position but no notification to renderer
  silentPosition: define.data( {
    field: 'position',
    bindingEvent: 'position',
    allowBinding: false,
    allowSetting: true,
    settingEvent: 'position',
    settingTriggersEvent: false,
    triggerFnName: 'trigger',
    allowGetting: true,
    validKeys: [ 'x', 'y' ],
    onSet: function( eles ){
      eles.updateCompoundBounds();
    },
    canSet: function( ele ){
      return !ele.locked() && !ele.isParent();
    }
  } ),

  positions: function( pos, silent ){
    if( is.plainObject( pos ) ){
      this.position( pos );

    } else if( is.fn( pos ) ){
      var fn = pos;

      for( var i = 0; i < this.length; i++ ){
        var ele = this[ i ];

        var pos = fn.apply( ele, [ i, ele ] );

        if( pos && !ele.locked() && !ele.isParent() ){
          var elePos = ele._private.position;
          elePos.x = pos.x;
          elePos.y = pos.y;
        }
      }

      var updatedEles = this.updateCompoundBounds();
      var toTrigger = updatedEles.length > 0 ? this.add( updatedEles ) : this;

      if( silent ){
        toTrigger.trigger( 'position' );
      } else {
        toTrigger.rtrigger( 'position' );
      }
    }

    return this; // chaining
  },

  silentPositions: function( pos ){
    return this.positions( pos, true );
  },

  // get/set the rendered (i.e. on screen) positon of the element
  renderedPosition: function( dim, val ){
    var ele = this[0];
    var cy = this.cy();
    var zoom = cy.zoom();
    var pan = cy.pan();
    var rpos = is.plainObject( dim ) ? dim : undefined;
    var setting = rpos !== undefined || ( val !== undefined && is.string( dim ) );

    if( ele && ele.isNode() ){ // must have an element and must be a node to return position
      if( setting ){
        for( var i = 0; i < this.length; i++ ){
          var ele = this[ i ];

          if( val !== undefined ){ // set one dimension
            ele._private.position[ dim ] = ( val - pan[ dim ] ) / zoom;
          } else if( rpos !== undefined ){ // set whole position
            ele._private.position = {
              x: ( rpos.x - pan.x ) / zoom,
              y: ( rpos.y - pan.y ) / zoom
            };
          }
        }

        this.rtrigger( 'position' );
      } else { // getting
        var pos = ele._private.position;
        rpos = {
          x: pos.x * zoom + pan.x,
          y: pos.y * zoom + pan.y
        };

        if( dim === undefined ){ // then return the whole rendered position
          return rpos;
        } else { // then return the specified dimension
          return rpos[ dim ];
        }
      }
    } else if( !setting ){
      return undefined; // for empty collection case
    }

    return this; // chaining
  },

  // get/set the position relative to the parent
  relativePosition: function( dim, val ){
    var ele = this[0];
    var cy = this.cy();
    var ppos = is.plainObject( dim ) ? dim : undefined;
    var setting = ppos !== undefined || ( val !== undefined && is.string( dim ) );
    var hasCompoundNodes = cy.hasCompoundNodes();

    if( ele && ele.isNode() ){ // must have an element and must be a node to return position
      if( setting ){
        for( var i = 0; i < this.length; i++ ){
          var ele = this[ i ];
          var parent = hasCompoundNodes ? ele.parent() : null;
          var hasParent = parent && parent.length > 0;
          var relativeToParent = hasParent;

          if( hasParent ){
            parent = parent[0];
          }

          var origin = relativeToParent ? parent._private.position : { x: 0, y: 0 };

          if( val !== undefined ){ // set one dimension
            ele._private.position[ dim ] = val + origin[ dim ];
          } else if( ppos !== undefined ){ // set whole position
            ele._private.position = {
              x: ppos.x + origin.x,
              y: ppos.y + origin.y
            };
          }
        }

        this.rtrigger( 'position' );

      } else { // getting
        var pos = ele._private.position;
        var parent = hasCompoundNodes ? ele.parent() : null;
        var hasParent = parent && parent.length > 0;
        var relativeToParent = hasParent;

        if( hasParent ){
          parent = parent[0];
        }

        var origin = relativeToParent ? parent._private.position : { x: 0, y: 0 };

        ppos = {
          x: pos.x - origin.x,
          y: pos.y - origin.y
        };

        if( dim === undefined ){ // then return the whole rendered position
          return ppos;
        } else { // then return the specified dimension
          return ppos[ dim ];
        }
      }
    } else if( !setting ){
      return undefined; // for empty collection case
    }

    return this; // chaining
  },

  renderedBoundingBox: function( options ){
    var bb = this.boundingBox( options );
    var cy = this.cy();
    var zoom = cy.zoom();
    var pan = cy.pan();

    var x1 = bb.x1 * zoom + pan.x;
    var x2 = bb.x2 * zoom + pan.x;
    var y1 = bb.y1 * zoom + pan.y;
    var y2 = bb.y2 * zoom + pan.y;

    return {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
      w: x2 - x1,
      h: y2 - y1
    };
  },

  updateCompoundBounds: function(){
    var cy = this.cy();

    // save cycles for non compound graphs or when style disabled
    if( !cy.styleEnabled() || !cy.hasCompoundNodes() ){ return cy.collection(); }

    var updated = [];

    function update( parent ){
      if( !parent.isParent() ){ return; }

      var _p = parent._private;
      var children = parent.children();
      var includeLabels = parent.pstyle( 'compound-sizing-wrt-labels' ).value === 'include';
      var bb = children.boundingBox( {
        includeLabels: includeLabels,
        includeShadows: false,
        includeOverlays: false,

        // updating the compound bounds happens outside of the regular
        // cache cycle (i.e. before fired events)
        useCache: false
      } );
      var pos = _p.position;

      _p.autoWidth = bb.w;
      pos.x = (bb.x1 + bb.x2) / 2;

      _p.autoHeight = bb.h;
      pos.y = (bb.y1 + bb.y2) / 2;

      updated.push( parent );
    }

    // go up, level by level
    var eles = this;
    while( eles.nonempty() ){

      // update each parent node in this level
      for( var i = 0; i < eles.length; i++ ){
        var ele = eles[ i ];

        update( ele );
      }

      // next level
      eles = eles.parent();
    }

    // return changed
    return this.spawn( updated );
  }
});

var noninf = function( x ){
  if( x === Infinity || x === -Infinity ){
    return 0;
  }

  return x;
};

var updateBounds = function( b, x1, y1, x2, y2 ){
  // don't update with zero area boxes
  if( x2 - x1 === 0 || y2 - y1 === 0 ){ return; }

  b.x1 = x1 < b.x1 ? x1 : b.x1;
  b.x2 = x2 > b.x2 ? x2 : b.x2;
  b.y1 = y1 < b.y1 ? y1 : b.y1;
  b.y2 = y2 > b.y2 ? y2 : b.y2;
};

var updateBoundsFromBox = function( b, b2 ){
  return updateBounds( b, b2.x1, b2.y1, b2.x2, b2.y2 );
};

var prefixedProperty = function( obj, field, prefix ){
  return util.getPrefixedProperty( obj, field, prefix );
};

var updateBoundsFromArrow = function( bounds, ele, prefix, options ){
  var _p = ele._private;
  var rstyle = _p.rstyle;
  var halfArW = rstyle.arrowWidth / 2;
  var arrowType = ele.pstyle( prefix + '-arrow-shape' ).value;
  var x;
  var y;

  if( arrowType !== 'none' ){
    if( prefix === 'source' ){
      x = rstyle.srcX;
      y = rstyle.srcY;
    } else if( prefix === 'target' ){
      x = rstyle.tgtX;
      y = rstyle.tgtY;
    } else {
      x = rstyle.midX;
      y = rstyle.midY;
    }

    updateBounds( bounds, x - halfArW, y - halfArW, x + halfArW, y + halfArW );
  }
};

var updateBoundsFromLabel = function( bounds, ele, prefix, options ){
  var prefixDash;

  if( prefix ){
    prefixDash = prefix + '-';
  } else {
    prefixDash = '';
  }

  var _p = ele._private;
  var rstyle = _p.rstyle;
  var label = ele.pstyle( prefixDash + 'label' ).strValue;

  if( label ){
    var halign = ele.pstyle( 'text-halign' );
    var valign = ele.pstyle( 'text-valign' );
    var labelWidth = prefixedProperty( rstyle, 'labelWidth', prefix );
    var labelHeight = prefixedProperty( rstyle, 'labelHeight', prefix );
    var labelX = prefixedProperty( rstyle, 'labelX', prefix );
    var labelY = prefixedProperty( rstyle, 'labelY', prefix );
    var marginX = ele.pstyle( prefixDash + 'text-margin-x' ).pfValue;
    var marginY = ele.pstyle( prefixDash + 'text-margin-y' ).pfValue;
    var isEdge = ele.isEdge();
    var rotation = ele.pstyle( prefixDash + 'text-rotation' );
    var shadowR = ele.pstyle( 'text-shadow-blur' ).pfValue / 2;
    var shadowX = ele.pstyle( 'text-shadow-offset-x' ).pfValue;
    var shadowY = ele.pstyle( 'text-shadow-offset-y' ).pfValue;
    var shadowOpacity = ele.pstyle( 'text-shadow-opacity' ).value;
    var outlineWidth = ele.pstyle( 'text-outline-width' ).pfValue;
    var borderWidth = ele.pstyle( 'text-border-width' ).pfValue;
    var halfBorderWidth = borderWidth / 2;

    var lh = labelHeight;
    var lw = labelWidth;
    var lw_2 = lw / 2;
    var lh_2 = lh / 2;
    var lx1, lx2, ly1, ly2;

    if( isEdge ){
      lx1 = labelX - lw_2;
      lx2 = labelX + lw_2;
      ly1 = labelY - lh_2;
      ly2 = labelY + lh_2;
    } else {
      switch( halign.value ){
        case 'left':
          lx1 = labelX - lw;
          lx2 = labelX;
          break;

        case 'center':
          lx1 = labelX - lw_2;
          lx2 = labelX + lw_2;
          break;

        case 'right':
          lx1 = labelX;
          lx2 = labelX + lw;
          break;
      }

      switch( valign.value ){
        case 'top':
          ly1 = labelY - lh;
          ly2 = labelY;
          break;

        case 'center':
          ly1 = labelY - lh_2;
          ly2 = labelY + lh_2;
          break;

        case 'bottom':
          ly1 = labelY;
          ly2 = labelY + lh;
          break;
      }
    }

    var isAutorotate = ( isEdge && rotation.strValue === 'autorotate' );
    var isPfValue = ( rotation.pfValue != null && rotation.pfValue !== 0 );

    if( isAutorotate || isPfValue ){
      var theta = isAutorotate ? prefixedProperty( _p.rstyle, 'labelAngle', prefix ) : rotation.pfValue;
      var cos = Math.cos( theta );
      var sin = Math.sin( theta );

      var rotate = function( x, y ){
        x = x - labelX;
        y = y - labelY;

        return {
          x: x * cos - y * sin + labelX,
          y: x * sin + y * cos + labelY
        };
      };

      var px1y1 = rotate( lx1, ly1 );
      var px1y2 = rotate( lx1, ly2 );
      var px2y1 = rotate( lx2, ly1 );
      var px2y2 = rotate( lx2, ly2 );

      lx1 = Math.min( px1y1.x, px1y2.x, px2y1.x, px2y2.x );
      lx2 = Math.max( px1y1.x, px1y2.x, px2y1.x, px2y2.x );
      ly1 = Math.min( px1y1.y, px1y2.y, px2y1.y, px2y2.y );
      ly2 = Math.max( px1y1.y, px1y2.y, px2y1.y, px2y2.y );
    }

    lx1 += marginX - Math.max( outlineWidth, halfBorderWidth );
    lx2 += marginX + Math.max( outlineWidth, halfBorderWidth );
    ly1 += marginY - Math.max( outlineWidth, halfBorderWidth );
    ly2 += marginY + Math.max( outlineWidth, halfBorderWidth );

    updateBounds( bounds, lx1, ly1, lx2, ly2 );

    if( options.includeShadows && shadowOpacity > 0 ){
      lx1 += - shadowR + shadowX;
      lx2 += + shadowR + shadowX;
      ly1 += - shadowR + shadowY;
      ly2 += + shadowR + shadowY;

      updateBounds( bounds, lx1, ly1, lx2, ly2 );
    }
  }

  return bounds;
};

// get the bounding box of the elements (in raw model position)
var boundingBoxImpl = function( ele, options ){
  var cy = ele._private.cy;
  var cy_p = cy._private;
  var styleEnabled = cy_p.styleEnabled;

  var bounds = {
    x1: Infinity,
    y1: Infinity,
    x2: -Infinity,
    y2: -Infinity
  };

  var _p = ele._private;
  var display = styleEnabled ? ele.pstyle( 'display' ).value : 'element';
  var isNode = ele.isNode();
  var isEdge = ele.isEdge();
  var ex1, ex2, ey1, ey2, x, y;
  var displayed = display !== 'none';

  if( displayed ){
    var overlayOpacity = 0;
    var overlayPadding = 0;

    if( styleEnabled && options.includeOverlays ){
      overlayOpacity = ele.pstyle( 'overlay-opacity' ).value;

      if( overlayOpacity !== 0 ){
        overlayPadding = ele.pstyle( 'overlay-padding' ).value;
      }
    }

    var w = 0;
    var wHalf = 0;

    if( styleEnabled ){
      w = ele.pstyle( 'width' ).pfValue;
      wHalf = w / 2;
    }

    if( isNode && options.includeNodes ){
      var pos = _p.position;
      x = pos.x;
      y = pos.y;
      var w = ele.outerWidth();
      var halfW = w / 2;
      var h = ele.outerHeight();
      var halfH = h / 2;

      // handle node dimensions
      /////////////////////////

      ex1 = x - halfW - overlayPadding;
      ex2 = x + halfW + overlayPadding;
      ey1 = y - halfH - overlayPadding;
      ey2 = y + halfH + overlayPadding;

      updateBounds( bounds, ex1, ey1, ex2, ey2 );

    } else if( isEdge && options.includeEdges ){
      var rstyle = _p.rstyle || {};

      // handle edge dimensions (rough box estimate)
      //////////////////////////////////////////////
      if( styleEnabled ){
        ex1 = Math.min( rstyle.srcX, rstyle.midX, rstyle.tgtX );
        ex2 = Math.max( rstyle.srcX, rstyle.midX, rstyle.tgtX );
        ey1 = Math.min( rstyle.srcY, rstyle.midY, rstyle.tgtY );
        ey2 = Math.max( rstyle.srcY, rstyle.midY, rstyle.tgtY );

        // take into account edge width
        ex1 -= wHalf;
        ex2 += wHalf;
        ey1 -= wHalf;
        ey2 += wHalf;

        updateBounds( bounds, ex1, ey1, ex2, ey2 );
      }

      // precise haystacks
      ////////////////////
      if( styleEnabled && ele.pstyle( 'curve-style' ).strValue === 'haystack' ){
        var hpts = rstyle.haystackPts;

        ex1 = hpts[0].x;
        ey1 = hpts[0].y;
        ex2 = hpts[1].x;
        ey2 = hpts[1].y;

        if( ex1 > ex2 ){
          var temp = ex1;
          ex1 = ex2;
          ex2 = temp;
        }

        if( ey1 > ey2 ){
          var temp = ey1;
          ey1 = ey2;
          ey2 = temp;
        }

        updateBounds( bounds, ex1 - wHalf, ey1 - wHalf, ex2 + wHalf, ey2 + wHalf );

      // handle points along edge
      ///////////////////////////
      } else {
        var pts = rstyle.bezierPts || rstyle.linePts || [];

        for( var j = 0; j < pts.length; j++ ){
          var pt = pts[ j ];

          ex1 = pt.x - wHalf;
          ex2 = pt.x + wHalf;
          ey1 = pt.y - wHalf;
          ey2 = pt.y + wHalf;

          updateBounds( bounds, ex1, ey1, ex2, ey2 );
        }

        // fallback on source and target positions
        //////////////////////////////////////////
        if( pts.length === 0 ){
          var n1 = _p.source;
          var n1_p = n1._private;
          var n1pos = n1_p.position;

          var n2 = _p.target;
          var n2_p = n2._private;
          var n2pos = n2_p.position;

          ex1 = n1pos.x;
          ex2 = n2pos.x;
          ey1 = n1pos.y;
          ey2 = n2pos.y;

          if( ex1 > ex2 ){
            var temp = ex1;
            ex1 = ex2;
            ex2 = temp;
          }

          if( ey1 > ey2 ){
            var temp = ey1;
            ey1 = ey2;
            ey2 = temp;
          }

          // take into account edge width
          ex1 -= wHalf;
          ex2 += wHalf;
          ey1 -= wHalf;
          ey2 += wHalf;

          updateBounds( bounds, ex1, ey1, ex2, ey2 );
        }
      }

    } // edges

    // shadow and overlay
    /////////////////////

    if( styleEnabled ){

      ex1 = bounds.x1;
      ex2 = bounds.x2;
      ey1 = bounds.y1;
      ey2 = bounds.y2;

      if( options.includeShadows && ele.pstyle('shadow-opacity').value > 0 ){
        var r = ele.pstyle('shadow-blur').pfValue / 2;
        var ox = ele.pstyle('shadow-offset-x').pfValue;
        var oy = ele.pstyle('shadow-offset-y').pfValue;

        updateBounds( bounds, ex1 - r + ox, ey1 - r + oy, ex2 + r + ox, ey2 + r + oy );
      }

      updateBounds( bounds, ex1 - overlayPadding, ey1 - overlayPadding, ex2 + overlayPadding, ey2 + overlayPadding );
    }

    // handle edge arrow size
    /////////////////////////

    if( styleEnabled && options.includeEdges && isEdge ){
      updateBoundsFromArrow( bounds, ele, 'mid-source', options );
      updateBoundsFromArrow( bounds, ele, 'mid-target', options );
      updateBoundsFromArrow( bounds, ele, 'source', options );
      updateBoundsFromArrow( bounds, ele, 'target', options );
    }

    // handle label dimensions
    //////////////////////////

    if( styleEnabled && options.includeLabels ){
      updateBoundsFromLabel( bounds, ele, null, options );

      if( isEdge ){
        updateBoundsFromLabel( bounds, ele, 'source', options );
        updateBoundsFromLabel( bounds, ele, 'target', options );
      }
    } // style enabled for labels
  } // if displayed

  bounds.x1 = noninf( bounds.x1 );
  bounds.y1 = noninf( bounds.y1 );
  bounds.x2 = noninf( bounds.x2 );
  bounds.y2 = noninf( bounds.y2 );
  bounds.w = noninf( bounds.x2 - bounds.x1 );
  bounds.h = noninf( bounds.y2 - bounds.y1 );

  // expand bounds by 1 because antialiasing can increase the visual/effective size by 1 on all sides
  if( bounds.w > 0 && bounds.h > 0 && displayed ){
    math.expandBoundingBox( bounds, 1 );
  }

  return bounds;
};

var tf = function( val ){
  if( val ){
    return 't';
  } else {
    return 'f';
  }
};

var getKey = function( opts ){
  var key = '';

  key += tf( opts.incudeNodes );
  key += tf( opts.includeEdges );
  key += tf( opts.includeLabels );
  key += tf( opts.includeShadows );
  key += tf( opts.includeOverlays );

  return key;
};

var cachedBoundingBoxImpl = function( ele, opts ){
  var _p = ele._private;
  var bb;
  var headless = ele.cy().headless();
  var key = opts === defBbOpts ? defBbOptsKey : getKey( opts );

  if( !opts.useCache || headless || !_p.bbCache || !_p.bbCache[key] ){
    bb = boundingBoxImpl( ele, opts );

    if( !headless ){
      _p.bbCache = _p.bbCache || {};
      _p.bbCache[key] = bb;
    }
  } else {
    bb = _p.bbCache[key];
  }

  return bb;
};

var defBbOpts = {
  includeNodes: true,
  includeEdges: true,
  includeLabels: true,
  includeShadows: true,
  includeOverlays: true,
  useCache: true
};

var defBbOptsKey = getKey( defBbOpts );

elesfn.recalculateRenderedStyle = function( useCache ){
  var cy = this.cy();
  var renderer = cy.renderer();
  var styleEnabled = cy.styleEnabled();

  if( renderer && styleEnabled ){
    renderer.recalculateRenderedStyle( this, useCache );
  }

  return this;
};

function filledBbOpts( options ){
  return {
    includeNodes: util.default( options.includeNodes, defBbOpts.includeNodes ),
    includeEdges: util.default( options.includeEdges, defBbOpts.includeEdges ),
    includeLabels: util.default( options.includeLabels, defBbOpts.includeLabels ),
    includeShadows: util.default( options.includeShadows, defBbOpts.includeShadows ),
    includeOverlays: util.default( options.includeOverlays, defBbOpts.includeOverlays ),
    useCache: util.default( options.useCache, defBbOpts.useCache )
  };
}

elesfn.boundingBox = function( options ){
  // the main usecase is ele.boundingBox() for a single element with no/def options
  // specified s.t. the cache is used, so check for this case to make it faster by
  // avoiding the overhead of the rest of the function
  if( this.length === 1 && this[0]._private.bbCache && (options === undefined || options.useCache === undefined || options.useCache === true) ){
    if( options === undefined ){
      options = defBbOpts;
    } else {
      options = filledBbOpts( options );
    }

    return cachedBoundingBoxImpl( this[0], options );
  }

  var bounds = {
    x1: Infinity,
    y1: Infinity,
    x2: -Infinity,
    y2: -Infinity
  };

  options = options || util.staticEmptyObject();

  var opts = filledBbOpts( options );

  var eles = this;
  var cy = eles.cy();
  var styleEnabled = cy.styleEnabled();

  if( styleEnabled ){
    this.recalculateRenderedStyle( opts.useCache );
  }

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[i];

    if( styleEnabled && ele.isEdge() && ele.pstyle('curve-style').strValue === 'bezier' ){
      ele.parallelEdges().recalculateRenderedStyle( opts.useCache ); // n.b. ele.parallelEdges() single is cached
    }

    updateBoundsFromBox( bounds, cachedBoundingBoxImpl( ele, opts ) );
  }

  bounds.x1 = noninf( bounds.x1 );
  bounds.y1 = noninf( bounds.y1 );
  bounds.x2 = noninf( bounds.x2 );
  bounds.y2 = noninf( bounds.y2 );
  bounds.w = noninf( bounds.x2 - bounds.x1 );
  bounds.h = noninf( bounds.y2 - bounds.y1 );

  return bounds;
};

var defineDimFns = function( opts ){
  opts.uppercaseName = util.capitalize( opts.name );
  opts.autoName = 'auto' + opts.uppercaseName;
  opts.labelName = 'label' + opts.uppercaseName;
  opts.outerName = 'outer' + opts.uppercaseName;
  opts.uppercaseOuterName = util.capitalize( opts.outerName );

  fn[ opts.name ] = function dimImpl(){
    var ele = this[0];
    var _p = ele._private;
    var cy = _p.cy;
    var styleEnabled = cy._private.styleEnabled;

    if( ele ){
      if( styleEnabled ){
        if( ele.isParent() ){
          return _p[ opts.autoName ] || 0;
        }

        var d = ele.pstyle( opts.name );

        switch( d.strValue ){
          case 'label':
            return _p.rstyle[ opts.labelName ] || 0;
          default:
            return d.pfValue;
        }
      } else {
        return 1;
      }
    }
  };

  fn[ 'outer' + opts.uppercaseName ] = function outerDimImpl(){
    var ele = this[0];
    var _p = ele._private;
    var cy = _p.cy;
    var styleEnabled = cy._private.styleEnabled;

    if( ele ){
      if( styleEnabled ){
        var dim = ele[ opts.name ]();
        var border = ele.pstyle( 'border-width' ).pfValue; // n.b. 1/2 each side
        var padding = 2 * ele.pstyle( 'padding' ).pfValue;

        return dim + border + padding;
      } else {
        return 1;
      }
    }
  };

  fn[ 'rendered' + opts.uppercaseName ] = function renderedDimImpl(){
    var ele = this[0];

    if( ele ){
      var d = ele[ opts.name ]();
      return d * this.cy().zoom();
    }
  };

  fn[ 'rendered' + opts.uppercaseOuterName ] = function renderedOuterDimImpl(){
    var ele = this[0];

    if( ele ){
      var od = ele[ opts.outerName ]();
      return od * this.cy().zoom();
    }
  };
};

defineDimFns( {
  name: 'width'
} );

defineDimFns( {
  name: 'height'
} );

// aliases
fn.modelPosition = fn.point = fn.position;
fn.modelPositions = fn.points = fn.positions;
fn.renderedPoint = fn.renderedPosition;
fn.relativePoint = fn.relativePosition;
fn.boundingbox = fn.boundingBox;
fn.renderedBoundingbox = fn.renderedBoundingBox;

module.exports = elesfn;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );

var elesfn = ({
  on: define.on(), // .on( events [, selector] [, data], handler)
  one: define.on( { unbindSelfOnTrigger: true } ),
  once: define.on( { unbindAllBindersOnTrigger: true } ),
  off: define.off(), // .off( events [, selector] [, handler] )
  trigger: define.trigger(), // .trigger( events [, extraParams] )

  rtrigger: function( event, extraParams ){ // for internal use only
    if( this.length === 0 ){ return; } // empty collections don't need to notify anything

    // notify renderer
    this.cy().notify( {
      type: event,
      eles: this
    } );

    this.trigger( event, extraParams );
    return this;
  }
});

// aliases:
define.eventAliasesOn( elesfn );

module.exports = elesfn;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var Selector = __webpack_require__( 10 );

var elesfn = ({
  nodes: function( selector ){
    return this.filter( function( i, element ){
      return element.isNode();
    } ).filter( selector );
  },

  edges: function( selector ){
    return this.filter( function( i, element ){
      return element.isEdge();
    } ).filter( selector );
  },

  filter: function( filter ){
    if( filter === undefined ){ // check this first b/c it's the most common/performant case
      return this;
    } else if( is.string( filter ) || is.elementOrCollection( filter ) ){
      return Selector( filter ).filter( this );
    } else if( is.fn( filter ) ){
      var elements = [];

      for( var i = 0; i < this.length; i++ ){
        var ele = this[ i ];

        if( filter.apply( ele, [ i, ele ] ) ){
          elements.push( ele );
        }
      }

      return this.spawn( elements );
    }

    return this.spawn(); // if not handled by above, give 'em an empty collection
  },

  not: function( toRemove ){
    if( !toRemove ){
      return this;
    } else {

      if( is.string( toRemove ) ){
        toRemove = this.filter( toRemove );
      }

      var elements = [];

      for( var i = 0; i < this.length; i++ ){
        var element = this[ i ];

        var remove = toRemove._private.ids[ element.id() ];
        if( !remove ){
          elements.push( element );
        }
      }

      return this.spawn( elements );
    }

  },

  absoluteComplement: function(){
    var cy = this._private.cy;

    return cy.mutableElements().not( this );
  },

  intersect: function( other ){
    // if a selector is specified, then filter by it instead
    if( is.string( other ) ){
      var selector = other;
      return this.filter( selector );
    }

    var elements = [];
    var col1 = this;
    var col2 = other;
    var col1Smaller = this.length < other.length;
    // var ids1 = col1Smaller ? col1._private.ids : col2._private.ids;
    var ids2 = col1Smaller ? col2._private.ids : col1._private.ids;
    var col = col1Smaller ? col1 : col2;

    for( var i = 0; i < col.length; i++ ){
      var id = col[ i ]._private.data.id;
      var ele = ids2[ id ];

      if( ele ){
        elements.push( ele );
      }
    }

    return this.spawn( elements );
  },

  xor: function( other ){
    var cy = this._private.cy;

    if( is.string( other ) ){
      other = cy.$( other );
    }

    var elements = [];
    var col1 = this;
    var col2 = other;

    var add = function( col, other ){

      for( var i = 0; i < col.length; i++ ){
        var ele = col[ i ];
        var id = ele._private.data.id;
        var inOther = other._private.ids[ id ];

        if( !inOther ){
          elements.push( ele );
        }
      }

    };

    add( col1, col2 );
    add( col2, col1 );

    return this.spawn( elements );
  },

  diff: function( other ){
    var cy = this._private.cy;

    if( is.string( other ) ){
      other = cy.$( other );
    }

    var left = [];
    var right = [];
    var both = [];
    var col1 = this;
    var col2 = other;

    var add = function( col, other, retEles ){

      for( var i = 0; i < col.length; i++ ){
        var ele = col[ i ];
        var id = ele._private.data.id;
        var inOther = other._private.ids[ id ];

        if( inOther ){
          both.push( ele );
        } else {
          retEles.push( ele );
        }
      }

    };

    add( col1, col2, left );
    add( col2, col1, right );

    return {
      left: this.spawn( left, { unique: true } ),
      right: this.spawn( right, { unique: true } ),
      both: this.spawn( both, { unique: true } )
    };
  },

  add: function( toAdd ){
    var cy = this._private.cy;

    if( !toAdd ){
      return this;
    }

    if( is.string( toAdd ) ){
      var selector = toAdd;
      toAdd = cy.mutableElements().filter( selector );
    }

    var elements = [];

    for( var i = 0; i < this.length; i++ ){
      elements.push( this[ i ] );
    }

    for( var i = 0; i < toAdd.length; i++ ){

      var add = !this._private.ids[ toAdd[ i ].id() ];
      if( add ){
        elements.push( toAdd[ i ] );
      }
    }

    return this.spawn( elements );
  },

  // in place merge on calling collection
  merge: function( toAdd ){
    var _p = this._private;
    var cy = _p.cy;

    if( !toAdd ){
      return this;
    }

    if( toAdd && is.string( toAdd ) ){
      var selector = toAdd;
      toAdd = cy.mutableElements().filter( selector );
    }

    for( var i = 0; i < toAdd.length; i++ ){
      var toAddEle = toAdd[ i ];
      var id = toAddEle._private.data.id;
      var add = !_p.ids[ id ];

      if( add ){
        var index = this.length++;

        this[ index ] = toAddEle;
        _p.ids[ id ] = toAddEle;
        _p.indexes[ id ] = index;
      } else { // replace
        var index = _p.indexes[ id ];

        this[ index ] = toAddEle;
        _p.ids[ id ] = toAddEle;
      }
    }

    return this; // chaining
  },

  // remove single ele in place in calling collection
  unmergeOne: function( ele ){
    ele = ele[0];

    var _p = this._private;
    var id = ele._private.data.id;
    var i = _p.indexes[ id ];

    if( i == null ){
      return this; // no need to remove
    }

    // remove ele
    this[ i ] = undefined;
    _p.ids[ id ] = undefined;
    _p.indexes[ id ] = undefined;

    var unmergedLastEle = i === this.length - 1;

    // replace empty spot with last ele in collection
    if( this.length > 1 && !unmergedLastEle ){
      var lastEleI = this.length - 1;
      var lastEle = this[ lastEleI ];
      var lastEleId = lastEle._private.data.id;

      this[ lastEleI ] = undefined;
      this[ i ] = lastEle;
      _p.indexes[ lastEleId ] = i;
    }

    // the collection is now 1 ele smaller
    this.length--;

    return this;
  },

  // remove eles in place on calling collection
  unmerge: function( toRemove ){
    var cy = this._private.cy;

    if( !toRemove ){
      return this;
    }

    if( toRemove && is.string( toRemove ) ){
      var selector = toRemove;
      toRemove = cy.mutableElements().filter( selector );
    }

    for( var i = 0; i < toRemove.length; i++ ){
      this.unmergeOne( toRemove[ i ] );
    }

    return this; // chaining
  },

  map: function( mapFn, thisArg ){
    var arr = [];
    var eles = this;

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];
      var ret = thisArg ? mapFn.apply( thisArg, [ ele, i, eles ] ) : mapFn( ele, i, eles );

      arr.push( ret );
    }

    return arr;
  },

  stdFilter: function( fn, thisArg ){
    var filterEles = [];
    var eles = this;

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];
      var include = thisArg ? fn.apply( thisArg, [ ele, i, eles ] ) : fn( ele, i, eles );

      if( include ){
        filterEles.push( ele );
      }
    }

    return this.spawn( filterEles );
  },

  max: function( valFn, thisArg ){
    var max = -Infinity;
    var maxEle;
    var eles = this;

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];
      var val = thisArg ? valFn.apply( thisArg, [ ele, i, eles ] ) : valFn( ele, i, eles );

      if( val > max ){
        max = val;
        maxEle = ele;
      }
    }

    return {
      value: max,
      ele: maxEle
    };
  },

  min: function( valFn, thisArg ){
    var min = Infinity;
    var minEle;
    var eles = this;

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];
      var val = thisArg ? valFn.apply( thisArg, [ ele, i, eles ] ) : valFn( ele, i, eles );

      if( val < min ){
        min = val;
        minEle = ele;
      }
    }

    return {
      value: min,
      ele: minEle
    };
  }
});

// aliases
var fn = elesfn;
fn[ 'u' ] = fn[ '|' ] = fn[ '+' ] = fn.union = fn.or = fn.add;
fn[ '\\' ] = fn[ '!' ] = fn[ '-' ] = fn.difference = fn.relativeComplement = fn.subtract = fn.not;
fn[ 'n' ] = fn[ '&' ] = fn[ '.' ] = fn.and = fn.intersection = fn.intersect;
fn[ '^' ] = fn[ '(+)' ] = fn[ '(-)' ] = fn.symmetricDifference = fn.symdiff = fn.xor;
fn.fnFilter = fn.filterFn = fn.stdFilter;
fn.complement = fn.abscomp = fn.absoluteComplement;

module.exports = elesfn;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elesfn = ({
  isNode: function(){
    return this.group() === 'nodes';
  },

  isEdge: function(){
    return this.group() === 'edges';
  },

  isLoop: function(){
    return this.isEdge() && this.source().id() === this.target().id();
  },

  isSimple: function(){
    return this.isEdge() && this.source().id() !== this.target().id();
  },

  group: function(){
    var ele = this[0];

    if( ele ){
      return ele._private.group;
    }
  }
});


module.exports = elesfn;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var zIndexSort = __webpack_require__( 19 );

var elesfn = ({
  each: function( fn ){
    if( is.fn( fn ) ){
      for( var i = 0; i < this.length; i++ ){
        var ele = this[ i ];
        var ret = fn.apply( ele, [ i, ele ] );

        if( ret === false ){ break; } // exit each early on return false
      }
    }
    return this;
  },

  forEach: function( fn, thisArg ){
    if( is.fn( fn ) ){

      for( var i = 0; i < this.length; i++ ){
        var ele = this[ i ];
        var ret = thisArg ? fn.apply( thisArg, [ ele, i, this ] ) : fn( ele, i, this );

        if( ret === false ){ break; } // exit each early on return false
      }
    }

    return this;
  },

  toArray: function(){
    var array = [];

    for( var i = 0; i < this.length; i++ ){
      array.push( this[ i ] );
    }

    return array;
  },

  slice: function( start, end ){
    var array = [];
    var thisSize = this.length;

    if( end == null ){
      end = thisSize;
    }

    if( start == null ){
      start = 0;
    }

    if( start < 0 ){
      start = thisSize + start;
    }

    if( end < 0 ){
      end = thisSize + end;
    }

    for( var i = start; i >= 0 && i < end && i < thisSize; i++ ){
      array.push( this[ i ] );
    }

    return this.spawn( array );
  },

  size: function(){
    return this.length;
  },

  eq: function( i ){
    return this[ i ] || this.spawn();
  },

  first: function(){
    return this[0] || this.spawn();
  },

  last: function(){
    return this[ this.length - 1 ] || this.spawn();
  },

  empty: function(){
    return this.length === 0;
  },

  nonempty: function(){
    return !this.empty();
  },

  sort: function( sortFn ){
    if( !is.fn( sortFn ) ){
      return this;
    }

    var sorted = this.toArray().sort( sortFn );

    return this.spawn( sorted );
  },

  sortByZIndex: function(){
    return this.sort( zIndexSort );
  },

  zDepth: function(){
    var ele = this[0];
    if( !ele ){ return undefined; }

    // var cy = ele.cy();
    var _p = ele._private;
    var group = _p.group;

    if( group === 'nodes' ){
      var depth = _p.data.parent ? ele.parents().size() : 0;

      if( !ele.isParent() ){
        return Number.MAX_VALUE; // childless nodes always on top
      }

      return depth;
    } else {
      var src = _p.source;
      var tgt = _p.target;
      var srcDepth = src.zDepth();
      var tgtDepth = tgt.zDepth();

      return Math.max( srcDepth, tgtDepth, 0 ); // depth of deepest parent
    }
  }
});

module.exports = elesfn;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var Promise = __webpack_require__(5);

var elesfn = ({

  // using standard layout options, apply position function (w/ or w/o animation)
  layoutPositions: function( layout, options, fn ){
    var nodes = this.nodes();
    var cy = this.cy();

    layout.trigger( { type: 'layoutstart', layout: layout } );

    layout.animations = [];

    if( options.animate ){
      for( var i = 0; i < nodes.length; i++ ){
        var node = nodes[ i ];

        var newPos = fn.call( node, i, node );
        var pos = node.position();

        if( !is.number( pos.x ) || !is.number( pos.y ) ){
          node.silentPosition( { x: 0, y: 0 } );
        }

        var ani = node.animation( {
          position: newPos,
          duration: options.animationDuration,
          easing: options.animationEasing
        } );

        layout.animations.push( ani );

        ani.play();
      }

      var onStep;
      cy.on( 'step.*', ( onStep = function(){
        if( options.fit ){
          cy.fit( options.eles, options.padding );
        }
      }) );

      layout.one('layoutstop', function(){
        cy.off('step.*', onStep);
      });

      layout.one( 'layoutready', options.ready );
      layout.trigger( { type: 'layoutready', layout: layout } );

      Promise.all( layout.animations.map(function( ani ){
        return ani.promise();
      }) ).then(function(){
        cy.off('step.*', onStep);

        if( options.zoom != null ){
          cy.zoom( options.zoom );
        }

        if( options.pan ){
          cy.pan( options.pan );
        }

        if( options.fit ){
          cy.fit( options.eles, options.padding );
        }

        layout.one( 'layoutstop', options.stop );
        layout.trigger( { type: 'layoutstop', layout: layout } );
      });
    } else {
      nodes.positions( fn );

      if( options.fit ){
        cy.fit( options.eles, options.padding );
      }

      if( options.zoom != null ){
        cy.zoom( options.zoom );
      }

      if( options.pan ){
        cy.pan( options.pan );
      }

      layout.one( 'layoutready', options.ready );
      layout.trigger( { type: 'layoutready', layout: layout } );

      layout.one( 'layoutstop', options.stop );
      layout.trigger( { type: 'layoutstop', layout: layout } );
    }

    return this; // chaining
  },

  layout: function( options ){
    var cy = this.cy();

    cy.layout( util.extend( {}, options, {
      eles: this
    } ) );

    return this;
  },

  makeLayout: function( options ){
    var cy = this.cy();

    return cy.makeLayout( util.extend( {}, options, {
      eles: this
    } ) );
  }

});

// aliases:
elesfn.createLayout = elesfn.makeLayout;

module.exports = elesfn;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var elesfn = ({

  // fully updates (recalculates) the style for the elements
  updateStyle: function( notifyRenderer ){
    var cy = this._private.cy;

    if( !cy.styleEnabled() ){ return this; }

    if( cy._private.batchingStyle ){
      var bEles = cy._private.batchStyleEles;

      bEles.merge( this );

      return this; // chaining and exit early when batching
    }

    var hasCompounds = cy.hasCompoundNodes();
    var style = cy.style();
    var updatedEles = this;

    notifyRenderer = notifyRenderer || notifyRenderer === undefined ? true : false;

    if( hasCompounds ){ // then add everything up and down for compound selector checks
      updatedEles = this.spawnSelf().merge( this.descendants() ).merge( this.parents() );
    }

    style.apply( updatedEles );

    if( hasCompounds ){
      var updatedCompounds = updatedEles.updateCompoundBounds();

      // disable for performance for now
      // (as updatedCompounds would be a subset of updatedEles ayway b/c of selectors check)
      // if( updatedCompounds.length > 0 ){
      //   updatedEles.merge( updatedCompounds );
      // }
    }

    if( notifyRenderer ){
      updatedEles.rtrigger( 'style' ); // let renderer know we changed style
    } else {
      updatedEles.trigger( 'style' ); // just fire the event
    }

    return this; // chaining
  },

  // just update the mappers in the elements' styles; cheaper than eles.updateStyle()
  updateMappers: function( notifyRenderer ){
    var cy = this._private.cy;
    var style = cy.style();
    notifyRenderer = notifyRenderer || notifyRenderer === undefined ? true : false;

    if( !cy.styleEnabled() ){ return this; }

    style.updateMappers( this );

    var updatedCompounds = this.updateCompoundBounds();
    var toNotify = updatedCompounds.length > 0 ? this.add( updatedCompounds ) : this;

    if( notifyRenderer ){
      toNotify.rtrigger( 'style' ); // let renderer know we changed style
    } else {
      toNotify.trigger( 'style' ); // just fire the event
    }
    return this; // chaining
  },

  // get the internal parsed style object for the specified property
  parsedStyle: function( property ){
    var ele = this[0];
    if( !ele.cy().styleEnabled() ){ return; }

    if( ele ){
      return ele._private.style[ property ] || ele.cy().style().getDefaultProperty( property );
    }
  },

  // get the specified css property as a rendered value (i.e. on-screen value)
  // or get the whole rendered style if no property specified (NB doesn't allow setting)
  renderedStyle: function( property ){
    var cy = this.cy();
    if( !cy.styleEnabled() ){ return this; }

    var ele = this[0];

    if( ele ){
      var renstyle = ele.cy().style().getRenderedStyle( ele );

      if( property === undefined ){
        return renstyle;
      } else {
        return renstyle[ property ];
      }
    }
  },

  // read the calculated css style of the element or override the style (via a bypass)
  style: function( name, value ){
    var cy = this.cy();

    if( !cy.styleEnabled() ){ return this; }

    var updateTransitions = false;
    var style = cy.style();

    if( is.plainObject( name ) ){ // then extend the bypass
      var props = name;
      style.applyBypass( this, props, updateTransitions );

      var updatedCompounds = this.updateCompoundBounds();
      var toNotify = updatedCompounds.length > 0 ? this.add( updatedCompounds ) : this;
      toNotify.rtrigger( 'style' ); // let the renderer know we've updated style

    } else if( is.string( name ) ){

      if( value === undefined ){ // then get the property from the style
        var ele = this[0];

        if( ele ){
          return style.getStylePropertyValue( ele, name );
        } else { // empty collection => can't get any value
          return;
        }

      } else { // then set the bypass with the property value
        style.applyBypass( this, name, value, updateTransitions );

        var updatedCompounds = this.updateCompoundBounds();
        var toNotify = updatedCompounds.length > 0 ? this.add( updatedCompounds ) : this;
        toNotify.rtrigger( 'style' ); // let the renderer know we've updated style
      }

    } else if( name === undefined ){
      var ele = this[0];

      if( ele ){
        return style.getRawStyle( ele );
      } else { // empty collection => can't get any value
        return;
      }
    }

    return this; // chaining
  },

  removeStyle: function( names ){
    var cy = this.cy();

    if( !cy.styleEnabled() ){ return this; }

    var updateTransitions = false;
    var style = cy.style();
    var eles = this;

    if( names === undefined ){
      for( var i = 0; i < eles.length; i++ ){
        var ele = eles[ i ];

        style.removeAllBypasses( ele, updateTransitions );
      }
    } else {
      names = names.split( /\s+/ );

      for( var i = 0; i < eles.length; i++ ){
        var ele = eles[ i ];

        style.removeBypasses( ele, names, updateTransitions );
      }
    }

    var updatedCompounds = this.updateCompoundBounds();
    var toNotify = updatedCompounds.length > 0 ? this.add( updatedCompounds ) : this;
    toNotify.rtrigger( 'style' ); // let the renderer know we've updated style

    return this; // chaining
  },

  show: function(){
    this.css( 'display', 'element' );
    return this; // chaining
  },

  hide: function(){
    this.css( 'display', 'none' );
    return this; // chaining
  },

  visible: function(){
    var cy = this.cy();
    if( !cy.styleEnabled() ){ return true; }

    var ele = this[0];
    var hasCompoundNodes = cy.hasCompoundNodes();

    if( ele ){
      if(
        ele.pstyle( 'visibility' ).value !== 'visible'
        || ele.pstyle( 'display' ).value !== 'element'
        || ele.pstyle('width').pfValue === 0
      ){
        return false;
      }

      if( ele._private.group === 'nodes' ){
        if( ele.pstyle('height').pfValue === 0 ){ return false; }

        if( !hasCompoundNodes ){ return true; }

        var parents = ele._private.data.parent ? ele.parents() : null;

        if( parents ){
          for( var i = 0; i < parents.length; i++ ){
            var parent = parents[ i ];
            var pVis = parent.pstyle( 'visibility' ).value;
            var pDis = parent.pstyle( 'display' ).value;

            if( pVis !== 'visible' || pDis !== 'element' ){
              return false;
            }
          }
        }

        return true;
      } else {
        var src = ele._private.source;
        var tgt = ele._private.target;

        return src.visible() && tgt.visible();
      }

    }
  },

  hidden: function(){
    var ele = this[0];

    if( ele ){
      return !ele.visible();
    }
  },

  effectiveOpacity: function(){
    var cy = this.cy();
    if( !cy.styleEnabled() ){ return 1; }

    var hasCompoundNodes = cy.hasCompoundNodes();
    var ele = this[0];

    if( ele ){
      var _p = ele._private;
      var parentOpacity = ele.pstyle( 'opacity' ).value;

      if( !hasCompoundNodes ){ return parentOpacity; }

      var parents = !_p.data.parent ? null : ele.parents();

      if( parents ){
        for( var i = 0; i < parents.length; i++ ){
          var parent = parents[ i ];
          var opacity = parent.pstyle( 'opacity' ).value;

          parentOpacity = opacity * parentOpacity;
        }
      }

      return parentOpacity;
    }
  },

  transparent: function(){
    var cy = this.cy();
    if( !cy.styleEnabled() ){ return false; }

    var ele = this[0];
    var hasCompoundNodes = ele.cy().hasCompoundNodes();

    if( ele ){
      if( !hasCompoundNodes ){
        return ele.pstyle( 'opacity' ).value === 0;
      } else {
        return ele.effectiveOpacity() === 0;
      }
    }
  },

  backgrounding: function(){
    var cy = this.cy();
    if( !cy.styleEnabled() ){ return false; }

    var ele = this[0];

    return ele._private.backgrounding ? true : false;
  }

});


elesfn.bypass = elesfn.css = elesfn.style;
elesfn.renderedCss = elesfn.renderedStyle;
elesfn.removeBypass = elesfn.removeCss = elesfn.removeStyle;
elesfn.pstyle = elesfn.parsedStyle;

module.exports = elesfn;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elesfn = {};

function defineSwitchFunction( params ){
  return function(){
    var args = arguments;
    var changedEles = [];

    // e.g. cy.nodes().select( data, handler )
    if( args.length === 2 ){
      var data = args[0];
      var handler = args[1];
      this.on( params.event, data, handler );
    }

    // e.g. cy.nodes().select( handler )
    else if( args.length === 1 ){
      var handler = args[0];
      this.on( params.event, handler );
    }

    // e.g. cy.nodes().select()
    else if( args.length === 0 ){
      for( var i = 0; i < this.length; i++ ){
        var ele = this[ i ];
        var able = !params.ableField || ele._private[ params.ableField ];
        var changed = ele._private[ params.field ] != params.value;

        if( params.overrideAble ){
          var overrideAble = params.overrideAble( ele );

          if( overrideAble !== undefined ){
            able = overrideAble;

            if( !overrideAble ){ return this; } // to save cycles assume not able for all on override
          }
        }

        if( able ){
          ele._private[ params.field ] = params.value;

          if( changed ){
            changedEles.push( ele );
          }
        }
      }

      var changedColl = this.spawn( changedEles );
      changedColl.updateStyle(); // change of state => possible change of style
      changedColl.trigger( params.event );
    }

    return this;
  };
}

function defineSwitchSet( params ){
  elesfn[ params.field ] = function(){
    var ele = this[0];

    if( ele ){
      if( params.overrideField ){
        var val = params.overrideField( ele );

        if( val !== undefined ){
          return val;
        }
      }

      return ele._private[ params.field ];
    }
  };

  elesfn[ params.on ] = defineSwitchFunction( {
    event: params.on,
    field: params.field,
    ableField: params.ableField,
    overrideAble: params.overrideAble,
    value: true
  } );

  elesfn[ params.off ] = defineSwitchFunction( {
    event: params.off,
    field: params.field,
    ableField: params.ableField,
    overrideAble: params.overrideAble,
    value: false
  } );
}

defineSwitchSet( {
  field: 'locked',
  overrideField: function( ele ){
    return ele.cy().autolock() ? true : undefined;
  },
  on: 'lock',
  off: 'unlock'
} );

defineSwitchSet( {
  field: 'grabbable',
  overrideField: function( ele ){
    return ele.cy().autoungrabify() ? false : undefined;
  },
  on: 'grabify',
  off: 'ungrabify'
} );

defineSwitchSet( {
  field: 'selected',
  ableField: 'selectable',
  overrideAble: function( ele ){
    return ele.cy().autounselectify() ? false : undefined;
  },
  on: 'select',
  off: 'unselect'
} );

defineSwitchSet( {
  field: 'selectable',
  overrideField: function( ele ){
    return ele.cy().autounselectify() ? false : undefined;
  },
  on: 'selectify',
  off: 'unselectify'
} );

elesfn.deselect = elesfn.unselect;

elesfn.grabbed = function(){
  var ele = this[0];
  if( ele ){
    return ele._private.grabbed;
  }
};

defineSwitchSet( {
  field: 'active',
  on: 'activate',
  off: 'unactivate'
} );

elesfn.inactive = function(){
  var ele = this[0];
  if( ele ){
    return !ele._private.active;
  }
};

module.exports = elesfn;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var elesfn = {};

var cache = function( fn, name ){
  return function traversalCache( arg1, arg2, arg3, arg4 ){
    var selectorOrEles = arg1;
    var eles = this;
    var key;

    if( selectorOrEles == null ){
      key = 'null';
    } else if( is.elementOrCollection( selectorOrEles ) && selectorOrEles.length === 1 ){
      key = '#' + selectorOrEles.id();
    }

    if( eles.length === 1 && key ){
      var _p = eles[0]._private;
      var tch = _p.traversalCache = _p.traversalCache || {};
      var ch = tch[ name ] = tch[ name ] || {};
      var cacheHit = ch[ key ];

      if( cacheHit ){
        return cacheHit;
      } else {
        return ( ch[ key ] = fn.call( eles, arg1, arg2, arg3, arg4 ) );
      }
    } else {
      return fn.call( eles, arg1, arg2, arg3, arg4 );
    }
  };
};

// DAG functions
////////////////

var defineDagExtremity = function( params ){
  return function dagExtremityImpl( selector ){
    var eles = this;
    var ret = [];

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];
      if( !ele.isNode() ){
        continue;
      }

      var disqualified = false;
      var edges = ele.connectedEdges();

      for( var j = 0; j < edges.length; j++ ){
        var edge = edges[j];
        var src = edge.source();
        var tgt = edge.target();

        if(
             ( params.noIncomingEdges && tgt === ele && src !== ele )
          || ( params.noOutgoingEdges && src === ele && tgt !== ele )
        ){
          disqualified = true;
          break;
        }
      }

      if( !disqualified ){
        ret.push( ele );
      }
    }

    return this.spawn( ret, { unique: true } ).filter( selector );
  };
};

var defineDagOneHop = function( params ){
  return function( selector ){
    var eles = this;
    var oEles = [];

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[ i ];

      if( !ele.isNode() ){ continue; }

      var edges = ele.connectedEdges();
      for( var j = 0; j < edges.length; j++ ){
        var edge = edges[ j ];
        var src = edge.source();
        var tgt = edge.target();

        if( params.outgoing && src === ele ){
          oEles.push( edge );
          oEles.push( tgt );
        } else if( params.incoming && tgt === ele ){
          oEles.push( edge );
          oEles.push( src );
        }
      }
    }

    return this.spawn( oEles, { unique: true } ).filter( selector );
  };
};

var defineDagAllHops = function( params ){
  return function( selector ){
    var eles = this;
    var sEles = [];
    var sElesIds = {};

    for( ;; ){
      var next = params.outgoing ? eles.outgoers() : eles.incomers();

      if( next.length === 0 ){ break; } // done if none left

      var newNext = false;
      for( var i = 0; i < next.length; i++ ){
        var n = next[ i ];
        var nid = n.id();

        if( !sElesIds[ nid ] ){
          sElesIds[ nid ] = true;
          sEles.push( n );
          newNext = true;
        }
      }

      if( !newNext ){ break; } // done if touched all outgoers already

      eles = next;
    }

    return this.spawn( sEles, { unique: true } ).filter( selector );
  };
};

util.extend( elesfn, {
  // get the root nodes in the DAG
  roots: defineDagExtremity({ noIncomingEdges: true }),

  // get the leaf nodes in the DAG
  leaves: defineDagExtremity({ noOutgoingEdges: true }),

  // normally called children in graph theory
  // these nodes =edges=> outgoing nodes
  outgoers: cache( defineDagOneHop({ outgoing: true }) , 'outgoers' ),

  // aka DAG descendants
  successors: defineDagAllHops({ outgoing: true }),

  // normally called parents in graph theory
  // these nodes <=edges= incoming nodes
  incomers: cache( defineDagOneHop({ incoming: true }), 'incomers' ),

  // aka DAG ancestors
  predecessors: defineDagAllHops({ incoming: true })
} );


// Neighbourhood functions
//////////////////////////

util.extend( elesfn, {
  neighborhood: cache(function( selector ){
    var elements = [];
    var nodes = this.nodes();

    for( var i = 0; i < nodes.length; i++ ){ // for all nodes
      var node = nodes[ i ];
      var connectedEdges = node.connectedEdges();

      // for each connected edge, add the edge and the other node
      for( var j = 0; j < connectedEdges.length; j++ ){
        var edge = connectedEdges[ j ];
        var src = edge.source();
        var tgt = edge.target();
        var otherNode = node === src ? tgt : src;

        // need check in case of loop
        if( otherNode.length > 0 ){
          elements.push( otherNode[0] ); // add node 1 hop away
        }

        // add connected edge
        elements.push( edge[0] );
      }

    }

    return ( this.spawn( elements, { unique: true } ) ).filter( selector );
  }, 'neighborhood'),

  closedNeighborhood: function( selector ){
    return this.neighborhood().add( this ).filter( selector );
  },

  openNeighborhood: function( selector ){
    return this.neighborhood( selector );
  }
} );

// aliases
elesfn.neighbourhood = elesfn.neighborhood;
elesfn.closedNeighbourhood = elesfn.closedNeighborhood;
elesfn.openNeighbourhood = elesfn.openNeighborhood;

// Edge functions
/////////////////

util.extend( elesfn, {
  source: cache(function sourceImpl( selector ){
    var ele = this[0];
    var src;

    if( ele ){
      src = ele._private.source || ele.cy().collection();
    }

    return src && selector ? src.filter( selector ) : src;
  }, 'source'),

  target: cache(function targetImpl( selector ){
    var ele = this[0];
    var tgt;

    if( ele ){
      tgt = ele._private.target || ele.cy().collection();
    }

    return tgt && selector ? tgt.filter( selector ) : tgt;
  }, 'target'),

  sources: defineSourceFunction( {
    attr: 'source'
  } ),

  targets: defineSourceFunction( {
    attr: 'target'
  } )
} );

function defineSourceFunction( params ){
  return function sourceImpl( selector ){
    var sources = [];

    for( var i = 0; i < this.length; i++ ){
      var ele = this[ i ];
      var src = ele._private[ params.attr ];

      if( src ){
        sources.push( src );
      }
    }

    return this.spawn( sources, { unique: true } ).filter( selector );
  };
}

util.extend( elesfn, {
  edgesWith: cache( defineEdgesWithFunction(), 'edgesWith', true ),

  edgesTo: cache( defineEdgesWithFunction( {
    thisIsSrc: true
  } ), 'edgesTo', true )
} );

function defineEdgesWithFunction( params ){

  return function edgesWithImpl( otherNodes ){
    var elements = [];
    var cy = this._private.cy;
    var p = params || {};

    // get elements if a selector is specified
    if( is.string( otherNodes ) ){
      otherNodes = cy.$( otherNodes );
    }

    var thisIds = this._private.ids;
    var otherIds = otherNodes._private.ids;

    for( var h = 0; h < otherNodes.length; h++ ){
      var edges = otherNodes[ h ]._private.edges;

      for( var i = 0; i < edges.length; i++ ){
        var edge = edges[ i ];
        var edgeData = edge._private.data;
        var thisToOther = thisIds[ edgeData.source ] && otherIds[ edgeData.target ];
        var otherToThis = otherIds[ edgeData.source ] && thisIds[ edgeData.target ];
        var edgeConnectsThisAndOther = thisToOther || otherToThis;

        if( !edgeConnectsThisAndOther ){ continue; }

        if( p.thisIsSrc || p.thisIsTgt ){
          if( p.thisIsSrc && !thisToOther ){ continue; }

          if( p.thisIsTgt && !otherToThis ){ continue; }
        }

        elements.push( edge );
      }
    }

    return this.spawn( elements, { unique: true } );
  };
}

util.extend( elesfn, {
  connectedEdges: cache(function( selector ){
    var retEles = [];

    var eles = this;
    for( var i = 0; i < eles.length; i++ ){
      var node = eles[ i ];
      if( !node.isNode() ){ continue; }

      var edges = node._private.edges;

      for( var j = 0; j < edges.length; j++ ){
        var edge = edges[ j ];
        retEles.push( edge );
      }
    }

    return this.spawn( retEles, { unique: true } ).filter( selector );
  }, 'connectedEdges'),

  connectedNodes: cache(function( selector ){
    var retEles = [];

    var eles = this;
    for( var i = 0; i < eles.length; i++ ){
      var edge = eles[ i ];
      if( !edge.isEdge() ){ continue; }

      retEles.push( edge.source()[0] );
      retEles.push( edge.target()[0] );
    }

    return this.spawn( retEles, { unique: true } ).filter( selector );
  }, 'connectedNodes'),

  parallelEdges: cache( defineParallelEdgesFunction(), 'parallelEdges' ),

  codirectedEdges: cache( defineParallelEdgesFunction( {
    codirected: true
  } ), 'codirectedEdges' )
} );

function defineParallelEdgesFunction( params ){
  var defaults = {
    codirected: false
  };
  params = util.extend( {}, defaults, params );

  return function parallelEdgesImpl( selector ){ // micro-optimised for renderer
    var elements = [];
    var edges = this.edges();
    var p = params;

    // look at all the edges in the collection
    for( var i = 0; i < edges.length; i++ ){
      var edge1 = edges[ i ];
      var edge1_p = edge1._private;
      var src1 = edge1_p.source;
      var srcid1 = src1._private.data.id;
      var tgtid1 = edge1_p.data.target;
      var srcEdges1 = src1._private.edges;

      // look at edges connected to the src node of this edge
      for( var j = 0; j < srcEdges1.length; j++ ){
        var edge2 = srcEdges1[ j ];
        var edge2data = edge2._private.data;
        var tgtid2 = edge2data.target;
        var srcid2 = edge2data.source;

        var codirected = tgtid2 === tgtid1 && srcid2 === srcid1;
        var oppdirected = srcid1 === tgtid2 && tgtid1 === srcid2;

        if( (p.codirected && codirected) || (!p.codirected && (codirected || oppdirected)) ){
          elements.push( edge2 );
        }
      }
    }

    return this.spawn( elements, { unique: true } ).filter( selector );
  };

}

// Misc functions
/////////////////

util.extend( elesfn, {
  components: function(){
    var self = this;
    var cy = self.cy();
    var visited = self.spawn();
    var unvisited = self.nodes().spawnSelf();
    var components = [];

    var visitInComponent = function( node, component ){
      visited.merge( node );
      unvisited.unmerge( node );
      component.merge( node );
    };

    if( unvisited.empty() ){ return self.spawn(); }

    do {
      var component = cy.collection();
      components.push( component );

      var root = unvisited[0];
      visitInComponent( root, component );

      self.bfs({
        directed: false,
        roots: root,
        visit: function( i, depth, v, e, u ){
          visitInComponent( v, component );
        }
      } );

    } while( unvisited.length > 0 );

    return components.map(function( component ){
      var connectedEdges = component.connectedEdges().stdFilter(function( edge ){
        return component.anySame( edge.source() ) && component.anySame( edge.target() );
      });

      return component.union( connectedEdges );
    });
  }
} );

module.exports = elesfn;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var Collection = __webpack_require__( 6 );
var Element = __webpack_require__( 18 );

var corefn = {
  add: function( opts ){

    var elements;
    var cy = this;

    // add the elements
    if( is.elementOrCollection( opts ) ){
      var eles = opts;

      if( eles._private.cy === cy ){ // same instance => just restore
        elements = eles.restore();

      } else { // otherwise, copy from json
        var jsons = [];

        for( var i = 0; i < eles.length; i++ ){
          var ele = eles[ i ];
          jsons.push( ele.json() );
        }

        elements = new Collection( cy, jsons );
      }
    }

    // specify an array of options
    else if( is.array( opts ) ){
      var jsons = opts;

      elements = new Collection( cy, jsons );
    }

    // specify via opts.nodes and opts.edges
    else if( is.plainObject( opts ) && (is.array( opts.nodes ) || is.array( opts.edges )) ){
      var elesByGroup = opts;
      var jsons = [];

      var grs = [ 'nodes', 'edges' ];
      for( var i = 0, il = grs.length; i < il; i++ ){
        var group = grs[ i ];
        var elesArray = elesByGroup[ group ];

        if( is.array( elesArray ) ){

          for( var j = 0, jl = elesArray.length; j < jl; j++ ){
            var json = util.extend( { group: group }, elesArray[ j ] );

            jsons.push( json );
          }
        }
      }

      elements = new Collection( cy, jsons );
    }

    // specify options for one element
    else {
      var json = opts;
      elements = (new Element( cy, json )).collection();
    }

    return elements;
  },

  remove: function( collection ){
    if( is.elementOrCollection( collection ) ){
      // already have right ref
    } else if( is.string( collection ) ){
      var selector = collection;
      collection = this.$( selector );
    }

    return collection.remove();
  },

  load: function( elements, onload, ondone ){
    var cy = this;

    cy.notifications( false );

    // remove old elements
    var oldEles = cy.mutableElements();
    if( oldEles.length > 0 ){
      oldEles.remove();
    }

    if( elements != null ){
      if( is.plainObject( elements ) || is.array( elements ) ){
        cy.add( elements );
      }
    }

    cy.one( 'layoutready', function( e ){
      cy.notifications( true );
      cy.trigger( e ); // we missed this event by turning notifications off, so pass it on

      cy.notify( {
        type: 'load',
        eles: cy.mutableElements()
      } );

      cy.one( 'load', onload );
      cy.trigger( 'load' );
    } ).one( 'layoutstop', function(){
      cy.one( 'done', ondone );
      cy.trigger( 'done' );
    } );

    var layoutOpts = util.extend( {}, cy._private.options.layout );
    layoutOpts.eles = cy.elements();

    cy.layout( layoutOpts );

    return this;
  }
};

module.exports = corefn;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );
var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var corefn = ({

  // pull in animation functions
  animate: define.animate(),
  animation: define.animation(),
  animated: define.animated(),
  clearQueue: define.clearQueue(),
  delay: define.delay(),
  delayAnimation: define.delayAnimation(),
  stop: define.stop(),

  addToAnimationPool: function( eles ){
    var cy = this;

    if( !cy.styleEnabled() ){ return; } // save cycles when no style used

    cy._private.aniEles.merge( eles );
  },

  stopAnimationLoop: function(){
    this._private.animationsRunning = false;
  },

  startAnimationLoop: function(){
    var cy = this;

    cy._private.animationsRunning = true;

    if( !cy.styleEnabled() ){ return; } // save cycles when no style used

    // NB the animation loop will exec in headless environments if style enabled
    // and explicit cy.destroy() is necessary to stop the loop

    function globalAnimationStep(){
      if( !cy._private.animationsRunning ){ return; }

      util.requestAnimationFrame( function animationStep( now ){
        handleElements( now );
        globalAnimationStep();
      } );
    }

    var renderer = cy.renderer();

    if( renderer && renderer.beforeRender ){ // let the renderer schedule animations
      renderer.beforeRender( function rendererAnimationStep( willDraw, now ){
        handleElements( now );
      }, renderer.beforeRenderPriorities.animations );
    } else { // manage the animation loop ourselves
      globalAnimationStep(); // first call
    }

    function handleElements( now ){
      var eles = cy._private.aniEles;
      var doneEles = [];

      function handleElement( ele, isCore ){
        var _p = ele._private;
        var current = _p.animation.current;
        var queue = _p.animation.queue;
        var ranAnis = false;

        // if nothing currently animating, get something from the queue
        if( current.length === 0 ){
          var next = queue.shift();

          if( next ){
            current.push( next );
          }
        }

        var callbacks = function( callbacks ){
          for( var j = callbacks.length - 1; j >= 0; j-- ){
            var cb = callbacks[ j ];

            cb();
          }

          callbacks.splice( 0, callbacks.length );
        };

        // step and remove if done
        for( var i = current.length - 1; i >= 0; i-- ){
          var ani = current[ i ];
          var ani_p = ani._private;

          if( ani_p.stopped ){
            current.splice( i, 1 );

            ani_p.hooked = false;
            ani_p.playing = false;
            ani_p.started = false;

            callbacks( ani_p.frames );

            continue;
          }

          if( !ani_p.playing && !ani_p.applying ){ continue; }

          // an apply() while playing shouldn't do anything
          if( ani_p.playing && ani_p.applying ){
            ani_p.applying = false;
          }

          if( !ani_p.started ){
            startAnimation( ele, ani, now );
          }

          step( ele, ani, now, isCore );

          if( is.fn( ani_p.step ) ){
            ani_p.step.call( ele, now );
          }

          if( ani_p.applying ){
            ani_p.applying = false;
          }

          callbacks( ani_p.frames );

          if( ani.completed() ){
            current.splice( i, 1 );

            ani_p.hooked = false;
            ani_p.playing = false;
            ani_p.started = false;

            callbacks( ani_p.completes );
          }

          ranAnis = true;
        }

        if( !isCore && current.length === 0 && queue.length === 0 ){
          doneEles.push( ele );
        }

        return ranAnis;
      } // handleElement

      // handle all eles
      var ranEleAni = false;
      for( var e = 0; e < eles.length; e++ ){
        var ele = eles[ e ];
        var handledThisEle = handleElement( ele );

        ranEleAni = ranEleAni || handledThisEle;
      } // each element

      var ranCoreAni = handleElement( cy, true );

      // notify renderer
      if( ranEleAni || ranCoreAni ){
        if( eles.length > 0 ){
          var updatedEles = eles.updateCompoundBounds().spawnSelf().merge( eles );

          cy.notify({
            type: 'draw',
            eles: updatedEles
          });
        } else {
          cy.notify({
            type: 'draw'
          });
        }
      }

      // remove elements from list of currently animating if its queues are empty
      eles.unmerge( doneEles );

      cy.trigger('step');

    } // handleElements

    function startAnimation( self, ani, now ){
      var isCore = is.core( self );
      var isEles = !isCore;
      var ele = self;
      var style = cy._private.style;
      var ani_p = ani._private;

      if( isEles ){
        var pos = ele._private.position;

        ani_p.startPosition = ani_p.startPosition || {
          x: pos.x,
          y: pos.y
        };

        ani_p.startStyle = ani_p.startStyle || style.getAnimationStartStyle( ele, ani_p.style );
      }

      if( isCore ){
        var pan = cy._private.pan;

        ani_p.startPan = ani_p.startPan || {
          x: pan.x,
          y: pan.y
        };

        ani_p.startZoom = ani_p.startZoom != null ? ani_p.startZoom : cy._private.zoom;
      }

      ani_p.started = true;
      ani_p.startTime = now - ani_p.progress * ani_p.duration;
    }

    function step( self, ani, now, isCore ){
      var style = cy._private.style;
      var isEles = !isCore;
      var _p = self._private;
      var ani_p = ani._private;
      var pEasing = ani_p.easing;
      var startTime = ani_p.startTime;

      if( !ani_p.easingImpl ){

        if( pEasing == null ){ // use default
          ani_p.easingImpl = easings[ 'linear' ];

        } else { // then define w/ name
          var easingVals;

          if( is.string( pEasing ) ){
            var easingProp = style.parse( 'transition-timing-function', pEasing );

            easingVals = easingProp.value;

          } else { // then assume preparsed array
            easingVals = pEasing;
          }

          var name, args;

          if( is.string( easingVals ) ){
            name = easingVals;
            args = [];
          } else {
            name = easingVals[1];
            args = easingVals.slice( 2 ).map( function( n ){ return +n; } );
          }

          if( args.length > 0 ){ // create with args
            if( name === 'spring' ){
              args.push( ani_p.duration ); // need duration to generate spring
            }

            ani_p.easingImpl = easings[ name ].apply( null, args );
          } else { // static impl by name
            ani_p.easingImpl = easings[ name ];
          }
        }

      }

      var easing = ani_p.easingImpl;
      var percent;

      if( ani_p.duration === 0 ){
        percent = 1;
      } else {
        percent = (now - startTime) / ani_p.duration;
      }

      if( ani_p.applying ){
        percent = ani_p.progress;
      }

      if( percent < 0 ){
        percent = 0;
      } else if( percent > 1 ){
        percent = 1;
      }

      if( ani_p.delay == null ){ // then update

        var startPos = ani_p.startPosition;
        var endPos = ani_p.position;
        var pos = _p.position;
        if( endPos && isEles ){
          if( valid( startPos.x, endPos.x ) ){
            pos.x = ease( startPos.x, endPos.x, percent, easing );
          }

          if( valid( startPos.y, endPos.y ) ){
            pos.y = ease( startPos.y, endPos.y, percent, easing );
          }

          self.trigger('position');
        }

        var startPan = ani_p.startPan;
        var endPan = ani_p.pan;
        var pan = _p.pan;
        var animatingPan = endPan != null && isCore;
        if( animatingPan ){
          if( valid( startPan.x, endPan.x ) ){
            pan.x = ease( startPan.x, endPan.x, percent, easing );
          }

          if( valid( startPan.y, endPan.y ) ){
            pan.y = ease( startPan.y, endPan.y, percent, easing );
          }

          self.trigger( 'pan' );
        }

        var startZoom = ani_p.startZoom;
        var endZoom = ani_p.zoom;
        var animatingZoom = endZoom != null && isCore;
        if( animatingZoom ){
          if( valid( startZoom, endZoom ) ){
            _p.zoom = ease( startZoom, endZoom, percent, easing );
          }

          self.trigger( 'zoom' );
        }

        if( animatingPan || animatingZoom ){
          self.trigger( 'viewport' );
        }

        var props = ani_p.style;
        if( props && props.length > 0 && isEles ){
          for( var i = 0; i < props.length; i++ ){
            var prop = props[ i ];
            var name = prop.name;
            var end = prop;

            var start = ani_p.startStyle[ name ];
            var easedVal = ease( start, end, percent, easing );

            style.overrideBypass( self, name, easedVal );
          } // for props

          self.trigger('style');

        } // if

      }

      ani_p.progress = percent;

      return percent;
    }

    function valid( start, end ){
      if( start == null || end == null ){
        return false;
      }

      if( is.number( start ) && is.number( end ) ){
        return true;
      } else if( (start) && (end) ){
        return true;
      }

      return false;
    }

    // assumes p0 = 0, p3 = 1
    function evalCubicBezier( p1, p2, t ){
      var one_t = 1 - t;
      var tsq = t * t;

      return ( 3 * one_t * one_t * t * p1 ) + ( 3 * one_t * tsq * p2 ) + tsq * t;
    }

    function cubicBezier( p1, p2 ){
      return function( start, end, percent ){
        return start + (end - start) * evalCubicBezier( p1, p2, percent );
      };
    }

    /*! Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
    /* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
    var generateSpringRK4 = (function(){
      function springAccelerationForState( state ){
        return (-state.tension * state.x) - (state.friction * state.v);
      }

      function springEvaluateStateWithDerivative( initialState, dt, derivative ){
        var state = {
          x: initialState.x + derivative.dx * dt,
          v: initialState.v + derivative.dv * dt,
          tension: initialState.tension,
          friction: initialState.friction
        };

        return { dx: state.v, dv: springAccelerationForState( state ) };
      }

      function springIntegrateState( state, dt ){
        var a = {
          dx: state.v,
          dv: springAccelerationForState( state )
        },
        b = springEvaluateStateWithDerivative( state, dt * 0.5, a ),
        c = springEvaluateStateWithDerivative( state, dt * 0.5, b ),
        d = springEvaluateStateWithDerivative( state, dt, c ),
        dxdt = 1.0 / 6.0 * (a.dx + 2.0 * (b.dx + c.dx) + d.dx),
        dvdt = 1.0 / 6.0 * (a.dv + 2.0 * (b.dv + c.dv) + d.dv);

        state.x = state.x + dxdt * dt;
        state.v = state.v + dvdt * dt;

        return state;
      }

      return function springRK4Factory( tension, friction, duration ){

        var initState = {
          x: -1,
          v: 0,
          tension: null,
          friction: null
        },
        path = [0],
        time_lapsed = 0,
        tolerance = 1 / 10000,
        DT = 16 / 1000,
        have_duration, dt, last_state;

        tension = parseFloat( tension ) || 500;
        friction = parseFloat( friction ) || 20;
        duration = duration || null;

        initState.tension = tension;
        initState.friction = friction;

        have_duration = duration !== null;

        /* Calculate the actual time it takes for this animation to complete with the provided conditions. */
        if( have_duration ){
          /* Run the simulation without a duration. */
          time_lapsed = springRK4Factory( tension, friction );
          /* Compute the adjusted time delta. */
          dt = time_lapsed / duration * DT;
        } else {
          dt = DT;
        }

        while( true ){
          /* Next/step function .*/
          last_state = springIntegrateState( last_state || initState, dt );
          /* Store the position. */
          path.push( 1 + last_state.x );
          time_lapsed += 16;
          /* If the change threshold is reached, break. */
          if( !(Math.abs( last_state.x ) > tolerance && Math.abs( last_state.v ) > tolerance) ){
            break;
          }
        }

        /* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
           computed path and returns a snapshot of the position according to a given percentComplete. */
        return !have_duration ? time_lapsed : function( percentComplete ){ return path[ (percentComplete * (path.length - 1)) | 0 ]; };
      };
    }());

    var easings = {
      'linear': function( start, end, percent ){
        return start + (end - start) * percent;
      },

      // default easings
      'ease': cubicBezier( 0.25, 0.1, 0.25, 1 ),
      'ease-in': cubicBezier( 0.42, 0, 1, 1 ),
      'ease-out': cubicBezier( 0, 0, 0.58, 1 ),
      'ease-in-out': cubicBezier( 0.42, 0, 0.58, 1 ),

      // sine
      'ease-in-sine': cubicBezier( 0.47, 0, 0.745, 0.715 ),
      'ease-out-sine': cubicBezier( 0.39, 0.575, 0.565, 1 ),
      'ease-in-out-sine': cubicBezier( 0.445, 0.05, 0.55, 0.95 ),

      // quad
      'ease-in-quad': cubicBezier( 0.55, 0.085, 0.68, 0.53 ),
      'ease-out-quad': cubicBezier( 0.25, 0.46, 0.45, 0.94 ),
      'ease-in-out-quad': cubicBezier( 0.455, 0.03, 0.515, 0.955 ),

      // cubic
      'ease-in-cubic': cubicBezier( 0.55, 0.055, 0.675, 0.19 ),
      'ease-out-cubic': cubicBezier( 0.215, 0.61, 0.355, 1 ),
      'ease-in-out-cubic': cubicBezier( 0.645, 0.045, 0.355, 1 ),

      // quart
      'ease-in-quart': cubicBezier( 0.895, 0.03, 0.685, 0.22 ),
      'ease-out-quart': cubicBezier( 0.165, 0.84, 0.44, 1 ),
      'ease-in-out-quart': cubicBezier( 0.77, 0, 0.175, 1 ),

      // quint
      'ease-in-quint': cubicBezier( 0.755, 0.05, 0.855, 0.06 ),
      'ease-out-quint': cubicBezier( 0.23, 1, 0.32, 1 ),
      'ease-in-out-quint': cubicBezier( 0.86, 0, 0.07, 1 ),

      // expo
      'ease-in-expo': cubicBezier( 0.95, 0.05, 0.795, 0.035 ),
      'ease-out-expo': cubicBezier( 0.19, 1, 0.22, 1 ),
      'ease-in-out-expo': cubicBezier( 1, 0, 0, 1 ),

      // circ
      'ease-in-circ': cubicBezier( 0.6, 0.04, 0.98, 0.335 ),
      'ease-out-circ': cubicBezier( 0.075, 0.82, 0.165, 1 ),
      'ease-in-out-circ': cubicBezier( 0.785, 0.135, 0.15, 0.86 ),


      // user param easings...

      'spring': function( tension, friction, duration ){
        if( duration === 0 ){ // can't get a spring w/ duration 0
          return easings.linear; // duration 0 => jump to end so impl doesn't matter
        }

        var spring = generateSpringRK4( tension, friction, duration );

        return function( start, end, percent ){
          return start + (end - start) * spring( percent );
        };
      },

      'cubic-bezier': function( x1, y1, x2, y2 ){
        return cubicBezier( x1, y1, x2, y2 );
      }
    };

    function ease( startProp, endProp, percent, easingFn ){
      if( percent < 0 ){
        percent = 0;
      } else if( percent > 1 ){
        percent = 1;
      }

      var start, end;

      if( startProp.pfValue != null || startProp.value != null ){
        start = startProp.pfValue != null ? startProp.pfValue : startProp.value;
      } else {
        start = startProp;
      }

      if( endProp.pfValue != null || endProp.value != null ){
        end = endProp.pfValue != null ? endProp.pfValue : endProp.value;
      } else {
        end = endProp;
      }

      if( is.number( start ) && is.number( end ) ){
        return easingFn( start, end, percent );

      } else if( is.array( start ) && is.array( end ) ){
        var easedArr = [];

        for( var i = 0; i < end.length; i++ ){
          var si = start[ i ];
          var ei = end[ i ];

          if( si != null && ei != null ){
            var val = easingFn( si, ei, percent );

            if( startProp.roundValue ){ val = Math.round( val ); }

            easedArr.push( val );
          } else {
            easedArr.push( ei );
          }
        }

        return easedArr;
      }

      return undefined;
    }

  }

});

module.exports = corefn;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__( 3 );

var corefn = ({
  on: define.on(), // .on( events [, selector] [, data], handler)
  one: define.on( { unbindSelfOnTrigger: true } ),
  once: define.on( { unbindAllBindersOnTrigger: true } ),
  off: define.off(), // .off( events [, selector] [, handler] )
  trigger: define.trigger() // .trigger( events [, extraParams] )
});

define.eventAliasesOn( corefn );

module.exports = corefn;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var corefn = ({

  png: function( options ){
    var renderer = this._private.renderer;
    options = options || {};

    return renderer.png( options );
  },

  jpg: function( options ){
    var renderer = this._private.renderer;
    options = options || {};

    options.bg = options.bg || '#fff';

    return renderer.jpg( options );
  }

});

corefn.jpeg = corefn.jpg;

module.exports = corefn;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var corefn = ({

  layout: function( params ){
    var layout = this._private.prevLayout = ( params == null ? this._private.prevLayout : this.makeLayout( params ) );

    layout.run();

    return this; // chaining
  },

  makeLayout: function( options ){
    var cy = this;

    if( options == null ){
      util.error( 'Layout options must be specified to make a layout' );
      return;
    }

    if( options.name == null ){
      util.error( 'A `name` must be specified to make a layout' );
      return;
    }

    var name = options.name;
    var Layout = cy.extension( 'layout', name );

    if( Layout == null ){
      util.error( 'Can not apply layout: No such layout `' + name + '` found; did you include its JS file?' );
      return;
    }

    var eles;
    if( is.string( options.eles ) ){
      eles = cy.$( options.eles );
    } else {
      eles = options.eles != null ? options.eles : cy.$();
    }

    var layout = new Layout( util.extend( {}, options, {
      cy: cy,
      eles: eles
    } ) );

    return layout;
  }

});

corefn.createLayout = corefn.makeLayout;

module.exports = corefn;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var corefn = ({
  notify: function( params ){
    var _p = this._private;

    if( _p.batchingNotify ){
      var bEles = _p.batchNotifyEles;
      var bTypes = _p.batchNotifyTypes;

      if( params.eles ){
        bEles.merge( params.eles );
      }

      if( !bTypes.ids[ params.type ] ){
        bTypes.push( params.type );
        bTypes.ids[ params.type ] = true;
      }

      return; // notifications are disabled during batching
    }

    if( !_p.notificationsEnabled ){ return; } // exit on disabled

    var renderer = this.renderer();

    // exit if destroy() called on core or renderer in between frames #1499
    // TODO first check this.isDestroyed() in >=3.1 #1440
    if( !renderer ){ return; }

    renderer.notify( params );
  },

  notifications: function( bool ){
    var p = this._private;

    if( bool === undefined ){
      return p.notificationsEnabled;
    } else {
      p.notificationsEnabled = bool ? true : false;
    }
  },

  noNotifications: function( callback ){
    this.notifications( false );
    callback();
    this.notifications( true );
  },

  startBatch: function(){
    var _p = this._private;

    if( _p.batchCount == null ){
      _p.batchCount = 0;
    }

    if( _p.batchCount === 0 ){
      _p.batchingStyle = _p.batchingNotify = true;
      _p.batchStyleEles = this.collection();
      _p.batchNotifyEles = this.collection();
      _p.batchNotifyTypes = [];
      _p.batchNotifyTypes.ids = {};
    }

    _p.batchCount++;

    return this;
  },

  endBatch: function(){
    var _p = this._private;

    _p.batchCount--;

    if( _p.batchCount === 0 ){
      // update style for dirty eles
      _p.batchingStyle = false;
      _p.batchStyleEles.updateStyle();

      // notify the renderer of queued eles and event types
      _p.batchingNotify = false;
      this.notify( {
        type: _p.batchNotifyTypes,
        eles: _p.batchNotifyEles
      } );
    }

    return this;
  },

  batch: function( callback ){
    this.startBatch();
    callback();
    this.endBatch();

    return this;
  },

  // for backwards compatibility
  batchData: function( map ){
    var cy = this;

    return this.batch( function(){
      var ids = Object.keys( map );

      for( var i = 0; i < ids.length; i++ ){
        var id = ids[i];
        var data = map[ id ];
        var ele = cy.getElementById( id );

        ele.data( data );
      }
    } );
  }
});

module.exports = corefn;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var corefn = ({

  renderTo: function( context, zoom, pan, pxRatio ){
    var r = this._private.renderer;

    r.renderTo( context, zoom, pan, pxRatio );
    return this;
  },

  renderer: function(){
    return this._private.renderer;
  },

  forceRender: function(){
    this.notify( {
      type: 'draw'
    } );

    return this;
  },

  resize: function(){
    this.invalidateSize();

    this.notify( {
      type: 'resize'
    } );

    this.trigger( 'resize' );

    return this;
  },

  initRenderer: function( options ){
    var cy = this;

    var RendererProto = cy.extension( 'renderer', options.name );
    if( RendererProto == null ){
      util.error( 'Can not initialise: No such renderer `%s` found; did you include its JS file?', options.name );
      return;
    }

    var rOpts = util.extend( {}, options, {
      cy: cy
    } );

    cy._private.renderer = new RendererProto( rOpts );
  },

  destroyRenderer: function(){
    var cy = this;

    cy.notify( { type: 'destroy' } ); // destroy the renderer

    var domEle = cy.container();
    if( domEle ){
      domEle._cyreg = null;

      while( domEle.childNodes.length > 0 ){
        domEle.removeChild( domEle.childNodes[0] );
      }
    }

    cy._private.renderer = null; // to be extra safe, remove the ref
  },

  onRender: function( fn ){
    return this.on('render', fn);
  },

  offRender: function( fn ){
    return this.off('render', fn);
  }

});

corefn.invalidateDimensions = corefn.resize;

module.exports = corefn;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var Collection = __webpack_require__( 6 );

var corefn = ({

  // get a collection
  // - empty collection on no args
  // - collection of elements in the graph on selector arg
  // - guarantee a returned collection when elements or collection specified
  collection: function( eles, opts ){

    if( is.string( eles ) ){
      return this.$( eles );

    } else if( is.elementOrCollection( eles ) ){
      return eles.collection();

    } else if( is.array( eles ) ){
      return new Collection( this, eles, opts );
    }

    return new Collection( this );
  },

  nodes: function( selector ){
    var nodes = this.$( function(){
      return this.isNode();
    } );

    if( selector ){
      return nodes.filter( selector );
    }

    return nodes;
  },

  edges: function( selector ){
    var edges = this.$( function(){
      return this.isEdge();
    } );

    if( selector ){
      return edges.filter( selector );
    }

    return edges;
  },

  // search the graph like jQuery
  $: function( selector ){
    var eles = this._private.elements;

    if( selector ){
      return eles.filter( selector );
    } else {
      return eles.spawnSelf();
    }
  },

  mutableElements: function(){
    return this._private.elements;
  }

});

// aliases
corefn.elements = corefn.filter = corefn.$;

module.exports = corefn;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var Style = __webpack_require__( 22 );

var corefn = ({

  style: function( newStyle ){
    if( newStyle ){
      var s = this.setStyle( newStyle );

      s.update();
    }

    return this._private.style;
  },

  setStyle: function( style ){
    var _p = this._private;

    if( is.stylesheet( style ) ){
      _p.style = style.generateStyle( this );

    } else if( is.array( style ) ){
      _p.style = Style.fromJson( this, style );

    } else if( is.string( style ) ){
      _p.style = Style.fromString( this, style );

    } else {
      _p.style = Style( this );
    }

    return _p.style;
  }
});

module.exports = corefn;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var window = __webpack_require__( 4 );

var corefn = ({

  autolock: function( bool ){
    if( bool !== undefined ){
      this._private.autolock = bool ? true : false;
    } else {
      return this._private.autolock;
    }

    return this; // chaining
  },

  autoungrabify: function( bool ){
    if( bool !== undefined ){
      this._private.autoungrabify = bool ? true : false;
    } else {
      return this._private.autoungrabify;
    }

    return this; // chaining
  },

  autounselectify: function( bool ){
    if( bool !== undefined ){
      this._private.autounselectify = bool ? true : false;
    } else {
      return this._private.autounselectify;
    }

    return this; // chaining
  },

  panningEnabled: function( bool ){
    if( bool !== undefined ){
      this._private.panningEnabled = bool ? true : false;
    } else {
      return this._private.panningEnabled;
    }

    return this; // chaining
  },

  userPanningEnabled: function( bool ){
    if( bool !== undefined ){
      this._private.userPanningEnabled = bool ? true : false;
    } else {
      return this._private.userPanningEnabled;
    }

    return this; // chaining
  },

  zoomingEnabled: function( bool ){
    if( bool !== undefined ){
      this._private.zoomingEnabled = bool ? true : false;
    } else {
      return this._private.zoomingEnabled;
    }

    return this; // chaining
  },

  userZoomingEnabled: function( bool ){
    if( bool !== undefined ){
      this._private.userZoomingEnabled = bool ? true : false;
    } else {
      return this._private.userZoomingEnabled;
    }

    return this; // chaining
  },

  boxSelectionEnabled: function( bool ){
    if( bool !== undefined ){
      this._private.boxSelectionEnabled = bool ? true : false;
    } else {
      return this._private.boxSelectionEnabled;
    }

    return this; // chaining
  },

  pan: function(){
    var args = arguments;
    var pan = this._private.pan;
    var dim, val, dims, x, y;

    switch( args.length ){
    case 0: // .pan()
      return pan;

    case 1:

      if( is.string( args[0] ) ){ // .pan('x')
        dim = args[0];
        return pan[ dim ];

      } else if( is.plainObject( args[0] ) ){ // .pan({ x: 0, y: 100 })
        if( !this._private.panningEnabled ){
          return this;
        }

        dims = args[0];
        x = dims.x;
        y = dims.y;

        if( is.number( x ) ){
          pan.x = x;
        }

        if( is.number( y ) ){
          pan.y = y;
        }

        this.trigger( 'pan viewport' );
      }
      break;

    case 2: // .pan('x', 100)
      if( !this._private.panningEnabled ){
        return this;
      }

      dim = args[0];
      val = args[1];

      if( (dim === 'x' || dim === 'y') && is.number( val ) ){
        pan[ dim ] = val;
      }

      this.trigger( 'pan viewport' );
      break;

    default:
      break; // invalid
    }

    this.notify( { // notify the renderer that the viewport changed
      type: 'viewport'
    } );

    return this; // chaining
  },

  panBy: function( params ){
    var args = arguments;
    var pan = this._private.pan;
    var dim, val, dims, x, y;

    if( !this._private.panningEnabled ){
      return this;
    }

    switch( args.length ){
    case 1:

      if( is.plainObject( args[0] ) ){ // .panBy({ x: 0, y: 100 })
        dims = args[0];
        x = dims.x;
        y = dims.y;

        if( is.number( x ) ){
          pan.x += x;
        }

        if( is.number( y ) ){
          pan.y += y;
        }

        this.trigger( 'pan viewport' );
      }
      break;

    case 2: // .panBy('x', 100)
      dim = args[0];
      val = args[1];

      if( (dim === 'x' || dim === 'y') && is.number( val ) ){
        pan[ dim ] += val;
      }

      this.trigger( 'pan viewport' );
      break;

    default:
      break; // invalid
    }

    this.notify( { // notify the renderer that the viewport changed
      type: 'viewport'
    } );

    return this; // chaining
  },

  fit: function( elements, padding ){
    var viewportState = this.getFitViewport( elements, padding );

    if( viewportState ){
      var _p = this._private;
      _p.zoom = viewportState.zoom;
      _p.pan = viewportState.pan;

      this.trigger( 'pan zoom viewport' );

      this.notify( { // notify the renderer that the viewport changed
        type: 'viewport'
      } );
    }

    return this; // chaining
  },

  getFitViewport: function( elements, padding ){
    if( is.number( elements ) && padding === undefined ){ // elements is optional
      padding = elements;
      elements = undefined;
    }

    if( !this._private.panningEnabled || !this._private.zoomingEnabled ){
      return;
    }

    var bb;

    if( is.string( elements ) ){
      var sel = elements;
      elements = this.$( sel );

    } else if( is.boundingBox( elements ) ){ // assume bb
      var bbe = elements;
      bb = {
        x1: bbe.x1,
        y1: bbe.y1,
        x2: bbe.x2,
        y2: bbe.y2
      };

      bb.w = bb.x2 - bb.x1;
      bb.h = bb.y2 - bb.y1;

    } else if( !is.elementOrCollection( elements ) ){
      elements = this.mutableElements();
    }

    bb = bb || elements.boundingBox();

    var w = this.width();
    var h = this.height();
    var zoom;
    padding = is.number( padding ) ? padding : 0;

    if( !isNaN( w ) && !isNaN( h ) && w > 0 && h > 0 && !isNaN( bb.w ) && !isNaN( bb.h ) &&  bb.w > 0 && bb.h > 0 ){
      zoom = Math.min( (w - 2 * padding) / bb.w, (h - 2 * padding) / bb.h );

      // crop zoom
      zoom = zoom > this._private.maxZoom ? this._private.maxZoom : zoom;
      zoom = zoom < this._private.minZoom ? this._private.minZoom : zoom;

      var pan = { // now pan to middle
        x: (w - zoom * ( bb.x1 + bb.x2 )) / 2,
        y: (h - zoom * ( bb.y1 + bb.y2 )) / 2
      };

      return {
        zoom: zoom,
        pan: pan
      };
    }

    return;
  },

  minZoom: function( zoom ){
    if( zoom === undefined ){
      return this._private.minZoom;
    } else if( is.number( zoom ) ){
      this._private.minZoom = zoom;
    }

    return this;
  },

  maxZoom: function( zoom ){
    if( zoom === undefined ){
      return this._private.maxZoom;
    } else if( is.number( zoom ) ){
      this._private.maxZoom = zoom;
    }

    return this;
  },

  zoom: function( params ){
    var pos; // in rendered px
    var zoom;

    if( params === undefined ){ // then get the zoom
      return this._private.zoom;

    } else if( is.number( params ) ){ // then set the zoom
      zoom = params;

    } else if( is.plainObject( params ) ){ // then zoom about a point
      zoom = params.level;

      if( params.position ){
        var p = params.position;
        var pan = this._private.pan;
        var z = this._private.zoom;

        pos = { // convert to rendered px
          x: p.x * z + pan.x,
          y: p.y * z + pan.y
        };
      } else if( params.renderedPosition ){
        pos = params.renderedPosition;
      }

      if( pos && !this._private.panningEnabled ){
        return this; // panning disabled
      }
    }

    if( !this._private.zoomingEnabled ){
      return this; // zooming disabled
    }

    if( !is.number( zoom ) || ( pos && (!is.number( pos.x ) || !is.number( pos.y )) ) ){
      return this; // can't zoom with invalid params
    }

    // crop zoom
    zoom = zoom > this._private.maxZoom ? this._private.maxZoom : zoom;
    zoom = zoom < this._private.minZoom ? this._private.minZoom : zoom;

    if( pos ){ // set zoom about position
      var pan1 = this._private.pan;
      var zoom1 = this._private.zoom;
      var zoom2 = zoom;

      var pan2 = {
        x: -zoom2 / zoom1 * (pos.x - pan1.x) + pos.x,
        y: -zoom2 / zoom1 * (pos.y - pan1.y) + pos.y
      };

      this._private.zoom = zoom;
      this._private.pan = pan2;

      var posChanged = pan1.x !== pan2.x || pan1.y !== pan2.y;
      this.trigger( ' zoom ' + (posChanged ? ' pan ' : '') + ' viewport ' );

    } else { // just set the zoom
      this._private.zoom = zoom;
      this.trigger( 'zoom viewport' );
    }

    this.notify( { // notify the renderer that the viewport changed
      type: 'viewport'
    } );

    return this; // chaining
  },

  viewport: function( opts ){
    var _p = this._private;
    var zoomDefd = true;
    var panDefd = true;
    var events = []; // to trigger
    var zoomFailed = false;
    var panFailed = false;

    if( !opts ){ return this; }
    if( !is.number( opts.zoom ) ){ zoomDefd = false; }
    if( !is.plainObject( opts.pan ) ){ panDefd = false; }
    if( !zoomDefd && !panDefd ){ return this; }

    if( zoomDefd ){
      var z = opts.zoom;

      if( z < _p.minZoom || z > _p.maxZoom || !_p.zoomingEnabled ){
        zoomFailed = true;

      } else {
        _p.zoom = z;

        events.push( 'zoom' );
      }
    }

    if( panDefd && (!zoomFailed || !opts.cancelOnFailedZoom) && _p.panningEnabled ){
      var p = opts.pan;

      if( is.number( p.x ) ){
        _p.pan.x = p.x;
        panFailed = false;
      }

      if( is.number( p.y ) ){
        _p.pan.y = p.y;
        panFailed = false;
      }

      if( !panFailed ){
        events.push( 'pan' );
      }
    }

    if( events.length > 0 ){
      events.push( 'viewport' );
      this.trigger( events.join( ' ' ) );

      this.notify( {
        type: 'viewport'
      } );
    }

    return this; // chaining
  },

  center: function( elements ){
    var pan = this.getCenterPan( elements );

    if( pan ){
      this._private.pan = pan;

      this.trigger( 'pan viewport' );

      this.notify( { // notify the renderer that the viewport changed
        type: 'viewport'
      } );
    }

    return this; // chaining
  },

  getCenterPan: function( elements, zoom ){
    if( !this._private.panningEnabled ){
      return;
    }

    if( is.string( elements ) ){
      var selector = elements;
      elements = this.mutableElements().filter( selector );
    } else if( !is.elementOrCollection( elements ) ){
      elements = this.mutableElements();
    }

    var bb = elements.boundingBox();
    var w = this.width();
    var h = this.height();
    zoom = zoom === undefined ? this._private.zoom : zoom;

    var pan = { // middle
      x: (w - zoom * ( bb.x1 + bb.x2 )) / 2,
      y: (h - zoom * ( bb.y1 + bb.y2 )) / 2
    };

    return pan;
  },

  reset: function(){
    if( !this._private.panningEnabled || !this._private.zoomingEnabled ){
      return this;
    }

    this.viewport( {
      pan: { x: 0, y: 0 },
      zoom: 1
    } );

    return this; // chaining
  },

  invalidateSize: function(){
    this._private.sizeCache = null;
  },

  size: function(){
    var _p = this._private;
    var container = _p.container;

    return ( _p.sizeCache = _p.sizeCache || ( container ? (function(){
      var rect = container.getBoundingClientRect();
      var style = window.getComputedStyle( container );
      var val = function( name ){ return parseFloat( style.getPropertyValue( name ) ); };

      return {
        width: rect.width - val('padding-left') - val('padding-right') - val('border-left-width') - val('border-right-width'),
        height: rect.height - val('padding-top') - val('padding-bottom') - val('border-top-width') - val('border-bottom-width')
      };
    })() : { // fallback if no container (not 0 b/c can be used for dividing etc)
      width: 1,
      height: 1
    } ) );
  },

  width: function(){
    return this.size().width;
  },

  height: function(){
    return this.size().height;
  },

  extent: function(){
    var pan = this._private.pan;
    var zoom = this._private.zoom;
    var rb = this.renderedExtent();

    var b = {
      x1: ( rb.x1 - pan.x ) / zoom,
      x2: ( rb.x2 - pan.x ) / zoom,
      y1: ( rb.y1 - pan.y ) / zoom,
      y2: ( rb.y2 - pan.y ) / zoom
    };

    b.w = b.x2 - b.x1;
    b.h = b.y2 - b.y1;

    return b;
  },

  renderedExtent: function(){
    var width = this.width();
    var height = this.height();

    return {
      x1: 0,
      y1: 0,
      x2: width,
      y2: height,
      w: width,
      h: height
    };
  }
});

// aliases
corefn.centre = corefn.center;

// backwards compatibility
corefn.autolockNodes = corefn.autolock;
corefn.autoungrabifyNodes = corefn.autoungrabify;

module.exports = corefn;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var define = __webpack_require__( 3 );
var Collection = __webpack_require__( 6 );
var Core = __webpack_require__( 20 );
var incExts = __webpack_require__( 75 );
var is = __webpack_require__( 0 );

// registered extensions to cytoscape, indexed by name
var extensions = {};

// registered modules for extensions, indexed by name
var modules = {};

function setExtension( type, name, registrant ){

  var ext = registrant;

  var overrideErr = function( field ){
    util.error( 'Can not register `' + name + '` for `' + type + '` since `' + field + '` already exists in the prototype and can not be overridden' );
  };

  if( type === 'core' ){
    if( Core.prototype[ name ] ){
      return overrideErr( name );
    } else {
      Core.prototype[ name ] = registrant;
    }

  } else if( type === 'collection' ){
    if( Collection.prototype[ name ] ){
      return overrideErr( name );
    } else {
      Collection.prototype[ name ] = registrant;
    }

  } else if( type === 'layout' ){
    // fill in missing layout functions in the prototype

    var Layout = function( options ){
      this.options = options;

      registrant.call( this, options );

      // make sure layout has _private for use w/ std apis like .on()
      if( !is.plainObject( this._private ) ){
        this._private = {};
      }

      this._private.cy = options.cy;
      this._private.listeners = [];
    };

    var layoutProto = Layout.prototype = Object.create( registrant.prototype );

    var optLayoutFns = [];

    for( var i = 0; i < optLayoutFns.length; i++ ){
      var fnName = optLayoutFns[ i ];

      layoutProto[ fnName ] = layoutProto[ fnName ] || function(){ return this; };
    }

    // either .start() or .run() is defined, so autogen the other
    if( layoutProto.start && !layoutProto.run ){
      layoutProto.run = function(){ this.start(); return this; };
    } else if( !layoutProto.start && layoutProto.run ){
      layoutProto.start = function(){ this.run(); return this; };
    }

    var regStop = registrant.prototype.stop;
    layoutProto.stop = function(){
      var opts = this.options;

      if( opts && opts.animate ){
        var anis = this.animations;

        if( anis ){
          for( var i = 0; i < anis.length; i++ ){
            anis[ i ].stop();
          }
        }
      }

      if( regStop ){
        regStop.call( this );
      } else {
        this.trigger( 'layoutstop' );
      }

      return this;
    };

    if( !layoutProto.destroy ){
      layoutProto.destroy = function(){
        return this;
      };
    }

    layoutProto.on = define.on( { layout: true } );
    layoutProto.one = define.on( { layout: true, unbindSelfOnTrigger: true } );
    layoutProto.once = define.on( { layout: true, unbindAllBindersOnTrigger: true } );
    layoutProto.off = define.off( { layout: true } );
    layoutProto.trigger = define.trigger( { layout: true } );

    define.eventAliasesOn( layoutProto );

    ext = Layout; // replace with our wrapped layout

  } else if( type === 'renderer' && name !== 'null' && name !== 'base' ){
    // user registered renderers inherit from base

    var BaseRenderer = getExtension( 'renderer', 'base' );
    var bProto = BaseRenderer.prototype;
    var RegistrantRenderer = registrant;
    var rProto = registrant.prototype;

    var Renderer = function(){
      BaseRenderer.apply( this, arguments );
      RegistrantRenderer.apply( this, arguments );
    };

    var proto = Renderer.prototype;

    for( var pName in bProto ){
      var pVal = bProto[ pName ];
      var existsInR = rProto[ pName ] != null;

      if( existsInR ){
        return overrideErr( pName );
      }

      proto[ pName ] = pVal; // take impl from base
    }

    for( var pName in rProto ){
      proto[ pName ] = rProto[ pName ]; // take impl from registrant
    }

    bProto.clientFunctions.forEach( function( name ){
      proto[ name ] = proto[ name ] || function(){
        util.error( 'Renderer does not implement `renderer.' + name + '()` on its prototype' );
      };
    } );

    ext = Renderer;

  }

  return util.setMap( {
    map: extensions,
    keys: [ type, name ],
    value: ext
  } );
}

function getExtension( type, name ){
  return util.getMap( {
    map: extensions,
    keys: [ type, name ]
  } );
}

function setModule( type, name, moduleType, moduleName, registrant ){
  return util.setMap( {
    map: modules,
    keys: [ type, name, moduleType, moduleName ],
    value: registrant
  } );
}

function getModule( type, name, moduleType, moduleName ){
  return util.getMap( {
    map: modules,
    keys: [ type, name, moduleType, moduleName ]
  } );
}

var extension = function(){
  // e.g. extension('renderer', 'svg')
  if( arguments.length === 2 ){
    return getExtension.apply( null, arguments );
  }

  // e.g. extension('renderer', 'svg', { ... })
  else if( arguments.length === 3 ){
    return setExtension.apply( null, arguments );
  }

  // e.g. extension('renderer', 'svg', 'nodeShape', 'ellipse')
  else if( arguments.length === 4 ){
    return getModule.apply( null, arguments );
  }

  // e.g. extension('renderer', 'svg', 'nodeShape', 'ellipse', { ... })
  else if( arguments.length === 5 ){
    return setModule.apply( null, arguments );
  }

  else {
    util.error( 'Invalid extension access syntax' );
  }

};

// allows a core instance to access extensions internally
Core.prototype.extension = extension;

// included extensions
incExts.forEach( function( group ){
  group.extensions.forEach( function( ext ){
    setExtension( group.type, ext.name, ext.impl );
  } );
} );

module.exports = extension;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  {
    type: 'layout',
    extensions: __webpack_require__( 81 )
  },

  {
    type: 'renderer',
    extensions: __webpack_require__( 105 )
  }
];


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var is = __webpack_require__( 0 );

var defaults = {
  fit: true, // whether to fit the viewport to the graph
  directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  circle: false, // put depths in concentric circles if true, put depths top down if false
  spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  roots: undefined, // the roots of the trees
  maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function BreadthFirstLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

BreadthFirstLayout.prototype.run = function(){
  var params = this.options;
  var options = params;

  var cy = params.cy;
  var eles = options.eles;
  var nodes = eles.nodes().not( ':parent' );
  var graph = eles;

  var bb = math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
    x1: 0, y1: 0, w: cy.width(), h: cy.height()
  } );

  var roots;
  if( is.elementOrCollection( options.roots ) ){
    roots = options.roots;
  } else if( is.array( options.roots ) ){
    var rootsArray = [];

    for( var i = 0; i < options.roots.length; i++ ){
      var id = options.roots[ i ];
      var ele = cy.getElementById( id );
      rootsArray.push( ele );
    }

    roots = cy.collection( rootsArray );
  } else if( is.string( options.roots ) ){
    roots = cy.$( options.roots );

  } else {
    if( options.directed ){
      roots = nodes.roots();
    } else {
      var components = [];
      var unhandledNodes = nodes;

      while( unhandledNodes.length > 0 ){
        var currComp = cy.collection();

        eles.bfs( {
          roots: unhandledNodes[0],
          visit: function( i, depth, node, edge, pNode ){
            currComp = currComp.add( node );
          },
          directed: false
        } );

        unhandledNodes = unhandledNodes.not( currComp );
        components.push( currComp );
      }

      roots = cy.collection();
      for( var i = 0; i < components.length; i++ ){
        var comp = components[ i ];
        var maxDegree = comp.maxDegree( false );
        var compRoots = comp.filter( function(){
          return this.degree( false ) === maxDegree;
        } );

        roots = roots.add( compRoots );
      }

    }
  }


  var depths = [];
  var foundByBfs = {};
  var id2depth = {};
  var prevNode = {};
  var prevEdge = {};
  var successors = {};

  // find the depths of the nodes
  graph.bfs( {
    roots: roots,
    directed: options.directed,
    visit: function( i, depth, node, edge, pNode ){
      var ele = this[0];
      var id = ele.id();

      if( !depths[ depth ] ){
        depths[ depth ] = [];
      }

      depths[ depth ].push( ele );
      foundByBfs[ id ] = true;
      id2depth[ id ] = depth;
      prevNode[ id ] = pNode;
      prevEdge[ id ] = edge;

      if( pNode ){
        var prevId = pNode.id();
        var succ = successors[ prevId ] = successors[ prevId ] || [];

        succ.push( node );
      }
    }
  } );

  // check for nodes not found by bfs
  var orphanNodes = [];
  for( var i = 0; i < nodes.length; i++ ){
    var ele = nodes[ i ];

    if( foundByBfs[ ele.id() ] ){
      continue;
    } else {
      orphanNodes.push( ele );
    }
  }

  // assign orphan nodes a depth from their neighborhood
  var maxChecks = orphanNodes.length * 3;
  var checks = 0;
  while( orphanNodes.length !== 0 && checks < maxChecks ){
    var node = orphanNodes.shift();
    var neighbors = node.neighborhood().nodes();
    var assignedDepth = false;

    for( var i = 0; i < neighbors.length; i++ ){
      var depth = id2depth[ neighbors[ i ].id() ];

      if( depth !== undefined ){
        depths[ depth ].push( node );
        assignedDepth = true;
        break;
      }
    }

    if( !assignedDepth ){
      orphanNodes.push( node );
    }

    checks++;
  }

  // assign orphan nodes that are still left to the depth of their subgraph
  while( orphanNodes.length !== 0 ){
    var node = orphanNodes.shift();
    //var subgraph = graph.bfs( node ).path;
    var assignedDepth = false;

    // for( var i = 0; i < subgraph.length; i++ ){
    //   var depth = id2depth[ subgraph[i].id() ];

    //   if( depth !== undefined ){
    //     depths[depth].push( node );
    //     assignedDepth = true;
    //     break;
    //   }
    // }

    if( !assignedDepth ){ // worst case if the graph really isn't tree friendly, then just dump it in 0
      if( depths.length === 0 ){
        depths.push( [] );
      }

      depths[0].push( node );
    }
  }

  // assign the nodes a depth and index
  var assignDepthsToEles = function(){
    for( var i = 0; i < depths.length; i++ ){
      var eles = depths[ i ];

      for( var j = 0; j < eles.length; j++ ){
        var ele = eles[ j ];

        ele._private.scratch.breadthfirst = {
          depth: i,
          index: j
        };
      }
    }
  };
  assignDepthsToEles();


  var intersectsDepth = function( node ){ // returns true if has edges pointing in from a higher depth
    var edges = node.connectedEdges( function(){
      return this.data( 'target' ) === node.id();
    } );
    var thisInfo = node._private.scratch.breadthfirst;
    var highestDepthOfOther = 0;
    var highestOther;
    for( var i = 0; i < edges.length; i++ ){
      var edge = edges[ i ];
      var otherNode = edge.source()[0];
      var otherInfo = otherNode._private.scratch.breadthfirst;

      if( thisInfo.depth <= otherInfo.depth && highestDepthOfOther < otherInfo.depth ){
        highestDepthOfOther = otherInfo.depth;
        highestOther = otherNode;
      }
    }

    return highestOther;
  };

  // make maximal if so set by adjusting depths
  for( var adj = 0; adj < options.maximalAdjustments; adj++ ){

    var nDepths = depths.length;
    var elesToMove = [];
    for( var i = 0; i < nDepths; i++ ){
      var depth = depths[ i ];

      var nDepth = depth.length;
      for( var j = 0; j < nDepth; j++ ){
        var ele = depth[ j ];
        var info = ele._private.scratch.breadthfirst;
        var intEle = intersectsDepth( ele );

        if( intEle ){
          info.intEle = intEle;
          elesToMove.push( ele );
        }
      }
    }

    for( var i = 0; i < elesToMove.length; i++ ){
      var ele = elesToMove[ i ];
      var info = ele._private.scratch.breadthfirst;
      var intEle = info.intEle;
      var intInfo = intEle._private.scratch.breadthfirst;

      depths[ info.depth ].splice( info.index, 1 ); // remove from old depth & index

      // add to end of new depth
      var newDepth = intInfo.depth + 1;
      while( newDepth > depths.length - 1 ){
        depths.push( [] );
      }
      depths[ newDepth ].push( ele );

      info.depth = newDepth;
      info.index = depths[ newDepth ].length - 1;
    }

    assignDepthsToEles();
  }

  // find min distance we need to leave between nodes
  var minDistance = 0;
  if( options.avoidOverlap ){
    for( var i = 0; i < nodes.length; i++ ){
      var n = nodes[ i ];
      var nbb = n.boundingBox();
      var w = nbb.w;
      var h = nbb.h;

      minDistance = Math.max( minDistance, w, h );
    }
    minDistance *= options.spacingFactor; // just to have some nice spacing
  }

  // get the weighted percent for an element based on its connectivity to other levels
  var cachedWeightedPercent = {};
  var getWeightedPercent = function( ele ){
    if( cachedWeightedPercent[ ele.id() ] ){
      return cachedWeightedPercent[ ele.id() ];
    }

    var eleDepth = ele._private.scratch.breadthfirst.depth;
    var neighbors = ele.neighborhood().nodes().not( ':parent' ).intersection(nodes);
    var percent = 0;
    var samples = 0;

    for( var i = 0; i < neighbors.length; i++ ){
      var neighbor = neighbors[ i ];
      var bf = neighbor._private.scratch.breadthfirst;
      var index = bf.index;
      var depth = bf.depth;
      var nDepth = depths[ depth ].length;

      if( eleDepth > depth || eleDepth === 0 ){ // only get influenced by elements above
        percent += index / nDepth;
        samples++;
      }
    }

    samples = Math.max( 1, samples );
    percent = percent / samples;

    if( samples === 0 ){ // so lone nodes have a "don't care" state in sorting
      percent = undefined;
    }

    cachedWeightedPercent[ ele.id() ] = percent;
    return percent;
  };


  // rearrange the indices in each depth level based on connectivity

  var sortFn = function( a, b ){
    var apct = getWeightedPercent( a );
    var bpct = getWeightedPercent( b );

    return apct - bpct;
  };

  for( var times = 0; times < 3; times++ ){ // do it a few times b/c the depths are dynamic and we want a more stable result

    for( var i = 0; i < depths.length; i++ ){
      depths[ i ] = depths[ i ].sort( sortFn );
    }
    assignDepthsToEles(); // and update

  }

  var biggestDepthSize = 0;
  for( var i = 0; i < depths.length; i++ ){
    biggestDepthSize = Math.max( depths[ i ].length, biggestDepthSize );
  }

  var center = {
    x: bb.x1 + bb.w / 2,
    y: bb.x1 + bb.h / 2
  };

  var getPosition = function( ele, isBottomDepth ){
    var info = ele._private.scratch.breadthfirst;
    var depth = info.depth;
    var index = info.index;
    var depthSize = depths[ depth ].length;

    var distanceX = Math.max( bb.w / (depthSize + 1), minDistance );
    var distanceY = Math.max( bb.h / (depths.length + 1), minDistance );
    var radiusStepSize = Math.min( bb.w / 2 / depths.length, bb.h / 2 / depths.length );
    radiusStepSize = Math.max( radiusStepSize, minDistance );

    if( !options.circle ){

      var epos = {
        x: center.x + (index + 1 - (depthSize + 1) / 2) * distanceX,
        y: (depth + 1) * distanceY
      };

      if( isBottomDepth ){
        return epos;
      }

      // var succs = successors[ ele.id() ];
      // if( succs ){
      //   epos.x = 0;
      //
      //   for( var i = 0 ; i < succs.length; i++ ){
      //     var spos = pos[ succs[i].id() ];
      //
      //     epos.x += spos.x;
      //   }
      //
      //   epos.x /= succs.length;
      // } else {
      //   //debugger;
      // }

      return epos;

    } else {
      if( options.circle ){
        var radius = radiusStepSize * depth + radiusStepSize - (depths.length > 0 && depths[0].length <= 3 ? radiusStepSize / 2 : 0);
        var theta = 2 * Math.PI / depths[ depth ].length * index;

        if( depth === 0 && depths[0].length === 1 ){
          radius = 1;
        }

        return {
          x: center.x + radius * Math.cos( theta ),
          y: center.y + radius * Math.sin( theta )
        };

      } else {
        return {
          x: center.x + (index + 1 - (depthSize + 1) / 2) * distanceX,
          y: (depth + 1) * distanceY
        };
      }
    }

  };

  // get positions in reverse depth order
  var pos = {};
  for( var i = depths.length - 1; i >= 0; i-- ){
    var depth = depths[ i ];

    for( var j = 0; j < depth.length; j++ ){
      var node = depth[ j ];

      pos[ node.id() ] = getPosition( node, i === depths.length - 1 );
    }
  }

  nodes.layoutPositions( this, options, function(){
    return pos[ this.id() ];
  } );

  return this; // chaining
};

module.exports = BreadthFirstLayout;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var is = __webpack_require__( 0 );

var defaults = {
  fit: true, // whether to fit the viewport to the graph
  padding: 30, // the padding on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
  radius: undefined, // the radius of the circle
  startAngle: 3 / 2 * Math.PI, // where nodes start in radians
  sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function CircleLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

CircleLayout.prototype.run = function(){
  var params = this.options;
  var options = params;

  var cy = params.cy;
  var eles = options.eles;

  var clockwise = options.counterclockwise !== undefined ? !options.counterclockwise : options.clockwise;

  var nodes = eles.nodes().not( ':parent' );

  if( options.sort ){
    nodes = nodes.sort( options.sort );
  }

  var bb = math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
    x1: 0, y1: 0, w: cy.width(), h: cy.height()
  } );

  var center = {
    x: bb.x1 + bb.w / 2,
    y: bb.y1 + bb.h / 2
  };

  var sweep = options.sweep === undefined ? 2 * Math.PI - 2 * Math.PI / nodes.length : options.sweep;

  var dTheta = sweep / ( Math.max( 1, nodes.length - 1 ) );
  var r;

  var minDistance = 0;
  for( var i = 0; i < nodes.length; i++ ){
    var n = nodes[ i ];
    var nbb = n.boundingBox();
    var w = nbb.w;
    var h = nbb.h;

    minDistance = Math.max( minDistance, w, h );
  }

  if( is.number( options.radius ) ){
    r = options.radius;
  } else if( nodes.length <= 1 ){
    r = 0;
  } else {
    r = Math.min( bb.h, bb.w ) / 2 - minDistance;
  }

  // calculate the radius
  if( nodes.length > 1 && options.avoidOverlap ){ // but only if more than one node (can't overlap)
    minDistance *= 1.75; // just to have some nice spacing

    var dcos = Math.cos( dTheta ) - Math.cos( 0 );
    var dsin = Math.sin( dTheta ) - Math.sin( 0 );
    var rMin = Math.sqrt( minDistance * minDistance / ( dcos * dcos + dsin * dsin ) ); // s.t. no nodes overlapping
    r = Math.max( rMin, r );
  }

  var getPos = function( i, ele ){
    var theta = options.startAngle + i * dTheta * ( clockwise ? 1 : -1 );

    var rx = r * Math.cos( theta );
    var ry = r * Math.sin( theta );
    var pos = {
      x: center.x + rx,
      y: center.y + ry
    };

    return pos;
  };

  nodes.layoutPositions( this, options, getPos );

  return this; // chaining
};

module.exports = CircleLayout;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );

var defaults = {
  fit: true, // whether to fit the viewport to the graph
  padding: 30, // the padding on fit
  startAngle: 3 / 2 * Math.PI, // where nodes start in radians
  sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
  clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
  equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
  minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  height: undefined, // height of layout area (overrides container height)
  width: undefined, // width of layout area (overrides container width)
  concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
    return node.degree();
  },
  levelWidth: function( nodes ){ // the variation of concentric values in each level
    return nodes.maxDegree() / 4;
  },
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function ConcentricLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

ConcentricLayout.prototype.run = function(){
  var params = this.options;
  var options = params;

  var clockwise = options.counterclockwise !== undefined ? !options.counterclockwise : options.clockwise;

  var cy = params.cy;

  var eles = options.eles;
  var nodes = eles.nodes().not( ':parent' );

  var bb = math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
    x1: 0, y1: 0, w: cy.width(), h: cy.height()
  } );

  var center = {
    x: bb.x1 + bb.w / 2,
    y: bb.y1 + bb.h / 2
  };

  var nodeValues = []; // { node, value }
  var theta = options.startAngle;
  var maxNodeSize = 0;

  for( var i = 0; i < nodes.length; i++ ){
    var node = nodes[ i ];
    var value;

    // calculate the node value
    value = options.concentric.apply( node, [ node ] );
    nodeValues.push( {
      value: value,
      node: node
    } );

    // for style mapping
    node._private.scratch.concentric = value;
  }

  // in case we used the `concentric` in style
  nodes.updateStyle();

  // calculate max size now based on potentially updated mappers
  for( var i = 0; i < nodes.length; i++ ){
    var node = nodes[ i ];
    var nbb = node.boundingBox();

    maxNodeSize = Math.max( maxNodeSize, nbb.w, nbb.h );
  }

  // sort node values in descreasing order
  nodeValues.sort( function( a, b ){
    return b.value - a.value;
  } );

  var levelWidth = options.levelWidth( nodes );

  // put the values into levels
  var levels = [ [] ];
  var currentLevel = levels[0];
  for( var i = 0; i < nodeValues.length; i++ ){
    var val = nodeValues[ i ];

    if( currentLevel.length > 0 ){
      var diff = Math.abs( currentLevel[0].value - val.value );

      if( diff >= levelWidth ){
        currentLevel = [];
        levels.push( currentLevel );
      }
    }

    currentLevel.push( val );
  }

  // create positions from levels

  var minDist = maxNodeSize + options.minNodeSpacing; // min dist between nodes

  if( !options.avoidOverlap ){ // then strictly constrain to bb
    var firstLvlHasMulti = levels.length > 0 && levels[0].length > 1;
    var maxR = ( Math.min( bb.w, bb.h ) / 2 - minDist );
    var rStep = maxR / ( levels.length + firstLvlHasMulti ? 1 : 0 );

    minDist = Math.min( minDist, rStep );
  }

  // find the metrics for each level
  var r = 0;
  for( var i = 0; i < levels.length; i++ ){
    var level = levels[ i ];
    var sweep = options.sweep === undefined ? 2 * Math.PI - 2 * Math.PI / level.length : options.sweep;
    var dTheta = level.dTheta = sweep / ( Math.max( 1, level.length - 1 ) );

    // calculate the radius
    if( level.length > 1 && options.avoidOverlap ){ // but only if more than one node (can't overlap)
      var dcos = Math.cos( dTheta ) - Math.cos( 0 );
      var dsin = Math.sin( dTheta ) - Math.sin( 0 );
      var rMin = Math.sqrt( minDist * minDist / ( dcos * dcos + dsin * dsin ) ); // s.t. no nodes overlapping

      r = Math.max( rMin, r );
    }

    level.r = r;

    r += minDist;
  }

  if( options.equidistant ){
    var rDeltaMax = 0;
    var r = 0;

    for( var i = 0; i < levels.length; i++ ){
      var level = levels[ i ];
      var rDelta = level.r - r;

      rDeltaMax = Math.max( rDeltaMax, rDelta );
    }

    r = 0;
    for( var i = 0; i < levels.length; i++ ){
      var level = levels[ i ];

      if( i === 0 ){
        r = level.r;
      }

      level.r = r;

      r += rDeltaMax;
    }
  }

  // calculate the node positions
  var pos = {}; // id => position
  for( var i = 0; i < levels.length; i++ ){
    var level = levels[ i ];
    var dTheta = level.dTheta;
    var r = level.r;

    for( var j = 0; j < level.length; j++ ){
      var val = level[ j ];
      var theta = options.startAngle + (clockwise ? 1 : -1) * dTheta * j;

      var p = {
        x: center.x + r * Math.cos( theta ),
        y: center.y + r * Math.sin( theta )
      };

      pos[ val.node.id() ] = p;
    }
  }

  // position the nodes
  nodes.layoutPositions( this, options, function(){
    var id = this.id();

    return pos[ id ];
  } );

  return this; // chaining
};

module.exports = ConcentricLayout;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
The CoSE layout was written by Gerardo Huck.
https://www.linkedin.com/in/gerardohuck/

Based on the following article:
http://dl.acm.org/citation.cfm?id=1498047

Modifications tracked on Github.
*/

var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var Thread = __webpack_require__( 14 );
var is = __webpack_require__( 0 );

var DEBUG;

/**
 * @brief :  default layout options
 */
var defaults = {
  // Called on `layoutready`
  ready: function(){},

  // Called on `layoutstop`
  stop: function(){},

  // Whether to animate while running the layout
  animate: true,

  // The layout animates only after this many milliseconds
  // (prevents flashing on fast runs)
  animationThreshold: 250,

  // Number of iterations between consecutive screen positions update
  // (0 -> only updated on the end)
  refresh: 20,

  // Whether to fit the network view after when done
  fit: true,

  // Padding on fit
  padding: 30,

  // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  boundingBox: undefined,

  // Randomize the initial positions of the nodes (true) or use existing positions (false)
  randomize: false,

  // Extra spacing between components in non-compound graphs
  componentSpacing: 100,

  // Node repulsion (non overlapping) multiplier
  nodeRepulsion: function( node ){ return 400000; },

  // Node repulsion (overlapping) multiplier
  nodeOverlap: 10,

  // Ideal edge (non nested) length
  idealEdgeLength: function( edge ){ return 10; },

  // Divisor to compute edge forces
  edgeElasticity: function( edge ){ return 100; },

  // Nesting factor (multiplier) to compute ideal edge length for nested edges
  nestingFactor: 5,

  // Gravity force (constant)
  gravity: 80,

  // Maximum number of iterations to perform
  numIter: 1000,

  // Initial temperature (maximum node displacement)
  initialTemp: 200,

  // Cooling factor (how the temperature is reduced between consecutive iterations
  coolingFactor: 0.95,

  // Lower temperature threshold (below this point the layout will end)
  minTemp: 1.0,

  // Whether to use threading to speed up the layout
  useMultitasking: true
};


/**
 * @brief       : constructor
 * @arg options : object containing layout options
 */
function CoseLayout( options ){
  this.options = util.extend( {}, defaults, options );

  this.options.layout = this;
}


/**
 * @brief : runs the layout
 */
CoseLayout.prototype.run = function(){
  var options = this.options;
  var cy      = options.cy;
  var layout  = this;
  var thread  = this.thread;

  if( !thread || thread.stopped() ){
    thread = this.thread = Thread( { disabled: !options.useMultitasking } );
  }

  layout.stopped = false;

  layout.trigger( { type: 'layoutstart', layout: layout } );

  // Set DEBUG - Global variable
  if( true === options.debug ){
    DEBUG = true;
  } else {
    DEBUG = false;
  }

  // Initialize layout info
  var layoutInfo = createLayoutInfo( cy, layout, options );

  // Show LayoutInfo contents if debugging
  if( DEBUG ){
    printLayoutInfo( layoutInfo );
  }

  // If required, randomize node positions
  if (options.randomize) {
    randomizePositions( layoutInfo, cy );
  }

  var startTime = Date.now();
  var refreshRequested = false;
  var refresh = function( rOpts ){
    rOpts = rOpts || {};

    if( refreshRequested && !rOpts.next ){
      return;
    }

    if( !rOpts.force && Date.now() - startTime < options.animationThreshold ){
      return;
    }

    refreshRequested = true;

    util.requestAnimationFrame( function(){
      refreshPositions( layoutInfo, cy, options );

      // Fit the graph if necessary
      if( true === options.fit ){
        cy.fit( options.padding );
      }

      refreshRequested = false;

      if( rOpts.next ){ rOpts.next(); }
    });
  };

  thread.on( 'message', function( e ){
    var layoutNodes = e.message;

    layoutInfo.layoutNodes = layoutNodes;
    refresh();
  } );

  thread.pass( {
    layoutInfo: layoutInfo,
    options: {
      animate: options.animate,
      refresh: options.refresh,
      componentSpacing: options.componentSpacing,
      nodeOverlap: options.nodeOverlap,
      nestingFactor: options.nestingFactor,
      gravity: options.gravity,
      numIter: options.numIter,
      initialTemp: options.initialTemp,
      coolingFactor: options.coolingFactor,
      minTemp: options.minTemp
    }
  } ).run( function( pass ){
    var layoutInfo = pass.layoutInfo;
    var options = pass.options;
    var stopped = false;

    /**
     * @brief          : Performs one iteration of the physical simulation
     * @arg layoutInfo : LayoutInfo object already initialized
     * @arg cy         : Cytoscape object
     * @arg options    : Layout options
     */
    var step = function( layoutInfo, options, step ){
      // var s = "\n\n###############################";
      // s += "\nSTEP: " + step;
      // s += "\n###############################\n";
      // logDebug(s);

      // Calculate node repulsions
      calculateNodeForces( layoutInfo, options );
      // Calculate edge forces
      calculateEdgeForces( layoutInfo, options );
      // Calculate gravity forces
      calculateGravityForces( layoutInfo, options );
      // Propagate forces from parent to child
      propagateForces( layoutInfo, options );
      // Update positions based on calculated forces
      updatePositions( layoutInfo, options );
    };

    /**
     * @brief : Computes the node repulsion forces
     */
    var calculateNodeForces = function( layoutInfo, options ){
      // Go through each of the graphs in graphSet
      // Nodes only repel each other if they belong to the same graph
      // var s = 'calculateNodeForces';
      // logDebug(s);
      for( var i = 0; i < layoutInfo.graphSet.length; i ++ ){
        var graph    = layoutInfo.graphSet[ i ];
        var numNodes = graph.length;

        // s = "Set: " + graph.toString();
        // logDebug(s);

        // Now get all the pairs of nodes
        // Only get each pair once, (A, B) = (B, A)
        for( var j = 0; j < numNodes; j++ ){
          var node1 = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ graph[ j ] ] ];

          for( var k = j + 1; k < numNodes; k++ ){
            var node2 = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ graph[ k ] ] ];

            nodeRepulsion( node1, node2, layoutInfo, options );
          }
        }
      }
    };

    /**
     * @brief : Compute the node repulsion forces between a pair of nodes
     */
    var nodeRepulsion = function( node1, node2, layoutInfo, options ){
      // var s = "Node repulsion. Node1: " + node1.id + " Node2: " + node2.id;

      var cmptId1 = node1.cmptId;
      var cmptId2 = node2.cmptId;

      if( cmptId1 !== cmptId2 && !layoutInfo.isCompound ){ return; }

      // Get direction of line connecting both node centers
      var directionX = node2.positionX - node1.positionX;
      var directionY = node2.positionY - node1.positionY;
      // s += "\ndirectionX: " + directionX + ", directionY: " + directionY;

      // If both centers are the same, apply a random force
      if( 0 === directionX && 0 === directionY ){
        // s += "\nNodes have the same position.";
        return; // TODO could be improved with random force
      }

      var overlap = nodesOverlap( node1, node2, directionX, directionY );

      if( overlap > 0 ){
        // s += "\nNodes DO overlap.";
        // s += "\nOverlap: " + overlap;
        // If nodes overlap, repulsion force is proportional
        // to the overlap
        var force    = options.nodeOverlap * overlap;

        // Compute the module and components of the force vector
        var distance = Math.sqrt( directionX * directionX + directionY * directionY );
        // s += "\nDistance: " + distance;
        var forceX   = force * directionX / distance;
        var forceY   = force * directionY / distance;

      } else {
        // s += "\nNodes do NOT overlap.";
        // If there's no overlap, force is inversely proportional
        // to squared distance

        // Get clipping points for both nodes
        var point1 = findClippingPoint( node1, directionX, directionY );
        var point2 = findClippingPoint( node2, -1 * directionX, -1 * directionY );

        // Use clipping points to compute distance
        var distanceX   = point2.x - point1.x;
        var distanceY   = point2.y - point1.y;
        var distanceSqr = distanceX * distanceX + distanceY * distanceY;
        var distance    = Math.sqrt( distanceSqr );
        // s += "\nDistance: " + distance;

        // Compute the module and components of the force vector
        var force  = ( node1.nodeRepulsion + node2.nodeRepulsion ) / distanceSqr;
        var forceX = force * distanceX / distance;
        var forceY = force * distanceY / distance;
      }

      // Apply force
      if( !node1.isLocked ){
        node1.offsetX -= forceX;
        node1.offsetY -= forceY;
      }

      if( !node2.isLocked ){
        node2.offsetX += forceX;
        node2.offsetY += forceY;
      }

      // s += "\nForceX: " + forceX + " ForceY: " + forceY;
      // logDebug(s);

      return;
    };

    /**
     * @brief  : Determines whether two nodes overlap or not
     * @return : Amount of overlapping (0 => no overlap)
     */
    var nodesOverlap = function( node1, node2, dX, dY ){

      if( dX > 0 ){
        var overlapX = node1.maxX - node2.minX;
      } else {
        var overlapX = node2.maxX - node1.minX;
      }

      if( dY > 0 ){
        var overlapY = node1.maxY - node2.minY;
      } else {
        var overlapY = node2.maxY - node1.minY;
      }

      if( overlapX >= 0 && overlapY >= 0 ){
        return Math.sqrt( overlapX * overlapX + overlapY * overlapY );
      } else {
        return 0;
      }
    };

    /**
     * @brief : Finds the point in which an edge (direction dX, dY) intersects
     *          the rectangular bounding box of it's source/target node
     */
    var findClippingPoint = function( node, dX, dY ){

      // Shorcuts
      var X = node.positionX;
      var Y = node.positionY;
      var H = node.height || 1;
      var W = node.width || 1;
      var dirSlope     = dY / dX;
      var nodeSlope    = H / W;

      // var s = 'Computing clipping point of node ' + node.id +
      //   " . Height:  " + H + ", Width: " + W +
      //   "\nDirection " + dX + ", " + dY;
      //
      // Compute intersection
      var res = {};
      do {
        // Case: Vertical direction (up)
        if( 0 === dX && 0 < dY ){
          res.x = X;
          // s += "\nUp direction";
          res.y = Y + H / 2;
          break;
        }

        // Case: Vertical direction (down)
        if( 0 === dX && 0 > dY ){
          res.x = X;
          res.y = Y + H / 2;
          // s += "\nDown direction";
          break;
        }

        // Case: Intersects the right border
        if( 0 < dX &&
        -1 * nodeSlope <= dirSlope &&
        dirSlope <= nodeSlope ){
          res.x = X + W / 2;
          res.y = Y + (W * dY / 2 / dX);
          // s += "\nRightborder";
          break;
        }

        // Case: Intersects the left border
        if( 0 > dX &&
        -1 * nodeSlope <= dirSlope &&
        dirSlope <= nodeSlope ){
          res.x = X - W / 2;
          res.y = Y - (W * dY / 2 / dX);
          // s += "\nLeftborder";
          break;
        }

        // Case: Intersects the top border
        if( 0 < dY &&
        ( dirSlope <= -1 * nodeSlope ||
          dirSlope >= nodeSlope ) ){
          res.x = X + (H * dX / 2 / dY);
          res.y = Y + H / 2;
          // s += "\nTop border";
          break;
        }

        // Case: Intersects the bottom border
        if( 0 > dY &&
        ( dirSlope <= -1 * nodeSlope ||
          dirSlope >= nodeSlope ) ){
          res.x = X - (H * dX / 2 / dY);
          res.y = Y - H / 2;
          // s += "\nBottom border";
          break;
        }

      } while( false);

      // s += "\nClipping point found at " + res.x + ", " + res.y;
      // logDebug(s);
      return res;
    };

    /**
     * @brief : Calculates all edge forces
     */
    var calculateEdgeForces = function( layoutInfo, options ){
      // Iterate over all edges
      for( var i = 0; i < layoutInfo.edgeSize; i++ ){
        // Get edge, source & target nodes
        var edge     = layoutInfo.layoutEdges[ i ];
        var sourceIx = layoutInfo.idToIndex[ edge.sourceId ];
        var source   = layoutInfo.layoutNodes[ sourceIx ];
        var targetIx = layoutInfo.idToIndex[ edge.targetId ];
        var target   = layoutInfo.layoutNodes[ targetIx ];

        // Get direction of line connecting both node centers
        var directionX = target.positionX - source.positionX;
        var directionY = target.positionY - source.positionY;

        // If both centers are the same, do nothing.
        // A random force has already been applied as node repulsion
        if( 0 === directionX && 0 === directionY ){
          return;
        }

        // Get clipping points for both nodes
        var point1 = findClippingPoint( source, directionX, directionY );
        var point2 = findClippingPoint( target, -1 * directionX, -1 * directionY );


        var lx = point2.x - point1.x;
        var ly = point2.y - point1.y;
        var l  = Math.sqrt( lx * lx + ly * ly );

        var force  = Math.pow( edge.idealLength - l, 2 ) / edge.elasticity;

        if( 0 !== l ){
          var forceX = force * lx / l;
          var forceY = force * ly / l;
        } else {
          var forceX = 0;
          var forceY = 0;
        }

        // Add this force to target and source nodes
        if( !source.isLocked ){
          source.offsetX += forceX;
          source.offsetY += forceY;
        }

        if( !target.isLocked ){
          target.offsetX -= forceX;
          target.offsetY -= forceY;
        }

        // var s = 'Edge force between nodes ' + source.id + ' and ' + target.id;
        // s += "\nDistance: " + l + " Force: (" + forceX + ", " + forceY + ")";
        // logDebug(s);
      }
    };

    /**
     * @brief : Computes gravity forces for all nodes
     */
    var calculateGravityForces = function( layoutInfo, options ){
      var distThreshold = 1;

      // var s = 'calculateGravityForces';
      // logDebug(s);
      for( var i = 0; i < layoutInfo.graphSet.length; i ++ ){
        var graph    = layoutInfo.graphSet[ i ];
        var numNodes = graph.length;

        // s = "Set: " + graph.toString();
        // logDebug(s);

        // Compute graph center
        if( 0 === i ){
          var centerX   = layoutInfo.clientHeight / 2;
          var centerY   = layoutInfo.clientWidth  / 2;
        } else {
          // Get Parent node for this graph, and use its position as center
          var temp    = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ graph[0] ] ];
          var parent  = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ temp.parentId ] ];
          var centerX = parent.positionX;
          var centerY = parent.positionY;
        }
        // s = "Center found at: " + centerX + ", " + centerY;
        // logDebug(s);

        // Apply force to all nodes in graph
        for( var j = 0; j < numNodes; j++ ){
          var node = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ graph[ j ] ] ];
          // s = "Node: " + node.id;

          if( node.isLocked ){ continue; }

          var dx = centerX - node.positionX;
          var dy = centerY - node.positionY;
          var d  = Math.sqrt( dx * dx + dy * dy );
          if( d > distThreshold ){
            var fx = options.gravity * dx / d;
            var fy = options.gravity * dy / d;
            node.offsetX += fx;
            node.offsetY += fy;
            // s += ": Applied force: " + fx + ", " + fy;
          } else {
            // s += ": skypped since it's too close to center";
          }
          // logDebug(s);
        }
      }
    };

    /**
     * @brief          : This function propagates the existing offsets from
     *                   parent nodes to its descendents.
     * @arg layoutInfo : layoutInfo Object
     * @arg cy         : cytoscape Object
     * @arg options    : Layout options
     */
    var propagateForces = function( layoutInfo, options ){
      // Inline implementation of a queue, used for traversing the graph in BFS order
      var queue = [];
      var start = 0;   // Points to the start the queue
      var end   = -1;  // Points to the end of the queue

      // logDebug('propagateForces');

      // Start by visiting the nodes in the root graph
      queue.push.apply( queue, layoutInfo.graphSet[0] );
      end += layoutInfo.graphSet[0].length;

      // Traverse the graph, level by level,
      while( start <= end ){
        // Get the node to visit and remove it from queue
        var nodeId    = queue[ start++ ];
        var nodeIndex = layoutInfo.idToIndex[ nodeId ];
        var node      = layoutInfo.layoutNodes[ nodeIndex ];
        var children  = node.children;

        // We only need to process the node if it's compound
        if( 0 < children.length && !node.isLocked ){
          var offX = node.offsetX;
          var offY = node.offsetY;

          // var s = "Propagating offset from parent node : " + node.id +
          //   ". OffsetX: " + offX + ". OffsetY: " + offY;
          // s += "\n Children: " + children.toString();
          // logDebug(s);

          for( var i = 0; i < children.length; i++ ){
            var childNode = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ children[ i ] ] ];
            // Propagate offset
            childNode.offsetX += offX;
            childNode.offsetY += offY;
            // Add children to queue to be visited
            queue[ ++end ] = children[ i ];
          }

          // Reset parent offsets
          node.offsetX = 0;
          node.offsetY = 0;
        }

      }
    };

    /**
     * @brief : Updates the layout model positions, based on
     *          the accumulated forces
     */
    var updatePositions = function( layoutInfo, options ){
      // var s = 'Updating positions';
      // logDebug(s);

      // Reset boundaries for compound nodes
      for( var i = 0; i < layoutInfo.nodeSize; i++ ){
        var n = layoutInfo.layoutNodes[ i ];
        if( 0 < n.children.length ){
          // logDebug("Resetting boundaries of compound node: " + n.id);
          n.maxX = undefined;
          n.minX = undefined;
          n.maxY = undefined;
          n.minY = undefined;
        }
      }

      for( var i = 0; i < layoutInfo.nodeSize; i++ ){
        var n = layoutInfo.layoutNodes[ i ];
        if( 0 < n.children.length || n.isLocked ){
          // No need to set compound or locked node position
          // logDebug("Skipping position update of node: " + n.id);
          continue;
        }
        // s = "Node: " + n.id + " Previous position: (" +
        // n.positionX + ", " + n.positionY + ").";

        // Limit displacement in order to improve stability
        var tempForce = limitForce( n.offsetX, n.offsetY, layoutInfo.temperature );
        n.positionX += tempForce.x;
        n.positionY += tempForce.y;
        n.offsetX = 0;
        n.offsetY = 0;
        n.minX    = n.positionX - n.width;
        n.maxX    = n.positionX + n.width;
        n.minY    = n.positionY - n.height;
        n.maxY    = n.positionY + n.height;
        // s += " New Position: (" + n.positionX + ", " + n.positionY + ").";
        // logDebug(s);

        // Update ancestry boudaries
        updateAncestryBoundaries( n, layoutInfo );
      }

      // Update size, position of compund nodes
      for( var i = 0; i < layoutInfo.nodeSize; i++ ){
        var n = layoutInfo.layoutNodes[ i ];
        if( 0 < n.children.length && !n.isLocked ){
          n.positionX = (n.maxX + n.minX) / 2;
          n.positionY = (n.maxY + n.minY) / 2;
          n.width     = n.maxX - n.minX;
          n.height    = n.maxY - n.minY;
          // s = "Updating position, size of compound node " + n.id;
          // s += "\nPositionX: " + n.positionX + ", PositionY: " + n.positionY;
          // s += "\nWidth: " + n.width + ", Height: " + n.height;
          // logDebug(s);
        }
      }
    };

    /**
     * @brief : Limits a force (forceX, forceY) to be not
     *          greater (in modulo) than max.
     8          Preserves force direction.
     */
    var limitForce = function( forceX, forceY, max ){
      // var s = "Limiting force: (" + forceX + ", " + forceY + "). Max: " + max;
      var force = Math.sqrt( forceX * forceX + forceY * forceY );

      if( force > max ){
        var res = {
          x: max * forceX / force,
          y: max * forceY / force
        };

      } else {
        var res = {
          x: forceX,
          y: forceY
        };
      }

      // s += ".\nResult: (" + res.x + ", " + res.y + ")";
      // logDebug(s);

      return res;
    };

    /**
     * @brief : Function used for keeping track of compound node
     *          sizes, since they should bound all their subnodes.
     */
    var updateAncestryBoundaries = function( node, layoutInfo ){
      // var s = "Propagating new position/size of node " + node.id;
      var parentId = node.parentId;
      if( null == parentId ){
        // If there's no parent, we are done
        // s += ". No parent node.";
        // logDebug(s);
        return;
      }

      // Get Parent Node
      var p = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ parentId ] ];
      var flag = false;

      // MaxX
      if( null == p.maxX || node.maxX + p.padRight > p.maxX ){
        p.maxX = node.maxX + p.padRight;
        flag = true;
        // s += "\nNew maxX for parent node " + p.id + ": " + p.maxX;
      }

      // MinX
      if( null == p.minX || node.minX - p.padLeft < p.minX ){
        p.minX = node.minX - p.padLeft;
        flag = true;
        // s += "\nNew minX for parent node " + p.id + ": " + p.minX;
      }

      // MaxY
      if( null == p.maxY || node.maxY + p.padBottom > p.maxY ){
        p.maxY = node.maxY + p.padBottom;
        flag = true;
        // s += "\nNew maxY for parent node " + p.id + ": " + p.maxY;
      }

      // MinY
      if( null == p.minY || node.minY - p.padTop < p.minY ){
        p.minY = node.minY - p.padTop;
        flag = true;
        // s += "\nNew minY for parent node " + p.id + ": " + p.minY;
      }

      // If updated boundaries, propagate changes upward
      if( flag ){
        // logDebug(s);
        return updateAncestryBoundaries( p, layoutInfo );
      }

      // s += ". No changes in boundaries/position of parent node " + p.id;
      // logDebug(s);
      return;
    };

    var separateComponents = function( layutInfo, options ){
      var nodes = layoutInfo.layoutNodes;
      var components = [];

      for( var i = 0; i < nodes.length; i++ ){
        var node = nodes[ i ];
        var cid = node.cmptId;
        var component = components[ cid ] = components[ cid ] || [];

        component.push( node );
      }

      var totalA = 0;

      for( var i = 0; i < components.length; i++ ){
        var c = components[ i ];

        if( !c ){ continue; }

        c.x1 = Infinity;
        c.x2 = -Infinity;
        c.y1 = Infinity;
        c.y2 = -Infinity;

        for( var j = 0; j < c.length; j++ ){
          var n = c[ j ];

          c.x1 = Math.min( c.x1, n.positionX - n.width / 2 );
          c.x2 = Math.max( c.x2, n.positionX + n.width / 2 );
          c.y1 = Math.min( c.y1, n.positionY - n.height / 2 );
          c.y2 = Math.max( c.y2, n.positionY + n.height / 2 );
        }

        c.w = c.x2 - c.x1;
        c.h = c.y2 - c.y1;

        totalA += c.w * c.h;
      }

      components.sort( function( c1, c2 ){
        return c2.w * c2.h - c1.w * c1.h;
      } );

      var x = 0;
      var y = 0;
      var usedW = 0;
      var rowH = 0;
      var maxRowW = Math.sqrt( totalA ) * layoutInfo.clientWidth / layoutInfo.clientHeight;

      for( var i = 0; i < components.length; i++ ){
        var c = components[ i ];

        if( !c ){ continue; }

        for( var j = 0; j < c.length; j++ ){
          var n = c[ j ];

          if( !n.isLocked ){
            n.positionX += x;
            n.positionY += y;
          }
        }

        x += c.w + options.componentSpacing;
        usedW += c.w + options.componentSpacing;
        rowH = Math.max( rowH, c.h );

        if( usedW > maxRowW ){
          y += rowH + options.componentSpacing;
          x = 0;
          usedW = 0;
          rowH = 0;
        }
      }
    };

    var mainLoop = function( i ){
      if( stopped ){
        // logDebug("Layout manually stopped. Stopping computation in step " + i);
        return false;
      }

      // Do one step in the phisical simulation
      step( layoutInfo, options, i );

      // Update temperature
      layoutInfo.temperature = layoutInfo.temperature * options.coolingFactor;
      // logDebug("New temperature: " + layoutInfo.temperature);

      if( layoutInfo.temperature < options.minTemp ){
        // logDebug("Temperature drop below minimum threshold. Stopping computation in step " + i);
        return false;
      }

      return true;
    };

    var i = 0;
    var loopRet;

    do {
      var f = 0;

      while( f < options.refresh && i < options.numIter ){
        var loopRet = mainLoop( i );
        if( !loopRet ){ break; }

        f++;
        i++;
      }

      if( options.animate ){
        broadcast( layoutInfo.layoutNodes ); // eslint-disable-line no-undef
      }

    } while( loopRet && i + 1 < options.numIter );

    separateComponents( layoutInfo, options );

    return layoutInfo;
  } ).then( function( layoutInfoUpdated ){
    layoutInfo.layoutNodes = layoutInfoUpdated.layoutNodes; // get the positions

    thread.stop();
    done();
  } );

  var done = function(){
    refresh({
      force: true,
      next: function(){
        // Layout has finished
        layout.one('layoutstop', options.stop);
        layout.trigger({ type: 'layoutstop', layout: layout });
      }
    });
  };

  return this; // chaining
};


/**
 * @brief : called on continuous layouts to stop them before they finish
 */
CoseLayout.prototype.stop = function(){
  this.stopped = true;

  if( this.thread ){
    this.thread.stop();
  }

  this.trigger( 'layoutstop' );

  return this; // chaining
};

CoseLayout.prototype.destroy = function(){
  if( this.thread ){
    this.thread.stop();
  }

  return this; // chaining
};


/**
 * @brief     : Creates an object which is contains all the data
 *              used in the layout process
 * @arg cy    : cytoscape.js object
 * @return    : layoutInfo object initialized
 */
var createLayoutInfo = function( cy, layout, options ){
  // Shortcut
  var edges = options.eles.edges();
  var nodes = options.eles.nodes();

  var layoutInfo   = {
    isCompound: cy.hasCompoundNodes(),
    layoutNodes: [],
    idToIndex: {},
    nodeSize: nodes.size(),
    graphSet: [],
    indexToGraph: [],
    layoutEdges: [],
    edgeSize: edges.size(),
    temperature: options.initialTemp,
    clientWidth: cy.width(),
    clientHeight: cy.width(),
    boundingBox: math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
                     x1: 0, y1: 0, w: cy.width(), h: cy.height()
                   } )
  };

  var components = options.eles.components();
  var id2cmptId = {};

  for( var i = 0; i < components.length; i++ ){
    var component = components[ i ];

    for( var j = 0; j < component.length; j++ ){
      var node = component[ j ];

      id2cmptId[ node.id() ] = i;
    }
  }

  // Iterate over all nodes, creating layout nodes
  for( var i = 0; i < layoutInfo.nodeSize; i++ ){
    var n = nodes[ i ];
    var nbb = n.boundingBox();

    var tempNode        = {};
    tempNode.isLocked   = n.locked();
    tempNode.id         = n.data( 'id' );
    tempNode.parentId   = n.data( 'parent' );
    tempNode.cmptId     = id2cmptId[ n.id() ];
    tempNode.children   = [];
    tempNode.positionX  = n.position( 'x' );
    tempNode.positionY  = n.position( 'y' );
    tempNode.offsetX    = 0;
    tempNode.offsetY    = 0;
    tempNode.height     = nbb.w;
    tempNode.width      = nbb.h;
    tempNode.maxX       = tempNode.positionX + tempNode.width  / 2;
    tempNode.minX       = tempNode.positionX - tempNode.width  / 2;
    tempNode.maxY       = tempNode.positionY + tempNode.height / 2;
    tempNode.minY       = tempNode.positionY - tempNode.height / 2;
    tempNode.padLeft    = parseFloat( n.style( 'padding' ) );
    tempNode.padRight   = parseFloat( n.style( 'padding' ) );
    tempNode.padTop     = parseFloat( n.style( 'padding' ) );
    tempNode.padBottom  = parseFloat( n.style( 'padding' ) );

    // forces
    tempNode.nodeRepulsion = is.fn( options.nodeRepulsion ) ? options.nodeRepulsion.call( n, n ) : options.nodeRepulsion;

    // Add new node
    layoutInfo.layoutNodes.push( tempNode );
    // Add entry to id-index map
    layoutInfo.idToIndex[ tempNode.id ] = i;
  }

  // Inline implementation of a queue, used for traversing the graph in BFS order
  var queue = [];
  var start = 0;   // Points to the start the queue
  var end   = -1;  // Points to the end of the queue

  var tempGraph = [];

  // Second pass to add child information and
  // initialize queue for hierarchical traversal
  for( var i = 0; i < layoutInfo.nodeSize; i++ ){
    var n = layoutInfo.layoutNodes[ i ];
    var p_id = n.parentId;
    // Check if node n has a parent node
    if( null != p_id ){
      // Add node Id to parent's list of children
      layoutInfo.layoutNodes[ layoutInfo.idToIndex[ p_id ] ].children.push( n.id );
    } else {
      // If a node doesn't have a parent, then it's in the root graph
      queue[ ++end ] = n.id;
      tempGraph.push( n.id );
    }
  }

  // Add root graph to graphSet
  layoutInfo.graphSet.push( tempGraph );

  // Traverse the graph, level by level,
  while( start <= end ){
    // Get the node to visit and remove it from queue
    var node_id  = queue[ start++ ];
    var node_ix  = layoutInfo.idToIndex[ node_id ];
    var node     = layoutInfo.layoutNodes[ node_ix ];
    var children = node.children;
    if( children.length > 0 ){
      // Add children nodes as a new graph to graph set
      layoutInfo.graphSet.push( children );
      // Add children to que queue to be visited
      for( var i = 0; i < children.length; i++ ){
        queue[ ++end ] = children[ i ];
      }
    }
  }

  // Create indexToGraph map
  for( var i = 0; i < layoutInfo.graphSet.length; i++ ){
    var graph = layoutInfo.graphSet[ i ];
    for( var j = 0; j < graph.length; j++ ){
      var index = layoutInfo.idToIndex[ graph[ j ] ];
      layoutInfo.indexToGraph[ index ] = i;
    }
  }

  // Iterate over all edges, creating Layout Edges
  for( var i = 0; i < layoutInfo.edgeSize; i++ ){
    var e = edges[ i ];
    var tempEdge = {};
    tempEdge.id       = e.data( 'id' );
    tempEdge.sourceId = e.data( 'source' );
    tempEdge.targetId = e.data( 'target' );

    // Compute ideal length
    var idealLength = is.fn( options.idealEdgeLength ) ? options.idealEdgeLength.call( e, e ) : options.idealEdgeLength;
    var elasticity = is.fn( options.edgeElasticity ) ? options.edgeElasticity.call( e, e ) : options.edgeElasticity;

    // Check if it's an inter graph edge
    var sourceIx    = layoutInfo.idToIndex[ tempEdge.sourceId ];
    var targetIx    = layoutInfo.idToIndex[ tempEdge.targetId ];
    var sourceGraph = layoutInfo.indexToGraph[ sourceIx ];
    var targetGraph = layoutInfo.indexToGraph[ targetIx ];

    if( sourceGraph != targetGraph ){
      // Find lowest common graph ancestor
      var lca = findLCA( tempEdge.sourceId, tempEdge.targetId, layoutInfo );

      // Compute sum of node depths, relative to lca graph
      var lcaGraph = layoutInfo.graphSet[ lca ];
      var depth    = 0;

      // Source depth
      var tempNode = layoutInfo.layoutNodes[ sourceIx ];
      while( -1 === lcaGraph.indexOf( tempNode.id ) ){
        tempNode = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ tempNode.parentId ] ];
        depth++;
      }

      // Target depth
      tempNode = layoutInfo.layoutNodes[ targetIx ];
      while( -1 === lcaGraph.indexOf( tempNode.id ) ){
        tempNode = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ tempNode.parentId ] ];
        depth++;
      }

      // logDebug('LCA of nodes ' + tempEdge.sourceId + ' and ' + tempEdge.targetId +
      //  ". Index: " + lca + " Contents: " + lcaGraph.toString() +
      //  ". Depth: " + depth);

      // Update idealLength
      idealLength *= depth * options.nestingFactor;
    }

    tempEdge.idealLength = idealLength;
    tempEdge.elasticity = elasticity;

    layoutInfo.layoutEdges.push( tempEdge );
  }

  // Finally, return layoutInfo object
  return layoutInfo;
};


/**
 * @brief : This function finds the index of the lowest common
 *          graph ancestor between 2 nodes in the subtree
 *          (from the graph hierarchy induced tree) whose
 *          root is graphIx
 *
 * @arg node1: node1's ID
 * @arg node2: node2's ID
 * @arg layoutInfo: layoutInfo object
 *
 */
var findLCA = function( node1, node2, layoutInfo ){
  // Find their common ancester, starting from the root graph
  var res = findLCA_aux( node1, node2, 0, layoutInfo );
  if( 2 > res.count ){
    // If aux function couldn't find the common ancester,
    // then it is the root graph
    return 0;
  } else {
    return res.graph;
  }
};


/**
 * @brief          : Auxiliary function used for LCA computation
 *
 * @arg node1      : node1's ID
 * @arg node2      : node2's ID
 * @arg graphIx    : subgraph index
 * @arg layoutInfo : layoutInfo object
 *
 * @return         : object of the form {count: X, graph: Y}, where:
 *                   X is the number of ancesters (max: 2) found in
 *                   graphIx (and it's subgraphs),
 *                   Y is the graph index of the lowest graph containing
 *                   all X nodes
 */
var findLCA_aux = function( node1, node2, graphIx, layoutInfo ){
  var graph = layoutInfo.graphSet[ graphIx ];
  // If both nodes belongs to graphIx
  if( -1 < graph.indexOf( node1 ) && -1 < graph.indexOf( node2 ) ){
    return {count: 2, graph: graphIx};
  }

  // Make recursive calls for all subgraphs
  var c = 0;
  for( var i = 0; i < graph.length; i++ ){
    var nodeId   = graph[ i ];
    var nodeIx   = layoutInfo.idToIndex[ nodeId ];
    var children = layoutInfo.layoutNodes[ nodeIx ].children;

    // If the node has no child, skip it
    if( 0 === children.length ){
      continue;
    }

    var childGraphIx = layoutInfo.indexToGraph[ layoutInfo.idToIndex[ children[0] ] ];
    var result = findLCA_aux( node1, node2, childGraphIx, layoutInfo );
    if( 0 === result.count ){
      // Neither node1 nor node2 are present in this subgraph
      continue;
    } else if( 1 === result.count ){
      // One of (node1, node2) is present in this subgraph
      c++;
      if( 2 === c ){
        // We've already found both nodes, no need to keep searching
        break;
      }
    } else {
      // Both nodes are present in this subgraph
      return result;
    }
  }

  return {count: c, graph: graphIx};
};


/**
 * @brief: printsLayoutInfo into js console
 *         Only used for debbuging
 */
var printLayoutInfo = function( layoutInfo ){
  /* eslint-disable */

  if( !DEBUG ){
    return;
  }
  console.debug( 'layoutNodes:' );
  for( var i = 0; i < layoutInfo.nodeSize; i++ ){
    var n = layoutInfo.layoutNodes[ i ];
    var s =
    '\nindex: '     + i +
    '\nId: '        + n.id +
    '\nChildren: '  + n.children.toString() +
    '\nparentId: '  + n.parentId  +
    '\npositionX: ' + n.positionX +
    '\npositionY: ' + n.positionY +
    '\nOffsetX: ' + n.offsetX +
    '\nOffsetY: ' + n.offsetY +
    '\npadLeft: ' + n.padLeft +
    '\npadRight: ' + n.padRight +
    '\npadTop: ' + n.padTop +
    '\npadBottom: ' + n.padBottom;

    console.debug( s );
  }

  console.debug( 'idToIndex' );
  for( var i in layoutInfo.idToIndex ){
    console.debug( 'Id: ' + i + '\nIndex: ' + layoutInfo.idToIndex[ i ] );
  }

  console.debug( 'Graph Set' );
  var set = layoutInfo.graphSet;
  for( var i = 0; i < set.length; i ++ ){
    console.debug( 'Set : ' + i + ': ' + set[ i ].toString() );
  }

  var s = 'IndexToGraph';
  for( var i = 0; i < layoutInfo.indexToGraph.length; i ++ ){
    s += '\nIndex : ' + i + ' Graph: ' + layoutInfo.indexToGraph[ i ];
  }
  console.debug( s );

  s = 'Layout Edges';
  for( var i = 0; i < layoutInfo.layoutEdges.length; i++ ){
    var e = layoutInfo.layoutEdges[ i ];
    s += '\nEdge Index: ' + i + ' ID: ' + e.id +
    ' SouceID: ' + e.sourceId + ' TargetId: ' + e.targetId +
    ' Ideal Length: ' + e.idealLength;
  }
  console.debug( s );

  s =  'nodeSize: ' + layoutInfo.nodeSize;
  s += '\nedgeSize: ' + layoutInfo.edgeSize;
  s += '\ntemperature: ' + layoutInfo.temperature;
  console.debug( s );

  return;
  /* eslint-enable */
};


/**
 * @brief : Randomizes the position of all nodes
 */
var randomizePositions = function( layoutInfo, cy ){
  var width     = layoutInfo.clientWidth;
  var height    = layoutInfo.clientHeight;

  for( var i = 0; i < layoutInfo.nodeSize; i++ ){
    var n = layoutInfo.layoutNodes[ i ];

    // No need to randomize compound nodes or locked nodes
    if( 0 === n.children.length && !n.isLocked ){
      n.positionX = Math.random() * width;
      n.positionY = Math.random() * height;
    }
  }
};


/**
 * @brief          : Updates the positions of nodes in the network
 * @arg layoutInfo : LayoutInfo object
 * @arg cy         : Cytoscape object
 * @arg options    : Layout options
 */
var refreshPositions = function( layoutInfo, cy, options ){
  // var s = 'Refreshing positions';
  // logDebug(s);

  var layout = options.layout;
  var nodes = options.eles.nodes();
  var bb = layoutInfo.boundingBox;
  var coseBB = { x1: Infinity, x2: -Infinity, y1: Infinity, y2: -Infinity };

  if( options.boundingBox ){
    nodes.forEach( function( node ){
      var lnode = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ node.data( 'id' ) ] ];

      coseBB.x1 = Math.min( coseBB.x1, lnode.positionX );
      coseBB.x2 = Math.max( coseBB.x2, lnode.positionX );

      coseBB.y1 = Math.min( coseBB.y1, lnode.positionY );
      coseBB.y2 = Math.max( coseBB.y2, lnode.positionY );
    } );

    coseBB.w = coseBB.x2 - coseBB.x1;
    coseBB.h = coseBB.y2 - coseBB.y1;
  }

  nodes.positions( function( i, ele ){
    var lnode = layoutInfo.layoutNodes[ layoutInfo.idToIndex[ ele.data( 'id' ) ] ];
    // s = "Node: " + lnode.id + ". Refreshed position: (" +
    // lnode.positionX + ", " + lnode.positionY + ").";
    // logDebug(s);

    if( options.boundingBox ){ // then add extra bounding box constraint
      var pctX = (lnode.positionX - coseBB.x1) / coseBB.w;
      var pctY = (lnode.positionY - coseBB.y1) / coseBB.h;

      return {
        x: bb.x1 + pctX * bb.w,
        y: bb.y1 + pctY * bb.h
      };
    } else {
      return {
        x: lnode.positionX,
        y: lnode.positionY
      };
    }
  } );

  // Trigger layoutReady only on first call
  if( true !== layoutInfo.ready ){
    // s = 'Triggering layoutready';
    // logDebug(s);
    layoutInfo.ready = true;
    layout.one( 'layoutready', options.ready );
    layout.trigger( { type: 'layoutready', layout: this } );
  }
};

/**
 * @brief : Logs a debug message in JS console, if DEBUG is ON
 */
// var logDebug = function(text) {
//   if (DEBUG) {
//     console.debug(text);
//   }
// };

module.exports = CoseLayout;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );

var defaults = {
  fit: true, // whether to fit the viewport to the graph
  padding: 30, // padding used on fit
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
  condense: false, // uses all available space on false, uses minimal space on true
  rows: undefined, // force num of rows in the grid
  cols: undefined, // force num of columns in the grid
  position: function( node ){}, // returns { row, col } for element
  sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function GridLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

GridLayout.prototype.run = function(){
  var params = this.options;
  var options = params;

  var cy = params.cy;
  var eles = options.eles;
  var nodes = eles.nodes().not( ':parent' );

  if( options.sort ){
    nodes = nodes.sort( options.sort );
  }

  var bb = math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
    x1: 0, y1: 0, w: cy.width(), h: cy.height()
  } );

  if( bb.h === 0 || bb.w === 0 ){
    nodes.layoutPositions( this, options, function(){
      return { x: bb.x1, y: bb.y1 };
    } );

  } else {

    // width/height * splits^2 = cells where splits is number of times to split width
    var cells = nodes.size();
    var splits = Math.sqrt( cells * bb.h / bb.w );
    var rows = Math.round( splits );
    var cols = Math.round( bb.w / bb.h * splits );

    var small = function( val ){
      if( val == null ){
        return Math.min( rows, cols );
      } else {
        var min = Math.min( rows, cols );
        if( min == rows ){
          rows = val;
        } else {
          cols = val;
        }
      }
    };

    var large = function( val ){
      if( val == null ){
        return Math.max( rows, cols );
      } else {
        var max = Math.max( rows, cols );
        if( max == rows ){
          rows = val;
        } else {
          cols = val;
        }
      }
    };

    var oRows = options.rows;
    var oCols = options.cols != null ? options.cols : options.columns;

    // if rows or columns were set in options, use those values
    if( oRows != null && oCols != null ){
      rows = oRows;
      cols = oCols;
    } else if( oRows != null && oCols == null ){
      rows = oRows;
      cols = Math.ceil( cells / rows );
    } else if( oRows == null && oCols != null ){
      cols = oCols;
      rows = Math.ceil( cells / cols );
    }

    // otherwise use the automatic values and adjust accordingly

    // if rounding was up, see if we can reduce rows or columns
    else if( cols * rows > cells ){
      var sm = small();
      var lg = large();

      // reducing the small side takes away the most cells, so try it first
      if( (sm - 1) * lg >= cells ){
        small( sm - 1 );
      } else if( (lg - 1) * sm >= cells ){
        large( lg - 1 );
      }
    } else {

      // if rounding was too low, add rows or columns
      while( cols * rows < cells ){
        var sm = small();
        var lg = large();

        // try to add to larger side first (adds less in multiplication)
        if( (lg + 1) * sm >= cells ){
          large( lg + 1 );
        } else {
          small( sm + 1 );
        }
      }
    }

    var cellWidth = bb.w / cols;
    var cellHeight = bb.h / rows;

    if( options.condense ){
      cellWidth = 0;
      cellHeight = 0;
    }

    if( options.avoidOverlap ){
      for( var i = 0; i < nodes.length; i++ ){
        var node = nodes[ i ];
        var pos = node._private.position;

        if( pos.x == null || pos.y == null ){ // for bb
          pos.x = 0;
          pos.y = 0;
        }

        var nbb = node.boundingBox();
        var p = options.avoidOverlapPadding;

        var w = nbb.w + p;
        var h = nbb.h + p;

        cellWidth = Math.max( cellWidth, w );
        cellHeight = Math.max( cellHeight, h );
      }
    }

    var cellUsed = {}; // e.g. 'c-0-2' => true

    var used = function( row, col ){
      return cellUsed[ 'c-' + row + '-' + col ] ? true : false;
    };

    var use = function( row, col ){
      cellUsed[ 'c-' + row + '-' + col ] = true;
    };

    // to keep track of current cell position
    var row = 0;
    var col = 0;
    var moveToNextCell = function(){
      col++;
      if( col >= cols ){
        col = 0;
        row++;
      }
    };

    // get a cache of all the manual positions
    var id2manPos = {};
    for( var i = 0; i < nodes.length; i++ ){
      var node = nodes[ i ];
      var rcPos = options.position( node );

      if( rcPos && (rcPos.row !== undefined || rcPos.col !== undefined) ){ // must have at least row or col def'd
        var pos = {
          row: rcPos.row,
          col: rcPos.col
        };

        if( pos.col === undefined ){ // find unused col
          pos.col = 0;

          while( used( pos.row, pos.col ) ){
            pos.col++;
          }
        } else if( pos.row === undefined ){ // find unused row
          pos.row = 0;

          while( used( pos.row, pos.col ) ){
            pos.row++;
          }
        }

        id2manPos[ node.id() ] = pos;
        use( pos.row, pos.col );
      }
    }

    var getPos = function( i, element ){
      var x, y;

      if( element.locked() || element.isParent() ){
        return false;
      }

      // see if we have a manual position set
      var rcPos = id2manPos[ element.id() ];
      if( rcPos ){
        x = rcPos.col * cellWidth + cellWidth / 2 + bb.x1;
        y = rcPos.row * cellHeight + cellHeight / 2 + bb.y1;

      } else { // otherwise set automatically

        while( used( row, col ) ){
          moveToNextCell();
        }

        x = col * cellWidth + cellWidth / 2 + bb.x1;
        y = row * cellHeight + cellHeight / 2 + bb.y1;
        use( row, col );

        moveToNextCell();
      }

      return { x: x, y: y };

    };

    nodes.layoutPositions( this, options, getPos );
  }

  return this; // chaining

};

module.exports = GridLayout;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  { name: 'breadthfirst', impl: __webpack_require__( 76 ) },
  { name: 'circle', impl: __webpack_require__( 77 ) },
  { name: 'concentric',impl: __webpack_require__( 78 ) },
  { name: 'cose', impl: __webpack_require__( 79 ) },
  { name: 'grid', impl: __webpack_require__( 80 ) },
  { name: 'null', impl: __webpack_require__( 82 ) },
  { name: 'preset', impl: __webpack_require__( 83 ) },
  { name: 'random', impl: __webpack_require__( 84 ) }
];


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

// default layout options
var defaults = {
  ready: function(){}, // on layoutready
  stop: function(){} // on layoutstop
};

// constructor
// options : object containing layout options
function NullLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

// runs the layout
NullLayout.prototype.run = function(){
  var options = this.options;
  var eles = options.eles; // elements to consider in the layout
  var layout = this;

  // cy is automatically populated for us in the constructor
  var cy = options.cy; // jshint ignore:line

  layout.trigger( 'layoutstart' );

  // puts all nodes at (0, 0)
  eles.nodes().positions( function(){
    return {
      x: 0,
      y: 0
    };
  } );

  // trigger layoutready when each node has had its position set at least once
  layout.one( 'layoutready', options.ready );
  layout.trigger( 'layoutready' );

  // trigger layoutstop when the layout stops (e.g. finishes)
  layout.one( 'layoutstop', options.stop );
  layout.trigger( 'layoutstop' );

  return this; // chaining
};

// called on continuous layouts to stop them before they finish
NullLayout.prototype.stop = function(){
  return this; // chaining
};

module.exports = NullLayout;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var defaults = {
  positions: undefined, // map of (node id) => (position obj); or function(node){ return somPos; }
  zoom: undefined, // the zoom level to set (prob want fit = false if set)
  pan: undefined, // the pan level to set (prob want fit = false if set)
  fit: true, // whether to fit to viewport
  padding: 30, // padding on fit
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function PresetLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

PresetLayout.prototype.run = function(){
  var options = this.options;
  var eles = options.eles;

  var nodes = eles.nodes();
  var posIsFn = is.fn( options.positions );

  function getPosition( node ){
    if( options.positions == null ){
      return null;
    }

    if( posIsFn ){
      return options.positions.apply( node, [ node ] );
    }

    var pos = options.positions[ node._private.data.id ];

    if( pos == null ){
      return null;
    }

    return pos;
  }

  nodes.layoutPositions( this, options, function( i, node ){
    var position = getPosition( node );

    if( node.locked() || position == null ){
      return false;
    }

    return position;
  } );

  return this; // chaining
};

module.exports = PresetLayout;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );

var defaults = {
  fit: true, // whether to fit to viewport
  padding: 30, // fit padding
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  animate: false, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled
  ready: undefined, // callback on layoutready
  stop: undefined // callback on layoutstop
};

function RandomLayout( options ){
  this.options = util.extend( {}, defaults, options );
}

RandomLayout.prototype.run = function(){
  var options = this.options;
  var cy = options.cy;
  var eles = options.eles;
  var nodes = eles.nodes().not( ':parent' );

  var bb = math.makeBoundingBox( options.boundingBox ? options.boundingBox : {
    x1: 0, y1: 0, w: cy.width(), h: cy.height()
  } );

  var getPos = function( i, node ){
    return {
      x: bb.x1 + Math.round( Math.random() * bb.w ),
      y: bb.y1 + Math.round( Math.random() * bb.h )
    };
  };

  nodes.layoutPositions( this, options, getPos );

  return this; // chaining
};

module.exports = RandomLayout;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );
var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var BRp = {};

BRp.arrowShapeWidth = 0.3;

BRp.registerArrowShapes = function(){
  var arrowShapes = this.arrowShapes = {};
  var renderer = this;

  // Contract for arrow shapes:
  // 0, 0 is arrow tip
  // (0, 1) is direction towards node
  // (1, 0) is right
  //
  // functional api:
  // collide: check x, y in shape
  // roughCollide: called before collide, no false negatives
  // draw: draw
  // spacing: dist(arrowTip, nodeBoundary)
  // gap: dist(edgeTip, nodeBoundary), edgeTip may != arrowTip

  var bbCollide = function( x, y, size, angle, translation, padding ){
    var x1 = translation.x - size / 2 - padding;
    var x2 = translation.x + size / 2 + padding;
    var y1 = translation.y - size / 2 - padding;
    var y2 = translation.y + size / 2 + padding;

    var inside = (x1 <= x && x <= x2) && (y1 <= y && y <= y2);

    return inside;
  };

  var transform = function( x, y, size, angle, translation ){
    var xRotated = x * Math.cos( angle ) - y * Math.sin( angle );
    var yRotated = x * Math.sin( angle ) + y * Math.cos( angle );

    var xScaled = xRotated * size;
    var yScaled = yRotated * size;

    var xTranslated = xScaled + translation.x;
    var yTranslated = yScaled + translation.y;

    return {
      x: xTranslated,
      y: yTranslated
    };
  };

  var transformPoints = function( pts, size, angle, translation ){
    var retPts = [];

    for( var i = 0; i < pts.length; i += 2 ){
      var x = pts[ i ];
      var y = pts[ i + 1];

      retPts.push( transform( x, y, size, angle, translation ) );
    }

    return retPts;
  };

  var pointsToArr = function( pts ){
    var ret = [];

    for( var i = 0; i < pts.length; i++ ){
      var p = pts[ i ];

      ret.push( p.x, p.y );
    }

    return ret;
  };

  var defineArrowShape = function( name, defn ){
    if( is.string( defn ) ){
      defn = arrowShapes[ defn ];
    }

    arrowShapes[ name ] = util.extend( {
      name: name,

      points: [
        -0.15, -0.3,
        0.15, -0.3,
        0.15, 0.3,
        -0.15, 0.3
      ],

      collide: function( x, y, size, angle, translation, padding ){
        var points = pointsToArr( transformPoints( this.points, size + 2 * padding, angle, translation ) );
        var inside = math.pointInsidePolygonPoints( x, y, points );

        return inside;
      },

      roughCollide: bbCollide,

      draw: function( context, size, angle, translation ){
        var points = transformPoints( this.points, size, angle, translation );

        renderer.arrowShapeImpl( 'polygon' )( context, points );
      },

      spacing: function( edge ){
        return 0;
      },

      gap: function( edge ){
        return edge.pstyle( 'width' ).pfValue * 2;
      }
    }, defn );
  };

  defineArrowShape( 'none', {
    collide: util.falsify,

    roughCollide: util.falsify,

    draw: util.noop,

    spacing: util.zeroify,

    gap: util.zeroify
  } );

  defineArrowShape( 'triangle', {
    points: [
      -0.15, -0.3,
      0, 0,
      0.15, -0.3
    ]
  } );

  defineArrowShape( 'arrow', 'triangle' );

  defineArrowShape( 'triangle-backcurve', {
    points: arrowShapes[ 'triangle' ].points,

    controlPoint: [ 0, -0.15 ],

    roughCollide: bbCollide,

    draw: function( context, size, angle, translation ){
      var ptsTrans = transformPoints( this.points, size, angle, translation );
      var ctrlPt = this.controlPoint;
      var ctrlPtTrans = transform( ctrlPt[0], ctrlPt[1], size, angle, translation );

      renderer.arrowShapeImpl( this.name )( context, ptsTrans, ctrlPtTrans );
    },

    gap: function( edge ){
      return edge.pstyle( 'width' ).pfValue;
    }
  } );


  defineArrowShape( 'triangle-tee', {
    points: [
      -0.15, -0.3,
      0, 0,
      0.15, -0.3,
      -0.15, -0.3
    ],

    pointsTee: [
      -0.15, -0.4,
      -0.15, -0.5,
      0.15, -0.5,
      0.15, -0.4
    ],

    collide: function( x, y, size, angle, translation, padding ){
      var triPts = pointsToArr( transformPoints( this.points, size + 2 * padding, angle, translation ) );
      var teePts = pointsToArr( transformPoints( this.pointsTee, size + 2 * padding, angle, translation ) );

      var inside = math.pointInsidePolygonPoints( x, y, triPts ) || math.pointInsidePolygonPoints( x, y, teePts );

      return inside;
    },

    draw: function( context, size, angle, translation ){
      var triPts = transformPoints( this.points, size, angle, translation );
      var teePts = transformPoints( this.pointsTee, size, angle, translation );

      renderer.arrowShapeImpl( this.name )( context, triPts, teePts );
    }
  } );

  defineArrowShape( 'vee', {
    points: [
      -0.15, -0.3,
      0, 0,
      0.15, -0.3,
      0, -0.15
    ],

    gap: function( edge ){
      return edge.pstyle( 'width' ).pfValue;
    }
  } );

  defineArrowShape( 'circle', {
    radius: 0.15,

    collide: function( x, y, size, angle, translation, padding ){
      var t = translation;
      var inside = ( Math.pow( t.x - x, 2 ) + Math.pow( t.y - y, 2 ) <= Math.pow( (size + 2 * padding) * this.radius, 2 ) );

      return inside;
    },

    draw: function( context, size, angle, translation ){
      renderer.arrowShapeImpl( this.name )( context, translation.x, translation.y, this.radius * size );
    },

    spacing: function( edge ){
      return renderer.getArrowWidth( edge.pstyle( 'width' ).pfValue )
        * this.radius;
    }
  } );

  defineArrowShape( 'inhibitor', {
    points: [
      -0.15, 0,
      -0.15, -0.1,
      0.15, -0.1,
      0.15, 0
    ],

    spacing: function( edge ){
      return 1;
    },

    gap: function( edge ){
      return 1;
    }
  } );

  defineArrowShape( 'tee', 'inhibitor' );

  defineArrowShape( 'square', {
    points: [
      -0.15, 0.00,
      0.15, 0.00,
      0.15, -0.3,
      -0.15, -0.3
    ]
  } );

  defineArrowShape( 'diamond', {
    points: [
      -0.15, -0.15,
      0, -0.3,
      0.15, -0.15,
      0, 0
    ],

    gap: function( edge ){
      return edge.pstyle( 'width' ).pfValue;
    }
  } );

};

module.exports = BRp;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );
var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var zIndexSort = __webpack_require__( 19 );
var window = __webpack_require__( 4 );

var BRp = {};

BRp.registerCalculationListeners = function(){
  var cy = this.cy;
  var elesToUpdate = cy.collection();
  var r = this;

  var enqueue = function( eles, e ){
    elesToUpdate.merge( eles );

    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[i];
      var _p = ele._private;
      var rstyle = _p.rstyle;

      rstyle.clean = false;
      _p.bbCache = null;

      var evts = rstyle.dirtyEvents = rstyle.dirtyEvents || { length: 0 };

      if( !evts[ e.type ] ){
        evts[ e.type ] = true;
        evts.length++;
//
        // elesToUpdate.merge( ele );
      }
    }
  };

  r.binder( cy )
    // nodes

    .on('position.* style.* free.*', 'node', function onDirtyModNode( e ){
      var node = e.cyTarget;

      enqueue( node, e );
      enqueue( node.connectedEdges(), e );

      if( cy.hasCompoundNodes() ){
        var parents = node.parents();

        enqueue( parents, e );
        enqueue( parents.connectedEdges(), e );
      }
    })

    .on('add.* background.*', 'node', function onDirtyAddNode( e ){
      var ele = e.cyTarget;

      enqueue( ele, e );
    })

    // edges

    .on('add.* style.*', 'edge', function onDirtyEdge( e ){
      var edge = e.cyTarget;

      enqueue( edge, e );
      enqueue( edge.parallelEdges(), e );
    })

    .on('remove.*', 'edge', function onDirtyRemoveEdge( e ){
      var edge = e.cyTarget;
      var pEdges = edge.parallelEdges();

      for( var i = 0; i < pEdges.length; i++ ){
        var pEdge = pEdges[i];

        if( !pEdge.removed() ){
          enqueue( pEdge, e );
        }
      }
    })
  ;

  var updateEleCalcs = function( willDraw ){
    if( willDraw ){
      var fns = r.onUpdateEleCalcsFns;

      if( fns ){ for( var i = 0; i < fns.length; i++ ){
        var fn = fns[i];

        fn( willDraw, elesToUpdate );
      } }

      r.recalculateRenderedStyle( elesToUpdate, false );

      for( var i = 0; i < elesToUpdate.length; i++ ){
        elesToUpdate[i]._private.rstyle.dirtyEvents = null;
      }

      elesToUpdate = cy.collection();
    }
  };

  r.beforeRender( updateEleCalcs, r.beforeRenderPriorities.eleCalcs );
};

BRp.onUpdateEleCalcs = function( fn ){
  var fns = this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || [];

  fns.push( fn );
};

BRp.recalculateRenderedStyle = function( eles, useCache ){
  var edges = [];
  var nodes = [];

  // the renderer can't be used for calcs when destroyed, e.g. ele.boundingBox()
  if( this.destroyed ){ return; }

  // use cache by default for perf
  if( useCache === undefined ){ useCache = true; }

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[ i ];
    var _p = ele._private;
    var rstyle = _p.rstyle;

    // only update if dirty and in graph
    if( (useCache && rstyle.clean) || ele.removed() ){ continue; }

    if( _p.group === 'nodes' ){
      nodes.push( ele );
    } else { // edges
      edges.push( ele );
    }

    rstyle.clean = true;
    // rstyle.dirtyEvents = null;
  }

  // update node data from projections
  for( var i = 0; i < nodes.length; i++ ){
    var ele = nodes[i];
    var _p = ele._private;
    var rstyle = _p.rstyle;
    var pos = _p.position;

    this.recalculateNodeLabelProjection( ele );

    rstyle.nodeX = pos.x;
    rstyle.nodeY = pos.y;
    rstyle.nodeW = ele.pstyle( 'width' ).pfValue;
    rstyle.nodeH = ele.pstyle( 'height' ).pfValue;
  }

  this.recalculateEdgeProjections( edges );

  // update edge data from projections
  for( var i = 0; i < edges.length; i++ ){
    var ele = edges[ i ];
    var _p = ele._private;
    var rstyle = _p.rstyle;
    var rs = _p.rscratch;

    this.recalculateEdgeLabelProjections( ele );

    // update rstyle positions
    rstyle.srcX = rs.arrowStartX;
    rstyle.srcY = rs.arrowStartY;
    rstyle.tgtX = rs.arrowEndX;
    rstyle.tgtY = rs.arrowEndY;
    rstyle.midX = rs.midX;
    rstyle.midY = rs.midY;
    rstyle.labelAngle = rs.labelAngle;
    rstyle.sourceLabelAngle = rs.sourceLabelAngle;
    rstyle.targetLabelAngle = rs.targetLabelAngle;
  }
};

// Project mouse
BRp.projectIntoViewport = function( clientX, clientY ){
  var cy = this.cy;
  var offsets = this.findContainerClientCoords();
  var offsetLeft = offsets[0];
  var offsetTop = offsets[1];
  var pan = cy.pan();
  var zoom = cy.zoom();

  var x = ( clientX - offsetLeft - pan.x ) / zoom;
  var y = ( clientY - offsetTop - pan.y ) / zoom;

  return [ x, y ];
};

BRp.findContainerClientCoords = function(){
  if( this.containerBB ){
    return this.containerBB;
  }

  var container = this.container;
  var rect = container.getBoundingClientRect();
  var style = window.getComputedStyle( container );
  var styleValue = function( name ){ return parseFloat( style.getPropertyValue( name ) ); };
  var extra = {
    left: styleValue('padding-left') + styleValue('border-left-width'),
    right: styleValue('padding-right') + styleValue('border-right-width'),
    top: styleValue('padding-top') + styleValue('border-top-width'),
    bottom: styleValue('padding-bottom') + styleValue('border-bottom-width')
  };

  return ( this.containerBB = [ // x, y, w, h
    rect.left + extra.left,
    rect.top + extra.top,
    rect.right - rect.left - extra.left - extra.right,
    rect.bottom - rect.top - extra.top - extra.bottom
  ] );
};

BRp.invalidateContainerClientCoordsCache = function(){
  this.containerBB = null;
};

BRp.findNearestElement = function( x, y, visibleElementsOnly, isTouch ){
  return this.findNearestElements( x, y, visibleElementsOnly, isTouch )[0];
};

BRp.findNearestElements = function( x, y, visibleElementsOnly, isTouch ){
  var self = this;
  var r = this;
  var eles = r.getCachedZSortedEles();
  var near = []; // 1 node max, 1 edge max
  var zoom = r.cy.zoom();
  var hasCompounds = r.cy.hasCompoundNodes();
  var edgeThreshold = (isTouch ? 24 : 8) / zoom;
  var nodeThreshold = (isTouch ? 8 : 2) / zoom;
  var labelThreshold = (isTouch ? 8 : 2) / zoom;
  var minSqDist = Infinity;
  var nearEdge;
  var nearNode;

  function addEle( ele, sqDist ){
    if( ele.isNode() ){
      if( nearNode ){
        return; // can't replace node
      } else {
        nearNode = ele;
        near.push( ele );
      }
    }

    if( ele.isEdge() && ( sqDist == null || sqDist < minSqDist ) ){
      if( nearEdge ){ // then replace existing edge
        // can replace only if same z-index
        if( nearEdge.pstyle( 'z-index' ).value === ele.pstyle('z-index').value ){
          for( var i = 0; i < near.length; i++ ){
            if( near[i].isEdge() ){
              near[i] = ele;
              nearEdge = ele;
              minSqDist = sqDist != null ? sqDist : minSqDist;
              break;
            }
          }
        }
      } else {
        near.push( ele );
        nearEdge = ele;
        minSqDist = sqDist != null ? sqDist : minSqDist;
      }
    }
  }

  function checkNode( node ){
    var _p = node._private;

    if( node.pstyle( 'events' ).strValue === 'no' ){ return; }

    var width = node.outerWidth() + 2 * nodeThreshold;
    var height = node.outerHeight() + 2 * nodeThreshold;
    var hw = width / 2;
    var hh = height / 2;
    var pos = _p.position;

    if(
      pos.x - hw <= x && x <= pos.x + hw // bb check x
        &&
      pos.y - hh <= y && y <= pos.y + hh // bb check y
    ){
      var visible = !visibleElementsOnly || ( node.visible() && !node.transparent() );

      // exit early if invisible edge and must be visible
      if( visibleElementsOnly && !visible ){
        return;
      }

      var shape = r.nodeShapes[ self.getNodeShape( node ) ];

      if(
        shape.checkPoint( x, y, 0, width, height, pos.x, pos.y )
      ){
        addEle( node, 0 );
        return true;
      }

    }
  }

  function checkEdge( edge ){
    var _p = edge._private;

    if( edge.pstyle('events').strValue === 'no' ){ return; }

    var rs = _p.rscratch;
    var styleWidth = edge.pstyle( 'width' ).pfValue;
    var width = styleWidth / 2 + edgeThreshold; // more like a distance radius from centre
    var widthSq = width * width;
    var width2 = width * 2;
    var src = _p.source;
    var tgt = _p.target;
    var inEdgeBB = false;
    var sqDist;

    // exit early if invisible edge and must be visible
    var passedVisibilityCheck;
    var passesVisibilityCheck = function(){
      if( passedVisibilityCheck !== undefined ){
        return passedVisibilityCheck;
      }

      if( !visibleElementsOnly ){
        passedVisibilityCheck = true;
        return true;
      }

      var visible = edge.visible() && !edge.transparent();
      if( visible ){
        passedVisibilityCheck = true;
        return true;
      }

      passedVisibilityCheck = false;
      return false;
    };

    if( rs.edgeType === 'segments' || rs.edgeType === 'straight' || rs.edgeType === 'haystack' ){
      var pts = rs.allpts;

      for( var i = 0; i + 3 < pts.length; i += 2 ){
        if(
          (inEdgeBB = math.inLineVicinity( x, y, pts[ i ], pts[ i + 1], pts[ i + 2], pts[ i + 3], width2 ))
            && passesVisibilityCheck() &&
          widthSq > ( sqDist = math.sqdistToFiniteLine( x, y, pts[ i ], pts[ i + 1], pts[ i + 2], pts[ i + 3] ) )
        ){
          addEle( edge, sqDist );
          return true;
        }
      }

    } else if( rs.edgeType === 'bezier' || rs.edgeType === 'multibezier' || rs.edgeType === 'self' || rs.edgeType === 'compound' ){
      var pts = rs.allpts;
      for( var i = 0; i + 5 < rs.allpts.length; i += 4 ){
        if(
          (inEdgeBB = math.inBezierVicinity( x, y, pts[ i ], pts[ i + 1], pts[ i + 2], pts[ i + 3], pts[ i + 4], pts[ i + 5], width2 ))
            && passesVisibilityCheck() &&
          (widthSq > (sqDist = math.sqdistToQuadraticBezier( x, y, pts[ i ], pts[ i + 1], pts[ i + 2], pts[ i + 3], pts[ i + 4], pts[ i + 5] )) )
        ){
          addEle( edge, sqDist );
          return true;
        }
      }
    }

    // if we're close to the edge but didn't hit it, maybe we hit its arrows
    if( passesVisibilityCheck() ){
      var src = src || _p.source;
      var tgt = tgt || _p.target;

      var arSize = self.getArrowWidth( styleWidth );

      var arrows = [
        { name: 'source', x: rs.arrowStartX, y: rs.arrowStartY, angle: rs.srcArrowAngle },
        { name: 'target', x: rs.arrowEndX, y: rs.arrowEndY, angle: rs.tgtArrowAngle },
        { name: 'mid-source', x: rs.midX, y: rs.midY, angle: rs.midsrcArrowAngle },
        { name: 'mid-target', x: rs.midX, y: rs.midY, angle: rs.midtgtArrowAngle }
      ];

      for( var i = 0; i < arrows.length; i++ ){
        var ar = arrows[ i ];
        var shape = r.arrowShapes[ edge.pstyle( ar.name + '-arrow-shape' ).value ];

        if(
          shape.roughCollide( x, y, arSize, ar.angle, { x: ar.x, y: ar.y }, edgeThreshold )
           &&
          shape.collide( x, y, arSize, ar.angle, { x: ar.x, y: ar.y }, edgeThreshold )
        ){
          addEle( edge );
          return true;
        }
      }
    }

    // for compound graphs, hitting edge may actually want a connected node instead (b/c edge may have greater z-index precedence)
    if( hasCompounds && near.length > 0 ){
      checkNode( src );
      checkNode( tgt );
    }
  }

  function preprop( obj, name, pre ){
    return util.getPrefixedProperty( obj, name, pre );
  }

  function checkLabel( ele, prefix ){
    var _p = ele._private;
    var th = labelThreshold;

    var prefixDash;
    if( prefix ){
      prefixDash = prefix + '-';
    } else {
      prefixDash = '';
    }

    var text = ele.pstyle( prefixDash + 'label' ).value;
    var eventsEnabled = ele.pstyle( 'text-events' ).strValue === 'yes';

    if( !eventsEnabled || !text ){ return; }

    var rstyle = _p.rstyle;
    var bw = ele.pstyle('text-border-width').pfValue;
    var lw = preprop( rstyle, 'labelWidth', prefix ) + bw/2 + 2*th;
    var lh = preprop( rstyle, 'labelHeight', prefix ) + bw/2 + 2*th;
    var lx = preprop( rstyle, 'labelX', prefix );
    var ly = preprop( rstyle, 'labelY', prefix );

    var theta = preprop( _p.rscratch, 'labelAngle', prefix );

    var lx1 = lx - lw / 2;
    var lx2 = lx + lw / 2;
    var ly1 = ly - lh / 2;
    var ly2 = ly + lh / 2;

    if( theta ){
      var cos = Math.cos( theta );
      var sin = Math.sin( theta );

      var rotate = function( x, y ){
        x = x - lx;
        y = y - ly;

        return {
          x: x * cos - y * sin + lx,
          y: x * sin + y * cos + ly
        };
      };

      var px1y1 = rotate( lx1, ly1 );
      var px1y2 = rotate( lx1, ly2 );
      var px2y1 = rotate( lx2, ly1 );
      var px2y2 = rotate( lx2, ly2 );

      var points = [
        px1y1.x, px1y1.y,
        px2y1.x, px2y1.y,
        px2y2.x, px2y2.y,
        px1y2.x, px1y2.y
      ];

      if( math.pointInsidePolygonPoints( x, y, points ) ){
        addEle( ele );
        return true;
      }
    } else { // do a cheaper bb check
      var bb = {
        w: lw,
        h: lh,
        x1: lx1,
        x2: lx2,
        y1: ly1,
        y2: ly2
      };

      if( math.inBoundingBox( bb, x, y ) ){
        addEle( ele );
        return true;
      }
    }

  }

  for( var i = eles.length - 1; i >= 0; i-- ){ // reverse order for precedence
    var ele = eles[ i ];

    if( ele.isNode() ){
      checkNode( ele ) || checkLabel( ele );

    } else { // then edge
      checkEdge( ele ) || checkLabel( ele ) || checkLabel( ele, 'source' ) || checkLabel( ele, 'target' );
    }
  }

  return near;
};

// 'Give me everything from this box'
BRp.getAllInBox = function( x1, y1, x2, y2 ){
  var eles = this.getCachedZSortedEles();
  var nodes = eles.nodes;
  var edges = eles.edges;
  var box = [];

  var x1c = Math.min( x1, x2 );
  var x2c = Math.max( x1, x2 );
  var y1c = Math.min( y1, y2 );
  var y2c = Math.max( y1, y2 );

  x1 = x1c;
  x2 = x2c;
  y1 = y1c;
  y2 = y2c;

  var boxBb = math.makeBoundingBox( {
    x1: x1, y1: y1,
    x2: x2, y2: y2
  } );

  for( var i = 0; i < nodes.length; i++ ){
    var node = nodes[ i ];
    var nodeBb = node.boundingBox( {
      includeNodes: true,
      includeEdges: false,
      includeLabels: false,
      includeShadows: false
    } );

    if( math.boundingBoxesIntersect( boxBb, nodeBb ) ){
      box.push( nodes[ i ] );
    }
  }

  for( var e = 0; e < edges.length; e++ ){
    var edge = edges[ e ];
    var _p = edge._private;
    var rs = _p.rscratch;

    if( rs.startX != null && rs.startY != null && !math.inBoundingBox( boxBb, rs.startX, rs.startY ) ){ continue; }
    if( rs.endX != null && rs.endY != null && !math.inBoundingBox( boxBb, rs.endX, rs.endY ) ){ continue; }

    if( rs.edgeType === 'bezier' || rs.edgeType === 'multibezier' || rs.edgeType === 'self' || rs.edgeType === 'compound' || rs.edgeType === 'segments' || rs.edgeType === 'haystack' ){

      var pts = _p.rstyle.bezierPts || _p.rstyle.linePts || _p.rstyle.haystackPts;
      var allInside = true;

      for( var i = 0; i < pts.length; i++ ){
        if( !math.pointInBoundingBox( boxBb, pts[ i ] ) ){
          allInside = false;
          break;
        }
      }

      if( allInside ){
        box.push( edge );
      }

    } else if( rs.edgeType === 'haystack' || rs.edgeType === 'straight' ){
      box.push( edge );
    }

  }

  return box;
};


/**
 * Returns the shape of the given node. If the height or width of the given node
 * is set to auto, the node is considered to be a compound.
 *
 * @param node          a node
 * @return {String}     shape of the node
 */
BRp.getNodeShape = function( node ){
  var r = this;
  var shape = node.pstyle( 'shape' ).value;

  if( node.isParent() ){
    if( shape === 'rectangle' || shape === 'roundrectangle' ){
      return shape;
    } else {
      return 'rectangle';
    }
  }

  if( shape === 'polygon' ){
    var points = node.pstyle( 'shape-polygon-points' ).value;

    return r.nodeShapes.makePolygon( points ).name;
  }

  return shape;
};

BRp.updateCachedZSortedEles = function(){
  this.getCachedZSortedEles( true );
};

BRp.updateCachedGrabbedEles = function(){
  var eles = this.cachedZSortedEles;

  eles.drag = [];
  eles.nondrag = [];

  var grabTargets = [];

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[i];
    var rs = ele._private.rscratch;

    if( ele.grabbed() && !ele.isParent() ){
      grabTargets.push( ele );
    } else if( rs.inDragLayer ){
      eles.drag.push( ele );
    } else {
      eles.nondrag.push( ele );
    }
  }

  // put the grab target nodes last so it's on top of its neighbourhood
  for( var i = 0; i < grabTargets.length; i++ ){
    var ele = grabTargets[i];

    eles.drag.push( ele );
  }
};

BRp.getCachedZSortedEles = function( forceRecalc ){
  if( forceRecalc || !this.cachedZSortedEles ){
    //console.time('cachezorder')

    var cyEles = this.cy.mutableElements();
    var eles = [];

    eles.nodes = [];
    eles.edges = [];

    for( var i = 0; i < cyEles.length; i++ ){
      var ele = cyEles[i];

      if( ele.animated() || (ele.visible() && !ele.transparent()) ){
        eles.push( ele );

        if( ele.isNode() ){
          eles.nodes.push( ele );
        } else {
          eles.edges.push( ele );
        }
      }
    }

    eles.sort( zIndexSort );

    this.cachedZSortedEles = eles;

    this.updateCachedGrabbedEles();

    //console.log('make cache')

    //console.timeEnd('cachezorder')
  } else {
    eles = this.cachedZSortedEles;
    //console.log('read cache')
  }

  return eles;
};

function pushBezierPts( r, edge, pts ){
  var qbezierAt = function( p1, p2, p3, t ){ return math.qbezierAt( p1, p2, p3, t ); };
  var _p = edge._private;
  var bpts = _p.rstyle.bezierPts;

  for( var i = 0; i < r.bezierProjPcts.length; i++ ){
    var p = r.bezierProjPcts[i];

    bpts.push( {
      x: qbezierAt( pts[0], pts[2], pts[4], p ),
      y: qbezierAt( pts[1], pts[3], pts[5], p )
    } );
  }
}

BRp.projectLines = function( edge ){
  var _p = edge._private;
  var rs = _p.rscratch;
  var et = rs.edgeType;

  // clear the cached points state
  _p.rstyle.bezierPts = null;
  _p.rstyle.linePts = null;
  _p.rstyle.haystackPts = null;

  if( et === 'multibezier' ||  et === 'bezier' ||  et === 'self' ||  et === 'compound' ){
    var bpts = _p.rstyle.bezierPts = []; // jshint ignore:line

    for( var i = 0; i + 5 < rs.allpts.length; i += 4 ){
      pushBezierPts( this, edge, rs.allpts.slice( i, i + 6 ) );
    }
  } else if(  et === 'segments' ){
    var lpts = _p.rstyle.linePts = [];

    for( var i = 0; i + 1 < rs.allpts.length; i += 2 ){
      lpts.push( {
        x: rs.allpts[ i ],
        y: rs.allpts[ i + 1]
      } );
    }
  } else if( et === 'haystack' ){
    var hpts = rs.haystackPts;

    _p.rstyle.haystackPts = [
      { x: hpts[0], y: hpts[1] },
      { x: hpts[2], y: hpts[3] }
    ];
  }

  _p.rstyle.arrowWidth = this.getArrowWidth( edge.pstyle('width').pfValue ) * this.arrowShapeWidth;
};

BRp.projectBezier = BRp.projectLines;

BRp.recalculateNodeLabelProjection = function( node ){
  var content = node.pstyle( 'label' ).strValue;

  if( is.emptyString(content) ){ return; }

  var textX, textY;
  var _p = node._private;
  var nodeWidth = node.width();
  var nodeHeight = node.height();
  var padding = node.pstyle('padding').pfValue;
  var nodePos = _p.position;
  var textHalign = node.pstyle( 'text-halign' ).strValue;
  var textValign = node.pstyle( 'text-valign' ).strValue;
  var rs = _p.rscratch;
  var rstyle = _p.rstyle;

  switch( textHalign ){
    case 'left':
      textX = nodePos.x - nodeWidth / 2 - padding;
      break;

    case 'right':
      textX = nodePos.x + nodeWidth / 2 + padding;
      break;

    default: // e.g. center
      textX = nodePos.x;
  }

  switch( textValign ){
    case 'top':
      textY = nodePos.y - nodeHeight / 2 - padding;
      break;

    case 'bottom':
      textY = nodePos.y + nodeHeight / 2 + padding;
      break;

    default: // e.g. middle
      textY = nodePos.y;
  }

  rs.labelX = textX;
  rs.labelY = textY;
  rstyle.labelX = textX;
  rstyle.labelY = textY;

  this.applyLabelDimensions( node );
};

BRp.recalculateEdgeLabelProjections = function( edge ){
  var p;
  var _p = edge._private;
  var rs = _p.rscratch;
  var r = this;
  var content = {
    mid: edge.pstyle('label').strValue,
    source: edge.pstyle('source-label').strValue,
    target: edge.pstyle('target-label').strValue
  };

  if( content.mid || content.source || content.target ){
    // then we have to calculate...
  } else {
    return; // no labels => no calcs
  }

  // add center point to style so bounding box calculations can use it
  //
  p = {
    x: rs.midX,
    y: rs.midY
  };

  var setRs = function( propName, prefix, value ){
    util.setPrefixedProperty( _p.rscratch, propName, prefix, value );
    util.setPrefixedProperty( _p.rstyle, propName, prefix, value );
  };

  setRs( 'labelX', null, p.x );
  setRs( 'labelY', null, p.y );

  var createControlPointInfo = function(){
    if( createControlPointInfo.cache ){ return createControlPointInfo.cache; } // use cache so only 1x per edge

    var ctrlpts = [];

    // store each ctrlpt info init
    for( var i = 0; i + 5 < rs.allpts.length; i += 4 ){
      var p0 = { x: rs.allpts[i], y: rs.allpts[i+1] };
      var p1 = { x: rs.allpts[i+2], y: rs.allpts[i+3] }; // ctrlpt
      var p2 = { x: rs.allpts[i+4], y: rs.allpts[i+5] };

      ctrlpts.push({
        p0: p0,
        p1: p1,
        p2: p2,
        startDist: 0,
        length: 0,
        segments: []
      });
    }

    var bpts = _p.rstyle.bezierPts;
    var nProjs = r.bezierProjPcts.length;

    function addSegment( cp, p0, p1, t0, t1 ){
      var length = math.dist( p0, p1 );
      var prevSegment = cp.segments[ cp.segments.length - 1 ];
      var segment = {
        p0: p0,
        p1: p1,
        t0: t0,
        t1: t1,
        startDist: prevSegment ? prevSegment.startDist + prevSegment.length : 0,
        length: length
      };

      cp.segments.push( segment );

      cp.length += length;
    }

    // update each ctrlpt with segment info
    for( var i = 0; i < ctrlpts.length; i++ ){
      var cp = ctrlpts[i];
      var prevCp = ctrlpts[i - 1];

      if( prevCp ){
        cp.startDist = prevCp.startDist + prevCp.length;
      }

      addSegment(
        cp,
        cp.p0,   bpts[ i * nProjs ],
        0,       r.bezierProjPcts[ 0 ]
      ); // first

      for( var j = 0; j < nProjs - 1; j++ ){
        addSegment(
          cp,
          bpts[ i * nProjs + j ],   bpts[ i * nProjs + j + 1 ],
          r.bezierProjPcts[ j ],    r.bezierProjPcts[ j + 1 ]
        );
      }

      addSegment(
        cp,
        bpts[ i * nProjs + nProjs - 1 ],   cp.p2,
        r.bezierProjPcts[ nProjs - 1 ],    1
      ); // last
    }

    return ( createControlPointInfo.cache = ctrlpts );
  };

  var calculateEndProjection = function( prefix ){
    var angle;
    var isSrc = prefix === 'source';

    if( !content[ prefix ] ){ return; }

    var offset = edge.pstyle(prefix+'-text-offset').pfValue;

    var lineAngle = function( p0, p1 ){
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;

      return Math.atan( dy / dx );
    };

    var bezierAngle = function( p0, p1, p2, t ){
      var t0 = math.bound( 0, t - 0.001, 1 );
      var t1 = math.bound( 0, t + 0.001, 1 );

      var lp0 = math.qbezierPtAt( p0, p1, p2, t0 );
      var lp1 = math.qbezierPtAt( p0, p1, p2, t1 );

      return lineAngle( lp0, lp1 );
    };

    switch( rs.edgeType ){
      case 'self':
      case 'compound':
      case 'bezier':
      case 'multibezier':
        var cps = createControlPointInfo();
        var selected;
        var startDist = 0;
        var totalDist = 0;

        // find the segment we're on
        for( var i = 0; i < cps.length; i++ ){
          var cp = cps[ isSrc ? i : cps.length - 1 - i ];

          for( var j = 0; j < cp.segments.length; j++ ){
            var seg = cp.segments[ isSrc ? j : cp.segments.length - 1 - j ];
            var lastSeg = i === cps.length - 1 && j === cp.segments.length - 1;

            startDist = totalDist;
            totalDist += seg.length;

            if( totalDist >= offset || lastSeg ){
              selected = { cp: cp, segment: seg };
              break;
            }
          }

          if( selected ){ break; }
        }

        var cp = selected.cp;
        var seg = selected.segment;
        var tSegment = ( offset - startDist ) / ( seg.length );
        var segDt = seg.t1 - seg.t0;
        var t = isSrc ? seg.t0 + segDt * tSegment : seg.t1 - segDt * tSegment;

        t = math.bound( 0, t, 1 );
        p = math.qbezierPtAt( cp.p0, cp.p1, cp.p2, t );
        angle = bezierAngle( cp.p0, cp.p1, cp.p2, t, p );

        break;

      case 'straight':
      case 'segments':
      case 'haystack':
        var d = 0, di, d0;
        var p0, p1;
        var l = rs.allpts.length;

        for( var i = 0; i + 3 < l; i += 2 ){
          if( isSrc ){
            p0 = { x: rs.allpts[i],     y: rs.allpts[i+1] };
            p1 = { x: rs.allpts[i+2],   y: rs.allpts[i+3] };
          } else {
            p0 = { x: rs.allpts[l-2-i], y: rs.allpts[l-1-i] };
            p1 = { x: rs.allpts[l-4-i], y: rs.allpts[l-3-i] };
          }

          di = math.dist( p0, p1 );
          d0 = d;
          d += di;

          if( d >= offset ){ break; }
        }

        var pD = offset - d0;
        var t = pD / di;

        t  = math.bound( 0, t, 1 );
        p = math.lineAt( p0, p1, t );
        angle = lineAngle( p0, p1 );

        break;
    }

    setRs( 'labelX', prefix, p.x );
    setRs( 'labelY', prefix, p.y );
    setRs( 'labelAutoAngle', prefix, angle );
  };

  calculateEndProjection( 'source' );
  calculateEndProjection( 'target' );

  this.applyLabelDimensions( edge );
};

BRp.applyLabelDimensions = function( ele ){
  this.applyPrefixedLabelDimensions( ele );

  if( ele.isEdge() ){
    this.applyPrefixedLabelDimensions( ele, 'source' );
    this.applyPrefixedLabelDimensions( ele, 'target' );
  }
};

BRp.applyPrefixedLabelDimensions = function( ele, prefix ){
  var _p = ele._private;

  var text = this.getLabelText( ele, prefix );
  var labelDims = this.calculateLabelDimensions( ele, text );

  util.setPrefixedProperty( _p.rstyle,   'labelWidth', prefix, labelDims.width );
  util.setPrefixedProperty( _p.rscratch, 'labelWidth', prefix, labelDims.width );

  util.setPrefixedProperty( _p.rstyle,   'labelHeight', prefix, labelDims.height );
  util.setPrefixedProperty( _p.rscratch, 'labelHeight', prefix, labelDims.height );
};

BRp.getLabelText = function( ele, prefix ){
  var _p = ele._private;
  var pfd = prefix ? prefix + '-' : '';
  var text = ele.pstyle( pfd + 'label' ).strValue;
  var textTransform = ele.pstyle( 'text-transform' ).value;
  var rscratch = function( propName, value ){
    if( value ){
      util.setPrefixedProperty( _p.rscratch, propName, prefix, value );
      return value;
    } else {
      return util.getPrefixedProperty( _p.rscratch, propName, prefix );
    }
  };

  if( textTransform == 'none' ){
    // passthrough
  } else if( textTransform == 'uppercase' ){
    text = text.toUpperCase();
  } else if( textTransform == 'lowercase' ){
    text = text.toLowerCase();
  }

  if( ele.pstyle( 'text-wrap' ).value === 'wrap' ){
    //console.log('wrap');

    var labelKey = rscratch( 'labelKey' );

    // save recalc if the label is the same as before
    if( labelKey && rscratch( 'labelWrapKey' ) === labelKey ){
      // console.log('wrap cache hit');
      return rscratch( 'labelWrapCachedText' );
    }
    // console.log('wrap cache miss');

    var lines = text.split( '\n' );
    var maxW = ele.pstyle( 'text-max-width' ).pfValue;
    var wrappedLines = [];

    for( var l = 0; l < lines.length; l++ ){
      var line = lines[ l ];
      var lineDims = this.calculateLabelDimensions( ele, line, 'line=' + line );
      var lineW = lineDims.width;

      if( lineW > maxW ){ // line is too long
        var words = line.split( /\s+/ ); // NB: assume collapsed whitespace into single space
        var subline = '';

        for( var w = 0; w < words.length; w++ ){
          var word = words[ w ];
          var testLine = subline.length === 0 ? word : subline + ' ' + word;
          var testDims = this.calculateLabelDimensions( ele, testLine, 'testLine=' + testLine );
          var testW = testDims.width;

          if( testW <= maxW ){ // word fits on current line
            subline += word + ' ';
          } else { // word starts new line
            wrappedLines.push( subline );
            subline = word + ' ';
          }
        }

        // if there's remaining text, put it in a wrapped line
        if( !subline.match( /^\s+$/ ) ){
          wrappedLines.push( subline );
        }
      } else { // line is already short enough
        wrappedLines.push( line );
      }
    } // for

    rscratch( 'labelWrapCachedLines', wrappedLines );
    text = rscratch( 'labelWrapCachedText', wrappedLines.join( '\n' ) );
    rscratch( 'labelWrapKey', labelKey );

    // console.log(text)
  } // if wrap

  return text;
};

BRp.calculateLabelDimensions = function( ele, text, extraKey ){
  var r = this;

  var cacheKey = ele._private.labelStyleKey + '$@$' + text;

  if( extraKey ){
    cacheKey += '$@$' + extraKey;
  }

  var cache = r.labelDimCache || (r.labelDimCache = {});

  if( cache[ cacheKey ] ){
    return cache[ cacheKey ];
  }

  var sizeMult = 1; // increase the scale to increase accuracy w.r.t. zoomed text
  var fStyle = ele.pstyle( 'font-style' ).strValue;
  var size = ( sizeMult * ele.pstyle( 'font-size' ).pfValue ) + 'px';
  var family = ele.pstyle( 'font-family' ).strValue;
  var weight = ele.pstyle( 'font-weight' ).strValue;

  var div = this.labelCalcDiv;

  if( !div ){
    div = this.labelCalcDiv = document.createElement( 'div' ); // eslint-disable-line no-undef
    document.body.appendChild( div ); // eslint-disable-line no-undef
  }

  var ds = div.style;

  // from ele style
  ds.fontFamily = family;
  ds.fontStyle = fStyle;
  ds.fontSize = size;
  ds.fontWeight = weight;

  // forced style
  ds.position = 'absolute';
  ds.left = '-9999px';
  ds.top = '-9999px';
  ds.zIndex = '-1';
  ds.visibility = 'hidden';
  ds.pointerEvents = 'none';
  ds.padding = '0';
  ds.lineHeight = '1';

  if( ele.pstyle( 'text-wrap' ).value === 'wrap' ){
    ds.whiteSpace = 'pre'; // so newlines are taken into account
  } else {
    ds.whiteSpace = 'normal';
  }

  // put label content in div
  div.textContent = text;

  cache[ cacheKey ] = {
    width: Math.ceil( div.clientWidth / sizeMult ),
    height: Math.ceil( div.clientHeight / sizeMult )
  };

  return cache[ cacheKey ];
};

BRp.recalculateEdgeProjections = function( edges ){
  this.findEdgeControlPoints( edges );
};


// Find edge control points
BRp.findEdgeControlPoints = function( edges ){
  if( !edges || edges.length === 0 ){ return; }

  var r = this;
  var cy = r.cy;
  var hasCompounds = cy.hasCompoundNodes();
  var hashTable = {};
  var pairIds = [];
  var haystackEdges = [];

  // create a table of edge (src, tgt) => list of edges between them
  var pairId;
  for( var i = 0; i < edges.length; i++ ){
    var edge = edges[ i ];
    var _p = edge._private;
    var data = _p.data;
    var curveStyle = edge.pstyle( 'curve-style' ).value;
    var edgeIsUnbundled = curveStyle === 'unbundled-bezier' || curveStyle === 'segments';

    // ignore edges who are not to be displayed
    // they shouldn't take up space
    if( edge.pstyle( 'display').value === 'none' ){
      continue;
    }

    if( curveStyle === 'haystack' ){
      haystackEdges.push( edge );
      continue;
    }

    var srcId = data.source;
    var tgtId = data.target;

    pairId = srcId > tgtId ?
      tgtId + '$-$' + srcId :
      srcId + '$-$' + tgtId ;

    if( edgeIsUnbundled ){
      pairId = 'unbundled' + '$-$' + data.id;
    }

    if( hashTable[ pairId ] == null ){
      hashTable[ pairId ] = [];
      pairIds.push( pairId );
    }

    hashTable[ pairId ].push( edge );

    if( edgeIsUnbundled ){
      hashTable[ pairId ].hasUnbundled = true;
    }
  }

  var src, tgt, src_p, tgt_p, srcPos, tgtPos, srcW, srcH, tgtW, tgtH, srcShape, tgtShape;
  var vectorNormInverse;
  var badBezier;

  // for each pair (src, tgt), create the ctrl pts
  // Nested for loop is OK; total number of iterations for both loops = edgeCount
  for( var p = 0; p < pairIds.length; p++ ){
    pairId = pairIds[ p ];
    var pairEdges = hashTable[ pairId ];

    // for each pair id, the edges should be sorted by index
    pairEdges.sort( function( edge1, edge2 ){
      return edge1.poolIndex() - edge2.poolIndex();
    } );

    src = pairEdges[0]._private.source;
    tgt = pairEdges[0]._private.target;

    // make sure src/tgt distinction is consistent for bundled edges
    if( !pairEdges.hasUnbundled && src.id() > tgt.id() ){
      var temp = src;
      src = tgt;
      tgt = temp;
    }

    src_p = src._private;
    tgt_p = tgt._private;

    srcPos = src_p.position;
    tgtPos = tgt_p.position;

    srcW = src.outerWidth();
    srcH = src.outerHeight();

    tgtW = tgt.outerWidth();
    tgtH = tgt.outerHeight();

    srcShape = r.nodeShapes[ this.getNodeShape( src ) ];
    tgtShape = r.nodeShapes[ this.getNodeShape( tgt ) ];

    badBezier = false;


    if( (pairEdges.length > 1 && src !== tgt) || pairEdges.hasUnbundled ){

      // pt outside src shape to calc distance/displacement from src to tgt
      var srcOutside = srcShape.intersectLine(
        srcPos.x,
        srcPos.y,
        srcW,
        srcH,
        tgtPos.x,
        tgtPos.y,
        0
      );

      // pt outside tgt shape to calc distance/displacement from src to tgt
      var tgtOutside = tgtShape.intersectLine(
        tgtPos.x,
        tgtPos.y,
        tgtW,
        tgtH,
        srcPos.x,
        srcPos.y,
        0
      );

      var midptSrcPts = {
        x1: srcOutside[0],
        x2: tgtOutside[0],
        y1: srcOutside[1],
        y2: tgtOutside[1]
      };

      var posPts = {
        x1: srcPos.x,
        x2: tgtPos.x,
        y1: srcPos.y,
        y2: tgtPos.y
      };

      var dy = ( tgtOutside[1] - srcOutside[1] );
      var dx = ( tgtOutside[0] - srcOutside[0] );
      var l = Math.sqrt( dx * dx + dy * dy );

      var vector = {
        x: dx,
        y: dy
      };

      var vectorNorm = {
        x: vector.x / l,
        y: vector.y / l
      };
      vectorNormInverse = {
        x: -vectorNorm.y,
        y: vectorNorm.x
      };


      // if node shapes overlap, then no ctrl pts to draw
      if(
        tgtShape.checkPoint( srcOutside[0], srcOutside[1], 0, tgtW, tgtH, tgtPos.x, tgtPos.y )  &&
        srcShape.checkPoint( tgtOutside[0], tgtOutside[1], 0, srcW, srcH, srcPos.x, srcPos.y )
      ){
        vectorNormInverse = {};
        badBezier = true;
      }

    }

    var edge;
    var edge_p;
    var rs;

    for( var i = 0; i < pairEdges.length; i++ ){
      edge = pairEdges[ i ];
      edge_p = edge._private;
      rs = edge_p.rscratch;

      var edgeIndex1 = rs.lastEdgeIndex;
      var edgeIndex2 = i;

      var numEdges1 = rs.lastNumEdges;
      var numEdges2 = pairEdges.length;

      var curveStyle = edge.pstyle( 'curve-style' ).value;
      var ctrlptDists = edge.pstyle( 'control-point-distances' );
      var ctrlptWs = edge.pstyle( 'control-point-weights' );
      var bezierN = ctrlptDists && ctrlptWs ? Math.min( ctrlptDists.value.length, ctrlptWs.value.length ) : 1;
      var stepSize = edge.pstyle( 'control-point-step-size' ).pfValue;
      var ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[0] : undefined;
      var ctrlptWeight = ctrlptWs.value[0];
      var edgeIsUnbundled = curveStyle === 'unbundled-bezier' || curveStyle === 'segments';

      var srcX1 = rs.lastSrcCtlPtX;
      var srcX2 = srcPos.x;
      var srcY1 = rs.lastSrcCtlPtY;
      var srcY2 = srcPos.y;
      var srcW1 = rs.lastSrcCtlPtW;
      var srcW2 = src.outerWidth();
      var srcH1 = rs.lastSrcCtlPtH;
      var srcH2 = src.outerHeight();

      var tgtX1 = rs.lastTgtCtlPtX;
      var tgtX2 = tgtPos.x;
      var tgtY1 = rs.lastTgtCtlPtY;
      var tgtY2 = tgtPos.y;
      var tgtW1 = rs.lastTgtCtlPtW;
      var tgtW2 = tgt.outerWidth();
      var tgtH1 = rs.lastTgtCtlPtH;
      var tgtH2 = tgt.outerHeight();

      var width1 = rs.lastW;
      var width2 = edge.pstyle( 'control-point-step-size' ).pfValue;

      var edgeDistances = edge.pstyle('edge-distances').value;

      if( badBezier ){
        rs.badBezier = true;
      } else {
        rs.badBezier = false;
      }

      if( srcX1 === srcX2 && srcY1 === srcY2 && srcW1 === srcW2 && srcH1 === srcH2
      &&  tgtX1 === tgtX2 && tgtY1 === tgtY2 && tgtW1 === tgtW2 && tgtH1 === tgtH2
      &&  width1 === width2
      &&  ((edgeIndex1 === edgeIndex2 && numEdges1 === numEdges2) || edgeIsUnbundled) ){
        // console.log('edge ctrl pt cache HIT')
        continue; // then the control points haven't changed and we can skip calculating them
      } else {
        rs.lastSrcCtlPtX = srcX2;
        rs.lastSrcCtlPtY = srcY2;
        rs.lastSrcCtlPtW = srcW2;
        rs.lastSrcCtlPtH = srcH2;
        rs.lastTgtCtlPtX = tgtX2;
        rs.lastTgtCtlPtY = tgtY2;
        rs.lastTgtCtlPtW = tgtW2;
        rs.lastTgtCtlPtH = tgtH2;
        rs.lastEdgeIndex = edgeIndex2;
        rs.lastNumEdges = numEdges2;
        rs.lastWidth = width2;
        // console.log('edge ctrl pt cache MISS')
      }

      if( src === tgt ){
        // Self-edge

        rs.edgeType = 'self';

        var j = i;
        var loopDist = stepSize;

        if( edgeIsUnbundled ){
          j = 0;
          loopDist = ctrlptDist;
        }

        rs.ctrlpts = [
          srcPos.x,
          srcPos.y - (1 + Math.pow( srcH, 1.12 ) / 100) * loopDist * (j / 3 + 1),

          srcPos.x - (1 + Math.pow( srcW, 1.12 ) / 100) * loopDist * (j / 3 + 1),
          srcPos.y
        ];

      } else if(
        hasCompounds &&
        ( src.isParent() || src.isChild() || tgt.isParent() || tgt.isChild() ) &&
        ( src.parents().anySame( tgt ) || tgt.parents().anySame( src ) )
      ){
        // Compound edge

        rs.edgeType = 'compound';

        // because the line approximation doesn't apply for compound beziers
        // (loop/self edges are already elided b/c of cheap src==tgt check)
        rs.badBezier = false;

        var j = i;
        var loopDist = stepSize;

        if( edgeIsUnbundled ){
          j = 0;
          loopDist = ctrlptDist;
        }

        var loopW = 50;

        var loopaPos = {
          x: srcPos.x - srcW / 2,
          y: srcPos.y - srcH / 2
        };

        var loopbPos = {
          x: tgtPos.x - tgtW / 2,
          y: tgtPos.y - tgtH / 2
        };

        var loopPos = {
          x: Math.min( loopaPos.x, loopbPos.x ),
          y: Math.min( loopaPos.y, loopbPos.y )
        };

        // avoids cases with impossible beziers
        var minCompoundStretch = 0.5;
        var compoundStretchA = Math.max( minCompoundStretch, Math.log( srcW * 0.01 ) );
        var compoundStretchB = Math.max( minCompoundStretch, Math.log( tgtW * 0.01 ) );

        rs.ctrlpts = [
          loopPos.x,
          loopPos.y - (1 + Math.pow( loopW, 1.12 ) / 100) * loopDist * (j / 3 + 1) * compoundStretchA,

          loopPos.x - (1 + Math.pow( loopW, 1.12 ) / 100) * loopDist * (j / 3 + 1) * compoundStretchB,
          loopPos.y
        ];

      } else if( curveStyle === 'segments' ){
        // Segments (multiple straight lines)

        rs.edgeType = 'segments';
        rs.segpts = [];

        var segmentWs = edge.pstyle( 'segment-weights' ).pfValue;
        var segmentDs = edge.pstyle( 'segment-distances' ).pfValue;
        var segmentsN = Math.min( segmentWs.length, segmentDs.length );

        for( var s = 0; s < segmentsN; s++ ){
          var w = segmentWs[ s ];
          var d = segmentDs[ s ];

          var w1 = 1 - w;
          var w2 = w;

          var midptPts = edgeDistances === 'node-position' ? posPts : midptSrcPts;

          var adjustedMidpt = {
            x: midptPts.x1 * w1 + midptPts.x2 * w2,
            y: midptPts.y1 * w1 + midptPts.y2 * w2
          };

          rs.segpts.push(
            adjustedMidpt.x + vectorNormInverse.x * d,
            adjustedMidpt.y + vectorNormInverse.y * d
          );
        }

      // Straight edge
      } else if(
        pairEdges.length % 2 === 1
        && i === Math.floor( pairEdges.length / 2 )
        && !edgeIsUnbundled
      ){

        rs.edgeType = 'straight';

      } else {
        // (Multi)bezier

        var multi = edgeIsUnbundled;

        rs.edgeType = multi ? 'multibezier' : 'bezier';
        rs.ctrlpts = [];

        for( var b = 0; b < bezierN; b++ ){
          var normctrlptDist = (0.5 - pairEdges.length / 2 + i) * stepSize;
          var manctrlptDist;
          var sign = math.signum( normctrlptDist );

          if( multi ){
            ctrlptDist = ctrlptDists ? ctrlptDists.pfValue[ b ] : stepSize; // fall back on step size
            ctrlptWeight = ctrlptWs.value[ b ];
          }

          if( edgeIsUnbundled ){ // multi or single unbundled
            manctrlptDist = ctrlptDist;
          } else {
            manctrlptDist = ctrlptDist !== undefined ? sign * ctrlptDist : undefined;
          }

          var distanceFromMidpoint = manctrlptDist !== undefined ? manctrlptDist : normctrlptDist;

          var w1 = 1 - ctrlptWeight;
          var w2 = ctrlptWeight;

          var midptPts = edgeDistances === 'node-position' ? posPts : midptSrcPts;

          var adjustedMidpt = {
            x: midptPts.x1 * w1 + midptPts.x2 * w2,
            y: midptPts.y1 * w1 + midptPts.y2 * w2
          };

          rs.ctrlpts.push(
            adjustedMidpt.x + vectorNormInverse.x * distanceFromMidpoint,
            adjustedMidpt.y + vectorNormInverse.y * distanceFromMidpoint
          );
        }

      }

      // find endpts for edge
      this.findEndpoints( edge );

      var badStart = !is.number( rs.startX ) || !is.number( rs.startY );
      var badAStart = !is.number( rs.arrowStartX ) || !is.number( rs.arrowStartY );
      var badEnd = !is.number( rs.endX ) || !is.number( rs.endY );
      var badAEnd = !is.number( rs.arrowEndX ) || !is.number( rs.arrowEndY );

      var minCpADistFactor = 3;
      var arrowW = this.getArrowWidth( edge.pstyle( 'width' ).pfValue ) * this.arrowShapeWidth;
      var minCpADist = minCpADistFactor * arrowW;

      if( rs.edgeType === 'bezier' ){
        var startACpDist = math.dist( { x: rs.ctrlpts[0], y: rs.ctrlpts[1] }, { x: rs.startX, y: rs.startY } );
        var closeStartACp = startACpDist < minCpADist;
        var endACpDist = math.dist( { x: rs.ctrlpts[0], y: rs.ctrlpts[1] }, { x: rs.endX, y: rs.endY } );
        var closeEndACp = endACpDist < minCpADist;

        var overlapping = false;

        if( badStart || badAStart || closeStartACp ){
          overlapping = true;

          // project control point along line from src centre to outside the src shape
          // (otherwise intersection will yield nothing)
          var cpD = { // delta
            x: rs.ctrlpts[0] - srcPos.x,
            y: rs.ctrlpts[1] - srcPos.y
          };
          var cpL = Math.sqrt( cpD.x * cpD.x + cpD.y * cpD.y ); // length of line
          var cpM = { // normalised delta
            x: cpD.x / cpL,
            y: cpD.y / cpL
          };
          var radius = Math.max( srcW, srcH );
          var cpProj = { // *2 radius guarantees outside shape
            x: rs.ctrlpts[0] + cpM.x * 2 * radius,
            y: rs.ctrlpts[1] + cpM.y * 2 * radius
          };

          var srcCtrlPtIntn = srcShape.intersectLine(
            srcPos.x,
            srcPos.y,
            srcW,
            srcH,
            cpProj.x,
            cpProj.y,
            0
          );

          if( closeStartACp ){
            rs.ctrlpts[0] = rs.ctrlpts[0] + cpM.x * (minCpADist - startACpDist);
            rs.ctrlpts[1] = rs.ctrlpts[1] + cpM.y * (minCpADist - startACpDist);
          } else {
            rs.ctrlpts[0] = srcCtrlPtIntn[0] + cpM.x * minCpADist;
            rs.ctrlpts[1] = srcCtrlPtIntn[1] + cpM.y * minCpADist;
          }
        }

        if( badEnd || badAEnd || closeEndACp ){
          overlapping = true;

          // project control point along line from tgt centre to outside the tgt shape
          // (otherwise intersection will yield nothing)
          var cpD = { // delta
            x: rs.ctrlpts[0] - tgtPos.x,
            y: rs.ctrlpts[1] - tgtPos.y
          };
          var cpL = Math.sqrt( cpD.x * cpD.x + cpD.y * cpD.y ); // length of line
          var cpM = { // normalised delta
            x: cpD.x / cpL,
            y: cpD.y / cpL
          };
          var radius = Math.max( srcW, srcH );
          var cpProj = { // *2 radius guarantees outside shape
            x: rs.ctrlpts[0] + cpM.x * 2 * radius,
            y: rs.ctrlpts[1] + cpM.y * 2 * radius
          };

          var tgtCtrlPtIntn = tgtShape.intersectLine(
            tgtPos.x,
            tgtPos.y,
            tgtW,
            tgtH,
            cpProj.x,
            cpProj.y,
            0
          );

          if( closeEndACp ){
            rs.ctrlpts[0] = rs.ctrlpts[0] + cpM.x * (minCpADist - endACpDist);
            rs.ctrlpts[1] = rs.ctrlpts[1] + cpM.y * (minCpADist - endACpDist);
          } else {
            rs.ctrlpts[0] = tgtCtrlPtIntn[0] + cpM.x * minCpADist;
            rs.ctrlpts[1] = tgtCtrlPtIntn[1] + cpM.y * minCpADist;
          }

        }

        if( overlapping ){
          // recalc endpts
          this.findEndpoints( edge );
        }

      }

      if( rs.edgeType === 'multibezier' || rs.edgeType === 'bezier' || rs.edgeType === 'self' || rs.edgeType === 'compound' ){
        rs.allpts = [];

        rs.allpts.push( rs.startX, rs.startY );

        for( var b = 0; b + 1 < rs.ctrlpts.length; b += 2 ){
          // ctrl pt itself
          rs.allpts.push( rs.ctrlpts[ b ], rs.ctrlpts[ b + 1] );

          // the midpt between ctrlpts as intermediate destination pts
          if( b + 3 < rs.ctrlpts.length ){
            rs.allpts.push( (rs.ctrlpts[ b ] + rs.ctrlpts[ b + 2]) / 2, (rs.ctrlpts[ b + 1] + rs.ctrlpts[ b + 3]) / 2 );
          }
        }

        rs.allpts.push( rs.endX, rs.endY );

        var m, mt;
        if( rs.ctrlpts.length / 2 % 2 === 0 ){
          m = rs.allpts.length / 2 - 1;

          rs.midX = rs.allpts[ m ];
          rs.midY = rs.allpts[ m + 1];
        } else {
          m = rs.allpts.length / 2 - 3;
          mt = 0.5;

          rs.midX = math.qbezierAt( rs.allpts[ m ], rs.allpts[ m + 2], rs.allpts[ m + 4], mt );
          rs.midY = math.qbezierAt( rs.allpts[ m + 1], rs.allpts[ m + 3], rs.allpts[ m + 5], mt );
        }

      } else if( rs.edgeType === 'straight' ){
        // need to calc these after endpts
        rs.allpts = [ rs.startX, rs.startY, rs.endX, rs.endY ];

        // default midpt for labels etc
        rs.midX = ( rs.startX + rs.endX + rs.arrowStartX + rs.arrowEndX ) / 4;
        rs.midY = ( rs.startY + rs.endY + rs.arrowStartY + rs.arrowEndY ) / 4;

      } else if( rs.edgeType === 'segments' ){
        rs.allpts = [];
        rs.allpts.push( rs.startX, rs.startY );
        rs.allpts.push.apply( rs.allpts, rs.segpts );
        rs.allpts.push( rs.endX, rs.endY );

        if( rs.segpts.length % 4 === 0 ){
          var i2 = rs.segpts.length / 2;
          var i1 = i2 - 2;

          rs.midX = ( rs.segpts[ i1 ] + rs.segpts[ i2 ] ) / 2;
          rs.midY = ( rs.segpts[ i1 + 1] + rs.segpts[ i2 + 1] ) / 2;
        } else {
          var i1 = rs.segpts.length / 2 - 1;

          rs.midX = rs.segpts[ i1 ];
          rs.midY = rs.segpts[ i1 + 1];
        }


      }

      this.projectLines( edge );
      this.calculateArrowAngles( edge );
      this.recalculateEdgeLabelProjections( edge );
      this.calculateLabelAngles( edge );

    } // for pair edges
  } // for pair ids

  for( var i = 0; i < haystackEdges.length; i++ ){
    var edge = haystackEdges[ i ];
    var _p = edge._private;
    var rscratch = _p.rscratch;
    var rs = rscratch;

    if( !rscratch.haystack ){
      var angle = Math.random() * 2 * Math.PI;

      rscratch.source = {
        x: Math.cos( angle ),
        y: Math.sin( angle )
      };

      var angle = Math.random() * 2 * Math.PI;

      rscratch.target = {
        x: Math.cos( angle ),
        y: Math.sin( angle )
      };

    }

    var src = _p.source;
    var tgt = _p.target;
    var srcPos = src._private.position;
    var tgtPos = tgt._private.position;
    var srcW = src.width();
    var tgtW = tgt.width();
    var srcH = src.height();
    var tgtH = tgt.height();
    var radius = edge.pstyle( 'haystack-radius' ).value;
    var halfRadius = radius / 2; // b/c have to half width/height

    rs.haystackPts = rs.allpts = [
      rs.source.x * srcW * halfRadius + srcPos.x,
      rs.source.y * srcH * halfRadius + srcPos.y,
      rs.target.x * tgtW * halfRadius + tgtPos.x,
      rs.target.y * tgtH * halfRadius + tgtPos.y
    ];

    rs.midX = (rs.allpts[0] + rs.allpts[2]) / 2;
    rs.midY = (rs.allpts[1] + rs.allpts[3]) / 2;

    // always override as haystack in case set to different type previously
    rscratch.edgeType = 'haystack';
    rscratch.haystack = true;

    this.projectLines( edge );
    this.calculateArrowAngles( edge );
    this.recalculateEdgeLabelProjections( edge );
    this.calculateLabelAngles( edge );
  }

  return hashTable;
};

var getAngleFromDisp = function( dispX, dispY ){
  return Math.atan2( dispY, dispX ) - Math.PI / 2;
};

BRp.calculateArrowAngles = function( edge ){
  var rs = edge._private.rscratch;
  var isHaystack = rs.edgeType === 'haystack';
  var isMultibezier = rs.edgeType === 'multibezier';
  var isSegments = rs.edgeType === 'segments';
  var isCompound = rs.edgeType === 'compound';
  var isSelf = rs.edgeType === 'self';

  // Displacement gives direction for arrowhead orientation
  var dispX, dispY;
  var startX, startY, endX, endY;

  var srcPos = edge._private.source._private.position;
  var tgtPos = edge._private.target._private.position;

  if( isHaystack ){
    startX = rs.haystackPts[0];
    startY = rs.haystackPts[1];
    endX = rs.haystackPts[2];
    endY = rs.haystackPts[3];
  } else {
    startX = rs.arrowStartX;
    startY = rs.arrowStartY;
    endX = rs.arrowEndX;
    endY = rs.arrowEndY;
  }

  // source
  //

  dispX = srcPos.x - startX;
  dispY = srcPos.y - startY;

  rs.srcArrowAngle = getAngleFromDisp( dispX, dispY );

  // mid target
  //

  var midX = rs.midX;
  var midY = rs.midY;

  if( isHaystack ){
    midX = ( startX + endX ) / 2;
    midY = ( startY + endY ) / 2;
  }

  dispX = endX - startX;
  dispY = endY - startY;

  if( isSelf ){
    dispX = -1;
    dispY = 1;
  } else if( isSegments ){
    var pts = rs.allpts;

    if( pts.length / 2 % 2 === 0 ){
      var i2 = pts.length / 2;
      var i1 = i2 - 2;

      dispX = ( pts[ i2 ] - pts[ i1 ] );
      dispY = ( pts[ i2 + 1] - pts[ i1 + 1] );
    } else {
      var i2 = pts.length / 2 - 1;
      var i1 = i2 - 2;
      var i3 = i2 + 2;

      dispX = ( pts[ i2 ] - pts[ i1 ] );
      dispY = ( pts[ i2 + 1] - pts[ i1 + 1] );
    }
  } else if( isMultibezier || isCompound ){
    var pts = rs.allpts;
    var cpts = rs.ctrlpts;
    var bp0x, bp0y;
    var bp1x, bp1y;

    if( cpts.length / 2 % 2 === 0 ){
      var p0 = pts.length / 2 - 1; // startpt
      var ic = p0 + 2;
      var p1 = ic + 2;

      bp0x = math.qbezierAt( pts[ p0 ], pts[ ic ], pts[ p1 ], 0.0 );
      bp0y = math.qbezierAt( pts[ p0 + 1], pts[ ic + 1], pts[ p1 + 1], 0.0 );

      bp1x = math.qbezierAt( pts[ p0 ], pts[ ic ], pts[ p1 ], 0.0001 );
      bp1y = math.qbezierAt( pts[ p0 + 1], pts[ ic + 1], pts[ p1 + 1], 0.0001 );
    } else {
      var ic = pts.length / 2 - 1; // ctrpt
      var p0 = ic - 2; // startpt
      var p1 = ic + 2; // endpt

      bp0x = math.qbezierAt( pts[ p0 ], pts[ ic ], pts[ p1 ], 0.4999 );
      bp0y = math.qbezierAt( pts[ p0 + 1], pts[ ic + 1], pts[ p1 + 1], 0.4999 );

      bp1x = math.qbezierAt( pts[ p0 ], pts[ ic ], pts[ p1 ], 0.5 );
      bp1y = math.qbezierAt( pts[ p0 + 1], pts[ ic + 1], pts[ p1 + 1], 0.5 );
    }

    dispX = ( bp1x - bp0x );
    dispY = ( bp1y - bp0y );
  }

  rs.midtgtArrowAngle = getAngleFromDisp( dispX, dispY );

  rs.midDispX = dispX;
  rs.midDispY = dispY;

  // mid source
  //

  dispX *= -1;
  dispY *= -1;

  if( isSegments ){
    var pts = rs.allpts;

    if( pts.length / 2 % 2 === 0 ){
      // already ok
    } else {
      var i2 = pts.length / 2 - 1;
      var i3 = i2 + 2;

      dispX = -( pts[ i3 ] - pts[ i2 ] );
      dispY = -( pts[ i3 + 1] - pts[ i2 + 1] );
    }
  }

  rs.midsrcArrowAngle = getAngleFromDisp( dispX, dispY );

  // target
  //

  dispX = tgtPos.x - endX;
  dispY = tgtPos.y - endY;

  rs.tgtArrowAngle = getAngleFromDisp( dispX, dispY );
};

BRp.calculateLabelAngles = function( ele ){
  var _p = ele._private;
  var rs = _p.rscratch;
  var isEdge = ele.isEdge();
  var rot = ele.pstyle( 'text-rotation' );
  var rotStr = rot.strValue;

  if( rotStr === 'none' ){
    rs.labelAngle = rs.sourceLabelAngle = rs.targetLabelAngle = 0;
  } else if( isEdge && rotStr === 'autorotate' ){
    rs.labelAngle = Math.atan( rs.midDispY / rs.midDispX );
    rs.sourceLabelAngle = rs.sourceLabelAutoAngle;
    rs.targetLabelAngle = rs.targetLabelAutoAngle;
  } else if( rotStr === 'autorotate' ){
    rs.labelAngle = rs.sourceLabelAngle = rs.targetLabelAngle = 0;
  } else {
    rs.labelAngle = rs.sourceLabelAngle = rs.targetLabelAngle = rot.pfValue;
  }
};


BRp.findEndpoints = function( edge ){
  var r = this;
  var intersect;

  var source = edge.source()[0];
  var target = edge.target()[0];

  var src_p = source._private;
  var tgt_p = target._private;

  var srcPos = src_p.position;
  var tgtPos = tgt_p.position;

  var tgtArShape = edge.pstyle( 'target-arrow-shape' ).value;
  var srcArShape = edge.pstyle( 'source-arrow-shape' ).value;

  var rs = edge._private.rscratch;

  var et = rs.edgeType;
  var bezier = et === 'bezier' || et === 'multibezier' || et === 'self' || et === 'compound';
  var multi = et !== 'bezier';
  var lines = et === 'straight' || et === 'segments';
  var segments = et === 'segments';
  var hasEndpts = bezier || multi || lines;

  var p1, p2;

  if( bezier ){
    var cpStart = [ rs.ctrlpts[0], rs.ctrlpts[1] ];
    var cpEnd = multi ? [ rs.ctrlpts[ rs.ctrlpts.length - 2], rs.ctrlpts[ rs.ctrlpts.length - 1] ] : cpStart;

    p1 = cpEnd;
    p2 = cpStart;
  } else if( lines ){
    var srcArrowFromPt = !segments ? [ tgtPos.x, tgtPos.y ] : rs.segpts.slice( 0, 2 );
    var tgtArrowFromPt = !segments ? [ srcPos.x, srcPos.y ] : rs.segpts.slice( rs.segpts.length - 2 );

    p1 = tgtArrowFromPt;
    p2 = srcArrowFromPt;
  }

  intersect = r.nodeShapes[ this.getNodeShape( target ) ].intersectLine(
    tgtPos.x,
    tgtPos.y,
    target.outerWidth(),
    target.outerHeight(),
    p1[0],
    p1[1],
    0
  );

  var arrowEnd = math.shortenIntersection( intersect, p1,
    r.arrowShapes[ tgtArShape ].spacing( edge ) );
  var edgeEnd = math.shortenIntersection( intersect, p1,
    r.arrowShapes[ tgtArShape ].gap( edge ) );

  rs.endX = edgeEnd[0];
  rs.endY = edgeEnd[1];

  rs.arrowEndX = arrowEnd[0];
  rs.arrowEndY = arrowEnd[1];

  intersect = r.nodeShapes[ this.getNodeShape( source ) ].intersectLine(
    srcPos.x,
    srcPos.y,
    source.outerWidth(),
    source.outerHeight(),
    p2[0],
    p2[1],
    0
  );

  var arrowStart = math.shortenIntersection(
    intersect, p2,
    r.arrowShapes[ srcArShape ].spacing( edge )
  );
  var edgeStart = math.shortenIntersection(
    intersect, p2,
    r.arrowShapes[ srcArShape ].gap( edge )
  );

  rs.startX = edgeStart[0];
  rs.startY = edgeStart[1];

  rs.arrowStartX = arrowStart[0];
  rs.arrowStartY = arrowStart[1];

  if( hasEndpts ){
    if( !is.number( rs.startX ) || !is.number( rs.startY ) || !is.number( rs.endX ) || !is.number( rs.endY ) ){
      rs.badLine = true;
    } else {
      rs.badLine = false;
    }
  }
};

BRp.getArrowWidth = BRp.getArrowHeight = function( edgeWidth ){
  var cache = this.arrowWidthCache = this.arrowWidthCache || {};

  var cachedVal = cache[ edgeWidth ];
  if( cachedVal ){
    return cachedVal;
  }

  cachedVal =  Math.max( Math.pow( edgeWidth * 13.37, 0.9 ), 29 );
  cache[ edgeWidth ] = cachedVal;

  return cachedVal;
};

module.exports = BRp;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BRp = {};

BRp.getCachedImage = function( url, crossOrigin, onLoad ){
  var r = this;
  var imageCache = r.imageCache = r.imageCache || {};
  var cache = imageCache[ url ];

  if( cache ){
    if( !cache.image.complete ){
      cache.image.addEventListener('load', onLoad);
    }

    return cache.image;
  } else {
    cache = imageCache[ url ] = imageCache[ url ] || {};

    var image = cache.image = new Image(); // eslint-disable-line no-undef
    image.addEventListener('load', onLoad);

    // #1582 safari doesn't load data uris with crossOrigin properly
    // https://bugs.webkit.org/show_bug.cgi?id=123978
    var dataUriPrefix = 'data:';
    var isDataUri = url.substring( 0, dataUriPrefix.length ).toLowerCase() === dataUriPrefix;
    if( !isDataUri ){
      image.crossOrigin = crossOrigin; // prevent tainted canvas
    }

    image.src = url;

    return image;
  }
};

module.exports = BRp;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var BaseRenderer = function( options ){ this.init( options ); };
var BR = BaseRenderer;
var BRp = BR.prototype;

BRp.clientFunctions = [ 'redrawHint', 'render', 'renderTo', 'matchCanvasSize', 'nodeShapeImpl', 'arrowShapeImpl' ];

BRp.init = function( options ){
  var r = this;

  r.options = options;

  r.cy = options.cy;

  r.container = options.cy.container();

  r.selection = [ undefined, undefined, undefined, undefined, 0]; // Coordinates for selection box, plus enabled flag

  r.bezierProjPcts = [ 0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95 ];

  //--Pointer-related data
  r.hoverData = {down: null, last: null,
      downTime: null, triggerMode: null,
      dragging: false,
      initialPan: [ null, null ], capture: false};

  r.dragData = {possibleDragElements: []};

  r.touchData = {
    start: null, capture: false,

    // These 3 fields related to tap, taphold events
    startPosition: [ null, null, null, null, null, null ],
    singleTouchStartTime: null,
    singleTouchMoved: true,

    now: [ null, null, null, null, null, null ],
    earlier: [ null, null, null, null, null, null ]
  };

  r.redraws = 0;
  r.showFps = options.showFps;

  r.hideEdgesOnViewport = options.hideEdgesOnViewport;
  r.hideLabelsOnViewport = options.hideLabelsOnViewport;
  r.textureOnViewport = options.textureOnViewport;
  r.wheelSensitivity = options.wheelSensitivity;
  r.motionBlurEnabled = options.motionBlur; // on by default
  r.forcedPixelRatio = options.pixelRatio;
  r.motionBlur = options.motionBlur; // for initial kick off
  r.motionBlurOpacity = options.motionBlurOpacity;
  r.motionBlurTransparency = 1 - r.motionBlurOpacity;
  r.motionBlurPxRatio = 1;
  r.mbPxRBlurry = 1; //0.8;
  r.minMbLowQualFrames = 4;
  r.fullQualityMb = false;
  r.clearedForMotionBlur = [];
  r.desktopTapThreshold = options.desktopTapThreshold;
  r.desktopTapThreshold2 = options.desktopTapThreshold * options.desktopTapThreshold;
  r.touchTapThreshold = options.touchTapThreshold;
  r.touchTapThreshold2 = options.touchTapThreshold * options.touchTapThreshold;
  r.tapholdDuration = 500;

  r.bindings = [];
  r.beforeRenderCallbacks = [];
  r.beforeRenderPriorities = { // higher priority execs before lower one
    animations:   400,
    eleCalcs:     300,
    eleTxrDeq:    200,
    lyrTxrDeq:    100
  };

  r.registerNodeShapes();
  r.registerArrowShapes();
  r.registerCalculationListeners();
  r.load();
};

BRp.notify = function( params ){
  var types;
  var r = this;

  // the renderer can't be notified after it's destroyed
  if( this.destroyed ){ return; }

  if( is.array( params.type ) ){
    types = params.type;

  } else {
    types = [ params.type ];
  }

  var has = {};
  for( var i = 0; i < types.length; i++ ){
    var type = types[ i ];

    has[ type ] = true;
  } // for

  if( has['destroy'] ){
    r.destroy();
    return;
  }

  if( has['add'] || has['remove'] || has['load'] || has['style'] ){
    r.updateCachedZSortedEles();
  }

  if( has['viewport'] ){
    r.redrawHint( 'select', true );
  }

  if( has['load'] || has['resize'] ){
    r.invalidateContainerClientCoordsCache();
    r.matchCanvasSize( r.container );
  }

  r.redrawHint( 'eles', true );
  r.redrawHint( 'drag', true );

  this.startRenderLoop();

  this.redraw();
};

BRp.destroy = function(){
  var r = this;

  r.destroyed = true;

  r.cy.stopAnimationLoop();

  for( var i = 0; i < r.bindings.length; i++ ){
    var binding = r.bindings[ i ];
    var b = binding;
    var tgt = b.target;

    ( tgt.off || tgt.removeEventListener ).apply( tgt, b.args );
  }

  r.bindings = [];
  r.beforeRenderCallbacks = [];
  r.onUpdateEleCalcsFns = [];

  if( r.removeObserver ){
    r.removeObserver.disconnect();
  }

  if( r.styleObserver ){
    r.styleObserver.disconnect();
  }

  if( r.labelCalcDiv ){
    try {
      document.body.removeChild( r.labelCalcDiv ); // eslint-disable-line no-undef
    } catch( e ){
      // ie10 issue #1014
    }
  }
};

[
  __webpack_require__( 85 ),
  __webpack_require__( 86 ),
  __webpack_require__( 87 ),
  __webpack_require__( 89 ),
  __webpack_require__( 90 ),
  __webpack_require__( 91 )
].forEach( function( props ){
  util.extend( BRp, props );
} );

module.exports = BR;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var Event = __webpack_require__( 13 );

var BRp = {};

BRp.registerBinding = function( target, event, handler, useCapture ){
  var args = Array.prototype.slice.apply( arguments, [1] ); // copy
  var b = this.binder( target );

  return b.on.apply( b, args );
};

BRp.binder = function( tgt ){
  var r = this;

  var tgtIsDom = tgt === window || tgt === document || tgt === document.body || is.domElement( tgt );

  if( r.supportsPassiveEvents == null ){

    // from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
    var supportsPassive = false;
    try {
      var opts = Object.defineProperty( {}, 'passive', {
        get: function(){
          supportsPassive = true;
        }
      } );

      window.addEventListener( 'test', null, opts );
    } catch( err ){}

    r.supportsPassiveEvents = supportsPassive;
  }

  var on = function( event, handler, useCapture ){
    var args = Array.prototype.slice.call( arguments );

    if( tgtIsDom && r.supportsPassiveEvents ){ // replace useCapture w/ opts obj
      args[2] = {
        capture: useCapture != null ? useCapture : false,
        passive: false,
        once: false
      };
    }

    r.bindings.push({
      target: tgt,
      args: args
    });

    ( tgt.addEventListener || tgt.on ).apply( tgt, args );

    return this;
  };

  return {
    on: on,
    addEventListener: on,
    addListener: on,
    bind: on
  };
};

BRp.nodeIsDraggable = function( node ){
  return (
    node
    && node.isNode()
    && !node.locked()
    && node.grabbable()
  );
};

BRp.nodeIsGrabbable = function( node ){
  return (
    this.nodeIsDraggable( node )
    && node.pstyle( 'opacity' ).value !== 0
    && node.pstyle( 'visibility' ).value === 'visible'
    && node.pstyle( 'display' ).value === 'element'
  );
};

BRp.load = function(){
  var r = this;

  var triggerEvents = function( target, names, e, props ){
    if( target == null ){
      target = r.cy;
    }

    for( var i = 0; i < names.length; i++ ){
      var name = names[ i ];

      var event = new Event( e, util.extend( { type: name }, props ) );
      target.trigger( event );
    }
  };

  var isMultSelKeyDown = function( e ){
    return e.shiftKey || e.metaKey || e.ctrlKey; // maybe e.altKey
  };

  var allowPanningPassthrough = function( down, downs ){
    var allowPassthrough = true;

    if( r.cy.hasCompoundNodes() && down && down.isEdge() ){
      // a compound node below the edge => no passthrough panning
      for( var i = 0; downs && i < downs.length; i++ ){
        var down = downs[i];

        if( down.isNode() && down.isParent() ){
          allowPassthrough = false;
          break;
        }
      }
    } else {
      allowPassthrough = true;
    }

    return allowPassthrough;
  };

  var getDragListIds = function( opts ){
    var listHasId;

    if( opts.addToList && r.cy.hasCompoundNodes() ){ // only needed for compound graphs
      if( !opts.addToList.hasId ){ // build ids lookup if doesn't already exist
        opts.addToList.hasId = {};

        for( var i = 0; i < opts.addToList.length; i++ ){
          var ele = opts.addToList[ i ];

          opts.addToList.hasId[ ele.id() ] = true;
        }
      }

      listHasId = opts.addToList.hasId;
    }

    return listHasId || {};
  };

  var setGrabbed = function( ele ){
    ele[0]._private.grabbed = true;
  };

  var setFreed = function( ele ){
    ele[0]._private.grabbed = false;
  };

  var setInDragLayer = function( ele ){
    ele[0]._private.rscratch.inDragLayer = true;
  };

  var setOutDragLayer = function( ele ){
    ele[0]._private.rscratch.inDragLayer = false;
  };

  var setGrabTarget = function( ele ){
    ele[0]._private.rscratch.isGrabTarget = true;
  };

  var removeGrabTarget = function( ele ){
    ele[0]._private.rscratch.isGrabTarget = false;
  };

  var addToDragList = function( ele, opts ){
    var listHasId = getDragListIds( opts );

    if( !listHasId[ ele.id() ] ){
      opts.addToList.push( ele );
      listHasId[ ele.id() ] = true;

      setGrabbed( ele );
    }
  };

  // helper function to determine which child nodes and inner edges
  // of a compound node to be dragged as well as the grabbed and selected nodes
  var addDescendantsToDrag = function( node, opts ){
    if( !node.cy().hasCompoundNodes() ){
      return;
    }

    if( opts.inDragLayer == null && opts.addToList == null ){ return; } // nothing to do

    var innerNodes = node.descendants();

    if( opts.inDragLayer ){
      innerNodes.forEach( setInDragLayer );
      innerNodes.connectedEdges().forEach( setInDragLayer );
    }

    if( opts.addToList ){
      innerNodes.forEach(function( ele ){
        addToDragList( ele, opts );
      });
    }
  };

  // adds the given nodes and its neighbourhood to the drag layer
  var addNodesToDrag = function( nodes, opts ){
    opts = opts || {};

    var hasCompoundNodes = nodes.cy().hasCompoundNodes();

    if( opts.inDragLayer ){
      nodes.forEach( setInDragLayer );

      nodes.neighborhood().stdFilter(function( ele ){
        return !hasCompoundNodes || ele.isEdge();
      }).forEach( setInDragLayer );
    }

    if( opts.addToList ){
      nodes.forEach(function( ele ){
        addToDragList( ele, opts );
      });
    }

    addDescendantsToDrag( nodes, opts ); // always add to drag

    // also add nodes and edges related to the topmost ancestor
    updateAncestorsInDragLayer( nodes, {
      inDragLayer: opts.inDragLayer
    } );

    r.updateCachedGrabbedEles();
  };

  var addNodeToDrag = addNodesToDrag;

  var freeDraggedElements = function( grabbedEles ){
    if( !grabbedEles ){ return; }

    grabbedEles.hasId = {}; // clear the id list

    // just go over all elements rather than doing a bunch of (possibly expensive) traversals
    r.getCachedZSortedEles().forEach(function( ele ){
      setFreed( ele );
      setOutDragLayer( ele );
      removeGrabTarget( ele );
    });

    r.updateCachedGrabbedEles();
  };

  // helper function to determine which ancestor nodes and edges should go
  // to the drag layer (or should be removed from drag layer).
  var updateAncestorsInDragLayer = function( node, opts ){

    if( opts.inDragLayer == null && opts.addToList == null ){ return; } // nothing to do

    if( !node.cy().hasCompoundNodes() ){
      return;
    }

    // find top-level parent
    var parent = node.ancestors().orphans();

    // no parent node: no nodes to add to the drag layer
    if( parent.same( node ) ){
      return;
    }

    var nodes = parent.descendants().spawnSelf()
      .merge( parent )
      .unmerge( node )
      .unmerge( node.descendants() )
    ;

    var edges = nodes.connectedEdges();

    if( opts.inDragLayer ){
      edges.forEach( setInDragLayer );
      nodes.forEach( setInDragLayer );
    }

    if( opts.addToList ){
      nodes.forEach(function( ele ){
        addToDragList( ele, opts );
      });
    }
  };

  var haveMutationsApi = typeof MutationObserver !== 'undefined';

  // watch for when the cy container is removed from the dom
  if( haveMutationsApi ){
    r.removeObserver = new MutationObserver( function( mutns ){ // eslint-disable-line no-undef
      for( var i = 0; i < mutns.length; i++ ){
        var mutn = mutns[ i ];
        var rNodes = mutn.removedNodes;

        if( rNodes ){ for( var j = 0; j < rNodes.length; j++ ){
          var rNode = rNodes[ j ];

          if( rNode === r.container ){
            r.destroy();
            break;
          }
        } }
      }
    } );

    if( r.container.parentNode ){
      r.removeObserver.observe( r.container.parentNode, { childList: true } );
    }
  } else {
    r.registerBinding( r.container, 'DOMNodeRemoved', function( e ){
      r.destroy();
    } );
  }

  var onResize = util.debounce( function(){
    r.cy.invalidateSize();
    r.invalidateContainerClientCoordsCache();

    r.matchCanvasSize( r.container );
    r.redrawHint( 'eles', true );
    r.redrawHint( 'drag', true );
    r.redraw();
  }, 100 );

  if( haveMutationsApi ){
    r.styleObserver = new MutationObserver( onResize ); // eslint-disable-line no-undef

    r.styleObserver.observe( r.container, { attributes: true } );
  }

  // auto resize
  r.registerBinding( window, 'resize', onResize ); // eslint-disable-line no-undef

  var invalCtnrBBOnScroll = function( domEle ){
    r.registerBinding( domEle, 'scroll', function( e ){
      r.invalidateContainerClientCoordsCache();
    } );
  };

  var bbCtnr = r.cy.container();

  for( ;; ){

    invalCtnrBBOnScroll( bbCtnr );

    if( bbCtnr.parentNode ){
      bbCtnr = bbCtnr.parentNode;
    } else {
      break;
    }

  }

  // stop right click menu from appearing on cy
  r.registerBinding( r.container, 'contextmenu', function( e ){
    e.preventDefault();
  } );

  var inBoxSelection = function(){
    return r.selection[4] !== 0;
  };

  var eventInContainer = function( e ){
    // save cycles if mouse events aren't to be captured
    var containerPageCoords = r.findContainerClientCoords();
    var x = containerPageCoords[0];
    var y = containerPageCoords[1];
    var width = containerPageCoords[2];
    var height = containerPageCoords[3];

    var positions = e.touches ? e.touches : [ e ];
    var atLeastOnePosInside = false;

    for( var i = 0; i < positions.length; i++ ){
      var p = positions[i];

      if( x <= p.clientX && p.clientX <= x + width
        && y <= p.clientY && p.clientY <= y + height
      ){
        atLeastOnePosInside = true;
        break;
      }
    }

    if( !atLeastOnePosInside ){ return false; }

    var container = r.container;
    var target = e.target;
    var tParent = target.parentNode;
    var containerIsTarget = false;

    while( tParent ){
      if( tParent === container ){
        containerIsTarget = true;
        break;
      }

      tParent = tParent.parentNode;
    }

    if( !containerIsTarget ){ return false; } // if target is outisde cy container, then this event is not for us

    return true;
  };

  // Primary key
  r.registerBinding( r.container, 'mousedown', function mousedownHandler( e ){
    if( !eventInContainer(e) ){ return; }

    e.preventDefault();
    r.hoverData.capture = true;
    r.hoverData.which = e.which;

    var cy = r.cy;
    var gpos = [ e.clientX, e.clientY ];
    var pos = r.projectIntoViewport( gpos[0], gpos[1] );
    var select = r.selection;
    var nears = r.findNearestElements( pos[0], pos[1], true, false );
    var near = nears[0];
    var draggedElements = r.dragData.possibleDragElements;

    r.hoverData.mdownPos = pos;
    r.hoverData.mdownGPos = gpos;

    var checkForTaphold = function(){
      r.hoverData.tapholdCancelled = false;

      clearTimeout( r.hoverData.tapholdTimeout );

      r.hoverData.tapholdTimeout = setTimeout( function(){

        if( r.hoverData.tapholdCancelled ){
          return;
        } else {
          var ele = r.hoverData.down;

          if( ele ){
            ele.trigger( new Event( e, {
              type: 'taphold',
              cyPosition: { x: pos[0], y: pos[1] }
            } ) );
          } else {
            cy.trigger( new Event( e, {
              type: 'taphold',
              cyPosition: { x: pos[0], y: pos[1] }
            } ) );
          }
        }

      }, r.tapholdDuration );
    };

    // Right click button
    if( e.which == 3 ){

      r.hoverData.cxtStarted = true;

      var cxtEvt = new Event( e, {
        type: 'cxttapstart',
        cyPosition: { x: pos[0], y: pos[1] }
      } );

      if( near ){
        near.activate();
        near.trigger( cxtEvt );

        r.hoverData.down = near;
      } else {
        cy.trigger( cxtEvt );
      }

      r.hoverData.downTime = (new Date()).getTime();
      r.hoverData.cxtDragged = false;

    // Primary button
    } else if( e.which == 1 ){

      if( near ){
        near.activate();
      }

      // Element dragging
      {
        // If something is under the cursor and it is draggable, prepare to grab it
        if( near != null ){

          if( r.nodeIsGrabbable( near ) ){

            var grabEvent = new Event( e, {
              type: 'grab',
              cyPosition: { x: pos[0], y: pos[1] }
            } );

            setGrabTarget( near );

            if( !near.selected() ){

              draggedElements = r.dragData.possibleDragElements = [];
              addNodeToDrag( near, { addToList: draggedElements } );

              near.trigger( grabEvent );

            } else if( near.selected() ){
              draggedElements = r.dragData.possibleDragElements = [  ];

              var selectedNodes = cy.$( function(){ return this.isNode() && this.selected() && r.nodeIsGrabbable( this ); } );

              addNodesToDrag( selectedNodes, { addToList: draggedElements } );

              near.trigger( grabEvent );
            }

            r.redrawHint( 'eles', true );
            r.redrawHint( 'drag', true );

          }

        }

        r.hoverData.down = near;
        r.hoverData.downs = nears;
        r.hoverData.downTime = (new Date()).getTime();
      }

      triggerEvents( near, [ 'mousedown', 'tapstart', 'vmousedown' ], e, {
        cyPosition: { x: pos[0], y: pos[1] }
      } );

      if( near == null ){
        select[4] = 1;

        r.data.bgActivePosistion = {
          x: pos[0],
          y: pos[1]
        };

        r.redrawHint( 'select', true );

        r.redraw();
      } else if( near.isEdge() ){
        select[4] = 1; // for future pan
      }

      checkForTaphold();

    }

    // Initialize selection box coordinates
    select[0] = select[2] = pos[0];
    select[1] = select[3] = pos[1];

  }, false );

  r.registerBinding( window, 'mousemove', function mousemoveHandler( e ){ // eslint-disable-line no-undef
    var capture = r.hoverData.capture;

    if( !capture && !eventInContainer(e) ){ return; }

    var preventDefault = false;
    var cy = r.cy;
    var zoom = cy.zoom();
    var gpos = [ e.clientX, e.clientY ];
    var pos = r.projectIntoViewport( gpos[0], gpos[1] );
    var mdownPos = r.hoverData.mdownPos;
    var mdownGPos = r.hoverData.mdownGPos;
    var select = r.selection;

    var near = null;
    if( !r.hoverData.draggingEles && !r.hoverData.dragging && !r.hoverData.selecting ){
      near = r.findNearestElement( pos[0], pos[1], true, false );
    }
    var last = r.hoverData.last;
    var down = r.hoverData.down;

    var disp = [ pos[0] - select[2], pos[1] - select[3] ];

    var draggedElements = r.dragData.possibleDragElements;

    var isOverThresholdDrag;

    if( mdownGPos ){
      var dx = gpos[0] - mdownGPos[0];
      var dx2 = dx * dx;
      var dy = gpos[1] - mdownGPos[1];
      var dy2 = dy * dy;
      var dist2 = dx2 + dy2;

      isOverThresholdDrag = dist2 >= r.desktopTapThreshold2;
    }

    var multSelKeyDown = isMultSelKeyDown( e );

    if (isOverThresholdDrag) {
      r.hoverData.tapholdCancelled = true;
    }

    var updateDragDelta = function(){
      var dragDelta = r.hoverData.dragDelta = r.hoverData.dragDelta || [];

      if( dragDelta.length === 0 ){
        dragDelta.push( disp[0] );
        dragDelta.push( disp[1] );
      } else {
        dragDelta[0] += disp[0];
        dragDelta[1] += disp[1];
      }
    };


    preventDefault = true;

    triggerEvents( near, [ 'mousemove', 'vmousemove', 'tapdrag' ], e, {
      cyPosition: { x: pos[0], y: pos[1] }
    } );

    // trigger context drag if rmouse down
    if( r.hoverData.which === 3 ){
      // but only if over threshold
      if( isOverThresholdDrag ){
        var cxtEvt = new Event( e, {
          type: 'cxtdrag',
          cyPosition: { x: pos[0], y: pos[1] }
        } );

        if( down ){
          down.trigger( cxtEvt );
        } else {
          cy.trigger( cxtEvt );
        }

        r.hoverData.cxtDragged = true;

        if( !r.hoverData.cxtOver || near !== r.hoverData.cxtOver ){

          if( r.hoverData.cxtOver ){
            r.hoverData.cxtOver.trigger( new Event( e, {
              type: 'cxtdragout',
              cyPosition: { x: pos[0], y: pos[1] }
            } ) );
          }

          r.hoverData.cxtOver = near;

          if( near ){
            near.trigger( new Event( e, {
              type: 'cxtdragover',
              cyPosition: { x: pos[0], y: pos[1] }
            } ) );
          }

        }
      }

    // Check if we are drag panning the entire graph
    } else if( r.hoverData.dragging ){
      preventDefault = true;

      if( cy.panningEnabled() && cy.userPanningEnabled() ){
        var deltaP;

        if( r.hoverData.justStartedPan ){
          var mdPos = r.hoverData.mdownPos;

          deltaP = {
            x: ( pos[0] - mdPos[0] ) * zoom,
            y: ( pos[1] - mdPos[1] ) * zoom
          };

          r.hoverData.justStartedPan = false;

        } else {
          deltaP = {
            x: disp[0] * zoom,
            y: disp[1] * zoom
          };

        }

        cy.panBy( deltaP );

        r.hoverData.dragged = true;
      }

      // Needs reproject due to pan changing viewport
      pos = r.projectIntoViewport( e.clientX, e.clientY );

    // Checks primary button down & out of time & mouse not moved much
    } else if(
        select[4] == 1 && (down == null || down.isEdge())
    ){

      if( isOverThresholdDrag ){

        if( !r.hoverData.dragging && cy.boxSelectionEnabled() && ( multSelKeyDown || !cy.panningEnabled() || !cy.userPanningEnabled() ) ){
          r.data.bgActivePosistion = undefined;

          if( !r.hoverData.selecting ){
            cy.trigger('boxstart');
          }

          r.hoverData.selecting = true;

          r.redrawHint( 'select', true );
          r.redraw();

        } else if( !r.hoverData.selecting && cy.panningEnabled() && cy.userPanningEnabled() ){
          var allowPassthrough = allowPanningPassthrough( down, r.hoverData.downs );

          if( allowPassthrough ){
            r.hoverData.dragging = true;
            r.hoverData.justStartedPan = true;
            select[4] = 0;

            r.data.bgActivePosistion = math.array2point( mdownPos );

            r.redrawHint( 'select', true );
            r.redraw();
          }
        }

        if( down && down.isEdge() && down.active() ){ down.unactivate(); }

      }

    } else {
      if( down && down.isEdge() && down.active() ){ down.unactivate(); }

      if( ( !down || !down.grabbed() ) && near != last ){

        if( last ){
          triggerEvents( last, [ 'mouseout', 'tapdragout' ], e, {
            cyPosition: { x: pos[0], y: pos[1] }
          } );
        }

        if( near ){
          triggerEvents( near, [ 'mouseover', 'tapdragover' ], e, {
            cyPosition: { x: pos[0], y: pos[1] }
          } );
        }

        r.hoverData.last = near;
      }

      if( down && r.nodeIsDraggable( down ) ){

        if( isOverThresholdDrag ){ // then drag

          var justStartedDrag = !r.dragData.didDrag;

          if( justStartedDrag ){
            r.redrawHint( 'eles', true );
          }

          r.dragData.didDrag = true; // indicate that we actually did drag the node

          var toTrigger = [];

          // now, add the elements to the drag layer if not done already
          if( !r.hoverData.draggingEles ){
            addNodesToDrag( cy.collection( draggedElements ), { inDragLayer: true } );
          }

          for( var i = 0; i < draggedElements.length; i++ ){
            var dEle = draggedElements[ i ];

            // Locked nodes not draggable, as well as non-visible nodes
            if( r.nodeIsDraggable( dEle ) && dEle.grabbed() ){
              var dPos = dEle._private.position;

              toTrigger.push( dEle );

              if( is.number( disp[0] ) && is.number( disp[1] ) ){
                var updatePos = !dEle.isParent();

                if( updatePos ){
                  dPos.x += disp[0];
                  dPos.y += disp[1];
                }

                if( justStartedDrag ){
                  var dragDelta = r.hoverData.dragDelta;

                  if( updatePos && dragDelta && is.number( dragDelta[0] ) && is.number( dragDelta[1] ) ){
                    dPos.x += dragDelta[0];
                    dPos.y += dragDelta[1];
                  }
                }
              }

            }
          }

          r.hoverData.draggingEles = true;

          var tcol = cy.collection( toTrigger );

          tcol.updateCompoundBounds();
          tcol.trigger( 'position drag' );

          r.redrawHint( 'drag', true );
          r.redraw();

        } else { // otherwise save drag delta for when we actually start dragging so the relative grab pos is constant
          updateDragDelta();
        }
      }

      // prevent the dragging from triggering text selection on the page
      preventDefault = true;
    }

    select[2] = pos[0]; select[3] = pos[1];

    if( preventDefault ){
      if( e.stopPropagation ) e.stopPropagation();
      if( e.preventDefault ) e.preventDefault();
      return false;
    }
  }, false );

  r.registerBinding( window, 'mouseup', function mouseupHandler( e ){ // eslint-disable-line no-undef
    var capture = r.hoverData.capture;
    if( !capture ){ return; }
    r.hoverData.capture = false;

    var cy = r.cy; var pos = r.projectIntoViewport( e.clientX, e.clientY ); var select = r.selection;
    var near = r.findNearestElement( pos[0], pos[1], true, false );
    var draggedElements = r.dragData.possibleDragElements; var down = r.hoverData.down;
    var multSelKeyDown = isMultSelKeyDown( e );

    if( r.data.bgActivePosistion ){
      r.redrawHint( 'select', true );
      r.redraw();
    }

    r.hoverData.tapholdCancelled = true;

    r.data.bgActivePosistion = undefined; // not active bg now

    if( down ){
      down.unactivate();
    }

    if( r.hoverData.which === 3 ){
      var cxtEvt = new Event( e, {
        type: 'cxttapend',
        cyPosition: { x: pos[0], y: pos[1] }
      } );

      if( down ){
        down.trigger( cxtEvt );
      } else {
        cy.trigger( cxtEvt );
      }

      if( !r.hoverData.cxtDragged ){
        var cxtTap = new Event( e, {
          type: 'cxttap',
          cyPosition: { x: pos[0], y: pos[1] }
        } );

        if( down ){
          down.trigger( cxtTap );
        } else {
          cy.trigger( cxtTap );
        }
      }

      r.hoverData.cxtDragged = false;
      r.hoverData.which = null;

    } else if( r.hoverData.which === 1 ){

      // Deselect all elements if nothing is currently under the mouse cursor and we aren't dragging something
      if( (down == null) // not mousedown on node
        && !r.dragData.didDrag // didn't move the node around
        && !r.hoverData.selecting // not box selection
        && !r.hoverData.dragged // didn't pan
        && !isMultSelKeyDown( e )
      ){

        cy.$( function(){
          return this.selected();
        } ).unselect();

        if( draggedElements.length > 0 ){
          r.redrawHint( 'eles', true );
        }

        r.dragData.possibleDragElements = draggedElements = [];
      }

      triggerEvents( near, [ 'mouseup', 'tapend', 'vmouseup' ], e, {
        cyPosition: { x: pos[0], y: pos[1] }
      } );

      if(
        !r.dragData.didDrag // didn't move a node around
        && !r.hoverData.dragged // didn't pan
        && !r.hoverData.selecting // not box selection
      ){
        triggerEvents( down, ['click', 'tap', 'vclick'], e, {
          cyPosition: { x: pos[0], y: pos[1] }
        } );
      }

      // Single selection
      if( near == down && !r.dragData.didDrag && !r.hoverData.selecting ){
        if( near != null && near._private.selectable ){

          if( r.hoverData.dragging ){
            // if panning, don't change selection state
          } else if( cy.selectionType() === 'additive' || multSelKeyDown ){
            if( near.selected() ){
              near.unselect();
            } else {
              near.select();
            }
          } else {
            if( !multSelKeyDown ){
              cy.$( ':selected' ).unmerge( near ).unselect();
              near.select();
            }
          }

          r.redrawHint( 'eles', true );
        }
      }

      if( r.hoverData.selecting ){
        var box = cy.collection( r.getAllInBox( select[0], select[1], select[2], select[3] ) );

        r.redrawHint( 'select', true );

        if( box.length > 0 ){
          r.redrawHint( 'eles', true );
        }

        cy.trigger('boxend');

        var eleWouldBeSelected = function( ele ){ return ele.selectable() && !ele.selected(); };

        if( cy.selectionType() === 'additive' ){
          box
            .trigger('box')
            .stdFilter( eleWouldBeSelected )
              .select()
              .trigger('boxselect')
          ;
        } else {
          if( !multSelKeyDown ){
            cy.$( ':selected' ).unmerge( box ).unselect();
          }

          box
            .trigger('box')
            .stdFilter( eleWouldBeSelected )
              .select()
              .trigger('boxselect')
          ;
        }

        // always need redraw in case eles unselectable
        r.redraw();

      }

      // Cancel drag pan
      if( r.hoverData.dragging ){
        r.hoverData.dragging = false;

        r.redrawHint( 'select', true );
        r.redrawHint( 'eles', true );

        r.redraw();
      }

      if( !select[4] ) {
        r.redrawHint('drag', true);
        r.redrawHint('eles', true);

        var downWasGrabbed = down && down.grabbed();

        freeDraggedElements( draggedElements );

        if( downWasGrabbed ){ down.trigger('free'); }
      }

    } // else not right mouse

    select[4] = 0; r.hoverData.down = null;

    r.hoverData.cxtStarted = false;
    r.hoverData.draggingEles = false;
    r.hoverData.selecting = false;
    r.dragData.didDrag = false;
    r.hoverData.dragged = false;
    r.hoverData.dragDelta = [];
    r.hoverData.mdownPos = null;
    r.hoverData.mdownGPos = null;

  }, false );

  var wheelHandler = function( e ){


    if( r.scrollingPage ){ return; } // while scrolling, ignore wheel-to-zoom

    var cy = r.cy;
    var pos = r.projectIntoViewport( e.clientX, e.clientY );
    var rpos = [ pos[0] * cy.zoom() + cy.pan().x,
                  pos[1] * cy.zoom() + cy.pan().y ];

    if( r.hoverData.draggingEles || r.hoverData.dragging || r.hoverData.cxtStarted || inBoxSelection() ){ // if pan dragging or cxt dragging, wheel movements make no zoom
      e.preventDefault();
      return;
    }

    if( cy.panningEnabled() && cy.userPanningEnabled() && cy.zoomingEnabled() && cy.userZoomingEnabled() ){
      e.preventDefault();

      r.data.wheelZooming = true;
      clearTimeout( r.data.wheelTimeout );
      r.data.wheelTimeout = setTimeout( function(){
        r.data.wheelZooming = false;

        r.redrawHint( 'eles', true );
        r.redraw();
      }, 150 );

      var diff;

      if( e.deltaY != null ){
        diff = e.deltaY / -250;
      } else if( e.wheelDeltaY != null ){
        diff = e.wheelDeltaY / 1000;
      } else {
        diff = e.wheelDelta / 1000;
      }

      diff = diff * r.wheelSensitivity;

      var needsWheelFix = e.deltaMode === 1;
      if( needsWheelFix ){ // fixes slow wheel events on ff/linux and ff/windows
        diff *= 33;
      }

      cy.zoom( {
        level: cy.zoom() * Math.pow( 10, diff ),
        renderedPosition: { x: rpos[0], y: rpos[1] }
      } );
    }

  };

  // Functions to help with whether mouse wheel should trigger zooming
  // --
  r.registerBinding( r.container, 'wheel', wheelHandler, true );

  // disable nonstandard wheel events
  // r.registerBinding(r.container, 'mousewheel', wheelHandler, true);
  // r.registerBinding(r.container, 'DOMMouseScroll', wheelHandler, true);
  // r.registerBinding(r.container, 'MozMousePixelScroll', wheelHandler, true); // older firefox

  r.registerBinding( window, 'scroll', function scrollHandler( e ){ // eslint-disable-line no-undef
    r.scrollingPage = true;

    clearTimeout( r.scrollingPageTimeout );
    r.scrollingPageTimeout = setTimeout( function(){
      r.scrollingPage = false;
    }, 250 );
  }, true );

  // Functions to help with handling mouseout/mouseover on the Cytoscape container
  // Handle mouseout on Cytoscape container
  r.registerBinding( r.container, 'mouseout', function mouseOutHandler( e ){
    var pos = r.projectIntoViewport( e.clientX, e.clientY );

    r.cy.trigger( new Event( e, {
      type: 'mouseout',
      cyPosition: { x: pos[0], y: pos[1] }
    } ) );
  }, false );

  r.registerBinding( r.container, 'mouseover', function mouseOverHandler( e ){
    var pos = r.projectIntoViewport( e.clientX, e.clientY );

    r.cy.trigger( new Event( e, {
      type: 'mouseover',
      cyPosition: { x: pos[0], y: pos[1] }
    } ) );
  }, false );

  var f1x1, f1y1, f2x1, f2y1; // starting points for pinch-to-zoom
  var distance1, distance1Sq; // initial distance between finger 1 and finger 2 for pinch-to-zoom
  var center1, modelCenter1; // center point on start pinch to zoom
  var offsetLeft, offsetTop;
  var containerWidth, containerHeight;
  var twoFingersStartInside;

  var distance = function( x1, y1, x2, y2 ){
    return Math.sqrt( (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) );
  };

  var distanceSq = function( x1, y1, x2, y2 ){
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  };

  var touchstartHandler;
  r.registerBinding( r.container, 'touchstart', touchstartHandler = function( e ){
    if( !eventInContainer(e) ){ return; }

    r.touchData.capture = true;
    r.data.bgActivePosistion = undefined;

    var cy = r.cy;
    var now = r.touchData.now;
    var earlier = r.touchData.earlier;

    if( e.touches[0] ){ var pos = r.projectIntoViewport( e.touches[0].clientX, e.touches[0].clientY ); now[0] = pos[0]; now[1] = pos[1]; }
    if( e.touches[1] ){ var pos = r.projectIntoViewport( e.touches[1].clientX, e.touches[1].clientY ); now[2] = pos[0]; now[3] = pos[1]; }
    if( e.touches[2] ){ var pos = r.projectIntoViewport( e.touches[2].clientX, e.touches[2].clientY ); now[4] = pos[0]; now[5] = pos[1]; }

    // record starting points for pinch-to-zoom
    if( e.touches[1] ){

      freeDraggedElements( r.dragData.touchDragEles );

      var offsets = r.findContainerClientCoords();
      offsetLeft = offsets[0];
      offsetTop = offsets[1];
      containerWidth = offsets[2];
      containerHeight = offsets[3];

      f1x1 = e.touches[0].clientX - offsetLeft;
      f1y1 = e.touches[0].clientY - offsetTop;

      f2x1 = e.touches[1].clientX - offsetLeft;
      f2y1 = e.touches[1].clientY - offsetTop;

      twoFingersStartInside =
           0 <= f1x1 && f1x1 <= containerWidth
        && 0 <= f2x1 && f2x1 <= containerWidth
        && 0 <= f1y1 && f1y1 <= containerHeight
        && 0 <= f2y1 && f2y1 <= containerHeight
      ;

      var pan = cy.pan();
      var zoom = cy.zoom();

      distance1 = distance( f1x1, f1y1, f2x1, f2y1 );
      distance1Sq = distanceSq( f1x1, f1y1, f2x1, f2y1 );
      center1 = [ (f1x1 + f2x1) / 2, (f1y1 + f2y1) / 2 ];
      modelCenter1 = [
        (center1[0] - pan.x) / zoom,
        (center1[1] - pan.y) / zoom
      ];

      // consider context tap
      var cxtDistThreshold = 200;
      var cxtDistThresholdSq = cxtDistThreshold * cxtDistThreshold;
      if( distance1Sq < cxtDistThresholdSq && !e.touches[2] ){

        var near1 = r.findNearestElement( now[0], now[1], true, true );
        var near2 = r.findNearestElement( now[2], now[3], true, true );

        if( near1 && near1.isNode() ){
          near1.activate().trigger( new Event( e, {
            type: 'cxttapstart',
            cyPosition: { x: now[0], y: now[1] }
          } ) );
          r.touchData.start = near1;

        } else if( near2 && near2.isNode() ){
          near2.activate().trigger( new Event( e, {
            type: 'cxttapstart',
            cyPosition: { x: now[0], y: now[1] }
          } ) );
          r.touchData.start = near2;

        } else {
          cy.trigger( new Event( e, {
            type: 'cxttapstart',
            cyPosition: { x: now[0], y: now[1] }
          } ) );
        }

        if( r.touchData.start ){ r.touchData.start._private.grabbed = false; }
        r.touchData.cxt = true;
        r.touchData.cxtDragged = false;
        r.data.bgActivePosistion = undefined;

        r.redraw();
        return;

      }

    }

    if( e.touches[2] ){
      // ignore
    } else if( e.touches[1] ){
      // ignore
    } else if( e.touches[0] ){
      var nears = r.findNearestElements( now[0], now[1], true, true );
      var near = nears[0];

      if( near != null ){
        near.activate();

        r.touchData.start = near;
        r.touchData.starts = nears;

        if( r.nodeIsGrabbable( near ) ){

          var draggedEles = r.dragData.touchDragEles = [];

          r.redrawHint( 'eles', true );
          r.redrawHint( 'drag', true );

          if( near.selected() ){
            // reset drag elements, since near will be added again

            var selectedNodes = cy.$( function(){
              return this.selected() && r.nodeIsGrabbable( this );
            } );

            addNodesToDrag( selectedNodes, { addToList: draggedEles } );
          } else {
            addNodeToDrag( near, { addToList: draggedEles } );
          }

          setGrabTarget( near );

          near.trigger( new Event( e, {
            type: 'grab',
            cyPosition: { x: now[0], y: now[1] }
          } ) );
        }
      }

      triggerEvents( near, [ 'touchstart', 'tapstart', 'vmousedown' ], e, {
        cyPosition: { x: now[0], y: now[1] }
      } );

      if( near == null ){
        r.data.bgActivePosistion = {
          x: pos[0],
          y: pos[1]
        };

        r.redrawHint( 'select', true );
        r.redraw();
      }


      // Tap, taphold
      // -----

      r.touchData.singleTouchMoved = false;
      r.touchData.singleTouchStartTime = +new Date();

      clearTimeout( r.touchData.tapholdTimeout );
      r.touchData.tapholdTimeout = setTimeout( function(){
        if(
            r.touchData.singleTouchMoved === false
            && !r.pinching // if pinching, then taphold unselect shouldn't take effect
            && !r.touchData.selecting // box selection shouldn't allow taphold through
        ){
          triggerEvents( r.touchData.start, [ 'taphold' ], e, {
            cyPosition: { x: now[0], y: now[1] }
          } );

          if( !r.touchData.start ){
            cy.$( ':selected' ).unselect();
          }

        }
      }, r.tapholdDuration );
    }

    if( e.touches.length >= 1 ){
      var sPos = r.touchData.startPosition = [];

      for( var i = 0; i < now.length; i++ ){
        sPos[i] = earlier[i] = now[i];
      }

      var touch0 = e.touches[0];

      r.touchData.startGPosition = [ touch0.clientX, touch0.clientY ];
    }

  }, false );

  var touchmoveHandler;
  r.registerBinding(window, 'touchmove', touchmoveHandler = function(e) { // eslint-disable-line no-undef
    var capture = r.touchData.capture;

    if( !capture && !eventInContainer(e) ){ return; }

    var select = r.selection;
    var cy = r.cy;
    var now = r.touchData.now;
    var earlier = r.touchData.earlier;
    var zoom = cy.zoom();

    if( e.touches[0] ){ var pos = r.projectIntoViewport( e.touches[0].clientX, e.touches[0].clientY ); now[0] = pos[0]; now[1] = pos[1]; }
    if( e.touches[1] ){ var pos = r.projectIntoViewport( e.touches[1].clientX, e.touches[1].clientY ); now[2] = pos[0]; now[3] = pos[1]; }
    if( e.touches[2] ){ var pos = r.projectIntoViewport( e.touches[2].clientX, e.touches[2].clientY ); now[4] = pos[0]; now[5] = pos[1]; }

    var startGPos = r.touchData.startGPosition;
    var isOverThresholdDrag;

    if( capture && e.touches[0] && startGPos ){
      var disp = []; for (var j=0;j<now.length;j++) { disp[j] = now[j] - earlier[j]; }
      var dx = e.touches[0].clientX - startGPos[0];
      var dx2 = dx * dx;
      var dy = e.touches[0].clientY - startGPos[1];
      var dy2 = dy * dy;
      var dist2 = dx2 + dy2;

      isOverThresholdDrag = dist2 >= r.touchTapThreshold2;
    }

    // context swipe cancelling
    if( capture && r.touchData.cxt ){
      e.preventDefault();

      var f1x2 = e.touches[0].clientX - offsetLeft, f1y2 = e.touches[0].clientY - offsetTop;
      var f2x2 = e.touches[1].clientX - offsetLeft, f2y2 = e.touches[1].clientY - offsetTop;
      // var distance2 = distance( f1x2, f1y2, f2x2, f2y2 );
      var distance2Sq = distanceSq( f1x2, f1y2, f2x2, f2y2 );
      var factorSq = distance2Sq / distance1Sq;

      var distThreshold = 150;
      var distThresholdSq = distThreshold * distThreshold;
      var factorThreshold = 1.5;
      var factorThresholdSq = factorThreshold * factorThreshold;

      // cancel ctx gestures if the distance b/t the fingers increases
      if( factorSq >= factorThresholdSq || distance2Sq >= distThresholdSq ){
        r.touchData.cxt = false;

        r.data.bgActivePosistion = undefined;

        r.redrawHint( 'select', true );

        var cxtEvt = new Event( e, {
          type: 'cxttapend',
          cyPosition: { x: now[0], y: now[1] }
        } );

        if( r.touchData.start ){
          r.touchData.start
            .unactivate()
            .trigger( cxtEvt )
          ;

          r.touchData.start = null;
        } else {
          cy.trigger( cxtEvt );
        }
      }

    }

    // context swipe
    if( capture && r.touchData.cxt ){
      var cxtEvt = new Event( e, {
        type: 'cxtdrag',
        cyPosition: { x: now[0], y: now[1] }
      } );
      r.data.bgActivePosistion = undefined;
      r.redrawHint( 'select', true );

      if( r.touchData.start ){
        r.touchData.start.trigger( cxtEvt );
      } else {
        cy.trigger( cxtEvt );
      }

      if( r.touchData.start ){ r.touchData.start._private.grabbed = false; }
      r.touchData.cxtDragged = true;

      var near = r.findNearestElement( now[0], now[1], true, true );

      if( !r.touchData.cxtOver || near !== r.touchData.cxtOver ){

        if( r.touchData.cxtOver ){
          r.touchData.cxtOver.trigger( new Event( e, {
            type: 'cxtdragout',
            cyPosition: { x: now[0], y: now[1] }
          } ) );
        }

        r.touchData.cxtOver = near;

        if( near ){
          near.trigger( new Event( e, {
            type: 'cxtdragover',
            cyPosition: { x: now[0], y: now[1] }
          } ) );

        }

      }

    // box selection
    } else if( capture && e.touches[2] && cy.boxSelectionEnabled() ){
      e.preventDefault();

      r.data.bgActivePosistion = undefined;

      this.lastThreeTouch = +new Date();

      if( !r.touchData.selecting ){
        cy.trigger('boxstart');
      }

      r.touchData.selecting = true;

      r.redrawHint( 'select', true );

      if( !select || select.length === 0 || select[0] === undefined ){
        select[0] = (now[0] + now[2] + now[4]) / 3;
        select[1] = (now[1] + now[3] + now[5]) / 3;
        select[2] = (now[0] + now[2] + now[4]) / 3 + 1;
        select[3] = (now[1] + now[3] + now[5]) / 3 + 1;
      } else {
        select[2] = (now[0] + now[2] + now[4]) / 3;
        select[3] = (now[1] + now[3] + now[5]) / 3;
      }

      select[4] = 1;
      r.touchData.selecting = true;

      r.redraw();

    // pinch to zoom
    } else if( capture && e.touches[1] && cy.zoomingEnabled() && cy.panningEnabled() && cy.userZoomingEnabled() && cy.userPanningEnabled() ){ // two fingers => pinch to zoom
      e.preventDefault();

      r.data.bgActivePosistion = undefined;
      r.redrawHint( 'select', true );

      var draggedEles = r.dragData.touchDragEles;
      if( draggedEles ){
        r.redrawHint( 'drag', true );

        for( var i = 0; i < draggedEles.length; i++ ){
          var de_p = draggedEles[i]._private;

          de_p.grabbed = false;
          de_p.rscratch.inDragLayer = false;
        }
      }

      // (x2, y2) for fingers 1 and 2
      var f1x2 = e.touches[0].clientX - offsetLeft, f1y2 = e.touches[0].clientY - offsetTop;
      var f2x2 = e.touches[1].clientX - offsetLeft, f2y2 = e.touches[1].clientY - offsetTop;


      var distance2 = distance( f1x2, f1y2, f2x2, f2y2 );
      // var distance2Sq = distanceSq( f1x2, f1y2, f2x2, f2y2 );
      // var factor = Math.sqrt( distance2Sq ) / Math.sqrt( distance1Sq );
      var factor = distance2 / distance1;

      if( twoFingersStartInside ){
        // delta finger1
        var df1x = f1x2 - f1x1;
        var df1y = f1y2 - f1y1;

        // delta finger 2
        var df2x = f2x2 - f2x1;
        var df2y = f2y2 - f2y1;

        // translation is the normalised vector of the two fingers movement
        // i.e. so pinching cancels out and moving together pans
        var tx = (df1x + df2x) / 2;
        var ty = (df1y + df2y) / 2;

        // adjust factor by the speed multiplier
        // var speed = 1.5;
        // if( factor > 1 ){
        //   factor = (factor - 1) * speed + 1;
        // } else {
        //   factor = 1 - (1 - factor) * speed;
        // }

        // now calculate the zoom
        var zoom1 = cy.zoom();
        var zoom2 = zoom1 * factor;
        var pan1 = cy.pan();

        // the model center point converted to the current rendered pos
        var ctrx = modelCenter1[0] * zoom1 + pan1.x;
        var ctry = modelCenter1[1] * zoom1 + pan1.y;

        var pan2 = {
          x: -zoom2 / zoom1 * (ctrx - pan1.x - tx) + ctrx,
          y: -zoom2 / zoom1 * (ctry - pan1.y - ty) + ctry
        };

        // remove dragged eles
        if( r.touchData.start && r.touchData.start.active() ){
          var draggedEles = r.dragData.touchDragEles;

          freeDraggedElements( draggedEles );

          r.redrawHint( 'drag', true );
          r.redrawHint( 'eles', true );

          r.touchData.start
            .unactivate()
            .trigger( 'free' )
          ;
        }

        cy.viewport( {
          zoom: zoom2,
          pan: pan2,
          cancelOnFailedZoom: true
        } );

        distance1 = distance2;
        f1x1 = f1x2;
        f1y1 = f1y2;
        f2x1 = f2x2;
        f2y1 = f2y2;

        r.pinching = true;
      }

      // Re-project
      if( e.touches[0] ){ var pos = r.projectIntoViewport( e.touches[0].clientX, e.touches[0].clientY ); now[0] = pos[0]; now[1] = pos[1]; }
      if( e.touches[1] ){ var pos = r.projectIntoViewport( e.touches[1].clientX, e.touches[1].clientY ); now[2] = pos[0]; now[3] = pos[1]; }
      if( e.touches[2] ){ var pos = r.projectIntoViewport( e.touches[2].clientX, e.touches[2].clientY ); now[4] = pos[0]; now[5] = pos[1]; }

    } else if( e.touches[0] ){
      var start = r.touchData.start;
      var last = r.touchData.last;
      var near;

      if( !r.hoverData.draggingEles && !r.swipePanning ){
        near = r.findNearestElement( now[0], now[1], true, true );
      }

      if( capture && start != null ){
        e.preventDefault();
      }

      // dragging nodes
      if( capture && start != null && r.nodeIsDraggable( start ) ){

        if( isOverThresholdDrag ){ // then dragging can happen
          var draggedEles = r.dragData.touchDragEles;
          var justStartedDrag = !r.dragData.didDrag;

          if( justStartedDrag ){
            addNodesToDrag( cy.collection( draggedEles ), { inDragLayer: true } );
          }

          for( var k = 0; k < draggedEles.length; k++ ){
            var draggedEle = draggedEles[ k ];

            if( r.nodeIsDraggable( draggedEle ) && draggedEle.grabbed() ){
              r.dragData.didDrag = true;
              var dPos = draggedEle._private.position;
              var updatePos = !draggedEle.isParent();

              if( updatePos && is.number( disp[0] ) && is.number( disp[1] ) ){
                dPos.x += disp[0];
                dPos.y += disp[1];
              }

              if( justStartedDrag ){
                r.redrawHint( 'eles', true );

                var dragDelta = r.touchData.dragDelta;

                if( updatePos && dragDelta && is.number( dragDelta[0] ) && is.number( dragDelta[1] ) ){
                  dPos.x += dragDelta[0];
                  dPos.y += dragDelta[1];
                }

              }
            }
          }

          var tcol = cy.collection( draggedEles );

          tcol.updateCompoundBounds();
          tcol.trigger( 'position drag' );

          r.hoverData.draggingEles = true;

          r.redrawHint( 'drag', true );

          if(
               r.touchData.startPosition[0] == earlier[0]
            && r.touchData.startPosition[1] == earlier[1]
          ){

            r.redrawHint( 'eles', true );
          }

          r.redraw();
        } else { // otherise keep track of drag delta for later
          var dragDelta = r.touchData.dragDelta = r.touchData.dragDelta || [];

          if( dragDelta.length === 0 ){
            dragDelta.push( disp[0] );
            dragDelta.push( disp[1] );
          } else {
            dragDelta[0] += disp[0];
            dragDelta[1] += disp[1];
          }
        }
      }

      // touchmove
      {
        triggerEvents( (start || near), [ 'touchmove', 'tapdrag', 'vmousemove' ], e, {
          cyPosition: { x: now[0], y: now[1] }
        } );

        if( ( !start || !start.grabbed() ) && near != last ){
          if( last ){ last.trigger( new Event( e, { type: 'tapdragout', cyPosition: { x: now[0], y: now[1] } } ) ); }
          if( near ){ near.trigger( new Event( e, { type: 'tapdragover', cyPosition: { x: now[0], y: now[1] } } ) ); }
        }

        r.touchData.last = near;
      }

      // check to cancel taphold
      if( capture ){
        for( var i = 0; i < now.length; i++ ){
          if( now[ i ]
            && r.touchData.startPosition[ i ]
            && isOverThresholdDrag ){

            r.touchData.singleTouchMoved = true;
          }
        }
      }

      // panning
      if(
          capture
          && ( start == null || start.isEdge() )
          && cy.panningEnabled() && cy.userPanningEnabled()
      ){

        var allowPassthrough = allowPanningPassthrough( start, r.touchData.starts );

        if( allowPassthrough ){
          e.preventDefault();

          if( r.swipePanning ){
            cy.panBy( {
              x: disp[0] * zoom,
              y: disp[1] * zoom
            } );

          } else if( isOverThresholdDrag ){
            r.swipePanning = true;

            cy.panBy( {
              x: dx * zoom,
              y: dy * zoom
            } );

            if( start ){
              start.unactivate();

              if( !r.data.bgActivePosistion ){
                r.data.bgActivePosistion = math.array2point( r.touchData.startPosition );
              }

              r.redrawHint( 'select', true );

              r.touchData.start = null;
            }
          }

        }

        // Re-project
        var pos = r.projectIntoViewport( e.touches[0].clientX, e.touches[0].clientY );
        now[0] = pos[0]; now[1] = pos[1];
      }
    }

    for( var j = 0; j < now.length; j++ ){ earlier[ j ] = now[ j ]; }
    //r.redraw();

  }, false );

  var touchcancelHandler;
  r.registerBinding( window, 'touchcancel', touchcancelHandler = function( e ){ // eslint-disable-line no-undef
    var start = r.touchData.start;

    r.touchData.capture = false;

    if( start ){
      start.unactivate();
    }
  } );

  var touchendHandler;
  r.registerBinding( window, 'touchend', touchendHandler = function( e ){ // eslint-disable-line no-undef
    var start = r.touchData.start;

    var capture = r.touchData.capture;

    if( capture ){
      r.touchData.capture = false;

      e.preventDefault();
    } else {
      return;
    }

    var select = r.selection;

    r.swipePanning = false;
    r.hoverData.draggingEles = false;

    var cy = r.cy;
    var zoom = cy.zoom();
    var now = r.touchData.now;
    var earlier = r.touchData.earlier;

    if( e.touches[0] ){ var pos = r.projectIntoViewport( e.touches[0].clientX, e.touches[0].clientY ); now[0] = pos[0]; now[1] = pos[1]; }
    if( e.touches[1] ){ var pos = r.projectIntoViewport( e.touches[1].clientX, e.touches[1].clientY ); now[2] = pos[0]; now[3] = pos[1]; }
    if( e.touches[2] ){ var pos = r.projectIntoViewport( e.touches[2].clientX, e.touches[2].clientY ); now[4] = pos[0]; now[5] = pos[1]; }

    if( start ){
      start.unactivate();
    }

    var ctxTapend;
    if( r.touchData.cxt ){
      ctxTapend = new Event( e, {
        type: 'cxttapend',
        cyPosition: { x: now[0], y: now[1] }
      } );

      if( start ){
        start.trigger( ctxTapend );
      } else {
        cy.trigger( ctxTapend );
      }

      if( !r.touchData.cxtDragged ){
        var ctxTap = new Event( e, {
          type: 'cxttap',
          cyPosition: { x: now[0], y: now[1] }
        } );

        if( start ){
          start.trigger( ctxTap );
        } else {
          cy.trigger( ctxTap );
        }

      }

      if( r.touchData.start ){ r.touchData.start._private.grabbed = false; }
      r.touchData.cxt = false;
      r.touchData.start = null;

      r.redraw();
      return;
    }

    // no more box selection if we don't have three fingers
    if( !e.touches[2] && cy.boxSelectionEnabled() && r.touchData.selecting ){
      r.touchData.selecting = false;

      var box = cy.collection( r.getAllInBox( select[0], select[1], select[2], select[3] ) );

      select[0] = undefined;
      select[1] = undefined;
      select[2] = undefined;
      select[3] = undefined;
      select[4] = 0;

      r.redrawHint( 'select', true );

      cy.trigger('boxend');

      var eleWouldBeSelected = function( ele ){ return ele.selectable() && !ele.selected(); };

      box
        .trigger('box')
        .stdFilter( eleWouldBeSelected )
          .select()
          .trigger('boxselect')
      ;

      if( box.nonempty() ){
        r.redrawHint( 'eles', true );
      }

      r.redraw();
    }

    if( start != null ){
      start.unactivate();
    }

    if( e.touches[2] ){
      r.data.bgActivePosistion = undefined;
      r.redrawHint( 'select', true );
    } else if( e.touches[1] ){
      // ignore
    } else if( e.touches[0] ){
      // ignore

    // Last touch released
    } else if( !e.touches[0] ){

      r.data.bgActivePosistion = undefined;
      r.redrawHint( 'select', true );

      var draggedEles = r.dragData.touchDragEles;

      if( start != null ){

        var startWasGrabbed = start._private.grabbed;

        freeDraggedElements( draggedEles );

        r.redrawHint( 'drag', true );
        r.redrawHint( 'eles', true );

        if( startWasGrabbed ){
          start.trigger( 'free' );
        }

        triggerEvents( start, [ 'touchend', 'tapend', 'vmouseup', 'tapdragout' ], e, {
          cyPosition: { x: now[0], y: now[1] }
        } );

        start.unactivate();

        r.touchData.start = null;

      } else {
        var near = r.findNearestElement( now[0], now[1], true, true );

        triggerEvents( near, [ 'touchend', 'tapend', 'vmouseup', 'tapdragout' ], e, {
          cyPosition: { x: now[0], y: now[1] }
        } );

      }

      var dx = r.touchData.startPosition[0] - now[0];
      var dx2 = dx * dx;
      var dy = r.touchData.startPosition[1] - now[1];
      var dy2 = dy * dy;
      var dist2 = dx2 + dy2;
      var rdist2 = dist2 * zoom * zoom;

      // Prepare to select the currently touched node, only if it hasn't been dragged past a certain distance
      if( start != null
          && !r.dragData.didDrag // didn't drag nodes around
          && start._private.selectable
          && rdist2 < r.touchTapThreshold2
          && !r.pinching // pinch to zoom should not affect selection
      ){

        if( cy.selectionType() === 'single' ){
          cy.$( ':selected' ).unmerge( start ).unselect();
          start.select();
        } else {
          if( start.selected() ){
            start.unselect();
          } else {
            start.select();
          }
        }

        r.redrawHint( 'eles', true );
      }

      // Tap event, roughly same as mouse click event for touch
      if( !r.touchData.singleTouchMoved ){
        triggerEvents( start, [ 'tap', 'vclick' ], e, {
          cyPosition: { x: now[0], y: now[1] }
        } );
      }

      r.touchData.singleTouchMoved = true;
    }

    for( var j = 0; j < now.length; j++ ){ earlier[ j ] = now[ j ]; }

    r.dragData.didDrag = false; // reset for next mousedown

    if( e.touches.length === 0 ){
      r.touchData.dragDelta = [];
      r.touchData.startPosition = null;
      r.touchData.startGPosition = null;
    }

    if( e.touches.length < 2 ){
      r.pinching = false;
      r.redrawHint( 'eles', true );
      r.redraw();
    }

    //r.redraw();

  }, false );

  // fallback compatibility layer for ms pointer events
  if( typeof TouchEvent === 'undefined' ){

    var pointers = [];

    var makeTouch = function( e ){
      return {
        clientX: e.clientX,
        clientY: e.clientY,
        force: 1,
        identifier: e.pointerId,
        pageX: e.pageX,
        pageY: e.pageY,
        radiusX: e.width / 2,
        radiusY: e.height / 2,
        screenX: e.screenX,
        screenY: e.screenY,
        target: e.target
      };
    };

    var makePointer = function( e ){
      return {
        event: e,
        touch: makeTouch( e )
      };
    };

    var addPointer = function( e ){
      pointers.push( makePointer( e ) );
    };

    var removePointer = function( e ){
      for( var i = 0; i < pointers.length; i++ ){
        var p = pointers[ i ];

        if( p.event.pointerId === e.pointerId ){
          pointers.splice( i, 1 );
          return;
        }
      }
    };

    var updatePointer = function( e ){
      var p = pointers.filter( function( p ){
        return p.event.pointerId === e.pointerId;
      } )[0];

      p.event = e;
      p.touch = makeTouch( e );
    };

    var addTouchesToEvent = function( e ){
      e.touches = pointers.map( function( p ){
        return p.touch;
      } );
    };

    r.registerBinding( r.container, 'pointerdown', function( e ){
      if( e.pointerType === 'mouse' ){ return; } // mouse already handled

      e.preventDefault();

      addPointer( e );

      addTouchesToEvent( e );
      touchstartHandler( e );
    } );

    r.registerBinding( r.container, 'pointerup', function( e ){
      if( e.pointerType === 'mouse' ){ return; } // mouse already handled

      removePointer( e );

      addTouchesToEvent( e );
      touchendHandler( e );
    } );

    r.registerBinding( r.container, 'pointercancel', function( e ){
      if( e.pointerType === 'mouse' ){ return; } // mouse already handled

      removePointer( e );

      addTouchesToEvent( e );
      touchcancelHandler( e );
    } );

    r.registerBinding( r.container, 'pointermove', function( e ){
      if( e.pointerType === 'mouse' ){ return; } // mouse already handled

      e.preventDefault();

      updatePointer( e );

      addTouchesToEvent( e );
      touchmoveHandler( e );
    } );

  }
};

module.exports = BRp;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );

var BRp = {};

BRp.generatePolygon = function( name, points ){
  return ( this.nodeShapes[ name ] = {
    renderer: this,

    name: name,

    points: points,

    draw: function( context, centerX, centerY, width, height ){
      this.renderer.nodeShapeImpl( 'polygon', context, centerX, centerY, width, height, this.points );
    },

    intersectLine: function( nodeX, nodeY, width, height, x, y, padding ){
      return math.polygonIntersectLine(
          x, y,
          this.points,
          nodeX,
          nodeY,
          width / 2, height / 2,
          padding )
        ;
    },

    checkPoint: function( x, y, padding, width, height, centerX, centerY ){
      return math.pointInsidePolygon( x, y, this.points,
        centerX, centerY, width, height, [0, -1], padding )
      ;
    }
  } );
};

BRp.generateEllipse = function(){
  return ( this.nodeShapes['ellipse'] = {
    renderer: this,

    name: 'ellipse',

    draw: function( context, centerX, centerY, width, height ){
      this.renderer.nodeShapeImpl( this.name, context, centerX, centerY, width, height );
    },

    intersectLine: function( nodeX, nodeY, width, height, x, y, padding ){
      return math.intersectLineEllipse(
        x, y,
        nodeX,
        nodeY,
        width / 2 + padding,
        height / 2 + padding )
      ;
    },

    checkPoint: function( x, y, padding, width, height, centerX, centerY ){
      x -= centerX;
      y -= centerY;

      x /= (width / 2 + padding);
      y /= (height / 2 + padding);

      return x * x + y * y <= 1;
    }
  } );
};

BRp.generateRoundRectangle = function(){
  return ( this.nodeShapes['roundrectangle'] = {
    renderer: this,

    name: 'roundrectangle',

    points: math.generateUnitNgonPointsFitToSquare( 4, 0 ),

    draw: function( context, centerX, centerY, width, height ){
      this.renderer.nodeShapeImpl( this.name, context, centerX, centerY, width, height );
    },

    intersectLine: function( nodeX, nodeY, width, height, x, y, padding ){
      return math.roundRectangleIntersectLine(
        x, y,
        nodeX,
        nodeY,
        width, height,
        padding )
      ;
    },

    // Looks like the width passed into this function is actually the total width / 2
    checkPoint: function(
      x, y, padding, width, height, centerX, centerY ){

      var cornerRadius = math.getRoundRectangleRadius( width, height );

      // Check hBox
      if( math.pointInsidePolygon( x, y, this.points,
        centerX, centerY, width, height - 2 * cornerRadius, [0, -1], padding ) ){
        return true;
      }

      // Check vBox
      if( math.pointInsidePolygon( x, y, this.points,
        centerX, centerY, width - 2 * cornerRadius, height, [0, -1], padding ) ){
        return true;
      }

      var checkInEllipse = function( x, y, centerX, centerY, width, height, padding ){
        x -= centerX;
        y -= centerY;

        x /= (width / 2 + padding);
        y /= (height / 2 + padding);

        return (x * x + y * y <= 1);
      };


      // Check top left quarter circle
      if( checkInEllipse( x, y,
        centerX - width / 2 + cornerRadius,
        centerY - height / 2 + cornerRadius,
        cornerRadius * 2, cornerRadius * 2, padding ) ){

        return true;
      }

      // Check top right quarter circle
      if( checkInEllipse( x, y,
        centerX + width / 2 - cornerRadius,
        centerY - height / 2 + cornerRadius,
        cornerRadius * 2, cornerRadius * 2, padding ) ){

        return true;
      }

      // Check bottom right quarter circle
      if( checkInEllipse( x, y,
        centerX + width / 2 - cornerRadius,
        centerY + height / 2 - cornerRadius,
        cornerRadius * 2, cornerRadius * 2, padding ) ){

        return true;
      }

      // Check bottom left quarter circle
      if( checkInEllipse( x, y,
        centerX - width / 2 + cornerRadius,
        centerY + height / 2 - cornerRadius,
        cornerRadius * 2, cornerRadius * 2, padding ) ){

        return true;
      }

      return false;
    }
  } );
};

BRp.registerNodeShapes = function(){
  var nodeShapes = this.nodeShapes = {};
  var renderer = this;

  this.generateEllipse();

  this.generatePolygon( 'triangle', math.generateUnitNgonPointsFitToSquare( 3, 0 ) );

  this.generatePolygon( 'rectangle', math.generateUnitNgonPointsFitToSquare( 4, 0 ) );
  nodeShapes[ 'square' ] = nodeShapes[ 'rectangle' ];

  this.generateRoundRectangle();

  this.generatePolygon( 'diamond', [
    0, 1,
    1, 0,
    0, -1,
    -1, 0
  ] );

  this.generatePolygon( 'pentagon', math.generateUnitNgonPointsFitToSquare( 5, 0 ) );

  this.generatePolygon( 'hexagon', math.generateUnitNgonPointsFitToSquare( 6, 0 ) );

  this.generatePolygon( 'heptagon', math.generateUnitNgonPointsFitToSquare( 7, 0 ) );

  this.generatePolygon( 'octagon', math.generateUnitNgonPointsFitToSquare( 8, 0 ) );

  var star5Points = new Array( 20 );
  {
    var outerPoints = math.generateUnitNgonPoints( 5, 0 );
    var innerPoints = math.generateUnitNgonPoints( 5, Math.PI / 5 );

    // Outer radius is 1; inner radius of star is smaller
    var innerRadius = 0.5 * (3 - Math.sqrt( 5 ));
    innerRadius *= 1.57;

    for( var i = 0;i < innerPoints.length / 2;i++ ){
      innerPoints[ i * 2] *= innerRadius;
      innerPoints[ i * 2 + 1] *= innerRadius;
    }

    for( var i = 0;i < 20 / 4;i++ ){
      star5Points[ i * 4] = outerPoints[ i * 2];
      star5Points[ i * 4 + 1] = outerPoints[ i * 2 + 1];

      star5Points[ i * 4 + 2] = innerPoints[ i * 2];
      star5Points[ i * 4 + 3] = innerPoints[ i * 2 + 1];
    }
  }

  star5Points = math.fitPolygonToSquare( star5Points );

  this.generatePolygon( 'star', star5Points );

  this.generatePolygon( 'vee', [
    -1, -1,
    0, -0.333,
    1, -1,
    0, 1
  ] );

  this.generatePolygon( 'rhomboid', [
    -1, -1,
    0.333, -1,
    1, 1,
    -0.333, 1
  ] );

  nodeShapes.makePolygon = function( points ){

    // use caching on user-specified polygons so they are as fast as native shapes

    var key = points.join( '$' );
    var name = 'polygon-' + key;
    var shape;

    if( (shape = this[ name ]) ){ // got cached shape
      return shape;
    }

    // create and cache new shape
    return renderer.generatePolygon( name, points );
  };

};

module.exports = BRp;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var BRp = {};

BRp.timeToRender = function(){
  return this.redrawTotalTime / this.redrawCount;
};

BRp.redraw = function( options ){
  options = options || util.staticEmptyObject();

  var r = this;

  if( r.averageRedrawTime === undefined ){ r.averageRedrawTime = 0; }
  if( r.lastRedrawTime === undefined ){ r.lastRedrawTime = 0; }
  if( r.lastDrawTime === undefined ){ r.lastDrawTime = 0; }

  r.requestedFrame = true;
  r.renderOptions = options;
};

BRp.beforeRender = function( fn, priority ){
  // the renderer can't add tick callbacks when destroyed
  if( this.destroyed ){ return; }

  priority = priority || 0;

  var cbs = this.beforeRenderCallbacks;

  cbs.push({ fn: fn, priority: priority });

  // higher priority callbacks executed first
  cbs.sort(function( a, b ){ return b.priority - a.priority; });
};

var beforeRenderCallbacks = function( r, willDraw, startTime ){
  var cbs = r.beforeRenderCallbacks;

  for( var i = 0; i < cbs.length; i++ ){
    cbs[i].fn( willDraw, startTime );
  }
};

BRp.startRenderLoop = function(){
  var r = this;

  if( r.renderLoopStarted ){
    return;
  } else {
    r.renderLoopStarted = true;
  }

  var renderFn = function( requestTime ){
    if( r.destroyed ){ return; }

    if( r.requestedFrame && !r.skipFrame ){
      beforeRenderCallbacks( r, true, requestTime );

      var startTime = util.performanceNow();

      r.render( r.renderOptions );

      var endTime = r.lastDrawTime = util.performanceNow();

      if( r.averageRedrawTime === undefined ){
        r.averageRedrawTime = endTime - startTime;
      }

      if( r.redrawCount === undefined ){
        r.redrawCount = 0;
      }

      r.redrawCount++;

      if( r.redrawTotalTime === undefined ){
        r.redrawTotalTime = 0;
      }

      var duration = endTime - startTime;

      r.redrawTotalTime += duration;
      r.lastRedrawTime = duration;

      // use a weighted average with a bias from the previous average so we don't spike so easily
      r.averageRedrawTime = r.averageRedrawTime / 2 + duration / 2;

      r.requestedFrame = false;
    } else {
      beforeRenderCallbacks( r, false, requestTime );
    }

    r.skipFrame = false;

    util.requestAnimationFrame( renderFn );
  };

  util.requestAnimationFrame( renderFn );

};

module.exports = BRp;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CRp = {};

var impl;

CRp.arrowShapeImpl = function( name ){
  return ( impl || (impl = {
    'polygon': function( context, points ){
      for( var i = 0; i < points.length; i++ ){
        var pt = points[ i ];

        context.lineTo( pt.x, pt.y );
      }
    },

    'triangle-backcurve': function( context, points, controlPoint ){
      var firstPt;

      for( var i = 0; i < points.length; i++ ){
        var pt = points[ i ];

        if( i === 0 ){
          firstPt = pt;
        }

        context.lineTo( pt.x, pt.y );
      }

      context.quadraticCurveTo( controlPoint.x, controlPoint.y, firstPt.x, firstPt.y );
    },

    'triangle-tee': function( context, trianglePoints, teePoints ){
      if( context.beginPath ){ context.beginPath(); }

        var triPts = trianglePoints;
        for( var i = 0; i < triPts.length; i++ ){
          var pt = triPts[ i ];

          context.lineTo( pt.x, pt.y );
        }

      if( context.closePath ){ context.closePath(); }

      if( context.beginPath ){ context.beginPath(); }

        var teePts = teePoints;
        var firstTeePt = teePoints[0];
        context.moveTo( firstTeePt.x, firstTeePt.y );

        for( var i = 0; i < teePts.length; i++ ){
          var pt = teePts[ i ];

          context.lineTo( pt.x, pt.y );
        }

      if( context.closePath ){ context.closePath(); }
    },

    'circle': function( context, rx, ry, r ){
      context.arc( rx, ry, r, 0, Math.PI * 2, false );
    }
  }) )[ name ];
};

module.exports = CRp;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CRp = {};

CRp.drawEdge = function( context, edge, shiftToOriginWithBb, drawLabel, drawOverlayInstead ){
  var rs = edge._private.rscratch;
  var usePaths = this.usePaths();

  // if bezier ctrl pts can not be calculated, then die
  if( rs.badLine || isNaN(rs.allpts[0]) ){ // isNaN in case edge is impossible and browser bugs (e.g. safari)
    return;
  }

  if( !edge.visible() ){ return; }

  var bb;
  if( shiftToOriginWithBb ){
    bb = shiftToOriginWithBb;

    context.translate( -bb.x1, -bb.y1 );
  }

  var overlayPadding = edge.pstyle( 'overlay-padding' ).pfValue;
  var overlayOpacity = edge.pstyle( 'overlay-opacity' ).value;
  var overlayColor = edge.pstyle( 'overlay-color' ).value;

  // Edge color & opacity
  if( drawOverlayInstead ){

    if( overlayOpacity === 0 ){ // exit early if no overlay
      return;
    }

    this.strokeStyle( context, overlayColor[0], overlayColor[1], overlayColor[2], overlayOpacity );
    context.lineCap = 'round';

    if( rs.edgeType == 'self' && !usePaths ){
      context.lineCap = 'butt';
    }

  } else {
    var lineColor = edge.pstyle( 'line-color' ).value;

    this.strokeStyle( context, lineColor[0], lineColor[1], lineColor[2], edge.pstyle( 'opacity' ).value );

    context.lineCap = 'butt';
  }

  context.lineJoin = 'round';

  var edgeWidth = edge.pstyle( 'width' ).pfValue + (drawOverlayInstead ? 2 * overlayPadding : 0);
  var lineStyle = drawOverlayInstead ? 'solid' : edge.pstyle( 'line-style' ).value;
  context.lineWidth = edgeWidth;

  var shadowBlur = edge.pstyle( 'shadow-blur' ).pfValue;
  var shadowOpacity = edge.pstyle( 'shadow-opacity' ).value;
  var shadowColor = edge.pstyle( 'shadow-color' ).value;
  var shadowOffsetX = edge.pstyle( 'shadow-offset-x' ).pfValue;
  var shadowOffsetY = edge.pstyle( 'shadow-offset-y' ).pfValue;

  this.shadowStyle( context,  shadowColor, drawOverlayInstead ? 0 : shadowOpacity, shadowBlur, shadowOffsetX, shadowOffsetY );

  this.drawEdgePath(
    edge,
    context,
    rs.allpts,
    lineStyle,
    edgeWidth
  );

  this.drawArrowheads( context, edge, drawOverlayInstead );

  this.shadowStyle( context, 'transparent', 0 ); // reset for next guy

  if( !drawOverlayInstead ){
    this.drawEdge( context, edge, false, drawLabel, true );
  }

  this.drawElementText( context, edge, drawLabel );

  if( shiftToOriginWithBb ){
    context.translate( bb.x1, bb.y1 );
  }
};


CRp.drawEdgePath = function( edge, context, pts, type, width ){
  var rs = edge._private.rscratch;
  var canvasCxt = context;
  var path;
  var pathCacheHit = false;
  var usePaths = this.usePaths();

  if( usePaths ){
    var pathCacheKey = pts.join( '$' );
    var keyMatches = rs.pathCacheKey && rs.pathCacheKey === pathCacheKey;

    if( keyMatches ){
      path = context = rs.pathCache;
      pathCacheHit = true;
    } else {
      path = context = new Path2D(); // eslint-disable-line no-undef
      rs.pathCacheKey = pathCacheKey;
      rs.pathCache = path;
    }
  }

  if( canvasCxt.setLineDash ){ // for very outofdate browsers
    switch( type ){
      case 'dotted':
        canvasCxt.setLineDash( [ 1, 1 ] );
        break;

      case 'dashed':
        canvasCxt.setLineDash( [ 6, 3 ] );
        break;

      case 'solid':
        canvasCxt.setLineDash( [ ] );
        break;
    }
  }

  if( !pathCacheHit && !rs.badLine ){
    if( context.beginPath ){ context.beginPath(); }
    context.moveTo( pts[0], pts[1] );

    switch( rs.edgeType ){
      case 'bezier':
      case 'self':
      case 'compound':
      case 'multibezier':
        for( var i = 2; i + 3 < pts.length; i += 4 ){
          context.quadraticCurveTo( pts[ i ], pts[ i + 1], pts[ i + 2], pts[ i + 3] );
        }
        break;

      case 'straight':
      case 'segments':
      case 'haystack':
        for( var i = 2; i + 1 < pts.length; i += 2 ){
          context.lineTo( pts[ i ], pts[ i + 1] );
        }
        break;
    }
  }

  context = canvasCxt;
  if( usePaths ){
    context.stroke( path );
  } else {
    context.stroke();
  }

  // reset any line dashes
  if( context.setLineDash ){ // for very outofdate browsers
    context.setLineDash( [ ] );
  }

};

CRp.drawArrowheads = function( context, edge, drawOverlayInstead ){
  if( drawOverlayInstead ){ return; } // don't do anything for overlays

  var rs = edge._private.rscratch;
  var isHaystack = rs.edgeType === 'haystack';

  if( !isHaystack ){
    this.drawArrowhead( context, edge, 'source', rs.arrowStartX, rs.arrowStartY, rs.srcArrowAngle );
  }

  this.drawArrowhead( context, edge, 'mid-target', rs.midX, rs.midY, rs.midtgtArrowAngle );

  this.drawArrowhead( context, edge, 'mid-source', rs.midX, rs.midY, rs.midsrcArrowAngle );

  if( !isHaystack ){
    this.drawArrowhead( context, edge, 'target', rs.arrowEndX, rs.arrowEndY, rs.tgtArrowAngle );
  }
};

CRp.drawArrowhead = function( context, edge, prefix, x, y, angle ){
  if( isNaN( x ) || x == null || isNaN( y ) || y == null || isNaN( angle ) || angle == null ){ return; }

  var self = this;
  var arrowShape = edge.pstyle( prefix + '-arrow-shape' ).value;

  if( arrowShape === 'none' ){
    return;
  }

  var gco = context.globalCompositeOperation;

  var arrowClearFill = edge.pstyle( prefix + '-arrow-fill' ).value === 'hollow' ? 'both' : 'filled';
  var arrowFill = edge.pstyle( prefix + '-arrow-fill' ).value;
  var opacity = edge.pstyle( 'opacity' ).value;

  if( arrowShape === 'half-triangle-overshot' ){
    arrowFill = 'hollow';
    arrowClearFill = 'hollow';
  }

  if( opacity !== 1 || arrowFill === 'hollow' ){ // then extra clear is needed
    context.globalCompositeOperation = 'destination-out';

    self.fillStyle( context, 255, 255, 255, 1 );
    self.strokeStyle( context, 255, 255, 255, 1 );

    self.drawArrowShape( edge, prefix, context,
      arrowClearFill, edge.pstyle( 'width' ).pfValue, edge.pstyle( prefix + '-arrow-shape' ).value,
      x, y, angle
    );

    context.globalCompositeOperation = gco;
  } // otherwise, the opaque arrow clears it for free :)

  var color = edge.pstyle( prefix + '-arrow-color' ).value;
  self.fillStyle( context, color[0], color[1], color[2], opacity );
  self.strokeStyle( context, color[0], color[1], color[2], opacity );

  self.drawArrowShape( edge, prefix, context,
    arrowFill, edge.pstyle( 'width' ).pfValue, edge.pstyle( prefix + '-arrow-shape' ).value,
    x, y, angle
  );
};

CRp.drawArrowShape = function( edge, arrowType, context, fill, edgeWidth, shape, x, y, angle ){
  var r = this;
  var usePaths = this.usePaths();
  var rs = edge._private.rscratch;
  var pathCacheHit = false;
  var path;
  var canvasContext = context;
  var translation = { x: x, y: y };
  var size = this.getArrowWidth( edgeWidth );
  var shapeImpl = r.arrowShapes[ shape ];

  if( usePaths ){
    var pathCacheKey = size + '$' + shape + '$' + angle + '$' + x + '$' + y;
    rs.arrowPathCacheKey = rs.arrowPathCacheKey || {};
    rs.arrowPathCache = rs.arrowPathCache || {};

    var alreadyCached = rs.arrowPathCacheKey[ arrowType ] === pathCacheKey;
    if( alreadyCached ){
      path = context = rs.arrowPathCache[ arrowType ];
      pathCacheHit = true;
    } else {
      path = context = new Path2D(); // eslint-disable-line no-undef
      rs.arrowPathCacheKey[ arrowType ] = pathCacheKey;
      rs.arrowPathCache[ arrowType ] = path;
    }
  }

  if( context.beginPath ){ context.beginPath(); }

  if( !pathCacheHit ){
    shapeImpl.draw( context, size, angle, translation );
  }

  if( !shapeImpl.leavePathOpen && context.closePath ){
    context.closePath();
  }

  context = canvasContext;

  if( fill === 'filled' || fill === 'both' ){
    if( usePaths ){
      context.fill( path );
    } else {
      context.fill();
    }
  }

  if( fill === 'hollow' || fill === 'both' ){
    context.lineWidth = ( shapeImpl.matchEdgeWidth ? edgeWidth : 1 );
    context.lineJoin = 'miter';

    if( usePaths ){
      context.stroke( path );
    } else {
      context.stroke();
    }

  }
};

module.exports = CRp;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );

var CRp = {};

CRp.drawElement = function( context, ele, shiftToOriginWithBb, showLabel ){
  var r = this;

  if( ele.isNode() ){
    r.drawNode( context, ele, shiftToOriginWithBb, showLabel );
  } else {
    r.drawEdge( context, ele, shiftToOriginWithBb, showLabel );
  }
};

CRp.drawCachedElement = function( context, ele, pxRatio, extent ){
  var r = this;
  var bb = ele.boundingBox();

  if( bb.w === 0 || bb.h === 0 ){ return; }

  if( !extent || math.boundingBoxesIntersect( bb, extent ) ){
    var cache = r.data.eleTxrCache.getElement( ele, bb, pxRatio );

    if( cache ){
      context.drawImage( cache.texture.canvas, cache.x, 0, cache.width, cache.height, bb.x1, bb.y1, bb.w, bb.h );
    } else { // if the element is not cacheable, then draw directly
      r.drawElement( context, ele );
    }
  }
};

CRp.drawElements = function( context, eles ){
  var r = this;

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[ i ];

    r.drawElement( context, ele );
  }
};

CRp.drawCachedElements = function( context, eles, pxRatio, extent ){
  var r = this;

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[ i ];

    r.drawCachedElement( context, ele, pxRatio, extent );
  }
};

CRp.drawCachedNodes = function( context, eles, pxRatio, extent ){
  var r = this;

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[ i ];

    if( !ele.isNode() ){ continue; }

    r.drawCachedElement( context, ele, pxRatio, extent );
  }
};

CRp.drawLayeredElements = function( context, eles, pxRatio, extent ){
  var r = this;

  var layers = r.data.lyrTxrCache.getLayers( eles, pxRatio );

  if( layers ){
    for( var i = 0; i < layers.length; i++ ){
      var layer = layers[i];
      var bb = layer.bb;

      if( bb.w === 0 || bb.h === 0 ){ continue; }

      context.drawImage( layer.canvas, bb.x1, bb.y1, bb.w, bb.h );
    }
  } else { // fall back on plain caching if no layers
    r.drawCachedElements( context, eles, pxRatio, extent );
  }
};

module.exports = CRp;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CRp = {};

CRp.safeDrawImage = function( context, img, ix, iy, iw, ih, x, y, w, h ){
  var r = this;

  try {
    context.drawImage( img, ix, iy, iw, ih, x, y, w, h );
  } catch( e ){
    r.redrawHint( 'eles', true );
    r.redrawHint( 'drag', true );

    r.drawingImage = true;

    r.redraw();
  }
};

CRp.drawInscribedImage = function( context, img, node ){
  var r = this;
  var nodeX = node._private.position.x;
  var nodeY = node._private.position.y;
  var fit = node.pstyle( 'background-fit' ).value;
  var xPos = node.pstyle( 'background-position-x' );
  var yPos = node.pstyle( 'background-position-y' );
  var repeat = node.pstyle( 'background-repeat' ).value;
  var nodeW = node.width();
  var nodeH = node.height();
  var rs = node._private.rscratch;
  var clip = node.pstyle( 'background-clip' ).value;
  var shouldClip = clip === 'node';
  var imgOpacity = node.pstyle( 'background-image-opacity' ).value;

  var imgW = img.width || img.cachedW;
  var imgH = img.height || img.cachedH;

  // workaround for broken browsers like ie
  if( null == imgW || null == imgH ){
    document.body.appendChild( img ); // eslint-disable-line no-undef

    imgW = img.cachedW = img.width || img.offsetWidth;
    imgH = img.cachedH = img.height || img.offsetHeight;

    document.body.removeChild( img ); // eslint-disable-line no-undef
  }

  var w = imgW;
  var h = imgH;

  var bgW = node.pstyle( 'background-width' );
  if( bgW.value !== 'auto' ){
    if( bgW.units === '%' ){
      w = bgW.value / 100 * nodeW;
    } else {
      w = bgW.pfValue;
    }
  }

  var bgH = node.pstyle( 'background-height' );
  if( bgH.value !== 'auto' ){
    if( bgH.units === '%' ){
      h = bgH.value / 100 * nodeH;
    } else {
      h = bgH.pfValue;
    }
  }

  if( w === 0 || h === 0 ){
    return; // no point in drawing empty image (and chrome is broken in this case)
  }

  if( fit === 'contain' ){
    var scale = Math.min( nodeW / w, nodeH / h );

    w *= scale;
    h *= scale;

  } else if( fit === 'cover' ){
    var scale = Math.max( nodeW / w, nodeH / h );

    w *= scale;
    h *= scale;
  }

  var x = (nodeX - nodeW / 2); // left
  if( xPos.units === '%' ){
    x += (nodeW - w) * xPos.value / 100;
  } else {
    x += xPos.pfValue;
  }

  var y = (nodeY - nodeH / 2); // top
  if( yPos.units === '%' ){
    y += (nodeH - h) * yPos.value / 100;
  } else {
    y += yPos.pfValue;
  }

  if( rs.pathCache ){
    x -= nodeX;
    y -= nodeY;

    nodeX = 0;
    nodeY = 0;
  }

  var gAlpha = context.globalAlpha;

  context.globalAlpha = imgOpacity;

  if( repeat === 'no-repeat' ){

    if( shouldClip ){
      context.save();

      if( rs.pathCache ){
        context.clip( rs.pathCache );
      } else {
        r.nodeShapes[ r.getNodeShape( node ) ].draw(
          context,
          nodeX, nodeY,
          nodeW, nodeH );

        context.clip();
      }
    }

    r.safeDrawImage( context, img, 0, 0, imgW, imgH, x, y, w, h );

    if( shouldClip ){
      context.restore();
    }
  } else {
    var pattern = context.createPattern( img, repeat );
    context.fillStyle = pattern;

    r.nodeShapes[ r.getNodeShape( node ) ].draw(
        context,
        nodeX, nodeY,
        nodeW, nodeH );

    context.translate( x, y );
    context.fill();
    context.translate( -x, -y );
  }

  context.globalAlpha = gAlpha;

};

module.exports = CRp;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );

var CRp = {};

CRp.eleTextBiggerThanMin = function( ele, scale ){
  if( !scale ){
    var zoom = ele.cy().zoom();
    var pxRatio = this.getPixelRatio();
    var lvl = Math.ceil( math.log2( zoom * pxRatio ) ); // the effective texture level

    scale = Math.pow( 2, lvl );
  }

  var computedSize = ele.pstyle( 'font-size' ).pfValue * scale;
  var minSize = ele.pstyle( 'min-zoomed-font-size' ).pfValue;

  if( computedSize < minSize ){
    return false;
  }

  return true;
};

CRp.drawElementText = function( context, ele, force ){
  var r = this;

  if( force === undefined ){
    if( !r.eleTextBiggerThanMin( ele ) ){ return; }
  } else {
    if( !force ){ return; }
  }

  if( ele.isNode() ){
    var label = ele.pstyle( 'label' );

    if( !label || !label.value ){ return; }

    var textHalign = ele.pstyle( 'text-halign' ).strValue;
    var textValign = ele.pstyle( 'text-valign' ).strValue;

    switch( textHalign ){
      case 'left':
        context.textAlign = 'right';
        break;

      case 'right':
        context.textAlign = 'left';
        break;

      default: // e.g. center
        context.textAlign = 'center';
    }

    context.textBaseline = 'bottom';
  } else {
    var label = ele.pstyle( 'label' );
    var srcLabel = ele.pstyle( 'source-label' );
    var tgtLabel = ele.pstyle( 'target-label' );

    if(
      ( !label || !label.value )
      && ( !srcLabel || !srcLabel.value )
      && ( !tgtLabel || !tgtLabel.value )
    ){
      return;
    }

    context.textAlign = 'center';
    context.textBaseline = 'bottom';
  }


  r.drawText( context, ele );

  if( ele.isEdge() ){
    r.drawText( context, ele, 'source' );

    r.drawText( context, ele, 'target' );
  }
};

CRp.drawNodeText = CRp.drawEdgeText = CRp.drawElementText;

CRp.getFontCache = function( context ){
  var cache;

  this.fontCaches = this.fontCaches || [];

  for( var i = 0; i < this.fontCaches.length; i++ ){
    cache = this.fontCaches[ i ];

    if( cache.context === context ){
      return cache;
    }
  }

  cache = {
    context: context
  };
  this.fontCaches.push( cache );

  return cache;
};

// set up canvas context with font
// returns transformed text string
CRp.setupTextStyle = function( context, ele ){
  // Font style
  var parentOpacity = ele.effectiveOpacity();
  var labelStyle = ele.pstyle( 'font-style' ).strValue;
  var labelSize = ele.pstyle( 'font-size' ).pfValue + 'px';
  var labelFamily = ele.pstyle( 'font-family' ).strValue;
  var labelWeight = ele.pstyle( 'font-weight' ).strValue;
  var opacity = ele.pstyle( 'text-opacity' ).value * ele.pstyle( 'opacity' ).value * parentOpacity;
  var outlineOpacity = ele.pstyle( 'text-outline-opacity' ).value * opacity;
  var color = ele.pstyle( 'color' ).value;
  var outlineColor = ele.pstyle( 'text-outline-color' ).value;
  var shadowBlur = ele.pstyle( 'text-shadow-blur' ).pfValue;
  var shadowOpacity = ele.pstyle( 'text-shadow-opacity' ).value;
  var shadowColor = ele.pstyle( 'text-shadow-color' ).value;
  var shadowOffsetX = ele.pstyle( 'text-shadow-offset-x' ).pfValue;
  var shadowOffsetY = ele.pstyle( 'text-shadow-offset-y' ).pfValue;

  var fontCacheKey = ele._private.fontKey;
  var cache = this.getFontCache( context );

  if( cache.key !== fontCacheKey ){
    context.font = labelStyle + ' ' + labelWeight + ' ' + labelSize + ' ' + labelFamily;

    cache.key = fontCacheKey;
  }

  // Calculate text draw position based on text alignment

  // so text outlines aren't jagged
  context.lineJoin = 'round';

  this.fillStyle( context, color[ 0 ], color[ 1 ], color[ 2 ], opacity );

  this.strokeStyle( context, outlineColor[ 0 ], outlineColor[ 1 ], outlineColor[ 2 ], outlineOpacity );

  this.shadowStyle( context, shadowColor, shadowOpacity, shadowBlur, shadowOffsetX, shadowOffsetY );
};

function roundRect( ctx, x, y, width, height, radius ){
  var radius = radius || 5;
  ctx.beginPath();
  ctx.moveTo( x + radius, y );
  ctx.lineTo( x + width - radius, y );
  ctx.quadraticCurveTo( x + width, y, x + width, y + radius );
  ctx.lineTo( x + width, y + height - radius );
  ctx.quadraticCurveTo( x + width, y + height, x + width - radius, y + height );
  ctx.lineTo( x + radius, y + height );
  ctx.quadraticCurveTo( x, y + height, x, y + height - radius );
  ctx.lineTo( x, y + radius );
  ctx.quadraticCurveTo( x, y, x + radius, y );
  ctx.closePath();
  ctx.fill();
}

// Draw text
CRp.drawText = function( context, ele, prefix ){
  var _p = ele._private;
  var rscratch = _p.rscratch;
  var parentOpacity = ele.effectiveOpacity();
  if( parentOpacity === 0 || ele.pstyle( 'text-opacity' ).value === 0 ){
    return;
  }

  var textX = util.getPrefixedProperty( rscratch, 'labelX', prefix );
  var textY = util.getPrefixedProperty( rscratch, 'labelY', prefix );
  var text = this.getLabelText( ele, prefix );

  if( text != null && text !== '' && !isNaN( textX ) && !isNaN( textY ) ){
    this.setupTextStyle( context, ele );

    var pdash = prefix ? prefix + '-' : '';
    var textW = util.getPrefixedProperty( rscratch, 'labelWidth', prefix );
    var textH = util.getPrefixedProperty( rscratch, 'labelHeight', prefix );
    var textAngle = util.getPrefixedProperty( rscratch, 'labelAngle', prefix );
    var marginX = ele.pstyle( pdash + 'text-margin-x' ).pfValue;
    var marginY = ele.pstyle( pdash + 'text-margin-y' ).pfValue;

    var isEdge = ele.isEdge();
    var isNode = ele.isNode();

    var halign = ele.pstyle( 'text-halign' ).value;
    var valign = ele.pstyle( 'text-valign' ).value;

    if( isEdge ){
      halign = 'center';
      valign = 'center';
    }

    textX += marginX;
    textY += marginY;

    var rotation = ele.pstyle( 'text-rotation' );
    var theta;

    if( rotation.strValue === 'autorotate' ){
      theta = isEdge ? textAngle : 0;
    } else if( rotation.strValue === 'none' ){
      theta = 0;
    } else {
      theta = rotation.pfValue;
    }

    if( theta !== 0 ){
      var orgTextX = textX;
      var orgTextY = textY;

      context.translate( orgTextX, orgTextY );
      context.rotate( theta );

      textX = 0;
      textY = 0;
    }

    switch( valign ){
      case 'top':
        break;
      case 'center':
        textY += textH / 2;
        break;
      case 'bottom':
        textY += textH;
        break;
    }

    var backgroundOpacity = ele.pstyle( 'text-background-opacity' ).value;
    var borderOpacity = ele.pstyle( 'text-border-opacity' ).value;
    var textBorderWidth = ele.pstyle( 'text-border-width' ).pfValue;

    if( backgroundOpacity > 0 || ( textBorderWidth > 0 && borderOpacity > 0 ) ){
      var bgX = textX;

      switch( halign ){
        case 'left':
          bgX -= textW;
          break;
        case 'center':
          bgX -= textW / 2;
          break;
        case 'right':
          break;
      }

      var bgY = textY - textH;

      if( backgroundOpacity > 0 ){
        var textFill = context.fillStyle;
        var textBackgroundColor = ele.pstyle( 'text-background-color' ).value;

        context.fillStyle = 'rgba(' + textBackgroundColor[ 0 ] + ',' + textBackgroundColor[ 1 ] + ',' + textBackgroundColor[ 2 ] + ',' + backgroundOpacity * parentOpacity + ')';
        var styleShape = ele.pstyle( 'text-background-shape' ).strValue;
        if( styleShape == 'roundrectangle' ){
          roundRect( context, bgX, bgY, textW, textH, 2 );
        } else {
          context.fillRect( bgX, bgY, textW, textH );
        }
        context.fillStyle = textFill;
      }

      if( textBorderWidth > 0 && borderOpacity > 0 ){
        var textStroke = context.strokeStyle;
        var textLineWidth = context.lineWidth;
        var textBorderColor = ele.pstyle( 'text-border-color' ).value;
        var textBorderStyle = ele.pstyle( 'text-border-style' ).value;

        context.strokeStyle = 'rgba(' + textBorderColor[ 0 ] + ',' + textBorderColor[ 1 ] + ',' + textBorderColor[ 2 ] + ',' + borderOpacity * parentOpacity + ')';
        context.lineWidth = textBorderWidth;

        if( context.setLineDash ){ // for very outofdate browsers
          switch( textBorderStyle ){
            case 'dotted':
              context.setLineDash( [ 1, 1 ] );
              break;
            case 'dashed':
              context.setLineDash( [ 4, 2 ] );
              break;
            case 'double':
              context.lineWidth = textBorderWidth / 4; // 50% reserved for white between the two borders
              context.setLineDash( [] );
              break;
            case 'solid':
              context.setLineDash( [] );
              break;
          }
        }

        context.strokeRect( bgX, bgY, textW, textH );

        if( textBorderStyle === 'double' ){
          var whiteWidth = textBorderWidth / 2;

          context.strokeRect( bgX + whiteWidth, bgY + whiteWidth, textW - whiteWidth * 2, textH - whiteWidth * 2 );
        }

        if( context.setLineDash ){ // for very outofdate browsers
          context.setLineDash( [] );
        }
        context.lineWidth = textLineWidth;
        context.strokeStyle = textStroke;
      }

    }

    var lineWidth = 2 * ele.pstyle( 'text-outline-width' ).pfValue; // *2 b/c the stroke is drawn centred on the middle

    if( lineWidth > 0 ){
      context.lineWidth = lineWidth;
    }

    if( ele.pstyle( 'text-wrap' ).value === 'wrap' ){
      var lines = util.getPrefixedProperty( rscratch, 'labelWrapCachedLines', prefix );
      var lineHeight = textH / lines.length;

      switch( valign ){
        case 'top':
          textY -= ( lines.length - 1 ) * lineHeight;
          break;
        case 'center':
        case 'bottom':
          textY -= ( lines.length - 1 ) * lineHeight;
          break;
      }

      for( var l = 0; l < lines.length; l++ ){
        if( lineWidth > 0 ){
          context.strokeText( lines[ l ], textX, textY );
        }

        context.fillText( lines[ l ], textX, textY );

        textY += lineHeight;
      }

    } else {
      if( lineWidth > 0 ){
        context.strokeText( text, textX, textY );
      }

      context.fillText( text, textX, textY );
    }

    if( theta !== 0 ){
      context.rotate( -theta );
      context.translate( -orgTextX, -orgTextY );
    }

    this.shadowStyle( context, 'transparent', 0 ); // reset for next guy
  }
};

module.exports = CRp;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var CRp = {};

CRp.drawNode = function( context, node, shiftToOriginWithBb, drawLabel ){
  var r = this;
  var nodeWidth, nodeHeight;
  var rs = node._private.rscratch;
  var _p = node._private;
  var pos = pos || _p.position;

  if( !is.number( pos.x ) || !is.number( pos.y ) ){
    return; // can't draw node with undefined position
  }

  if( !node.visible() ){ return; }

  var parentOpacity = node.effectiveOpacity();

  var usePaths = this.usePaths();
  var path;
  var pathCacheHit = false;

  var padding = node.pstyle('padding').pfValue;

  nodeWidth = node.width() + 2 * padding;
  nodeHeight = node.height() + 2 * padding;

  context.lineWidth = node.pstyle( 'border-width' ).pfValue;

  //
  // setup shift

  var bb;
  if( shiftToOriginWithBb ){
    bb = shiftToOriginWithBb;

    context.translate( -bb.x1, -bb.y1 );
  }

  //
  // load bg image

  var bgImgProp = node.pstyle( 'background-image' );
  var url = bgImgProp.value[2] || bgImgProp.value[1];
  var image;

  if( url !== undefined ){

    var bgImgCrossOrigin = node.pstyle( 'background-image-crossorigin' );

    // get image, and if not loaded then ask to redraw when later loaded
    image = this.getCachedImage( url, bgImgCrossOrigin, function(){
      node.trigger('background');

      r.redrawHint( 'eles', true );
      r.redrawHint( 'drag', true );

      r.drawingImage = true;

      r.redraw();
    } );

    var prevBging = _p.backgrounding;
    _p.backgrounding = !image.complete;

    if( prevBging !== _p.backgrounding ){ // update style b/c :backgrounding state changed
      node.updateStyle( false );
    }
  }

  //
  // setup styles

  var bgColor = node.pstyle( 'background-color' ).value;
  var borderColor = node.pstyle( 'border-color' ).value;
  var borderStyle = node.pstyle( 'border-style' ).value;

  this.fillStyle( context, bgColor[0], bgColor[1], bgColor[2], node.pstyle( 'background-opacity' ).value * parentOpacity );

  this.strokeStyle( context, borderColor[0], borderColor[1], borderColor[2], node.pstyle( 'border-opacity' ).value * parentOpacity );

  var shadowBlur = node.pstyle( 'shadow-blur' ).pfValue;
  var shadowOpacity = node.pstyle( 'shadow-opacity' ).value;
  var shadowColor = node.pstyle( 'shadow-color' ).value;
  var shadowOffsetX = node.pstyle( 'shadow-offset-x' ).pfValue;
  var shadowOffsetY = node.pstyle( 'shadow-offset-y' ).pfValue;

  this.shadowStyle( context, shadowColor, shadowOpacity, shadowBlur, shadowOffsetX, shadowOffsetY );

  context.lineJoin = 'miter'; // so borders are square with the node shape

  if( context.setLineDash ){ // for very outofdate browsers
    switch( borderStyle ){
      case 'dotted':
        context.setLineDash( [ 1, 1 ] );
        break;

      case 'dashed':
        context.setLineDash( [ 4, 2 ] );
        break;

      case 'solid':
      case 'double':
        context.setLineDash( [ ] );
        break;
    }
  }


  //
  // draw shape

  var styleShape = node.pstyle('shape').strValue;
  var shapePts = node.pstyle('shape-polygon-points').pfValue;

  if( usePaths ){
    var pathCacheKey = styleShape + '$' + nodeWidth + '$' + nodeHeight + ( styleShape === 'polygon' ? '$' + shapePts.join('$') : '' );

    context.translate( pos.x, pos.y );

    if( rs.pathCacheKey === pathCacheKey ){
      path = rs.pathCache;
      pathCacheHit = true;
    } else {
      path = new Path2D(); // eslint-disable-line no-undef
      rs.pathCacheKey = pathCacheKey;
      rs.pathCache = path;
    }
  }

  if( !pathCacheHit ){

    var npos = pos;

    if( usePaths ){
      npos = {
        x: 0,
        y: 0
      };
    }

    r.nodeShapes[ this.getNodeShape( node ) ].draw(
          ( path || context ),
          npos.x,
          npos.y,
          nodeWidth,
          nodeHeight );
  }

  if( usePaths ){
    context.fill( path );
  } else {
    context.fill();
  }

  this.shadowStyle( context, 'transparent', 0 ); // reset for next guy

  //
  // bg image

  if( url !== undefined ){
    if( image.complete ){
      this.drawInscribedImage( context, image, node );
    }
  }

  //
  // pie

  var darkness = node.pstyle( 'background-blacken' ).value;
  var borderWidth = node.pstyle( 'border-width' ).pfValue;

  if( this.hasPie( node ) ){
    this.drawPie( context, node, parentOpacity );

    // redraw path for blacken and border
    if( darkness !== 0 || borderWidth !== 0 ){

      if( !usePaths ){
        r.nodeShapes[ this.getNodeShape( node ) ].draw(
            context,
            pos.x,
            pos.y,
            nodeWidth,
            nodeHeight );
      }
    }
  }

  //
  // darken/lighten

  if( darkness > 0 ){
    this.fillStyle( context, 0, 0, 0, darkness );

    if( usePaths ){
      context.fill( path );
    } else {
      context.fill();
    }

  } else if( darkness < 0 ){
    this.fillStyle( context, 255, 255, 255, -darkness );

    if( usePaths ){
      context.fill( path );
    } else {
      context.fill();
    }
  }

  //
  // border

  if( borderWidth > 0 ){

    if( usePaths ){
      context.stroke( path );
    } else {
      context.stroke();
    }

    if( borderStyle === 'double' ){
      context.lineWidth = node.pstyle( 'border-width' ).pfValue / 3;

      var gco = context.globalCompositeOperation;
      context.globalCompositeOperation = 'destination-out';

      if( usePaths ){
        context.stroke( path );
      } else {
        context.stroke();
      }

      context.globalCompositeOperation = gco;
    }

  }

  if( usePaths ){
    context.translate( -pos.x, -pos.y );
  }

  // reset in case we changed the border style
  if( context.setLineDash ){ // for very outofdate browsers
    context.setLineDash( [ ] );
  }

  //
  // label

  r.drawElementText( context, node, drawLabel );

  //
  // overlay

  var overlayPadding = node.pstyle( 'overlay-padding' ).pfValue;
  var overlayOpacity = node.pstyle( 'overlay-opacity' ).value;
  var overlayColor = node.pstyle( 'overlay-color' ).value;

  if( overlayOpacity > 0 ){
    this.fillStyle( context, overlayColor[0], overlayColor[1], overlayColor[2], overlayOpacity );

    r.nodeShapes[ 'roundrectangle' ].draw(
      context,
      node._private.position.x,
      node._private.position.y,
      nodeWidth + overlayPadding * 2,
      nodeHeight + overlayPadding * 2
    );

    context.fill();
  }

  //
  // clean up shift

  if( shiftToOriginWithBb ){
    context.translate( bb.x1, bb.y1 );
  }

};

// does the node have at least one pie piece?
CRp.hasPie = function( node ){
  node = node[0]; // ensure ele ref

  return node._private.hasPie;
};

CRp.drawPie = function( context, node, nodeOpacity, pos ){
  node = node[0]; // ensure ele ref

  var _p = node._private;
  var cyStyle = node.cy().style();
  var pieSize = node.pstyle( 'pie-size' );
  var nodeW = node.width();
  var nodeH = node.height();
  var pos = pos || _p.position;
  var x = pos.x;
  var y = pos.y;
  var radius = Math.min( nodeW, nodeH ) / 2; // must fit in node
  var lastPercent = 0; // what % to continue drawing pie slices from on [0, 1]
  var usePaths = this.usePaths();

  if( usePaths ){
    x = 0;
    y = 0;
  }

  if( pieSize.units === '%' ){
    radius = radius * pieSize.value / 100;
  } else if( pieSize.pfValue !== undefined ){
    radius = pieSize.pfValue / 2;
  }

  for( var i = 1; i <= cyStyle.pieBackgroundN; i++ ){ // 1..N
    var size = node.pstyle( 'pie-' + i + '-background-size' ).value;
    var color = node.pstyle( 'pie-' + i + '-background-color' ).value;
    var opacity = node.pstyle( 'pie-' + i + '-background-opacity' ).value * nodeOpacity;
    var percent = size / 100; // map integer range [0, 100] to [0, 1]

    // percent can't push beyond 1
    if( percent + lastPercent > 1 ){
      percent = 1 - lastPercent;
    }

    var angleStart = 1.5 * Math.PI + 2 * Math.PI * lastPercent; // start at 12 o'clock and go clockwise
    var angleDelta = 2 * Math.PI * percent;
    var angleEnd = angleStart + angleDelta;

    // ignore if
    // - zero size
    // - we're already beyond the full circle
    // - adding the current slice would go beyond the full circle
    if( size === 0 || lastPercent >= 1 || lastPercent + percent > 1 ){
      continue;
    }

    context.beginPath();
    context.moveTo( x, y );
    context.arc( x, y, radius, angleStart, angleEnd );
    context.closePath();

    this.fillStyle( context, color[0], color[1], color[2], opacity );

    context.fill();

    lastPercent += percent;
  }

};


module.exports = CRp;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CRp = {};

var util = __webpack_require__( 1 );

var motionBlurDelay = 100;

// var isFirefox = typeof InstallTrigger !== 'undefined';

CRp.getPixelRatio = function(){
  var context = this.data.contexts[0];

  if( this.forcedPixelRatio != null ){
    return this.forcedPixelRatio;
  }

  var backingStore = context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1;

  return (window.devicePixelRatio || 1) / backingStore; // eslint-disable-line no-undef
};

CRp.paintCache = function( context ){
  var caches = this.paintCaches = this.paintCaches || [];
  var needToCreateCache = true;
  var cache;

  for( var i = 0; i < caches.length; i++ ){
    cache = caches[ i ];

    if( cache.context === context ){
      needToCreateCache = false;
      break;
    }
  }

  if( needToCreateCache ){
    cache = {
      context: context
    };
    caches.push( cache );
  }

  return cache;
};

CRp.fillStyle = function( context, r, g, b, a ){
  context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

  // turn off for now, seems context does its own caching

  // var cache = this.paintCache(context);

  // var fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

  // if( cache.fillStyle !== fillStyle ){
  //   context.fillStyle = cache.fillStyle = fillStyle;
  // }
};

CRp.strokeStyle = function( context, r, g, b, a ){
  context.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

  // turn off for now, seems context does its own caching

  // var cache = this.paintCache(context);

  // var strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

  // if( cache.strokeStyle !== strokeStyle ){
  //   context.strokeStyle = cache.strokeStyle = strokeStyle;
  // }
};

CRp.shadowStyle = function( context, color, opacity, blur, offsetX, offsetY ){
  var zoom = this.cy.zoom();

  // var cache = this.paintCache( context );
  //
  // // don't make expensive changes to the shadow style if it's not used
  // if( cache.shadowOpacity === 0 && opacity === 0 ){
  //   return;
  // }
  //
  // cache.shadowOpacity = opacity;

  if( opacity > 0 ){
    context.shadowBlur = blur * zoom;
    context.shadowColor = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + opacity + ')';
    context.shadowOffsetX = offsetX * zoom;
    context.shadowOffsetY = offsetY * zoom;
  } else {
    context.shadowBlur = 0;
    context.shadowColor = 'transparent';
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
  }
};

// Resize canvas
CRp.matchCanvasSize = function( container ){
  var r = this;
  var data = r.data;
  var bb = r.findContainerClientCoords();
  var width = bb[2];
  var height = bb[3];
  var pixelRatio = r.getPixelRatio();
  var mbPxRatio = r.motionBlurPxRatio;

  if(
    container === r.data.bufferCanvases[ r.MOTIONBLUR_BUFFER_NODE ] ||
    container === r.data.bufferCanvases[ r.MOTIONBLUR_BUFFER_DRAG ]
  ){
    pixelRatio = mbPxRatio;
  }

  var canvasWidth = width * pixelRatio;
  var canvasHeight = height * pixelRatio;
  var canvas;

  if( canvasWidth === r.canvasWidth && canvasHeight === r.canvasHeight ){
    return; // save cycles if same
  }

  r.fontCaches = null; // resizing resets the style

  var canvasContainer = data.canvasContainer;
  canvasContainer.style.width = width + 'px';
  canvasContainer.style.height = height + 'px';

  for( var i = 0; i < r.CANVAS_LAYERS; i++ ){

    canvas = data.canvases[ i ];

    if( canvas.width !== canvasWidth || canvas.height !== canvasHeight ){

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }
  }

  for( var i = 0; i < r.BUFFER_COUNT; i++ ){

    canvas = data.bufferCanvases[ i ];

    if( canvas.width !== canvasWidth || canvas.height !== canvasHeight ){

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }
  }

  r.textureMult = 1;
  if( pixelRatio <= 1 ){
    canvas = data.bufferCanvases[ r.TEXTURE_BUFFER ];

    r.textureMult = 2;
    canvas.width = canvasWidth * r.textureMult;
    canvas.height = canvasHeight * r.textureMult;
  }

  r.canvasWidth = canvasWidth;
  r.canvasHeight = canvasHeight;

};

CRp.renderTo = function( cxt, zoom, pan, pxRatio ){
  this.render( {
    forcedContext: cxt,
    forcedZoom: zoom,
    forcedPan: pan,
    drawAllLayers: true,
    forcedPxRatio: pxRatio
  } );
};

CRp.render = function( options ){
  options = options || util.staticEmptyObject();

  var forcedContext = options.forcedContext;
  var drawAllLayers = options.drawAllLayers;
  var drawOnlyNodeLayer = options.drawOnlyNodeLayer;
  var forcedZoom = options.forcedZoom;
  var forcedPan = options.forcedPan;
  var r = this;
  var pixelRatio = options.forcedPxRatio === undefined ? this.getPixelRatio() : options.forcedPxRatio;
  var cy = r.cy; var data = r.data;
  var needDraw = data.canvasNeedsRedraw;
  var textureDraw = r.textureOnViewport && !forcedContext && (r.pinching || r.hoverData.dragging || r.swipePanning || r.data.wheelZooming);
  var motionBlur = options.motionBlur !== undefined ? options.motionBlur : r.motionBlur;
  var mbPxRatio = r.motionBlurPxRatio;
  var hasCompoundNodes = cy.hasCompoundNodes();
  var inNodeDragGesture = r.hoverData.draggingEles;
  var inBoxSelection = r.hoverData.selecting || r.touchData.selecting ? true : false;
  motionBlur = motionBlur && !forcedContext && r.motionBlurEnabled && !inBoxSelection;
  var motionBlurFadeEffect = motionBlur;

  if( !forcedContext ){
    if( r.prevPxRatio !== pixelRatio ){
      r.invalidateContainerClientCoordsCache();
      r.matchCanvasSize( r.container );

      r.redrawHint('eles', true);
      r.redrawHint('drag', true);
    }

    r.prevPxRatio = pixelRatio;
  }

  if( !forcedContext && r.motionBlurTimeout ){
    clearTimeout( r.motionBlurTimeout );
  }

  if( motionBlur ){
    if( r.mbFrames == null ){
      r.mbFrames = 0;
    }

    if( !r.drawingImage ){ // image loading frames don't count towards motion blur blurry frames
      r.mbFrames++;
    }

    if( r.mbFrames < 3 ){ // need several frames before even high quality motionblur
      motionBlurFadeEffect = false;
    }

    // go to lower quality blurry frames when several m/b frames have been rendered (avoids flashing)
    if( r.mbFrames > r.minMbLowQualFrames ){
      //r.fullQualityMb = false;
      r.motionBlurPxRatio = r.mbPxRBlurry;
    }
  }

  if( r.clearingMotionBlur ){
    r.motionBlurPxRatio = 1;
  }

  // b/c drawToContext() may be async w.r.t. redraw(), keep track of last texture frame
  // because a rogue async texture frame would clear needDraw
  if( r.textureDrawLastFrame && !textureDraw ){
    needDraw[ r.NODE ] = true;
    needDraw[ r.SELECT_BOX ] = true;
  }

  var coreStyle = cy.style()._private.coreStyle;

  var zoom = cy.zoom();
  var effectiveZoom = forcedZoom !== undefined ? forcedZoom : zoom;
  var pan = cy.pan();
  var effectivePan = {
    x: pan.x,
    y: pan.y
  };

  var vp = {
    zoom: zoom,
    pan: {
      x: pan.x,
      y: pan.y
    }
  };
  var prevVp = r.prevViewport;
  var viewportIsDiff = prevVp === undefined || vp.zoom !== prevVp.zoom || vp.pan.x !== prevVp.pan.x || vp.pan.y !== prevVp.pan.y;

  // we want the low quality motionblur only when the viewport is being manipulated etc (where it's not noticed)
  if( !viewportIsDiff && !(inNodeDragGesture && !hasCompoundNodes) ){
    r.motionBlurPxRatio = 1;
  }

  if( forcedPan ){
    effectivePan = forcedPan;
  }

  // apply pixel ratio

  effectiveZoom *= pixelRatio;
  effectivePan.x *= pixelRatio;
  effectivePan.y *= pixelRatio;

  var eles = r.getCachedZSortedEles();

  function mbclear( context, x, y, w, h ){
    var gco = context.globalCompositeOperation;

    context.globalCompositeOperation = 'destination-out';
    r.fillStyle( context, 255, 255, 255, r.motionBlurTransparency );
    context.fillRect( x, y, w, h );

    context.globalCompositeOperation = gco;
  }

  function setContextTransform( context, clear ){
    var ePan, eZoom, w, h;

    if( !r.clearingMotionBlur && (context === data.bufferContexts[ r.MOTIONBLUR_BUFFER_NODE ] || context === data.bufferContexts[ r.MOTIONBLUR_BUFFER_DRAG ]) ){
      ePan = {
        x: pan.x * mbPxRatio,
        y: pan.y * mbPxRatio
      };

      eZoom = zoom * mbPxRatio;

      w = r.canvasWidth * mbPxRatio;
      h = r.canvasHeight * mbPxRatio;
    } else {
      ePan = effectivePan;
      eZoom = effectiveZoom;

      w = r.canvasWidth;
      h = r.canvasHeight;
    }

    context.setTransform( 1, 0, 0, 1, 0, 0 );

    if( clear === 'motionBlur' ){
      mbclear( context, 0, 0, w, h );
    } else if( !forcedContext && (clear === undefined || clear) ){
      context.clearRect( 0, 0, w, h );
    }

    if( !drawAllLayers ){
      context.translate( ePan.x, ePan.y );
      context.scale( eZoom, eZoom );
    }
    if( forcedPan ){
      context.translate( forcedPan.x, forcedPan.y );
    }
    if( forcedZoom ){
      context.scale( forcedZoom, forcedZoom );
    }
  }

  if( !textureDraw ){
    r.textureDrawLastFrame = false;
  }

  if( textureDraw ){
    r.textureDrawLastFrame = true;

    var bb;

    if( !r.textureCache ){
      r.textureCache = {};

      bb = r.textureCache.bb = cy.mutableElements().boundingBox();

      r.textureCache.texture = r.data.bufferCanvases[ r.TEXTURE_BUFFER ];

      var cxt = r.data.bufferContexts[ r.TEXTURE_BUFFER ];

      cxt.setTransform( 1, 0, 0, 1, 0, 0 );
      cxt.clearRect( 0, 0, r.canvasWidth * r.textureMult, r.canvasHeight * r.textureMult );

      r.render( {
        forcedContext: cxt,
        drawOnlyNodeLayer: true,
        forcedPxRatio: pixelRatio * r.textureMult
      } );

      var vp = r.textureCache.viewport = {
        zoom: cy.zoom(),
        pan: cy.pan(),
        width: r.canvasWidth,
        height: r.canvasHeight
      };

      vp.mpan = {
        x: (0 - vp.pan.x) / vp.zoom,
        y: (0 - vp.pan.y) / vp.zoom
      };
    }

    needDraw[ r.DRAG ] = false;
    needDraw[ r.NODE ] = false;

    var context = data.contexts[ r.NODE ];

    var texture = r.textureCache.texture;
    var vp = r.textureCache.viewport;
    bb = r.textureCache.bb;

    context.setTransform( 1, 0, 0, 1, 0, 0 );

    if( motionBlur ){
      mbclear( context, 0, 0, vp.width, vp.height );
    } else {
      context.clearRect( 0, 0, vp.width, vp.height );
    }

    var outsideBgColor = coreStyle[ 'outside-texture-bg-color' ].value;
    var outsideBgOpacity = coreStyle[ 'outside-texture-bg-opacity' ].value;
    r.fillStyle( context, outsideBgColor[0], outsideBgColor[1], outsideBgColor[2], outsideBgOpacity );
    context.fillRect( 0, 0, vp.width, vp.height );

    var zoom = cy.zoom();

    setContextTransform( context, false );

    context.clearRect( vp.mpan.x, vp.mpan.y, vp.width / vp.zoom / pixelRatio, vp.height / vp.zoom / pixelRatio );
    context.drawImage( texture, vp.mpan.x, vp.mpan.y, vp.width / vp.zoom / pixelRatio, vp.height / vp.zoom / pixelRatio );

  } else if( r.textureOnViewport && !forcedContext ){ // clear the cache since we don't need it
    r.textureCache = null;
  }

  var extent = cy.extent();
  var vpManip = (r.pinching || r.hoverData.dragging || r.swipePanning || r.data.wheelZooming || r.hoverData.draggingEles);
  var hideEdges = r.hideEdgesOnViewport && vpManip;

  var needMbClear = [];

  needMbClear[ r.NODE ] = !needDraw[ r.NODE ] && motionBlur && !r.clearedForMotionBlur[ r.NODE ] || r.clearingMotionBlur;
  if( needMbClear[ r.NODE ] ){ r.clearedForMotionBlur[ r.NODE ] = true; }

  needMbClear[ r.DRAG ] = !needDraw[ r.DRAG ] && motionBlur && !r.clearedForMotionBlur[ r.DRAG ] || r.clearingMotionBlur;
  if( needMbClear[ r.DRAG ] ){ r.clearedForMotionBlur[ r.DRAG ] = true; }

  if( needDraw[ r.NODE ] || drawAllLayers || drawOnlyNodeLayer || needMbClear[ r.NODE ] ){
    var useBuffer = motionBlur && !needMbClear[ r.NODE ] && mbPxRatio !== 1;
    var context = forcedContext || ( useBuffer ? r.data.bufferContexts[ r.MOTIONBLUR_BUFFER_NODE ] : data.contexts[ r.NODE ] );
    var clear = motionBlur && !useBuffer ? 'motionBlur' : undefined;

    setContextTransform( context, clear );

    if( hideEdges ){
      r.drawCachedNodes( context, eles.nondrag, pixelRatio, extent );
    } else {
      r.drawLayeredElements( context, eles.nondrag, pixelRatio, extent );
    }

    if( !drawAllLayers && !motionBlur ){
      needDraw[ r.NODE ] = false;
    }
  }

  if( !drawOnlyNodeLayer && (needDraw[ r.DRAG ] || drawAllLayers || needMbClear[ r.DRAG ]) ){
    var useBuffer = motionBlur && !needMbClear[ r.DRAG ] && mbPxRatio !== 1;
    var context = forcedContext || ( useBuffer ? r.data.bufferContexts[ r.MOTIONBLUR_BUFFER_DRAG ] : data.contexts[ r.DRAG ] );

    setContextTransform( context, motionBlur && !useBuffer ? 'motionBlur' : undefined );

    if( hideEdges ){
      r.drawCachedNodes( context, eles.drag, pixelRatio, extent );
    } else {
      r.drawCachedElements( context, eles.drag, pixelRatio, extent );
    }

    if( !drawAllLayers && !motionBlur ){
      needDraw[ r.DRAG ] = false;
    }
  }

  if( r.showFps || (!drawOnlyNodeLayer && (needDraw[ r.SELECT_BOX ] && !drawAllLayers)) ){
    var context = forcedContext || data.contexts[ r.SELECT_BOX ];

    setContextTransform( context );

    if( r.selection[4] == 1 && ( r.hoverData.selecting || r.touchData.selecting ) ){
      var zoom = r.cy.zoom();
      var borderWidth = coreStyle[ 'selection-box-border-width' ].value / zoom;

      context.lineWidth = borderWidth;
      context.fillStyle = 'rgba('
        + coreStyle[ 'selection-box-color' ].value[0] + ','
        + coreStyle[ 'selection-box-color' ].value[1] + ','
        + coreStyle[ 'selection-box-color' ].value[2] + ','
        + coreStyle[ 'selection-box-opacity' ].value + ')';

      context.fillRect(
        r.selection[0],
        r.selection[1],
        r.selection[2] - r.selection[0],
        r.selection[3] - r.selection[1] );

      if( borderWidth > 0 ){
        context.strokeStyle = 'rgba('
          + coreStyle[ 'selection-box-border-color' ].value[0] + ','
          + coreStyle[ 'selection-box-border-color' ].value[1] + ','
          + coreStyle[ 'selection-box-border-color' ].value[2] + ','
          + coreStyle[ 'selection-box-opacity' ].value + ')';

        context.strokeRect(
          r.selection[0],
          r.selection[1],
          r.selection[2] - r.selection[0],
          r.selection[3] - r.selection[1] );
      }
    }

    if( data.bgActivePosistion && !r.hoverData.selecting ){
      var zoom = r.cy.zoom();
      var pos = data.bgActivePosistion;

      context.fillStyle = 'rgba('
        + coreStyle[ 'active-bg-color' ].value[0] + ','
        + coreStyle[ 'active-bg-color' ].value[1] + ','
        + coreStyle[ 'active-bg-color' ].value[2] + ','
        + coreStyle[ 'active-bg-opacity' ].value + ')';

      context.beginPath();
      context.arc( pos.x, pos.y, coreStyle[ 'active-bg-size' ].pfValue / zoom, 0, 2 * Math.PI );
      context.fill();
    }

    var timeToRender = r.lastRedrawTime;
    if( r.showFps && timeToRender ){
      timeToRender = Math.round( timeToRender );
      var fps = Math.round( 1000 / timeToRender );

      context.setTransform( 1, 0, 0, 1, 0, 0 );

      context.fillStyle = 'rgba(255, 0, 0, 0.75)';
      context.strokeStyle = 'rgba(255, 0, 0, 0.75)';
      context.lineWidth = 1;
      context.fillText( '1 frame = ' + timeToRender + ' ms = ' + fps + ' fps', 0, 20 );

      var maxFps = 60;
      context.strokeRect( 0, 30, 250, 20 );
      context.fillRect( 0, 30, 250 * Math.min( fps / maxFps, 1 ), 20 );
    }

    if( !drawAllLayers ){
      needDraw[ r.SELECT_BOX ] = false;
    }
  }

  // motionblur: blit rendered blurry frames
  if( motionBlur && mbPxRatio !== 1 ){
    var cxtNode = data.contexts[ r.NODE ];
    var txtNode = r.data.bufferCanvases[ r.MOTIONBLUR_BUFFER_NODE ];

    var cxtDrag = data.contexts[ r.DRAG ];
    var txtDrag = r.data.bufferCanvases[ r.MOTIONBLUR_BUFFER_DRAG ];

    var drawMotionBlur = function( cxt, txt, needClear ){
      cxt.setTransform( 1, 0, 0, 1, 0, 0 );

      if( needClear || !motionBlurFadeEffect ){
        cxt.clearRect( 0, 0, r.canvasWidth, r.canvasHeight );
      } else {
        mbclear( cxt, 0, 0, r.canvasWidth, r.canvasHeight );
      }

      var pxr = mbPxRatio;

      cxt.drawImage(
        txt, // img
        0, 0, // sx, sy
        r.canvasWidth * pxr, r.canvasHeight * pxr, // sw, sh
        0, 0, // x, y
        r.canvasWidth, r.canvasHeight // w, h
      );
    };

    if( needDraw[ r.NODE ] || needMbClear[ r.NODE ] ){
      drawMotionBlur( cxtNode, txtNode, needMbClear[ r.NODE ] );
      needDraw[ r.NODE ] = false;
    }

    if( needDraw[ r.DRAG ] || needMbClear[ r.DRAG ] ){
      drawMotionBlur( cxtDrag, txtDrag, needMbClear[ r.DRAG ] );
      needDraw[ r.DRAG ] = false;
    }
  }

  r.prevViewport = vp;

  if( r.clearingMotionBlur ){
    r.clearingMotionBlur = false;
    r.motionBlurCleared = true;
    r.motionBlur = true;
  }

  if( motionBlur ){
    r.motionBlurTimeout = setTimeout( function(){
      r.motionBlurTimeout = null;

      r.clearedForMotionBlur[ r.NODE ] = false;
      r.clearedForMotionBlur[ r.DRAG ] = false;
      r.motionBlur = false;
      r.clearingMotionBlur = !textureDraw;
      r.mbFrames = 0;

      needDraw[ r.NODE ] = true;
      needDraw[ r.DRAG ] = true;

      r.redraw();
    }, motionBlurDelay );
  }

  r.drawingImage = false;


  if( !forcedContext && !r.initrender ){
    r.initrender = true;
    cy.trigger( 'initrender' );
  }

  if( !forcedContext ){
    cy.trigger('render');
  }

};

module.exports = CRp;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );

var CRp = {};

// @O Polygon drawing
CRp.drawPolygonPath = function(
  context, x, y, width, height, points ){

  var halfW = width / 2;
  var halfH = height / 2;

  if( context.beginPath ){ context.beginPath(); }

  context.moveTo( x + halfW * points[0], y + halfH * points[1] );

  for( var i = 1; i < points.length / 2; i++ ){
    context.lineTo( x + halfW * points[ i * 2], y + halfH * points[ i * 2 + 1] );
  }

  context.closePath();
};

// Round rectangle drawing
CRp.drawRoundRectanglePath = function(
  context, x, y, width, height ){

  var halfWidth = width / 2;
  var halfHeight = height / 2;
  var cornerRadius = math.getRoundRectangleRadius( width, height );

  if( context.beginPath ){ context.beginPath(); }

  // Start at top middle
  context.moveTo( x, y - halfHeight );
  // Arc from middle top to right side
  context.arcTo( x + halfWidth, y - halfHeight, x + halfWidth, y, cornerRadius );
  // Arc from right side to bottom
  context.arcTo( x + halfWidth, y + halfHeight, x, y + halfHeight, cornerRadius );
  // Arc from bottom to left side
  context.arcTo( x - halfWidth, y + halfHeight, x - halfWidth, y, cornerRadius );
  // Arc from left side to topBorder
  context.arcTo( x - halfWidth, y - halfHeight, x, y - halfHeight, cornerRadius );
  // Join line
  context.lineTo( x, y - halfHeight );


  context.closePath();
};

var sin0 = Math.sin( 0 );
var cos0 = Math.cos( 0 );

var sin = {};
var cos = {};

var ellipseStepSize = Math.PI / 40;

for( var i = 0 * Math.PI; i < 2 * Math.PI; i += ellipseStepSize ){
  sin[ i ] = Math.sin( i );
  cos[ i ] = Math.cos( i );
}

CRp.drawEllipsePath = function( context, centerX, centerY, width, height ){
    if( context.beginPath ){ context.beginPath(); }

    if( context.ellipse ){
      context.ellipse( centerX, centerY, width / 2, height / 2, 0, 0, 2 * Math.PI );
    } else {
      var xPos, yPos;
      var rw = width / 2;
      var rh = height / 2;
      for( var i = 0 * Math.PI; i < 2 * Math.PI; i += ellipseStepSize ){
        xPos = centerX - (rw * sin[ i ]) * sin0 + (rw * cos[ i ]) * cos0;
        yPos = centerY + (rh * cos[ i ]) * sin0 + (rh * sin[ i ]) * cos0;

        if( i === 0 ){
          context.moveTo( xPos, yPos );
        } else {
          context.lineTo( xPos, yPos );
        }
      }
    }

    context.closePath();
  };

module.exports = CRp;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var math = __webpack_require__( 2 );
var util = __webpack_require__( 1 );
var Heap = __webpack_require__( 9 );
var defs = __webpack_require__( 21 );

var minTxrH = 25; // the size of the texture cache for small height eles (special case)
var txrStepH = 50; // the min size of the regular cache, and the size it increases with each step up
var minLvl = -4; // when scaling smaller than that we don't need to re-render
var maxLvl = 2; // when larger than this scale just render directly (caching is not helpful)
var maxZoom = 3.99; // beyond this zoom level, layered textures are not used
var eleTxrSpacing = 8; // spacing between elements on textures to avoid blitting overlaps
var defTxrWidth = 1024; // default/minimum texture width
var maxTxrW = 1024; // the maximum width of a texture
var maxTxrH = 1024;  // the maximum height of a texture
var minUtility = 0.5; // if usage of texture is less than this, it is retired
var maxFullness = 0.8; // fullness of texture after which queue removal is checked
var maxFullnessChecks = 10; // dequeued after this many checks
var allowEdgeTxrCaching = false; // whether edges can be cached as textures (TODO maybe better on if webgl supported?)
var allowParentTxrCaching = false; // whether parent nodes can be cached as textures (TODO maybe better on if webgl supported?)
var deqCost = 0.15; // % of add'l rendering cost allowed for dequeuing ele caches each frame
var deqAvgCost = 0.1; // % of add'l rendering cost compared to average overall redraw time
var deqNoDrawCost = 0.9; // % of avg frame time that can be used for dequeueing when not drawing
var deqFastCost = 0.9; // % of frame time to be used when >60fps
var deqRedrawThreshold = 100; // time to batch redraws together from dequeueing to allow more dequeueing calcs to happen in the meanwhile
var maxDeqSize = 1; // number of eles to dequeue and render at higher texture in each batch

var getTxrReasons = {
  dequeue: 'dequeue',
  downscale: 'downscale',
  highQuality: 'highQuality'
};

var ElementTextureCache = function( renderer ){
  var self = this;

  self.renderer = renderer;
  self.onDequeues = [];

  self.setupDequeueing();
};

var ETCp = ElementTextureCache.prototype;

ETCp.reasons = getTxrReasons;

// the list of textures in which new subtextures for elements can be placed
ETCp.getTextureQueue = function( txrH ){
  var self = this;
  self.eleImgCaches = self.eleImgCaches || {};

  return ( self.eleImgCaches[ txrH ] = self.eleImgCaches[ txrH ] || [] );
};

// the list of usused textures which can be recycled (in use in texture queue)
ETCp.getRetiredTextureQueue = function( txrH ){
  var self = this;

  var rtxtrQs = self.eleImgCaches.retired = self.eleImgCaches.retired || {};
  var rtxtrQ = rtxtrQs[ txrH ] = rtxtrQs[ txrH ] || [];

  return rtxtrQ;
};

// queue of element draw requests at different scale levels
ETCp.getElementQueue = function(){
  var self = this;

  var q = self.eleCacheQueue = self.eleCacheQueue || new Heap(function( a, b ){
    return b.reqs - a.reqs;
  });

  return q;
};

// queue of element draw requests at different scale levels (element id lookup)
ETCp.getElementIdToQueue = function(){
  var self = this;

  var id2q = self.eleIdToCacheQueue = self.eleIdToCacheQueue || {};

  return id2q;
};

ETCp.getElement = function( ele, bb, pxRatio, lvl, reason ){
  var self = this;
  var r = this.renderer;
  var rs = ele._private.rscratch;
  var zoom = r.cy.zoom();

  if( bb.w === 0 || bb.h === 0 ){ return null; }

  if( lvl == null ){
    lvl = Math.ceil( math.log2( zoom * pxRatio ) );
  }

  if( lvl < minLvl ){
    lvl = minLvl;
  } else if( zoom >= maxZoom || lvl > maxLvl ){
    return null;
  }

  var scale = Math.pow( 2, lvl );
  var eleScaledH = bb.h * scale;
  var eleScaledW = bb.w * scale;
  var caches = rs.imgCaches = rs.imgCaches || {};
  var eleCache = caches[lvl];

  if( eleCache ){
    return eleCache;
  }

  var txrH; // which texture height this ele belongs to

  if( eleScaledH <= minTxrH ){
    txrH = minTxrH;
  } else if( eleScaledH <= txrStepH ){
    txrH = txrStepH;
  } else {
    txrH = Math.ceil( eleScaledH / txrStepH ) * txrStepH;
  }

  if(
    eleScaledH > maxTxrH
    || eleScaledW > maxTxrW
    || ( !allowEdgeTxrCaching && ele.isEdge() )
    || ( !allowParentTxrCaching && ele.isParent() )
  ){
    return null; // caching large elements is not efficient
  }

  var txrQ = self.getTextureQueue( txrH );

  // first try the second last one in case it has space at the end
  var txr = txrQ[ txrQ.length - 2 ];

  var addNewTxr = function(){
    return self.recycleTexture( txrH, eleScaledW ) || self.addTexture( txrH, eleScaledW );
  };

  // try the last one if there is no second last one
  if( !txr ){
    txr = txrQ[ txrQ.length - 1 ];
  }

  // if the last one doesn't exist, we need a first one
  if( !txr ){
    txr = addNewTxr();
  }

  // if there's no room in the current texture, we need a new one
  if( txr.width - txr.usedWidth < eleScaledW ){
    txr = addNewTxr();
  }

  var scaledLabelShown = r.eleTextBiggerThanMin( ele, scale );
  var scalableFrom = function( otherCache ){
    return otherCache && otherCache.scaledLabelShown === scaledLabelShown;
  };

  var deqing = reason && reason === getTxrReasons.dequeue;
  var highQualityReq = reason && reason === getTxrReasons.highQuality;
  var downscaleReq = reason && reason === getTxrReasons.downscale;

  var higherCache; // the nearest cache with a higher level
  for( var l = lvl + 1; l <= maxLvl; l++ ){
    var c = caches[l];

    if( c ){ higherCache = c; break; }
  }

  var oneUpCache = higherCache && higherCache.level === lvl + 1 ? higherCache : null;

  var downscale = function(){
    txr.context.drawImage(
      oneUpCache.texture.canvas,
      oneUpCache.x, 0,
      oneUpCache.width, oneUpCache.height,
      txr.usedWidth, 0,
      eleScaledW, eleScaledH
    );
  };

  if( scalableFrom(oneUpCache) ){
    // then we can relatively cheaply rescale the existing image w/o rerendering
    downscale();

  } else if( scalableFrom(higherCache) ){
    // then use the higher cache for now and queue the next level down
    // to cheaply scale towards the smaller level

    if( highQualityReq ){
      for( var l = higherCache.level; l > lvl; l-- ){
        oneUpCache = self.getElement( ele, bb, pxRatio, l, getTxrReasons.downscale );
      }

      downscale();

    } else {
      self.queueElement( ele, bb, higherCache.level - 1 );

      return higherCache;
    }
  } else {

    var lowerCache; // the nearest cache with a lower level
    if( !deqing && !highQualityReq && !downscaleReq ){
      for( var l = lvl - 1; l >= minLvl; l-- ){
        var c = caches[l];

        if( c ){ lowerCache = c; break; }
      }
    }

    if( scalableFrom(lowerCache) ){
      // then use the lower quality cache for now and queue the better one for later

      self.queueElement( ele, bb, lvl );

      return lowerCache;
    }

    txr.context.translate( txr.usedWidth, 0 );
    txr.context.scale( scale, scale );

    r.drawElement( txr.context, ele, bb, scaledLabelShown );

    txr.context.scale( 1/scale, 1/scale );
    txr.context.translate( -txr.usedWidth, 0 );
  }

  eleCache = caches[lvl] = {
    ele: ele,
    x: txr.usedWidth,
    texture: txr,
    level: lvl,
    scale: scale,
    width: eleScaledW,
    height: eleScaledH,
    scaledLabelShown: scaledLabelShown
  };

  txr.usedWidth += Math.ceil( eleScaledW + eleTxrSpacing );

  txr.eleCaches.push( eleCache );

  self.checkTextureFullness( txr );

  return eleCache;
};

ETCp.invalidateElement = function( ele ){
  var self = this;
  var caches = ele._private.rscratch.imgCaches;

  if( caches ){
    for( var lvl = minLvl; lvl <= maxLvl; lvl++ ){
      var cache = caches[ lvl ];

      if( cache ){
        var txr = cache.texture;

        // remove space from the texture it belongs to
        txr.invalidatedWidth += cache.width;

        // remove refs with the element
        caches[ lvl ] = null;
        util.removeFromArray( txr.eleCaches, cache );

        // might have to remove the entire texture if it's not efficiently using its space
        self.checkTextureUtility( txr );
      }
    }
  }
};

ETCp.checkTextureUtility = function( txr ){
  // invalidate all entries in the cache if the cache size is small
  if( txr.invalidatedWidth >= minUtility * txr.width ){
    this.retireTexture( txr );
  }
};

ETCp.checkTextureFullness = function( txr ){
  // if texture has been mostly filled and passed over several times, remove
  // it from the queue so we don't need to waste time looking at it to put new things

  var self = this;
  var txrQ = self.getTextureQueue( txr.height );

  if( txr.usedWidth / txr.width > maxFullness && txr.fullnessChecks >= maxFullnessChecks ){
    util.removeFromArray( txrQ, txr );
  } else {
    txr.fullnessChecks++;
  }
};

ETCp.retireTexture = function( txr ){
  var self = this;
  var txrH = txr.height;
  var txrQ = self.getTextureQueue( txrH );

  // retire the texture from the active / searchable queue:

  util.removeFromArray( txrQ, txr );

  txr.retired = true;

  // remove the refs from the eles to the caches:

  var eleCaches = txr.eleCaches;

  for( var i = 0; i < eleCaches.length; i++ ){
    var eleCache = eleCaches[i];
    var ele = eleCache.ele;
    var lvl = eleCache.level;
    var imgCaches = ele._private.rscratch.imgCaches;

    if( imgCaches ){
      imgCaches[ lvl ] = null;
    }
  }

  util.clearArray( eleCaches );

  // add the texture to a retired queue so it can be recycled in future:

  var rtxtrQ = self.getRetiredTextureQueue( txrH );

  rtxtrQ.push( txr );
};

ETCp.addTexture = function( txrH, minW ){
  var self = this;
  var txrQ = self.getTextureQueue( txrH );
  var txr = {};

  txrQ.push( txr );

  txr.eleCaches = [];

  txr.height = txrH;
  txr.width = Math.max( defTxrWidth, minW );
  txr.usedWidth = 0;
  txr.invalidatedWidth = 0;
  txr.fullnessChecks = 0;

  txr.canvas = document.createElement('canvas'); // eslint-disable-line no-undef
  txr.canvas.width = txr.width;
  txr.canvas.height = txr.height;

  txr.context = txr.canvas.getContext('2d');

  return txr;
};

ETCp.recycleTexture = function( txrH, minW ){
  var self = this;
  var txrQ = self.getTextureQueue( txrH );
  var rtxtrQ = self.getRetiredTextureQueue( txrH );

  for( var i = 0; i < rtxtrQ.length; i++ ){
    var txr = rtxtrQ[i];

    if( txr.width >= minW ){
      txr.retired = false;

      txr.usedWidth = 0;
      txr.invalidatedWidth = 0;
      txr.fullnessChecks = 0;

      util.clearArray( txr.eleCaches );

      txr.context.clearRect( 0, 0, txr.width, txr.height );

      util.removeFromArray( rtxtrQ, txr );
      txrQ.push( txr );

      return txr;
    }
  }
};

ETCp.queueElement = function( ele, bb, lvl ){
  var self = this;
  var q = self.getElementQueue();
  var id2q = self.getElementIdToQueue();
  var id = ele.id();
  var existingReq = id2q[ id ];

  if( existingReq ){ // use the max lvl b/c in between lvls are cheap to make
    existingReq.level = Math.max( existingReq.level, lvl );
    existingReq.reqs++;

    q.updateItem( existingReq );
  } else {
    var req = {
      ele: ele,
      bb: bb,
      position: math.copyPosition( ele.position() ),
      level: lvl,
      reqs: 1
    };

    if( ele.isEdge() ){
      req.positions = {
        source: math.copyPosition( ele.source().position() ),
        target: math.copyPosition( ele.target().position() )
      };
    }

    q.push( req );

    id2q[ id ] = req;
  }
};

ETCp.dequeue = function( pxRatio, extent ){
  var self = this;
  var q = self.getElementQueue();
  var id2q = self.getElementIdToQueue();
  var dequeued = [];

  for( var i = 0; i < maxDeqSize; i++ ){
    if( q.size() > 0 ){
      var req = q.pop();

      id2q[ req.ele.id() ] = null;

      dequeued.push( req );

      var ele = req.ele;
      var bb;

      if(
        ( ele.isEdge()
          && (
            !math.arePositionsSame( ele.source().position(), req.positions.source )
            || !math.arePositionsSame( ele.target().position(), req.positions.target )
          )
        )
        || ( !math.arePositionsSame( ele.position(), req.position ) )
      ){
        bb = ele.boundingBox();
      } else {
        bb = req.bb;
      }

      self.getElement( req.ele, bb, pxRatio, req.level, getTxrReasons.dequeue );
    } else {
      break;
    }
  }

  return dequeued;
};

ETCp.onDequeue = function( fn ){ this.onDequeues.push( fn ); };
ETCp.offDequeue = function( fn ){ util.removeFromArray( this.onDequeues, fn ); };

ETCp.setupDequeueing = defs.setupDequeueing({
  deqRedrawThreshold: deqRedrawThreshold,
  deqCost: deqCost,
  deqAvgCost: deqAvgCost,
  deqNoDrawCost: deqNoDrawCost,
  deqFastCost: deqFastCost,
  deq: function( self, pxRatio, extent ){
    return self.dequeue( pxRatio, extent );
  },
  onDeqd: function( self, deqd ){
    for( var i = 0; i < self.onDequeues.length; i++ ){
      var fn = self.onDequeues[i];

      fn( deqd );
    }
  },
  shouldRedraw: function( self, deqd, pxRatio, extent ){
    for( var i = 0; i < deqd.length; i++ ){
      var bb = deqd[i].bb;

      if( math.boundingBoxesIntersect( bb, extent ) ){
        return true;
      }
    }

    return false;
  },
  priority: function( self ){
    return self.renderer.beforeRenderPriorities.eleTxrDeq;
  }
});

module.exports = ElementTextureCache;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var CRp = {};

CRp.createBuffer = function( w, h ){
  var buffer = document.createElement( 'canvas' ); // eslint-disable-line no-undef
  buffer.width = w;
  buffer.height = h;

  return [ buffer, buffer.getContext( '2d' ) ];
};

CRp.bufferCanvasImage = function( options ){
  var cy = this.cy;
  var eles = cy.mutableElements();
  var bb = eles.boundingBox();
  var ctrRect = this.findContainerClientCoords();
  var width = options.full ? Math.ceil( bb.w ) : ctrRect[2];
  var height = options.full ? Math.ceil( bb.h ) : ctrRect[3];
  var specdMaxDims = is.number( options.maxWidth ) || is.number( options.maxHeight );
  var pxRatio = this.getPixelRatio();
  var scale = 1;

  if( options.scale !== undefined ){
    width *= options.scale;
    height *= options.scale;

    scale = options.scale;
  } else if( specdMaxDims ){
    var maxScaleW = Infinity;
    var maxScaleH = Infinity;

    if( is.number( options.maxWidth ) ){
      maxScaleW = scale * options.maxWidth / width;
    }

    if( is.number( options.maxHeight ) ){
      maxScaleH = scale * options.maxHeight / height;
    }

    scale = Math.min( maxScaleW, maxScaleH );

    width *= scale;
    height *= scale;
  }

  if( !specdMaxDims ){
    width *= pxRatio;
    height *= pxRatio;
    scale *= pxRatio;
  }

  var buffCanvas = document.createElement( 'canvas' ); // eslint-disable-line no-undef

  buffCanvas.width = width;
  buffCanvas.height = height;

  buffCanvas.style.width = width + 'px';
  buffCanvas.style.height = height + 'px';

  var buffCxt = buffCanvas.getContext( '2d' );

  // Rasterize the layers, but only if container has nonzero size
  if( width > 0 && height > 0 ){

    buffCxt.clearRect( 0, 0, width, height );

    if( options.bg ){
      buffCxt.fillStyle = options.bg;
      buffCxt.rect( 0, 0, width, height );
      buffCxt.fill();
    }

    buffCxt.globalCompositeOperation = 'source-over';

    var zsortedEles = this.getCachedZSortedEles();

    if( options.full ){ // draw the full bounds of the graph
      buffCxt.translate( -bb.x1 * scale, -bb.y1 * scale );
      buffCxt.scale( scale, scale );

      this.drawElements( buffCxt, zsortedEles );
    } else { // draw the current view
      var pan = cy.pan();

      var translation = {
        x: pan.x * scale,
        y: pan.y * scale
      };

      scale *= cy.zoom();

      buffCxt.translate( translation.x, translation.y );
      buffCxt.scale( scale, scale );

      this.drawElements( buffCxt, zsortedEles );
    }
  }

  return buffCanvas;
};

CRp.png = function( options ){
  return this.bufferCanvasImage( options ).toDataURL( 'image/png' );
};

CRp.jpg = function( options ){
  return this.bufferCanvasImage( options ).toDataURL( 'image/jpeg' );
};

module.exports = CRp;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
The canvas renderer was written by Yue Dong.

Modifications tracked on Github.
*/



var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );
var ElementTextureCache = __webpack_require__(100);
var LayeredTextureCache = __webpack_require__(103);

var CR = CanvasRenderer;
var CRp = CanvasRenderer.prototype;

CRp.CANVAS_LAYERS = 3;
//
CRp.SELECT_BOX = 0;
CRp.DRAG = 1;
CRp.NODE = 2;

CRp.BUFFER_COUNT = 3;
//
CRp.TEXTURE_BUFFER = 0;
CRp.MOTIONBLUR_BUFFER_NODE = 1;
CRp.MOTIONBLUR_BUFFER_DRAG = 2;

function CanvasRenderer( options ){
  var r = this;

  r.data = {
    canvases: new Array( CRp.CANVAS_LAYERS ),
    contexts: new Array( CRp.CANVAS_LAYERS ),
    canvasNeedsRedraw: new Array( CRp.CANVAS_LAYERS ),

    bufferCanvases: new Array( CRp.BUFFER_COUNT ),
    bufferContexts: new Array( CRp.CANVAS_LAYERS ),
  };

  r.data.canvasContainer = document.createElement( 'div' ); // eslint-disable-line no-undef
  var containerStyle = r.data.canvasContainer.style;
  r.data.canvasContainer.setAttribute( 'style', '-webkit-tap-highlight-color: rgba(0,0,0,0);' );
  containerStyle.position = 'relative';
  containerStyle.zIndex = '0';
  containerStyle.overflow = 'hidden';

  var container = options.cy.container();
  container.appendChild( r.data.canvasContainer );
  container.setAttribute( 'style', ( container.getAttribute( 'style' ) || '' ) + '-webkit-tap-highlight-color: rgba(0,0,0,0);' );

  for( var i = 0; i < CRp.CANVAS_LAYERS; i++ ){
    var canvas = r.data.canvases[ i ] = document.createElement( 'canvas' );  // eslint-disable-line no-undef
    r.data.contexts[ i ] = canvas.getContext( '2d' );
    canvas.setAttribute( 'style', '-webkit-user-select: none; -moz-user-select: -moz-none; user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); outline-style: none;' + ( is.ms() ? ' -ms-touch-action: none; touch-action: none; ' : '' ) );
    canvas.style.position = 'absolute';
    canvas.setAttribute( 'data-id', 'layer' + i );
    canvas.style.zIndex = String( CRp.CANVAS_LAYERS - i );
    r.data.canvasContainer.appendChild( canvas );

    r.data.canvasNeedsRedraw[ i ] = false;
  }
  r.data.topCanvas = r.data.canvases[0];

  r.data.canvases[ CRp.NODE ].setAttribute( 'data-id', 'layer' + CRp.NODE + '-node' );
  r.data.canvases[ CRp.SELECT_BOX ].setAttribute( 'data-id', 'layer' + CRp.SELECT_BOX + '-selectbox' );
  r.data.canvases[ CRp.DRAG ].setAttribute( 'data-id', 'layer' + CRp.DRAG + '-drag' );

  for( var i = 0; i < CRp.BUFFER_COUNT; i++ ){
    r.data.bufferCanvases[ i ] = document.createElement( 'canvas' );  // eslint-disable-line no-undef
    r.data.bufferContexts[ i ] = r.data.bufferCanvases[ i ].getContext( '2d' );
    r.data.bufferCanvases[ i ].style.position = 'absolute';
    r.data.bufferCanvases[ i ].setAttribute( 'data-id', 'buffer' + i );
    r.data.bufferCanvases[ i ].style.zIndex = String( -i - 1 );
    r.data.bufferCanvases[ i ].style.visibility = 'hidden';
    //r.data.canvasContainer.appendChild(r.data.bufferCanvases[i]);
  }

  r.pathsEnabled = true;

  r.data.eleTxrCache = new ElementTextureCache( r );
  r.data.lyrTxrCache = new LayeredTextureCache( r, r.data.eleTxrCache );

  r.onUpdateEleCalcs(function invalidateTextureCaches( willDraw, eles ){
    for( var i = 0; i < eles.length; i++ ){
      var ele = eles[i];
      var rs = ele._private.rstyle;
      var de = rs.dirtyEvents;

      if( ele.isNode() && de && de.length === 1 && de['position'] ){
        // then keep cached ele texture
      } else {
        r.data.eleTxrCache.invalidateElement( ele );
      }
    }

    if( eles.length > 0 ){
      r.data.lyrTxrCache.invalidateElements( eles );
    }
  });
}

CRp.redrawHint = function( group, bool ){
  var r = this;

  switch( group ){
    case 'eles':
      r.data.canvasNeedsRedraw[ CRp.NODE ] = bool;
      break;
    case 'drag':
      r.data.canvasNeedsRedraw[ CRp.DRAG ] = bool;
      break;
    case 'select':
      r.data.canvasNeedsRedraw[ CRp.SELECT_BOX ] = bool;
      break;
  }
};

// whether to use Path2D caching for drawing
var pathsImpld = typeof Path2D !== 'undefined';

CRp.path2dEnabled = function( on ){
  if( on === undefined ){
    return this.pathsEnabled;
  }

  this.pathsEnabled = on ? true : false;
};

CRp.usePaths = function(){
  return pathsImpld && this.pathsEnabled;
};

[
  __webpack_require__( 92 ),
  __webpack_require__( 94 ),
  __webpack_require__( 93 ),
  __webpack_require__( 95 ),
  __webpack_require__( 96 ),
  __webpack_require__( 97 ),
  __webpack_require__( 98 ),
  __webpack_require__( 99 ),
  __webpack_require__( 101 ),
  __webpack_require__( 104 )
].forEach( function( props ){
  util.extend( CRp, props );
} );

module.exports = CR;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var math = __webpack_require__( 2 );
var Heap = __webpack_require__( 9 );
var is = __webpack_require__( 0 );
var defs = __webpack_require__( 21 );

var defNumLayers = 1; // default number of layers to use
var minLvl = -4; // when scaling smaller than that we don't need to re-render
var maxLvl = 2; // when larger than this scale just render directly (caching is not helpful)
var maxZoom = 3.99; // beyond this zoom level, layered textures are not used
var deqRedrawThreshold = 50; // time to batch redraws together from dequeueing to allow more dequeueing calcs to happen in the meanwhile
var refineEleDebounceTime = 50; // time to debounce sharper ele texture updates
var disableEleImgSmoothing = true; // when drawing eles on layers from an ele cache ; crisper and more performant when true
var deqCost = 0.15; // % of add'l rendering cost allowed for dequeuing ele caches each frame
var deqAvgCost = 0.1; // % of add'l rendering cost compared to average overall redraw time
var deqNoDrawCost = 0.9; // % of avg frame time that can be used for dequeueing when not drawing
var deqFastCost = 0.9; // % of frame time to be used when >60fps
var maxDeqSize = 1; // number of eles to dequeue and render at higher texture in each batch
var invalidThreshold = 250; // time threshold for disabling b/c of invalidations
var maxLayerArea = 4000 * 4000; // layers can't be bigger than this
var alwaysQueue = true; // never draw all the layers in a level on a frame; draw directly until all dequeued
var useHighQualityEleTxrReqs = true; // whether to use high quality ele txr requests (generally faster and cheaper in the longterm)

var useEleTxrCaching = true; // whether to use individual ele texture caching underneath this cache

// var log = function(){ console.log.apply( console, arguments ); };

var LayeredTextureCache = function( renderer, eleTxrCache ){
  var self = this;

  var r = self.renderer = renderer;

  self.layersByLevel = {}; // e.g. 2 => [ layer1, layer2, ..., layerN ]

  self.firstGet = true;

  self.lastInvalidationTime = util.performanceNow() - 2*invalidThreshold;

  self.skipping = false;

  r.beforeRender(function( willDraw, now ){
    if( now - self.lastInvalidationTime <= invalidThreshold ){
      self.skipping = true;
    } else {
      self.skipping = false;
    }
  });

  var qSort = function(a, b){
    return b.reqs - a.reqs;
  };

  self.layersQueue = new Heap( qSort );

  self.eleTxrCache = eleTxrCache;

  self.setupEleCacheInvalidation();

  self.setupDequeueing();
};

var LTCp = LayeredTextureCache.prototype;

var layerIdPool = 0;
var MAX_INT = Math.pow(2, 53) - 1;

LTCp.makeLayer = function( bb, lvl ){
  var scale = Math.pow( 2, lvl );

  var w = Math.ceil( bb.w * scale );
  var h = Math.ceil( bb.h * scale );

  var canvas = document.createElement('canvas'); // eslint-disable-line no-undef

  canvas.width = w;
  canvas.height = h;

  var layer = {
    id: (layerIdPool = ++layerIdPool % MAX_INT ),
    bb: bb,
    level: lvl,
    width: w,
    height: h,
    canvas: canvas,
    context: canvas.getContext('2d'),
    eles: [],
    elesQueue: [],
    reqs: 0
  };

  // log('make layer %s with w %s and h %s and lvl %s', layer.id, layer.width, layer.height, layer.level);

  var cxt = layer.context;
  var dx = -layer.bb.x1;
  var dy = -layer.bb.y1;

  // do the transform on creation to save cycles (it's the same for all eles)
  cxt.scale( scale, scale );
  cxt.translate( dx, dy );

  return layer;
};

LTCp.getLayers = function( eles, pxRatio, lvl ){
  var self = this;
  var r = self.renderer;
  var cy = r.cy;
  var zoom = cy.zoom();
  var firstGet = self.firstGet;

  self.firstGet = false;

  // log('--\nget layers with %s eles', eles.length);
  //log eles.map(function(ele){ return ele.id() }) );

  if( lvl == null ){
    lvl = Math.ceil( math.log2( zoom * pxRatio ) );

    if( lvl < minLvl ){
      lvl = minLvl;
    } else if( zoom >= maxZoom || lvl > maxLvl ){
      return null;
    }
  }

  self.validateLayersElesOrdering( lvl, eles );

  var layersByLvl = self.layersByLevel;
  var scale = Math.pow( 2, lvl );
  var layers = layersByLvl[ lvl ] = layersByLvl[ lvl ] || [];
  var bb;

  var lvlComplete = self.levelIsComplete( lvl, eles );
  var tmpLayers;

  var checkTempLevels = function(){
    var canUseAsTmpLvl = function( l ){
      self.validateLayersElesOrdering( l, eles );

      if( self.levelIsComplete( l, eles ) ){
        tmpLayers = layersByLvl[l];
        return true;
      }
    };

    var checkLvls = function( dir ){
      if( tmpLayers ){ return; }

      for( var l = lvl + dir; minLvl <= l && l <= maxLvl; l += dir ){
        if( canUseAsTmpLvl(l) ){ break; }
      }
    };

    checkLvls( +1 );
    checkLvls( -1 );

    // remove the invalid layers; they will be replaced as needed later in this function
    for( var i = layers.length - 1; i >= 0; i-- ){
      var layer = layers[i];

      if( layer.invalid ){
        util.removeFromArray( layers, layer );
      }
    }
  };

  if( !lvlComplete ){
    // if the current level is incomplete, then use the closest, best quality layerset temporarily
    // and later queue the current layerset so we can get the proper quality level soon

    checkTempLevels();

  } else {
    // log('level complete, using existing layers\n--');
    return layers;
  }

  var getBb = function(){
    if( !bb ){
      bb = math.makeBoundingBox();

      for( var i = 0; i < eles.length; i++ ){
        math.updateBoundingBox( bb, eles[i].boundingBox() );
      }
    }

    return bb;
  };

  var makeLayer = function( opts ){
    opts = opts || {};

    var after = opts.after;

    getBb();

    var area = ( bb.w * scale ) * ( bb.h * scale );

    if( area > maxLayerArea ){
      return null;
    }

    var layer = self.makeLayer( bb, lvl );

    if( after != null ){
      var index = layers.indexOf( after ) + 1;

      layers.splice( index, 0, layer );
    } else if( opts.insert === undefined || opts.insert ){
      // no after specified => first layer made so put at start
      layers.unshift( layer );
    }

    // if( tmpLayers ){
      //self.queueLayer( layer );
    // }

    return layer;
  };

  if( self.skipping && !firstGet ){
    // log('skip layers');
    return null;
  }

  // log('do layers');

  var layer = null;
  var maxElesPerLayer = eles.length / defNumLayers;
  var allowLazyQueueing = alwaysQueue && !firstGet;

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[i];
    var rs = ele._private.rscratch;
    var caches = rs.imgLayerCaches = rs.imgLayerCaches || {};

    // log('look at ele', ele.id());

    var existingLayer = caches[ lvl ];

    if( existingLayer ){
      // reuse layer for later eles
      // log('reuse layer for', ele.id());
      layer = existingLayer;
      continue;
    }

    if(
      !layer
      || layer.eles.length >= maxElesPerLayer
      || !math.boundingBoxInBoundingBox( layer.bb, ele.boundingBox() )
    ){
      // log('make new layer for ele %s', ele.id());

      layer = makeLayer({ insert: true, after: layer });

      // if now layer can be built then we can't use layers at this level
      if( !layer ){ return null; }

      // log('new layer with id %s', layer.id);
    }

    if( tmpLayers || allowLazyQueueing ){
      // log('queue ele %s in layer %s', ele.id(), layer.id);
      self.queueLayer( layer, ele );
    } else {
      // log('draw ele %s in layer %s', ele.id(), layer.id);
      self.drawEleInLayer( layer, ele, lvl, pxRatio );
    }

    layer.eles.push( ele );

    caches[ lvl ] = layer;
  }

  // log('--');

  if( tmpLayers ){ // then we only queued the current layerset and can't draw it yet
    return tmpLayers;
  }

  if( allowLazyQueueing ){
    // log('lazy queue level', lvl);
    return null;
  }

  return layers;
};

// a layer may want to use an ele cache of a higher level to avoid blurriness
// so the layer level might not equal the ele level
LTCp.getEleLevelForLayerLevel = function( lvl, pxRatio ){
  return lvl;
};

function imgSmoothing( context, bool ){
  if( context.imageSmoothingEnabled != null ){
    context.imageSmoothingEnabled = bool;
  } else {
    context.webkitImageSmoothingEnabled = bool;
    context.mozImageSmoothingEnabled = bool;
    context.msImageSmoothingEnabled = bool;
  }
}

LTCp.drawEleInLayer = function( layer, ele, lvl, pxRatio ){
  var self = this;
  var r = this.renderer;
  var context = layer.context;
  var bb = ele.boundingBox();

  if( bb.w === 0 || bb.h === 0 ){ return; }

  var eleCache = self.eleTxrCache;
  var reason = useHighQualityEleTxrReqs ? eleCache.reasons.highQuality : undefined;

  lvl = self.getEleLevelForLayerLevel( lvl, pxRatio );

  var cache = useEleTxrCaching ? eleCache.getElement( ele, bb, null, lvl, reason ) : null;

  if( cache ){
    if( disableEleImgSmoothing ){ imgSmoothing( context, false ); }

    context.drawImage( cache.texture.canvas, cache.x, 0, cache.width, cache.height, bb.x1, bb.y1, bb.w, bb.h );

    if( disableEleImgSmoothing ){ imgSmoothing( context, true ); }
  } else { // if the element is not cacheable, then draw directly
    r.drawElement( context, ele );
  }
};

LTCp.levelIsComplete = function( lvl, eles ){
  var self = this;
  var layers = self.layersByLevel[ lvl ];

  if( !layers || layers.length === 0 ){ return false; }

  var numElesInLayers = 0;

  for( var i = 0; i < layers.length; i++ ){
    var layer = layers[i];

    // if there are any eles needed to be drawn yet, the level is not complete
    if( layer.reqs > 0 ){ return false; }

    // if the layer is invalid, the level is not complete
    if( layer.invalid ){ return false; }

    numElesInLayers += layer.eles.length;
  }

  // we should have exactly the number of eles passed in to be complete
  if( numElesInLayers !== eles.length ){ return false; }

  return true;
};

LTCp.validateLayersElesOrdering = function( lvl, eles ){
  var layers = this.layersByLevel[ lvl ];

  if( !layers ){ return; }

  // if in a layer the eles are not in the same order, then the layer is invalid
  // (i.e. there is an ele in between the eles in the layer)

  for( var i = 0; i < layers.length; i++ ){
    var layer = layers[i];
    var offset = -1;

    // find the offset
    for( var j = 0; j < eles.length; j++ ){
      if( layer.eles[0] === eles[j] ){
        offset = j;
        break;
      }
    }

    if( offset < 0 ){
      // then the layer has nonexistant elements and is invalid
      this.invalidateLayer( layer );
      continue;
    }

    // the eles in the layer must be in the same continuous order, else the layer is invalid

    var o = offset;

    for( var j = 0; j < layer.eles.length; j++ ){
      if( layer.eles[j] !== eles[o+j] ){
        // log('invalidate based on ordering', layer.id);

        this.invalidateLayer( layer );
        break;
      }
    }
  }
};

LTCp.updateElementsInLayers = function( eles, update ){
  var self = this;
  var isEles = is.element( eles[0] );

  // collect udpated elements (cascaded from the layers) and update each
  // layer itself along the way
  for( var i = 0; i < eles.length; i++ ){
    var req = isEles ? null : eles[i];
    var ele = isEles ? eles[i] : eles[i].ele;
    var rs = ele._private.rscratch;
    var caches = rs.imgLayerCaches = rs.imgLayerCaches || {};

    for( var l = minLvl; l <= maxLvl; l++ ){
      var layer = caches[l];

      if( !layer ){ continue; }

      // if update is a request from the ele cache, then it affects only
      // the matching level
      if( req && self.getEleLevelForLayerLevel( layer.level ) !== req.level ){
        continue;
      }

      update( layer, ele, req );
    }
  }
};

LTCp.haveLayers = function(){
  var self = this;
  var haveLayers = false;

  for( var l = minLvl; l <= maxLvl; l++ ){
    var layers = self.layersByLevel[l];

    if( layers && layers.length > 0 ){
      haveLayers = true;
      break;
    }
  }

  return haveLayers;
};

LTCp.invalidateElements = function( eles ){
  var self = this;

  self.lastInvalidationTime = util.performanceNow();

  // log('update invalidate layer time from eles');

  if( eles.length === 0 || !self.haveLayers() ){ return; }

  self.updateElementsInLayers( eles, function invalAssocLayers( layer, ele, req ){
    self.invalidateLayer( layer );
  } );
};

LTCp.invalidateLayer = function( layer ){
  // log('update invalidate layer time');

  this.lastInvalidationTime = util.performanceNow();

  if( layer.invalid ){ return; } // save cycles

  var lvl = layer.level;
  var eles = layer.eles;
  var layers = this.layersByLevel[ lvl ];

   // log('invalidate layer', layer.id );

  util.removeFromArray( layers, layer );
  // layer.eles = [];

  layer.elesQueue = [];

  layer.invalid = true;

  if( layer.replacement ){
    layer.replacement.invalid = true;
  }

  for( var i = 0; i < eles.length; i++ ){
    var caches = eles[i]._private.rscratch.imgLayerCaches;

    if( caches ){
      caches[ lvl ] = null;
    }
  }
};

LTCp.refineElementTextures = function( eles ){
  var self = this;

  // log('refine', eles.length);

  self.updateElementsInLayers( eles, function refineEachEle( layer, ele, req ){
    var rLyr = layer.replacement;

    if( !rLyr ){
      rLyr = layer.replacement = self.makeLayer( layer.bb, layer.level );
      rLyr.replaces = layer;
      rLyr.eles = layer.eles;

       // log('make replacement layer %s for %s with level %s', rLyr.id, layer.id, rLyr.level);
    }

    if( !rLyr.reqs ){
      for( var i = 0; i < rLyr.eles.length; i++ ){
        self.queueLayer( rLyr, rLyr.eles[i] );
      }

       // log('queue replacement layer refinement', rLyr.id);
    }
  } );
};

LTCp.setupEleCacheInvalidation = function(){
  var self = this;
  var eleDeqs = [];

  if( !useEleTxrCaching ){ return; }

  var updatedElesInLayers = util.debounce( function(){
    self.refineElementTextures( eleDeqs );

    eleDeqs = [];
  }, refineEleDebounceTime );

  self.eleTxrCache.onDequeue(function( reqs ){
    for( var i = 0; i < reqs.length; i++ ){
      eleDeqs.push( reqs[i] );
    }

    updatedElesInLayers();
  });
};

LTCp.queueLayer = function( layer, ele ){
  var self = this;
  var q = self.layersQueue;
  var elesQ = layer.elesQueue;
  var hasId = elesQ.hasId = elesQ.hasId || {};

  // if a layer is going to be replaced, queuing is a waste of time
  if( layer.replacement ){ return; }

  if( ele ){
    if( hasId[ ele.id() ] ){
      return;
    }

    elesQ.push( ele );
    hasId[ ele.id() ] = true;
  }

  if( layer.reqs ){
    layer.reqs++;

    q.updateItem( layer );
  } else {
    layer.reqs = 1;

    q.push( layer );
  }
};

LTCp.dequeue = function( pxRatio ){
  var self = this;
  var q = self.layersQueue;
  var deqd = [];
  var eleDeqs = 0;

  while( eleDeqs < maxDeqSize ){
    if( q.size() === 0 ){ break; }

    var layer = q.peek();

    // if a layer has been or will be replaced, then don't waste time with it
    if( layer.replacement ){
       // log('layer %s in queue skipped b/c it already has a replacement', layer.id);
      q.pop();
      continue;
    }

    // if this is a replacement layer that has been superceded, then forget it
    if( layer.replaces && layer !== layer.replaces.replacement ){
       // log('layer is no longer the most uptodate replacement; dequeued', layer.id)
      q.pop();
      continue;
    }

    if( layer.invalid ){
       // log('replacement layer %s is invalid; dequeued', layer.id);
      q.pop();
      continue;
    }

    var ele = layer.elesQueue.shift();

    if( ele ){
       // log('dequeue layer %s', layer.id);

      self.drawEleInLayer( layer, ele, layer.level, pxRatio );

      eleDeqs++;
    }

    if( deqd.length === 0 ){
      // we need only one entry in deqd to queue redrawing etc
      deqd.push( true );
    }

    // if the layer has all its eles done, then remove from the queue
    if( layer.elesQueue.length === 0 ){
      q.pop();

      layer.reqs = 0;

       // log('dequeue of layer %s complete', layer.id);

      // when a replacement layer is dequeued, it replaces the old layer in the level
      if( layer.replaces ){
        self.applyLayerReplacement( layer );
      }

      self.requestRedraw();
    }
  }

  return deqd;
};

LTCp.applyLayerReplacement = function( layer ){
  var self = this;
  var layersInLevel = self.layersByLevel[ layer.level ];
  var replaced = layer.replaces;
  var index = layersInLevel.indexOf( replaced );

  // if the replaced layer is not in the active list for the level, then replacing
  // refs would be a mistake (i.e. overwriting the true active layer)
  if( index < 0 || replaced.invalid ){
     // log('replacement layer would have no effect', layer.id);
    return;
  }

  layersInLevel[ index ] = layer; // replace level ref

  // replace refs in eles
  for( var i = 0; i < layer.eles.length; i++ ){
    var _p = layer.eles[i]._private;
    var cache = _p.imgLayerCaches = _p.imgLayerCaches || {};

    if( cache ){
      cache[ layer.level ] = layer;
    }
  }

   // log('apply replacement layer %s over %s', layer.id, replaced.id);

  self.requestRedraw();
};

LTCp.requestRedraw = util.debounce( function(){
  var r = this.renderer;

  r.redrawHint( 'eles', true );
  r.redrawHint( 'drag', true );
  r.redraw();
}, 100 );

LTCp.setupDequeueing = defs.setupDequeueing({
  deqRedrawThreshold: deqRedrawThreshold,
  deqCost: deqCost,
  deqAvgCost: deqAvgCost,
  deqNoDrawCost: deqNoDrawCost,
  deqFastCost: deqFastCost,
  deq: function( self, pxRatio ){
    return self.dequeue( pxRatio );
  },
  onDeqd: util.noop,
  shouldRedraw: util.trueify,
  priority: function( self ){
    return self.renderer.beforeRenderPriorities.lyrTxrDeq;
  }
});

module.exports = LayeredTextureCache;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CRp = {};

CRp.nodeShapeImpl = function( name, context, centerX, centerY, width, height, points ){
  switch( name ){
    case 'ellipse':
      return this.drawEllipsePath( context, centerX, centerY, width, height );
    case 'polygon':
      return this.drawPolygonPath( context, centerX, centerY, width, height, points );
    case 'roundrectangle':
      return this.drawRoundRectanglePath( context, centerX, centerY, width, height );
  }
};

module.exports = CRp;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [
  { name: 'null', impl: __webpack_require__( 106 ) },
  { name: 'base', impl: __webpack_require__( 88 ) },
  { name: 'canvas', impl: __webpack_require__( 102 ) }
];


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function NullRenderer( options ){
  this.options = options;
  this.notifications = 0; // for testing
}

var noop = function(){};

NullRenderer.prototype = {
  recalculateRenderedStyle: noop,
  notify: function(){ this.notifications++; },
  init: noop
};

module.exports = NullRenderer;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*! Weaver licensed under MIT (https://tldrlegal.com/license/mit-license), copyright Max Franz */



var is = __webpack_require__(0);
var util = __webpack_require__(1);
var Thread = __webpack_require__(14);
var Promise = __webpack_require__(5);
var define = __webpack_require__(3);

var Fabric = function( N ){
  if( !(this instanceof Fabric) ){
    return new Fabric( N );
  }

  this._private = {
    pass: []
  };

  var defN = 4;

  if( is.number(N) ){
    // then use the specified number of threads
  } if( typeof navigator !== 'undefined' && navigator.hardwareConcurrency != null ){
    N = navigator.hardwareConcurrency;
  } else {
    try{
      N = __webpack_require__(128).cpus().length;
    } catch( err ){
      N = defN;
    }
  } // TODO could use an estimation here but would the additional expense be worth it?

  for( var i = 0; i < N; i++ ){
    this[i] = new Thread();
  }

  this.length = N;
};

var fabfn = Fabric.prototype; // short alias

util.extend(fabfn, {

  instanceString: function(){ return 'fabric'; },

  // require fn in all threads
  require: function( fn, as ){
    for( var i = 0; i < this.length; i++ ){
      var thread = this[i];

      thread.require( fn, as );
    }

    return this;
  },

  // get a random thread
  random: function(){
    var i = Math.round( (this.length - 1) * Math.random() );
    var thread = this[i];

    return thread;
  },

  // run on random thread
  run: function( fn ){
    var pass = this._private.pass.shift();

    return this.random().pass( pass ).run( fn );
  },

  // sends a random thread a message
  message: function( m ){
    return this.random().message( m );
  },

  // send all threads a message
  broadcast: function( m ){
    for( var i = 0; i < this.length; i++ ){
      var thread = this[i];

      thread.message( m );
    }

    return this; // chaining
  },

  // stop all threads
  stop: function(){
    for( var i = 0; i < this.length; i++ ){
      var thread = this[i];

      thread.stop();
    }

    return this; // chaining
  },

  // pass data to be used with .spread() etc.
  pass: function( data ){
    var pass = this._private.pass;

    if( is.array(data) ){
      pass.push( data );
    } else {
      throw 'Only arrays may be used with fabric.pass()';
    }

    return this; // chaining
  },

  spreadSize: function(){
    var subsize =  Math.ceil( this._private.pass[0].length / this.length );

    subsize = Math.max( 1, subsize ); // don't pass less than one ele to each thread

    return subsize;
  },

  // split the data into slices to spread the data equally among threads
  spread: function( fn ){
    var self = this;
    var _p = self._private;
    var subsize = self.spreadSize(); // number of pass eles to handle in each thread
    var pass = _p.pass.shift().concat([]); // keep a copy
    var runPs = [];

    for( var i = 0; i < this.length; i++ ){
      var thread = this[i];
      var slice = pass.splice( 0, subsize );

      var runP = thread.pass( slice ).run( fn );

      runPs.push( runP );

      var doneEarly = pass.length === 0;
      if( doneEarly ){ break; }
    }

    return Promise.all( runPs ).then(function( thens ){
      var postpass = [];
      var p = 0;

      // fill postpass with the total result joined from all threads
      for( var i = 0; i < thens.length; i++ ){
        var then = thens[i]; // array result from thread i

        for( var j = 0; j < then.length; j++ ){
          var t = then[j]; // array element

          postpass[ p++ ] = t;
        }
      }

      return postpass;
    });
  },

  // parallel version of array.map()
  map: function( fn ){
    var self = this;

    self.require( fn, '_$_$_fabmap' );

    return self.spread(function( split ){
      var mapped = [];
      var origResolve = resolve; // jshint ignore:line

      resolve = function( val ){ // jshint ignore:line
        mapped.push( val );
      };

      for( var i = 0; i < split.length; i++ ){
        var oldLen = mapped.length;
        var ret = _$_$_fabmap( split[i] ); // jshint ignore:line
        var nothingInsdByResolve = oldLen === mapped.length;

        if( nothingInsdByResolve ){
          mapped.push( ret );
        }
      }

      resolve = origResolve; // jshint ignore:line

      return mapped;
    });

  },

  // parallel version of array.filter()
  filter: function( fn ){
    var _p = this._private;
    var pass = _p.pass[0];

    return this.map( fn ).then(function( include ){
      var ret = [];

      for( var i = 0; i < pass.length; i++ ){
        var datum = pass[i];
        var incDatum = include[i];

        if( incDatum ){
          ret.push( datum );
        }
      }

      return ret;
    });
  },

  // sorts the passed array using a divide and conquer strategy
  sort: function( cmp ){
    var self = this;
    var P = this._private.pass[0].length;
    var subsize = this.spreadSize();

    cmp = cmp || function( a, b ){ // default comparison function
      if( a < b ){
        return -1;
      } else if( a > b ){
        return 1;
      }

      return 0;
    };

    self.require( cmp, '_$_$_cmp' );

    return self.spread(function( split ){ // sort each split normally
      var sortedSplit = split.sort( _$_$_cmp ); // jshint ignore:line
      resolve( sortedSplit ); // jshint ignore:line

    }).then(function( joined ){
      // do all the merging in the main thread to minimise data transfer

      // TODO could do merging in separate threads but would incur add'l cost of data transfer
      // for each level of the merge

      var merge = function( i, j, max ){
        // don't overflow array
        j = Math.min( j, P );
        max = Math.min( max, P );

        // left and right sides of merge
        var l = i;
        var r = j;

        var sorted = [];

        for( var k = l; k < max; k++ ){

          var eleI = joined[i];
          var eleJ = joined[j];

          if( i < r && ( j >= max || cmp(eleI, eleJ) <= 0 ) ){
            sorted.push( eleI );
            i++;
          } else {
            sorted.push( eleJ );
            j++;
          }

        }

        // in the array proper, put the sorted values
        for( var k = 0; k < sorted.length; k++ ){ // kth sorted item
          var index = l + k;

          joined[ index ] = sorted[k];
        }
      };

      for( var splitL = subsize; splitL < P; splitL *= 2 ){ // merge until array is "split" as 1

        for( var i = 0; i < P; i += 2*splitL ){
          merge( i, i + splitL, i + 2*splitL );
        }

      }

      return joined;
    });
  }


});

var defineRandomPasser = function( opts ){
  opts = opts || {};

  return function( fn, arg1 ){
    var pass = this._private.pass.shift();

    return this.random().pass( pass )[ opts.threadFn ]( fn, arg1 );
  };
};

util.extend(fabfn, {
  randomMap: defineRandomPasser({ threadFn: 'map' }),

  reduce: defineRandomPasser({ threadFn: 'reduce' }),

  reduceRight: defineRandomPasser({ threadFn: 'reduceRight' })
});

// aliases
var fn = fabfn;
fn.promise = fn.run;
fn.terminate = fn.halt = fn.stop;
fn.include = fn.require;

// pull in event apis
util.extend(fabfn, {
  on: define.on(),
  one: define.on({ unbindSelfOnTrigger: true }),
  off: define.off(),
  trigger: define.trigger()
});

define.eventAliasesOn( fabfn );

module.exports = Fabric;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

var cyReg = function( $ele ){
  var d = $ele[0]._cyreg = $ele[0]._cyreg || {};

  return d;
};

var registerJquery = function( $, cytoscape ){
  if( !$ ){ return; } // no jquery => don't need this

  if( $.fn.cytoscape ){ return; } // already registered

  // allow calls on a jQuery selector by proxying calls to $.cytoscape
  // e.g. $("#foo").cytoscape(options) => $.cytoscape(options) on #foo
  $.fn.cytoscape = function( opts ){
    var $this = $( this );

    // get object
    if( opts === 'get' ){
      return cyReg( $this ).cy;
    }

    // bind to ready
    else if( is.fn( opts ) ){

      var ready = opts;
      var cy = cyReg( $this ).cy;

      if( cy && cy.isReady() ){ // already ready so just trigger now
        cy.trigger( 'ready', [], ready );

      } else { // not yet ready, so add to readies list
        var data = cyReg( $this );
        var readies = data.readies = data.readies || [];

        readies.push( ready );
      }

    }

    // proxy to create instance
    else if( is.plainObject( opts ) ){
      return $this.each( function(){
        var options = $.extend( {}, opts, {
          container: $( this )[0]
        } );

        cytoscape( options );
      } );
    }
  };

  // allow access to the global cytoscape object under jquery for legacy reasons
  $.cytoscape = cytoscape;

  // use short alias (cy) if not already defined
  if( $.fn.cy == null && $.cy == null ){
    $.fn.cy = $.fn.cytoscape;
    $.cy = $.cytoscape;
  }
};

module.exports = registerJquery;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var styfn = {};

// (potentially expensive calculation)
// apply the style to the element based on
// - its bypass
// - what selectors match it
styfn.apply = function( eles ){
  var self = this;
  var _p = self._private;

  if( _p.newStyle ){ // clear style caches
    _p.contextStyles = {};
    _p.propDiffs = {};

    self.cleanElements( eles, true );
  }

  for( var ie = 0; ie < eles.length; ie++ ){
    var ele = eles[ ie ];

    var cxtMeta = self.getContextMeta( ele );
    var cxtStyle = self.getContextStyle( cxtMeta );
    var app = self.applyContextStyle( cxtMeta, cxtStyle, ele );

    self.updateTransitions( ele, app.diffProps );
    self.updateStyleHints( ele );

  } // for elements

  _p.newStyle = false;
};

styfn.getPropertiesDiff = function( oldCxtKey, newCxtKey ){
  var self = this;
  var cache = self._private.propDiffs = self._private.propDiffs || {};
  var dualCxtKey = oldCxtKey + '-' + newCxtKey;
  var cachedVal = cache[ dualCxtKey ];

  if( cachedVal ){
    return cachedVal;
  }

  var diffProps = [];
  var addedProp = {};

  for( var i = 0; i < self.length; i++ ){
    var cxt = self[ i ];
    var oldHasCxt = oldCxtKey[ i ] === 't';
    var newHasCxt = newCxtKey[ i ] === 't';
    var cxtHasDiffed = oldHasCxt !== newHasCxt;
    var cxtHasMappedProps = cxt.mappedProperties.length > 0;

    if( cxtHasDiffed || cxtHasMappedProps ){
      var props;

      if( cxtHasDiffed && cxtHasMappedProps ){
        props = cxt.properties; // suffices b/c mappedProperties is a subset of properties
      } else if( cxtHasDiffed ){
        props = cxt.properties; // need to check them all
      } else if( cxtHasMappedProps ){
        props = cxt.mappedProperties; // only need to check mapped
      }

      for( var j = 0; j < props.length; j++ ){
        var prop = props[ j ];
        var name = prop.name;

        // if a later context overrides this property, then the fact that this context has switched/diffed doesn't matter
        // (semi expensive check since it makes this function O(n^2) on context length, but worth it since overall result
        // is cached)
        var laterCxtOverrides = false;
        for( var k = i + 1; k < self.length; k++ ){
          var laterCxt = self[ k ];
          var hasLaterCxt = newCxtKey[ k ] === 't';

          if( !hasLaterCxt ){ continue; } // can't override unless the context is active

          laterCxtOverrides = laterCxt.properties[ prop.name ] != null;

          if( laterCxtOverrides ){ break; } // exit early as long as one later context overrides
        }

        if( !addedProp[ name ] && !laterCxtOverrides ){
          addedProp[ name ] = true;
          diffProps.push( name );
        }
      } // for props
    } // if

  } // for contexts

  cache[ dualCxtKey ] = diffProps;
  return diffProps;
};

styfn.getContextMeta = function( ele ){
  var self = this;
  var cxtKey = '';
  var diffProps;
  var prevKey = ele._private.styleCxtKey || '';

  if( self._private.newStyle ){
    prevKey = ''; // since we need to apply all style if a fresh stylesheet
  }

  // get the cxt key
  for( var i = 0; i < self.length; i++ ){
    var context = self[ i ];
    var contextSelectorMatches = context.selector && context.selector.matches( ele ); // NB: context.selector may be null for 'core'

    if( contextSelectorMatches ){
      cxtKey += 't';
    } else {
      cxtKey += 'f';
    }
  } // for context

  diffProps = self.getPropertiesDiff( prevKey, cxtKey );

  ele._private.styleCxtKey = cxtKey;

  return {
    key: cxtKey,
    diffPropNames: diffProps
  };
};

// gets a computed ele style object based on matched contexts
styfn.getContextStyle = function( cxtMeta ){
  var cxtKey = cxtMeta.key;
  var self = this;
  var cxtStyles = this._private.contextStyles = this._private.contextStyles || {};

  // if already computed style, returned cached copy
  if( cxtStyles[ cxtKey ] ){ return cxtStyles[ cxtKey ]; }

  var style = {
    _private: {
      key: cxtKey
    }
  };

  for( var i = 0; i < self.length; i++ ){
    var cxt = self[ i ];
    var hasCxt = cxtKey[ i ] === 't';

    if( !hasCxt ){ continue; }

    for( var j = 0; j < cxt.properties.length; j++ ){
      var prop = cxt.properties[ j ];
      var styProp = style[ prop.name ] = prop;

      styProp.context = cxt;
    }
  }

  cxtStyles[ cxtKey ] = style;
  return style;
};

styfn.applyContextStyle = function( cxtMeta, cxtStyle, ele ){
  var self = this;
  var diffProps = cxtMeta.diffPropNames;
  var retDiffProps = {};

  for( var i = 0; i < diffProps.length; i++ ){
    var diffPropName = diffProps[ i ];
    var cxtProp = cxtStyle[ diffPropName ];
    var eleProp = ele.pstyle( diffPropName );

    if( !cxtProp ){ // no context prop means delete
      if( !eleProp ){
        continue; // no existing prop means nothing needs to be removed
        // nb affects initial application on mapped values like control-point-distances
      } else if( eleProp.bypass ){
        cxtProp = { name: diffPropName, deleteBypassed: true };
      } else {
        cxtProp = { name: diffPropName, delete: true };
      }
    }

    // save cycles when the context prop doesn't need to be applied
    if( eleProp === cxtProp ){ continue; }

    var retDiffProp = retDiffProps[ diffPropName ] = {
      prev: eleProp
    };

    self.applyParsedProperty( ele, cxtProp );

    retDiffProp.next = ele.pstyle( diffPropName );

    if( retDiffProp.next && retDiffProp.next.bypass ){
      retDiffProp.next = retDiffProp.next.bypassed;
    }
  }

  return {
    diffProps: retDiffProps
  };
};

styfn.updateStyleHints = function(ele){
  var _p = ele._private;
  var self = this;

  if( ele.removed() ){ return; }

  // set whether has pie or not; for greater efficiency
  var hasPie = false;
  if( _p.group === 'nodes' ){
    for( var i = 1; i <= self.pieBackgroundN; i++ ){ // 1..N
      var size = ele.pstyle( 'pie-' + i + '-background-size' ).value;

      if( size > 0 ){
        hasPie = true;
        break;
      }
    }
  }

  _p.hasPie = hasPie;

  var transform = ele.pstyle( 'text-transform' ).strValue;
  var content = ele.pstyle( 'label' ).strValue;
  var srcContent = ele.pstyle( 'source-label' ).strValue;
  var tgtContent = ele.pstyle( 'target-label' ).strValue;
  var fStyle = ele.pstyle( 'font-style' ).strValue;
  var size = ele.pstyle( 'font-size' ).pfValue + 'px';
  var family = ele.pstyle( 'font-family' ).strValue;
  // var variant = style['font-variant'].strValue;
  var weight = ele.pstyle( 'font-weight' ).strValue;
  var valign = ele.pstyle( 'text-valign' ).strValue;
  var halign = ele.pstyle( 'text-valign' ).strValue;
  var oWidth = ele.pstyle( 'text-outline-width' ).pfValue;
  var wrap = ele.pstyle( 'text-wrap' ).strValue;
  var wrapW = ele.pstyle( 'text-max-width' ).pfValue;
  var labelStyleKey = fStyle + '$' + size + '$' + family + '$' + weight + '$' + transform + '$' + valign + '$' + halign + '$' + oWidth + '$' + wrap + '$' + wrapW;
  _p.labelStyleKey = labelStyleKey;
  _p.sourceLabelKey = labelStyleKey + '$' + srcContent;
  _p.targetLabelKey = labelStyleKey + '$' + tgtContent;
  _p.labelKey = labelStyleKey + '$' + content;
  _p.fontKey = fStyle + '$' + weight + '$' + size + '$' + family;

  _p.styleKey = Date.now();
};

// apply a property to the style (for internal use)
// returns whether application was successful
//
// now, this function flattens the property, and here's how:
//
// for parsedProp:{ bypass: true, deleteBypass: true }
// no property is generated, instead the bypass property in the
// element's style is replaced by what's pointed to by the `bypassed`
// field in the bypass property (i.e. restoring the property the
// bypass was overriding)
//
// for parsedProp:{ mapped: truthy }
// the generated flattenedProp:{ mapping: prop }
//
// for parsedProp:{ bypass: true }
// the generated flattenedProp:{ bypassed: parsedProp }
styfn.applyParsedProperty = function( ele, parsedProp ){
  var self = this;
  var prop = parsedProp;
  var style = ele._private.style;
  var fieldVal, flatProp;
  var types = self.types;
  var type = self.properties[ prop.name ].type;
  var propIsBypass = prop.bypass;
  var origProp = style[ prop.name ];
  var origPropIsBypass = origProp && origProp.bypass;
  var _p = ele._private;

  // edges connected to compound nodes can not be haystacks
  if(
    parsedProp.name === 'curve-style'
    && parsedProp.value === 'haystack'
    && ele.isEdge()
    && ( ele.isLoop() || ele.source().isParent() || ele.target().isParent() )
  ){
    prop = parsedProp = this.parse( parsedProp.name, 'bezier', propIsBypass );
  }

  if( prop.delete ){ // delete the property and use the default value on falsey value
    style[ prop.name ] = undefined;

    return true;
  }

  if( prop.deleteBypassed ){ // delete the property that the
    if( !origProp ){
      return true; // can't delete if no prop

    } else if( origProp.bypass ){ // delete bypassed
      origProp.bypassed = undefined;
      return true;

    } else {
      return false; // we're unsuccessful deleting the bypassed
    }
  }

  // check if we need to delete the current bypass
  if( prop.deleteBypass ){ // then this property is just here to indicate we need to delete
    if( !origProp ){
      return true; // property is already not defined

    } else if( origProp.bypass ){ // then replace the bypass property with the original
      // because the bypassed property was already applied (and therefore parsed), we can just replace it (no reapplying necessary)
      style[ prop.name ] = origProp.bypassed;
      return true;

    } else {
      return false; // we're unsuccessful deleting the bypass
    }
  }

  var printMappingErr = function(){
    util.error( 'Do not assign mappings to elements without corresponding data (e.g. ele `' + ele.id() + '` for property `' + prop.name + '` with data field `' + prop.field + '`); try a `[' + prop.field + ']` selector to limit scope to elements with `' + prop.field + '` defined' );
  };

  // put the property in the style objects
  switch( prop.mapped ){ // flatten the property if mapped
  case types.mapData:
  case types.mapLayoutData:
  case types.mapScratch:

    var isLayout = prop.mapped === types.mapLayoutData;
    var isScratch = prop.mapped === types.mapScratch;

    // flatten the field (e.g. data.foo.bar)
    var fields = prop.field.split( '.' );
    var fieldVal;

    if( isScratch || isLayout ){
      fieldVal = _p.scratch;
    } else {
      fieldVal = _p.data;
    }

    for( var i = 0; i < fields.length && fieldVal; i++ ){
      var field = fields[ i ];
      fieldVal = fieldVal[ field ];
    }

    var percent;
    if( !is.number( fieldVal ) ){ // then keep the mapping but assume 0% for now
      percent = 0;
    } else {
      percent = (fieldVal - prop.fieldMin) / (prop.fieldMax - prop.fieldMin);
    }

    // make sure to bound percent value
    if( percent < 0 ){
      percent = 0;
    } else if( percent > 1 ){
      percent = 1;
    }

    if( type.color ){
      var r1 = prop.valueMin[0];
      var r2 = prop.valueMax[0];
      var g1 = prop.valueMin[1];
      var g2 = prop.valueMax[1];
      var b1 = prop.valueMin[2];
      var b2 = prop.valueMax[2];
      var a1 = prop.valueMin[3] == null ? 1 : prop.valueMin[3];
      var a2 = prop.valueMax[3] == null ? 1 : prop.valueMax[3];

      var clr = [
        Math.round( r1 + (r2 - r1) * percent ),
        Math.round( g1 + (g2 - g1) * percent ),
        Math.round( b1 + (b2 - b1) * percent ),
        Math.round( a1 + (a2 - a1) * percent )
      ];

      flatProp = { // colours are simple, so just create the flat property instead of expensive string parsing
        bypass: prop.bypass, // we're a bypass if the mapping property is a bypass
        name: prop.name,
        value: clr,
        strValue: 'rgb(' + clr[0] + ', ' + clr[1] + ', ' + clr[2] + ')'
      };

    } else if( type.number ){
      var calcValue = prop.valueMin + (prop.valueMax - prop.valueMin) * percent;
      flatProp = this.parse( prop.name, calcValue, prop.bypass, true );

    } else {
      return false; // can only map to colours and numbers
    }

    if( !flatProp ){ // if we can't flatten the property, then use the origProp so we still keep the mapping itself
      flatProp = this.parse( prop.name, origProp.strValue, prop.bypass, true );
    }

    if( !flatProp ){ printMappingErr(); }
    flatProp.mapping = prop; // keep a reference to the mapping
    prop = flatProp; // the flattened (mapped) property is the one we want

    break;

  // direct mapping
  case types.data:
  case types.layoutData:
  case types.scratch:
    var isLayout = prop.mapped === types.layoutData;
    var isScratch = prop.mapped === types.scratch;

    // flatten the field (e.g. data.foo.bar)
    var fields = prop.field.split( '.' );
    var fieldVal;

    if( isScratch || isLayout ){
      fieldVal = _p.scratch;
    } else {
      fieldVal = _p.data;
    }

    if( fieldVal ){ for( var i = 0; i < fields.length; i++ ){
      var field = fields[ i ];
      fieldVal = fieldVal[ field ];
    } }

    flatProp = this.parse( prop.name, fieldVal, prop.bypass, true );

    if( !flatProp ){ // if we can't flatten the property, then use the origProp so we still keep the mapping itself
      var flatPropVal = origProp ? origProp.strValue : '';

      flatProp = this.parse( prop.name, flatPropVal, prop.bypass, true );
    }

    if( !flatProp ){ printMappingErr(); }
    flatProp.mapping = prop; // keep a reference to the mapping
    prop = flatProp; // the flattened (mapped) property is the one we want

    break;

  case types.fn:
    var fn = prop.value;
    var fnRetVal = fn( ele );

    flatProp = this.parse( prop.name, fnRetVal, prop.bypass, true );
    flatProp.mapping = prop; // keep a reference to the mapping
    prop = flatProp; // the flattened (mapped) property is the one we want

    break;

  case undefined:
    break; // just set the property

  default:
    return false; // not a valid mapping
  }

  // if the property is a bypass property, then link the resultant property to the original one
  if( propIsBypass ){
    if( origPropIsBypass ){ // then this bypass overrides the existing one
      prop.bypassed = origProp.bypassed; // steal bypassed prop from old bypass
    } else { // then link the orig prop to the new bypass
      prop.bypassed = origProp;
    }

    style[ prop.name ] = prop; // and set

  } else { // prop is not bypass
    if( origPropIsBypass ){ // then keep the orig prop (since it's a bypass) and link to the new prop
      origProp.bypassed = prop;
    } else { // then just replace the old prop with the new one
      style[ prop.name ] = prop;
    }
  }

  return true;
};

styfn.cleanElements = function( eles, keepBypasses ){
  var self = this;
  var props = self.properties;

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[i];

    if( !keepBypasses ){
      ele._private.style = {};
    } else {
      var style = ele._private.style;

      for( var j = 0; j < props.length; j++ ){
        var prop = props[j];
        var eleProp = style[ prop.name ];

        if( eleProp ){
          if( eleProp.bypass ){
            eleProp.bypassed = null;
          } else {
            style[ prop.name ] = null;
          }
        }
      }
    }
  }
};

// updates the visual style for all elements (useful for manual style modification after init)
styfn.update = function(){
  var cy = this._private.cy;
  var eles = cy.mutableElements();

  eles.updateStyle();
};

// just update the functional properties (i.e. mappings) in the elements'
// styles (less expensive than recalculation)
styfn.updateMappers = function( eles ){
  var self = this;

  for( var i = 0; i < eles.length; i++ ){ // for each ele
    var ele = eles[ i ];
    var style = ele._private.style;

    for( var j = 0; j < self.properties.length; j++ ){ // for each prop
      var prop = self.properties[ j ];
      var propInStyle = style[ prop.name ];

      if( propInStyle && propInStyle.mapping ){
        var mapping = propInStyle.mapping;
        this.applyParsedProperty( ele, mapping ); // reapply the mapping property
      }
    }

    this.updateStyleHints( ele );
  }
};

// diffProps : { name => { prev, next } }
styfn.updateTransitions = function( ele, diffProps, isBypass ){
  var self = this;
  var _p = ele._private;
  var props = ele.pstyle( 'transition-property' ).value;
  var duration = ele.pstyle( 'transition-duration' ).pfValue;
  var delay = ele.pstyle( 'transition-delay' ).pfValue;

  if( props.length > 0 && duration > 0 ){

    var css = {};

    // build up the style to animate towards
    var anyPrev = false;
    for( var i = 0; i < props.length; i++ ){
      var prop = props[ i ];
      var styProp = ele.pstyle( prop );
      var diffProp = diffProps[ prop ];

      if( !diffProp ){ continue; }

      var prevProp = diffProp.prev;
      var fromProp = prevProp;
      var toProp = diffProp.next != null ? diffProp.next : styProp;
      var diff = false;
      var initVal;
      var initDt = 0.000001; // delta time % value for initVal (allows animating out of init zero opacity)

      if( !fromProp ){ continue; }

      // consider px values
      if( is.number( fromProp.pfValue ) && is.number( toProp.pfValue ) ){
        diff = toProp.pfValue - fromProp.pfValue; // nonzero is truthy
        initVal = fromProp.pfValue + initDt * diff;

      // consider numerical values
      } else if( is.number( fromProp.value ) && is.number( toProp.value ) ){
        diff = toProp.value - fromProp.value; // nonzero is truthy
        initVal = fromProp.value + initDt * diff;

      // consider colour values
      } else if( is.array( fromProp.value ) && is.array( toProp.value ) ){
        diff = fromProp.value[0] !== toProp.value[0]
          || fromProp.value[1] !== toProp.value[1]
          || fromProp.value[2] !== toProp.value[2]
        ;

        initVal = fromProp.strValue;
      }

      // the previous value is good for an animation only if it's different
      if( diff ){
        css[ prop ] = toProp.strValue; // to val
        this.applyBypass( ele, prop, initVal ); // from val
        anyPrev = true;
      }

    } // end if props allow ani

    // can't transition if there's nothing previous to transition from
    if( !anyPrev ){ return; }

    _p.transitioning = true;

    ele.stop();

    if( delay > 0 ){
      ele.delay( delay );
    }

    ele.animate( {
      css: css
    }, {
      duration: duration,
      easing: ele.pstyle( 'transition-timing-function' ).value,
      queue: false,
      complete: function(){
        if( !isBypass ){
          self.removeBypasses( ele, props );
        }

        _p.transitioning = false;
      }
    } );

  } else if( _p.transitioning ){
    ele.stop();

    this.removeBypasses( ele, props );

    _p.transitioning = false;
  }
};

module.exports = styfn;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );

var styfn = {};

// bypasses are applied to an existing style on an element, and just tacked on temporarily
// returns true iff application was successful for at least 1 specified property
styfn.applyBypass = function( eles, name, value, updateTransitions ){
  var self = this;
  var props = [];
  var isBypass = true;

  // put all the properties (can specify one or many) in an array after parsing them
  if( name === '*' || name === '**' ){ // apply to all property names

    if( value !== undefined ){
      for( var i = 0; i < self.properties.length; i++ ){
        var prop = self.properties[ i ];
        var name = prop.name;

        var parsedProp = this.parse( name, value, true );

        if( parsedProp ){
          props.push( parsedProp );
        }
      }
    }

  } else if( is.string( name ) ){ // then parse the single property
    var parsedProp = this.parse( name, value, true );

    if( parsedProp ){
      props.push( parsedProp );
    }
  } else if( is.plainObject( name ) ){ // then parse each property
    var specifiedProps = name;
    updateTransitions = value;

    for( var i = 0; i < self.properties.length; i++ ){
      var prop = self.properties[ i ];
      var name = prop.name;
      var value = specifiedProps[ name ];

      if( value === undefined ){ // try camel case name too
        value = specifiedProps[ util.dash2camel( name ) ];
      }

      if( value !== undefined ){
        var parsedProp = this.parse( name, value, true );

        if( parsedProp ){
          props.push( parsedProp );
        }
      }
    }
  } else { // can't do anything without well defined properties
    return false;
  }

  // we've failed if there are no valid properties
  if( props.length === 0 ){ return false; }

  // now, apply the bypass properties on the elements
  var ret = false; // return true if at least one succesful bypass applied
  for( var i = 0; i < eles.length; i++ ){ // for each ele
    var ele = eles[ i ];
    var diffProps = {};
    var diffProp;

    for( var j = 0; j < props.length; j++ ){ // for each prop
      var prop = props[ j ];

      if( updateTransitions ){
        var prevProp = ele.pstyle( prop.name );
        diffProp = diffProps[ prop.name ] = { prev: prevProp };
      }

      ret = this.applyParsedProperty( ele, prop ) || ret;

      if( updateTransitions ){
        diffProp.next = ele.pstyle( prop.name );
      }

    } // for props

    if( ret ){
      this.updateStyleHints( ele );
    }

    if( updateTransitions ){
      this.updateTransitions( ele, diffProps, isBypass );
    }
  } // for eles

  return ret;
};

// only useful in specific cases like animation
styfn.overrideBypass = function( eles, name, value ){
  name = util.camel2dash( name );

  for( var i = 0; i < eles.length; i++ ){
    var ele = eles[ i ];
    var prop = ele._private.style[ name ];
    var type = this.properties[ name ].type;
    var isColor = type.color;
    var isMulti = type.mutiple;

    if( !prop || !prop.bypass ){ // need a bypass if one doesn't exist
      this.applyBypass( ele, name, value );
      continue;
    }

    prop.value = value;

    if( prop.pfValue != null ){
      prop.pfValue = value;
    }

    if( isColor ){
      prop.strValue = 'rgb(' + value.join( ',' ) + ')';
    } else if( isMulti ){
      prop.strValue = value.join( ' ' );
    } else {
      prop.strValue = '' + value;
    }
  }
};

styfn.removeAllBypasses = function( eles, updateTransitions ){
  return this.removeBypasses( eles, this.propertyNames, updateTransitions );
};

styfn.removeBypasses = function( eles, props, updateTransitions ){
  var isBypass = true;

  for( var j = 0; j < eles.length; j++ ){
    var ele = eles[ j ];
    var diffProps = {};

    for( var i = 0; i < props.length; i++ ){
      var name = props[ i ];
      var prop = this.properties[ name ];
      var prevProp = ele.pstyle( prop.name );

      if( !prevProp || !prevProp.bypass ){
        // if a bypass doesn't exist for the prop, nothing needs to be removed
        continue;
      }

      var value = ''; // empty => remove bypass
      var parsedProp = this.parse( name, value, true );
      var diffProp = diffProps[ prop.name ] = { prev: prevProp };

      this.applyParsedProperty( ele, parsedProp );

      diffProp.next = ele.pstyle( prop.name );
    } // for props

    this.updateStyleHints( ele );

    if( updateTransitions ){
      this.updateTransitions( ele, diffProps, isBypass );
    }
  } // for eles
};

module.exports = styfn;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var window = __webpack_require__( 4 );

var styfn = {};

// gets what an em size corresponds to in pixels relative to a dom element
styfn.getEmSizeInPixels = function(){
  var px = this.containerCss( 'font-size' );

  if( px != null ){
    return parseFloat( px );
  } else {
    return 1; // for headless
  }
};

// gets css property from the core container
styfn.containerCss = function( propName ){
  var cy = this._private.cy;
  var domElement = cy.container();

  if( window && domElement && window.getComputedStyle ){
    return window.getComputedStyle( domElement ).getPropertyValue( propName );
  }
};

module.exports = styfn;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );

var styfn = {};

// gets the rendered style for an element
styfn.getRenderedStyle = function( ele ){
  return this.getRawStyle( ele, true );
};

// gets the raw style for an element
styfn.getRawStyle = function( ele, isRenderedVal ){
  var self = this;
  var ele = ele[0]; // insure it's an element

  if( ele ){
    var rstyle = {};

    for( var i = 0; i < self.properties.length; i++ ){
      var prop = self.properties[ i ];
      var val = self.getStylePropertyValue( ele, prop.name, isRenderedVal );

      if( val ){
        rstyle[ prop.name ] = val;
        rstyle[ util.dash2camel( prop.name ) ] = val;
      }
    }

    return rstyle;
  }
};

styfn.getStylePropertyValue = function( ele, propName, isRenderedVal ){
  var self = this;
  var ele = ele[0]; // insure it's an element

  if( ele ){
    var prop = self.properties[ propName ];

    if( prop.alias ){
      prop = prop.pointsTo;
    }

    var type = prop.type;
    var styleProp = ele.pstyle( prop.name );
    var zoom = ele.cy().zoom();

    if( styleProp ){
      var units = styleProp.units ? type.implicitUnits || 'px' : null;
      var val = units ? [].concat( styleProp.pfValue ).map( function( pfValue ){
        return ( pfValue * (isRenderedVal ? zoom : 1) ) + units;
      } ).join( ' ' ) : styleProp.strValue;

      return val;
    }
  }
};

styfn.getAnimationStartStyle = function( ele, aniProps ){
  var rstyle = {};

  for( var i = 0; i < aniProps.length; i++ ){
    var aniProp = aniProps[ i ];
    var name = aniProp.name;

    var styleProp = ele.pstyle( name );

    if( styleProp !== undefined ){ // then make a prop of it
      if( is.plainObject( styleProp ) ){
        styleProp = this.parse( name, styleProp.strValue );
      } else {
        styleProp = this.parse( name, styleProp );
      }
    }

    if( styleProp ){
      rstyle[ name ] = styleProp;
    }
  }

  return rstyle;
};

styfn.getPropsList = function( propsObj ){
  var self = this;
  var rstyle = [];
  var style = propsObj;
  var props = self.properties;

  if( style ){
    var names = Object.keys( style );

    for( var i = 0; i < names.length; i++ ){
      var name = names[i];
      var val = style[ name ];
      var prop = props[ name ] || props[ util.camel2dash( name ) ];
      var styleProp = this.parse( prop.name, val );

      rstyle.push( styleProp );
    }
  }

  return rstyle;
};

module.exports = styfn;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var styfn = {};

styfn.applyFromJson = function( json ){
  var style = this;

  for( var i = 0; i < json.length; i++ ){
    var context = json[ i ];
    var selector = context.selector;
    var props = context.style || context.css;
    var names = Object.keys( props );

    style.selector( selector ); // apply selector

    for( var j = 0; j < names.length; j++ ){
      var name = names[j];
      var value = props[ name ];

      style.css( name, value ); // apply property
    }
  }

  return style;
};

// accessible cy.style() function
styfn.fromJson = function( json ){
  var style = this;

  style.resetToDefault();
  style.applyFromJson( json );

  return style;
};

// get json from cy.style() api
styfn.json = function(){
  var json = [];

  for( var i = this.defaultLength; i < this.length; i++ ){
    var cxt = this[ i ];
    var selector = cxt.selector;
    var props = cxt.properties;
    var css = {};

    for( var j = 0; j < props.length; j++ ){
      var prop = props[ j ];
      css[ prop.name ] = prop.strValue;
    }

    json.push( {
      selector: !selector ? 'core' : selector.toString(),
      style: css
    } );
  }

  return json;
};

module.exports = styfn;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var is = __webpack_require__( 0 );
var math = __webpack_require__( 2 );

var styfn = {};

// a caching layer for property parsing
styfn.parse = function( name, value, propIsBypass, propIsFlat ){
  var self = this;

  // function values can't be cached in all cases, and there isn't much benefit of caching them anyway
  if( is.fn( value ) ){
    return self.parseImpl( name, value, propIsBypass, propIsFlat );
  }

  var argHash = [ name, value, propIsBypass, propIsFlat ].join( '$' );
  var propCache = self.propCache = self.propCache || {};
  var ret;

  if( !(ret = propCache[ argHash ]) ){
    ret = propCache[ argHash ] = self.parseImpl( name, value, propIsBypass, propIsFlat );
  }

  // always need a copy since props are mutated later in their lifecycles
  ret = util.copy( ret );

  if( ret ){
    ret.value = util.copy( ret.value ); // because it could be an array, e.g. colour
  }

  return ret;
};

// parse a property; return null on invalid; return parsed property otherwise
// fields :
// - name : the name of the property
// - value : the parsed, native-typed value of the property
// - strValue : a string value that represents the property value in valid css
// - bypass : true iff the property is a bypass property
var parseImpl = function( name, value, propIsBypass, propIsFlat ){
  var self = this;

  name = util.camel2dash( name ); // make sure the property name is in dash form (e.g. 'property-name' not 'propertyName')

  var property = self.properties[ name ];
  var passedValue = value;
  var types = self.types;

  if( !property ){ return null; } // return null on property of unknown name
  if( value === undefined || value === null ){ return null; } // can't assign null

  // the property may be an alias
  if( property.alias ){
    property = property.pointsTo;
    name = property.name;
  }

  var valueIsString = is.string( value );
  if( valueIsString ){ // trim the value to make parsing easier
    value = value.trim();
  }

  var type = property.type;
  if( !type ){ return null; } // no type, no luck

  // check if bypass is null or empty string (i.e. indication to delete bypass property)
  if( propIsBypass && (value === '' || value === null) ){
    return {
      name: name,
      value: value,
      bypass: true,
      deleteBypass: true
    };
  }

  // check if value is a function used as a mapper
  if( is.fn( value ) ){
    return {
      name: name,
      value: value,
      strValue: 'fn',
      mapped: types.fn,
      bypass: propIsBypass
    };
  }

  // check if value is mapped
  var data, mapData, layoutData, mapLayoutData, scratch, mapScratch;
  if( !valueIsString || propIsFlat ){
    // then don't bother to do the expensive regex checks

  } else if(
    ( data = new RegExp( types.data.regex ).exec( value ) ) ||
    ( layoutData = new RegExp( types.layoutData.regex ).exec( value ) ) ||
    ( scratch = new RegExp( types.scratch.regex ).exec( value ) )
  ){
    if( propIsBypass ){ return false; } // mappers not allowed in bypass

    var mapped;
    if( data ){
      mapped = types.data;
    } else if( layoutData ){
      mapped = types.layoutData;
    } else {
      mapped = types.scratch;
    }

    data = data || layoutData || scratch;

    return {
      name: name,
      value: data,
      strValue: '' + value,
      mapped: mapped,
      field: data[1],
      bypass: propIsBypass
    };

  } else if(
    ( mapData = new RegExp( types.mapData.regex ).exec( value ) ) ||
    ( mapLayoutData = new RegExp( types.mapLayoutData.regex ).exec( value ) ) ||
    ( mapScratch = new RegExp( types.mapScratch.regex ).exec( value ) )
  ){
    if( propIsBypass ){ return false; } // mappers not allowed in bypass
    if( type.multiple ){ return false; } // impossible to map to num

    var mapped;
    if( mapData ){
      mapped = types.mapData;
    } else if( mapLayoutData ){
      mapped = types.mapLayoutData;
    } else {
      mapped = types.mapScratch;
    }

    mapData = mapData || mapLayoutData || mapScratch;

    // we can map only if the type is a colour or a number
    if( !(type.color || type.number) ){ return false; }

    var valueMin = this.parse( name, mapData[4] ); // parse to validate
    if( !valueMin || valueMin.mapped ){ return false; } // can't be invalid or mapped

    var valueMax = this.parse( name, mapData[5] ); // parse to validate
    if( !valueMax || valueMax.mapped ){ return false; } // can't be invalid or mapped

    // check if valueMin and valueMax are the same
    if( valueMin.value === valueMax.value ){
      return false; // can't make much of a mapper without a range

    } else if( type.color ){
      var c1 = valueMin.value;
      var c2 = valueMax.value;

      var same = c1[0] === c2[0] // red
        && c1[1] === c2[1] // green
        && c1[2] === c2[2] // blue
        && ( // optional alpha
          c1[3] === c2[3] // same alpha outright
          || (
            (c1[3] == null || c1[3] === 1) // full opacity for colour 1?
            &&
            (c2[3] == null || c2[3] === 1) // full opacity for colour 2?
          )
        )
      ;

      if( same ){ return false; } // can't make a mapper without a range
    }

    return {
      name: name,
      value: mapData,
      strValue: '' + value,
      mapped: mapped,
      field: mapData[1],
      fieldMin: parseFloat( mapData[2] ), // min & max are numeric
      fieldMax: parseFloat( mapData[3] ),
      valueMin: valueMin.value,
      valueMax: valueMax.value,
      bypass: propIsBypass
    };
  }

  if( type.multiple && propIsFlat !== 'multiple' ){
    var vals;

    if( valueIsString ){
      vals = value.split( /\s+/ );
    } else if( is.array( value ) ){
      vals = value;
    } else {
      vals = [ value ];
    }

    if( type.evenMultiple && vals.length % 2 !== 0 ){ return null; }

    var valArr = vals.map( function( v ){
      var p = self.parse( name, v, propIsBypass, 'multiple' );

      if( p.pfValue != null ){
        return p.pfValue;
      } else {
        return p.value;
      }
    } );

    return {
      name: name,
      value: valArr,
      pfValue: valArr,
      strValue: valArr.join( ' ' ),
      bypass: propIsBypass,
      units: type.number && !type.unitless ? type.implicitUnits || 'px' : undefined
    };
  }

  // several types also allow enums
  var checkEnums = function(){
    for( var i = 0; i < type.enums.length; i++ ){
      var en = type.enums[ i ];

      if( en === value ){
        return {
          name: name,
          value: value,
          strValue: '' + value,
          bypass: propIsBypass
        };
      }
    }

    return null;
  };

  // check the type and return the appropriate object
  if( type.number ){
    var units;
    var implicitUnits = 'px'; // not set => px

    if( type.units ){ // use specified units if set
      units = type.units;
    }

    if( type.implicitUnits ){
      implicitUnits = type.implicitUnits;
    }

    if( !type.unitless ){
      if( valueIsString ){
        var unitsRegex = 'px|em' + (type.allowPercent ? '|\\%' : '');
        if( units ){ unitsRegex = units; } // only allow explicit units if so set
        var match = value.match( '^(' + util.regex.number + ')(' + unitsRegex + ')?' + '$' );

        if( match ){
          value = match[1];
          units = match[2] || implicitUnits;
        }

      } else if( !units || type.implicitUnits ){
        units = implicitUnits; // implicitly px if unspecified
      }
    }

    value = parseFloat( value );

    // if not a number and enums not allowed, then the value is invalid
    if( isNaN( value ) && type.enums === undefined ){
      return null;
    }

    // check if this number type also accepts special keywords in place of numbers
    // (i.e. `left`, `auto`, etc)
    if( isNaN( value ) && type.enums !== undefined ){
      value = passedValue;

      return checkEnums();
    }

    // check if value must be an integer
    if( type.integer && !is.integer( value ) ){
      return null;
    }

    // check value is within range
    if( (type.min !== undefined && value < type.min)
    || (type.max !== undefined && value > type.max)
    ){
      return null;
    }

    var ret = {
      name: name,
      value: value,
      strValue: '' + value + (units ? units : ''),
      units: units,
      bypass: propIsBypass
    };

    // normalise value in pixels
    if( type.unitless || (units !== 'px' && units !== 'em') ){
      ret.pfValue = value;
    } else {
      ret.pfValue = ( units === 'px' || !units ? (value) : (this.getEmSizeInPixels() * value) );
    }

    // normalise value in ms
    if( units === 'ms' || units === 's' ){
      ret.pfValue = units === 'ms' ? value : 1000 * value;
    }

    // normalise value in rad
    if( units === 'deg' || units === 'rad' ){
      ret.pfValue = units === 'rad' ? value : math.deg2rad( value );
    }

    return ret;

  } else if( type.propList ){

    var props = [];
    var propsStr = '' + value;

    if( propsStr === 'none' ){
      // leave empty

    } else { // go over each prop

      var propsSplit = propsStr.split( ',' );
      for( var i = 0; i < propsSplit.length; i++ ){
        var propName = propsSplit[ i ].trim();

        if( self.properties[ propName ] ){
          props.push( propName );
        }
      }

      if( props.length === 0 ){ return null; }
    }

    return {
      name: name,
      value: props,
      strValue: props.length === 0 ? 'none' : props.join( ', ' ),
      bypass: propIsBypass
    };

  } else if( type.color ){
    var tuple = util.color2tuple( value );

    if( !tuple ){ return null; }

    return {
      name: name,
      value: tuple,
      strValue: '' + value,
      bypass: propIsBypass,
      roundValue: true
    };

  } else if( type.regex || type.regexes ){

    // first check enums
    if( type.enums ){
      var enumProp = checkEnums();

      if( enumProp ){ return enumProp; }
    }

    var regexes = type.regexes ? type.regexes : [ type.regex ];

    for( var i = 0; i < regexes.length; i++ ){
      var regex = new RegExp( regexes[ i ] ); // make a regex from the type string
      var m = regex.exec( value );

      if( m ){ // regex matches
        return {
          name: name,
          value: m,
          strValue: '' + value,
          bypass: propIsBypass
        };

      }
    }

    return null; // didn't match any

  } else if( type.string ){
    // just return
    return {
      name: name,
      value: '' + value,
      strValue: '' + value,
      bypass: propIsBypass
    };

  } else if( type.enums ){ // check enums last because it's a combo type in others
    return checkEnums();

  } else {
    return null; // not a type we can handle
  }

};
styfn.parseImpl = parseImpl;

module.exports = styfn;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );

var styfn = {};

(function(){
  var number = util.regex.number;
  var rgba = util.regex.rgbaNoBackRefs;
  var hsla = util.regex.hslaNoBackRefs;
  var hex3 = util.regex.hex3;
  var hex6 = util.regex.hex6;
  var data = function( prefix ){ return '^' + prefix + '\\s*\\(\\s*([\\w\\.]+)\\s*\\)$'; };
  var mapData = function( prefix ){
    var mapArg = number + '|\\w+|' + rgba + '|' + hsla + '|' + hex3 + '|' + hex6;
    return '^' + prefix + '\\s*\\(([\\w\\.]+)\\s*\\,\\s*(' + number + ')\\s*\\,\\s*(' + number + ')\\s*,\\s*(' + mapArg + ')\\s*\\,\\s*(' + mapArg + ')\\)$';
  };

  // each visual style property has a type and needs to be validated according to it
  styfn.types = {
    time: { number: true, min: 0, units: 's|ms', implicitUnits: 'ms' },
    percent: { number: true, min: 0, max: 100, units: '%', implicitUnits: '%' },
    zeroOneNumber: { number: true, min: 0, max: 1, unitless: true },
    nOneOneNumber: { number: true, min: -1, max: 1, unitless: true },
    nonNegativeInt: { number: true, min: 0, integer: true, unitless: true },
    position: { enums: [ 'parent', 'origin' ] },
    nodeSize: { number: true, min: 0, enums: [ 'label' ] },
    number: { number: true, unitless: true },
    numbers: { number: true, unitless: true, multiple: true },
    size: { number: true, min: 0 },
    bidirectionalSize: { number: true }, // allows negative
    bidirectionalSizes: { number: true, multiple: true }, // allows negative
    bgSize: { number: true, min: 0, allowPercent: true },
    bgWH: { number: true, min: 0, allowPercent: true, enums: [ 'auto' ] },
    bgPos: { number: true, allowPercent: true },
    bgRepeat: { enums: [ 'repeat', 'repeat-x', 'repeat-y', 'no-repeat' ] },
    bgFit: { enums: [ 'none', 'contain', 'cover' ] },
    bgCrossOrigin: { enums: [ 'anonymous', 'use-credentials' ] },
    bgClip: { enums: [ 'none', 'node' ] },
    color: { color: true },
    bool: { enums: [ 'yes', 'no' ] },
    lineStyle: { enums: [ 'solid', 'dotted', 'dashed' ] },
    borderStyle: { enums: [ 'solid', 'dotted', 'dashed', 'double' ] },
    curveStyle: { enums: [ 'bezier', 'unbundled-bezier', 'haystack', 'segments' ] },
    fontFamily: { regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$' },
    fontVariant: { enums: [ 'small-caps', 'normal' ] },
    fontStyle: { enums: [ 'italic', 'normal', 'oblique' ] },
    fontWeight: { enums: [ 'normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '800', '900', 100, 200, 300, 400, 500, 600, 700, 800, 900 ] },
    textDecoration: { enums: [ 'none', 'underline', 'overline', 'line-through' ] },
    textTransform: { enums: [ 'none', 'uppercase', 'lowercase' ] },
    textWrap: { enums: [ 'none', 'wrap' ] },
    textBackgroundShape: { enums: [ 'rectangle', 'roundrectangle' ]},
    nodeShape: { enums: [ 'rectangle', 'roundrectangle', 'ellipse', 'triangle', 'square', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'star', 'diamond', 'vee', 'rhomboid', 'polygon' ] },
    compoundIncludeLabels: { enums: [ 'include', 'exclude' ] },
    arrowShape: { enums: [ 'tee', 'triangle', 'triangle-tee', 'triangle-backcurve', 'half-triangle-overshot', 'vee', 'square', 'circle', 'diamond', 'none' ] },
    arrowFill: { enums: [ 'filled', 'hollow' ] },
    display: { enums: [ 'element', 'none' ] },
    visibility: { enums: [ 'hidden', 'visible' ] },
    valign: { enums: [ 'top', 'center', 'bottom' ] },
    halign: { enums: [ 'left', 'center', 'right' ] },
    text: { string: true },
    data: { mapping: true, regex: data( 'data' ) },
    layoutData: { mapping: true, regex: data( 'layoutData' ) },
    scratch: { mapping: true, regex: data( 'scratch' ) },
    mapData: { mapping: true, regex: mapData( 'mapData' ) },
    mapLayoutData: { mapping: true, regex: mapData( 'mapLayoutData' ) },
    mapScratch: { mapping: true, regex: mapData( 'mapScratch' ) },
    fn: { mapping: true, fn: true },
    url: { regex: 'url\\s*\\(\\s*[\'"]?(.+?)[\'"]?\\s*\\)|none|(.+)$' },
    propList: { propList: true },
    angle: { number: true, units: 'deg|rad', implicitUnits: 'rad' },
    textRotation: { number: true, units: 'deg|rad', implicitUnits: 'rad', enums: [ 'none', 'autorotate' ] },
    polygonPointList: { number: true, multiple: true, evenMultiple: true, min: -1, max: 1, unitless: true },
    edgeDistances: { enums: ['intersection', 'node-position'] },
    easing: {
      regexes: [
        '^(spring)\\s*\\(\\s*(' + number + ')\\s*,\\s*(' + number + ')\\s*\\)$',
        '^(cubic-bezier)\\s*\\(\\s*(' + number + ')\\s*,\\s*(' + number + ')\\s*,\\s*(' + number + ')\\s*,\\s*(' + number + ')\\s*\\)$'
      ],
      enums: [
        'linear',
        'ease', 'ease-in', 'ease-out', 'ease-in-out',
        'ease-in-sine', 'ease-out-sine', 'ease-in-out-sine',
        'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad',
        'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic',
        'ease-in-quart', 'ease-out-quart', 'ease-in-out-quart',
        'ease-in-quint', 'ease-out-quint', 'ease-in-out-quint',
        'ease-in-expo', 'ease-out-expo', 'ease-in-out-expo',
        'ease-in-circ', 'ease-out-circ', 'ease-in-out-circ'
      ]
    }
  };

  // define visual style properties
  var t = styfn.types;
  var props = styfn.properties = [
    // main label
    { name: 'label', type: t.text },
    { name: 'text-rotation', type: t.textRotation },
    { name: 'text-margin-x', type: t.bidirectionalSize },
    { name: 'text-margin-y', type: t.bidirectionalSize },

    // source label
    { name: 'source-label', type: t.text },
    { name: 'source-text-rotation', type: t.textRotation },
    { name: 'source-text-margin-x', type: t.bidirectionalSize },
    { name: 'source-text-margin-y', type: t.bidirectionalSize },
    { name: 'source-text-offset', type: t.size },

    // target label
    { name: 'target-label', type: t.text },
    { name: 'target-text-rotation', type: t.textRotation },
    { name: 'target-text-margin-x', type: t.bidirectionalSize },
    { name: 'target-text-margin-y', type: t.bidirectionalSize },
    { name: 'target-text-offset', type: t.size },

    // common label style
    { name: 'text-valign', type: t.valign },
    { name: 'text-halign', type: t.halign },
    { name: 'color', type: t.color },
    { name: 'text-outline-color', type: t.color },
    { name: 'text-outline-width', type: t.size },
    { name: 'text-outline-opacity', type: t.zeroOneNumber },
    { name: 'text-opacity', type: t.zeroOneNumber },
    { name: 'text-background-color', type: t.color },
    { name: 'text-background-margin', type: t.size },
    { name: 'text-background-opacity', type: t.zeroOneNumber },
    { name: 'text-border-opacity', type: t.zeroOneNumber },
    { name: 'text-border-color', type: t.color },
    { name: 'text-border-width', type: t.size },
    { name: 'text-border-style', type: t.borderStyle },
    { name: 'text-background-shape', type: t.textBackgroundShape},
    // { name: 'text-decoration', type: t.textDecoration }, // not supported in canvas
    { name: 'text-transform', type: t.textTransform },
    { name: 'text-wrap', type: t.textWrap },
    { name: 'text-max-width', type: t.size },
    { name: 'text-events', type: t.bool },
    { name: 'font-family', type: t.fontFamily },
    { name: 'font-style', type: t.fontStyle },
    // { name: 'font-variant', type: t.fontVariant }, // not useful
    { name: 'font-weight', type: t.fontWeight },
    { name: 'font-size', type: t.size },
    { name: 'min-zoomed-font-size', type: t.size },

    // behaviour
    { name: 'events', type: t.bool },

    // visibility
    { name: 'display', type: t.display },
    { name: 'visibility', type: t.visibility },
    { name: 'opacity', type: t.zeroOneNumber },
    { name: 'z-index', type: t.nonNegativeInt },

    // overlays
    { name: 'overlay-padding', type: t.size },
    { name: 'overlay-color', type: t.color },
    { name: 'overlay-opacity', type: t.zeroOneNumber },

    // shadows
    { name: 'shadow-blur', type: t.size },
    { name: 'shadow-color', type: t.color },
    { name: 'shadow-opacity', type: t.zeroOneNumber },
    { name: 'shadow-offset-x', type: t.bidirectionalSize },
    { name: 'shadow-offset-y', type: t.bidirectionalSize },

    // label shadows
    { name: 'text-shadow-blur', type: t.size },
    { name: 'text-shadow-color', type: t.color },
    { name: 'text-shadow-opacity', type: t.zeroOneNumber },
    { name: 'text-shadow-offset-x', type: t.bidirectionalSize },
    { name: 'text-shadow-offset-y', type: t.bidirectionalSize },

    // transition anis
    { name: 'transition-property', type: t.propList },
    { name: 'transition-duration', type: t.time },
    { name: 'transition-delay', type: t.time },
    { name: 'transition-timing-function', type: t.easing },

    // node body
    { name: 'height', type: t.nodeSize },
    { name: 'width', type: t.nodeSize },
    { name: 'shape', type: t.nodeShape },
    { name: 'shape-polygon-points', type: t.polygonPointList },
    { name: 'background-color', type: t.color },
    { name: 'background-opacity', type: t.zeroOneNumber },
    { name: 'background-blacken', type: t.nOneOneNumber },
    { name: 'padding', type: t.size },

    // node border
    { name: 'border-color', type: t.color },
    { name: 'border-opacity', type: t.zeroOneNumber },
    { name: 'border-width', type: t.size },
    { name: 'border-style', type: t.borderStyle },

    // node background images
    { name: 'background-image', type: t.url },
    { name: 'background-image-crossorigin', type: t.bgCrossOrigin },
    { name: 'background-image-opacity', type: t.zeroOneNumber },
    { name: 'background-position-x', type: t.bgPos },
    { name: 'background-position-y', type: t.bgPos },
    { name: 'background-repeat', type: t.bgRepeat },
    { name: 'background-fit', type: t.bgFit },
    { name: 'background-clip', type: t.bgClip },
    { name: 'background-width', type: t.bgWH },
    { name: 'background-height', type: t.bgWH },

    // compound props
    { name: 'position', type: t.position },
    { name: 'compound-sizing-wrt-labels', type: t.compoundIncludeLabels },

    // edge line
    { name: 'line-style', type: t.lineStyle },
    { name: 'line-color', type: t.color },
    { name: 'curve-style', type: t.curveStyle },
    { name: 'haystack-radius', type: t.zeroOneNumber },
    { name: 'control-point-step-size', type: t.size },
    { name: 'control-point-distances', type: t.bidirectionalSizes },
    { name: 'control-point-weights', type: t.numbers },
    { name: 'segment-distances', type: t.bidirectionalSizes },
    { name: 'segment-weights', type: t.numbers },
    { name: 'edge-distances', type: t.edgeDistances },

    // these are just for the core
    { name: 'selection-box-color', type: t.color },
    { name: 'selection-box-opacity', type: t.zeroOneNumber },
    { name: 'selection-box-border-color', type: t.color },
    { name: 'selection-box-border-width', type: t.size },
    { name: 'active-bg-color', type: t.color },
    { name: 'active-bg-opacity', type: t.zeroOneNumber },
    { name: 'active-bg-size', type: t.size },
    { name: 'outside-texture-bg-color', type: t.color },
    { name: 'outside-texture-bg-opacity', type: t.zeroOneNumber }
  ];

  // define aliases
  var aliases = styfn.aliases = [
    { name: 'content', pointsTo: 'label' },
    { name: 'control-point-distance', pointsTo: 'control-point-distances' },
    { name: 'control-point-weight', pointsTo: 'control-point-weights' },
    { name: 'edge-text-rotation', pointsTo: 'text-rotation' },
    { name: 'padding-left', pointsTo: 'padding' },
    { name: 'padding-right', pointsTo: 'padding' },
    { name: 'padding-top', pointsTo: 'padding' },
    { name: 'padding-bottom', pointsTo: 'padding' }
  ];

  // pie backgrounds for nodes
  styfn.pieBackgroundN = 16; // because the pie properties are numbered, give access to a constant N (for renderer use)
  props.push( { name: 'pie-size', type: t.bgSize } );
  for( var i = 1; i <= styfn.pieBackgroundN; i++ ){
    props.push( { name: 'pie-' + i + '-background-color', type: t.color } );
    props.push( { name: 'pie-' + i + '-background-size', type: t.percent } );
    props.push( { name: 'pie-' + i + '-background-opacity', type: t.zeroOneNumber } );
  }

  // edge arrows
  var arrowPrefixes = styfn.arrowPrefixes = [ 'source', 'mid-source', 'target', 'mid-target' ];
  [
    { name: 'arrow-shape', type: t.arrowShape },
    { name: 'arrow-color', type: t.color },
    { name: 'arrow-fill', type: t.arrowFill }
  ].forEach( function( prop ){
    arrowPrefixes.forEach( function( prefix ){
      var name = prefix + '-' + prop.name;
      var type = prop.type;

      props.push( { name: name, type: type } );
    } );
  }, {} );

  // list of property names
  styfn.propertyNames = props.map( function( p ){ return p.name; } );

  // allow access of properties by name ( e.g. style.properties.height )
  for( var i = 0; i < props.length; i++ ){
    var prop = props[ i ];

    props[ prop.name ] = prop; // allow lookup by name
  }

  // map aliases
  for( var i = 0; i < aliases.length; i++ ){
    var alias = aliases[ i ];
    var pointsToProp = props[ alias.pointsTo ];
    var aliasProp = {
      name: alias.name,
      alias: true,
      pointsTo: pointsToProp
    };

    // add alias prop for parsing
    props.push( aliasProp );

    props[ alias.name ] = aliasProp; // allow lookup by name
  }
})();

styfn.getDefaultProperty = function( name ){
  return this.getDefaultProperties()[ name ];
};

styfn.getDefaultProperties = util.memoize( function(){
  var rawProps = util.extend( {
    'events': 'yes',
    'text-events': 'no',
    'text-valign': 'top',
    'text-halign': 'center',
    'color': '#000',
    'text-outline-color': '#000',
    'text-outline-width': 0,
    'text-outline-opacity': 1,
    'text-opacity': 1,
    'text-decoration': 'none',
    'text-transform': 'none',
    'text-wrap': 'none',
    'text-max-width': 9999,
    'text-background-color': '#000',
    'text-background-opacity': 0,
    'text-background-margin': 0,
    'text-border-opacity': 0,
    'text-border-width': 0,
    'text-border-style': 'solid',
    'text-border-color': '#000',
    'text-background-shape': 'rectangle',
    'font-family': 'Helvetica Neue, Helvetica, sans-serif',
    'font-style': 'normal',
    // 'font-variant': fontVariant,
    'font-weight': 'normal',
    'font-size': 16,
    'min-zoomed-font-size': 0,
    'text-rotation': 'none',
    'source-text-rotation': 'none',
    'target-text-rotation': 'none',
    'visibility': 'visible',
    'display': 'element',
    'opacity': 1,
    'z-index': 0,
    'label': '',
    'text-margin-x': 0,
    'text-margin-y': 0,
    'source-label': '',
    'source-text-offset': 0,
    'source-text-margin-x': 0,
    'source-text-margin-y': 0,
    'target-label': '',
    'target-text-offset': 0,
    'target-text-margin-x': 0,
    'target-text-margin-y': 0,
    'overlay-opacity': 0,
    'overlay-color': '#000',
    'overlay-padding': 10,
    'shadow-opacity': 0,
    'shadow-color': '#000',
    'shadow-blur': 10,
    'shadow-offset-x': 0,
    'shadow-offset-y': 0,
    'text-shadow-opacity': 0,
    'text-shadow-color': '#000',
    'text-shadow-blur': 5,
    'text-shadow-offset-x': 0,
    'text-shadow-offset-y': 0,
    'transition-property': 'none',
    'transition-duration': 0,
    'transition-delay': 0,
    'transition-timing-function': 'linear',

    // node props
    'background-blacken': 0,
    'background-color': '#999',
    'background-opacity': 1,
    'background-image': 'none',
    'background-image-crossorigin': 'anonymous',
    'background-image-opacity': 1,
    'background-position-x': '50%',
    'background-position-y': '50%',
    'background-repeat': 'no-repeat',
    'background-fit': 'none',
    'background-clip': 'node',
    'background-width': 'auto',
    'background-height': 'auto',
    'border-color': '#000',
    'border-opacity': 1,
    'border-width': 0,
    'border-style': 'solid',
    'height': 30,
    'width': 30,
    'shape': 'ellipse',
    'shape-polygon-points': '-1, -1,   1, -1,   1, 1,   -1, 1',

    // compound props
    'padding': 0,
    'position': 'origin',
    'compound-sizing-wrt-labels': 'include'
  }, {
    // node pie bg
    'pie-size': '100%'
  }, [
    { name: 'pie-{{i}}-background-color', value: 'black' },
    { name: 'pie-{{i}}-background-size', value: '0%' },
    { name: 'pie-{{i}}-background-opacity', value: 1 }
  ].reduce( function( css, prop ){
    for( var i = 1; i <= styfn.pieBackgroundN; i++ ){
      var name = prop.name.replace( '{{i}}', i );
      var val = prop.value;

      css[ name ] = val;
    }

    return css;
  }, {} ), {
    // edge props
    'line-style': 'solid',
    'line-color': '#999',
    'control-point-step-size': 40,
    'control-point-weights': 0.5,
    'segment-weights': 0.5,
    'segment-distances': 20,
    'edge-distances': 'intersection',
    'curve-style': 'bezier',
    'haystack-radius': 0
  }, [
    { name: 'arrow-shape', value: 'none' },
    { name: 'arrow-color', value: '#999' },
    { name: 'arrow-fill', value: 'filled' }
  ].reduce( function( css, prop ){
    styfn.arrowPrefixes.forEach( function( prefix ){
      var name = prefix + '-' + prop.name;
      var val = prop.value;

      css[ name ] = val;
    } );

    return css;
  }, {} ) );

  var parsedProps = {};

  for( var i = 0; i < this.properties.length; i++ ){
    var prop = this.properties[i];

    if( prop.pointsTo ){ continue; }

    var name = prop.name;
    var val = rawProps[ name ];
    var parsedProp = this.parse( name, val );

    parsedProps[ name ] = parsedProp;
  }

  return parsedProps;
} );

styfn.addDefaultStylesheet = function(){
  this
    .selector( '$node > node' ) // compound (parent) node properties
      .css( {
        'shape': 'rectangle',
        'padding': 10,
        'background-color': '#eee',
        'border-color': '#ccc',
        'border-width': 1
      } )
    .selector( 'edge' ) // just edge properties
      .css( {
        'width': 3,
        'curve-style': 'haystack'
      } )
    .selector( ':selected' )
      .css( {
        'background-color': '#0169D9',
        'line-color': '#0169D9',
        'source-arrow-color': '#0169D9',
        'target-arrow-color': '#0169D9',
        'mid-source-arrow-color': '#0169D9',
        'mid-target-arrow-color': '#0169D9'
      } )
    .selector( 'node:parent:selected' )
      .css( {
        'background-color': '#CCE1F9',
        'border-color': '#aec8e5'
      } )
    .selector( ':active' )
      .css( {
        'overlay-color': 'black',
        'overlay-padding': 10,
        'overlay-opacity': 0.25
      } )
    .selector( 'core' ) // just core properties
      .css( {
        'selection-box-color': '#ddd',
        'selection-box-opacity': 0.65,
        'selection-box-border-color': '#aaa',
        'selection-box-border-width': 1,
        'active-bg-color': 'black',
        'active-bg-opacity': 0.15,
        'active-bg-size': 30,
        'outside-texture-bg-color': '#000',
        'outside-texture-bg-opacity': 0.125
      } )
  ;

  this.defaultLength = this.length;
};

module.exports = styfn;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__( 1 );
var Selector = __webpack_require__( 10 );

var styfn = {};

styfn.applyFromString = function( string ){
  var self = this;
  var style = this;
  var remaining = '' + string;
  var selAndBlockStr;
  var blockRem;
  var propAndValStr;

  // remove comments from the style string
  remaining = remaining.replace( /[/][*](\s|.)+?[*][/]/g, '' );

  function removeSelAndBlockFromRemaining(){
    // remove the parsed selector and block from the remaining text to parse
    if( remaining.length > selAndBlockStr.length ){
      remaining = remaining.substr( selAndBlockStr.length );
    } else {
      remaining = '';
    }
  }

  function removePropAndValFromRem(){
    // remove the parsed property and value from the remaining block text to parse
    if( blockRem.length > propAndValStr.length ){
      blockRem = blockRem.substr( propAndValStr.length );
    } else {
      blockRem = '';
    }
  }

  while( true ){
    var nothingLeftToParse = remaining.match( /^\s*$/ );
    if( nothingLeftToParse ){ break; }

    var selAndBlock = remaining.match( /^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/ );

    if( !selAndBlock ){
      util.error( 'Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: ' + remaining );
      break;
    }

    selAndBlockStr = selAndBlock[0];

    // parse the selector
    var selectorStr = selAndBlock[1];
    if( selectorStr !== 'core' ){
      var selector = new Selector( selectorStr );
      if( selector._private.invalid ){
        util.error( 'Skipping parsing of block: Invalid selector found in string stylesheet: ' + selectorStr );

        // skip this selector and block
        removeSelAndBlockFromRemaining();
        continue;
      }
    }

    // parse the block of properties and values
    var blockStr = selAndBlock[2];
    var invalidBlock = false;
    blockRem = blockStr;
    var props = [];

    while( true ){
      var nothingLeftToParse = blockRem.match( /^\s*$/ );
      if( nothingLeftToParse ){ break; }

      var propAndVal = blockRem.match( /^\s*(.+?)\s*:\s*(.+?)\s*;/ );

      if( !propAndVal ){
        util.error( 'Skipping parsing of block: Invalid formatting of style property and value definitions found in:' + blockStr );
        invalidBlock = true;
        break;
      }

      propAndValStr = propAndVal[0];
      var propStr = propAndVal[1];
      var valStr = propAndVal[2];

      var prop = self.properties[ propStr ];
      if( !prop ){
        util.error( 'Skipping property: Invalid property name in: ' + propAndValStr );

        // skip this property in the block
        removePropAndValFromRem();
        continue;
      }

      var parsedProp = style.parse( propStr, valStr );

      if( !parsedProp ){
        util.error( 'Skipping property: Invalid property definition in: ' + propAndValStr );

        // skip this property in the block
        removePropAndValFromRem();
        continue;
      }

      props.push( {
        name: propStr,
        val: valStr
      } );
      removePropAndValFromRem();
    }

    if( invalidBlock ){
      removeSelAndBlockFromRemaining();
      break;
    }

    // put the parsed block in the style
    style.selector( selectorStr );
    for( var i = 0; i < props.length; i++ ){
      var prop = props[ i ];
      style.css( prop.name, prop.val );
    }

    removeSelAndBlockFromRemaining();
  }

  return style;
};

styfn.fromString = function( string ){
  var style = this;

  style.resetToDefault();
  style.applyFromString( string );

  return style;
};

module.exports = styfn;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );
var util = __webpack_require__( 1 );
var Style = __webpack_require__( 22 );

// a dummy stylesheet object that doesn't need a reference to the core
// (useful for init)
var Stylesheet = function(){
  if( !(this instanceof Stylesheet) ){
    return new Stylesheet();
  }

  this.length = 0;
};

var sheetfn = Stylesheet.prototype;

sheetfn.instanceString = function(){
  return 'stylesheet';
};

// just store the selector to be parsed later
sheetfn.selector = function( selector ){
  var i = this.length++;

  this[ i ] = {
    selector: selector,
    properties: []
  };

  return this; // chaining
};

// just store the property to be parsed later
sheetfn.css = function( name, value ){
  var i = this.length - 1;

  if( is.string( name ) ){
    this[ i ].properties.push( {
      name: name,
      value: value
    } );
  } else if( is.plainObject( name ) ){
    var map = name;

    for( var j = 0; j < Style.properties.length; j++ ){
      var prop = Style.properties[ j ];
      var mapVal = map[ prop.name ];

      if( mapVal === undefined ){ // also try camel case name
        mapVal = map[ util.dash2camel( prop.name ) ];
      }

      if( mapVal !== undefined ){
        var name = prop.name;
        var value = mapVal;

        this[ i ].properties.push( {
          name: name,
          value: value
        } );
      }
    }
  }

  return this; // chaining
};

sheetfn.style = sheetfn.css;

// generate a real style object from the dummy stylesheet
sheetfn.generateStyle = function( cy ){
  var style = new Style( cy );

  for( var i = 0; i < this.length; i++ ){
    var context = this[ i ];
    var selector = context.selector;
    var props = context.properties;

    style.selector( selector ); // apply selector

    for( var j = 0; j < props.length; j++ ){
      var prop = props[ j ];

      style.css( prop.name, prop.value ); // apply property
    }
  }

  return style;
};

module.exports = Stylesheet;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

module.exports = {
  // get [r, g, b] from #abc or #aabbcc
  hex2tuple: function( hex ){
    if( !(hex.length === 4 || hex.length === 7) || hex[0] !== '#' ){ return; }

    var shortHex = hex.length === 4;
    var r, g, b;
    var base = 16;

    if( shortHex ){
      r = parseInt( hex[1] + hex[1], base );
      g = parseInt( hex[2] + hex[2], base );
      b = parseInt( hex[3] + hex[3], base );
    } else {
      r = parseInt( hex[1] + hex[2], base );
      g = parseInt( hex[3] + hex[4], base );
      b = parseInt( hex[5] + hex[6], base );
    }

    return [ r, g, b ];
  },

  // get [r, g, b, a] from hsl(0, 0, 0) or hsla(0, 0, 0, 0)
  hsl2tuple: function( hsl ){
    var ret;
    var h, s, l, a, r, g, b;
    function hue2rgb( p, q, t ){
      if( t < 0 ) t += 1;
      if( t > 1 ) t -= 1;
      if( t < 1 / 6 ) return p + (q - p) * 6 * t;
      if( t < 1 / 2 ) return q;
      if( t < 2 / 3 ) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    var m = new RegExp( '^' + this.regex.hsla + '$' ).exec( hsl );
    if( m ){

      // get hue
      h = parseInt( m[1] );
      if( h < 0 ){
        h = ( 360 - (-1 * h % 360) ) % 360;
      } else if( h > 360 ){
        h = h % 360;
      }
      h /= 360; // normalise on [0, 1]

      s = parseFloat( m[2] );
      if( s < 0 || s > 100 ){ return; } // saturation is [0, 100]
      s = s / 100; // normalise on [0, 1]

      l = parseFloat( m[3] );
      if( l < 0 || l > 100 ){ return; } // lightness is [0, 100]
      l = l / 100; // normalise on [0, 1]

      a = m[4];
      if( a !== undefined ){
        a = parseFloat( a );

        if( a < 0 || a > 1 ){ return; } // alpha is [0, 1]
      }

      // now, convert to rgb
      // code from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
      if( s === 0 ){
        r = g = b = Math.round( l * 255 ); // achromatic
      } else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = Math.round( 255 * hue2rgb( p, q, h + 1 / 3 ) );
        g = Math.round( 255 * hue2rgb( p, q, h ) );
        b = Math.round( 255 * hue2rgb( p, q, h - 1 / 3 ) );
      }

      ret = [ r, g, b, a ];
    }

    return ret;
  },

  // get [r, g, b, a] from rgb(0, 0, 0) or rgba(0, 0, 0, 0)
  rgb2tuple: function( rgb ){
    var ret;

    var m = new RegExp( '^' + this.regex.rgba + '$' ).exec( rgb );
    if( m ){
      ret = [];

      var isPct = [];
      for( var i = 1; i <= 3; i++ ){
        var channel = m[ i ];

        if( channel[ channel.length - 1 ] === '%' ){
          isPct[ i ] = true;
        }
        channel = parseFloat( channel );

        if( isPct[ i ] ){
          channel = channel / 100 * 255; // normalise to [0, 255]
        }

        if( channel < 0 || channel > 255 ){ return; } // invalid channel value

        ret.push( Math.floor( channel ) );
      }

      var atLeastOneIsPct = isPct[1] || isPct[2] || isPct[3];
      var allArePct = isPct[1] && isPct[2] && isPct[3];
      if( atLeastOneIsPct && !allArePct ){ return; } // must all be percent values if one is

      var alpha = m[4];
      if( alpha !== undefined ){
        alpha = parseFloat( alpha );

        if( alpha < 0 || alpha > 1 ){ return; } // invalid alpha value

        ret.push( alpha );
      }
    }

    return ret;
  },

  colorname2tuple: function( color ){
    return this.colors[ color.toLowerCase() ];
  },

  color2tuple: function( color ){
    return ( is.array( color ) ? color : null )
      || this.colorname2tuple( color )
      || this.hex2tuple( color )
      || this.rgb2tuple( color )
      || this.hsl2tuple( color );
  },

  colors: {
    // special colour names
    transparent: [0, 0, 0, 0], // NB alpha === 0

    // regular colours
    aliceblue: [ 240, 248, 255 ],
    antiquewhite: [ 250, 235, 215 ],
    aqua: [0, 255, 255 ],
    aquamarine: [ 127, 255, 212 ],
    azure: [ 240, 255, 255 ],
    beige: [ 245, 245, 220 ],
    bisque: [ 255, 228, 196 ],
    black: [0, 0, 0],
    blanchedalmond: [ 255, 235, 205 ],
    blue: [0, 0, 255 ],
    blueviolet: [ 138, 43, 226 ],
    brown: [ 165, 42, 42 ],
    burlywood: [ 222, 184, 135 ],
    cadetblue: [ 95, 158, 160 ],
    chartreuse: [ 127, 255, 0],
    chocolate: [ 210, 105, 30 ],
    coral: [ 255, 127, 80 ],
    cornflowerblue: [ 100, 149, 237 ],
    cornsilk: [ 255, 248, 220 ],
    crimson: [ 220, 20, 60 ],
    cyan: [0, 255, 255 ],
    darkblue: [0, 0, 139 ],
    darkcyan: [0, 139, 139 ],
    darkgoldenrod: [ 184, 134, 11 ],
    darkgray: [ 169, 169, 169 ],
    darkgreen: [0, 100, 0],
    darkgrey: [ 169, 169, 169 ],
    darkkhaki: [ 189, 183, 107 ],
    darkmagenta: [ 139, 0, 139 ],
    darkolivegreen: [ 85, 107, 47 ],
    darkorange: [ 255, 140, 0],
    darkorchid: [ 153, 50, 204 ],
    darkred: [ 139, 0, 0],
    darksalmon: [ 233, 150, 122 ],
    darkseagreen: [ 143, 188, 143 ],
    darkslateblue: [ 72, 61, 139 ],
    darkslategray: [ 47, 79, 79 ],
    darkslategrey: [ 47, 79, 79 ],
    darkturquoise: [0, 206, 209 ],
    darkviolet: [ 148, 0, 211 ],
    deeppink: [ 255, 20, 147 ],
    deepskyblue: [0, 191, 255 ],
    dimgray: [ 105, 105, 105 ],
    dimgrey: [ 105, 105, 105 ],
    dodgerblue: [ 30, 144, 255 ],
    firebrick: [ 178, 34, 34 ],
    floralwhite: [ 255, 250, 240 ],
    forestgreen: [ 34, 139, 34 ],
    fuchsia: [ 255, 0, 255 ],
    gainsboro: [ 220, 220, 220 ],
    ghostwhite: [ 248, 248, 255 ],
    gold: [ 255, 215, 0],
    goldenrod: [ 218, 165, 32 ],
    gray: [ 128, 128, 128 ],
    grey: [ 128, 128, 128 ],
    green: [0, 128, 0],
    greenyellow: [ 173, 255, 47 ],
    honeydew: [ 240, 255, 240 ],
    hotpink: [ 255, 105, 180 ],
    indianred: [ 205, 92, 92 ],
    indigo: [ 75, 0, 130 ],
    ivory: [ 255, 255, 240 ],
    khaki: [ 240, 230, 140 ],
    lavender: [ 230, 230, 250 ],
    lavenderblush: [ 255, 240, 245 ],
    lawngreen: [ 124, 252, 0],
    lemonchiffon: [ 255, 250, 205 ],
    lightblue: [ 173, 216, 230 ],
    lightcoral: [ 240, 128, 128 ],
    lightcyan: [ 224, 255, 255 ],
    lightgoldenrodyellow: [ 250, 250, 210 ],
    lightgray: [ 211, 211, 211 ],
    lightgreen: [ 144, 238, 144 ],
    lightgrey: [ 211, 211, 211 ],
    lightpink: [ 255, 182, 193 ],
    lightsalmon: [ 255, 160, 122 ],
    lightseagreen: [ 32, 178, 170 ],
    lightskyblue: [ 135, 206, 250 ],
    lightslategray: [ 119, 136, 153 ],
    lightslategrey: [ 119, 136, 153 ],
    lightsteelblue: [ 176, 196, 222 ],
    lightyellow: [ 255, 255, 224 ],
    lime: [0, 255, 0],
    limegreen: [ 50, 205, 50 ],
    linen: [ 250, 240, 230 ],
    magenta: [ 255, 0, 255 ],
    maroon: [ 128, 0, 0],
    mediumaquamarine: [ 102, 205, 170 ],
    mediumblue: [0, 0, 205 ],
    mediumorchid: [ 186, 85, 211 ],
    mediumpurple: [ 147, 112, 219 ],
    mediumseagreen: [ 60, 179, 113 ],
    mediumslateblue: [ 123, 104, 238 ],
    mediumspringgreen: [0, 250, 154 ],
    mediumturquoise: [ 72, 209, 204 ],
    mediumvioletred: [ 199, 21, 133 ],
    midnightblue: [ 25, 25, 112 ],
    mintcream: [ 245, 255, 250 ],
    mistyrose: [ 255, 228, 225 ],
    moccasin: [ 255, 228, 181 ],
    navajowhite: [ 255, 222, 173 ],
    navy: [0, 0, 128 ],
    oldlace: [ 253, 245, 230 ],
    olive: [ 128, 128, 0],
    olivedrab: [ 107, 142, 35 ],
    orange: [ 255, 165, 0],
    orangered: [ 255, 69, 0],
    orchid: [ 218, 112, 214 ],
    palegoldenrod: [ 238, 232, 170 ],
    palegreen: [ 152, 251, 152 ],
    paleturquoise: [ 175, 238, 238 ],
    palevioletred: [ 219, 112, 147 ],
    papayawhip: [ 255, 239, 213 ],
    peachpuff: [ 255, 218, 185 ],
    peru: [ 205, 133, 63 ],
    pink: [ 255, 192, 203 ],
    plum: [ 221, 160, 221 ],
    powderblue: [ 176, 224, 230 ],
    purple: [ 128, 0, 128 ],
    red: [ 255, 0, 0],
    rosybrown: [ 188, 143, 143 ],
    royalblue: [ 65, 105, 225 ],
    saddlebrown: [ 139, 69, 19 ],
    salmon: [ 250, 128, 114 ],
    sandybrown: [ 244, 164, 96 ],
    seagreen: [ 46, 139, 87 ],
    seashell: [ 255, 245, 238 ],
    sienna: [ 160, 82, 45 ],
    silver: [ 192, 192, 192 ],
    skyblue: [ 135, 206, 235 ],
    slateblue: [ 106, 90, 205 ],
    slategray: [ 112, 128, 144 ],
    slategrey: [ 112, 128, 144 ],
    snow: [ 255, 250, 250 ],
    springgreen: [0, 255, 127 ],
    steelblue: [ 70, 130, 180 ],
    tan: [ 210, 180, 140 ],
    teal: [0, 128, 128 ],
    thistle: [ 216, 191, 216 ],
    tomato: [ 255, 99, 71 ],
    turquoise: [ 64, 224, 208 ],
    violet: [ 238, 130, 238 ],
    wheat: [ 245, 222, 179 ],
    white: [ 255, 255, 255 ],
    whitesmoke: [ 245, 245, 245 ],
    yellow: [ 255, 255, 0],
    yellowgreen: [ 154, 205, 50 ]
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var is = __webpack_require__( 0 );

module.exports = {
  // has anything been set in the map
  mapEmpty: function( map ){
    var empty = true;

    if( map != null ){
      return Object.keys( map ).length === 0;
    }

    return empty;
  },

  // pushes to the array at the end of a map (map may not be built)
  pushMap: function( options ){
    var array = this.getMap( options );

    if( array == null ){ // if empty, put initial array
      this.setMap( this.extend( {}, options, {
        value: [ options.value ]
      } ) );
    } else {
      array.push( options.value );
    }
  },

  // sets the value in a map (map may not be built)
  setMap: function( options ){
    var obj = options.map;
    var key;
    var keys = options.keys;
    var l = keys.length;

    for( var i = 0; i < l; i++ ){
      var key = keys[ i ];

      if( is.plainObject( key ) ){
        this.error( 'Tried to set map with object key' );
      }

      if( i < keys.length - 1 ){

        // extend the map if necessary
        if( obj[ key ] == null ){
          obj[ key ] = {};
        }

        obj = obj[ key ];
      } else {
        // set the value
        obj[ key ] = options.value;
      }
    }
  },

  // gets the value in a map even if it's not built in places
  getMap: function( options ){
    var obj = options.map;
    var keys = options.keys;
    var l = keys.length;

    for( var i = 0; i < l; i++ ){
      var key = keys[ i ];

      if( is.plainObject( key ) ){
        this.error( 'Tried to get map with object key' );
      }

      obj = obj[ key ];

      if( obj == null ){
        return obj;
      }
    }

    return obj;
  },

  // deletes the entry in the map
  deleteMap: function( options ){
    var obj = options.map;
    var keys = options.keys;
    var l = keys.length;
    var keepChildren = options.keepChildren;

    for( var i = 0; i < l; i++ ){
      var key = keys[ i ];

      if( is.plainObject( key ) ){
        this.error( 'Tried to delete map with object key' );
      }

      var lastKey = i === options.keys.length - 1;
      if( lastKey ){

        if( keepChildren ){ // then only delete child fields not in keepChildren
          var children = Object.keys( obj );

          for( var j = 0; j < children.length; j++ ){
            var child = children[j];

            if( !keepChildren[ child ] ){
              obj[ child ] = undefined;
            }
          }
        } else {
          obj[ key ] = undefined;
        }

      } else {
        obj = obj[ key ];
      }
    }
  }
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var number = '(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))';

var rgba = 'rgb[a]?\\((' + number + '[%]?)\\s*,\\s*(' + number + '[%]?)\\s*,\\s*(' + number + '[%]?)(?:\\s*,\\s*(' + number + '))?\\)';
var rgbaNoBackRefs = 'rgb[a]?\\((?:' + number + '[%]?)\\s*,\\s*(?:' + number + '[%]?)\\s*,\\s*(?:' + number + '[%]?)(?:\\s*,\\s*(?:' + number + '))?\\)';

var hsla = 'hsl[a]?\\((' + number + ')\\s*,\\s*(' + number + '[%])\\s*,\\s*(' + number + '[%])(?:\\s*,\\s*(' + number + '))?\\)';
var hslaNoBackRefs = 'hsl[a]?\\((?:' + number + ')\\s*,\\s*(?:' + number + '[%])\\s*,\\s*(?:' + number + '[%])(?:\\s*,\\s*(?:' + number + '))?\\)';

var hex3 = '\\#[0-9a-fA-F]{3}';
var hex6 = '\\#[0-9a-fA-F]{6}';

module.exports = {
  regex: {
    number: number,
    rgba: rgba,
    rgbaNoBackRefs: rgbaNoBackRefs,
    hsla: hsla,
    hslaNoBackRefs: hslaNoBackRefs,
    hex3: hex3,
    hex6: hex6
  }
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__( 23 );
var is = __webpack_require__( 0 );

module.exports = {

  camel2dash: memoize( function( str ){
    return str.replace( /([A-Z])/g, function( v ){
      return '-' + v.toLowerCase();
    } );
  } ),

  dash2camel: memoize( function( str ){
    return str.replace( /(-\w)/g, function( v ){
      return v[1].toUpperCase();
    } );
  } ),

  prependCamel: memoize( function( prefix, str ){
    return prefix + str[0].toUpperCase() + str.substring(1);
  }, function( prefix, str ){
    return prefix + '$' + str;
  } ),

  capitalize: function( str ){
    if( is.emptyString( str ) ){
      return str;
    }

    return str.charAt( 0 ).toUpperCase() + str.substring( 1 );
  }

};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var window = __webpack_require__( 4 );
var is = __webpack_require__( 0 );
var performance = window ? window.performance : null;

var util = {};

var raf = !window ? function( fn ){
  if( fn ){
    setTimeout( function(){
      fn( pnow() );
    }, 1000 / 60 );
  }
} : (function(){
  if( window.requestAnimationFrame ){
    return function( fn ){ window.requestAnimationFrame( fn ); };
  } else if( window.mozRequestAnimationFrame ){
    return function( fn ){ window.mozRequestAnimationFrame( fn ); };
  } else if( window.webkitRequestAnimationFrame ){
    return function( fn ){ window.webkitRequestAnimationFrame( fn ); };
  } else if( window.msRequestAnimationFrame ){
    return function( fn ){ window.msRequestAnimationFrame( fn ); };
  }
})();

util.requestAnimationFrame = function( fn ){
  raf( fn );
};

var pnow = performance && performance.now ? function(){ return performance.now(); } : function(){ return Date.now(); };

util.performanceNow = pnow;

// ported lodash throttle function
util.throttle = function( func, wait, options ){
  var leading = true,
      trailing = true;

  if( options === false ){
    leading = false;
  } else if( is.plainObject( options ) ){
    leading = 'leading' in options ? options.leading : leading;
    trailing = 'trailing' in options ? options.trailing : trailing;
  }
  options = options || {};
  options.leading = leading;
  options.maxWait = wait;
  options.trailing = trailing;

  return util.debounce( func, wait, options );
};

util.now = function(){
  return Date.now();
};

util.debounce = function( func, wait, options ){ // ported lodash debounce function
  var util = this;
  var args,
      maxTimeoutId,
      result,
      stamp,
      thisArg,
      timeoutId,
      trailingCall,
      lastCalled = 0,
      maxWait = false,
      trailing = true;

  if( !is.fn( func ) ){
    return;
  }
  wait = Math.max( 0, wait ) || 0;
  if( options === true ){
    var leading = true;
    trailing = false;
  } else if( is.plainObject( options ) ){
    leading = options.leading;
    maxWait = 'maxWait' in options && (Math.max( wait, options.maxWait ) || 0);
    trailing = 'trailing' in options ? options.trailing : trailing;
  }
  var delayed = function(){
    var remaining = wait - (util.now() - stamp);
    if( remaining <= 0 ){
      if( maxTimeoutId ){
        clearTimeout( maxTimeoutId );
      }
      var isCalled = trailingCall;
      maxTimeoutId = timeoutId = trailingCall = undefined;
      if( isCalled ){
        lastCalled = util.now();
        result = func.apply( thisArg, args );
        if( !timeoutId && !maxTimeoutId ){
          args = thisArg = null;
        }
      }
    } else {
      timeoutId = setTimeout( delayed, remaining );
    }
  };

  var maxDelayed = function(){
    if( timeoutId ){
      clearTimeout( timeoutId );
    }
    maxTimeoutId = timeoutId = trailingCall = undefined;
    if( trailing || (maxWait !== wait) ){
      lastCalled = util.now();
      result = func.apply( thisArg, args );
      if( !timeoutId && !maxTimeoutId ){
        args = thisArg = null;
      }
    }
  };

  return function(){
    args = arguments;
    stamp = util.now();
    thisArg = this;
    trailingCall = trailing && (timeoutId || !leading);

    if( maxWait === false ){
      var leadingCall = leading && !timeoutId;
    } else {
      if( !maxTimeoutId && !leading ){
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled),
          isCalled = remaining <= 0;

      if( isCalled ){
        if( maxTimeoutId ){
          maxTimeoutId = clearTimeout( maxTimeoutId );
        }
        lastCalled = stamp;
        result = func.apply( thisArg, args );
      }
      else if( !maxTimeoutId ){
        maxTimeoutId = setTimeout( maxDelayed, remaining );
      }
    }
    if( isCalled && timeoutId ){
      timeoutId = clearTimeout( timeoutId );
    }
    else if( !timeoutId && wait !== maxWait ){
      timeoutId = setTimeout( delayed, wait );
    }
    if( leadingCall ){
      isCalled = true;
      result = func.apply( thisArg, args );
    }
    if( isCalled && !timeoutId && !maxTimeoutId ){
      args = thisArg = null;
    }
    return result;
  };
};

module.exports = util;


/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = "2.7.15";


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var help = __webpack_require__(11)

module.exports = evaluateLinear

/**
 * Evaluates interpolating line/lines at the set of numbers
 * or at a single number for the function y=f(x)
 *
 * @param {Number|Array} pointsToEvaluate     number or set of numbers
 *                                            for which polynomial is calculated
 * @param {Array} functionValuesX             set of distinct x values
 * @param {Array} functionValuesY             set of distinct y=f(x) values
 * @returns {Array}
 */

function evaluateLinear (pointsToEvaluate, functionValuesX, functionValuesY) {
  var results = []
  pointsToEvaluate = help.makeItArrayIfItsNot(pointsToEvaluate)
  pointsToEvaluate.forEach(function (point) {
    var index = help.findIntervalLeftBorderIndex(point, functionValuesX)
    if (index == functionValuesX.length - 1)
      index--
    results.push(linearInterpolation(point, functionValuesX[index], functionValuesY[index]
      , functionValuesX[index + 1], functionValuesY[index + 1]))
  })
  return results
}

/**
 *
 * Evaluates y-value at given x point for line that passes
 * through the points (x0,y0) and (y1,y1)
 *
 * @param x
 * @param x0
 * @param y0
 * @param x1
 * @param y1
 * @returns {Number}
 */

function linearInterpolation (x, x0, y0, x1, y1) {
  var a = (y1 - y0) / (x1 - x0)
  var b = -a * x0 + y0
  return a * x + b
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = linearRegression

var help = __webpack_require__(11)

/**
 * Computes Linear Regression slope, intercept, r-squared and returns
 * a function which can be used for evaluating linear regression
 * at a particular x-value
 *
 * @param functionValuesX {Array}
 * @param functionValuesY {Array}
 * @returns {Object}
 */

function linearRegression(functionValuesX, functionValuesY){
  var regression = {}
    , x = functionValuesX
    , y = functionValuesY
    , n = y.length
    , sum_x = 0
    , sum_y = 0
    , sum_xy = 0
    , sum_xx = 0
    , sum_yy = 0

  for (var i = 0; i < y.length; i++) {
    sum_x += x[i]
    sum_y += y[i]
    sum_xy += (x[i]*y[i])
    sum_xx += (x[i]*x[i])
    sum_yy += (y[i]*y[i])
  }

  regression.slope = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x)
  regression.intercept = (sum_y - regression.slope * sum_x)/n
  regression.rSquared = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2)
  regression.evaluate = function (pointsToEvaluate) {
    var x = help.makeItArrayIfItsNot(pointsToEvaluate)
      , result = []
      , that = this
    x.forEach(function (point) {
      result.push(that.slope*point + that.intercept)
    })
    return result
  }

  return regression
}


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var help = __webpack_require__(11)

module.exports = evaluatePolynomial

/**
 * Evaluates interpolating polynomial at the set of numbers
 * or at a single number for the function y=f(x)
 *
 * @param {Number|Array} pointsToEvaluate     number or set of numbers
 *                                            for which polynomial is calculated
 * @param {Array} functionValuesX             set of distinct x values
 * @param {Array} functionValuesY             set of distinct y=f(x) values
 * @returns {Array}                           interpolating polynomial
 */

 function evaluatePolynomial (pointsToEvaluate, functionValuesX, functionValuesY) {
  var results = []
  pointsToEvaluate = help.makeItArrayIfItsNot(pointsToEvaluate)
  // evaluate the interpolating polynomial for each point
  pointsToEvaluate.forEach(function (point) {
    results.push(nevillesIteratedInterpolation(point, functionValuesX, functionValuesY))
  })
  return results
}

/**
 * Neville's Iterated Interpolation algorithm implementation
 * http://en.wikipedia.org/wiki/Neville's_algorithm <- for reference
 *
 * @param {Number} x                           number for which polynomial is calculated
 * @param {Array} X                            set of distinct x values
 * @param {Array} Y                            set of distinct y=f(x) values
 * @returns {number}                           interpolating polynomial
 */

function nevillesIteratedInterpolation (x, X, Y) {
  var Q = [Y]
  for (var i = 1; i < X.length; i++) {
    Q.push([])
    for (var j = 1; j <= i; j++) {
      Q[j][i] = ((x-X[i-j])*Q[j-1][i] - (x-X[i])*Q[j-1][i-1])/( X[i] - X[i-j] )
    }
  }
  return Q[j-1][i-1]
}


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var help = __webpack_require__(11)

module.exports = step

/**
 * Evaluates interpolating step function at the set of numbers
 * or at a single number
 *
 * @param {Number|Array} pointsToEvaluate     number or set of numbers
 *                                            for which step is calculated
 * @param {Array} functionValuesX             set of distinct x values
 * @param {Array} functionValuesY             set of distinct y=f(x) values
 * @returns {Array}
 */

function step (pointsToEvaluate, functionValuesX, functionValuesY) {
  return help.makeItArrayIfItsNot(pointsToEvaluate).map(function (point) {
    return functionValuesY[help.findIntervalLeftBorderIndex(point, functionValuesX)]
  })
}


/***/ }),
/* 128 */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(131);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(24)))

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(138), __webpack_require__(24)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layout_1 = __webpack_require__(7);
var LayoutAdaptor = (function (_super) {
    __extends(LayoutAdaptor, _super);
    function LayoutAdaptor(options) {
        var _this = _super.call(this) || this;
        var self = _this;
        var o = options;
        if (o.trigger) {
            _this.trigger = o.trigger;
        }
        if (o.kick) {
            _this.kick = o.kick;
        }
        if (o.drag) {
            _this.drag = o.drag;
        }
        if (o.on) {
            _this.on = o.on;
        }
        _this.dragstart = _this.dragStart = layout_1.Layout.dragStart;
        _this.dragend = _this.dragEnd = layout_1.Layout.dragEnd;
        return _this;
    }
    LayoutAdaptor.prototype.trigger = function (e) { };
    ;
    LayoutAdaptor.prototype.kick = function () { };
    ;
    LayoutAdaptor.prototype.drag = function () { };
    ;
    LayoutAdaptor.prototype.on = function (eventType, listener) { return this; };
    ;
    return LayoutAdaptor;
}(layout_1.Layout));
exports.LayoutAdaptor = LayoutAdaptor;
function adaptor(options) {
    return new LayoutAdaptor(options);
}
exports.adaptor = adaptor;
//# sourceMappingURL=adaptor.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var layout_1 = __webpack_require__(7);
var gridrouter_1 = __webpack_require__(26);
function gridify(pgLayout, nudgeGap, margin, groupMargin) {
    pgLayout.cola.start(0, 0, 0, 10, false);
    var gridrouter = route(pgLayout.cola.nodes(), pgLayout.cola.groups(), margin, groupMargin);
    return gridrouter.routeEdges(pgLayout.powerGraph.powerEdges, nudgeGap, function (e) { return e.source.routerNode.id; }, function (e) { return e.target.routerNode.id; });
}
exports.gridify = gridify;
function route(nodes, groups, margin, groupMargin) {
    nodes.forEach(function (d) {
        d.routerNode = {
            name: d.name,
            bounds: d.bounds.inflate(-margin)
        };
    });
    groups.forEach(function (d) {
        d.routerNode = {
            bounds: d.bounds.inflate(-groupMargin),
            children: (typeof d.groups !== 'undefined' ? d.groups.map(function (c) { return nodes.length + c.id; }) : [])
                .concat(typeof d.leaves !== 'undefined' ? d.leaves.map(function (c) { return c.index; }) : [])
        };
    });
    var gridRouterNodes = nodes.concat(groups).map(function (d, i) {
        d.routerNode.id = i;
        return d.routerNode;
    });
    return new gridrouter_1.GridRouter(gridRouterNodes, {
        getChildren: function (v) { return v.children; },
        getBounds: function (v) { return v.bounds; }
    }, margin - groupMargin);
}
function powerGraphGridLayout(graph, size, grouppadding) {
    var powerGraph;
    graph.nodes.forEach(function (v, i) { return v.index = i; });
    new layout_1.Layout()
        .avoidOverlaps(false)
        .nodes(graph.nodes)
        .links(graph.links)
        .powerGraphGroups(function (d) {
        powerGraph = d;
        powerGraph.groups.forEach(function (v) { return v.padding = grouppadding; });
    });
    var n = graph.nodes.length;
    var edges = [];
    var vs = graph.nodes.slice(0);
    vs.forEach(function (v, i) { return v.index = i; });
    powerGraph.groups.forEach(function (g) {
        var sourceInd = g.index = g.id + n;
        vs.push(g);
        if (typeof g.leaves !== 'undefined')
            g.leaves.forEach(function (v) { return edges.push({ source: sourceInd, target: v.index }); });
        if (typeof g.groups !== 'undefined')
            g.groups.forEach(function (gg) { return edges.push({ source: sourceInd, target: gg.id + n }); });
    });
    powerGraph.powerEdges.forEach(function (e) {
        edges.push({ source: e.source.index, target: e.target.index });
    });
    new layout_1.Layout()
        .size(size)
        .nodes(vs)
        .links(edges)
        .avoidOverlaps(false)
        .linkDistance(30)
        .symmetricDiffLinkLengths(5)
        .convergenceThreshold(1e-4)
        .start(100, 0, 0, 0, false);
    return {
        cola: new layout_1.Layout()
            .convergenceThreshold(1e-3)
            .size(size)
            .avoidOverlaps(true)
            .nodes(graph.nodes)
            .links(graph.links)
            .groupCompactness(1e-4)
            .linkDistance(30)
            .symmetricDiffLinkLengths(5)
            .powerGraphGroups(function (d) {
            powerGraph = d;
            powerGraph.groups.forEach(function (v) {
                v.padding = grouppadding;
            });
        }).start(50, 0, 100, 0, false),
        powerGraph: powerGraph
    };
}
exports.powerGraphGridLayout = powerGraphGridLayout;
//# sourceMappingURL=batch.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var d3v3 = __webpack_require__(135);
var d3v4 = __webpack_require__(136);
;
function d3adaptor(d3Context) {
    if (!d3Context || isD3V3(d3Context)) {
        return new d3v3.D3StyleLayoutAdaptor();
    }
    return new d3v4.D3StyleLayoutAdaptor(d3Context);
}
exports.d3adaptor = d3adaptor;
function isD3V3(d3Context) {
    var v3exp = /^3\./;
    return d3Context.version && d3Context.version.match(v3exp) !== null;
}
//# sourceMappingURL=d3adaptor.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layout_1 = __webpack_require__(7);
var D3StyleLayoutAdaptor = (function (_super) {
    __extends(D3StyleLayoutAdaptor, _super);
    function D3StyleLayoutAdaptor() {
        var _this = _super.call(this) || this;
        _this.event = d3.dispatch(layout_1.EventType[layout_1.EventType.start], layout_1.EventType[layout_1.EventType.tick], layout_1.EventType[layout_1.EventType.end]);
        var d3layout = _this;
        var drag;
        _this.drag = function () {
            if (!drag) {
                var drag = d3.behavior.drag()
                    .origin(layout_1.Layout.dragOrigin)
                    .on("dragstart.d3adaptor", layout_1.Layout.dragStart)
                    .on("drag.d3adaptor", function (d) {
                    layout_1.Layout.drag(d, d3.event);
                    d3layout.resume();
                })
                    .on("dragend.d3adaptor", layout_1.Layout.dragEnd);
            }
            if (!arguments.length)
                return drag;
            this
                .call(drag);
        };
        return _this;
    }
    D3StyleLayoutAdaptor.prototype.trigger = function (e) {
        var d3event = { type: layout_1.EventType[e.type], alpha: e.alpha, stress: e.stress };
        this.event[d3event.type](d3event);
    };
    D3StyleLayoutAdaptor.prototype.kick = function () {
        var _this = this;
        d3.timer(function () { return _super.prototype.tick.call(_this); });
    };
    D3StyleLayoutAdaptor.prototype.on = function (eventType, listener) {
        if (typeof eventType === 'string') {
            this.event.on(eventType, listener);
        }
        else {
            this.event.on(layout_1.EventType[eventType], listener);
        }
        return this;
    };
    return D3StyleLayoutAdaptor;
}(layout_1.Layout));
exports.D3StyleLayoutAdaptor = D3StyleLayoutAdaptor;
function d3adaptor() {
    return new D3StyleLayoutAdaptor();
}
exports.d3adaptor = d3adaptor;
//# sourceMappingURL=d3v3adaptor.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var layout_1 = __webpack_require__(7);
var D3StyleLayoutAdaptor = (function (_super) {
    __extends(D3StyleLayoutAdaptor, _super);
    function D3StyleLayoutAdaptor(d3Context) {
        var _this = _super.call(this) || this;
        _this.d3Context = d3Context;
        _this.event = d3Context.dispatch(layout_1.EventType[layout_1.EventType.start], layout_1.EventType[layout_1.EventType.tick], layout_1.EventType[layout_1.EventType.end]);
        var d3layout = _this;
        var drag;
        _this.drag = function () {
            if (!drag) {
                var drag = d3Context.drag()
                    .subject(layout_1.Layout.dragOrigin)
                    .on("start.d3adaptor", layout_1.Layout.dragStart)
                    .on("drag.d3adaptor", function (d) {
                    layout_1.Layout.drag(d, d3Context.event);
                    d3layout.resume();
                })
                    .on("end.d3adaptor", layout_1.Layout.dragEnd);
            }
            if (!arguments.length)
                return drag;
            arguments[0].call(drag);
        };
        return _this;
    }
    D3StyleLayoutAdaptor.prototype.trigger = function (e) {
        var d3event = { type: layout_1.EventType[e.type], alpha: e.alpha, stress: e.stress };
        this.event.call(d3event.type, d3event);
    };
    D3StyleLayoutAdaptor.prototype.kick = function () {
        var _this = this;
        this.d3Context.timer(function () { return _super.prototype.tick.call(_this); });
    };
    D3StyleLayoutAdaptor.prototype.on = function (eventType, listener) {
        if (typeof eventType === 'string') {
            this.event.on(eventType, listener);
        }
        else {
            this.event.on(layout_1.EventType[eventType], listener);
        }
        return this;
    };
    return D3StyleLayoutAdaptor;
}(layout_1.Layout));
exports.D3StyleLayoutAdaptor = D3StyleLayoutAdaptor;
//# sourceMappingURL=d3v4adaptor.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var shortestpaths_1 = __webpack_require__(12);
var descent_1 = __webpack_require__(15);
var rectangle_1 = __webpack_require__(8);
var linklengths_1 = __webpack_require__(16);
var Link3D = (function () {
    function Link3D(source, target) {
        this.source = source;
        this.target = target;
    }
    Link3D.prototype.actualLength = function (x) {
        var _this = this;
        return Math.sqrt(x.reduce(function (c, v) {
            var dx = v[_this.target] - v[_this.source];
            return c + dx * dx;
        }, 0));
    };
    return Link3D;
}());
exports.Link3D = Link3D;
var Node3D = (function () {
    function Node3D(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    return Node3D;
}());
exports.Node3D = Node3D;
var Layout3D = (function () {
    function Layout3D(nodes, links, idealLinkLength) {
        if (idealLinkLength === void 0) { idealLinkLength = 1; }
        var _this = this;
        this.nodes = nodes;
        this.links = links;
        this.idealLinkLength = idealLinkLength;
        this.constraints = null;
        this.useJaccardLinkLengths = true;
        this.result = new Array(Layout3D.k);
        for (var i = 0; i < Layout3D.k; ++i) {
            this.result[i] = new Array(nodes.length);
        }
        nodes.forEach(function (v, i) {
            for (var _i = 0, _a = Layout3D.dims; _i < _a.length; _i++) {
                var dim = _a[_i];
                if (typeof v[dim] == 'undefined')
                    v[dim] = Math.random();
            }
            _this.result[0][i] = v.x;
            _this.result[1][i] = v.y;
            _this.result[2][i] = v.z;
        });
    }
    ;
    Layout3D.prototype.linkLength = function (l) {
        return l.actualLength(this.result);
    };
    Layout3D.prototype.start = function (iterations) {
        var _this = this;
        if (iterations === void 0) { iterations = 100; }
        var n = this.nodes.length;
        var linkAccessor = new LinkAccessor();
        if (this.useJaccardLinkLengths)
            linklengths_1.jaccardLinkLengths(this.links, linkAccessor, 1.5);
        this.links.forEach(function (e) { return e.length *= _this.idealLinkLength; });
        var distanceMatrix = (new shortestpaths_1.Calculator(n, this.links, function (e) { return e.source; }, function (e) { return e.target; }, function (e) { return e.length; })).DistanceMatrix();
        var D = descent_1.Descent.createSquareMatrix(n, function (i, j) { return distanceMatrix[i][j]; });
        var G = descent_1.Descent.createSquareMatrix(n, function () { return 2; });
        this.links.forEach(function (_a) {
            var source = _a.source, target = _a.target;
            return G[source][target] = G[target][source] = 1;
        });
        this.descent = new descent_1.Descent(this.result, D);
        this.descent.threshold = 1e-3;
        this.descent.G = G;
        if (this.constraints)
            this.descent.project = new rectangle_1.Projection(this.nodes, null, null, this.constraints).projectFunctions();
        for (var i = 0; i < this.nodes.length; i++) {
            var v = this.nodes[i];
            if (v.fixed) {
                this.descent.locks.add(i, [v.x, v.y, v.z]);
            }
        }
        this.descent.run(iterations);
        return this;
    };
    Layout3D.prototype.tick = function () {
        this.descent.locks.clear();
        for (var i = 0; i < this.nodes.length; i++) {
            var v = this.nodes[i];
            if (v.fixed) {
                this.descent.locks.add(i, [v.x, v.y, v.z]);
            }
        }
        return this.descent.rungeKutta();
    };
    return Layout3D;
}());
Layout3D.dims = ['x', 'y', 'z'];
Layout3D.k = Layout3D.dims.length;
exports.Layout3D = Layout3D;
var LinkAccessor = (function () {
    function LinkAccessor() {
    }
    LinkAccessor.prototype.getSourceIndex = function (e) { return e.source; };
    LinkAccessor.prototype.getTargetIndex = function (e) { return e.target; };
    LinkAccessor.prototype.getLength = function (e) { return e.length; };
    LinkAccessor.prototype.setLength = function (e, l) { e.length = l; };
    return LinkAccessor;
}());
//# sourceMappingURL=layout3d.js.map

/***/ }),
/* 138 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * mecu-graph
 * https://github.com/sacdallago/mecu-graph
 *
 * Copyright (c) 2016 Christian Dallago
 * Licensed under the Apache-2.0 license.
 */

const cytoscape = __webpack_require__(32);
const cycola = __webpack_require__(31);
const cola = __webpack_require__(34);
cycola(cytoscape, cola); // register extension
const everpolate = __webpack_require__(33);

/**
 * Go from the API response format to a Protein+Experiment+TempReads format
 *  -- Optionally get the UNSORTED!! range of temperatures
 *
 * @param data - Data as from API call
 * @param getTemps - optionally normalize temperatures across dataset and return
 * @returns compoundElement - the first returned element represents digestible data for the internal methods,
 * the second returned element will be non-empty array of temperatures only if parameter getTemps has been passed as true.
 */
let extrapolate = function(data, getTemps = false) {

    let result = [];
    let temperatures;

    // Put if outside loops to reduce amounts of checks. Downside: Duplicated code
    if(getTemps === true){
        temperatures = new Set();
        data.forEach(function(protein) {
            protein.reads.forEach(function(read) {
                let sortedReads = read.reads.sort(function(a,b) {

                    temperatures.add(a.t);
                    temperatures.add(b.t);

                    return a.t < b.t;
                });
                result.push({
                    p: protein.uniprotId,
                    e: read.experiment,
                    r: sortedReads
                });
            })
        });
    } else {
        data.forEach(function(protein) {
            protein.reads.forEach(function(read) {
                let sortedReads = read.reads.sort(function(a,b) {
                    return a.t < b.t;
                });
                result.push({
                    p: protein.uniprotId,
                    e: read.experiment,
                    r: sortedReads
                });
            })
        });
    }

    return [result, temperatures];
};

/**
 * Get two vectors containing temperatures and corresponding ratios
 *
 * @param extrapolatedProtein - digestible melting reads data
 * @param temperatures - Optional array of temperatures for which one wants the ratios. Otherwise inferred from the data.
 * @returns compoundElement - compoundElement = [temperatures, ratio]
 */
let extractTemperaturesAndRatio = function(extrapolatedProtein, temperatures = undefined) {
    if(temperatures !== undefined){

        let [originTemp, originRatio] = [extrapolatedProtein.r.map(function(d){
            return d.t;
        }), extrapolatedProtein.r.map(function(d){
            return d.r;
        })];

        // TODO - make the interpolation more efficient by storing the function globally and calling it only on undefined
        let ratios = [];
        temperatures.forEach(function(temp){

            let ratio = extrapolatedProtein.r.filter(function(read) {
                return read.t == temp;
            }).r;

            if(ratio !== undefined){
                ratios.push(r);
            } else {
                ratios.push(everpolate.polynomial(temp, originTemp, originRatio)[0]);
            }
        });

        return [temperatures, ratios];
    } else {
        return [extrapolatedProtein.r.map(function(d){
            return d.t;
        }), extrapolatedProtein.r.map(function(d){
            return d.r;
        })];
    }
};

/**
 * Simple implementation of Euclidian distance between two vectors.
 * Assumes equal length of vectors and matching array positions.
 *
 * @param A - A vector of length N
 * @param B - Another vector of length N
 * @returns {number} - Euclidian distance between two vectors
 */
let euclidian = function(A,B) {
    let sum = 0;

    for(let i=0; i<A.length; i++){
        sum += Math.pow(A[i] - B[i], 2);
    }
    return Math.sqrt(sum);
};


/**
 * Format a collection of proteins in the vectorized format (uniprot+experiment+tempReads) into a cytoscape digestible format
 *
 * @param proteins
 * @param distance
 * @returns {Number}
 */
let getGraphDataFromExtractedProteins = function(proteins, distance = euclidian){
    // Extrapolate vectors
    let vectors = [];
    let nodes = [];
    let edges = [];

    // Create a mapping between proteins and vectors
    for(let i=0; i<proteins.length; i++){
        let [temp, ratios] = extractTemperaturesAndRatio(proteins[i]);
        vectors.push(ratios);

        nodes.push({
            data: {
                id: proteins[i].p + "-E" + proteins[i].e
            }
        });
    }

    // Find distance between item and everyone else
    for(let i=0; i<proteins.length; i++){
        for(let j=i+1; j<proteins.length; j++){
            edges.push({
                data: {
                    id: proteins[i].p + "-E" + proteins[i].e + "<->" + proteins[j].p + "-E" + proteins[j].e,
                    source: proteins[i].p + "-E" + proteins[i].e,
                    target: proteins[j].p + "-E" + proteins[j].e,
                    weight: distance(vectors[i], vectors[j])
                }
            });
        }
    }

    return [nodes, edges]
};

/**
 * Extend string prototypes to allow color hashing
 */
String.prototype.getHashCode = function() {
    var hash = 0;
    if (this.length == 0) return hash;
    for (var i = 0; i < this.length; i++) {
        hash = this.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};
Number.prototype.intToHSL = function() {
    var shortened = this % 360;
    return "hsl(" + shortened + ",100%,40%)";
};

/**
 @class MecuGraph
 */
class MecuGraph {

    /**
     * Constructor for a Mecu Graph element. This will initialize the element in the DOM, but not add any data to it.
     *
     *
     * @param opts - an object containing customization parameters. See README for more information
     */
    constructor(opts) {
        if (typeof(opts) === 'object' && opts.constructor !== Array) {
            this.options = opts || {};
        } else {
            this.options = {};
        }

        this.base = this.options.element || "#mecuGraph";
        this.nodes = [];
        this.edges = [];
        this.data = [];

        this.options.edgeLength = this.options.edgeLength || 200;

        let self = this;

        this.graph = cytoscape({
            container: document.getElementById(this.base.substr(1,this.base.length)),
            elements: [],
            style: cytoscape.stylesheet()
                .selector('node')
                .style({
                    'background-color': function (e) {
                        return e.data('id').getHashCode().intToHSL();
                    },
                    'label': 'data(id)',
                    'text-opacity': '0.4',
                    'line-color': '#e2dfe1',
                })
                .selector('edge')
                .style({
                    'label': function(e){
                        return Math.round(e.data('weight')*100)/100;
                    },
                    'text-opacity': '0',
                    'opacity': '0.2',
                    'line-opacity': '0',
                    'line-color': '#e2dfe1',
                })
                .selector('edge:selected')
                .css({
                    'opacity': '1',

                    'text-opacity': '1'
                })
            ,
            layout: {
                name: 'cola',
                fit: false,
                infinite: true,
                edgeLength: function(e){ return (e.data('weight') || 0.001)*self.options.edgeLength; }
            }
        });
    }

    /**
     * Method to add nodes (and edges) to the initialized graph.
     *
     *
     * @param proteins - and object or array of objects representing a protein melting read. The object must comply with the format {uniprotId:..., reads: [ { experiment:..., reads: [ { t:.., r:... }]}]}
     */
    add(data){
        if (typeof(data) === 'undefined' || data === null || typeof(data) !== 'object') {
            return;
        }

        if (data.constructor !== Array) {
            data = [data];
        }

        let [extrapolatedProteins,] = extrapolate(data);

        let self = this;

        let realNewOnes = extrapolatedProteins.filter(function(newElement) {
            return self.data.filter(function(oldElement) {
                return oldElement.p == newElement.p && oldElement.e == newElement.e;
            })
        });

        this.data = this.data.concat(realNewOnes);

        // Use all the data because you need all the edges!
        let [nodes, edges] = getGraphDataFromExtractedProteins(this.data, this.options.distanceMetric);

        this.nodes = nodes;
        this.edges = edges;

        let result = [].concat(this.nodes).concat(this.edges);

        this.graph.add(result);
        this.setEdgeLength(this.options.edgeLength);
        return result;
    }

    /**
     * Method to remove nodes (and edges) from the initialized graph.
     *
     *
     * @param proteins - and object or array of objects representing a protein melting read. The object must comply with the format {uniprotId:..., reads: [ { experiment:..., reads: [ { t:.., r:... }]}]}
     */
    remove(data){
        if (typeof(data) === 'undefined' || data === null || typeof(data) !== 'object') {
            return;
        }

        if (data.constructor !== Array) {
            data = [data];
        }

        let [extrapolatedProteins,] = extrapolate(data);
        let self = this;

        extrapolatedProteins.forEach(function(element) {
            let item = self.graph.elements("node[id = '"+ element.p + "-E" + element.e + "']");
            self.graph.remove(item);
        });

        this.data = this.data.filter(function(element){
            return !extrapolatedProteins.find(function(exProt) {
                return element.p == exProt.p && element.e == exProt.e;
            });
        });

        let [nodes, edges] = getGraphDataFromExtractedProteins(this.data, this.options.distanceMetric);

        this.nodes = nodes;
        this.edges = edges;

        let result = [].concat(nodes).concat(edges);

        return result;
    }

    /**
     * Redefine the distance between the edges (weights) by an arbitrary function
     *
     * @param distanceMetric - An arbitrary function accepting two vector parameters
     * @returns {Array.<*>} - An array of object being represented in the graph
     */
    changeDistanceMetric(distanceMetric){
        this.options.distanceMetric = distanceMetric;

        let [nodes, edges] = getGraphDataFromExtractedProteins(this.data, this.options.distanceMetric);

        this.nodes = nodes;
        this.edges = edges;

        let result = [].concat(this.nodes).concat(this.edges);

        this.graph.remove(this.graph.elements("node"));
        this.graph.add(result);
        this.setEdgeLength(this.options.edgeLength);
        return result;
    }

    /**
     * An arbitrary value being multiplied to the weight. Useful to minimize effect of big distances or small similarities
     *
     * @param length - a Number
     */
    setEdgeLength(length){
        this.options.edgeLength = length || this.options.edgeLength;
        let self = this;
        this.graph.layout({
            name: 'cola',
            fit: false,
            infinite: true,
            edgeLength: function(e){ return e.data('weight')*self.options.edgeLength; }
        });
    }
}

module.exports = MecuGraph;

/***/ })
/******/ ]);