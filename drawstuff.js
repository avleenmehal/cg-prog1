

// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
} // end color class

// Vector class
class Vector { 
    constructor(x,y,z) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z; 
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix="") {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static cross method
    static cross(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.cross: non-vector parameter";
            else {
                var crossX = v1.y*v2.z - v1.z*v2.y;
                var crossY = v1.z*v2.x - v1.x*v2.z;
                var crossZ = v1.x*v2.y - v1.y*v2.x;
                return(new Vector(crossX,crossY,crossZ));
            } // endif vector params
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
} // end Vector class

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel
    
//get the input triangles from the standard class URL
function getInputTriangles() {
    const INPUT_TRIANGLES_URL = "https://ncsucgclass.github.io/prog1/triangles2.json";
        
    // load the triangles file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_TRIANGLES_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input triangles file!");
        return String.null;
    } else {
        return JSON.parse(httpReq.response); 
    }
        
} // end get input triangles

function calculateNormal(A, B,C) {
    var sideBA = Vector.subtract(A,B);
    var sideCA = Vector.subtract(A,C);
    return Vector.cross(sideBA,sideCA);
}

function checkInside(A, B, C, I, N) {
    var sideAB = Vector.subtract(B,A);
    var sideBC = Vector.subtract(C,B);
    var sideCA = Vector.subtract(A,C);

    var sideAI = Vector.subtract(I,A);
    var sideBI = Vector.subtract(I,B);
    var sideCI = Vector.subtract(I,C);

    var signA = Vector.dot(N, Vector.cross(sideAI, sideAB));
    var signB = Vector.dot(N, Vector.cross(sideBI, sideBC));
    var signC = Vector.dot(N, Vector.cross(sideCI, sideCA));

    if( ((signA >= 0) && (signB >= 0) && (signC >=0)) ||  ((signA < 0) && (signB < 0) && (signC < 0))) {
        return true;
    }
    return false;
    
}

function canvasBlack(imagedata, context) {
    var c = new Color(0,0,0,255);
    for(var i =0;i<512;i++) {
        for(var j=0;j<512;j++) {
            drawPixel(imagedata, i, j, c);
        }
    }
    context.putImageData(imagedata, 0, 0);
}

function drawRayCastedTriangles(context, inputTriangles) {
    
    var w = context.canvas.width;
    var h = context.canvas.height;
    var imagedata = context.createImageData(w,h);
    canvasBlack(imagedata, context);
    
    var eye = new Vector(1,1,-1);
    var c = new Color(0,0,0,255);
    
    var lightPos =  new Vector(-3,1,-0.5);
    var lightColor = new Color(1,1,1,1);

    
    for(var x = 0 ; x<w ;x++) {
        for(var y = 0 ; y<h ;y++) {
            var px = 0 + x/w;
            var py = 0 + y/h;
            var pixel = new Vector(px, py, 0);
            var dir = Vector.subtract(pixel, eye);
            // we have not normalised
            
            //loop for triangles
            var closestT = 1000000;
            var n = inputTriangles.length;
            for (var f=0; f<n; f++) { // n =3 
                var tn = inputTriangles[f].triangles.length; //tn =2   
                for(var tri=0; tri<tn; tri++){
                    var vertex1 = inputTriangles[f].triangles[tri][0]; // f =1  tri = 0
                    var vertex2 = inputTriangles[f].triangles[tri][1];
                    var vertex3 = inputTriangles[f].triangles[tri][2];
    
                    var vertexPos1 = inputTriangles[f].vertices[vertex1];
                    var vertexPos2 = inputTriangles[f].vertices[vertex2];
                    var vertexPos3 = inputTriangles[f].vertices[vertex3];

                    var A = new Vector(vertexPos1[0], vertexPos1[1], vertexPos1[2]); 
                    var B = new Vector(vertexPos2[0], vertexPos2[1], vertexPos2[2]); 
                    var C = new Vector(vertexPos3[0], vertexPos3[1], vertexPos3[2]); 

                    // A.toConsole();
                    // B.toConsole();
                    // C.toConsole();
                    
                    var normal = calculateNormal(A,B,C);
                    var triangleCoefficientD = Vector.dot(normal, A);

                    //check for planar intersection

                    var NdotDir = Vector.dot(normal, dir);
                    var NdotE = Vector.dot(normal, eye);

                    if(NdotDir != 0) {

                        var numerator = (triangleCoefficientD - NdotE);
                        var denominator = NdotDir;
                        var t = numerator/denominator;

                        // console.log("distance : " + t);
                        if(t>=1 && t<closestT) {
                            
                            eye = Vector.normalize(eye);
                            var intersection = Vector.add(eye, Vector.scale(t, dir));
                            var view = Vector.subtract(eye, intersection);
                            view = Vector.normalize(view);
                            
                            if(Vector.dot(normal,view) < 0 ) { // to check for light behind the surface or not
                                normal = Vector.scale(-1, normal);
                            }
                            var lightDir = Vector.subtract(lightPos, intersection);
                            lightDir = Vector.normalize(lightDir);
                            normal = Vector.normalize(normal);
                            var NdotL = Vector.dot(normal, lightDir);
                            

                            //diffuse
                            var diffuseR = inputTriangles[f].material.diffuse[0]* 255 * lightColor.r * Math.max(0, NdotL);
                            var diffuseG = inputTriangles[f].material.diffuse[1]* 255 * lightColor.g * Math.max(0, NdotL);
                            var diffuseB = inputTriangles[f].material.diffuse[2]* 255 * lightColor.b * Math.max(0, NdotL);

                            //ambient
                            var ambientR = inputTriangles[f].material.ambient[0]* 255 * lightColor.r; 
                            var ambientG = inputTriangles[f].material.ambient[1]* 255 * lightColor.g; 
                            var ambientB = inputTriangles[f].material.ambient[2]* 255 * lightColor.b; 

                            //specular
                            
                            
                            var halfVector = Vector.add(view,lightDir);
                            halfVector = Vector.normalize(halfVector);
                            var NdotH = Vector.dot(normal, halfVector);
                            var specularCoeff = Math.pow(Math.max(NdotH, 0), inputTriangles[f].material.n);

                            var specularR = inputTriangles[f].material.specular[0]* 255 * lightColor.r * specularCoeff; 
                            var specularG = inputTriangles[f].material.specular[1]* 255 * lightColor.g * specularCoeff;
                            var specularB = inputTriangles[f].material.specular[2]* 255 * lightColor.b * specularCoeff;

                            if(checkInside(A,B,C,intersection,normal)) {
                                closestT = t;
                                c.change(ambientR + diffuseR + specularR, ambientG + diffuseG + specularG, ambientB + diffuseB + specularB, 255);
                                drawPixel(imagedata, x , h - y , c);

                            }
                        }
                    }
                }
            }

        }
    }
    
    context.putImageData(imagedata, 0, 0);
}
function main(inputTriangles) {
    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
    context.scale(1, -1);  // Flip the canvas vertically
    // var inputTriangles = getInputTriangles();
    

    // Call drawRayCastedTriangles with the JSON data
    drawRayCastedTriangles(context, inputTriangles);
}

