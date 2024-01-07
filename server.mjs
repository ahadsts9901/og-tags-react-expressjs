import express from "express";
import path from "path";
import fs from "fs";
import { baseUrl, getProductById } from "./function.mjs";

const __dirname = path.resolve();

const app = express();

const indexPath = path.resolve(__dirname, "./dist/index.html");
const publicPath = path.resolve(__dirname, "dist");
app.use(express.static(publicPath));

app.get("/", async(req, res, next) => {

    console.log("hello 1");

    fs.readFile(indexPath, "utf8", async(err, htmlData) => {
        if (err) {
            console.error("Error during file reading", err);
            return res.status(404).end();
        }

        htmlData = htmlData
            .replace("__TITLE__", "Fakestore")
            .replace("__DESCRIPTION__", "Fakestore web for practice")
            .replace(
                "__IMAGE__",
                "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            )
            .replace("__URL__", `${baseUrl}`)
            .replace("__URL__", `${baseUrl}`)
            .replace("__URL__", `${baseUrl}`)
            .replace("__TITLE__", "Fakestore")
            .replace("__DESCRIPTION__", "Fakestore web for practice")
            .replace(
                "__IMAGE__",
                "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            );
        return res.send(htmlData);
    });
});

app.get("/:id", async(req, res, next) => {
    fs.readFile(indexPath, "utf8", async(err, htmlData) => {
        if (err) {
            console.error("Error during file reading", err);
            return res.status(404).end();
        }

        // get post info
        const productId = req.params.id;
        try {
            const product = await getProductById(productId);
            if (!product) {
                // inject meta tags
                htmlData = htmlData
                    .replace("__TITLE__", "Fakestore")
                    .replace("__DESCRIPTION__", "Fakestore web for practice")
                    .replace(
                        "__IMAGE__",
                        "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    )
                    .replace("__URL__", `${baseUrl}`)
                    .replace("__URL__", `${baseUrl}`)
                    .replace("__URL__", `${baseUrl}`)
                    .replace("__TITLE__", "Fakestore")
                    .replace("__DESCRIPTION__", "Fakestore web for practice")
                    .replace(
                        "__IMAGE__",
                        "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    );
                return res.send(htmlData);
            } else {
                // inject meta tags
                htmlData = htmlData
                    .replace(
                        "<title>Fakestore</title>",
                        `<title>${product.title}</title>`
                    )
                    .replace("__TITLE__", product.title)
                    .replace("__DESCRIPTION__", product.description)
                    .replace("__IMAGE__", product.image)
                    .replace("__URL__", `${baseUrl}/${productId}`)
                    .replace("__URL__", `${baseUrl}`)
                    .replace("__URL__", `${baseUrl}`)
                    .replace("__TITLE__", product.title)
                    .replace("__DESCRIPTION__", product.description)
                    .replace("__IMAGE__", product.image);

                return res.send(htmlData);
            }
        } catch (error) {
            console.log(error);
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        return console.log("Error during app startup", error);
    }
    console.log("listening on " + PORT + "...");
});