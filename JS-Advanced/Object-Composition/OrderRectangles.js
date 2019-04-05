function solve(rectParameters) {

    let rectangles = [];

    for(const [width, height] of rectParameters) {
        let rect = comparator(width, height);
        rectangles.push(rect);
    }

    rectangles.sort((a, b) => a.compareTo(b));

    function comparator(w, h) {

        let rect = {
            width: w,
            height: h,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area();
                return result || (other.width - w);
            } 
        };

        return rect;
    }

    return rectangles;
}

console.log(solve([[10, 5], [3, 20], [5, 12]]));