import { Arg, Query, Resolver } from "type-graphql";
import { Pet } from "./pet.dto";
import pets from "./pets_data.json";

@Resolver(Pet)
export class PetsResolver{
    @Query(()=>Pet, {nullable:true})pet(@Arg("name",()=>String)name: string):Pet | undefined{
        const pet=pets.find((pet:Pet) => pet.name==name);
        if(pet===undefined){
            throw new Error("Dog not found");
        }
        return pet;
    }

    @Query(()=>[Pet])
    pets():Pet[]{
        return pets;
    }
}
