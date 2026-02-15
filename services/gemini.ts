
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const translateText = async (text: string, targetLang: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following UI text to ${targetLang}. Only return the translated text, nothing else: "${text}"`,
      config: {
        temperature: 0.1,
      }
    });
    return response.text || text;
  } catch (error) {
    console.error("Translation Error:", error);
    return text;
  }
};

export const generateProductDescription = async (productName: string, category: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a compelling 2-sentence marketing description for a product named "${productName}" in the "${category}" category.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Failed to generate AI description.";
  }
};

export const analyzeSalesData = async (salesSummary: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this sales summary and provide 3 brief actionable insights for an e-commerce store owner: ${salesSummary}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Analysis Error:", error);
    return ["Focus on high-stock items", "Optimize electronics category", "Review shipping costs"];
  }
};
