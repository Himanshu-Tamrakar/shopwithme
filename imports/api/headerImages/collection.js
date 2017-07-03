import {
    Mongo
} from 'meteor/mongo';
export const HeaderImages = new Mongo.Collection('headerImages');

//Make it all for only Admin can perform insert, update, remove
HeaderImages.allow({
    insert(userId, party) {
        return true;
    },
    update(userId, party, field, modifier) {
        return true;
    },
    remove(userId, party) {
        return true;
    }
})
