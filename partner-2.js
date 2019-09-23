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

const ftToMeters = (feet) => {
    return 0.305 * feet;
}

const MiToKm = (miles) => {
    return 1.609 * miles;
}

const CtoF = (celsius) => {
    return 1.8 * celsius + 32;
}

const distance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

const distancePhysics = (intDistance, intVelocity, accel, time) => {
    return intDistance + (intVelocity * time) + ((1/2)*accel * Math.pow(time, 2));
}
