class Product {
    id;
    description;
    neededParts;

    constructor(id,description,neededParts){
        this.id = id;
        this.description = description;
        this.neededParts = neededParts;
    }

    getId(){
        return this.id;
    }

    getDescrpition(){
        return this.description;
    }

    getNeededParts(){
        return this.neededParts;
    }

    setId(id){
        this.id = id;
    }

    setDescription(description){
        this.description = description;
    }

    setNeededParts(neededParts){
        this.neededParts = neededParts;
    }

}