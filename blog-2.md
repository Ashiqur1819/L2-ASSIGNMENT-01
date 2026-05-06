# TypeScript Generics কীভাবে Reusable এবং Strictly Typed Components তৈরি করে?

## Introduction

TypeScript-এ **Generics** এমন একটি powerful feature যা আমাদেরকে এমন reusable function, class, বা component তৈরি করতে সাহায্য করে যেগুলো বিভিন্ন ধরনের data-এর সাথে কাজ করতে পারে, কিন্তু type safety বজায় রাখে।

---

## Generics কেন দরকার?

ধরো আমরা একটি function বানাতে চাই যেটা array থেকে প্রথম element return করবে।

যদি আমি normal ভাবে লেখি:

```ts
function getFirst(arr: any[]) {
  return arr[0];
}
```

সমস্যা:

- এখানে `any` ব্যবহার করা হয়েছে
- Type safety নষ্ট হয়ে গেছে
- ভুল type পাঠালেও error ধরতে পারবে না

---

## Generics দিয়ে Solution

Generics ব্যবহার করলে আমরা type কে flexible কিন্তু safe রাখতে পারি।

```ts
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
```

### কী হচ্ছে এখানে?

- `T` হলো একটি generic type placeholder
- Function call করার সময় TypeScript নিজেই বুঝে নেয় `T` কী হবে

---

## 🧱 Generic Constraints (Extra Safety)

আমরা চাইলে Generics-এর উপর constraint দিতে পারি যাতে নির্দিষ্ট structure enforce করা যায়।

```ts
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

### Explanation:

- এখানে `T` অবশ্যই এমন type হতে হবে যার `length` property আছে
- তাই string, array কাজ করবে কিন্তু number করবে না

```ts
getLength("Hello"); // OK
getLength([1, 2, 3]); // OK
// getLength(10); // Error
```

---

## Conclusion

Generics TypeScript-এর এমন একটি feature যা:

- Reusability বাড়ায়
- Type safety বজায় রাখে
- Flexible কিন্তু strict structure দেয়
- Real-world scalable applications বানাতে সাহায্য করে
