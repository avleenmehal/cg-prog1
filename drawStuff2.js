// /* classes */ 

// // Color constructor
// class Color {
//     constructor(r,g,b,a) {
//         try {
//             if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
//                 throw "color component not a number";
//             else if ((r<0) || (g<0) || (b<0) || (a<0)) 
//                 throw "color component less than 0";
//             else if ((r>255) || (g>255) || (b>255) || (a>255)) 
//                 throw "color component bigger than 255";
//             else {
//                 this.r = r; this.g = g; this.b = b; this.a = a; 
//             }
//         } // end try
        
//         catch (e) {
//             console.log(e);
//         }
//     } // end Color constructor

//         // Color change method
//     change(r,g,b,a) {
//         try {
//             if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
//                 throw "color component not a number";
//             else if ((r<0) || (g<0) || (b<0) || (a<0)) 
//                 throw "color component less than 0";
//             else if ((r>255) || (g>255) || (b>255) || (a>255)) 
//                 throw "color component bigger than 255";
//             else {
//                 this.r = r; this.g = g; this.b = b; this.a = a; 
//             }
//         } // end throw
        
//         catch (e) {
//             console.log(e);
//         }
//     } // end Color change method
// } // end color class

// // Vector class
// class Vector { 
//     constructor(x,y,z) {
//         this.set(x,y,z);
//     } // end constructor
    
//     // sets the components of a vector
//     set(x,y,z) {
//         try {
//             if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
//                 throw "vector component not a number";
//             else
//                 this.x = x; this.y = y; this.z = z; 
//         } // end try
        
//         catch(e) {
//             console.log(e);
//         }
//     } // end vector set
    
//     // copy the passed vector into this one
//     copy(v) {
//         try {
//             if (!(v instanceof Vector))
//                 throw "Vector.copy: non-vector parameter";
//             else
//                 this.x = v.x; this.y = v.y; this.z = v.z;
//         } // end try
        
//         catch(e) {
//             console.log(e);
//         }
//     }
    
//     toConsole(prefix="") {
//         console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
//     } // end to console
    
//     // static dot method
//     static dot(v1,v2) {
//         try {
//             if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
//                 throw "Vector.dot: non-vector parameter";
//             else
//                 return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(NaN);
//         }
//     } // end dot static method
    
//     // static cross method
//     static cross(v1,v2) {
//         try {
//             if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
//                 throw "Vector.cross: non-vector parameter";
//             else {
//                 var crossX = v1.y*v2.z - v1.z*v2.y;
//                 var crossY = v1.z*v2.x - v1.x*v2.z;
//                 var crossZ = v1.x*v2.y - v1.y*v2.x;
//                 return(new Vector(crossX,crossY,crossZ));
//             } // endif vector params
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(NaN);
//         }
//     } // end dot static method
    
//     // static add method
//     static add(v1,v2) {
//         try {
//             if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
//                 throw "Vector.add: non-vector parameter";
//             else
//                 return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(new Vector(NaN,NaN,NaN));
//         }
//     } // end add static method

//     // static subtract method, v1-v2
//     static subtract(v1,v2) {
//         try {
//             if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
//                 throw "Vector.subtract: non-vector parameter";
//             else {
//                 var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
//                 return(v);
//             }
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(new Vector(NaN,NaN,NaN));
//         }
//     } // end subtract static method

//     // static scale method
//     static scale(c,v) {
//         try {
//             if (!(typeof(c) === "number") || !(v instanceof Vector))
//                 throw "Vector.scale: malformed parameter";
//             else
//                 return(new Vector(c*v.x,c*v.y,c*v.z));
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(new Vector(NaN,NaN,NaN));
//         }
//     } // end scale static method
    
//     // static normalize method
//     static normalize(v) {
//         try {
//             if (!(v instanceof Vector))
//                 throw "Vector.normalize: parameter not a vector";
//             else {
//                 var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
//                 return(Vector.scale(lenDenom,v));
//             }
//         } // end try
        
//         catch(e) {
//             console.log(e);
//             return(new Vector(NaN,NaN,NaN));
//         }
//     } // end scale static method
    
// } // end Vector class

// // draw a pixel at x,y using color
// function drawPixel(imagedata,x,y,color) {
//     try {
//         if ((typeof(x) !== "number") || (typeof(y) !== "number"))
//             throw "drawpixel location not a number";
//         else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
//             throw "drawpixel location outside of image";
//         else if (color instanceof Color) {
//             var pixelindex = (y*imagedata.width + x) * 4;
//             imagedata.data[pixelindex] = color.r;
//             imagedata.data[pixelindex+1] = color.g;
//             imagedata.data[pixelindex+2] = color.b;
//             imagedata.data[pixelindex+3] = color.a;
//         } else 
//             throw "drawpixel color is not a Color";
//     } // end try
    
