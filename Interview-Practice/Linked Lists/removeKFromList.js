/*
 Xóa tất cả giá trị k khỏi list
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

 	function removeKFromList(l, k) {
   
   function searchTr(l, k) {
     let p = l, tr = null;
     while (p!==null)
      {
        if (p.value === k){
           return tr;
        }
        tr = p;
        p = p.next;
      }
    return null;
   }
   
   
   
 		let phead = l;
 		let tr = null;
 		let p = phead;

 		while (p!==null) {
    
 			     if (p.value === k) {
	            if (p === phead) { // xóa head
	            	phead = p.next;
	            } else {
               let tr = searchTr(phead, p.value);
	                if (p.next === null) { // xóa tail
	                    if (p === phead) { // dãy có 1 phần tử
	                    	phead = null;
	                    } else {
	                    	tr.next = null;
	                    }
	                } else { // xóa giữa
                  tr.next = p.next;
                 }
	            }

	        } 
	        p=p.next;
	    }
	    return phead;
	}