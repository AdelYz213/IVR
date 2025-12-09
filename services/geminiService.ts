import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToConcierge = async (
  message: string, 
  history: { role: 'user' | 'model'; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    return "Le service de conciergerie est actuellement indisponible (Clé API manquante).";
  }

  try {
    const model = ai.models;
    
    const systemInstruction = `
      Tu es "Louis", le concierge expert automobile de l'agence "Ivory Rentline".
      Ton style est direct, expert, passionné de mécanique allemande et très courtois.
      
      Tu dois absolument promouvoir notre flotte exclusive actuelle :
      1. Audi RS6 Avant (Le break de chasse ultime, 600ch).
      2. Mercedes-AMG E63 S (Berline brutale, mode drift, V8).
      3. Mercedes-AMG GLC 63 S E Performance (SUV Hybride technologique, 680ch).
      4. Volkswagen Golf 8.5 R (La compacte sportive par excellence, polyvalente).

      Si le client demande autre chose (Ferrari, Porsche), explique poliment que Ivory Rentline se spécialise actuellement dans la "Performance Allemande" (German Engineering) pour offrir le meilleur compromis luxe/sportivité.
      
      Objectif : Orienter vers une réservation.
      Donne des détails techniques si demandé (0-100, couple, moteur).
    `;

    const response = await model.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        ...history, 
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Je suis désolé, je n'ai pas pu traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Une erreur est survenue. Veuillez réessayer plus tard.";
  }
};