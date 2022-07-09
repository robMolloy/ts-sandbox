/*
  // expands object types one level deep
  export type TExpand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

  // expands object types recursively
  export type TExpandRecursively<T> = T extends object
    ? T extends infer O
      ? { [K in keyof O]: TExpandRecursively<O[K]> }
      : never
    : T;

  // Try setting the noErrorTruncation option to true in tsconfig.json.
  // Confusingly enough, this option affects truncation of types displayed on hover in at least some circumstances; see this issue.
  // Be careful: if your type is really huge, VS Code may hang when you try to view it.

  // For people using VS Code open <Microsoft VS Code install folder>/resources/app/extensions/node_modules/typescript/lib/tsserver.js
  // and change ts.defaultMaximumTruncationLength = 160 at around line 12797 to something higher like ts.defaultMaximumTruncationLength = 800.
*/
