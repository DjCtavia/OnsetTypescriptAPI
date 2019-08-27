/** @noSelfInFile */

class Vector3d {
    constructor(public x: number, public y: number, public z: number){}
    public static fromTuple(tuple: [number, number, number]): Vector3d {
        return new Vector3d(tuple[0], tuple[1], tuple[2]);
    }
}