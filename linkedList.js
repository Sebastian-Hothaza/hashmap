export { linkedListFactory }

const node = (key, value, next) => {
    return{
        key, value, next
    }
}

const linkedListFactory = () => {
    let head=null;

    function getHead(){
        return head;
    }

    function getLast(){
        let cur = head;
        if (!cur) return null;
        while(cur.next != null){
            cur = cur.next;
        }
        return cur;
    }

    function append(key, value){
        const newNode = node(key,value,null);
        if (head!=null){
            getLast().next=newNode;
        }else{
            head = newNode;
        }
    }

    function remove(key){
        // go thru LL until we find key to remove. If we dont find, return false. Otherwise return true.
        let cur = head;
        if (!cur) return false;

        // Check if the element to remove is the first element
        if (cur.key == key){
            
            head = cur.next;
            // console.log('HEAD:',head)
            return true;
        }
        // Go thru the LL
        while(cur.next != null){
            let prev = cur; //backing up previous node
            cur = cur.next;
            if (cur.key == key){
                // Node we are on is the node we want to delete
                prev.next = cur.next;
                return true;
            }
        }
        return false;
    }

    return{
        getHead, getLast, append, remove
    }
};