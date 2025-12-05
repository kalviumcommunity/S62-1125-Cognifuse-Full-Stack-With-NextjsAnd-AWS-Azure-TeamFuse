// Enable tsx loader (ONLY needed in Docker CMD, not in file)
// This file uses pure ESM imports

console.log("Starting workers...");

// Dynamically import workers so they run in parallel

(async () => {
  console.log("[syncWorker] initializing...");
  await import("./src/lib/queue/syncWorker.ts");
  console.log("[syncWorker] started");

  console.log("[webhookWorker] initializing...");
  await import("./src/lib/queue/webhookWorker.ts");
  console.log("[webhookWorker] started");

  console.log("Both workers started successfully.");
})();
