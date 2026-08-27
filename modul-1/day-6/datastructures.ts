// Linked List (The Chain) -> Struktur data linier yang terdiri dari rantai elemen terhubung yang disebut Node.

// 1. Treasure Hust: Berburu Harta Karun
class SinglyNode {
    value: string
    next: SinglyNode | null = null;
    
    constructor(value: string) {
        this.value = value;
    }
}

class SinglyLinkedList {
    head: SinglyNode | null = null

    addAtBeginning(clue: string) {
        const newNode = new SinglyNode(clue)
        newNode.next = this.head
        this.head = newNode;
    }

    printAllClues(){
        let current = this.head
        while (current!== null) {
            console.log("Clue: ", current.value)
            current = current.next; // maju ke node berikutnya
        }
    }
}
const treasureHunt = new SinglyLinkedList()
treasureHunt.addAtBeginning("Lihat di bawah meja ")
treasureHunt.addAtBeginning("Buka pintu kamar")

// urutan rantai: "Buka Pintu Kamar" -> "Lihat di bawah meja" -> null

treasureHunt.printAllClues();

// Konsep Stack / LIFO (Last in First Out)
// Tumpukan piring kotor: piring yang ditaruh diatas akan dicuci duluan

// Konsep Queue / FIFO (First in First Out)

// Pelajari tentang hash map