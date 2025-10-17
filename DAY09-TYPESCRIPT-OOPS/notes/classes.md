## 🧱 1️⃣ Basic Class – Fields and Methods

```ts
class Person {
    Firstname: string;
    Lastname: string;
    private PersonID: number;

    Personlog(): string {
        return `Name: ${this.Firstname} ${this.Lastname}`;
    }
}
```

### 🔍 Explanation

| Concept                     | Meaning                                                                |
| --------------------------- | ---------------------------------------------------------------------- |
| **`Firstname`, `Lastname`** | Public properties — accessible anywhere                                |
| **`private PersonID`**      | Private → can be accessed **only inside this class**, not from outside |
| **`Personlog()`**           | A method (function inside a class) that can use the properties         |

### ⚙️ Usage:

```ts
const person = new Person();
person.Firstname = "Yash";
person.Lastname = "Mutatkar";
console.log(person.Personlog()); // ✅ Works

console.log(person.PersonID); // ❌ Error → private property
```

🔹 This shows **encapsulation** — data hiding using `private`.

---

## 🧱 2️⃣ Adding a Constructor (Initialization + Access Modifiers)

```ts
class Person {
    Firstname: string | undefined;
    Lastname: string | undefined;
    protected PersonID: string | undefined;

    constructor(Firstname?: string, Lastname?: string, PersonID?: string) {
        this.Firstname = Firstname;
        this.Lastname = Lastname;
        this.PersonID = PersonID;
        console.log(`class constructor executed`);
    }

    Personlog(): string {
        return `ID: ${this.PersonID} Name: ${this.Firstname} ${this.Lastname}`;
    }
}

const person: Person = new Person("Yash", "Mutatkar", "GNOP3klmon");
person.Personlog();
```

### 🔍 Explanation

| Concept                                         | Meaning                                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| **Constructor**                                 | Special method that runs automatically when a new object is created (`new Person(...)`) |
| **Parameters with `?`**                         | Optional — can be `undefined` if not passed                                             |
| **`protected` PersonID**                        | Can be accessed inside this class and its **subclasses**, but not from outside          |
| **`console.log("class constructor executed")`** | Shows that the constructor runs once during object creation                             |

---

✅ **When you call:**

```ts
new Person("Yash", "Mutatkar", "GNOP3klmon");
```

Output:

```
class constructor executed
```

And `person.Personlog()` →
`ID: GNOP3klmon Name: Yash Mutatkar`

---

## 🧱 3️⃣ Shortcut Constructor + Getter/Setter

```ts
class Person {
    constructor(public fname?: string, public lname?: string, public city?: string, protected socialId?: number) {
    }

    private _address: string;

    get address(): string {
        console.log("Address GET");
        return this._address;
    }

    set address(value: string) {
        console.log("address SET");
        this._address = value;
    }

    getPersonInfo(): string {
        return `Person ${this.fname} ${this.lname} with social id ${this.socialId} lives in ${this.city}!`;
    }
}

const person: Person = new Person("Aman", "R.J.", "Mumbai", 12345678);
person.address = "Banglore";     // Setter called
console.log(person.address);     // Getter called
```

---

### 🔍 Explanation

#### **Constructor Parameter Shortcut**

Instead of writing:

```ts
this.fname = fname;
this.lname = lname;
this.city = city;
```

You can just write:

```ts
constructor(public fname, public lname, public city)
```

and TypeScript automatically:

* Declares the properties
* Assigns values to them

#### **Private variable + Getter/Setter**

```ts
private _address: string;
```

You can’t access `_address` directly.

So you define:

```ts
get address() { ... }  
set address(value) { ... }
```

Now you can do:

```ts
person.address = "Bangalore";  // calls the setter
console.log(person.address);   // calls the getter
```

🔹 This allows **controlled access** to private data (you can validate, log, etc.).

---

## 🧱 4️⃣ Abstract Classes and Inheritance

```ts
abstract class Person {
    city: string;

    constructor(value: string) {
        this.city = value;
    }

    getpersonInfo(): string {
        return `Lives in city ${this.city}`;
    }

    abstract chageAdress(oldAddress: string, newAddress: string): boolean;
}

class Customer extends Person {
    constructor(city: string) {
        super(city); // Calls parent constructor
    }

    chageAdress(oldAddress: string, newAddress: string): boolean {
        console.log(`Address changed from ${oldAddress} to ${newAddress}`);
        return true;
    }
}
```

---

### 🔍 Explanation

