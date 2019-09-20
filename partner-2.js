//Name: Steven

const circumference = (radius) => {
    return 2*Math.PI*radius;
}

const circleArea = (radius) => {
    return (radius * radius) * Math.PI;
}

const regularPolygonArea = (apothem, sideLength, sideNumber) => {
    return sideNumber*((1/2)* apothem * sideLength);
}

const arcLength = (radius, arcAngle) => {
    return 2*Math.PI*radius*(arcAngle/360);
}

const cylinderVolume = (radius, height) => {
    return Math.PI*(radius*radius)*height;
}