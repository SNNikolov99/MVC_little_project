class Part {
    serial_id;
    description;
    supplier;
    quantity;

    constructor(serial_id,description,supplier,quantity){
        this.serial_id = serial_id;
        this.description = description;
        this.supplier = supplier;
        this.quantity = this.quantity
    }

    getSerialId(){
        return this.serial_id;
    }

    getDescrpition(){
        return this.description;
    }

    getSupplier(){
        return this.supplier;
    }

    getQuantity(){
        return this.quantity;
    }

    setSerialId(serial_id){
        this.serial_id = serial_id;
    }

    setDescription(description){
        this.description = description;
    }

    setSupplier(supplier){
        this.supplier = supplier;
    }

    SetQuantity(quantity){
        this.quantity = quantity;
    }

}