| Concept               | Meaning                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **`abstract class`**  | Cannot be directly instantiated (no `new Person()` allowed)                              |
| **`abstract method`** | Method **declared but not implemented** in the parent — child class **must override** it |
| **`super(city)`**     | Calls the parent class constructor                                                       |
| **`extends`**         | Used for inheritance                                                                     |

---

✅ Usage:

```ts
const customer = new Customer("Pune");
console.log(customer.getpersonInfo());
customer.chageAdress("Old Lane", "New Avenue");
```

Output:

```
Lives in city Pune
Address changed from Old Lane to New Avenue
```

---

## 🧭 Summary Table

| Concept              | Keyword                          | Purpose                                      |
| -------------------- | -------------------------------- | -------------------------------------------- |
| **Property**         | (public / private / protected)   | Defines class data                           |
| **Constructor**      | `constructor()`                  | Runs when object is created                  |
| **Access Modifiers** | `public`, `private`, `protected` | Control visibility of members                |
| **Getter/Setter**    | `get`, `set`                     | Encapsulate data access                      |
| **Inheritance**      | `extends`, `super()`             | Share code from parent to child              |
| **Abstract Class**   | `abstract class`                 | Base class blueprint (can’t be instantiated) |
| **Abstract Method**  | `abstract methodName()`          | Must be implemented by subclass              |

---

## 💡 Real-Life Analogy

| Concept            | Example                                                                                |
| ------------------ | -------------------------------------------------------------------------------------- |
| **Class**          | Template or Blueprint (e.g. “Person”)                                                  |
| **Object**         | Actual instance (e.g. Yash, Aman)                                                      |
| **Constructor**    | ID card creation process                                                               |
| **Private field**  | Hidden data (like Aadhar number)                                                       |
| **Getter/Setter**  | Controlled access (show or update info safely)                                         |
| **Inheritance**    | Customer extends Person — like a “specialized type of Person”                          |
| **Abstract class** | Common design that other types must follow (e.g. Person → Student, Employee, Customer) |

---

---

## 🧩 Step 1: Abstract Base Class

```ts
abstract class Person {
```

### 👉 Keyword: `abstract`

* **`abstract class`** = you **cannot create objects** directly from it (no `new Person()`).
* It serves as a **blueprint** for other classes.
* You can define:

  * Common properties & methods.
  * `abstract` methods — that **must** be implemented in derived (child) classes.

---

## 🧠 Constructor

```ts
constructor(public firstName?: string, public lastName?: string, public city?: string, protected socialId?: number) {
    console.log('Person Constructor Executed!');
}
```

### 👉 `constructor`

* A **special method** called automatically when an object is created using `new`.
* Used to **initialize class properties**.

### 👉 Access Modifiers in Parameters:

TypeScript shortcut syntax:

* `public firstName?: string`
  → declares a **public property** `firstName` and assigns it automatically.

So this line:

```ts
constructor(public firstName?: string, public lastName?: string, public city?: string, protected socialId?: number)
```

is equivalent to:

```ts
public firstName?: string;
public lastName?: string;
public city?: string;
protected socialId?: number;
constructor(firstName?: string, lastName?: string, city?: string, socialId?: number) {
   this.firstName = firstName;
   this.lastName = lastName;
   this.city = city;
   this.socialId = socialId;
}
```

### 👉 Access Modifiers Summary

| Modifier    | Where accessible                        | Example         |
| ----------- | --------------------------------------- | --------------- |
| `public`    | anywhere                                | default         |
| `private`   | only inside the same class              | `this._address` |
| `protected` | inside the class **and its subclasses** | `socialId`      |

---

## 🏠 Private Property + Getter/Setter

```ts
private _address: string;
get address(): string {
    console.log('Address - GET Property Executed!');
    return this._address;
}
set address(value: string) {
    console.log('Address - SET Property Executed!');
    this._address = value;
}
```

### 👉 What’s happening

* `_address` is **private** → cannot be accessed directly (`customer._address ❌`).
* Instead, we use:

  ```ts
  customer.address = "Suncity";  // setter called
  console.log(customer.address); // getter called
  ```

### 👉 Why use this pattern?

✅ Data encapsulation
✅ Validation or logging before assignment
✅ Cleaner property-like access with method-level control

---

## 🏙️ Another Property with Get/Set (same concept)

```ts
private _state: string;
public get state(): string { return this._state; }
public set state(v: string) { this._state = v; }
```

Just like `_address`, but simpler — no console logs this time.

---

## 🧾 Regular Method

