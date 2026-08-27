// function mergeTwoLists(list1: DListNode | null, list2: ListNode | null): ListNode | null {
//     // 1. Buat dummy node sebagai titik awal penampung hasil
//     const dummy = new ListNode(0);
//     let current = dummy;

//     // 2. Loop selama kedua list belum habis (tidak null)
//     while (list1 !== null && list2 !== null) {
//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next; // Geser pointer list1
//         } else {
//             current.next = list2;
//             list2 = list2.next; // Geser pointer list2
//         }
//         current = current.next; // Geser pointer current
//     }