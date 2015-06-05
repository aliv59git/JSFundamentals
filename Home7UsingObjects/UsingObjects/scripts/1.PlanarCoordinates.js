/*•	Write functions for working with shapes in standard Planar coordinate system.
o	Points are represented by coordinates P(X, Y)
o	Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
•	Calculate the distance between two points.
•	Check if three segment lines can form a triangle.*/

(function () {

    function Line(P1, P2) {
        var P1 = {
            x: x1||+'',
            y: y1||+''
        }, P2 = {
            x: x2||+'',
            y: y2||+''
        }, distance, line = {
            beginning: P1,
            ending: P2
        };
        if (P1.x !== P2.x || P1.y !== P2.y) {
            distance = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }
        return line(begi);
    }

    var line1 = new Line((3, 4), (1, -2));
    jsConsole.writeLine(line1.distance);


})();