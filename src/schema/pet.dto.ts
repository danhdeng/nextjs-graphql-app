import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class PetAttribute{
    @Field(()=>ID)
    key:string
    
    @Field(()=>String)
    value:string;
}

@ObjectType()
export class Pet{
    @Field(()=>ID)
    name:string;

    @Field(()=>[PetAttribute])
    attributes:PetAttribute[];

     @Field(() => String)
    image: string;

    @Field(() => Number)
    ageInWeeks: number;

    @Field(() => String)
    sex: string;

    @Field(() => String)
    breed: string;

    @Field(() => String)
    color: string;

    @Field(() => Number)
    fee: number;

    @Field(() => Number)
    weight: number;

    @Field(() => String)
    availableDate: string;
}