```ts
getPersonInfo(): string {
    return `Person ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
}
```

### 👉 Normal Instance Method

* Accessible by all subclasses and instances.
* Uses **template literals** (backticks) for string interpolation.
* Returns a string built from class data.

---

## 📦 Abstract Method

```ts
abstract changeAddress(oldAddress: string, newAddress: string): boolean;
```

### 👉 `abstract` method

* No implementation here — only declaration.
* Child classes **must implement it**.
* Used to enforce a “contract” or rule.

For example:

> Any class that extends `Person` must define how to `changeAddress`.

---

## 🧩 Step 2: Derived Class

```ts
class Customer extends Person {
```

### 👉 Keyword: `extends`

* Used for **inheritance** — `Customer` inherits properties and methods from `Person`.
* So, `Customer` automatically has:
  `firstName`, `lastName`, `city`, `socialId`, `getPersonInfo()`, `address`, `state`.

---

## 🏗️ Constructor with `super()`

```ts
constructor(firstName?: string, lastName?: string, city?: string, socialId?: number) {
    super(firstName, lastName, city, socialId);
    console.log('Customer Constructor Executed!');
}
```

### 👉 `super(...)`

* Calls the **parent class constructor** (`Person`’s constructor).
* Must be called **before accessing `this`** in a subclass.
* Ensures parent initialization happens first.

So when you run:

```ts
new Customer("Manish", "Kaushik", "Raipur", 2392739333);
```

Output:

```
Person Constructor Executed!
Customer Constructor Executed!
```

---

## 💳 Additional Property in Subclass

```ts
customerId: number;
```

`Customer` can define its **own new properties** — not present in `Person`.

---

## ✍️ Method Overriding

```ts
changeAddress(oldAddress: string, newAddress: string): boolean {
    console.log(`Customer ${this.firstName} ${this.lastName} has changed his/her address from ${oldAddress} to ${newAddress}!`);
    return true;
}
```

### 👉 Concept: Method Overriding

* The parent’s abstract `changeAddress` must be implemented in the child.
* Here, we **override** it with custom logic.

---

## 🚀 Object Creation & Execution Flow

```ts
const customer: Customer = new Customer("Manish", "Kaushik", "Raipur", 2392739333);
customer.address = "Suncity, A8/404";
console.log(customer.getPersonInfo());
console.log(customer.changeAddress(customer.address, "Star City,C5/101"));
```

### Step-by-step:

1. **`new Customer(...)`**

   * Calls `Customer` constructor
   * `super(...)` calls `Person` constructor
     → “Person Constructor Executed!”
   * Then “Customer Constructor Executed!”

2. **`customer.address = "Suncity..."`**

   * Calls the **setter**
     → “Address - SET Property Executed!”

3. **`customer.getPersonInfo()`**

   * Uses inherited method from Person
     → returns `"Person Manish Kaushik lives in city Raipur!"`

4. **`customer.changeAddress(...)`**

   * Calls overridden method in `Customer`
     → logs change message and returns `true`.

---

## 🧭 Summary Table

| Feature           | Keyword               | Used Where                | Explanation                       |
| ----------------- | --------------------- | ------------------------- | --------------------------------- |
| Abstract Class    | `abstract class`      | `Person`                  | Cannot be instantiated directly   |
| Abstract Method   | `abstract`            | `changeAddress()`         | Must be implemented by subclass   |
| Inheritance       | `extends`             | `Customer extends Person` | Subclass gets all parent features |
| Constructor       | `constructor`         | Both classes              | Initializes object                |
| Super             | `super()`             | `Customer` constructor    | Calls parent’s constructor        |
| Public            | `public`              | `firstName`, `city`, etc. | Accessible everywhere             |
| Private           | `private`             | `_address`, `_state`      | Accessible only within same class |
| Protected         | `protected`           | `socialId`                | Accessible in class + subclasses  |
| Getter/Setter     | `get`, `set`          | `address`, `state`        | Controlled property access        |
| Method Overriding | same name method      | `changeAddress()`         | Subclass defines its own logic    |
| Template Literal  | `` `text ${value}` `` | All string outputs        | For clean string formatting       |

---

## 🧠 Concepts Covered

✅ Class Declaration
✅ Access Modifiers (public/private/protected)
✅ Constructor & Parameter Properties
✅ Getters & Setters
✅ Abstract Class
✅ Abstract Method
✅ Inheritance (`extends`)
✅ Super constructor call
✅ Method Overriding
✅ Object creation & execution order
✅ Template Literals

---

## 🧾 Final Output Example

```
Person Constructor Executed!
Customer Constructor Executed!
Address - SET Property Executed!
Address - GET Property Executed!
Person Manish Kaushik lives in city Raipur!
Customer Manish Kaushik has changed his/her address from Suncity, A8/404 to Star City,C5/101!
true
```

---

