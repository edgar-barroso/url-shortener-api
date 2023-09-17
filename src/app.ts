import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { urlRoutes } from "./http/router/routes";

export const app = fastify();


app.register(urlRoutes);

app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: "Validation error", issues: error.format() });
    }

    if (env.NODE_ENV !== "production") {
        console.error(error);
    } else {
        // fazer o log para uma ferramenta externa ex: DataDog/NewReplic/Sentry
    }

    return reply.status(500).send({ message: "Internal server error." });
});
