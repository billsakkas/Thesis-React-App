import { createRouter } from "./context";
import { z } from "zod";

export const contactFormRouter = createRouter().mutation("contactForm", {
  input: z.object({
    name: z.string(),
    email: z.string(),
    message: z.string(),
  }),
  async resolve({ input }) {
    return {
      response: "Your message has been sent!",
    };
  },
});
