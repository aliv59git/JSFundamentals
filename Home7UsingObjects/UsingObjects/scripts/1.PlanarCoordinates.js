/*•	Write functions for working with shapes in standard Planar coordinate system.
o	Points are represented by coordinates P(X, Y)
o	Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
•	Calculate the distance between two points.
•	Check if three segment lines can form a triangle.*/


function Point(x, y) {
    return {
        'x': x,
        'y': y
    };
}

function Line(P1, P2) {
    return {
        'begin': P1,
        'end': P2,
        'distance': calculateDistance(P1, P1)
    };
}

function calculateDistance(point1, point2){
    return Math.sqrt((point1.x - point2.x) * (point1.x - point2.x) + (point1.y - point2.y) * (point1.y - point2.y));
}

function distanceAB() {
    var a1 = +(document.getElementById('input-text').value).split(',')[0],
        a2 = +(document.getElementById('input-text').value).split(',')[1],
        b1 = +(document.getElementById('input-text1').value).split(',')[0],
        b2 = +(document.getElementById('input-text1').value).split(',')[1],
        c1 = +(document.getElementById('input-text2').value).split(',')[0],
        c2 = +(document.getElementById('input-text2').value).split(',')[1];

    var A = new Point(a1, a2),
        B = new Point(b1, b2),
        C = new Point(c1, c2),
        lineAB = new Line(A, B), 
        distanceAB = calculateDistance(A, B);
    jsConsole.writeLine('Distance A-B is: ' + distanceAB);
    jsConsole.writeLine();
    formTriangle();

    function formTriangle() {
        jsConsole.writeLine('Distance A-B is: ' + calculateDistance(A, B));
        jsConsole.writeLine('Distance B-C is: ' + calculateDistance(B, C));
        jsConsole.writeLine('Distance A-C is: ' + calculateDistance(A, C));
        if (calculateDistance(A, B) + calculateDistance(A, C) > calculateDistance(B, C) && calculateDistance(A, C) + calculateDistance(B, C) > calculateDistance(A, B) && calculateDistance(A, B) + calculateDistance(B, C) > calculateDistance(A, C)) {
            jsConsole.writeLine('Three segment lines AB, AC, BC can form a triangle.');
        } else {
            jsConsole.writeLine('Three segment lines AB, AC, BC can not form a triangle.');
        }

    }

    return distanceAB;
}
        //distanceAB = Math.sqrt((a1 - b1) * (a1 - b1) + (a2 - b2) * (a2 - b2)),
        //distanceBC = Math.sqrt((b1 - c1) * (b1 - c1) + (b2 - c2) * (b2 - c2)),
        //distanceAC = Math.sqrt((a1 - c1) * (a1 - c1) + (a2 - c2) * (a2 - c2));









