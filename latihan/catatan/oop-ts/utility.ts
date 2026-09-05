// Utility Types


interface User {
    id: number,
    name?: string,
    email?: string
}

// partial : bikin semua property jadi optional
function updateUser(user: Partial<User>) {
    console.log(user)
}

updateUser({name: "John Doe"})

// required : bikin semua property jadi required instantiate
const user:Required<User> = {
    id: 1,
    name: "JOhn",
    email :"j@gmail.com"
}

// readonly : hanya bisa baca & gabisa ubah nilainya

const user2: Readonly<User> = {
    id: 2,
    name: "Jane",
    email :"ja@gmail.com"
}

// user2.name = "Jane n June" // Error karena teks tidak boleh diedit (hanya bisa dibaca saja)

// Pick : Hanya ambil yang dibutuhkan
type UserInfo = Pick <User, 'id' | 'name'>

const userInfo1: UserInfo = {
    id: 4,
    name: 'Udin'
}

// Omit : Kebalikan dari Pick -> ingin menghapus property yang tidak diinginkan
type UserWithoutEmail = Omit<User, 'email'>

const user5: User = {
    id: 5,
    name: "Susanti"
}

// Record <K,T> : digunakan untuk membuat objek dimana kunci (K) dipetakan ke nilai dari tipe tertentu (T)
type UserRoles = 'admin' | 'user' | 'guest'

const users: Record<UserRoles, string[]> = {
    admin: ['alice', 'bob'],
    user : ['charlie', 'dave'],
    guest : ['john']
}

// Extract & Exclude
type StringOrNumber = string | number

// extract : copy data lalu ambil yang perlu
type OnlyString = Extract< StringOrNumber, string> // hasilnya string

// exclude : copy data lalu buang yang ga perlu
type OnlyStrings = Exclude< StringOrNumber, string> // hasilnya hanya number


// NonNullable<T> : utility type ini menghilangkan null dan undefined dari tipe T
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>; //hasilnya hanya string