//     catch(e) {
//         console.log(e);
//     }
// } // end drawPixel
    
// //get the input triangles from the standard class URL
// function getInputTriangles() {
//     const INPUT_TRIANGLES_URL = "https://ncsucgclass.github.io/prog1/triangles2.json";
        
//     // load the triangles file
//     var httpReq = new XMLHttpRequest(); // a new http request
//     httpReq.open("GET",INPUT_TRIANGLES_URL,false); // init the request
//     httpReq.send(null); // send the request
//     var startTime = Date.now();
//     while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
//         if ((Date.now()-startTime) > 3000)
//             break;
//     } // until its loaded or we time out after three seconds
//     if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
//         console.log*("Unable to open input triangles file!");
//         return String.null;
//     } else {
//         return JSON.parse(httpReq.response); 
//     }
        
// } // end get input triangles

// function calculateNormal(vertex1, vertex2, vertex3) {
//     var ba = new Vector(vertex2[0] - vertex1[0], vertex2[1] - vertex1[1], vertex2[2] - vertex1[2]);
//     var ac = new Vector(vertex1[0] - vertex3[0], vertex1[1] - vertex3[1], vertex1[2] - vertex3[2]);
//     var normal = Vector.cross(ba, ac);
//     normal = Vector.normalize(normal);
//     return normal;
// }

// function checkInside(intersection, vertex1, vertex2, vertex3, normal) {
//     var ab = new Vector(vertex1[0] - vertex2[0], vertex1[1] - vertex2[1],  vertex1[2] - vertex2[2]);
//     var bc = new Vector(vertex2[0] - vertex3[0], vertex2[1] - vertex3[1], vertex2[2] - vertex3[2]);
//     var ca = new Vector(vertex3[0] - vertex1[0], vertex3[1] - vertex1[1], vertex3[2] - vertex1[2]);

//     var ai = new Vector(vertex1[0] - intersection.x, vertex1[1] - intersection.y, vertex1[2] - intersection.z);
//     var bi = new Vector(vertex2[0] - intersection.x, vertex2[1] - intersection.y, vertex2[2] - intersection.z);
//     var ci = new Vector(vertex3[0] - intersection.x, vertex3[1] - intersection.y, vertex3[2] - intersection.z);

//     var sign1 = Vector.dot(normal, Vector.cross(ab, ai));
//     var sign2 = Vector.dot(normal, Vector.cross(bc, bi));
//     var sign3 = Vector.dot(normal, Vector.cross(ca, ci));

//     // console.log("intersection point - " + intersection.x + "," + intersection.y + "," + intersection.z);

//     if((sign1 >= 0 && sign2 >= 0 && sign3 >= 0) || (sign1 < 0 && sign2 < 0 && sign3 < 0)) {
//         // console.log("INSIDE");
//         return true;
//     }
//     // console.log("MISSED");
//     return false;

// }

// function canvasBlack(imagedata) {
//     var c = new Color(0,0,0,255);
//     for(var i =0;i<512;i++) {
//         for(var j=0;j<512;j++) {
//             drawPixel(imagedata, i, j, c);
//         }
//     }
// }

// function drawRayCastedTriangles(context) {

//     // Find D 
//     // Find N 
//     // Find N.A = d - triangles coefficient
//     // check for N.D 0 or not 
//     // calculate the t - distance of intersection 
//     // find Intersection I 
//     // check for insideness of the triangle


//     var inputTriangles = getInputTriangles();
//     var w = context.canvas.width;
//     var h = context.canvas.height;
//     var imagedata = context.createImageData(w,h);
//     canvasBlack(imagedata);

//     var eye = new Vector(0.5, 0.5, -0.5); // the eye position
//     var viewUp = new Vector(0,1,0);
//     var lookAt = new Vector(0,0,1);

//     //window - world coordinates
//     var ulx = 0, uly =1, ulz=0;
//     var urx = 1, ury =1, urz=0;
//     var llx = 0, lly =0, llz=0
//     var lrx = 1, lry =0, lrz=0;

//     for (let y = 0; y <= 1; ) {
//         for(let x = ulx; x <= urx; ) {
//             var px = x, py =y, pz =0;
//             var pixel = new Vector(px, py, pz);
//             // console.log("Pixel location for y, x - (" + y + "," + x); 
//             var dir = Vector.subtract(pixel,eye);
//             // console.log("dir " + dir.x + ", " + dir.y + ", " + dir.z);
            
