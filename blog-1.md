# any vs unknown: Type Safety Hole কেন? আর Type Narrowing কীভাবে কাজ করে?

## Introduction

TypeScript-এর সবচেয়ে বড় শক্তি হলো **type safety**। মানে compile time-এ ভুল ধরার ক্ষমতা। কিন্তু কিছু কিছু টাইপ আছে যেগুলো এই নিরাপত্তাকে দুর্বল করে দিতে পারে। এর মধ্যে সবচেয়ে আলোচিত হলো `any`। অন্যদিকে `unknown` একই রকম flexible হলেও অনেক বেশি নিরাপদ।

## any কেন “Type Safety Hole”?

`any` মানে, আমি কিছুই জানি না, তুমি যা খুশি করো। `any` ব্যবহার করলে TypeScript তার type checking বন্ধ করে দেয়।

### Example:

```ts
let value: any = "Hello World";

value.toUpperCase(); // OK
value = 123;
value.toUpperCase(); // Runtime error
```

এজন্যই `any` কে বলা হয় **Type Safety Hole**। এটা type system-এ একটা গর্ত তৈরি করে যেখানে safety হারিয়ে যায়।

---

## unknown কেন safer?

`unknown` অনেকটা `any` এর মতো flexible, কিন্তু একটা বড় পার্থক্য আছে:

**unknown টাইপের value ব্যবহার করার আগে check করতে হয়**

### Example:

```ts
let value: unknown = "Hello";

value.toUpperCase(); // Error
```

এখানে `any`সরাসরি use করা যাবে না, আগে type check করতে হবে।

### Proper way:

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // Safe
}
```

## Type Narrowing কী?

Type narrowing মানে হলো, **বড় (broad) টাইপ থেকে ছোট (specific) টাইপে আনা**

### Example:

```ts
function printLength(value: unknown) {
  if (typeof value === "string") {
    console.log(value.length);
  } else {
    console.log("Not a string");
  }
}
```

`typeof` check করার মাধ্যমে TypeScript narrow করে ফেলেছে টাইপ।

---

## Narrowing এর কিছু common techniques

### 1. typeof

```ts
if (typeof value === "number") {
  console.log(value.toFixed(2));
}
```

### 2. instanceof

```ts
if (value instanceof Date) {
  console.log(value.getFullYear());
}
```

---

## Conclusion

- `any` ব্যবহার করলে TypeScript-এর **type safety ভেঙে যায়**, তাই একে “type safety hole” বলা হয়।
- `unknown` safer কারণ এটা force করে type check করতে।
- **Type narrowing** ব্যবহার করে আমরা safely unknown data handle করতে পারি।
