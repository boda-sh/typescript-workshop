// TypeScript also helps with documenting external code

// Example: external database/api returned User object
interface User {
  // initally, we leave the properties empty
}

function getUser(id: string, callback: (user: User) => void): void {
  // code...
}

function signIn(id: string) {
  getUser(id, (user: User) => {
    const name = user.firstName;
  });
}

// Strategy:

// 1. Add types to the API call, giving it a best guess of the correct type,
// e.g an empty object type.

// 2. Add type annotations to every place this function is being called.
// The compiler will tell you if your type is wrong. You get a red squiggly line
// under your incorrect assumptions. So you update the type to match reality.

// 3. Continue adding type annotations everywhere the data is used and updating
// your types until the types match reality.
