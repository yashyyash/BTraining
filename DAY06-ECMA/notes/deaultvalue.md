Perfect 👌 — you’re talking about **default parameters in JavaScript functions**, and **how placement affects behavior**.
Let’s clarify this with **simple examples** 👇

---

### ✅ 1. Default parameter at the end → can be skipped

You can **omit** the last argument easily.

```js
function greet(name, city = "Mumbai") {
    console.log(`Hello ${name} from ${city}`);
}

greet("Yash");          // ✅ city takes default → "Mumbai"
greet("Yash", "Pune");  // uses provided value
```

🟢 Output:

```
Hello Yash from Mumbai
Hello Yash from Pune
```

---

### ⚠️ 2. Default parameter in between → must pass something (use `undefined` to skip)

If the **default** is **not the last**, you can’t skip it by leaving it out — you must explicitly pass `undefined`.

```js
function userInfo(name = "Guest", age, city = "Delhi") {
    console.log(name, age, city);
}

// userInfo(25) ❌ Wrong (age gets 25, city becomes undefined)
userInfo(undefined, 25); // ✅ Skips name, sets default
```

🟢 Output:

```
Guest 25 Delhi
```

---

### 🧠 3. Can’t “escape” parameters in middle without passing something

If default is in the **middle**, JS doesn’t auto-skip positions:

```js
function demo(a, b = 2, c) {
    console.log(a, b, c);
}

demo(1, undefined, 3); // ✅ works (b uses default)
demo(1, , 3);          // ❌ SyntaxError — can’t leave a “hole”
```

---

### 🧩 Summary:

| Case                            | Can Skip Argument? | Fix                        |
| ------------------------------- | ------------------ | -------------------------- |
| Default at **end**              | ✅ Yes              | Just omit it               |
| Default in **middle**           | ❌ No               | Pass `undefined` to skip   |
| Leave “gap” (like `demo(1,,3)`) | ❌ SyntaxError      | Use `undefined` explicitly |

---

Would you like me to show how **default parameters + destructuring** work together (like `function({name="Guest", city="Pune"})`)? That’s super useful in modern JS.
