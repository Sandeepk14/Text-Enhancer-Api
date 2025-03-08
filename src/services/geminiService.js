const axios = require("axios");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const getEnhancedText = async (text, modificationType, modelType = "flash") => {
  try {
    const modelName =
      modelType === "pro" ? "gemini-1.5-pro" : "gemini-1.5-flash";
    const url = `https://generativelanguage.googleapis.com/v1/models/${modelName}:generateContent?key=${GEMINI_API_KEY}`;

    const prompt = generatePrompt(text, modificationType);
    console.log("📝 Sending request to Gemini API with prompt:", prompt);

    const response = await axios.post(url, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    console.log(
      "✅ Gemini API response received:",
      JSON.stringify(response.data, null, 2)
    );

    if (
      !response.data ||
      !response.data.candidates ||
      response.data.candidates.length === 0
    ) {
      throw new Error("Invalid response from Gemini API: No candidates found.");
    }

    const contentParts = response.data.candidates[0]?.content?.parts;
    if (!contentParts || contentParts.length === 0) {
      throw new Error("No text content found in Gemini API response.");
    }

    const fullResponse = contentParts
      .map((part) => part.text)
      .join(" ")
      .trim();
    const bestEnhancedText = extractBestEnhancedSentence(fullResponse);

    return bestEnhancedText || "No response from Gemini API";
  } catch (error) {
    console.error(
      "❌ Error with Gemini API:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Gemini API request failed");
  }
};

// Function to extract the best enhanced text
const extractBestEnhancedSentence = (text) => {
  const matches = text.match(/\* (.*?)\n/g) || text.match(/"(.*?)"/g);

  if (matches && matches.length > 0) {
    return matches[0].replace(/[*"]/g, "").trim();
  }

  const firstSentence = text.split(". ")[0] + ".";
  return firstSentence !== "." ? firstSentence : "No enhanced sentence found.";
};

const generatePrompt = (text, type) => {
  switch (type) {
    case "shorten":
      return `Make the following text more concise:\n\n"${text}"\n\nProvide only the improved version.`;
    case "lengthen":
      return `Expand the following text with more details:\n\n"${text}"\n\nProvide only the improved version.`;
    case "formal":
      return `Rewrite the following text in a formal tone:\n\n"${text}"\n\nProvide only the improved version.`;
    case "casual":
      return `Rewrite the following text in a casual tone:\n\n"${text}"\n\nProvide only the improved version.`;
    default:
      return `Improve the following text with better vocabulary and clarity:\n\n"${text}"\n\nProvide only the improved version.`;
  }
};

module.exports = { getEnhancedText };
