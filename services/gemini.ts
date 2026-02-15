
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Gemini AI client using the environment variable.
// NO API KEY IS HARDCODED IN THIS FILE. 
// For deployment, add API_KEY to your Vercel Environment Variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const translateText = async (text: string, targetLang: string) => {
  // Graceful fallback for demo purposes if no API key is provided
  if (!process.env.API_KEY) return text;
  
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
    console.warn("AI Translation skipped: No valid API key or limit reached.");
    return text;
  }
};

export const generateProductDescription = async (productName: string, category: string) => {
  if (!process.env.API_KEY) return `A premium quality ${productName} perfect for any occasion. Designed with comfort and style in mind.`;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a compelling 2-sentence marketing description for a product named "${productName}" in the "${category}" category.`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "Quality assurance guaranteed.";
  } catch (error) {
    return "Experience the perfect blend of performance and luxury with our latest collection.";
  }
};

export const analyzeSalesData = async (salesSummary: string) => {
  const dummyInsights = [
    "High demand for accessories this month.",
    "Customer retention is up by 12%.",
    "Inventory turnover is optimal."
  ];

  if (!process.env.API_KEY) return dummyInsights;

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
    return dummyInsights;
  }
};
