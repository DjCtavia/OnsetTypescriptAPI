/** @noSelfInFile */

class Vehicle {
    constructor(private id: number){}
    
    public setDimension(dimensionId: number): void {
        SetVehicleDimension(this.id, dimensionId);
    }
    public getDimension(): number {
        return GetVehicleDimension(this.id);
    }
    public getId(): number {
        return this.id;
    }
    public destroy(): void {
        DestroyVehicle(this.id);
    }
    public isValid(): boolean {
        return IsValidVehicle(this.id);
    }
}