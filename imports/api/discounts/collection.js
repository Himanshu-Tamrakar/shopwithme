import {
    Mongo
} from 'meteor/mongo';
export const Discounts = new Mongo.Collection('discounts');

//Make it all for only Admin can perform insert, update, remove
Discounts.allow({
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
