// for (let i = 0; i < 10; i++) {
//     if (cond) {
//       ... // <- one more nesting level
//     }
//   }
for (let i = 0; i < 10; i++) {
  if (!cond) continue;
  // <- no extra nesting level
}
