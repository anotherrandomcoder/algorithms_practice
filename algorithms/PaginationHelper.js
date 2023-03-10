// For this exercise you will be strengthening your page-fu mastery.
// You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page.
// The types of values contained within the collection/array are not relevant.

class PaginationHelper {
    constructor(collection, pageSize) {
        this.collection = collection
        this.pageSize = pageSize
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.pageSize)
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        let result = this.collection.length - (pageIndex *  this.pageSize)

        return result <= 0 || pageIndex < 0
            ? -1
            : (result > this.pageSize ? this.pageSize : result)
    }

    pageIndex(itemIndex) {
        return itemIndex < 0 || itemIndex > this.collection.length - 1 ? -1 : Math.floor(itemIndex / this.pageSize)
    }
}

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'], 4);

// The following are some examples of how this class is used:
console.log(helper.pageCount()); //should == 4
console.log(helper.itemCount()); //should == 14
console.log(helper.pageItemCount(-1)); //should == -1
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); //should == 4
console.log(helper.pageItemCount(2)); //should == 4
console.log(helper.pageItemCount(3)); // last page - should == 2
console.log(helper.pageItemCount(4)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(3)); //should == 0
console.log(helper.pageIndex(4)); //should == 1
console.log(helper.pageIndex(10)); //should == 2
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
console.log(helper.pageIndex(40)); //should == -1