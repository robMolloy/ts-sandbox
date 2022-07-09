import { useHook } from "./useHook";
const config = { sheepdog: "border collie", lab: "labrador" } as const; // IMPORTANT to use "as const"

const { logStuff } = useHook(config);

logStuff("sheepdog", "border collie"); // no error
// logStuff("sheepdog", "black labrador"); // error
// logStuff("sheepdog", config["sheepdog"]); // OK
// logStuff("sheepdog", config["black labrador"]); // error

// logStuff("sheepdog", "labrador"); // no error - annoyingly
