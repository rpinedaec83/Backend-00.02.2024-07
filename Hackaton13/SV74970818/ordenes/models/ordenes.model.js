const mongoose = require('../../common/services/mongoose.service').mongoose;
const Schema = mongoose.Schema;

const ordenSchema = new Schema({
    cursoId: String,
    curso: String,
    cliente: String,
    precio: Number,
    descuento: Number,
});


ordenSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
//

ordenSchema.set('toJSON', {
    virtuals: true
});

ordenSchema.findById = function (cb) {
    return this.model('Ordenes').find({id: this.id}, cb);
};

const Orden = mongoose.model('Ordenes', ordenSchema);


exports.findById = (id) => {
    return Orden.findById(id)
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createOrden = (ordenData) => {
    const orden = new Orden(ordenData);
    return orden.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        Orden.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, ordenes) {
                if (err) {
                    reject(err);
                } else {
                    resolve(ordenes);
                }
            })
    });
};

exports.patchOrden = (id, ordenData) => {
    return Orden.findOneAndUpdate({
        _id: id
    }, ordenData);
};

exports.removeById = (ordenId) => {
    return new Promise((resolve, reject) => {
        Orden.deleteMany({_id: ordenId}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};

