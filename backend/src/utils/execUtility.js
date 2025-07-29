import util from "util";
import child_process from "child_process";

// Convert child_process.exec into a Promise-based function

export const execPromisified = util.promisify(child_process.exec);
