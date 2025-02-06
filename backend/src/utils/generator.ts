import { topicdev } from "./topicdev";

async function process_book_struct(jsonData: any): Promise<string> {
  let generatedContent = "";

  async function iterateAndGenerate(data: any) {
    // If it's an array, loop through each item
    if (Array.isArray(data)) {
      console.log("Processing JSON as an array...");
      for (const [index, item] of data.entries()) {
        console.log(`Generating content for Item ${index + 1}...`);
        const generated = await topicdev(JSON.stringify(item));
        generatedContent += `\n\n### Item ${index + 1} ###\n${generated}`;
      }
    }
    // If it's an object, iterate through key-value pairs
    else if (typeof data === "object" && data !== null) {
      console.log("Processing JSON as an object...");
      for (const [key, value] of Object.entries(data)) {
        console.log(`Generating content for Key: ${key}...`);
        const generated = await topicdev(JSON.stringify(value));
        generatedContent += `\n\n### Key: ${key} ###\n${generated}`;
      }
    } else {
      console.error("Unexpected JSON format. Unable to process.");
    }
  }

  await iterateAndGenerate(jsonData);

  return generatedContent;
}

export {
    process_book_struct
}