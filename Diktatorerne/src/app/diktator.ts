export class Diktator {
    public constructor(init?: Partial<Diktator>){
        Object.assign(this, init);
    }

    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    dateOfDeath?: Date;
    description?: string;
}
