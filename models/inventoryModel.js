const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type required'],
        enum:['in','out']
    },
    foodType:{
        type:String,
        required:[true,'food type required'],
        enum:['Raw food','Cooked food','Packaged food']
    },
    quantity:{
        type:Number,
        required:[true,'food quantity is required']
    },
    organisation:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organisation is required']
    },
    donar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === 'in';
        }
    },
    volunteer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){ 
            return this.inventoryType === 'out';
        }
    }
},{timestamps:true});

module.exports = mongoose.model('Inventory',inventorySchema);