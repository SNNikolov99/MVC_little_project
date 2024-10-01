class ProductInstance {
    serial_id;
    dateOfManufacture;
    workcluster;

    constructor(serial_id,dateOfManufacture,workcluster){
        this.serial_id = serial_id;
        this.dateOfManufacture = dateOfManufacture;
        this.workcluster = workcluster;
    }

    getId(){
        return this.serial_id;
    }

    getDescrpition(){
        return this.dateOfManufacture;
    }

    getWorkcluster(){
        return this.workcluster;
    }

    setId(serial_id){
        this.serial_id = serial_id;
    }

    setDateOfManufacture(dateOfManufacture){
        this.dateOfManufacture = dateOfManufacture;
    }

    setWorkcluster(workcluster){
        this.workcluster = workcluster;
    }

}