//             dir = Vector.normalize(dir);
//             // console.log("Direction vector is " + dir.x + ", " + dir.y + ", " + dir.z);

//             if (inputTriangles != String.null) { 
//                 var c = new Color(0,0,0,0); // assume color constant
//                 var n = inputTriangles.length; // the number of input files = 3
                
//                 // Loop over the triangles, draw rand pixels in each
//                 for (var f=0; f<n; f++) { // n =3 
//                     var tn = inputTriangles[f].triangles.length; //tn =2 
//                     // console.log("number of triangles in this files: " + tn);
                    
//                     // Loop over the triangles, draw each in 2d
//                     var target = Number.MAX_VALUE;    
//                     for(var tri=0; tri<tn; tri++){
//                         var vertex1 = inputTriangles[f].triangles[tri][0]; // f =1  tri = 0
//                         var vertex2 = inputTriangles[f].triangles[tri][1];
//                         var vertex3 = inputTriangles[f].triangles[tri][2];
        
//                         var vertexPos1 = inputTriangles[f].vertices[vertex1];
//                         var vertexPos2 = inputTriangles[f].vertices[vertex2];
//                         var vertexPos3 = inputTriangles[f].vertices[vertex3];
//                         // console.log("vertexPos1 " + vertexPos1 + " vertexPos2 " + vertexPos2 + " vertexPos 3 " + vertexPos3);
//                         // var target = Number.MAX_VALUE;
                        
//                         var normal = calculateNormal(vertexPos1, vertexPos2, vertexPos3);
//                         // console.log("normal is " + normal.x, "," + normal.y + ", " + normal.z);
//                         var nd = Vector.dot(normal, dir);
//                         // console.log("N.D is " + nd );
//                         var a = new Vector(vertexPos1[0], vertexPos1[1], vertexPos1[2]);

//                         var d = Vector.dot(normal, a);
//                         // console.log("triangel coefficient is " + d );

//                         var newTarget;
//                         if (nd == 0) {
//                             continue;
//                         } else {
//                             var ne = Vector.dot(normal,eye);
//                             // console.log("ne is "+ ne);
//                             newTarget = (d - ne)/nd;

//                             // console.log("newTarget is " + newTarget);
//                         }

//                         if(newTarget > 0) {
//                             target = newTarget;
//                             // console.log("target changed to " + target);
//                             c.change(
//                                 inputTriangles[f].material.diffuse[0]*255,
//                                 inputTriangles[f].material.diffuse[1]*255,
//                                 inputTriangles[f].material.diffuse[2]*255,
//                                 255);
//                         }
//                         if(target != Number.MAX_VALUE) { 
//                             var intersection = Vector.add(eye, Vector.scale(target, dir));
//                             // console.log("intersection is " + intersection.x + ", " + intersection.y + ", " + intersection.z);
//                             var isInside = false;
//                             isInside = checkInside(intersection, vertexPos1, vertexPos2, vertexPos3, normal);
//                             var window_x = intersection.x;
//                             if(isInside) {
//                                 drawPixel(imagedata, x*w, h - y*h, c);
//                             }
//                             // drawPixel(imagedata, intersection.x, intersection.y, c);
//                         } else {
//                             c.change(0,0,0,255);
//                             drawPixel(imagedata, x*w, y*h, c);
//                         }
    
//                     } // end for triangles 
                    
//                 } // end for files
//                 context.putImageData(imagedata, 0, 0);
//             }
//             x = x + 1/w;
//         }
//         y = y + 1/h;
//     }
// }

// //draw 2d projections traingle from the JSON file at class github


// /* main -- here is where execution begins after window load */

// // function main() {

// //     // Get the canvas and context
// //     var canvas = document.getElementById("viewport"); 
// //     var context = canvas.getContext("2d");
 
// //     // Create the image
// //     //drawRandPixels(context);
// //       // shows how to draw pixels
    
// //     //drawRandPixelsInInputEllipsoids(context);
// //       // shows how to draw pixels and read input file
      
// //     //drawInputEllipsoidsUsingArcs(context);
// //       // shows how to read input file, but not how to draw pixels
    
// //       drawRayCastedTriangles(context);
// //       // shows how to draw pixels and read input file
    
// //     // drawInputTrainglesUsingPaths(context);
// //       // shows how to read input file, but not how to draw pixels
    
// //     //drawRandPixelsInInputBoxes(context);
// //       // shows how to draw pixels and read input file
    
// //     //drawInputBoxesUsingPaths(context);
// //       // shows how to read input file, but not how to draw pixels
// // }
