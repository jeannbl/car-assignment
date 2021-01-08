import { Car } from "./car";
import { Owner } from "./owner";

export class CarOwner{
    public id: string;
    public dateAssignation: Date;
    public car: Car;
    public owner: Owner;
}