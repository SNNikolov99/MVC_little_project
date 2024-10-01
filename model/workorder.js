class Workorder {
    order_id;
    supplier;
    deliveryDate;
    neededProducts


    constructor(order_id,supplier,deliveryDate,neededProducts){
        this.order_id = order_id;
        this.supplier = supplier;
        this.deliveryDate = deliveryDate;
        this.neededProducts = this.neededProducts
    }

    getId(){
        return this.order_id;
    }

    getSupplier(){
        return this.supplier;
    }

    getDeliveryDate(){
        return this.deliveryDate;
    }

    getNeededProducts(){
        return this.neededProducts
    }

    setId(order_id){
        this.order_id = order_id;
    }

    setSupplier(supplier){
        this.supplier = supplier;
    }

    setDeliveryDate(deliveryDate){
        this.deliveryDate = deliveryDate;
    }

    setNeededProducts(neededProducts){
        this.neededProducts = neededProducts;
    }

}