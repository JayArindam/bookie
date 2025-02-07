import { topicdev } from "./topicdev";
import { introgen } from "./introgenerator";
import { subtopicdev } from "./subtopdev";

interface Subtopic {
  title: string;
  brief: string;
}

interface Topic {
  topic: string;
  subtopics: Subtopic[];
}

interface BookStructure {
  heading: string;
  topics: Topic[];
}

async function process_book_struct(jsonData: BookStructure): Promise<string> {
  let generatedContent = "";

  // Helper function to iterate over data and generate content
  async function iterateAndGenerate(data: BookStructure): Promise<void> {
    console.log("Processing Book Structure...");

    // Process heading --- this part of the code generates heading for the bloody book T_T
    console.log(`Generating content for Heading: ${data.heading}...`);
    const headingContent = await introgen(data.heading);
    generatedContent += `\n\n### Heading ###\n${headingContent}`;

    // double for loops to process both topics and subtopics T_T
    for (const [topicIndex, topic] of data.topics.entries()) {
      console.log(`Generating content for Topic ${topicIndex + 1}: ${topic.topic}...`);
      const topicContent = await topicdev(topic.topic);
      generatedContent += `\n\n### Topic ${topicIndex + 1}: ${topic.topic} ###\n${topicContent}`;

      for (const [subtopicIndex, subtopic] of topic.subtopics.entries()) {
        console.log(
          `Generating content for Subtopic ${subtopicIndex + 1} of Topic ${topicIndex + 1}: ${subtopic.title}...`
        );
        const subtopicContent = await subtopicdev(
          `Title: ${subtopic.title}\nBrief: ${subtopic.brief}`
        );
        generatedContent += `\n\n#### Subtopic ${subtopicIndex + 1}: ${subtopic.title} ####\n${subtopicContent}`;
      }
    }
  }

  // Call the helper function
  await iterateAndGenerate(jsonData);

  return generatedContent;
}

export { process_book_struct };
