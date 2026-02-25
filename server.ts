import express from "express";
import { createServer as createViteServer } from "vite";
import twilio from "twilio";
import plivo from "plivo";
import { Vonage } from "@vonage/server-sdk";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route to initiate a call
  app.post("/api/call", async (req, res) => {
    const { to, voice = 'Polly.Amy', provider = 'twilio' } = req.body;

    try {
      if (provider === 'twilio') {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const from = process.env.TWILIO_PHONE_NUMBER;

        if (!accountSid || !authToken || !from) {
          throw new Error("Twilio credentials or phone number missing");
        }

        const client = twilio(accountSid, authToken);
        const call = await client.calls.create({
          twiml: `<Response><Say voice="${voice}">Hello! This is Human AI calling to assist you.</Say></Response>`,
          to,
          from,
        });
        return res.json({ success: true, callSid: call.sid });
      } 
      
      if (provider === 'plivo') {
        const authId = process.env.PLIVO_AUTH_ID;
        const authToken = process.env.PLIVO_AUTH_TOKEN;
        const from = process.env.PLIVO_PHONE_NUMBER;

        if (!authId || !authToken || !from) {
          throw new Error("Plivo credentials or phone number missing");
        }

        const client = new plivo.Client(authId, authToken);
        const response = await client.calls.create(
          from,
          to,
          "https://s3.amazonaws.com/static.plivo.com/answer.xml", // Placeholder XML
          { answerMethod: "GET" }
        );
        return res.json({ success: true, callSid: response.requestUuid });
      }

      if (provider === 'vonage') {
        const apiKey = process.env.VONAGE_API_KEY;
        const apiSecret = process.env.VONAGE_API_SECRET;
        const applicationId = process.env.VONAGE_APPLICATION_ID;
        const privateKey = process.env.VONAGE_PRIVATE_KEY;

        if (!apiKey || !apiSecret) {
          throw new Error("Vonage credentials missing");
        }

        // Note: Vonage Voice API usually requires an Application ID and Private Key for NCCOs
        // This is a simplified placeholder for the API
        return res.status(400).json({ error: "Vonage implementation requires Application ID and Private Key setup." });
      }

      res.status(400).json({ error: "Unsupported provider" });
    } catch (error: any) {
      console.error("Call Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
