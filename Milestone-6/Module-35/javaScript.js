/* What is javaScript?
 * 1. High abstraction
 * 2. Garbage collection
 * 3. Just-In-Time Compiled (JIT Compiled)
 * 4. Multi-Paradigm
 * 5. Prototype-based
 * 6. Dynamically typed
 */

/** javaScript runs...
 * v8 engine (browser) written in c++ (www.v8.dev.)
 * v8 internal mechanism -
 * 1. js source code
 * 2. Parse
 * 3. Abstract syntax tree
 * 4. interpreter ignition
 * 5. compiler TruboFan
 * 6. optimized machine code
 * 7. bytecode (for processor)
*/

// Parsing is the process of analyzing text to determine if it belongs to a specific language or not (i.e. is syntactically valid for that language's grammar). It is an informal name for the syntactic analysis process.

/** Execution context (eg this keyword, scope)
 * is an environment
 * js code gets executed
 * variables, parameters and other info related to code is stored 
 * two kinds of execution context - 
 *      1. global execution context (GEC) - default
 *      2. function execution context (FEC) - when function is called
 * Execution Context is created in two Phases - 
 *  1. Creation Phase - creates references (variable name, function, scope etc)
 *  2. Execution Phase - when called (assign value to variables and functions)
 */

/**Call Stack
 * 
 */

/** Single-threaded  
 * one statement is executed at a time
 * js only has one call stack
 * runs code line by line
 * must finish executing a piece of code before moving onto the next
 *
 * Synchronous (maintains serial) vs Asynchronous (doesn't)
 * 
 */

/**Promise
 * 
 */