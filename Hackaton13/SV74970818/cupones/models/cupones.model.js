const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const cuponSchema = new Schema({
    descripcion: String,
    descuento: Number,
});


cuponSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//

cuponSchema.set('toJSON', {
    virtuals: true
});

cuponSchema.findById = function (cb) {
    return this.model('Cupones').find({id: this.id}, cb);
};

const Cupon = mongoose.model('Cupones', cuponSchema);


exports.findById = (id) => {
    return Cupon.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createCupon = (cuponData) => {
    const cupon = new Cupon(cuponData);
    return cupon.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Cupon.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, cupones) {
                if (err) {
                    reject(err);
                } else {
                    resolve(cupones);
                }
            })
    });
};

exports.patchCupon = (id, cuponData) => {
    return Cupon.findOneAndUpdate({
        _id: id
    }, cuponData);
};

exports.removeById = (cuponId) => {
    return new Promise((resolve, reject) => {
        Cupon.deleteMany({_id: cuponId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

