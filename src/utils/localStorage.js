import { toast } from "react-toastify";

const getReadItem=()=>{
    const readItem=localStorage.getItem('read_item');
    if(readItem){
        return JSON.parse(readItem);
    }
    return [];
}



const saveReadItem=book=>{
    const readItem=getReadItem();
    const isExist=readItem.find(i=>i.bookId===book.bookId);
    if(!isExist){
        readItem.push(book);
        localStorage.setItem('read_item',JSON.stringify(readItem));
        toast.success("Book aded to read list!");
    }
    else{toast.error("You have alredy read!");};
}

const getWishlist=()=>{
    const wishlist=localStorage.getItem('wishlist');
    if(wishlist){
        return JSON.parse(wishlist);
    }
    return [];
}

const saveWishlist=book=>{
    const wishlist=getWishlist();
    const readItem=getReadItem();
    const isExist=wishlist.find(i=>i.bookId===book.bookId);
    const isExist1=readItem.find(i=>i.bookId===book.bookId);
    if(isExist || isExist1){
        toast.error("You have alredy read!");
    }else{
    wishlist.push(book);
        localStorage.setItem('wishlist',JSON.stringify(wishlist));
        toast.success("Book aded to wishlist!");
    };
}


export{getReadItem, saveReadItem, getWishlist, saveWishlist}